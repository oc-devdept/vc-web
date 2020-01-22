webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout/Steps.js":
/*!************************************!*\
  !*** ./components/Layout/Steps.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Steps =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Steps, _Component);

  function Steps(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Steps);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Steps).call(this, props));
    _this.state = {
      list: [{
        id: "01 Select",
        step: "the Car",
        arrow: "˃",
        image: "/static/steps/step01.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."
      }, {
        id: "02 Build",
        step: "the Exterior",
        arrow: "˃",
        image: "/static/steps/step02.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."
      }, {
        id: "03 Build",
        step: "the Interior",
        arrow: "˅",
        image: "/static/steps/step03.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."
      }, {
        id: "04 Configure",
        step: "the Rims",
        arrow: "˂",
        image: "/static/steps/step04.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."
      }, {
        id: "05 Accessories",
        step: "Add-On",
        arrow: "˂",
        image: "/static/steps/step05.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."
      }, {
        id: "06 Get",
        step: "Your Car",
        arrow: "",
        image: "/static/steps/step06.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Steps, [{
    key: "render",
    value: function render() {
      return __jsx("section", {
        className: "best-sellers-area"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "section-title without-bg"
      }, __jsx("h2", null, "Get Your Preferred Cars in 6 Steps!")), __jsx("div", {
        className: "d-flex flex-row"
      }, this.state.list.slice(0, 3).map(l, function (idx) {
        return __jsx("div", {
          className: "step text-center m-2 p-2",
          key: idx
        }, __jsx("h3", {
          className: "text-center"
        }, __jsx("span", {
          className: "stepArrow font-weight-bold font-italic"
        }, l.id), " ", l.step, " ", __jsx("span", {
          className: "float-right stepArrow"
        }, " ", l.arrow, " "), " "), __jsx("img", {
          className: "stepImgs",
          src: l.image
        }), __jsx("p", {
          className: "text-justify"
        }, l.description));
      })), __jsx("div", {
        className: "reverseStepRow"
      }, this.state.list.slice(3, 6).map(l, function (idx) {
        return __jsx("div", {
          className: "step text-center m-2 p-2",
          key: idx
        }, __jsx("h3", {
          className: "text-center"
        }, __jsx("span", {
          className: "stepArrow font-weight-bold font-italic"
        }, l.id), " ", l.step, " ", __jsx("span", {
          className: "float-left stepArrow"
        }, " ", l.arrow, " "), " "), __jsx("img", {
          className: "stepImgs",
          src: l.image
        }), __jsx("p", {
          className: "text-justify"
        }, l.description));
      }))));
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ })

})
//# sourceMappingURL=index.js.ca3a11d76d49fc7402a8.hot-update.js.map