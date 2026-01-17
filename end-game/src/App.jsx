import { useState } from 'react'
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

   const [currendyWord, setCurrentWord] = useState("accomplish");

   const wordArray = currendyWord.split("");
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
    return(
      <button key={letter} className='key-button'>
        {letter.toUpperCase()}
      </button>
    )
  })


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
