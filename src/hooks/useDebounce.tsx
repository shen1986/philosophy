import { useState, useEffect } from 'react'

/**
 * 防抖功能
 * @param value 值
 * @param delay 防抖时长
 */
function useDebounce(value: any, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() =>{
        const handler = window.setTimeout(()=> {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;