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
import Toggle from "../Toggle/Toggle"

export default function Menu({ children, onOpen }) {
  
    return (
      <Toggle onToggle={onOpen}>
        <div className="menu" role="menu">
           {children}
        </div>
      </Toggle>
    )
}

  


       

