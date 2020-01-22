webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout/BestSellers.js":
/*!******************************************!*\
  !*** ./components/Layout/BestSellers.js ***!
  \******************************************/
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
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};

var BestSeller =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BestSeller, _Component);

  function BestSeller(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BestSeller);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BestSeller).call(this, props));
    _this.state = {
      data: null,
      gradesArray: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BestSeller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("http://159.65.14.175:3001/api/products/getAllFeaturedCars").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          gradesArray: data.fields
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var modelImage = {
        objectFit: "cover",
        borderRadius: "20px",
        // wdith: '150px',
        height: "250px",
        padding: "5px"
      };
      return __jsx("section", {
        className: "best-sellers-area"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "section-title without-bg"
      }, __jsx("h2", null, "Featured Cars")), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        swipeable: true,
        draggable: true,
        showDots: true,
        responsive: responsive,
        ssr: true // means to render carousel on server-side.
        ,
        infinite: true,
        autoPlay: false,
        keyBoardControl: true,
        customTransition: "all .5",
        transitionDuration: 500,
        containerClass: "carousel-container",
        removeArrowOnDeviceType: ["tablet", "mobile"],
        deviceType: this.props.deviceType,
        dotListClass: "custom-dot-list-style",
        itemClass: "carousel-item-padding-40-px"
      }, this.state.gradesArray.map(function (grade, idx) {
        return __jsx("div", {
          className: "col-lg-12 col-md-12",
          key: idx
        }, __jsx("div", {
          className: "single-product-box"
        }, __jsx("div", {
          className: "product-image"
        }, grade.images.map(function (gradeImg, idx) {
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/product/grade/".concat(grade.id)
          }, __jsx("a", null, __jsx("img", {
            style: modelImage,
            src: gradeImg.url,
            key: idx
          })));
        })), __jsx("div", {
          className: "product-content"
        }, __jsx("h3", {
          className: "text-uppercase"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/product/grade/".concat(grade.modelId)
        }, __jsx("a", null, grade.name))), __jsx("div", {
          className: "product-price"
        }, __jsx("span", {
          className: "new-price"
        }, "S$", " ", grade.selling_Price.toLocaleString(undefined, {
          maximumFractionDigits: 2
        }))), __jsx("div", {
          className: "product-desc"
        }, grade.power && __jsx("dl", null, __jsx("dt", null, grade.power.detailCategory.name), __jsx("dd", null, grade.power.value), " ", __jsx("dd", null, grade.power.detailCategory.unit)), grade.engine && __jsx("dl", null, __jsx("dt", null, grade.engine.detailCategory.name), __jsx("dd", null, grade.engine.value), " ", __jsx("dd", null, grade.engine.detailCategory.unit)), grade.fuel && __jsx("dl", null, __jsx("dt", null, grade.fuel.detailCategory.name), __jsx("dd", null, grade.fuel.value), " ", __jsx("dd", null, grade.fuel.detailCategory.unit))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/product/grade/".concat(grade.modelId)
        }, __jsx("a", {
          className: "btn btn-primary"
        }, "Explore")))));
      }))), __jsx("div", null), " ");
    }
  }]);

  return BestSeller;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BestSeller);

/***/ })

})
//# sourceMappingURL=index.js.a23e1040160b9f71ca16.hot-update.js.map