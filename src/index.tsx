import React from "react";

/**
 * 连接多个model
 * @param models 是connect方法的第一个参数的数组
 * @param Com 组件
 */
export function connectMulti(modelUses: any[], Com: any) {
  let newCom = Com;
  modelUses.forEach((modelUse) => {
    newCom = connect(modelUse, newCom);
  });
  return newCom;
}

export function connect(modelUse: any[], Com: any) {
  if (!Array.isArray(modelUse[0])) {
    let props = format(modelUse[0], modelUse.slice(1))[1];
    Object.keys(props).forEach((name) => {
      let exp = props[name];
      exp = exp.split(".")[0];
      watch(modelUse[0], exp, modelUse[0]);
    });
  } else {
    let prefix = modelUse[0][1];
    let props = format(modelUse[0][0], modelUse.slice(1))[1];
    Object.keys(props).forEach((name) => {
      let exp = props[name];
      exp = exp.split(".")[0];
      watch(modelUse[0][0], prefix + "." + exp, modelUse[0][0]);
    });
  }
  return realConnect(modelUse, Com);
}
/**
 *
 * @param modelUse
 * 1.使用model A的foo属性，[A,'foo'];
 *
 * 2.使用model A的foo属性作为自己的bar属性，[A,{bar:'foo'}];
 *
 * 3.使用model A的foo属性和bar属性, [A, 'foo','bar'];
 *
 * 4.使用model A里的model B的foo属性,[[A,"B"],"foo"]
 * @param Com 组件
 */
export function realConnect(modelUse: any[], Com: any): any {
  if (!modelUse || !Array.isArray(modelUse) || modelUse.length < 2)
    throw new Error("connect:modelUse must be array with more than 1 element");
  if (!(modelUse[0] instanceof Object)) {
    throw new Error("connect:model must be an object or array");
  }
  if (Array.isArray(modelUse[0]) && modelUse[0].length !== 2) {
    throw new Error("connect:model array length must be 2");
  }
  if (!Array.isArray(modelUse[0])) {
    let [model, props] = format(modelUse[0], modelUse.slice(1));
    let setStateFns = [];
    let des = Object.getOwnPropertyDescriptor(model, ProxyKey);
    if (!des) {
      Object.defineProperty(model, ProxyKey, {
        value: [],
        configurable: false,
        enumerable: false,
      });
    }
    if (model[ProxyKey]) {
      let oldState = {};
      Object.keys(props).forEach((name) => {
        let exp = props[name];
        let old = evalExp(model, exp);
        oldState[name] = old;
      });
      model[ProxyKey].push(() => {
        let newState = {};
        Object.keys(props).forEach((name) => {
          let exp = props[name];
          let newV = evalExp(model, exp);
          if (newV !== oldState[name]) {
            newState[name] = newV;
          }
        });
        if (Object.keys(newState).length > 0) {
          setStateFns.forEach((fn) => {
            fn(newState);
          });
        }
        Object.assign(oldState, newState);
      });
    }
    return class Activity extends React.PureComponent {
      _setstate: Function = null;
      constructor(p) {
        super(p);
        const _props = {};
        Object.keys(props).forEach((key) => {
          _props[key] = evalExp(model, props[key]);
        });
        this.state = _props;
        this._setstate = this.setState.bind(this);
        setStateFns.push(this._setstate);
      }

      componentWillUnmount() {
        setStateFns = setStateFns.filter((item) => item !== this._setstate);
      }

      render() {
        return <Com {...this.state} {...this.props}></Com>;
      }
    };
  } else {
    return connectDynamic(modelUse, Com);
  }
}
const DynamicKey = "__$lego_dynamic";
function connectDynamic(modelUse: any[], Com: React.ComponentType) {
  let path = modelUse[0][1];
  if (!path) {
    return realConnect([modelUse[0][0], ...modelUse.slice(1)], Com);
  }

  let [model, props] = format(modelUse[0][0], modelUse.slice(1));

  let instances = [];

  if (model && typeof model === "object") {
    let des = Object.getOwnPropertyDescriptor(model, DynamicKey);
    if (!des) {
      Object.defineProperty(model, DynamicKey, {
        value: [],
        configurable: false,
        enumerable: false,
      });
    }
    let callbacks = model[DynamicKey];
    let old = evalExp(model, path);
    callbacks.push(() => {
      let newval = evalExp(model, path);
      if (old !== newval) {
        if (newval) {
          instances.forEach((item) => {
            item.setState({
              Com: realConnect([newval, props], Com),
            });
          });
        } else {
          instances.forEach((item) => {
            item.setState({
              Com: null,
            });
          });
        }
        old = newval;
      }
    });
  }
  class Wrapper extends React.PureComponent<{}, { Com: any }> {
    constructor(_props) {
      super(_props);
      let activity = evalExp(model, path);
      this.state = {
        Com: activity ? realConnect([activity, props], Com) : null,
      };
    }
    componentDidMount() {
      instances.push(this);
    }
    componentWillUnmount() {
      instances = instances.filter((item) => item !== this);
    }
    render() {
      if (this.state.Com) {
        let Com = this.state.Com;
        return <Com {...this.props} />;
      }
      return null;
    }
  }
  return Wrapper;
}

