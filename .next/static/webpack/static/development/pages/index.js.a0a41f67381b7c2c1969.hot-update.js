webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import React, { Component } from 'react';
// import Navbar from '../components/Layout/Navbar';
// import Banner from '../components/shop-style-four/Banner';
// import OfferArea from '../components/shop-style-one/OfferArea';
// import Products from '../components/shop-style-one/Products';
// import CategoryProducts from '../components/shop-style-four/CategoryProducts';
// import TrendingProducts from '../components/shop-style-one/TrendingProducts';
// import BestSeller from '../components/shop-style-four/BestSellers';
// import Facility from '../components/Common/Facility';
// import Testimonials from '../components/Common/Testimonials';
// import Subscribe from '../components/Common/Subscribe';
// import Footer from '../components/Layout/Footer';
// import AddsModal from '../components/Modal/AddsModal';
// class Index extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Navbar />
//                 <Banner />
//                 {/*<BestSeller />*/}
//                 <CategoryProducts/>
//                 <Facility />
//                 <Testimonials />
//                 <Subscribe />
//                 <Footer />
//                 {/*<AddsModal />*/}
//             </React.Fragment>
//         );
//     }
// }
// export default Index;



var CategoryProducts = function CategoryProducts(props) {
  return __jsx("div", null, __jsx("h1", null, "Batman TV Shows"), __jsx("ul", null, props.shows.map(function (show) {
    return __jsx("li", {
      key: show.id
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(show.id)
    }, __jsx("a", null, show.name)));
  })));
};

CategoryProducts.getInitialProps =
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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (CategoryProducts);

/***/ })

})
//# sourceMappingURL=index.js.a0a41f67381b7c2c1969.hot-update.js.map