import ToggleOff from "./Toggle/ToggleOff"
import ToggleOn from "./Toggle/ToggleOn"
import ToggleButton from "./Toggle/ToggleButton"
import Toggle from "./Toggle/Toggle"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star({onChange}) {
    
  
    return (
       <Toggle onToggle={onChange}>
               <ToggleButton>
                 <ToggleOn>
                   <BsStarFill className="star filled" />
                 </ToggleOn>
                 <ToggleOff>
                   <BsStar className="star" />
                 </ToggleOff>
               </ToggleButton>
             </Toggle>
    )
}