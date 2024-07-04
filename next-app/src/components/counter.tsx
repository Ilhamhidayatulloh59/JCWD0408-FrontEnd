"use client"
import { useState } from "react"

export default function CounterComp() {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)} >increment</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)} >decrement</button>
        </div>
    )
}