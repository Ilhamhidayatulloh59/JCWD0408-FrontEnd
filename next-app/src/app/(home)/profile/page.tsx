import CounterComp from "@/components/counter";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="min-h-screen">
            <h1>Profile Page</h1>
            <CounterComp />
            <div className="flex gap-5" >
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
            </div>
        </div>
    )
}