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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Activity = /*#__PURE__*/function () {
  function Activity() {
    _classCallCheck(this, Activity);

    this.mounts = [];
  }

  _createClass(Activity, [{
    key: "update",
    value: function update() {
      var _this = this;

      this.mounts.forEach(function (item) {
        var props = _this.getProps(item.props);

        item.changeProps.forEach(function (func) {
          return func(props);
        });
      });
    }
  }, {
    key: "_getProps",
    value: function _getProps(props) {
      var _this2 = this;

      var _props = {};
      props.forEach(function (p) {
        if (typeof _this2[p] === "function" && Object.hasOwnProperty.call(_this2[p], "prototype") && _this2.isProtoFunc(p)) {
          _this2[p] = _this2[p].bind(_this2);
        }

        _props[p] = _this2[p];
      });
      return _props;
    }
  }, {
    key: "getProps",
    value: function getProps(props) {
      if (props instanceof Array) {
        return this._getProps(props);
      } else {
        var _props = {};

        var res = this._getProps(Object.keys(props));

        Object.keys(res).forEach(function (prop) {
          _props[props[prop]] = res[prop];
        });
        return _props;
      }
    }
  }, {
    key: "proxyProps",
    value: function proxyProps(props) {
      var _this3 = this;

      props.forEach(function (prop) {
        var descriptor = Object.getOwnPropertyDescriptor(_this3, prop);

        if (_this3.isProtoFunc(prop) || descriptor && !descriptor.configurable) {
          return;
        }

        var value = _this3[prop];
        Object.defineProperty(_this3, prop, {
          get: function get() {
            return value;
          },
          set: function set(val) {
            value = val;

            _this3.update();
          },
          configurable: false
        });
      });
    }
  }, {
    key: "mountDynamic",
    value: function mountDynamic(Com, depth) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var depths = depth.split(".");
      var prop = depths.shift();

      var Wrapper = /*#__PURE__*/function (_React$PureComponent) {
        _inherits(Wrapper, _React$PureComponent);

        var _super = _createSuper(Wrapper);

        function Wrapper() {
          _classCallCheck(this, Wrapper);

          return _super.apply(this, arguments);
        }

        _createClass(Wrapper, [{
          key: "render",
          value: function render() {
            var $activity = this.props.$activity;
            var $deps;
            if (this.props.$deps) $deps = this.props.$deps;else $deps = depths.slice(0);

            if ($activity) {
              var Inner;

              if ($deps.length == 0) {
                Inner = $activity.mount(Com, props);
              } else {
                var _prop = $deps.shift();

                Inner = $activity.mount(Wrapper, _defineProperty({}, _prop, "$activity"));
              }

              var newProps = Object.assign({}, this.props);
              delete newProps.$activity;
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, _extends({}, newProps, {
                $deps: $deps.slice(0)
              }));
            }

            return null;
          }
        }]);

        return Wrapper;
      }(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

      return this.mount(Wrapper, _defineProperty({}, prop, "$activity"));
    }
  }, {
    key: "mount",
    value: function mount(Com) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var that = this;
      var item = {
        component: Com,
        props: props,
        changeProps: []
      };
      this.mounts.push(item);
      this.proxyProps(props instanceof Array ? props : Object.keys(props));
      return /*#__PURE__*/function (_React$PureComponent2) {
        _inherits(Activity, _React$PureComponent2);

        var _super2 = _createSuper(Activity);

        function Activity(p) {
          var _this4;

          _classCallCheck(this, Activity);

          _this4 = _super2.call(this, p);
          _this4._setstate = null;

          var _props = that.getProps(props);

          _this4.state = _props;
          _this4._setstate = _this4.setState.bind(_assertThisInitialized(_this4));
          item.changeProps.push(_this4._setstate);
          return _this4;
        }

        _createClass(Activity, [{
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            var _this5 = this;

            item.changeProps = item.changeProps.filter(function (item) {
              return item !== _this5._setstate;
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
  }, {
    key: "isProtoFunc",
    value: function isProtoFunc(funcName) {
      var proto = Object.getPrototypeOf(this);

      while (proto) {
        if (proto[funcName]) {
          return true;
        }

        proto = Object.getPrototypeOf(proto);
      }

      return false;
    }
  }]);

  return Activity;
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