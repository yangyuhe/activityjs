# 一种新的状态管理方案，用于替代 redux

```javascript
import { connect } from "activityjs";
import React from "react";
//创建业务代码
class Page {
  constructor() {
    this.user = null;
  }
  login() {
    mockRequest().then(() => {
      //关联的react组件会自动得到更新
      this.user = { name: "foo" };
    });
  }
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
//将page的user,login属性映射到组件Login中，也支持map参数
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
