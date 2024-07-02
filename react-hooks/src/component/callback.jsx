import { useCallback, useState } from "react"
import Todos from "./todo"

function CallbackComp() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount(count + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"])
    }, [todos])

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count : {count}
                <button onClick={increment} >Increment</button>
            </div>
        </div>
    )
}

export default CallbackComp