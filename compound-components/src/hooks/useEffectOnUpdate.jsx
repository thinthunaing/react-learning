import {useEffect, useRef} from 'react';

export default function useEffectOnUpdate(effect, deps) {
    const firstRender = useRef(true);

    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      effect(); 
    }, deps);
}
  