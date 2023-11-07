import React from "react";
import { increment, addAmount, reset } from "../../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxUtils";
export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>counter:</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(addAmount(2))}>add two</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};
