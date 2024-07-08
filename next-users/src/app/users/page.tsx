import TableUser from "./_components/tableUser";
import TableUserServer from "./_components/tableUserServer";

export default function UserPage() {
    return (
        <div className="min-h-screen flex justify-center">
            <TableUser />
            <TableUserServer />
        </div>
    )
}