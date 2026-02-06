import ToggleOff from "./Toggle/ToggleOff"
import ToggleOn from "./Toggle/ToggleOn"
import ToggleButton from "./Toggle/ToggleButton"
import Toggle from "./Toggle/Toggle"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "./hooks/useToggle.jsx"

export default function Star({onChange}) {

  const [on, toggle] = useToggle();
    
  
    return (
      on ? 
      <BsStarFill onClick={() => { toggle() }} /> : 
      <BsStar onClick={() => { toggle() }} />
    )
}