import { useState } from "react";
import { decrementNumber, incrementNumber } from "./Actions";
import reducer from "./Reducer";
import { createStore } from 'redux';
import '../App.css'

const store = createStore(reducer); // Fix the typo here

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  return (
    <div className="parent">
      <h1 id="heading">Redux Counter</h1>
      <h2 id="count ">{count}</h2>
      <div className="buttondiv">
        <button onClick={() => store.dispatch(incrementNumber())} id="incre">Increment</button>
        <button onClick={() => store.dispatch(decrementNumber())} id="decre">Decrement</button></div>
      </div>
  );
}
