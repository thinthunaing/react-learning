import { Link } from "react-router-dom"
import Header from "./Header"
import { Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        </>
              
    )
}