/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect, connectMulti } from "../src/index";
import ReactDom from "react-dom";
class Model {
  constructor(id) {
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
const FirstLevelCounter = connect(
  [
    model,
    {
      myage: "age",
      myadd: "add",
    },
  ],
  Counter
);
const SecondLevelCounter = connect(
  [
    [model, "submodel"],
    {
      myage: "age",
      myadd: "add",
    },
  ],
  Counter
);
const ThirdLevelCounter = connect(
  [
    [model, "submodel.submodel"],
    {
      myage: "age",
      myadd: "add",
      id: "id",
    },
  ],
  Counter
);
const FourLevelCounter = connect(
  [
    [model, "submodel.submodel"],
    {
      myage: "age",
      myadd: "add",
      id: "id",
    },
  ],
  Counter
);

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
class Model1 {
  constructor() {
    this.time = new Date().toLocaleString();
    this.timmer = setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);
  }
}
let model1 = new Model1();
class Model2 {
  constructor() {
    this.time = new Date().toISOString();
    this.timmer = setInterval(() => {
      this.time = new Date().toISOString();
    }, 1000);
  }
}
let model2 = new Model2();
function Clock(props) {
  return (
    <div>
      <h1>美国:{props.american}</h1>
      <h1>中国:{props.china}</h1>
      <h2>
        secondModel:{props.secondModel},id:{props.id}
      </h2>
    </div>
  );
}
const WrapClock = connectMulti(
  [
    [model1, { american: "time" }],
    [model2, { china: "time" }],
    [[model, "submodel.submodel"], { secondModel: "age" }, "id"],
  ],
  Clock
);

function App() {
  const [count, setCount] = useState(0);
  const test = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>测试动态绑定</h1>
      <FirstLevelCounter />
      <SecondLevelCounter title="second" />
      <ThirdLevelCounter count={count} title="third" />
      <ThirdLevelCounter count={count} title="fourth" />
      <button onClick={test}>good</button>
      <h1>测试绑定多个model</h1>
      <WrapClock />
    </>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
