import useCounter from "../hooks/counter";

function CustomComp() {
  const [count, increment, decrement] = useCounter(10, 5);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default CustomComp
