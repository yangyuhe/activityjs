[**_codesandbox示例_**](https://codesandbox.io/s/activityjs-demo-counter-hnv50?file=/src/App.js)
# 一种适用于 react 的新的状态管理方案

#### activityjs 实现原理很简单，就是通过对 js 实例的属性进行代理从而监听属性的变化，并在变化之后通知到绑定的组件进行更新。

#### activityjs 意在将任何 js 对象实例跟 react 组件进行绑定，并在实例属性被更新时通知到 react 组件更新。使用 activityjs，你的数据不会再像 redux 一样是一颗树，而是一个个分散的数据集合，这些数据集合或许存在联系和调用关系或许没有，无所谓。

#### 我们可以将应用逻辑抽离到对应的 js 类中，不用再跟组件耦合，组件要做的是从各个 js 实例中拿自己想要的数据来展示或者调用其暴露的方法。

```javascript
import { connect, watch } from "activityjs";
import React from "react";
//创建业务代码
let page = watch({
  user: null,
});
function login() {
  mockRequest().then(() => {
    //关联的react组件会自动得到同步更新
    page.user = { name: "foo" };
  });
}
//组件
function Login(props) {
  return (
    <>
      {props.user ? (
        <h1>{props.user.name}</h1>
      ) : (
        <button onClick={login}>login</button>
      )}
    </>
  );
}
//将page的user,login属性/方法给组件Login
let WLogin = connect({ user: () => page.user }, Login);

ReactDom.reander(<WLogin />, document.getElementById("app"));
```

### API

1. watch<T>(model:T):T  
   watch 接受一个普通的对象，这个对象是对页面数据的抽象，类似于 redux 中的 state,返回值依然是这个 model 对象。经过 watch 方法的修改后，model 对象将成为响应式的。

2. function connect(propertyMap: {
   [key: string]: (() => any)|any;
   }, Com: any): any;  
   connect 包装组件 Com，propertyMap 将 model 的数据映射为新的属性供组件访问。propertyMap 是一个个键值对，键是属性名，值可以是任意值；当是函数的时候，会被执行并返回结果，如果函数中使用了被 watch 的 model 的中的属性，当 model 修改时该函数会被重新计算以实现属性的更新从而使组件重新 render。

### 最复杂的一个例子

```tsx
import { watch, connect } from "activityjs";

let model1 = watch({
  name: "model1",
});
let model2 = watch({
  person: {
    info: {
      name: "model2",
    },
    address: "foo",
  },
});
function changModel2Name(name) {
  model2.person = { ...model2.person, info: { name } };
}
function Com(props) {
  return (
    <>
      <h1>
        {props.name1},{props.name2}
      </h1>
      <button onClick={changModel2Name}>change model2 name</button>
    </>
  );
}
//如果Com组件想获取model1中的name和model2中person下的info下的name
const WrapCom = connect(
  {
    name1: () => model1.name,
    name2: () => model2.person.info.name,
  },
  Com
);
```

```jsx
//使用
<WrapCom />
```

### 注意

如果想将 model 中一个方法提供给组件，注意该方法需要用 this 绑定或者使用 es6 中的箭头函数；多数情况下可能不用映射一个方法，而是直接调用 model 的这个方法。
