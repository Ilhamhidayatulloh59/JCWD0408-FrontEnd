import { useEffect, useRef } from "react"

function RefComp() {
    const inputRef = useRef()
    const handleSubmit = () => {
        console.log(inputRef.current.value)
        inputRef.current.value = ""
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default RefComp