import React from "react"
import { IUser } from "../type"

export const Card: React.FC<{item: IUser}> = ({ item }) => {
    return (
        <div key={item.email}>
            <div>
            {item.name.first}
            </div>
            <img src={item.picture.large} alt={item.name.first} />
        </div>
    )
}