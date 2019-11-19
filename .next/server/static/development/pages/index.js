module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CategoryProducts.js":
/*!*****************************!*\
  !*** ./CategoryProducts.js ***!
  \*****************************/
/*! exports provided: category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
const category = [{
  "id": 1,
  "title": "Toyota",
  "image": ""
}, {
  "id": 2,
  "title": "Honda",
  "image": ""
}, {
  "id": 3,
  "title": "Suzuki",
  "image": ""
}];

/***/ }),

/***/ "./components/Common/Facility.js":
/*!***************************************!*\
  !*** ./components/Common/Facility.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Facility extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "jumbotron jumbotron-fluid facility-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("h2", null, "SHOP YOUR NEW RIDE WITH US TODAY!"), __jsx("p", {
      class: "lead"
    }, "Venture Cars was established in 2009 to meet the rise in demand for brand new cars in brands such as Toyota and Honda hybrid models. As a Casetrust Accredited Parallel Importer, we're proud to have delivered over 1000 cars since the inception of Venture Cars. More than 10 years in the business, we are familiar with buying, selling, insurance, financing, rental, leasing, limousine, workshop and accident claims."), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-hand-holding-usd"
    })), __jsx("h3", null, "Lowest Depreciation"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-money-check-alt"
    })), __jsx("h3", null, "Highest OMV in the market"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-shield-alt"
    })), __jsx("h3", null, "5 Years In-House Warranty"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-concierge-bell"
    })), __jsx("h3", null, "1 Year Free Servicing"))), __jsx("div", {
      class: "text-center"
    }, __jsx("button", {
      type: "button",
      class: "btn btn-primary"
    }, "Book A Test Drive With Us!")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Facility);

/***/ }),

