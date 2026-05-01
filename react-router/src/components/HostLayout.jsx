import { NavLink } from "react-router-dom"

import { Outlet } from "react-router-dom"
import Footer from "./Footer"
export default function Layout() {
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => isActive ? "my-link" : null }
                     >
                Dashboard
                </NavLink>
                <NavLink 
                    to="income" 
                    className={({isActive}) => isActive ? "my-link" : null }
                    >
                Income
                </NavLink>
                <NavLink 
                    to="vans" 
                    className={({isActive}) => isActive ? "my-link" : null }
                    >
                Vans
                </NavLink>
                <NavLink 
                    to="reviews" 
                    className={({isActive}) => isActive ? "my-link" : null }

                   >
                Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
              
    )
}