import { useContext } from "react"
import { MenuContext } from "./Menu.jsx"

export default function MenuDropdown({ children}) {
    const { open, menuId } = useContext(MenuContext);
    return (
        open ? (<div className="menu-dropdown" id={menuId}>
            {children}
        </div>) : null
    )
}