/***/ "./components/Common/Subscribe.js":
/*!****************************************!*\
  !*** ./components/Common/Subscribe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Subscribe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "subscribe-area ptb-60"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "newsletter-content"
    }, __jsx("h3", null, "Subscribe to our newsletter"), __jsx("p", null, "A short sentence describing what someone will receive by subscribing"))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("form", {
      className: "newsletter-form",
      "data-toggle": "validator"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Enter your email address",
      name: "EMAIL",
      required: true,
      autoComplete: "off"
    }), __jsx("button", {
      type: "submit"
    }, "Subscribe"), __jsx("div", {
      id: "validator-newsletter",
      className: "form-result"
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./components/Common/Testimonials.js":
/*!*******************************************!*\
  !*** ./components/Common/Testimonials.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class Testimonials extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("section", {
      className: "testimonials-area ptb-60"
    }, __jsx("div", {
      className: "container"
    }, this.state.display ? __jsx(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "testimonials-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-testimonials"
    }, __jsx("div", {
      className: "client-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client1.jpg */ "./images/client1.jpg"),
      alt: "image"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h4", null, "Jason Statham"), __jsx("span", null, "Founder at Brand"))), __jsx("div", {
      className: "single-testimonials"
    }, __jsx("div", {
      className: "client-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client2.jpg */ "./images/client2.jpg"),
      alt: "image"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h4", null, "Jason Jisan"), __jsx("span", null, "Founder at Brand"))), __jsx("div", {
      className: "single-testimonials"
    }, __jsx("div", {
      className: "client-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client3.jpg */ "./images/client3.jpg"),
      alt: "image"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h4", null, "Jason Shabbir"), __jsx("span", null, "Founder at Brand")))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "index.html"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
      alt: "logo"
    })))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "quick-links"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "About Us")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "FAQ's")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Customer Services")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Contact Us"))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Sales Hours"), __jsx("p", {
      className: "information-links"
    }, __jsx("strong", null, "Monday, Friday, Saturday and Sunday:"), __jsx("br", null), "09:00AM \u2013 07:00PM"), __jsx("p", {
      className: "information-links"
    }, __jsx("strong", null, "Tuesday \u2013 Thursday:"), __jsx("br", null), "09:00AM \u2013 08:00PM"))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Contact Us"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "fas fa-map-marker-alt"
    }), "33 Ubi Ave , #01-47/48 Vertex Singapore 408868"), __jsx("li", null, __jsx("i", {
      className: "fas fa-phone"
    }), " ", __jsx("a", {
      href: "tel:6565528800"
    }, "(+65) 6552-8800")), __jsx("li", null, __jsx("i", {
      className: "far fa-envelope"
    }), " ", __jsx("a", {
      href: "mailto:sales@bw.com.sg"
    }, "sales@bw.com.sg")), __jsx("li", null, __jsx("i", {
      className: "fas fa-fax"
    }), " ", __jsx("a", {
      href: "#"
    }, "(+65) 6858 2120"))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyrite @ 2019 Venture Cars. All Rights Reserved")), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", {
      className: "payment-card"
    }, __jsx("li", null)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/MegaMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/MegaMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal/Cart */ "./components/Modal/Cart.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class MegaMenu extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      display: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleCart", () => {
      this.setState(prevState => {
        return {
          display: !prevState.display
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    let {
      products
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "navbar-area"
    }, __jsx("div", {
      id: "navbar",
      className: "comero-nav"
    }, __jsx("div", {
      className: "container"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "navbar-toggler-icon"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Cars ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Collection Layouts"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/collections-style-one"
    }, __jsx("a", null, "Collections Type 1"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/collections-style-two"
    }, __jsx("a", null, "Collections Type 2"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-left-sidebar"
    }, __jsx("a", null, "Left Sidebar"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-left-sidebar-with-block"
    }, __jsx("a", null, "Left Sidebar With HTML Block"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-right-sidebar"
    }, __jsx("a", null, "Right Sidebar"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-right-sidebar-with-block"
    }, __jsx("a", null, "Right Sidebar With HTML Block"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-without-sidebar"
    }, __jsx("a", null, "Without Sidebar"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-sidebar-fullwidth"
    }, __jsx("a", null, "With Sidebar Full Width"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, __jsx("a", null, "Without Sidebar Full Width"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Other Pages"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/cart"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/checkout"
    }, __jsx("a", null, "Checkout"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/compare"
    }, __jsx("a", null, "Compare"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/login"
    }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup"
    }, __jsx("a", null, "Signup"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Service"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Top Brands"), __jsx("ul", {
      className: "megamenu-submenu top-brands"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner1.png */ "./images/partner1.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner2.png */ "./images/partner2.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner3.png */ "./images/partner3.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner4.png */ "./images/partner4.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner5.png */ "./images/partner5.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner6.png */ "./images/partner6.png"),
      alt: "image"
    }))))))))))), __jsx("li", {
      className: "nav-item p-relative"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Services ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/contact-us"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact Us"))))), __jsx("li", {
      className: "nav-item p-relative"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/about"
    }, __jsx("a", {
      className: "nav-link"
    }, "About Us"))), __jsx("li", {
      className: "nav-item p-relative"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog"))), __jsx("li", {
      className: "nav-item p-relative"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/contact-us"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact Us")))), __jsx("div", {
      className: "others-option"
    }, __jsx("div", {
      className: "option-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/contact.js"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, __jsx("span", null, "Book Test Drive")))), __jsx("div", {
      className: "option-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/contact.js"
    }, __jsx("a", {
      className: "btn btn-light"
    }, __jsx("span", null, "Book A Service")))))))))), this.state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.handleCart
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MegaMenu));

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopPanel */ "./components/Layout/TopPanel.js");
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopHeader */ "./components/Layout/TopHeader.js");
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MegaMenu */ "./components/Layout/MegaMenu.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_TopHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/TopHeader.js":
/*!****************************************!*\
  !*** ./components/Layout/TopHeader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_Wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/Wishlist */ "./components/Modal/Wishlist.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class TopHeader extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      display: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleWishlist", () => {
      this.setState(prevState => {
        return {
          display: !prevState.display
        };
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "top-header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-6"
    }, __jsx("ul", {
      className: "top-header-nav"
    })), __jsx("div", {
      className: "col-lg-5 col-md-6"
    }, __jsx("ul", {
      className: "top-header-right-nav"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "modal",
      "data-target": "#shoppingWishlistModal",
      onClick: e => {
        e.preventDefault();
        this.handleWishlist();
      }
    }, "Wishlist ", __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/compare"
    }, __jsx("a", null, "Compare ", __jsx("i", {
      className: "fas fa-balance-scale"
    }))))))))), this.state.display ? __jsx(_Modal_Wishlist__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: this.handleWishlist
    }) : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

