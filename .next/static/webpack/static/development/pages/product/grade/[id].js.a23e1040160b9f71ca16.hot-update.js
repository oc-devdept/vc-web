webpackHotUpdate("static\\development\\pages\\product\\grade\\[id].js",{

/***/ "./pages/product/grade/Accessories.js":
/*!********************************************!*\
  !*** ./pages/product/grade/Accessories.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Ducks/product/ProductActions */ "./redux/ducks/product/ProductActions.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Accessories = function Accessories(props) {
  var handleOptionChange = function handleOptionChange(event) {
    var id = event.target.id;
    props.selectedProductAccessories(id);
  };

  console.log("Accessories props: ", props);
  var fields = props.ProductState.productAccessories.data.fields;
  return __jsx("div", {
    className: "configure-opt"
  }, __jsx("h2", {
    className: "configure-opt-title"
  }, "05 Accessories"), __jsx("ul", {
    className: "p-0 list-unstyled"
  }, !!fields && fields.map(function (item, id) {
    return __jsx("li", {
      className: "product-option-group",
      key: id
    }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(item).map(function (_ref, id) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return __jsx("div", {
        key: id
      }, __jsx("p", null, __jsx("strong", null, "Product Option Group: ", key)), __jsx("ul", {
        className: "p-0"
      }, value.map(function (item, id) {
        return __jsx("li", {
          key: id,
          id: item.id,
          className: "product-option list-unstyled configure-list",
          style: !!props.ProductState.productAccessories.selectedIds[item.id] ? {
            border: "2px solid orange",
            color: "#F29D30"
          } : {
            border: "1px solid #DEE2E6"
          },
          onClick: handleOptionChange
        }, item.productOption.name, __jsx("br", null), "$", item.productOption.price);
      })));
    }));
  })), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"].Toggle, {
    as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Header,
    eventKey: "0",
    className: "configure-total-header"
  }, "Total (SGD)"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"].Collapse, {
    eventKey: "0"
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, __jsx("div", {
    className: "p-0 list-unstyled configure-total"
  }, __jsx("dl", null, __jsx("dt", null, "01 Car Make & Model"), __jsx("dd", null, props.ProductState.productModel.name)), __jsx("dl", null, __jsx("dt", null, "02 Grade"), __jsx("dt", null, "$", props.ProductState.productGrade.price), __jsx("dd", null, props.ProductState.productGrade.name)), __jsx("dl", null, __jsx("dt", null, "03 Exterior"), __jsx("dt", null, "$", props.ProductState.productExterior.price), __jsx("dd", null, props.ProductState.productExterior.name)), __jsx("dl", null, __jsx("dt", null, "04 Interior"), __jsx("dt", null, "$", props.ProductState.productInterior.price), __jsx("dd", null, props.ProductState.productInterior.name)), __jsx("dl", null, __jsx("dt", null, "05 Rims"), __jsx("dt", null, "$", props.ProductState.productRims.price), __jsx("dd", null, props.ProductState.productRims.name))))))));
};

var mapStateToProps = function mapStateToProps(state) {
  var ProductState = state.ProductState;
  return {
    ProductState: ProductState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  selectedProductAccessories: Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_4__["selectedProductAccessories"]
})(Accessories));

/***/ }),

