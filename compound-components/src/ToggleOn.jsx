import { useContext } from "react"
import { ToggleContext } from "./Toggle.jsx"

export default function ToggleOn({ children }) {
    const { on } = useContext(ToggleContext);

    if (!on) return null;

    return <div>{children}</div>
}