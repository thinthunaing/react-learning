import { useState } from 'react';
import {clsx} from 'clsx';
import './App.css'
import {languages} from './language.js'

function App() {

  // Language Chips
  const language = languages.map((lang)=>{
    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }
    return(
      <span key={lang.name} style={style} className='chip'>
        {lang.name}
      </span>
    )
  })

   const [currentWord, setCurrentWord] = useState("accomplish");
   const [guessLetters, setGuessLetters] = useState([]);

   const wordArray = currentWord.split("");
   const word = wordArray.map( (letter,index)=>{
    return(
      <span key={index} className='letter-box'>
        {letter.toUpperCase()}
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
      <button key={letter} className={className} onClick={()=>handleKey(letter)}>
        {letter.toUpperCase()}
      </button>
    )
  })

  function handleKey(letter){
    setGuessLetters(
      prevLetter => prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    )
  }
  console.log(guessLetters)

  return (
    <>
    <div className="assembly-app"> 
      <header>
      <h1>Assembly: Endgame</h1>
      <p>Guess the word in under 8 attempts to keep 
         the programming world safe from Assembly!</p>
      </header>
      <section className='game-status'>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className='language-chip'>
        {language}
      </section>
      <section className='word-container'>
        {word}
      </section>
      <section className='keyboard-container'>
        {keyboard}
      </section>
      <button className='new-game'>New Game</button>
    </div>
    </>
  )
}

export default App
