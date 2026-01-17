import './App.css'
import {languages} from './language.js'

function App() {
  
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
  return (
    <>
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
     
    </>
  )
}

export default App
