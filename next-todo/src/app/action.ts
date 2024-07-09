'use server'

import { MyFormValue } from "@/components/addTodo"
import { revalidateTag } from "next/cache"

export const addTodo = async (values: MyFormValue) => {
    await fetch("http://localhost:2000/todo", {
        method: "POST",
        body: JSON.stringify({
            desc: values.todo,
            isCompleted: false
        })
    })
    revalidateTag("todo")
}

export const getTodo = () => {
    revalidateTag("todo")
}