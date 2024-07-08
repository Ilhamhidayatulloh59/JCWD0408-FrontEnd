'use server'

import { revalidateTag } from "next/cache"
import { InitialValues } from "./register/page"

export const onAdd = async (values: InitialValues) => {
    await fetch('http://localhost:2000/users', {
        method: 'POST',
        body: JSON.stringify(values)
    })
    revalidateTag('users')
}