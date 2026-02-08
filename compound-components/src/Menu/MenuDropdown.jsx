import { useContext } from "react"
import { MenuContext } from "./Menu.jsx"


export default function MenuDropdown({ children}) {

    const { open } = useContext(MenuContext);

    if (!open) {
        return null;
    }

    return (
     
            <div className="menu-dropdown" >
                {children}
            </div>
    )
}