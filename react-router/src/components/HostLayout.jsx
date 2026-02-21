import { Link } from "react-router-dom"

import { Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <>
        <p>Host Layout</p>
        <Outlet />
        </>
              
    )
}