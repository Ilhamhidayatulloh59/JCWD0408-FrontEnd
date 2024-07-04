import Link from "next/link";

export default function DetailUser({ params }: { params: { user: string } }) {
    return (
        <div className="min-h-screen">
            <h1>Detail User</h1>
            <h2>User : {params.user}</h2>
            <Link href={"/users"}>back</Link>
        </div>
    )
}