import { createContext, useEffect, useRef, useState } from "react";
import useEffectOnUpdate from "../hooks/useEffectOnUpdate.jsx";
import useToggle from "../hooks/useToggle.jsx";

const ToggleContext = createContext();

export default function({children, onToggle}) {
    const [on, toggle] = useToggle();

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