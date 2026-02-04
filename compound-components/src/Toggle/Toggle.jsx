import { createContext, useEffect, useRef, useState } from "react";

const ToggleContext = createContext();

export default function({children, onToggle}) {
    const [on, setOn] = useState(false);
    const firstRender = useRef(true);

    function toggle(){
        setOn(prevOn => !prevOn);
        
    }
   


   useEffect(() => {
  if (firstRender.current) {
    firstRender.current = false;
    return;
  }
  onToggle?.();  // ✅ safe
}, [on, onToggle]);

    return (
       <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext };