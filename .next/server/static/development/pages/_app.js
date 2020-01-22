module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const api = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://159.65.14.175:3001/api" // process.env.NODE_ENV === "production"
  //   ? "http://localhost:3001/api"
  //   : "http://localhost:3001/api"

});
api.interceptors.request.use(config => {
  const token = localStorage.getItem("accessKey");

  if (token) {
    config.headers = {
      Authorization: `${token}`
    };
  }

  return config;
});
api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.message === "Network Error") {
    // The user doesn't have internet
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  }

  switch (error.response.status) {
    case 400:
      break;

    case 401:
      // not logged in
      if (window.location.pathname != "/login") {
        window.location.replace("/login");
      }

      break;

    case 403:
      // no access rights
      break;

    case 404:
      break;

    case 500:
      break;

    default:
      // Unknown Error
      break;
  }

  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./assets/styles/animate.min.css":
/*!***************************************!*\
  !*** ./assets/styles/animate.min.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/bootstrap.min.css":
/*!*****************************************!*\
  !*** ./assets/styles/bootstrap.min.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/fontawesome.min.css":
/*!*******************************************!*\
  !*** ./assets/styles/fontawesome.min.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/responsive.css":
/*!**************************************!*\
  !*** ./assets/styles/responsive.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/slick-theme.css":
/*!***************************************!*\
  !*** ./assets/styles/slick-theme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/slick.css":
/*!*********************************!*\
  !*** ./assets/styles/slick.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/style.css":
/*!*********************************!*\
  !*** ./assets/styles/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class GoTop extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onScrollStep", () => {
      this._isMounted = true;

      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollToTop", () => {
      this._isMounted = true;
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({
        intervalId: intervalId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderGoTopIcon", () => {
      if (this.state.thePosition) {
        return __jsx("div", {
          className: "go-top",
          onClick: this.scrollToTop
        }, __jsx("i", {
          className: "fas fa-arrow-up"
        }), __jsx("i", {
          className: "fas fa-arrow-up"
        }));
      }
    });

    this.state = {
      intervalId: 0,
      thePosition: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({
          thePosition: true
        });
      } else {
        this.setState({
          thePosition: false
        });
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.renderGoTopIcon());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/bootstrap.min.css */ "./assets/styles/bootstrap.min.css");
/* harmony import */ var _assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/fontawesome.min.css */ "./assets/styles/fontawesome.min.css");
/* harmony import */ var _assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/style.css */ "./assets/styles/style.css");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/styles/responsive.css */ "./assets/styles/responsive.css");
/* harmony import */ var _assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/styles/animate.min.css */ "./assets/styles/animate.min.css");
/* harmony import */ var _assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styles/slick.css */ "./assets/styles/slick.css");
/* harmony import */ var _assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/styles/slick-theme.css */ "./assets/styles/slick-theme.css");
/* harmony import */ var _assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var Store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Store */ "./redux/store.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_9___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_13__["DefaultSeo"], {
      title: "Venture Cars",
      description: "Venture Cars"
    }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
      store: store
    }, __jsx(Component, pageProps)), __jsx(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_14__["default"], {
      scrollStepInPx: "50",
      delayInMs: "16.66"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default()(Store__WEBPACK_IMPORTED_MODULE_12__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_11___default()(MyApp)));

/***/ }),

/***/ "./redux/ducks/model/ModelActions.js":
/*!*******************************************!*\
  !*** ./redux/ducks/model/ModelActions.js ***!
  \*******************************************/
/*! exports provided: getModelData, getModelDataSuccess, getModelDataFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelData", function() { return getModelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelDataSuccess", function() { return getModelDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelDataFailure", function() { return getModelDataFailure; });
/* harmony import */ var _ModelTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelTypes */ "./redux/ducks/model/ModelTypes.js");
 // Get grades of selected model

const getModelData = e => ({
  type: _ModelTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MODEL_DATA"],
  payload: e
});
const getModelDataSuccess = e => ({
  type: _ModelTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MODEL_DATA_SUCCESS"],
  payload: e
});
const getModelDataFailure = e => ({
  type: _ModelTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MODEL_DATA_FAILURE"],
  payload: e
});

/***/ }),

/***/ "./redux/ducks/model/ModelReducer.js":
/*!*******************************************!*\
  !*** ./redux/ducks/model/ModelReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _ModelTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModelTypes */ "./redux/ducks/model/ModelTypes.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const INIT_STATE = {
  ModelData: {
    id: null,
    name: null,
    description: null,
    ProductGradeData: {}
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch (action.type) {
    case _ModelTypes__WEBPACK_IMPORTED_MODULE_7__["GET_MODEL_DATA"]:
      return _objectSpread({}, state);

    case _ModelTypes__WEBPACK_IMPORTED_MODULE_7__["GET_MODEL_DATA_SUCCESS"]:
      const {
        data
      } = action.payload;
      return {
        id: data.id,
        name: data.name,
        description: data.description,
        ProductGradeData: data
      };

    case _ModelTypes__WEBPACK_IMPORTED_MODULE_7__["GET_MODEL_DATA_FAILURE"]:
      return _objectSpread({}, state);

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./redux/ducks/model/ModelSaga.js":
/*!****************************************!*\
  !*** ./redux/ducks/model/ModelSaga.js ***!
  \****************************************/
/*! exports provided: getModelDataWatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelDataWatcher", function() { return getModelDataWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelTypes */ "./redux/ducks/model/ModelTypes.js");
/* harmony import */ var _ModelActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelActions */ "./redux/ducks/model/ModelActions.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Api */ "./api/index.js");



 //=========================
// REQUESTS
//=========================

const getModelDataRequest = async payload => {
  const data = await Api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/categories/${payload.payload}`);
  return data;
}; //=========================
// CALL(GENERATOR) ACTIONS
//=========================


function* getModelData(e) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getModelDataRequest, e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ModelActions__WEBPACK_IMPORTED_MODULE_2__["getModelDataSuccess"](data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ModelActions__WEBPACK_IMPORTED_MODULE_2__["getModelDataFailure"](data));
    console.log("Error!");
  }
} //=======================
// WATCHER FUNCTIONS
//=======================


function* getModelDataWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_ModelTypes__WEBPACK_IMPORTED_MODULE_1__["GET_MODEL_DATA"], getModelData);
} //=======================
// FORK SAGAS TO STORE
//=======================

function* ModelSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getModelDataWatcher)]);
}

/***/ }),

/***/ "./redux/ducks/model/ModelTypes.js":
/*!*****************************************!*\
  !*** ./redux/ducks/model/ModelTypes.js ***!
  \*****************************************/
/*! exports provided: GET_MODEL_DATA, GET_MODEL_DATA_SUCCESS, GET_MODEL_DATA_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MODEL_DATA", function() { return GET_MODEL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MODEL_DATA_SUCCESS", function() { return GET_MODEL_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MODEL_DATA_FAILURE", function() { return GET_MODEL_DATA_FAILURE; });
// Get data of selected model
const GET_MODEL_DATA = "GET_MODEL_DATA";
const GET_MODEL_DATA_SUCCESS = "GET_MODEL_DATA_SUCCESS";
const GET_MODEL_DATA_FAILURE = "GET_MODEL_DATA_FAILURE";

/***/ }),

/***/ "./redux/ducks/model/index.js":
/*!************************************!*\
  !*** ./redux/ducks/model/index.js ***!
  \************************************/
/*! exports provided: getModelData, getModelDataSuccess, getModelDataFailure, GET_MODEL_DATA, GET_MODEL_DATA_SUCCESS, GET_MODEL_DATA_FAILURE, ModelReducer, ModelSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModelActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelActions */ "./redux/ducks/model/ModelActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelData", function() { return _ModelActions__WEBPACK_IMPORTED_MODULE_0__["getModelData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelDataSuccess", function() { return _ModelActions__WEBPACK_IMPORTED_MODULE_0__["getModelDataSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelDataFailure", function() { return _ModelActions__WEBPACK_IMPORTED_MODULE_0__["getModelDataFailure"]; });

/* harmony import */ var _ModelTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelTypes */ "./redux/ducks/model/ModelTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MODEL_DATA", function() { return _ModelTypes__WEBPACK_IMPORTED_MODULE_1__["GET_MODEL_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MODEL_DATA_SUCCESS", function() { return _ModelTypes__WEBPACK_IMPORTED_MODULE_1__["GET_MODEL_DATA_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MODEL_DATA_FAILURE", function() { return _ModelTypes__WEBPACK_IMPORTED_MODULE_1__["GET_MODEL_DATA_FAILURE"]; });

/* harmony import */ var _ModelReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelReducer */ "./redux/ducks/model/ModelReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelReducer", function() { return _ModelReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ModelSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelSaga */ "./redux/ducks/model/ModelSaga.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelSaga", function() { return _ModelSaga__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./redux/ducks/product/ProductActions.js":
/*!***********************************************!*\
  !*** ./redux/ducks/product/ProductActions.js ***!
  \***********************************************/
/*! exports provided: getProductModelData, getProductModelDataSuccess, getProductModelDataFailure, getProductGrades, getProductGradesSuccess, getProductGradesFailure, selectedProductGrade, getProductGradeData, getProductGradeDataSuccess, getProductGradeDataFailure, selectedProductExterior, selectedProductInterior, selectedProductRims, selectedProductAccessories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductModelData", function() { return getProductModelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductModelDataSuccess", function() { return getProductModelDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductModelDataFailure", function() { return getProductModelDataFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGrades", function() { return getProductGrades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradesSuccess", function() { return getProductGradesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradesFailure", function() { return getProductGradesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedProductGrade", function() { return selectedProductGrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradeData", function() { return getProductGradeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradeDataSuccess", function() { return getProductGradeDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradeDataFailure", function() { return getProductGradeDataFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedProductExterior", function() { return selectedProductExterior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedProductInterior", function() { return selectedProductInterior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedProductRims", function() { return selectedProductRims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedProductAccessories", function() { return selectedProductAccessories; });
/* harmony import */ var _ProductTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductTypes */ "./redux/ducks/product/ProductTypes.js");
 // Get data of selected model

const getProductModelData = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_MODEL_DATA"],
  payload: e
});
const getProductModelDataSuccess = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_MODEL_DATA_SUCCESS"],
  payload: e
});
const getProductModelDataFailure = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_MODEL_DATA_FAILURE"],
  payload: e
}); // Get grades of selected model

const getProductGrades = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADES"],
  payload: e
});
const getProductGradesSuccess = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADES_SUCCESS"],
  payload: e
});
const getProductGradesFailure = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADES_FAILURE"],
  payload: e
}); // Update selected grade

const selectedProductGrade = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_GRADE"],
  payload: e
}); // Get data of selected grade

const getProductGradeData = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADE_DATA"],
  payload: e
});
const getProductGradeDataSuccess = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADE_DATA_SUCCESS"],
  payload: e
});
const getProductGradeDataFailure = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADE_DATA_FAILURE"],
  payload: e
}); // Update selected exterior

const selectedProductExterior = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_EXTERIOR"],
  payload: e
}); // Update selected interior

const selectedProductInterior = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_INTERIOR"],
  payload: e
}); // Update selected rims

const selectedProductRims = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_RIMS"],
  payload: e
}); // Update selected accessories

const selectedProductAccessories = e => ({
  type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_ACCESSORIES"],
  payload: e
});

/***/ }),

/***/ "./redux/ducks/product/ProductReducer.js":
/*!***********************************************!*\
  !*** ./redux/ducks/product/ProductReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _ProductTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductTypes */ "./redux/ducks/product/ProductTypes.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const INIT_STATE = {
  productModel: {
    id: null,
    name: null
  },
  productGrade: {
    id: null,
    name: null,
    price: 0,
    data: {}
  },
  productExterior: {
    id: null,
    name: null,
    price: 0,
    data: {}
  },
  productInterior: {
    id: null,
    name: null,
    price: 0,
    data: {}
  },
  productRims: {
    id: null,
    name: null,
    price: 0,
    data: {}
  },
  productAccessories: {
    selectedIds: {},
    data: {}
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch (action.type) {
    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_MODEL_DATA"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_MODEL_DATA_SUCCESS"]:
      const {
        data
      } = action.payload;
      return _objectSpread({}, state, {
        productModel: {
          id: data.id,
          name: data.name
        }
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_MODEL_DATA_FAILURE"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_GRADES"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_GRADES_SUCCESS"]:
      return _objectSpread({}, state, {
        productGrade: _objectSpread({}, state.productGrade, {
          data: action.payload.data
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_GRADES_FAILURE"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_GRADE"]:
      var id = action.payload;
      var {
        fields
      } = state.productGrade.data;
      var object = fields.find(element => element.id === id);
      return _objectSpread({}, state, {
        productGrade: _objectSpread({}, state.productGrade, {
          id: object.id,
          name: object.name,
          price: object.selling_Price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_GRADE_DATA"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_GRADE_DATA_SUCCESS"]:
      let accessoriesIdList = {};

      const populateAccessoriesIds = action => {
        action.payload.accessoriesData.data.fields.map(item => {
          _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(item).map(key => {
            key.map(item => {
              accessoriesIdList[item.id] = false;
            });
          });
        });
      };

      populateAccessoriesIds(action);
      return _objectSpread({}, state, {
        productExterior: _objectSpread({}, state.productExterior, {
          data: action.payload.exteriorData.data
        }),
        productInterior: _objectSpread({}, state.productInterior, {
          data: action.payload.interiorData.data
        }),
        productRims: _objectSpread({}, state.productInterior, {
          data: action.payload.interiorData.data
        }),
        productAccessories: {
          selectedIds: accessoriesIdList,
          data: action.payload.accessoriesData.data
        }
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_GRADE_DATA_FAILURE"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_EXTERIOR"]:
      var id = action.payload;
      var {
        objects
      } = state.productExterior.data.fields["Car Colors"];
      var object = objects.find(element => element.id === id);
      return _objectSpread({}, state, {
        productExterior: _objectSpread({}, state.productExterior, {
          id: object.id,
          name: object.name,
          price: object.price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_INTERIOR"]:
      var id = action.payload;
      var {
        objects
      } = state.productInterior.data.fields["Seating Fabrics"];
      var object = objects.find(element => element.id === id);
      return _objectSpread({}, state, {
        productInterior: _objectSpread({}, state.productInterior, {
          id: object.id,
          name: object.name,
          price: object.price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_RIMS"]:
      var id = action.payload;
      var {
        objects
      } = state.productInterior.data.fields["Rims"];
      var object = objects.find(element => element.id === id);
      return _objectSpread({}, state, {
        productRims: _objectSpread({}, state.productRims, {
          id: object.id,
          name: object.name,
          price: object.price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_ACCESSORIES"]:
      const newValue = !state.productAccessories.selectedIds[action.payload];
      return _objectSpread({}, state, {
        productAccessories: _objectSpread({}, state.productAccessories, {
          selectedIds: _objectSpread({}, state.productAccessories.selectedIds, {
            [action.payload]: newValue
          })
        })
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./redux/ducks/product/ProductSaga.js":
/*!********************************************!*\
  !*** ./redux/ducks/product/ProductSaga.js ***!
  \********************************************/
/*! exports provided: getProductModelDataWatcher, getProductGradesWatcher, getProductGradeDataWatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductModelDataWatcher", function() { return getProductModelDataWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradesWatcher", function() { return getProductGradesWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductGradeDataWatcher", function() { return getProductGradeDataWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTypes */ "./redux/ducks/product/ProductTypes.js");
/* harmony import */ var _ProductActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductActions */ "./redux/ducks/product/ProductActions.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Api */ "./api/index.js");



 //=========================
// REQUESTS
//=========================

const getProductModelDataRequest = async payload => {
  const data = await Api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/categories/${payload.payload}`);
  return data;
};

const getProductGradesRequest = async payload => {
  const data = await Api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/products/specificGrades/${payload.payload}`);
  return data;
};

const getProductGradeDataRequest = async payload => {
  const exteriorData = await Api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/products/specificVariantExterior/${payload.payload}`);
  const interiorData = await Api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/products/specificVariantInterior/${payload.payload}`);
  const accessoriesData = await Api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/products/specificGradeProductOption/${payload.payload}`);
  const data = {
    exteriorData: exteriorData,
    interiorData: interiorData,
    accessoriesData: accessoriesData
  };
  return data;
}; //=========================
// CALL(GENERATOR) ACTIONS
//=========================


function* getProductModelData(e) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getProductModelDataRequest, e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductModelDataSuccess"](data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductModelDataFailure"](data));
    console.log("Error!");
  }
}

function* getProductGrades(e) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getProductGradesRequest, e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductGradesSuccess"](data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductGradesFailure"](data));
    console.log("Error!");
  }
}

function* getProductGradeData(e) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getProductGradeDataRequest, e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductGradeDataSuccess"](data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductGradeDataFailure"](data));
    console.log("Error!");
  }
} //=======================
// WATCHER FUNCTIONS
//=======================


function* getProductModelDataWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_MODEL_DATA"], getProductModelData);
}
function* getProductGradesWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADES"], getProductGrades);
}
function* getProductGradeDataWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADE_DATA"], getProductGradeData);
} //=======================
// FORK SAGAS TO STORE
//=======================

function* productSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getProductModelDataWatcher), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getProductGradesWatcher), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getProductGradeDataWatcher)]);
}

/***/ }),

/***/ "./redux/ducks/product/ProductTypes.js":
/*!*********************************************!*\
  !*** ./redux/ducks/product/ProductTypes.js ***!
  \*********************************************/
/*! exports provided: GET_PRODUCT_MODEL_DATA, GET_PRODUCT_MODEL_DATA_SUCCESS, GET_PRODUCT_MODEL_DATA_FAILURE, GET_PRODUCT_GRADES, GET_PRODUCT_GRADES_SUCCESS, GET_PRODUCT_GRADES_FAILURE, SELECTED_PRODUCT_GRADE, GET_PRODUCT_GRADE_DATA, GET_PRODUCT_GRADE_DATA_SUCCESS, GET_PRODUCT_GRADE_DATA_FAILURE, SELECTED_PRODUCT_EXTERIOR, SELECTED_PRODUCT_INTERIOR, SELECTED_PRODUCT_RIMS, SELECTED_PRODUCT_ACCESSORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_MODEL_DATA", function() { return GET_PRODUCT_MODEL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_MODEL_DATA_SUCCESS", function() { return GET_PRODUCT_MODEL_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_MODEL_DATA_FAILURE", function() { return GET_PRODUCT_MODEL_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADES", function() { return GET_PRODUCT_GRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADES_SUCCESS", function() { return GET_PRODUCT_GRADES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADES_FAILURE", function() { return GET_PRODUCT_GRADES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_GRADE", function() { return SELECTED_PRODUCT_GRADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADE_DATA", function() { return GET_PRODUCT_GRADE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADE_DATA_SUCCESS", function() { return GET_PRODUCT_GRADE_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADE_DATA_FAILURE", function() { return GET_PRODUCT_GRADE_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_EXTERIOR", function() { return SELECTED_PRODUCT_EXTERIOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_INTERIOR", function() { return SELECTED_PRODUCT_INTERIOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_RIMS", function() { return SELECTED_PRODUCT_RIMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_ACCESSORIES", function() { return SELECTED_PRODUCT_ACCESSORIES; });
// Get data of selected model
const GET_PRODUCT_MODEL_DATA = "GET_PRODUCT_MODEL_DATA";
const GET_PRODUCT_MODEL_DATA_SUCCESS = "GET_PRODUCT_MODEL_DATA_SUCCESS";
const GET_PRODUCT_MODEL_DATA_FAILURE = "GET_PRODUCT_MODEL_DATA_FAILURE"; // Retrieve grades of selected model

const GET_PRODUCT_GRADES = "GET_PRODUCT_GRADES";
const GET_PRODUCT_GRADES_SUCCESS = "GET_PRODUCT_GRADES_SUCCESS";
const GET_PRODUCT_GRADES_FAILURE = "GET_PRODUCT_GRADES_FAILURE"; // Update selected grade

const SELECTED_PRODUCT_GRADE = "SELECTED_PRODUCT_GRADE"; // Get data of selected grade

const GET_PRODUCT_GRADE_DATA = "GET_PRODUCT_GRADE_DATA";
const GET_PRODUCT_GRADE_DATA_SUCCESS = "GET_PRODUCT_GRADE_DATA_SUCCESS";
const GET_PRODUCT_GRADE_DATA_FAILURE = "GET_PRODUCT_GRADE_DATA_FAILURE"; // Update selected exterior

const SELECTED_PRODUCT_EXTERIOR = "SELECTED_PRODUCT_EXTERIOR"; // Update selected interior

const SELECTED_PRODUCT_INTERIOR = "SELECTED_PRODUCT_INTERIOR"; // Update selected rims

const SELECTED_PRODUCT_RIMS = "SELECTED_PRODUCT_RIMS"; // Update selected rims

const SELECTED_PRODUCT_ACCESSORIES = "SELECTED_PRODUCT_ACCESSORIES";

/***/ }),

