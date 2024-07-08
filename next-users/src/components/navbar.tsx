import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-[50px] flex justify-center items-center gap-10 bg-green-500">
            <Link href={"/users"}>User</Link>
            <Link href={"/register"}>Register</Link>
        </div>
    )
}