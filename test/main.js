/* eslint-disable react/prop-types */
import React from 'react'
import Activity from '../dist/index.js'
import ReactDom from 'react-dom'
class Model extends Activity {
  constructor () {
    super()
    this.age = 0
    this.submodel = null
  }

  add () {
    this.age++
    if (this.age % 5 === 0) {
      this.submodel = this.submodel ? null : new Model()
    }
  }
}

const model = new Model()

window.__model = model
const FirstLevelCounter = model.mount(Counter, { age: 'myage', add: 'myadd' })
const SecondLevelCounter = model.mountDynamic(Counter, 'submodel', { age: 'myage', add: 'myadd' })
const ThirdLevelCounter = model.mountDynamic(Counter, 'submodel.submodel', { age: 'myage', add: 'myadd' })

function Counter (props) {
  return (
    <>
      {props.title ? <h1>{props.title}</h1> : null}
      <h1>{props.myage}</h1>
      <button onClick={props.myadd}>add</button>
    </>
  )
}
function App () {
  return <>
    <FirstLevelCounter/>
    <SecondLevelCounter title="second"/>
    <ThirdLevelCounter title="third"/>
  </>
}

ReactDom.render(<App />, document.getElementById('app'))
