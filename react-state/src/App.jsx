import "./App.css";
import { useEffect, useState } from "react";
import DisplayCounter from "./components/displayCount";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementBy, reset } from "./store/counterSlice";

function App() {
  const dispatch = useDispatch()

  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }
  // const decrement = () => {
  //   setCounter(counter - 1);
  // };
  // const reset = () => {
  //   setCounter(0);
  // };

  // useEffect(() => {
  //   console.log("Hello World")
  //   localStorage.setItem("counter", counter)
  // }, [counter])

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementBy(5))}>increment by 5</button>
      <DisplayCounter />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
