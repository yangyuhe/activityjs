(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["activityjs"] = factory(require("react"));
	else
		root["activityjs"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: connect, watch, useActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActivity", function() { return useActivity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * 绑定model的值到组件
 * @param propertyMap 通过{key:()=>any}的形式指定可响应式的属性, key是传递给组件的属性名，值是()=>any执行的结果，值也可以直接是一个非函数的任意值
 * @param Com 被连接的组件
 * @returns 返回新的组件
 */

function connect(propertyMap, Com) {
  //存储所有需要监听这些值变化的组件的setState方法
  var callbacks = []; //监听propertyMap值的变化，当propertyMap中的某几项的值发生变化时会通知到回调

  notify(propertyMap, function (values) {
    callbacks.forEach(function (cb) {
      return cb(values);
    });
  }); //这是实际订阅了model数据的组件

  return /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Activity, _React$PureComponent);

    var _super = _createSuper(Activity);

    function Activity(p) {
      var _this;

      _classCallCheck(this, Activity);

      _this = _super.call(this, p);
      var props = {};
      Object.keys(propertyMap).forEach(function (key) {
        props[key] = evalFn(propertyMap[key]);
      });
      _this.state = props;

      _this._setState = function (state) {
        _this.setState(state);
      }; //当数据发生变化时通知组件设置新的state


      callbacks.push(_this._setState);
      return _this;
    }

    _createClass(Activity, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this2 = this;

        callbacks = callbacks.filter(function (item) {
          return item !== _this2._setState;
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Com, _extends({}, this.state, this.props));
      }
    }]);

    return Activity;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
}
/**通过代理实现对数据变换的监听 */

function watch(model) {
  if (watchedModels.includes(model)) {
    return model;
  }

  watchedModels.push(model);
  Object.keys(model).forEach(function (key) {
    var des = Object.getOwnPropertyDescriptor(model, key);

    if (des.configurable) {
      var value = model[key];
      Object.defineProperty(model, key, {
        get: function get() {
          //搜集propertyMap中和当前key相关的值
          if (curContext) {
            var _curContext = curContext,
                watching = _curContext.watching,
                curKey = _curContext.curKey,
                watchedMap = _curContext.watchedMap,
                propertyMap = _curContext.propertyMap;

            if (watching && curKey) {
              var res = watchedMap.find(function (item) {
                return item.model === model && item.key === key;
              });

              if (!res) {
                res = {
                  model: model,
                  key: key,
                  fns: {}
                };
                watchedMap.push(res);
              }

              res.fns[curKey] = propertyMap[curKey];
            }
          }

          return value;
        },
        set: function set(val) {
          if (val !== value) {
            value = val; //当model的数据更新后重新计算propertyMap中受影响的值并通知到回调

            contexts.forEach(function (context) {
              var watchedMap = context.watchedMap;
              watchedMap.forEach(function (item) {
                if (item.model === model && item.key === key) {
                  var _values = {};
                  var fns = item.fns;

                  if (Object.keys(fns).length > 0) {
                    item.fns = {};
                    context.watching = true;
                    var oldContext = curContext;
                    curContext = context;
                    Object.keys(fns).forEach(function (key) {
                      context.curKey = key;
                      var value;

                      try {
                        value = evalFn(fns[key]);
                      } catch (err) {
                        value = null;
                      }

                      if (context.oldValues && context.oldValues[key] !== value) {
                        _values[key] = value;
                        context.oldValues[key] = value;
                      }
                    });
                    curContext = oldContext;
                    context.watching = false;
                    if (Object.keys(_values).length > 0) context.callback(_values);
                  }
                }
              });
            });
          }
        },
        configurable: false
      });
    }
  });
  return model;
}
/**执行一次watch的上下文记录 */

/**所有的watch的上下文 */
var contexts = [];
var curContext = null;
/**activityjs正在监听的所有的model的集合 */

var watchedModels = [];
/**
 * 监听这组{key:()=>any}的值，当model数据更新导致其中某几项更新事通知到callback
 * @param propertyMap
 * @param callback
 * @returns
 */

function notify(propertyMap, callback) {
  var context = {
    propertyMap: propertyMap,
    callback: callback,
    watching: false,
    curKey: "",
    watchedMap: [],
    oldValues: {}
  };
  contexts.push(context);
  startWatch(context);
  return function () {
    contexts = contexts.filter(function (item) {
      return item != context;
    });
  };
}

function startWatch(context) {
  context.watching = true;
  var props = {};
  var oldContext = curContext;
  curContext = context;
  Object.keys(context.propertyMap).forEach(function (key) {
    context.curKey = key;
    props[key] = evalFn(context.propertyMap[key]);
  });
  curContext = oldContext;
  context.oldValues = _objectSpread({}, props);
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


function useActivity(fn) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    fn();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unsub = notify({
      val: function val() {
        return fn();
      }
    }, function (_ref) {
      var val = _ref.val;
      setState(function () {
        return val;
      });
    });
    return unsub;
  }, []);
  return state;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map