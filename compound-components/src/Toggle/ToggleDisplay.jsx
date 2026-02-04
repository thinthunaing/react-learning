import { ToggleContext } from "./Toggle"
import { useContext } from "react"

export default function ToggleDisplay({ children }) {
    const {on} = useContext(ToggleContext);
    return children(on);
}