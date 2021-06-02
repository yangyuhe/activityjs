import React, { useEffect, useState } from "react";
/**
 * 绑定model的值到组件
 * @param propertyMap 通过{key:()=>any}的形式指定可响应式的属性, key是传递给组件的属性名，值是()=>any执行的结果，值也可以直接是一个非函数的任意值
 * @param Com 被连接的组件
 * @returns 返回新的组件
 */
export function connect(
  propertyMap: { [key: string]: (() => any) | any },
  Com: any
): any {
  //存储所有需要监听这些值变化的组件的setState方法
  let callbacks = [];
  //监听propertyMap值的变化，当propertyMap中的某几项的值发生变化时会通知到回调
  notify(propertyMap, (values) => {
    callbacks.forEach((cb) => cb(values));
  });
  //这是实际订阅了model数据的组件
  return class Activity extends React.PureComponent {
    private _setState;
    constructor(p) {
      super(p);

      let props = {};
      Object.keys(propertyMap).forEach((key) => {
        props[key] = evalFn(propertyMap[key]);
      });
      this.state = props;

      this._setState = (state) => {
        this.setState(state);
      };
      //当数据发生变化时通知组件设置新的state
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
/**通过代理实现对数据变换的监听 */
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
          //搜集propertyMap中和当前key相关的值
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
            //当model的数据更新后重新计算propertyMap中受影响的值并通知到回调
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
/**执行一次watch的上下文记录 */
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
/**所有的watch的上下文 */
let contexts: Context[] = [];

let curContext: Context = null;
/**activityjs正在监听的所有的model的集合 */
let watchedModels = [];
/**
 * 监听这组{key:()=>any}的值，当model数据更新导致其中某几项更新事通知到callback
 * @param propertyMap
 * @param callback
 * @returns
 */
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
  startWatch(context);
  return () => {
    contexts = contexts.filter((item) => item != context);
  };
}
function startWatch(context: Context) {
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
/**
 * hook支持，fn的计算结果将作为值返回
 * @param fn
 * @returns fn的计算结果
 */
export function useActivity(fn) {
  const [state, setState] = useState(() => {
    fn();
  });
  useEffect(() => {
    let unsub = notify(
      {
        val: () => fn(),
      },
      ({ val }) => {
        setState(() => val);
      }
    );
    return unsub;
  }, []);
  return state;
}
