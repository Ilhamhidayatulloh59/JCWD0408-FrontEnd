'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export interface IUser {
    id: string
    name: string
    email: string
    password: string
}

export default function TableUser() {
    const [user, setUser] = useState<IUser[]>([])

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:2000/users')
            console.log(res.data);
            setUser(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td className="min-w-[100px]">{item.name}</td>
                                    <td className="min-w-[150px]">{item.email}</td>
                                    <td className="min-w-[100px]">{item.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}