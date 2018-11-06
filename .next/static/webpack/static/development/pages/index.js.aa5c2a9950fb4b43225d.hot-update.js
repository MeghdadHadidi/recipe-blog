webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/menus.js":
/*!**************************!*\
  !*** ./actions/menus.js ***!
  \**************************/
/*! exports provided: getMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItems", function() { return getMenuItems; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://www.mocky.io/v2",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  responseType: 'json'
});
var getMenuItems = function getMenuItems() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_MENU_ITEMS_START"]
    });
    return instance.get('/5be165693000002a00d9a947').then(function (_ref) {
      var data = _ref.data;
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_MENU_ITEMS_END"]
      });

      if (result.success) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_MENU_ITEMS"],
          payload: result.data
        });
      } else {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_MENU_ITEMS_ERROR"],
          payload: result.error
        });
      }
    });
  };
};

/***/ })

})
//# sourceMappingURL=index.js.aa5c2a9950fb4b43225d.hot-update.js.map