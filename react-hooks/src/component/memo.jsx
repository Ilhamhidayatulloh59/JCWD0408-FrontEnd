import { useMemo, useState } from "react";

function MemoComp() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const incrementNumber = () => setNumber(number + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return number % 2 == 0;
  }, [number]);

  return (
    <div>
      <button onClick={incrementNumber}>number : {number}</button>
      <div>{isNumberEven ? "Even" : "Odd"}</div>
      <button onClick={incrementCount}>count : {count}</button>
    </div>
  );
}

export default MemoComp
