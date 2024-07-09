import { IUser } from "../_components/tableUser"

export async function generateMetadata({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:2000/users/${params.id}`, {
        method: "GET"
    })
    const user: IUser = await res.json()

    return {
        title: `User ${user.name}`,
        description: "User datail"
    }
}

export default async function DetailUserPage({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:2000/users/${params.id}`)
    const user: IUser = await res.json()
    return (
        <div className="min-h-screen flex flex-col items-center">
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.password}</h3>
        </div>
    )
}