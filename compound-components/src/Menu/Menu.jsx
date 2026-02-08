/**
 * Menu component
 *
 * - Owns the menu open/close state
 * - Creates and provides MenuContext
 * - Shares `open`, `toggle`, and `menuId` with its children
 *
 * This component acts as the "controller" for the menu system.
 * Child components (MenuButton, MenuDropdown) consume the context
 * instead of receiving props directly (no prop drilling).
 *
 * `useId` is used to generate a unique id so the button and dropdown
 * can be correctly linked for accessibility (ARIA).
 */
import useToggle from "../hooks/useToggle.jsx";
import { createContext } from "react";

const MenuContext = createContext();
export { MenuContext };

export default function Menu({ children, onOpen }) {

  const [open, toggle] = useToggle();
  
    return (
      <MenuContext.Provider value={{ open, toggle }}>
        <div className="menu" role="menu">
           {children}
        </div>
      </MenuContext.Provider>
     
    )
}

  


       