/***/ }),

/***/ "./components/Layout/TopPanel.js":
/*!***************************************!*\
  !*** ./components/Layout/TopPanel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items: 1,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class TopPanel extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    let {
      panel
    } = this.state;
    return __jsx("div", {
      className: `top-panel ${panel ? '' : 'hide'}`
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "panel-content"
    }, this.state.display ? __jsx(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "top-panel-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More")))), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More")))), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More"))))) : '', __jsx("i", {
      onClick: () => this.setState({
        panel: false
      }),
      className: "fas fa-times panel-close-btn"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopPanel);

/***/ }),

/***/ "./components/Modal/AddsModal.js":
/*!***************************************!*\
  !*** ./components/Modal/AddsModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class AddsModal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      open: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeModal", e => {
      this._isMounted = true;
      e.preventDefault();
      this.setState({
        open: false
      });
    });
  }

  componentDidMount() {
    this.setState({
      open: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      open
    } = this.state;
    return __jsx("div", {
      className: `bts-popup ${open ? 'is-visible' : ''}`,
      role: "alert"
    }, __jsx("div", {
      className: "bts-popup-container"
    }, __jsx("h3", null, "Free Shipping"), __jsx("p", null, "Worldwide free shipping for all members. To become a member subscribe for our ", __jsx("strong", null, "free offers / discount newsletter.")), __jsx("form", null, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "mail@name.com",
      name: "EMAIL",
      required: true
    }), __jsx("button", {
      type: "submit"
    }, __jsx("i", {
      className: "far fa-paper-plane"
    }))), __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "#",
      className: "facebook"
    }, __jsx("i", {
      className: "fab fa-facebook-f"
    }))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "twitter"
    }, __jsx("i", {
      className: "fab fa-twitter"
    }))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "linkdein"
    }, __jsx("i", {
      className: "fab fa-linkedin-in"
    }))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "instagram"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })))), __jsx("div", {
      className: "img-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/women.png */ "./images/women.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/women2.png */ "./images/women2.png"),
      alt: "image"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: this.closeModal,
      className: "bts-popup-close"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddsModal);

/***/ }),

/***/ "./components/Modal/Cart.js":
/*!**********************************!*\
  !*** ./components/Modal/Cart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Cart extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      display: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeCart", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    let {
      products,
      total
    } = this.props;
    return __jsx("div", {
      className: "modal right fade show shoppingCartModal",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeCart
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Cart (", products.length, ")"), __jsx("div", {
      className: "product-cart-content"
    }, products.length > 0 ? products.map((product, idx) => __jsx("div", {
      className: "product-cart",
      key: idx
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: product.image,
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, product.quantity), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$", product.price))))) : 'Empty'), __jsx("div", {
      className: "product-cart-subtotal"
    }, __jsx("span", null, "Subtotal"), __jsx("span", {
      className: "subtotal"
    }, "$", total)), __jsx("div", {
      className: "product-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/checkout"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Proceed to Checkout")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/cart"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "View Shopping Cart")))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total //addedItems: state.addedItems

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Cart));

/***/ }),