function format(model: any, props: any[]) {
  if (!(model instanceof Object)) {
    throw new Error("connect:model must be an no null object");
  }

  let oldProps = props;

  let newProps = {};
  function keys(prop) {
    if (prop instanceof Object && Object.keys(prop).length > 0) {
      Object.keys(prop).forEach((key) => {
        if (
          key &&
          prop[key] &&
          typeof key === "string" &&
          typeof prop[key] === "string"
        )
          newProps[key] = prop[key];
        else throw new Error("connect:MapProperty format error");
      });
      return true;
    }
    return false;
  }
  if (oldProps instanceof Array) {
    oldProps.forEach((prop) => {
      if (typeof prop === "string") {
        newProps[prop] = prop;
        return;
      }
      if (keys(prop)) {
        return;
      }
      throw new Error("connect:MapProperty format error");
    });
  } else {
    if (!keys(oldProps)) {
      throw new Error("connect:MapProperty format error");
    }
  }

  return [model, newProps];
}
const ProxyKey = "__$lego_proxyProps";

const WatchKey = "__$watchExp";
function watch(v, path, org) {
  if (path === "" || !v) return;
  let routers = path.split(".");
  let top = routers.shift();
  if (v && typeof v === "object") {
    let prop = Object.getOwnPropertyDescriptor(v, top);
    let oldVal = v[top];

    if (!v[WatchKey]) {
      Object.defineProperty(v, WatchKey, {
        value: {},
        enumerable: false,
        configurable: false,
      });
    }
    if (!v[WatchKey][top]) {
      v[WatchKey][top] = [];
    }
    let watches = v[WatchKey][top];
    let other = routers.join(".");
    if (other && watches.indexOf(other) === -1) {
      watches.push(other);
    }
    if (!prop || prop.configurable) {
      Object.defineProperty(v, top, {
        configurable: false,
        get() {
          return oldVal;
        },
        set: (newVal) => {
          if (newVal !== oldVal) {
            oldVal = newVal;
            if (org && org[DynamicKey]) {
              org[DynamicKey].forEach((cb) => cb());
            }
            if (v && v[ProxyKey]) {
              v[ProxyKey].forEach((cb) => cb());
            }
            if (newVal) {
              watches.forEach((exp) => {
                watch(newVal, exp, org);
              });
            }
          }
        },
      });
    }
    if (routers.length > 0) watch(oldVal, routers.join("."), org);
  }
}
function evalExp(v, expr) {
  let f = new Function("obj", "return obj." + expr);
  try {
    return f(v);
  } catch (err) {
    return null;
  }
}
