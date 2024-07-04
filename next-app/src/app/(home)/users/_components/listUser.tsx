"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ListUser() {
    const router = useRouter()
    const [user] = useState<string[]>(["andi", "budi", "caca", "david"])
    return (
        <div className="flex gap-5">
            {user.map((item) => {
                return (
                    <div key={item}>
                        <button onClick={() => router.push(`/users/${item}`)}>
                            {item}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}