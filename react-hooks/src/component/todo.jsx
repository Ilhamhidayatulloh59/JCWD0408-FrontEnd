import { memo } from "react";

function Todos({ todos, addTodo }) {
  console.log("child render");
  return (
    <div>
      <h2>My Todo</h2>
      {todos.map((item, idx) => {
        return <p key={idx} >{item}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default memo(Todos)