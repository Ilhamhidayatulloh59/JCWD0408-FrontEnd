import ListTodo from "@/components/listTodo";

export default function Home() {
  return (
    <div className="min-h-screen flex py-[50px] flex-col items-center">
      <h1 className="text-orange-400 font-extrabold text-5xl">
        TODO LIST APP
      </h1>
      <div className="flex gap-[100px]">
        <ListTodo />
      </div>
    </div>
  );
}
