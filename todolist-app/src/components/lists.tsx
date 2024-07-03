import { useRef, useState } from "react"
import Todo from "./todo"
import { ITodo } from "../type"

function Lists() {
    const [todo, setTodo] = useState<ITodo[]>([
        { id: 1, desc: "Coding", isCompleted: false },
        { id: 2, desc: "Eat", isCompleted: false },
        { id: 3, desc: "Sleep", isCompleted: false },
        { id: 4, desc: "Repeat", isCompleted: false },
    ])
    const inputRef = useRef<null | HTMLInputElement>(null)

    const handleAdd = () => {
        if (inputRef.current) {
            let newTodo = {
                id: Math.max(...todo.map((item) => item.id)) + 1,
                desc: inputRef.current?.value!,
                isCompleted: false
            }
            setTodo((t) => [...t, newTodo ])
        }
    }

    const handleDelete = (id: number): void => {
        const newArr = todo.filter((item) => item.id !== id)
        setTodo(newArr)
    }

    const handleDone = (id: number): void => {
        const newArr = todo.map((item) => {
            if (item.id == id) {
                return { ...item, isCompleted: !item.isCompleted }
            }
            return { ...item }
        })
        console.log(newArr);
        setTodo(newArr)
    }

    return (
        <div className="flex min-h-screen flex-col items-center py-[50px]">
            <p className="text-5xl font-extrabold">To<span className="text-green-500">Do</span> List App</p>
            <div className="flex flex-col gap-2 my-[50px]">
                {todo.map((item) => {
                    return <Todo todo={item} onDelete={handleDelete} onDone={handleDone} />
                })}
            </div>
            <p className="text-4xl font-bold mb-[10px]">Done : {todo.filter((item) => item.isCompleted == true).length}</p>
            <div className="flex gap-6">
                <input type="text" placeholder="add todo here" ref={inputRef} className="border border-green-500 h-[35px] min-w-[250px] placeholder:px-[5px]" />
                <button onClick={handleAdd} className="bg-green-500 px-[5px] text-[12px] rounded-md">Add Todo</button>
            </div>
        </div>
    )
}

export default Lists