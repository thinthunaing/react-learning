import './App.css'

import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"
import MenuItem from "./Menu/MenuItem"
import { BsStar, BsStarFill } from "react-icons/bs"

import Toggle from './Toggle/Toggle.jsx'
import ToggleButton from './Toggle/ToggleButton.jsx'
import ToggleOn from './Toggle/ToggleOn.jsx'
import ToggleOff from './Toggle/ToggleOff.jsx'
import Star from "./Star.jsx"
import ToggleDisplay from './Toggle/ToggleDisplay.jsx'




export default function App() {

 const items = ["Tennis", "Pickleball", "Racquetball", "Squash", "Badminton"]

 

  return (

     <>
      <Star onChange={() => { console.log("Star toggled!") }} />
      
      <Menu onOpen={()=>console.log('opened') }>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {items.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
      
       <Toggle>
        <ToggleButton>
          <ToggleDisplay>

            {(on) => (
              on ?  <div className="box filled"></div>:  <div className="box"></div>
            )}
          </ToggleDisplay>


         
        </ToggleButton>
      </Toggle>

      


   

      </>
  )
}