/***/ "./components/Modal/QuickView.js":
/*!***************************************!*\
  !*** ./components/Modal/QuickView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class QuickView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      qty: 1,
      max: 10,
      min: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCartFromView", () => {
      this.props.addQuantityWithNumber(this.props.idd, this.state.qty);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => {
        this.props.closeModal();
      }, 5000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "IncrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "DecreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    const {
      closeModal
    } = this.props;
    return __jsx("div", {
      className: "modal fade productQuickView show",
      style: {
        paddingRight: '16px',
        display: 'block'
      }
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], null), __jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      onClick: closeModal,
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "fas fa-times"
    }))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "productQuickView-image"
    }, __jsx("img", {
      src: this.props.image,
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, this.props.title), __jsx("div", {
      className: "price"
    }, __jsx("span", {
      className: "new-price"
    }, "$", this.props.price)), __jsx("div", {
      className: "product-review"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star-half-alt"
    })), __jsx("a", {
      href: "#",
      className: "rating-count"
    }, "3 reviews")), __jsx("ul", {
      className: "product-info"
    }, __jsx("li", null, __jsx("span", null, "Vendor:"), " ", __jsx("a", {
      href: "#"
    }, "Lereve")), __jsx("li", null, __jsx("span", null, "Availability:"), " ", __jsx("a", {
      href: "#"
    }, "In stock (7 items)")), __jsx("li", null, __jsx("span", null, "Product Type:"), " ", __jsx("a", {
      href: "#"
    }, "T-Shirt"))), __jsx("div", {
      className: "product-color-switch"
    }, __jsx("h4", null, "Color:"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "#",
      title: "Black",
      className: "color-black"
    })), __jsx("li", null, __jsx("a", {
      href: "#",
      title: "White",
      className: "color-white"
    })), __jsx("li", {
      className: "active"
    }, __jsx("a", {
      href: "#",
      title: "Green",
      className: "color-green"
    })), __jsx("li", null, __jsx("a", {
      href: "#",
      title: "Yellow Green",
      className: "color-yellowgreen"
    })), __jsx("li", null, __jsx("a", {
      href: "#",
      title: "Teal",
      className: "color-teal"
    })))), __jsx("div", {
      className: "product-size-wrapper"
    }, __jsx("h4", null, "Size:"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "XS")), __jsx("li", {
      className: "active"
    }, __jsx("a", {
      href: "#"
    }, "S")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "M")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "XL")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "XXL")))), __jsx("div", {
      className: "product-add-to-cart"
    }, __jsx("div", {
      className: "input-counter"
    }, __jsx("span", {
      className: "minus-btn",
      onClick: this.DecreaseItem
    }, __jsx("i", {
      className: "fas fa-minus"
    })), __jsx("input", {
      type: "text",
      value: this.state.qty,
      min: this.state.min,
      max: this.state.max,
      onChange: e => this.setState({
        qty: e.target.value
      })
    }), __jsx("span", {
      className: "plus-btn",
      onClick: this.IncrementItem
    }, __jsx("i", {
      className: "fas fa-plus"
    }))), __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      onClick: this.handleAddToCartFromView
    }, __jsx("i", {
      className: "fas fa-cart-plus"
    }), " Add to Cart")), __jsx("a", {
      href: "#",
      className: "view-full-info"
    }, "View full info")))))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addQuantityWithNumber"])(id, qty));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(QuickView));

/***/ }),

/***/ "./components/Modal/Wishlist.js":
/*!**************************************!*\
  !*** ./components/Modal/Wishlist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Wishlist extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      display: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeWishlist", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    return __jsx("div", {
      className: "modal right fade show shoppingWishlistModal",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeWishlist
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Wish List (3)"), __jsx("div", {
      className: "product-cart-content"
    }, __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img2.jpg */ "./images/img2.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00")))), __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img3.jpg */ "./images/img3.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00")))), __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img4.jpg */ "./images/img4.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00"))))), __jsx("div", {
      className: "product-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "View Shopping Cart")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wishlist);

/***/ }),

/***/ "./components/shop-style-four/Banner.js":
/*!**********************************************!*\
  !*** ./components/shop-style-four/Banner.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "main-banner main-banner-three item-bg1"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "main-banner-content white-color"
    }, __jsx("span", null, "HONDA FIT"), __jsx("h1", null, "EVERYONE'S FAVOURITE FAMILY HATCHBACK"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact.js"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, __jsx("span", null, "Enquire Now"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/shop-style-four/BestSellers.js":
/*!***************************************************!*\
  !*** ./components/shop-style-four/BestSellers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/shop-style-four/CategoryProducts.js":
/*!********************************************************!*\
  !*** ./components/shop-style-four/CategoryProducts.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CategoryProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../CategoryProducts */ "./CategoryProducts.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








 //

class CategoryProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      modalOpen: false,
      modalImage: '',
      price: 0,
      idd: null
    });
  }

  componentDidMount() {
    // call api
    console.log(_CategoryProducts__WEBPACK_IMPORTED_MODULE_9__["category"]);
  }

  static async getInitialProps() {
    // let res = await fetch('http://localhost:3000/CategoryProducts.json')
    // let brandsObj = await res.json()
    console.log(_CategoryProducts__WEBPACK_IMPORTED_MODULE_9__["category"]); //console.log(brandsObj)
    //return {brands: brandsObj}
  }

  render() {
    return __jsx("section", {
      className: "best-sellers-area pb-60"
    }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, null), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_6__["Slide"]
    }), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, __jsx("span", {
      className: "dot"
    }), " All Brands"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CategoryProducts);

/***/ }),

/***/ "./components/shop-style-one/OfferArea.js":
/*!************************************************!*\
  !*** ./components/shop-style-one/OfferArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class OfferArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "offer-area ptb-60"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "offer-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/offer-women.jpg */ "./images/offer-women.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "category"
    }, __jsx("h4", null, "Women's")), __jsx("div", {
      className: "box-inner"
    }, __jsx("h3", null, "Women's"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Woman Accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Man Accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belts"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hats"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Scrafs"))))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "offer-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/1.jpg */ "./images/1.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "category"
    }, __jsx("h4", null, "Accessories")), __jsx("div", {
      className: "box-inner"
    }, __jsx("h3", null, "Accessories"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Woman Accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Man Accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belts"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hats"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Scrafs"))))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "offer-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/offer-men.jpg */ "./images/offer-men.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "category"
    }, __jsx("h4", null, "Men's")), __jsx("div", {
      className: "box-inner"
    }, __jsx("h3", null, "Men's"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Woman Accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Man Accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belts"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hats"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Scrafs"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OfferArea);

/***/ }),

/***/ "./components/shop-style-one/Products.js":
/*!***********************************************!*\
  !*** ./components/shop-style-one/Products.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class Products extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      modalOpen: false,
      modalImage: '',
      price: 0,
      idd: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCompare", id => {
      this.props.addToCompare(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success('Added to the compare', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "#"
        }, __jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled"
        }, __jsx("i", {
          className: "fas fa-sync"
        })));
      } else {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "#"
        }, __jsx("a", {
          "data-tip": "Add to Compare",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
            this.handleAddToCompare(id);
          }
        }, __jsx("i", {
          className: "fas fa-sync"
        })));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleModalData", (image, price, id) => {
      this.setState({
        modalImage: image,
        price: price,
        idd: id
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return __jsx("section", {
      className: "all-products-area pb-60"
    }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, null), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_6__["Slide"]
    }), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "tab products-category-tab"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("ul", {
      className: "tabs"
    }, __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab1');
      },
      className: "current"
    }, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "dot"
    }), " Latest Products")), __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab2');
      }
    }, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "dot"
    }), " Special Products")), __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab3');
      }
    }, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "dot"
    }), " Featured Products")))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "tab_content"
    }, __jsx("div", {
      id: "tab1",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row"
    }, products.map((data, idx) => __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-6",
      key: idx
    }, __jsx("div", {
      className: "single-product-box"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, __jsx("img", {
      src: data.image,
      alt: "image"
    }), __jsx("img", {
      src: data.imageHover,
      alt: "image"
    }))), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data.quickView, data.price, data.id);
      }
    }, __jsx("i", {
      className: "far fa-eye"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, this.compareButton(data.id)))), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, data.title))), __jsx("div", {
      className: "product-price"
    }, __jsx("span", {
      className: "new-price"
    }, "$", data.price)), __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "far fa-star"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(data.id);
      }
    }, "Add to Cart")))))))), __jsx("div", {
      id: "tab2",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row"
    }, products.map((data, idx) => __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-6",
      key: idx
    }, __jsx("div", {
      className: "single-product-box"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, __jsx("img", {
      src: data.image,
      alt: "image"
    }), __jsx("img", {
      src: data.imageHover,
      alt: "image"
    }))), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data.quickView, data.price, data.id);
      }
    }, __jsx("i", {
      className: "far fa-eye"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, this.compareButton(data.id)))), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, data.title))), __jsx("div", {
      className: "product-price"
    }, __jsx("span", {
      className: "new-price"
    }, "$", data.price)), __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "far fa-star"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(data.id);
      }
    }, "Add to Cart")))))))), __jsx("div", {
      id: "tab3",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row"
    }, products.map((data, idx) => __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-6",
      key: idx
    }, __jsx("div", {
      className: "single-product-box"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, __jsx("img", {
      src: data.image,
      alt: "image"
    }), __jsx("img", {
      src: data.imageHover,
      alt: "image"
    }))), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data.quickView, data.price, data.id);
      }
    }, __jsx("i", {
      className: "far fa-eye"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, this.compareButton(data.id)))), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, data.title))), __jsx("div", {
      className: "product-price"
    }, __jsx("span", {
      className: "new-price"
    }, "$", data.price)), __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "far fa-star"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(data.id);
      }
    }, "Add to Cart"))))))))))))), modalOpen ? __jsx(_Modal_QuickView__WEBPACK_IMPORTED_MODULE_8__["default"], {
      closeModal: this.closeModal,
      idd: this.state.idd,
      image: this.state.modalImage,
      price: this.state.price
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.products,
    CompareProducts: state.addedItemsToCompare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(id));
    },
    addToCompare: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addToCompare"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Products));

/***/ }),