/***/ "./pages/product/grade/Grade.js":
/*!**************************************!*\
  !*** ./pages/product/grade/Grade.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ducks/product/ProductActions */ "./redux/ducks/product/ProductActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Grade = function Grade(props) {
  var handleOptionChange = function handleOptionChange(event) {
    var id = event.target.id;
    props.selectedProductGrade(id);
    props.getProductGradeData(id);
  };

  var fields = props.productGrade.data.fields;
  return __jsx("div", {
    className: "configure-sect row"
  }, __jsx("div", {
    className: "configure-gall col-9"
  }, "tetstes"), __jsx("div", {
    className: "configure-opt col-3"
  }, __jsx("h2", {
    className: "configure-opt-title"
  }, "01 Grade"), __jsx("ul", {
    className: "list-unstyled"
  }, !!fields && fields.map(function (item, id) {
    return __jsx("li", {
      className: "configure-list",
      key: id,
      id: item.id,
      style: item.id == props.productGrade.id ? {
        border: "2px solid #F29D30",
        color: "#F29D30"
      } : {
        border: "1px solid #DEE2E6"
      },
      onClick: handleOptionChange
    }, item.name, __jsx("br", null), "$", item.selling_Price);
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  var productGrade = state.ProductState.productGrade;
  return {
    productGrade: productGrade
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  selectedProductGrade: Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_2__["selectedProductGrade"],
  getProductGradeData: Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_2__["getProductGradeData"]
})(Grade));

/***/ }),

/***/ "./pages/product/grade/[id].js":
/*!*************************************!*\
  !*** ./pages/product/grade/[id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Components_Layout_PageTemplates_Default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/Layout/PageTemplates/Default */ "./components/Layout/PageTemplates/Default.js");
/* harmony import */ var react_stepzilla__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-stepzilla */ "./node_modules/react-stepzilla/dist/main.js");
/* harmony import */ var react_stepzilla__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_stepzilla__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Grade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Grade */ "./pages/product/grade/Grade.js");
/* harmony import */ var _Exterior__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Exterior */ "./pages/product/grade/Exterior.js");
/* harmony import */ var _Interior__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Interior */ "./pages/product/grade/Interior.js");
/* harmony import */ var _Rims__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Rims */ "./pages/product/grade/Rims.js");
/* harmony import */ var _Accessories__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Accessories */ "./pages/product/grade/Accessories.js");
/* harmony import */ var Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Ducks/product/ProductActions */ "./redux/ducks/product/ProductActions.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











var Product =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Product, _Component);

  function Product(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Product);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Product).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProductGrades(this.props.selectedModelId);
      this.props.getProductModelData(this.props.selectedModelId);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("props= ", this.props);
      var ProductState = this.props.ProductState;
      var steps = [{
        name: "Grade",
        component: __jsx(_Grade__WEBPACK_IMPORTED_MODULE_11__["default"], {
          productGrade: ProductState.productGrade
        })
      }, {
        name: "Exterior",
        component: __jsx(_Exterior__WEBPACK_IMPORTED_MODULE_12__["default"], {
          productExterior: ProductState.productExterior
        })
      }, {
        name: "Interior",
        component: __jsx(_Interior__WEBPACK_IMPORTED_MODULE_13__["default"], {
          productInterior: ProductState.productInterior
        })
      }, {
        name: "Rims",
        component: __jsx(_Rims__WEBPACK_IMPORTED_MODULE_14__["default"], {
          productRims: ProductState.productRims
        })
      }, {
        name: "Accessories",
        component: __jsx(_Accessories__WEBPACK_IMPORTED_MODULE_15__["default"], {
          ProductState: ProductState
        })
      }];
      return __jsx(Components_Layout_PageTemplates_Default__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("section", {
        className: "configure-area pb-60"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", null, __jsx("div", {
        className: "step-process"
      }, __jsx(react_stepzilla__WEBPACK_IMPORTED_MODULE_10___default.a, {
        steps: steps
      }))))));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // This can be removed after wiring model page to redux store


Product.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var ctx, id;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref.ctx;
            id = ctx.query.id;
            return _context.abrupt("return", {
              selectedModelId: id
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  var ProductState = state.ProductState;
  return {
    ProductState: ProductState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  getProductGrades: Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_16__["getProductGrades"],
  getProductModelData: Ducks_product_ProductActions__WEBPACK_IMPORTED_MODULE_16__["getProductModelData"]
})(Product));

/***/ })

})
//# sourceMappingURL=[id].js.a23e1040160b9f71ca16.hot-update.js.map