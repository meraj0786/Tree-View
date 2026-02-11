import React, { useEffect } from 'react'

function useDebounce(value, delay = 500) {
    const [debounce, setDebounce] = React.useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounce(value)
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    },[value,delay])
    return debounce;
}

export default useDebounce