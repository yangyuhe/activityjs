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
/*! exports provided: connectMulti, connect, realConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectMulti", function() { return connectMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realConnect", function() { return realConnect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * 连接多个model
 * @param models 是connect方法的第一个参数的数组
 * @param Com 组件
 */

function connectMulti(modelUses, Com) {
  var newCom = Com;
  modelUses.forEach(function (modelUse) {
    newCom = connect(modelUse, newCom);
  });
  return newCom;
}
function connect(modelUse, Com) {
  if (!Array.isArray(modelUse[0])) {
    var props = format(modelUse[0], modelUse.slice(1))[1];
    Object.keys(props).forEach(function (name) {
      var exp = props[name];
      exp = exp.split(".")[0];
      watch(modelUse[0], exp, modelUse[0]);
    });
  } else {
    var prefix = modelUse[0][1];
    var _props2 = format(modelUse[0][0], modelUse.slice(1))[1];
    Object.keys(_props2).forEach(function (name) {
      var exp = _props2[name];
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

function realConnect(modelUse, Com) {
  if (!modelUse || !Array.isArray(modelUse) || modelUse.length < 2) throw new Error("connect:modelUse must be array with more than 1 element");

  if (!(modelUse[0] instanceof Object)) {
    throw new Error("connect:model must be an object or array");
  }

  if (Array.isArray(modelUse[0]) && modelUse[0].length !== 2) {
    throw new Error("connect:model array length must be 2");
  }

  if (!Array.isArray(modelUse[0])) {
    var _format = format(modelUse[0], modelUse.slice(1)),
        _format2 = _slicedToArray(_format, 2),
        model = _format2[0],
        props = _format2[1];

    var setStateFns = [];
    var des = Object.getOwnPropertyDescriptor(model, ProxyKey);

    if (!des) {
      Object.defineProperty(model, ProxyKey, {
        value: [],
        configurable: false,
        enumerable: false
      });
    }

    if (model[ProxyKey]) {
      var oldState = {};
      Object.keys(props).forEach(function (name) {
        var exp = props[name];
        var old = evalExp(model, exp);
        oldState[name] = old;
      });
      model[ProxyKey].push(function () {
        var newState = {};
        Object.keys(props).forEach(function (name) {
          var exp = props[name];
          var newV = evalExp(model, exp);

          if (newV !== oldState[name]) {
            newState[name] = newV;
          }
        });

        if (Object.keys(newState).length > 0) {
          setStateFns.forEach(function (fn) {
            fn(newState);
          });
        }

        Object.assign(oldState, newState);
      });
    }

    return /*#__PURE__*/function (_React$PureComponent) {
      _inherits(Activity, _React$PureComponent);

      var _super = _createSuper(Activity);

      function Activity(p) {
        var _this;

        _classCallCheck(this, Activity);

        _this = _super.call(this, p);
        _this._setstate = null;
        var _props = {};
        Object.keys(props).forEach(function (key) {
          _props[key] = evalExp(model, props[key]);
        });
        _this.state = _props;
        _this._setstate = _this.setState.bind(_assertThisInitialized(_this));
        setStateFns.push(_this._setstate);
        return _this;
      }

      _createClass(Activity, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this2 = this;

          setStateFns = setStateFns.filter(function (item) {
            return item !== _this2._setstate;
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
  } else {
    return connectDynamic(modelUse, Com);
  }
}
var DynamicKey = "__$lego_dynamic";

function connectDynamic(modelUse, Com) {
  var path = modelUse[0][1];

  if (!path) {
    return realConnect([modelUse[0][0]].concat(_toConsumableArray(modelUse.slice(1))), Com);
  }

  var _format3 = format(modelUse[0][0], modelUse.slice(1)),
      _format4 = _slicedToArray(_format3, 2),
      model = _format4[0],
      props = _format4[1];

  var instances = [];

  if (model && _typeof(model) === "object") {
    var des = Object.getOwnPropertyDescriptor(model, DynamicKey);

    if (!des) {
      Object.defineProperty(model, DynamicKey, {
        value: [],
        configurable: false,
        enumerable: false
      });
    }

    var callbacks = model[DynamicKey];
    var old = evalExp(model, path);
    callbacks.push(function () {
      var newval = evalExp(model, path);

      if (old !== newval) {
        if (newval) {
          instances.forEach(function (item) {
            item.setState({
              Com: realConnect([newval, props], Com)
            });
          });
        } else {
          instances.forEach(function (item) {
            item.setState({
              Com: null
            });
          });
        }

        old = newval;
      }
    });
  }

  var Wrapper = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(Wrapper, _React$PureComponent2);

    var _super2 = _createSuper(Wrapper);

    function Wrapper(_props) {
      var _this3;

      _classCallCheck(this, Wrapper);

      _this3 = _super2.call(this, _props);
      var activity = evalExp(model, path);
      _this3.state = {
        Com: activity ? realConnect([activity, props], Com) : null
      };
      return _this3;
    }

    _createClass(Wrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        instances.push(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this4 = this;

        instances = instances.filter(function (item) {
          return item !== _this4;
        });
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.Com) {
          var _Com = this.state.Com;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Com, this.props);
        }

        return null;
      }
    }]);

    return Wrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

  return Wrapper;
}

function format(model, props) {
  if (!(model instanceof Object)) {
    throw new Error("connect:model must be an no null object");
  }

  var oldProps = props;
  var newProps = {};

  function keys(prop) {
    if (prop instanceof Object && Object.keys(prop).length > 0) {
      Object.keys(prop).forEach(function (key) {
        if (key && prop[key] && typeof key === "string" && typeof prop[key] === "string") newProps[key] = prop[key];else throw new Error("connect:MapProperty format error");
      });
      return true;
    }

    return false;
  }

  if (oldProps instanceof Array) {
    oldProps.forEach(function (prop) {
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

var ProxyKey = "__$lego_proxyProps";
var WatchKey = "__$watchExp";

function watch(v, path, org) {
  if (path === "" || !v) return;
  var routers = path.split(".");
  var top = routers.shift();

  if (v && _typeof(v) === "object") {
    var prop = Object.getOwnPropertyDescriptor(v, top);
    var oldVal = v[top];

    if (!v[WatchKey]) {
      Object.defineProperty(v, WatchKey, {
        value: {},
        enumerable: false,
        configurable: false
      });
    }

    if (!v[WatchKey][top]) {
      v[WatchKey][top] = [];
    }

    var watches = v[WatchKey][top];
    var other = routers.join(".");

    if (other && watches.indexOf(other) === -1) {
      watches.push(other);
    }

    if (!prop || prop.configurable) {
      Object.defineProperty(v, top, {
        configurable: false,
        get: function get() {
          return oldVal;
        },
        set: function set(newVal) {
          if (newVal !== oldVal) {
            oldVal = newVal;

            if (org && org[DynamicKey]) {
              org[DynamicKey].forEach(function (cb) {
                return cb();
              });
            }

            if (v && v[ProxyKey]) {
              v[ProxyKey].forEach(function (cb) {
                return cb();
              });
            }

            if (newVal) {
              watches.forEach(function (exp) {
                watch(newVal, exp, org);
              });
            }
          }
        }
      });
    }

    if (routers.length > 0) watch(oldVal, routers.join("."), org);
  }
}

function evalExp(v, expr) {
  var f = new Function("obj", "return obj." + expr);

  try {
    return f(v);
  } catch (err) {
    return null;
  }
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