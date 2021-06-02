import React, { useState } from "react";
import ReactDom from "react-dom";
import { watch, useActivity } from "../src/index";

let model1 = watch({
  count: 0,
});
function increase() {
  model1.count++;
}
function decrease() {
  model1.count--;
}

function Counter1() {
  const count = useActivity(() => model1.count);
  return <h1>{count}</h1>;
}

function App() {
  let count = useActivity(() => model1.count);
  return (
    <>
      {Array(count)
        .fill(0)
        .map((item, index) => (
          <Counter1 key={index} />
        ))}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
