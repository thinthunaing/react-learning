import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"
import MenuItem from "./Menu/MenuItem"
import { BsStar, BsStarFill } from "react-icons/bs"

import Toggle from './Toggle/Toggle.jsx'
import ToggleButton from './Toggle/ToggleButton.jsx'
import ToggleOn from './Toggle/ToggleOn.jsx'
import ToggleOff from './Toggle/ToggleOff.jsx'




export default function App() {

 const items = ["Tennis", "Pickleball", "Racquetball", "Squash", "Badminton"]

 

  return (

     <>

      <Toggle>
        <ToggleButton>
          <ToggleOn>
            <BsStarFill className="star filled" />
          </ToggleOn>
          <ToggleOff>
            <BsStar className="star" />
          </ToggleOff>
        </ToggleButton>
      </Toggle>

      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {items.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
      

      


   

      </>
  )
}