import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <h1>About Page</h1>
            <div className="flex gap-5" >
                <Link href={"/"}>Home</Link>
                <Link href={"/profile"}>Profile</Link>
            </div>
        </div>
    )
}