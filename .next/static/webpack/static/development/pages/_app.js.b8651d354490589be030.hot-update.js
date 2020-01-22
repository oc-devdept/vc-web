webpackHotUpdate("static\\development\\pages\\_app.js",{

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

var getProductModelData = function getProductModelData(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_MODEL_DATA"],
    payload: e
  };
};
var getProductModelDataSuccess = function getProductModelDataSuccess(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_MODEL_DATA_SUCCESS"],
    payload: e
  };
};
var getProductModelDataFailure = function getProductModelDataFailure(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_MODEL_DATA_FAILURE"],
    payload: e
  };
}; // Get grades of selected model

var getProductGrades = function getProductGrades(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADES"],
    payload: e
  };
};
var getProductGradesSuccess = function getProductGradesSuccess(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADES_SUCCESS"],
    payload: e
  };
};
var getProductGradesFailure = function getProductGradesFailure(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADES_FAILURE"],
    payload: e
  };
}; // Update selected grade

var selectedProductGrade = function selectedProductGrade(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_GRADE"],
    payload: e
  };
}; // Get data of selected grade

var getProductGradeData = function getProductGradeData(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADE_DATA"],
    payload: e
  };
};
var getProductGradeDataSuccess = function getProductGradeDataSuccess(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADE_DATA_SUCCESS"],
    payload: e
  };
};
var getProductGradeDataFailure = function getProductGradeDataFailure(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_GRADE_DATA_FAILURE"],
    payload: e
  };
}; // Update selected exterior

var selectedProductExterior = function selectedProductExterior(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_EXTERIOR"],
    payload: e
  };
}; // Update selected interior

var selectedProductInterior = function selectedProductInterior(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_INTERIOR"],
    payload: e
  };
}; // Update selected rims

var selectedProductRims = function selectedProductRims(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_RIMS"],
    payload: e
  };
}; // Update selected accessories

var selectedProductAccessories = function selectedProductAccessories(e) {
  return {
    type: _ProductTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_PRODUCT_ACCESSORIES"],
    payload: e
  };
};

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


var INIT_STATE = {
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // console.log("redux state= ", state)
  switch (action.type) {
    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_MODEL_DATA"]:
      return _objectSpread({}, state);

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["GET_PRODUCT_MODEL_DATA_SUCCESS"]:
      var data = action.payload.data;
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
      var fields = state.productGrade.data.fields;
      var object = fields.find(function (element) {
        return element.id === id;
      });
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
      var accessoriesIdList = {};

      var populateAccessoriesIds = function populateAccessoriesIds(action) {
        action.payload.accessoriesData.data.fields.map(function (item) {
          _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(item).map(function (key) {
            key.map(function (item) {
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
      var objects = state.productExterior.data.fields["Car Colors"].objects;
      var object = objects.find(function (element) {
        return element.id === id;
      });
      return _objectSpread({}, state, {
        productExterior: _objectSpread({}, state.productExterior, {
          id: object.id,
          name: object.name,
          price: object.price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_INTERIOR"]:
      var id = action.payload;
      var objects = state.productInterior.data.fields["Seating Fabrics"].objects;
      var object = objects.find(function (element) {
        return element.id === id;
      });
      return _objectSpread({}, state, {
        productInterior: _objectSpread({}, state.productInterior, {
          id: object.id,
          name: object.name,
          price: object.price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_RIMS"]:
      var id = action.payload;
      var objects = state.productInterior.data.fields["Rims"].objects;
      var object = objects.find(function (element) {
        return element.id === id;
      });
      return _objectSpread({}, state, {
        productRims: _objectSpread({}, state.productRims, {
          id: object.id,
          name: object.name,
          price: object.price
        })
      });

    case _ProductTypes__WEBPACK_IMPORTED_MODULE_8__["SELECTED_PRODUCT_ACCESSORIES"]:
      var newValue = !state.productAccessories.selectedIds[action.payload];
      return _objectSpread({}, state, {
        productAccessories: _objectSpread({}, state.productAccessories, {
          selectedIds: _objectSpread({}, state.productAccessories.selectedIds, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, action.payload, newValue))
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _ProductTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductTypes */ "./redux/ducks/product/ProductTypes.js");
/* harmony import */ var _ProductActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductActions */ "./redux/ducks/product/ProductActions.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Api */ "./api/index.js");



var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProductModelData),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProductGrades),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProductGradeData),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProductModelDataWatcher),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProductGradesWatcher),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProductGradeDataWatcher),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(productSaga);




 //=========================
// REQUESTS
//=========================

var getProductModelDataRequest =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Api__WEBPACK_IMPORTED_MODULE_5__["default"].get("/categories/".concat(payload.payload));

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProductModelDataRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getProductGradesRequest =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Api__WEBPACK_IMPORTED_MODULE_5__["default"].get("/products/specificGrades/".concat(payload.payload));

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProductGradesRequest(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getProductGradeDataRequest =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(payload) {
    var exteriorData, interiorData, accessoriesData, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Api__WEBPACK_IMPORTED_MODULE_5__["default"].get("/products/specificVariantExterior/".concat(payload.payload));

          case 2:
            exteriorData = _context3.sent;
            _context3.next = 5;
            return Api__WEBPACK_IMPORTED_MODULE_5__["default"].get("/products/specificVariantInterior/".concat(payload.payload));

          case 5:
            interiorData = _context3.sent;
            _context3.next = 8;
            return Api__WEBPACK_IMPORTED_MODULE_5__["default"].get("/products/specificGradeProductOption/".concat(payload.payload));

          case 8:
            accessoriesData = _context3.sent;
            data = {
              exteriorData: exteriorData,
              interiorData: interiorData,
              accessoriesData: accessoriesData
            };
            return _context3.abrupt("return", data);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductGradeDataRequest(_x3) {
    return _ref3.apply(this, arguments);
  };
}(); //=========================
// CALL(GENERATOR) ACTIONS
//=========================


function getProductModelData(e) {
  var _data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProductModelData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(getProductModelDataRequest, e);

        case 3:
          _data = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_4__["getProductModelDataSuccess"](_data));

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_4__["getProductModelDataFailure"](data));

        case 12:
          console.log("Error!");

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getProductGrades(e) {
  var _data2;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProductGrades$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(getProductGradesRequest, e);

        case 3:
          _data2 = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_4__["getProductGradesSuccess"](_data2));

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_4__["getProductGradesFailure"](data));

        case 12:
          console.log("Error!");

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function getProductGradeData(e) {
  var _data3;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProductGradeData$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(getProductGradeDataRequest, e);

        case 3:
          _data3 = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_4__["getProductGradeDataSuccess"](_data3));

        case 6:
          _context6.next = 13;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_ProductActions__WEBPACK_IMPORTED_MODULE_4__["getProductGradeDataFailure"](data));

        case 12:
          console.log("Error!");

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
} //=======================
// WATCHER FUNCTIONS
//=======================


function getProductModelDataWatcher() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProductModelDataWatcher$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_ProductTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_MODEL_DATA"], getProductModelData);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked4);
}
function getProductGradesWatcher() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProductGradesWatcher$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_ProductTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_GRADES"], getProductGrades);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked5);
}
function getProductGradeDataWatcher() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProductGradeDataWatcher$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_ProductTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_GRADE_DATA"], getProductGradeData);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked6);
} //=======================
// FORK SAGAS TO STORE
//=======================

function productSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function productSaga$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(getProductModelDataWatcher), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(getProductGradesWatcher), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(getProductGradeDataWatcher)]);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked7);
}

/***/ })

})
//# sourceMappingURL=_app.js.b8651d354490589be030.hot-update.js.map