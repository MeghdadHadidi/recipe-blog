webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/menus.js":
/*!***************************!*\
  !*** ./reducers/menus.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menus; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  fetching: false,
  fetched: false,
  items: [],
  error: ''
};
function menus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_MENU_ITEMS_START"]:
      return _objectSpread({}, state, {
        fetching: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_MENU_ITEMS_END"]:
      return _objectSpread({}, state, {
        fetching: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_MENU_ITEMS_ERROR"]:
      return _objectSpread({}, state, {
        fetched: false,
        error: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_MENU_ITEMS"]:
      return _objectSpread({}, state, {
        fetched: true,
        items: action.payload
      });

    default:
      return state;
  }

  return state;
}

/***/ })

})
//# sourceMappingURL=_app.js.f3ae261e1cf29dffc0c7.hot-update.js.map