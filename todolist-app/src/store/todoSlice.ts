import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../type'

let todo: ITodo[] = [
    { id: 1, desc: "Coding", isCompleted: false },
    { id: 2, desc: "Eat", isCompleted: false },
    { id: 3, desc: "Sleep", isCompleted: false },
    { id: 4, desc: "Repeat", isCompleted: false },
]

const todoSlice = createSlice({
    name: "todo",
    initialState: todo,
    reducers: {
        onAdd: (state, action: PayloadAction<string>) => {
            let newTodo = {
                id: Math.max(...state.map((item) => item.id)) + 1,
                desc: action.payload,
                isCompleted: false
            }
            state.push(newTodo)
        },
        onDelete: (state, action: PayloadAction<number>) => {
            const idx = state.findIndex((item) => item.id == action.payload)
            state.splice(idx, 1)
        },
        onDone: (state, action: PayloadAction<number>) => {
            const idx = state.findIndex((item) => item.id == action.payload)
            state[idx].isCompleted = !state[idx].isCompleted
        }
    }
})

export const { onAdd, onDelete, onDone } = todoSlice.actions
export default todoSlice.reducer
