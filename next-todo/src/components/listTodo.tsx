"use client"

import { ITodo } from "@/type"
import axios from "axios"
import { useEffect, useState } from "react"
import ItemTodo from "./itemTodo"
import AddTodo from "./addTodo"

export default function ListTodo() {
    const [todo, setTodo] = useState<ITodo[]>([])
    const [reload, setReload] = useState<boolean>(false)

    const getData = async () => {
        try {
            const { data }: { data: ITodo[] } = await axios.get("http://localhost:2000/todo")
            setTodo(data)
        } catch (err) {
            console.log(err);
        }
    }

    const onReload = () => {
        setReload(!reload)
    }

    useEffect(() => {
        getData()
    }, [reload])
    
    return (
        <div>
            <AddTodo onReload={onReload} />
            <div className="flex flex-col gap-2 mt-[30px]">
                { todo.map((item) => {
                    return (
                        <ItemTodo 
                            key={item.id} 
                            item={item} 
                            onReload={onReload} 
                        />
                    )
                }) }
            </div>
        </div>
    )
}