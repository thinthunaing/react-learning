import { useState } from 'react';
import {clsx} from 'clsx';
import './App.css'
import {languages} from './language.js'
import {getFarewellText} from './utils.js';
import {generateRandomWord} from './utils.js';

function App() {


  //state values
   const [currentWord, setCurrentWord] = useState(() => generateRandomWord());
   const [guessLetters, setGuessLetters] = useState([]);
   
   //derived values
  const wrongGuessCount = guessLetters.filter((letter => !currentWord.includes(letter))).length;
  const guessesLeft = languages.length - 1;


  const maxWrongGuesses = guessesLeft;
  const isGameWon = currentWord.split("").every( (letter) => guessLetters.includes(letter) );

  const isGameLost = wrongGuessCount >= maxWrongGuesses;
  const isGameOver = isGameWon || isGameLost;

  const farewellMessages = [];
  const lastGuessedLetter = guessLetters[guessLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  
   
  //word display
  const wordArray = currentWord.split("");
  const word = wordArray.map( (letter,index)=>{
    return(
      <span key={index} className='letter-box'>
        {guessLetters.includes(letter) ? letter.toUpperCase() : ''}
      </span>
    )
  })

  
  // Language Chips
  const language = languages.map((lang, index)=>{
    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }
    let isEliminated = index < wrongGuessCount;
    isEliminated && farewellMessages.push(lang.name);

    const className = clsx(
      "chip",{
        lost: isEliminated
      }
    )

    return(
      <span key={lang.name} style={style} className={className}>
        {lang.name}
      </span>
    )
  })


  //keyboard
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const alphabetArray = alphabet.split("");
  
  const keyboard = alphabetArray.map((letter)=>{
    
  
    const isGuessed = guessLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    let className=clsx(
        "key-button",{
        correct: isCorrect,
        wrong: isWrong
      }
      )

    return(
      <button 
        key={letter} 
        className={className} 
        onClick={()=>handleKey(letter)} 
        disabled={isGameOver} 
        aria-disabled={guessLetters.includes(letter)}
        aria-label={`Letter ${letter}`}>
        
      {letter.toUpperCase()}

      </button>
    )
  })

  function handleKey(letter){
    setGuessLetters(
      prevLetter => prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    )
  }

  function handleNewGame(){
    setCurrentWord(generateRandomWord());
    setGuessLetters([]);
  }

  let className=clsx(
      "game-status",{
      correct: isGameWon,
      wrong: isGameLost,
      farewell : !isGameOver && isLastGuessIncorrect
    }
    )

  //game status display

  function renderGameStatus() {

         
      if (!isGameOver && isLastGuessIncorrect) {
            const message = getFarewellText(farewellMessages.join(','));
            return (
                <p className="farewell-message">{message}</p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
      
          
        }
    
  
  return (
    <>
    <div className="assembly-app"> 
      <header>
      <h1>Assembly: Endgame</h1>
      <p>Guess the word in under 8 attempts to keep 
         the programming world safe from Assembly!</p>
      </header>
      <section 
          className={className}
          aria-live="polite"
          role='status'
      >
        {renderGameStatus()}
      </section>
      <section className='language-chip'>
        {language}
      </section>
      <section className='word-container'>
        {word}
      </section>
      <section
        className='sr-only'
        aria-live="polite"
        role='status'
      >
        <p>
          {currentWord.includes(lastGuessedLetter) ?
            `Correct! The letter "${lastGuessedLetter}" is in the word.` :
            `Sorry, the letter "${lastGuessedLetter}" is not in the word.`
          }
         You have {maxWrongGuesses - wrongGuessCount} guesses left.
        </p>
        <p> Current words : 
          {currentWord.split("").map(letter => 
              guessLetters.includes(letter) ? letter: "blank")
              .join("")}
        </p>
      </section>
      <section className='keyboard-container'>
        {keyboard}
      </section>
      {isGameOver && <button className='new-game' onClick={handleNewGame}>New Game</button>}
    </div>
    </>
  )
}

export default App
