import React from "react"


export default function Menu({ children, buttonText, items }) {
    /**
     * Note: leave the div className="menu" here and render
     * the children inside that div. Notice this component will become
     * significantly simpler by doing so 💡
     * 
     * Also, notice our state will be broken after we make 
     * these changes - that's okay! We'll fix it soon. In the meantime,
     * leave the useState() call and toggle() definitions alone. Your
     * new version won't be using them, but we'll come back to them
     * later.
     */
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
       

