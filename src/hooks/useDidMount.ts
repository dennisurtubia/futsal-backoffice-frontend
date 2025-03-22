import { useEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const useDidMount = (func: Function, deps?: Array<unknown>) => {
    const didComponentMount = useRef(false)

    useEffect(() => {
        if (!didComponentMount.current) {
            func()
            didComponentMount.current = true
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}

export default useDidMount;