/***/ "./redux/ducks/product/index.js":
/*!**************************************!*\
  !*** ./redux/ducks/product/index.js ***!
  \**************************************/
/*! exports provided: GET_PRODUCT_MODEL_DATA, GET_PRODUCT_MODEL_DATA_SUCCESS, GET_PRODUCT_MODEL_DATA_FAILURE, GET_PRODUCT_GRADES, GET_PRODUCT_GRADES_SUCCESS, GET_PRODUCT_GRADES_FAILURE, SELECTED_PRODUCT_GRADE, GET_PRODUCT_GRADE_DATA, GET_PRODUCT_GRADE_DATA_SUCCESS, GET_PRODUCT_GRADE_DATA_FAILURE, SELECTED_PRODUCT_EXTERIOR, SELECTED_PRODUCT_INTERIOR, SELECTED_PRODUCT_RIMS, SELECTED_PRODUCT_ACCESSORIES, ProductReducer, ProductSaga, getProductModelData, getProductModelDataSuccess, getProductModelDataFailure, getProductGrades, getProductGradesSuccess, getProductGradesFailure, selectedProductGrade, getProductGradeData, getProductGradeDataSuccess, getProductGradeDataFailure, selectedProductExterior, selectedProductInterior, selectedProductRims, selectedProductAccessories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductActions */ "./redux/ducks/product/ProductActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductModelData", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductModelData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductModelDataSuccess", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductModelDataSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductModelDataFailure", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductModelDataFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductGrades", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductGrades"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductGradesSuccess", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductGradesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductGradesFailure", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductGradesFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedProductGrade", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["selectedProductGrade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductGradeData", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductGradeData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductGradeDataSuccess", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductGradeDataSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductGradeDataFailure", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["getProductGradeDataFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedProductExterior", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["selectedProductExterior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedProductInterior", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["selectedProductInterior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedProductRims", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["selectedProductRims"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedProductAccessories", function() { return _ProductActions__WEBPACK_IMPORTED_MODULE_0__["selectedProductAccessories"]; });

