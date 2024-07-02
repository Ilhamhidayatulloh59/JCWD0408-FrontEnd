import { useRef, useState } from "react"
import Todo from "./todo"

function Lists() {
    const [todo, setTodo] = useState<string[]>(["Coding", "Eat", "Sleep", "Repeat"])
    const inputRef = useRef<null | HTMLInputElement>(null)

    const handleAdd = () => {
        setTodo((t) => [...t, inputRef.current?.value!])
    }

    return (
        <div className="flex min-h-screen flex-col items-center py-[50px]">
            <p className="text-5xl font-extrabold">To<span className="text-green-500">Do</span> List App</p>
            <div className="flex flex-col gap-2 my-[50px]">
                {todo.map((item) => {
                    return <Todo todo={item} />
                })}
            </div>
            <div className="flex gap-6">
                <input type="text" placeholder="add todo here" ref={inputRef} className="border border-green-500 h-[35px] min-w-[250px] placeholder:px-[5px]" />
                <button onClick={handleAdd} className="bg-green-500 px-[5px] text-[12px] rounded-md">Add Todo</button>
            </div>
        </div>
    )
}

export default Lists