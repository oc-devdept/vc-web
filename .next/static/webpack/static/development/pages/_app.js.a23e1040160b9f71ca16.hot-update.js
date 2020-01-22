webpackHotUpdate("static\\development\\pages\\_app.js",{

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

/***/ })

})
//# sourceMappingURL=_app.js.a23e1040160b9f71ca16.hot-update.js.map