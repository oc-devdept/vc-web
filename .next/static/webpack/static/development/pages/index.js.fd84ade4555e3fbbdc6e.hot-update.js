webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shop-style-four/CategoryProducts.js":
/*!********************************************************!*\
  !*** ./components/shop-style-four/CategoryProducts.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Index = function Index(props) {
  return __jsx("section", {
    className: "best-sellers-area pb-60"
  }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, null), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_7__["Slide"]
  }), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "section-title"
  }, __jsx("h2", null, __jsx("span", {
    className: "dot"
  }), " All Brands")), __jsx("div", {
    className: "row"
  }, props.brands.map(function (brand) {
    return __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-6",
      key: brand.id
    }, __jsx("div", {
      className: "single-product-box"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/brands/?id=".concat(brand.id)
    }, __jsx("a", null, __jsx("img", {
      src: brand.image,
      alt: "image"
    }), __jsx("img", {
      src: brand.imageHover,
      alt: "image"
    })))), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/brands/?id=".concat(brand.id)
    }, __jsx("a", null, brand.title))))));
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            brands: data.map(function (entry) {
              return entry.brand;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index); // const Index = props => (
//     <Layout>
//       <h1>Batman TV Shows</h1>
//       <ul>
//         {props.shows.map(show => (
//           <li key={show.id}>
//             <Link href="/p/[id]" as={`/p/${show.id}`}>
//               <a>{show.name}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
//   Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//     console.log(`Show data fetched. Count: ${data.length}`);
//     return {
//       shows: data.map(entry => entry.show)
//     };
//   };
//   export default Index;

/***/ })

})
//# sourceMappingURL=index.js.fd84ade4555e3fbbdc6e.hot-update.js.map