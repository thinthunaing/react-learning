import React from "react"


export default function Menu({ children}) {
  
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            {children}
        </div>
    )
}
       

