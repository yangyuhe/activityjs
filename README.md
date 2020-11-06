# 一种简单的数据共享模式，用于替代redux

```javascript
import Activity from 'activityjs'
import React from 'react'
//创建业务代码
class Page extends Activity{
    constructor(){
        //属性都是响应式的
        this.user=null
    }
    login(){
        mockRequest().then(()=>{
            //关联的react组件会自动得到更新
            this.user={name:"foo"}
        })
    }
}
let page=new Page()

function Login(props){
    return <>
    {props.user?
        <h1>{props.user.name}</h1>:
        <button onClick={props.login}>login</button>}
    </>
}
//将page的user,login属性映射到组件Login中，也支持map参数
let WLogin=page.mount(Login,["user","login"])

ReactDom.reander(<WLogin/>,document.getElementById("app"))
```
### API
```typescript
mount(Component,props:string[]|{[name:string]:string})
```
将activity中的数据或者方法作为属性传递给React组件（可以是函数组件或者类组件）。props还可以是一个映射，用来重命名属性，key值是activity中的属性或者方法名，value是要被映射成属性名。
```typescript
mount(Component,subActivity:string,props:string[]|{[name:string]:string})
```
用于进行子activity的属性和方法的绑定