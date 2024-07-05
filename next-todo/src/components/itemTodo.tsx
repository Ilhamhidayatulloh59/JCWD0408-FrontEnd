"use client"
import { ITodo } from "@/type";
import axios from "axios";

interface IProps { 
    item: ITodo 
    onReload: () => void
}

export default function ItemTodo({ item, onReload }: IProps) {
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:2000/todo/${id}`)
            onReload()
        } catch (err) {
            console.log(err);
        }
    }
    const handleDone = async (id: string, isCompleted: boolean) => {
        try {
            await axios.patch(`http://localhost:2000/todo/${id}`, {
                isCompleted: !isCompleted
            })
            onReload()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="flex w-[300px] items-center justify-between">
            <input onClick={() => handleDone(item.id, item.isCompleted)} type="checkbox" checked={item.isCompleted} readOnly />
            <p>{item.desc}</p>
            <button onClick={() => handleDelete(item.id)}>delete</button>
        </div>
    )
}