# 一种适用于 react 的新的状态管理方案

#### activityjs 实现原理很简单，就是通过对 js 实例的属性进行代理从而监听属性的变化，并在变化之后通知到绑定的组件进行更新。

#### activityjs 意在将任何 js 对象实例跟 react 组件进行绑定，并在实例属性被更新时通知到 react 组件更新。使用 activityjs，你的数据不会再像 redux 一样是一颗树，而是一个个分散的数据集合，这些数据集合或许存在联系和调用关系或许没有，无所谓。

#### 我们可以将应用逻辑抽离到对应的 js 类中，不用再跟组件耦合，组件要做的是从各个 js 实例中拿自己想要的数据来展示或者调用其暴露的方法。

```javascript
import { connect } from "activityjs";
import React from "react";
//创建业务代码
class Page {
  constructor() {
    this.user = null;
  }
  login = () => {
    mockRequest().then(() => {
      //关联的react组件会自动得到同步更新
      this.user = { name: "foo" };
    });
  };
}
let page = new Page();

function Login(props) {
  return (
    <>
      {props.user ? (
        <h1>{props.user.name}</h1>
      ) : (
        <button onClick={props.login}>login</button>
      )}
    </>
  );
}
//将page的user,login属性/方法给组件Login
let WLogin = connect([page, "user", "login"], Login);

ReactDom.reander(<WLogin />, document.getElementById("app"));
```

### API

1. 将 model A 中属性/方法 foo 给组件 Com

```typescript
const WrapCom = connect([A, "foo"], Com);
```

使用

```jsx
<WrapCom />
```

2. 将 model A 中属性/方法 foo,bar 给组件 Com

```typescript
const WrapCom = connect([A, "foo", "bar"], Com);
```

使用

```jsx
<WrapCom />
```

3. 将 model A 中属性/方法 foo 重命名为 foo1 给组件 Com

```typescript
const WrapCom = connect([A, { foo1: "foo" }], Com);
```

使用

```jsx
<WrapCom />
```

3. 将 model A 中属性/方法 bar,foo 重命名为 foo1 给组件 Com

```typescript
const WrapCom = connect([A, "bar", { foo1: "foo" }], Com);
```

使用

```jsx
<WrapCom />
```

4. 将 model A 中的属性/方法 foo,model B 中属性/方法 bar 给组件 Com

```typescript
const WrapCom = connectMulti(
  [
    [A, "foo"],
    [B, "bar"],
  ],
  Com
);
```

使用

```jsx
<WrapCom />
```

5. 将 model A 中的属性 foo 的属性 bar 提供给组件 Com，当 foo 不存在的时候 Com 组件返回 null

```typescript
const WrapCom = connect([[A, "foo"], "bar"], Com);
```

使用

```jsx
<WrapCom />
```

### 最复杂的一个例子

```typescript
class Model1 {
  name = "model1";
}
class Model2 {
  person = { info: { name: "model2" } };
}
let model1 = new Model1();
let model2 = new Model2();
function Com(props) {
  return (
    <h1>
      {props.name1},{props.name2}
    </h1>
  );
}
//如果Com组件想获取model1中的name和model2中person下的info下的name并始终保持同步
const WrapCom = connectMulti([
  [model1, { name1: "name" }],
  [[model2, "person.info"], { name2: "name" }],
]);
```

```jsx
//使用
<WrapCom />
```

### 注意

如果想将 model 中一个方法提供给组件，注意该方法需要用 this 绑定或者使用 es6 中的箭头函数；多数情况下可能不用映射一个方法，而是直接调用 model 的这个方法。
