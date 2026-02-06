import { createContext, useEffect, useRef, useState } from "react";
import useEffectOnUpdate from "../hooks/useEffectOnUpdate.jsx";

const ToggleContext = createContext();

export default function({children, onToggle}) {
    const [on, setOn] = useState(false);
    

    function toggle(){
        setOn(prevOn => !prevOn);
        
    }

    useEffectOnUpdate(() => {
        onToggle?.();
    }, [on]);
   




    return (
       <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext };