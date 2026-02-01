import Button from "../Button/Button"
import { useContext } from "react"
import { MenuContext } from "./Menu.jsx"

export default function MenuButton({ children }) {
    const { toggle } = useContext(MenuContext);
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}