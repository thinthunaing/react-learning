import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Star from './Star.jsx'
import Toggle from './Toggle.jsx'
import ToggleButton from './ToggleButton.jsx'
import ToggleOn from './ToggleOn.jsx'
import ToggleOff from './ToggleOff.jsx'
import { BsStar, BsStarFill } from "react-icons/bs"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toggle>
      <ToggleButton> 
        <ToggleOn>
          <BsStarFill className="star filled"  />
        </ToggleOn>
        <ToggleOff>
          <BsStar className="star " />
        </ToggleOff>
      </ToggleButton>
    </Toggle>
    
  </StrictMode>,
)
