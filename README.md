[**_codesandbox 示例_**](https://codesandbox.io/s/activityjs-demo-counter-forked-18ir9?file=/src/App.js)

# 一种适用于 react 的新的状态管理方案，可以方便的将数据和组件进行绑定。

#### activityjs 实现原理很简单，就是通过对 js 实例的属性进行代理从而监听属性的变化，并在变化之后通知到绑定的组件进行更新。

---

#### 下面是一个简单的加减计数的应用

[**代码地址**](https://codesandbox.io/s/activityjs-demo-counter-forked-18ir9?file=/src/App.js)

```javascript
//App.js
import "./styles.css";
import { state, plus, abstract } from "./model";
import { useActivity } from "activityjs";
export default function App() {
  const counter = useActivity(() => state.counter);
  return (
    <div className="App">
      <button onClick={abstract}>减</button>
      <input value={counter} />
      <button onClick={plus}>加</button>
    </div>
  );
}
//model.js
import { watch } from "activityjs";

export const state = watch({
  counter: 0,
});
export function plus() {
  state.counter++;
}
export function abstract() {
  state.counter--;
}
```

---

### API

1. watch<T>(state:T):T  
   watch 接受一个普通的 js 对象，这个对象是对页面数据的抽象，类似于 react 中的 state，返回值依然是这个 state 对象。watch 方法会对 state 的第一层的属性进行代理。

2. function connect(propertyMap: {
   [key: string]: (() => any)|any;
   }, Com: any): any;  
   connect 包装组件 Com，propertyMap 将 state 的数据映射为属性提供给组件。propertyMap 是一个个键值对，键是属性名，值通常是一个函数，也可以是一个非函数的值；当是函数的时候，会被执行并返回结果。
3. useActivity(()=>any)  
   对 react hook 的支持，参数是一个拥有任意返回值的函数

### Q&A

1. 为什么要代理 state 对象的属性？  
   通过对属性的 get 和 set 方法进行代理，可以方便的知道这个属性什么时候被访问过，什么时候被修改过，并在修改时触发有关联的组件的状态更新

2. 为什么 [connect](#API) 方法或者 [useActivity](#API) 方法的参数通常是一个函数？  
   当 state 的某个属性被修改后，通过运行这个函数得到一个新的值，从而触发组件的更新。

3. [connect](#API) 方法或者 [useActivity](#API) 方法传入的函数什么时候会被执行？会很频繁吗？  
   当 state 属性被修改同时这个属性的修改有可能影响函数计算结果的时候，才会运行这个函数；不频繁

4. 如何修改 state?  
   这里并不像 redux 那样需要定义专门的 action，直接对属性赋值就行。这就意味着如果你把 state 暴露出去，那么它有可能在任何位置被修改。最好的实践应该是像上面的[加减器](#下面是一个简单的加减计数的应用)的例子那样，把对于 state 的定义和操作放在一个文件内，然后暴露方法出去。