/***/ "./components/shop-style-one/TrendingProducts.js":
/*!*******************************************************!*\
  !*** ./components/shop-style-one/TrendingProducts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class TrendingProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      modalOpen: false,
      modalImage: '',
      price: 0,
      idd: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCompare", id => {
      this.props.addToCompare(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success('Added to the compare', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "#"
        }, __jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled"
        }, __jsx("i", {
          className: "fas fa-sync"
        })));
      } else {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "#"
        }, __jsx("a", {
          "data-tip": "Add to Compare",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
            this.handleAddToCompare(id);
          }
        }, __jsx("i", {
          className: "fas fa-sync"
        })));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleModalData", (image, price, id) => {
      this.setState({
        modalImage: image,
        price: price,
        idd: id
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return __jsx("section", {
      className: "trending-products-area pb-60"
    }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, null), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_6__["Slide"]
    }), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, __jsx("span", {
      className: "dot"
    }), " Trending Products")), __jsx("div", {
      className: "row"
    }, products.map((data, idx) => __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-6",
      key: idx
    }, __jsx("div", {
      className: "single-product-box"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, __jsx("img", {
      src: data.image,
      alt: "image"
    }), __jsx("img", {
      src: data.imageHover,
      alt: "image"
    }))), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data.quickView, data.price, data.id);
      }
    }, __jsx("i", {
      className: "far fa-eye"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, this.compareButton(data.id)))), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product-details"
    }, __jsx("a", null, data.title))), __jsx("div", {
      className: "product-price"
    }, __jsx("span", {
      className: "new-price"
    }, "$", data.price)), __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "far fa-star"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(data.id);
      }
    }, "Add to Cart")))))))), modalOpen ? __jsx(_Modal_QuickView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      closeModal: this.closeModal,
      idd: this.state.idd,
      image: this.state.modalImage,
      price: this.state.price
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.products,
    CompareProducts: state.addedItemsToCompare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(id));
    },
    addToCompare: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addToCompare"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(TrendingProducts));

/***/ }),

