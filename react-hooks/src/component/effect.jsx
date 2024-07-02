import { useEffect, useState } from "react"

function EffectComp() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
        console.log("Hello World");
    }, [number])

    return (
        <div>
            <h2>You clicked {count} times</h2>
            <h2>Number {number}</h2>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
        </div>
    )
}

export default EffectComp