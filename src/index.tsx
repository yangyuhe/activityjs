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
      if (
        typeof this[p] === "function" &&
        Object.hasOwnProperty.call(this[p], "prototype") &&
        this.isProtoFunc(p)
      ) {
        this[p] = this[p].bind(this);
      }
      _props[p] = this[p];
    });
    return _props;
  }
  private getProps(props: { [key: string]: string } | string[]) {
    if (props instanceof Array) {
      return this._getProps(props);
    } else {
      const _props = {};
      let res = this._getProps(Object.keys(props));
      Object.keys(res).forEach((prop) => {
        _props[props[prop]] = res[prop];
      });
      return _props;
    }
  }

  private proxyProps(props: string[]) {
    props.forEach((prop) => {
      const descriptor = Object.getOwnPropertyDescriptor(this, prop);
      if (this.isProtoFunc(prop) || (descriptor && !descriptor.configurable)) {
        return;
      }
      let value = this[prop];
      Object.defineProperty(this, prop, {
        get() {
          return value;
        },
        set: (val) => {
          value = val;
          this.update();
        },
        configurable: false,
      });
    });
  }
  mountDynamic(
    Com,
    depth: string,
    props: { [key: string]: string } | string[] = []
  ) {
    let depths = depth.split(".");
    let prop = depths.shift();
    class Wrapper extends React.PureComponent<{
      $activity: Activity;
      $deps: string[];
    }> {
      render() {
        let $activity = this.props.$activity;
        let $deps: string[];
        if (this.props.$deps) $deps = this.props.$deps;
        else $deps = depths.slice(0);
        if ($activity) {
          let Inner;
          if ($deps.length == 0) {
            Inner = $activity.mount(Com, props);
          } else {
            let prop = $deps.shift();
            Inner = $activity.mount(Wrapper, { [prop]: "$activity" });
          }
          let newProps: any = Object.assign({}, this.props);
          delete newProps.$activity;
          return <Inner {...newProps} $deps={$deps.slice(0)} />;
        }
        return null;
      }
    }
    return this.mount(Wrapper, { [prop]: "$activity" });
  }
  mount(
    Com,
    props: { [key: string]: string } | string[] = []
  ): typeof React.PureComponent {
    const that = this;
    const item = { component: Com, props: props, changeProps: [] };
    this.mounts.push(item);
    this.proxyProps(props instanceof Array ? props : Object.keys(props));
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

  private isProtoFunc(funcName) {
    let proto = Object.getPrototypeOf(this);
    while (proto) {
      if (proto[funcName]) {
        return true;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return false;
  }
}
