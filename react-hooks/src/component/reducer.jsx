import { useReducer } from "react";

const actionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case actionType.INCREMENT:
      return { count: state.count + action.payload };
    case actionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      state;
  }
}

function ReducerComp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
      <h2> count : {state.count}</h2>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default ReducerComp;
