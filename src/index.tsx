import React from "react";

/**
 * 连接多个model
 * @param models 是connect方法的第一个参数的数组
 * @param Com 组件
 */
export function connectMulti(modelUses: any[], Com: React.ComponentType) {
  let newCom = Com;
  modelUses.forEach((modelUse) => {
    newCom = connect(modelUse, newCom);
  });
  return newCom;
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
export function connect(
  modelUse: any[],
  Com: React.ComponentType
): React.ComponentClass {
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
    const item = { component: Com, props: props, changeProps: [] };
    if (!model.__$mounts) {
      Object.defineProperty(model, "__$mounts", {
        enumerable: false,
        value: [],
        configurable: false,
      });
    }
    let mounts = (model as any).__$mounts;
    mounts.push(item);
    proxyProps(model, Object.values(props));
    return class Activity extends React.PureComponent {
      _setstate: Function = null;
      constructor(p) {
        super(p);
        const _props = getProps(model, props);
        this.state = _props;
        this._setstate = this.setState.bind(this);
        item.changeProps.push(this._setstate);
      }

      componentWillUnmount() {
        item.changeProps = item.changeProps.filter(
          (item) => item !== this._setstate
        );
      }

      render() {
        return <Com {...this.state} {...this.props}></Com>;
      }
    };
  } else {
    return connectDynamic(modelUse, Com);
  }
}

function connectDynamic(modelUse: any[], Com: React.ComponentType) {
  let path = modelUse[0][1];
  if (!path) {
    return connect([modelUse[0][0], ...modelUse.slice(1)], Com);
  }

  let [model, props] = format(modelUse[0][0], modelUse.slice(1));

  let instances = [];
  watch(model, path, (oldVal, newVal) => {
    if (newVal) {
      instances.forEach((item) => {
        item.setState({
          Com: connect([newVal, props], Com),
        });
      });
    } else {
      instances.forEach((item) => {
        item.setState({
          Com: null,
        });
      });
    }
  });
  class Wrapper extends React.PureComponent<{}, { Com: any }> {
    constructor(props) {
      super(props);
      let activity = evalExp(model, path);
      this.state = {
        Com: activity ? connect([activity, props], Com) : null,
      };
    }
    componentDidMount() {
      instances.push(this);
    }
    componentWillMount() {
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

function proxyProps(model: any, props: string[]) {
  props.forEach((prop) => {
    const descriptor = Object.getOwnPropertyDescriptor(model, prop);
    if (
      !model.hasOwnProperty(prop) ||
      (descriptor && !descriptor.configurable)
    ) {
      return;
    }
    let value = model[prop];
    Object.defineProperty(model, prop, {
      get() {
        return value;
      },
      set: (val) => {
        if (value !== val) {
          value = val;
          update(model);
        }
      },
      configurable: false,
    });
  });
}
function update(model: any) {
  model.__$mounts.forEach((item) => {
    const props = getProps(model, item.props);
    item.changeProps.forEach((func) => func(props));
  });
}
function getProps(model: any, props: { [key: string]: string }) {
  const _props = {};
  let res = _getProps(model, Object.values(props));
  Object.keys(props).forEach((name) => {
    _props[name] = res[props[name]];
  });
  return _props;
}
function _getProps(model: any, props: string[]) {
  const _props = {};
  props.forEach((p) => {
    _props[p] = model[p];
  });
  return _props;
}
function watch(v, path, cb) {
  if (path === "" || !v) return;
  let routers = path.split(".");
  let top = routers.shift();
  if (v && typeof v === "object") {
    if (!v["__$" + top]) {
      v["__$" + top] = [];
    }
    let cbs = v["__$" + top];
    let leftPath = routers.join(".");
    if (!cbs.find((item) => item.path === leftPath && item.fn === cb))
      cbs.push({ path: leftPath, fn: cb });
    let prop = Object.getOwnPropertyDescriptor(v, top);
    let value = v[top];
    if (!prop || prop.configurable) {
      Object.defineProperty(v, top, {
        configurable: false,
        get() {
          return value;
        },
        set: (val) => {
          if (val !== value) {
            cbs.forEach((item) => {
              if (item.path === "") item.fn(value, val);
              else {
                let old = evalExp(value, item.path);
                let newval = evalExp(val, item.path);
                if (old !== newval) {
                  item.fn(old, newval);
                }
              }
            });
            value = val;
            cbs.forEach((item) => {
              watch(value, item.path, item.fn);
            });
          }
        },
      });
    }
    watch(value, leftPath, cb);
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