/* harmony import */ var _ProductTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTypes */ "./redux/ducks/product/ProductTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_MODEL_DATA", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_MODEL_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_MODEL_DATA_SUCCESS", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_MODEL_DATA_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_MODEL_DATA_FAILURE", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_MODEL_DATA_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADES", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADES_SUCCESS", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADES_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADES_FAILURE", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADES_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_GRADE", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["SELECTED_PRODUCT_GRADE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADE_DATA", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADE_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADE_DATA_SUCCESS", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADE_DATA_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_GRADE_DATA_FAILURE", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_GRADE_DATA_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_EXTERIOR", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["SELECTED_PRODUCT_EXTERIOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_INTERIOR", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["SELECTED_PRODUCT_INTERIOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_RIMS", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["SELECTED_PRODUCT_RIMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTED_PRODUCT_ACCESSORIES", function() { return _ProductTypes__WEBPACK_IMPORTED_MODULE_1__["SELECTED_PRODUCT_ACCESSORIES"]; });

/* harmony import */ var _ProductReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductReducer */ "./redux/ducks/product/ProductReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductReducer", function() { return _ProductReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProductSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductSaga */ "./redux/ducks/product/ProductSaga.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSaga", function() { return _ProductSaga__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Ducks_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Ducks/product */ "./redux/ducks/product/index.js");
/* harmony import */ var Ducks_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ducks/model */ "./redux/ducks/model/index.js");
/**
 * App Reducers
 */



const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  ProductState: Ducks_product__WEBPACK_IMPORTED_MODULE_1__["ProductReducer"],
  ModelState: Ducks_model__WEBPACK_IMPORTED_MODULE_2__["ModelReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./redux/sagas.js":
/*!************************!*\
  !*** ./redux/sagas.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Ducks_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Ducks/product */ "./redux/ducks/product/index.js");
/* harmony import */ var Ducks_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ducks/model */ "./redux/ducks/model/index.js");
/**
 * Root Sagas
 */
 // import Sagas



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(Ducks_product__WEBPACK_IMPORTED_MODULE_1__["ProductSaga"])(), Object(Ducks_model__WEBPACK_IMPORTED_MODULE_2__["ModelSaga"])()]);
}

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./redux/sagas.js");
/**
 * Redux Store
 */





const makeStore = (initialState, options) => {
  // 1: Create the middleware
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))); // sagaMiddleware.run(RootSaga);

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);

  if (false) {}

  store.subscribe(() => {
    store.getState();
  }); // store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}; // // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
// export function configureStore(initialState) {
//   const store = createStore(
//     reducers,
//     initialState,
//     compose(applyMiddleware(...middlewares))
//   );
//   sagaMiddleware.run(RootSaga);
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept("./reducers", () => {
//       const nextRootReducer = require("./reducers");
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//   store.subscribe(() => {
//     store.getState();
//   });
//   return store;
// }
// export const store = makeStore();


/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map