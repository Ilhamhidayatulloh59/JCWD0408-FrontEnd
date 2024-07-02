import { useState } from 'react'

function StateComp() {
    const [count, setCount] = useState(0)
    const decrement = () => setCount(count - 1)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default StateComp
