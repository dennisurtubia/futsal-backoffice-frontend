import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const useDidMountUpdate = (func:Function, deps:Array<unknown>) => {
    const didMount = useRef(false);
    const didMountStrictMode = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            if(didMountStrictMode.current) {
                func();
            }
            else didMountStrictMode.current = true;
        }
        else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

export default useDidMountUpdate;