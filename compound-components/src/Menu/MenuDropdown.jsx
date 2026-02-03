import ToggleOn from "../Toggle/ToggleOn";


export default function MenuDropdown({ children}) {

    return (
        <ToggleOn>
            <div className="menu-dropdown" >
                {children}
            </div>
        </ToggleOn> 
    )
}