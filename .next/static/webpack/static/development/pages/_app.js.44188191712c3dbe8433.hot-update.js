webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./middleware/asyncActionsMiddleware.js":
/*!**********************************************!*\
  !*** ./middleware/asyncActionsMiddleware.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var asyncActionsMiddleware = function asyncActionsMiddleware(store) {
  return function (next) {
    return function (action) {
      var isActionAsync = action.hasOwnProperty("async");

      if (!isActionAsync) {
        next(action);
      } else {
        var httpMethodToInvoke = action.httpMethodToInvoke,
            params = action.params,
            type = action.type;
        var inProgressType = generateInProgressTypeName(type);
        Promise.resolve(1).then(function () {
          return store.dispatch({
            type: inProgressType
          });
        });
        httpMethodToInvoke.apply(void 0, _toConsumableArray(params)).then(function (result) {
          var successType = generateSuccessTypeName(type);
          Promise.resolve(1).then(function () {
            return store.dispatch(_objectSpread({
              type: successType
            }, result));
          });
        }).catch(function (err) {
          console.log("Middleware -> HttpMethodCall -> ", err);
          var errType = generateErrorTypeName(type);
          Promise.resolve(1).then(function () {
            return store.dispatch({
              type: errType,
              err: err
            });
          });
        });
        return next(action);
      }
    };
  };
};

var generateInProgressTypeName = function generateInProgressTypeName(actionName) {
  return "".concat(actionName, "_INP_ROGRESS");
};

var generateErrorTypeName = function generateErrorTypeName(actionName) {
  return "".concat(actionName, "_ERROR");
};

var generateSuccessTypeName = function generateSuccessTypeName(actionName) {
  return "".concat(actionName, "_SUCCESS");
};

/* harmony default export */ __webpack_exports__["default"] = ({
  generateErrorTypeName: generateErrorTypeName,
  generateInProgressTypeName: generateInProgressTypeName,
  generateSuccessTypeName: generateSuccessTypeName,
  asyncActionsMiddleware: asyncActionsMiddleware
});

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _middleware_asyncActionsMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/asyncActionsMiddleware */ "./middleware/asyncActionsMiddleware.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./reducers/index.js");




var enhancers = [];
var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], _middleware_asyncActionsMiddleware__WEBPACK_IMPORTED_MODULE_2__["default"]];
var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)].concat(enhancers));

var configureStore = function configureStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, composedEnhancers);
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

})
//# sourceMappingURL=_app.js.44188191712c3dbe8433.hot-update.js.map