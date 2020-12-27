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
/*! exports provided: connectMulti, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectMulti", function() { return connectMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
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

function connect(modelUse, Com) {
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

    var item = {
      component: Com,
      props: props,
      changeProps: []
    };

    if (!model.__$mounts) {
      Object.defineProperty(model, "__$mounts", {
        enumerable: false,
        value: [],
        configurable: false
      });
    }

    var mounts = model.__$mounts;
    mounts.push(item);
    proxyProps(model, Object.values(props));
    return /*#__PURE__*/function (_React$PureComponent) {
      _inherits(Activity, _React$PureComponent);

      var _super = _createSuper(Activity);

      function Activity(p) {
        var _this;

        _classCallCheck(this, Activity);

        _this = _super.call(this, p);
        _this._setstate = null;

        var _props = getProps(model, props);

        _this.state = _props;
        _this._setstate = _this.setState.bind(_assertThisInitialized(_this));
        item.changeProps.push(_this._setstate);
        return _this;
      }

      _createClass(Activity, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this2 = this;

          item.changeProps = item.changeProps.filter(function (item) {
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

function connectDynamic(modelUse, Com) {
  var path = modelUse[0][1];

  if (!path) {
    return connect([modelUse[0][0]].concat(_toConsumableArray(modelUse.slice(1))), Com);
  }

  var _format3 = format(modelUse[0][0], modelUse.slice(1)),
      _format4 = _slicedToArray(_format3, 2),
      model = _format4[0],
      props = _format4[1];

  var instances = [];
  watch(model, path, function (oldVal, newVal) {
    if (newVal) {
      instances.forEach(function (item) {
        item.setState({
          Com: connect([newVal, props], Com)
        });
      });
    } else {
      instances.forEach(function (item) {
        item.setState({
          Com: null
        });
      });
    }
  });

  var Wrapper = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(Wrapper, _React$PureComponent2);

    var _super2 = _createSuper(Wrapper);

    function Wrapper(props) {
      var _this3;

      _classCallCheck(this, Wrapper);

      _this3 = _super2.call(this, props);
      var activity = evalExp(model, path);
      _this3.state = {
        Com: activity ? connect([activity, props], Com) : null
      };
      return _this3;
    }

    _createClass(Wrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        instances.push(this);
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {
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

function proxyProps(model, props) {
  props.forEach(function (prop) {
    var descriptor = Object.getOwnPropertyDescriptor(model, prop);

    if (!model.hasOwnProperty(prop) || descriptor && !descriptor.configurable) {
      return;
    }

    var value = model[prop];
    Object.defineProperty(model, prop, {
      get: function get() {
        return value;
      },
      set: function set(val) {
        if (value !== val) {
          value = val;
          update(model);
        }
      },
      configurable: false
    });
  });
}

function update(model) {
  model.__$mounts.forEach(function (item) {
    var props = getProps(model, item.props);
    item.changeProps.forEach(function (func) {
      return func(props);
    });
  });
}

function getProps(model, props) {
  var _props = {};

  var res = _getProps(model, Object.values(props));

  Object.keys(props).forEach(function (name) {
    _props[name] = res[props[name]];
  });
  return _props;
}

function _getProps(model, props) {
  var _props = {};
  props.forEach(function (p) {
    _props[p] = model[p];
  });
  return _props;
}

function watch(v, path, cb) {
  if (path === "" || !v) return;
  var routers = path.split(".");
  var top = routers.shift();

  if (v && _typeof(v) === "object") {
    if (!v["__$" + top]) {
      v["__$" + top] = [];
    }

    var cbs = v["__$" + top];
    var leftPath = routers.join(".");
    if (!cbs.find(function (item) {
      return item.path === leftPath && item.fn === cb;
    })) cbs.push({
      path: leftPath,
      fn: cb
    });
    var prop = Object.getOwnPropertyDescriptor(v, top);
    var value = v[top];

    if (!prop || prop.configurable) {
      Object.defineProperty(v, top, {
        configurable: false,
        get: function get() {
          return value;
        },
        set: function set(val) {
          if (val !== value) {
            cbs.forEach(function (item) {
              if (item.path === "") item.fn(value, val);else {
                var old = evalExp(value, item.path);
                var newval = evalExp(val, item.path);

                if (old !== newval) {
                  item.fn(old, newval);
                }
              }
            });
            value = val;
            cbs.forEach(function (item) {
              watch(value, item.path, item.fn);
            });
          }
        }
      });
    }

    watch(value, leftPath, cb);
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