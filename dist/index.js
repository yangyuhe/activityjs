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
/*! exports provided: connect, watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


function connect(propertyMap, Com) {
  var callbacks = [];
  notify(propertyMap, function (values) {
    callbacks.forEach(function (cb) {
      return cb(values);
    });
  });
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
      var queue = new EventQueue(function (states) {
        _this.setState(states);
      });

      _this._setState = function (state) {
        queue.enter(state);
      };

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
            value = val;
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
var contexts = [];
var curContext = null;
var watchedModels = [];

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
  watchingContext(context);
}

function watchingContext(context) {
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

var EventQueue = /*#__PURE__*/function () {
  function EventQueue(callback) {
    _classCallCheck(this, EventQueue);

    this.queue = [];
    this.callback = null;
    this.callback = callback;
  }

  _createClass(EventQueue, [{
    key: "enter",
    value: function enter(state) {
      var _this3 = this;

      if (this.queue.length === 0) {
        Promise.resolve().then(function () {
          _this3.consume();
        });
      }

      this.queue.push(state);
    }
  }, {
    key: "consume",
    value: function consume() {
      var states = {};
      this.queue.forEach(function (state) {
        Object.assign(states, state);
      });
      this.queue = [];
      this.callback(states);
    }
  }]);

  return EventQueue;
}();

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