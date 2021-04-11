/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect, watch } from "../src/index";
import ReactDom from "react-dom";
class Model {
  constructor(id) {
    this.id = id;
    this.age = 0;
    this.person = { name: "hexiang" };
    this.submodel = null;
    if (id === "init") this.submodel = watch(new Model("second"));
  }
  setName = () => {
    this.person = { name: "lix" };
  };

  add = () => {
    this.age++;
    if (this.age % 5 === 0) {
      if (!this.submodel)
        this.submodel = watch(
          new Model(this.id === "init" ? "second" : "third")
        );
      else this.submodel = null;
    }
  };
}

const model = watch(new Model("init"));

window.__model = model;
const FirstLevelCounter = connect(
  {
    visible: true,
    myage: () => model.age,
    myadd: () => model.add,
    name: () => model.person.name,
    changename: () => model.setName,
  },
  Counter
);
const SecondLevelCounter = connect(
  {
    visible: () => !!model.submodel,
    myage: () => model.submodel.age,
    myadd: () => model.submodel.add,
    sonid: () => model.submodel.submodel && model.submodel.submodel.id,
    id: () => model.submodel.id,
    changename: () => model.submodel.setName,
    name: () => model.submodel.person.name,
  },
  Counter
);
const ThirdLevelCounter = connect(
  {
    visible: () => !!model.submodel.submodel,
    myage: () => model.submodel.submodel.age,
    myadd: () => model.submodel.submodel.add,
    id: () => model.submodel.submodel.id,
  },
  Counter
);

function Counter(props) {
  useEffect(() => {
    console.log("id:", props.id, " create");
    return () => {
      console.log("id:", props.id, " destroy");
    };
  }, []);
  console.log("render...");
  if (props.visible)
    return (
      <>
        {props.sonid ? <h1>sonid:{props.sonid}</h1> : null}
        {props.title ? <h1>{props.title}</h1> : null}
        <h1>{props.myage}</h1>
        {props.count ? <h2>{props.count}</h2> : null}
        <button onClick={props.myadd}>add</button>
        <button onClick={props.changename}>change name</button>
        <h3>{props.name}</h3>
      </>
    );
  return null;
}
class Model1 {
  constructor() {
    this.time = new Date().toLocaleString();
    // this.timmer = setInterval(() => {
    //   this.time = new Date().toLocaleString();
    // }, 1000);
  }
}
let model1 = watch(new Model1());
class Model2 {
  constructor() {
    this.time = new Date().toISOString();
    // this.timmer = setInterval(() => {
    //   this.time = new Date().toISOString();
    // }, 1000);
    this.person = { name: "小毛" };
    this.foo = "foo";
  }
  setName(str) {
    setTimeout(() => {
      this.foo = "bar";
      this.person = { name: str };
    }, 0);
  }
}
let model2 = watch(new Model2());
function Clock(props) {
  console.log("render clock", props);
  return (
    <div>
      <h1>美国:{props.american}</h1>
      <h1>中国:{props.china}</h1>
      <h2>
        secondModel:{props.secondModel},id:{props.id}
      </h2>
      <h2>person name:{props.name}</h2>
      <button
        onClick={() => {
          model2.setName("三毛");
        }}
      >
        change name
      </button>
    </div>
  );
}
const WrapClock = connect(
  {
    secondModel: () => model.submodel.submodel.age,
    id: () => model.submodel.submodel.id,
    american: () => model1.time,
    china: () => model2.time,
    name: () => model2.person.name,
    foo: () => model2.foo,
  },
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
      <FirstLevelCounter title="init" />
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
