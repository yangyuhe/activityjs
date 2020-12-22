import React from "react";
interface Mount {
  component: any;
  props: { [key: string]: string } | string[];
  changeProps: Function[];
}
export default class Activity {
  private mounts: Mount[] = [];

  private update() {
    this.mounts.forEach((item) => {
      const props = this.getProps(item.props);
      item.changeProps.forEach((func) => func(props));
    });
  }

  private _getProps(props: string[]) {
    const _props = {};
    props.forEach((p) => {
      _props[p] = this[p];
    });
    return _props;
  }
  private getProps(props: { [key: string]: string } | string[]) {
    if (props instanceof Array) {
      return this._getProps(props);
    } else {
      const _props = {};
      let res = this._getProps(Object.values(props));
      Object.keys(props).forEach((name) => {
        _props[name] = res[props[name]];
      });
      return _props;
    }
  }

  private proxyProps(props: string[]) {
    props.forEach((prop) => {
      const descriptor = Object.getOwnPropertyDescriptor(this, prop);
      if (
        !this.hasOwnProperty(prop) ||
        (descriptor && !descriptor.configurable)
      ) {
        return;
      }
      let value = this[prop];
      Object.defineProperty(this, prop, {
        get() {
          return value;
        },
        set: (val) => {
          if (value !== val) {
            value = val;
            this.update();
          }
        },
        configurable: false,
      });
    });
  }
  connectDynamic(
    Com,
    path: string,
    props: { [key: string]: string } | string[] = []
  ) {
    if (!path) {
      return this.connect(Com, props);
    }

    let instances = [];
    watch(this, path, (oldVal, newVal) => {
      if (newVal && newVal.connect) {
        instances.forEach((item) => {
          item.setState({
            Com: newVal.connect(Com, props),
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
        let activity = evalExp(this, path);
        this.state = {
          Com:
            activity && activity.connect ? activity.connect(Com, props) : null,
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
  /**
   * 将数据分发给组件
   * @param Com react组件构造器，函数或者类组件
   * @param props 可以是数组或者映射(用于重命名属性名)，当是映射的时候格式是{新属性名:旧属性名,...}
   */
  connect(
    Com,
    props: { [key: string]: string } | string[] = []
  ): typeof React.PureComponent {
    const that = this;
    const item = { component: Com, props: props, changeProps: [] };
    this.mounts.push(item);
    this.proxyProps(props instanceof Array ? props : Object.values(props));
    return class Activity extends React.PureComponent {
      _setstate: Function = null;
      constructor(p) {
        super(p);
        const _props = that.getProps(props);
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
  }
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
