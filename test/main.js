/* eslint-disable react/prop-types */
import React from 'react'
import Activity from '../dist/index.js'
import ReactDom from 'react-dom'
class Model extends Activity {
  constructor () {
    super()
    this.age = 22
  }

  add () {
    this.age++
  }
}
function App (props) {
  return <>
    <h1>{props.myage}</h1>
    <button onClick={props.myadd}>add</button>
  </>
}

const model = new Model()
const WApp = model.mount(App, { age: 'myage', add: 'myadd' })
ReactDom.render(<WApp/>, document.getElementById('app'))
