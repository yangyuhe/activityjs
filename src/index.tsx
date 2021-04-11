import React from "react";

export function connect(
  propertyMap: { [key: string]: (() => any) | any },
  Com: any
): any {
  let callbacks = [];
  notify(propertyMap, (values) => {
    callbacks.forEach((cb) => cb(values));
  });
  return class Activity extends React.PureComponent {
    private _setState;
    constructor(p) {
      super(p);

      let props = {};
      Object.keys(propertyMap).forEach((key) => {
        props[key] = evalFn(propertyMap[key]);
      });
      this.state = props;

      let queue = new EventQueue((states) => {
        this.setState(states);
      });
      this._setState = (state) => {
        queue.enter(state);
      };
      callbacks.push(this._setState);
    }

    componentWillUnmount() {
      callbacks = callbacks.filter((item) => item !== this._setState);
    }

    render() {
      return <Com {...this.state} {...this.props}></Com>;
    }
  };
}
export function watch<T>(model: T) {
  if (watchedModels.includes(model)) {
    return model;
  }
  watchedModels.push(model);
  Object.keys(model).forEach((key) => {
    let des = Object.getOwnPropertyDescriptor(model, key);
    if (des.configurable) {
      let value = model[key];
      Object.defineProperty(model, key, {
        get() {
          if (curContext) {
            const { watching, curKey, watchedMap, propertyMap } = curContext;
            if (watching && curKey) {
              let res = watchedMap.find(
                (item) => item.model === model && item.key === key
              );
              if (!res) {
                res = { model, key, fns: {} };
                watchedMap.push(res);
              }
              res.fns[curKey] = propertyMap[curKey];
            }
          }
          return value;
        },
        set(val) {
          if (val !== value) {
            value = val;

            contexts.forEach((context) => {
              const { watchedMap } = context;
              watchedMap.forEach((item) => {
                if (item.model === model && item.key === key) {
                  let values = {};
                  let fns = item.fns;
                  if (Object.keys(fns).length > 0) {
                    item.fns = {};
                    context.watching = true;
                    let oldContext = curContext;
                    curContext = context;
                    Object.keys(fns).forEach((key) => {
                      context.curKey = key;
                      let value;
                      try {
                        value = evalFn(fns[key]);
                      } catch (err) {
                        value = null;
                      }
                      if (
                        context.oldValues &&
                        context.oldValues[key] !== value
                      ) {
                        values[key] = value;
                        context.oldValues[key] = value;
                      }
                    });
                    curContext = oldContext;
                    context.watching = false;

                    if (Object.keys(values).length > 0)
                      context.callback(values);
                  }
                }
              });
            });
          }
        },
        configurable: false,
      });
    }
  });
  return model;
}
interface Context {
  propertyMap: { [key: string]: () => any };
  callback: (values) => void;
  watching: boolean;
  /**正在映射到的属性名 */
  curKey: string;
  watchedMap: { model: any; key: string; fns: { [key: string]: () => any } }[];
  /**上一次映射的属性集合 */
  oldValues: { [key: string]: any };
}
const contexts: Context[] = [];
let curContext: Context = null;
let watchedModels = [];
function notify(propertyMap, callback) {
  const context: Context = {
    propertyMap,
    callback,
    watching: false,
    curKey: "",
    watchedMap: [],
    oldValues: {},
  };
  contexts.push(context);
  watchingContext(context);
}
function watchingContext(context: Context) {
  context.watching = true;

  let props = {};
  let oldContext = curContext;
  curContext = context;
  Object.keys(context.propertyMap).forEach((key) => {
    context.curKey = key;
    props[key] = evalFn(context.propertyMap[key]);
  });
  curContext = oldContext;
  context.oldValues = { ...props };
  context.watching = false;
  context.callback(props);
}
function evalFn(fn) {
  if (typeof fn === "function") {
    try {
      return fn();
    } catch (err) {
      return null;
    }
  } else {
    return fn;
  }
}

class EventQueue {
  private queue = [];
  private callback = null;
  constructor(callback) {
    this.callback = callback;
  }
  enter(state) {
    if (this.queue.length === 0) {
      Promise.resolve().then(() => {
        this.consume();
      });
    }
    this.queue.push(state);
  }
  private consume() {
    let states = {};
    this.queue.forEach((state) => {
      Object.assign(states, state);
    });
    this.queue = [];
    this.callback(states);
  }
}
