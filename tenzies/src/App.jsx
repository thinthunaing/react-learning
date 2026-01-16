import { useState, useRef, useEffect } from 'react'
import './App.css'
import Die from './Die.jsx'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  
  const generateAllNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(
       {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
       }
        
      )
    }
    return newDice
  }

  const [dice, setDice] = useState( generateAllNewDice() )
  const gameWon = dice.every( die => die.isHeld ) && dice.every( die => die.value === dice[0].value )
  const newGameButtonRef = useRef(null);

  function handleRoll() {
    if (gameWon) {
      setDice( generateAllNewDice() )
      return
    }else{
    setDice( oldDice => oldDice.map(
        die => {
          return die.isHeld ? die : {
            ...die,
            value: Math.ceil(Math.random() * 6),
            
          }
        }
    ))
  }
}

useEffect(() => {
    if (gameWon) {
      newGameButtonRef.current.focus();
    }
  }, [gameWon]);
  function holdDie(id) {
    setDice( prev => prev.map( die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map( die => <Die 
                                            value={die.value} 
                                            isHeld={die.isHeld} 
                                            key={die.id} 
                                            holdDie={holdDie} 
                                            id={die.id}
                                            /> )
  
  return (
    <main>
      {gameWon && <Confetti />}
       <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <div className="button-container">
        <button className="roll-dice" ref={newGameButtonRef} onClick={handleRoll}>{gameWon ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}

export default App
