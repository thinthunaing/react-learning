import { createContext, useState } from "react";

const ToggleContext = createContext();

export default function({children}) {
    const [on, setOn] = useState(false);

    function toggle(){
        setOn(prevOn => !prevOn);
        console.log("Toggled:", !on);
    }

    return (
       <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext };