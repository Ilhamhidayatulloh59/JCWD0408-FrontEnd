import { IUser } from "./tableUser"

export default async function TableUserServer() {
    const res = await fetch('http://localhost:2000/users', {
        method: 'GET',
        next: { tags: ['users'] }
    })
    const user = await res.json()
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
                        user.map((item: IUser) => {
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