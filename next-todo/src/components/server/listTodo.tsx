import { ITodo } from "@/type"

export default async function ListTodoServer() {
    const res = await fetch("http://localhost:2000/todo", {
        method: "GET",
        // cache: 'no-store'
        // next: { revalidate: 60 }
        next: { tags: ['todo'] }
    })
    const todo = await res.json()

    return (
        <div className="flex flex-col gap-2 mt-[30px]">
                { todo.map((item: ITodo) => {
                    return (
                        <div className="flex w-[300px] items-center justify-between">
                            <input type="checkbox" checked={item.isCompleted} readOnly />
                            <p>{item.desc}</p>
                            <button>delete</button>
                        </div>
                    )
                }) }
            </div>
    )
}