/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Activity from "../src/index";
import ReactDom from "react-dom";
class Model extends Activity {
  constructor(id) {
    super();
    this.id = id;
    this.age = 0;
    this.submodel = null;
  }

  add = () => {
    this.age++;
    if (this.age % 5 === 0) {
      this.submodel = this.submodel
        ? null
        : new Model(this.id === "init" ? "second" : "third");
    }
  };
}

const model = new Model("init");

window.__model = model;
const FirstLevelCounter = model.connect(Counter, {
  myage: "age",
  myadd: "add",
});
const SecondLevelCounter = model.connectDynamic(Counter, "submodel", {
  myage: "age",
  myadd: "add",
});
const ThirdLevelCounter = model.connectDynamic(Counter, "submodel.submodel", {
  myage: "age",
  myadd: "add",
  id: "id",
});
const FourLevelCounter = model.connectDynamic(Counter, "submodel.submodel", {
  myage: "age",
  myadd: "add",
  id: "id",
});

function Counter(props) {
  useEffect(() => {
    console.log("id:", props.id, " create");
    return () => {
      console.log("id:", props.id, " destroy");
    };
  }, []);
  return (
    <>
      {props.title ? <h1>{props.title}</h1> : null}
      <h1>{props.myage}</h1>
      {props.count ? <h2>{props.count}</h2> : null}
      <button onClick={props.myadd}>add</button>
    </>
  );
}
function App() {
  const [count, setCount] = useState(0);
  const test = () => {
    setCount(count + 1);
  };
  return (
    <>
      <FirstLevelCounter />
      <SecondLevelCounter title="second" />
      <ThirdLevelCounter count={count} title="third" />
      <ThirdLevelCounter count={count} title="fourth" />
      <button onClick={test}>good</button>
    </>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
