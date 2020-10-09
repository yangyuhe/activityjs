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