/***/ "./images/1.jpg":
/*!**********************!*\
  !*** ./images/1.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/client1.jpg":
/*!****************************!*\
  !*** ./images/client1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA/AD8BAREA/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMHBAUGCP/EACEQAAEFAAMBAQEBAQAAAAAAAAIAAQMEBQYREgcTFCMi/9oACAEBAAA/APUCIiIiIiIiIiIiIiIiKkOIfaeWc31ZIcCfjTjpBqBkULtO/Vf3WMgiJ7rsUFp38+pYohY4mLrsvLusrK+9jgQ7xfSQf+TD1gzZdanjz0QjY6zSxnNTnkOxGByeoY5G9jKbj56Z2dY3Ifu+xByg8qhDRwYc6pl2b9bdzbUsrHbJ3eKaxVIoaDCDCzSy/oJSE4t0wO79Jnc65pU+rVeC8mjyHrala9artWo2of5xhMPxFrcxflckOMnI44gF4vL99szE9lIiKt5PhPGJjKGXe5A+dCV6XNz47ccMWXNb9/tLXOOMZmL/AFl8+5DEGN2FmbpmjufA+K7pzycy3Nzkv98kZ6I6MkAhfGKIwrxyhBFGPiJ5ZJAYWH/QvZeiEXaa/wDEMXThetd5ZySWK5Qq5u0JT13fbgruX5taJ4fXp2MhIonjIhfonfputjlfLMzM5FU35+R72lHlz27OXQvWI5K+fLY9NKUbtG0p/wDJyCLSyGwCbsLM3XXaoiIiIiIiIiIiIiIiIv/Z"

/***/ }),

/***/ "./images/client2.jpg":
/*!****************************!*\
  !*** ./images/client2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA/AD8BAREA/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMHBAUGCP/EACEQAAEFAAMBAQEBAQAAAAAAAAIAAQMEBQYREgcTFCMi/9oACAEBAAA/APUCIiIiIiIiIiIiIiIiKkOIfaeWc31ZIcCfjTjpBqBkULtO/Vf3WMgiJ7rsUFp38+pYohY4mLrsvLusrK+9jgQ7xfSQf+TD1gzZdanjz0QjY6zSxnNTnkOxGByeoY5G9jKbj56Z2dY3Ifu+xByg8qhDRwYc6pl2b9bdzbUsrHbJ3eKaxVIoaDCDCzSy/oJSE4t0wO79Jnc65pU+rVeC8mjyHrala9artWo2of5xhMPxFrcxflckOMnI44gF4vL99szE9lIiKt5PhPGJjKGXe5A+dCV6XNz47ccMWXNb9/tLXOOMZmL/AFl8+5DEGN2FmbpmjufA+K7pzycy3Nzkv98kZ6I6MkAhfGKIwrxyhBFGPiJ5ZJAYWH/QvZeiEXaa/wDEMXThetd5ZySWK5Qq5u0JT13fbgruX5taJ4fXp2MhIonjIhfonfputjlfLMzM5FU35+R72lHlz27OXQvWI5K+fLY9NKUbtG0p/wDJyCLSyGwCbsLM3XXaoiIiIiIiIiIiIiIiIv/Z"

/***/ }),

/***/ "./images/client3.jpg":
/*!****************************!*\
  !*** ./images/client3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA/AD8BAREA/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMHBAUGCP/EACEQAAEFAAMBAQEBAQAAAAAAAAIAAQMEBQYREgcTFCMi/9oACAEBAAA/APUCIiIiIiIiIiIiIiIiKkOIfaeWc31ZIcCfjTjpBqBkULtO/Vf3WMgiJ7rsUFp38+pYohY4mLrsvLusrK+9jgQ7xfSQf+TD1gzZdanjz0QjY6zSxnNTnkOxGByeoY5G9jKbj56Z2dY3Ifu+xByg8qhDRwYc6pl2b9bdzbUsrHbJ3eKaxVIoaDCDCzSy/oJSE4t0wO79Jnc65pU+rVeC8mjyHrala9artWo2of5xhMPxFrcxflckOMnI44gF4vL99szE9lIiKt5PhPGJjKGXe5A+dCV6XNz47ccMWXNb9/tLXOOMZmL/AFl8+5DEGN2FmbpmjufA+K7pzycy3Nzkv98kZ6I6MkAhfGKIwrxyhBFGPiJ5ZJAYWH/QvZeiEXaa/wDEMXThetd5ZySWK5Qq5u0JT13fbgruX5taJ4fXp2MhIonjIhfonfputjlfLMzM5FU35+R72lHlz27OXQvWI5K+fLY9NKUbtG0p/wDJyCLSyGwCbsLM3XXaoiIiIiIiIiIiIiIiIv/Z"

/***/ }),

