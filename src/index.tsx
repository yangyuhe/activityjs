import React from 'react'
interface Mount{
  component: any,
  props: {[key:string]:string}|string[],
  changeProps: Function[]
}
export default class Model {
  private mounts:Mount[]=[]

  private update () {
    this.mounts.forEach((item) => {
      const props = this.getProps(item.props)
      item.changeProps.forEach(func => func(props))  
    })
  }

  private _getProps (props:string[]) {
    const _props = {}
    props.forEach((p) => {
      if (
        typeof this[p] === 'function' &&
        Object.hasOwnProperty.call(this[p], 'prototype') &&
          this.isProtoFunc(p)
      ) {
        this[p] = this[p].bind(this)
      }
      _props[p] = this[p]
    })
    return _props
  }
  private getProps (props:{[key:string]:string}|string[]) {
    if(props instanceof Array){
      return this._getProps(props)
    }else{
      const _props = {}
      let res=this._getProps(Object.keys(props))
      Object.keys(res).forEach(prop=>{
        _props[props[prop]]=res[prop]
      })
      return _props
    }
  }

  private proxyProps (props:string[]) {
    props.forEach(prop => {
      const descriptor = Object.getOwnPropertyDescriptor(this, prop)
      if (this.isProtoFunc(prop) || (descriptor && !descriptor.configurable)) {
        return
      }
      let value = this[prop]
      Object.defineProperty(this, prop, {
        get () {
          return value
        },
        set: (val) => {
          value = val
          this.update()
        },
        configurable: false
      })
    })
  }

  mount (Com, props:({[key:string]:string}|string[]) = []) {
    const that = this
    const item = { component: Com, props: props, changeProps: [] }
    this.mounts.push(item)
    this.proxyProps(props instanceof Array?props:Object.keys(props))
    return class Activity extends React.PureComponent {
      _setstate:Function=null
      constructor (p) {
        super(p)
        const _props = that.getProps(props)
        this.state = _props
        this._setstate = this.setState.bind(this)
        item.changeProps.push(this._setstate)
      }

      componentWillUnmount () {
        item.changeProps = item.changeProps.filter(item => item !== this._setstate)
      }

      render () {
        return <Com {...this.state} {...this.props}></Com>
      }
    }
  }

  private isProtoFunc (funcName) {
    let proto = Object.getPrototypeOf(this)
    while (proto) {
      if (proto[funcName]) { return true }
      proto = Object.getPrototypeOf(proto)
    }
    return false
  }
}
