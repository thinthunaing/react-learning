import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"
import MenuItem from "./Menu/MenuItem"




export default function App() {

 const items = ["Tennis", "Pickleball", "Racquetball", "Squash", "Badminton"]

 

  return (

     <>
      <Menu>
        <MenuButton>
          Sports
        </MenuButton>
        <MenuDropdown> 
          {items.map(item=> <MenuItem key={item}>{item}</MenuItem>)}
        </MenuDropdown>
      </Menu>
    </>
  )
}