/***/ "./images/img2.jpg":
/*!*************************!*\
  !*** ./images/img2.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/img3.jpg":
/*!*************************!*\
  !*** ./images/img3.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/img4.jpg":
/*!*************************!*\
  !*** ./images/img4.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-6ebbe8df64c59250372eb8e14ff4eb38.png";

/***/ }),

/***/ "./images/offer-men.jpg":
/*!******************************!*\
  !*** ./images/offer-men.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/offer-women.jpg":
/*!********************************!*\
  !*** ./images/offer-women.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/partner1.png":
/*!*****************************!*\
  !*** ./images/partner1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQzLTA1OjAwWFqhGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0My0wNTowMCkHGacAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner2.png":
/*!*****************************!*\
  !*** ./images/partner2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQzLTA1OjAwWFqhGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0My0wNTowMCkHGacAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner3.png":
/*!*****************************!*\
  !*** ./images/partner3.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner4.png":
/*!*****************************!*\
  !*** ./images/partner4.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner5.png":
/*!*****************************!*\
  !*** ./images/partner5.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner6.png":
/*!*****************************!*\
  !*** ./images/partner6.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/women.png":
/*!**************************!*\
  !*** ./images/women.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/women2.png":
/*!***************************!*\
  !*** ./images/women2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.historyId !== this.historyId) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // we use a historyId to enable ignoring invalid popstates

    this.historyId = Math.random();

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options: _Object$assign({}, options, {
          historyId: this.historyId
        })
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_shop_style_four_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shop-style-four/Banner */ "./components/shop-style-four/Banner.js");
/* harmony import */ var _components_shop_style_one_OfferArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop-style-one/OfferArea */ "./components/shop-style-one/OfferArea.js");
/* harmony import */ var _components_shop_style_one_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop-style-one/Products */ "./components/shop-style-one/Products.js");
/* harmony import */ var _components_shop_style_four_CategoryProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop-style-four/CategoryProducts */ "./components/shop-style-four/CategoryProducts.js");
/* harmony import */ var _components_shop_style_one_TrendingProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shop-style-one/TrendingProducts */ "./components/shop-style-one/TrendingProducts.js");
/* harmony import */ var _components_shop_style_four_BestSellers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shop-style-four/BestSellers */ "./components/shop-style-four/BestSellers.js");
/* harmony import */ var _components_shop_style_four_BestSellers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_shop_style_four_BestSellers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Common_Facility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Facility */ "./components/Common/Facility.js");
/* harmony import */ var _components_Common_Testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Testimonials */ "./components/Common/Testimonials.js");
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Modal_AddsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Modal/AddsModal */ "./components/Modal/AddsModal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_shop_style_four_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_shop_style_four_CategoryProducts__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_Common_Facility__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_Common_Testimonials__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_TO_COMPARE, REMOVE_ITEM_FROM_COMPARE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMPARE", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_FROM_COMPARE", function() { return REMOVE_ITEM_FROM_COMPARE; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_TO_COMPARE = 'ADD_TO_COMPARE';
const REMOVE_ITEM_FROM_COMPARE = 'REMOVE_ITEM_FROM_COMPARE';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart, addToCompare, removeItemFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCompare", function() { return removeItemFromCompare; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
 //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
}; //add compare action

const addToCompare = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_COMPARE"],
    id
  };
}; //remove item from compare action

const removeItemFromCompare = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM_FROM_COMPARE"],
    id
  };
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OC Digital\Desktop\vc\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

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
//# sourceMappingURL=index.js.map