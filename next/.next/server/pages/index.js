(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/Card.js":
/*!***********************!*\
  !*** ./pages/Card.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./pages/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\A DEVELOPER\\Linkedin COURSES\\linkedin-nextjs\\next\\pages\\Card.js";


const Card = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().front),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/juice.jpg",
      alt: "Avatar",
      className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardImage)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Vitamin Juice ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().price),
          children: "$24.99"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Need a jump on your vitamins while drinking? Tired of popping the pills? Drink our vitamin enhanced juice, available in several flavours."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./pages/Card.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");

var _jsxFileName = "D:\\A DEVELOPER\\Linkedin COURSES\\linkedin-nextjs\\next\\pages\\index.js";






const Index = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    cards
  } = dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.initialCards)());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().app),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/logo.png",
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),
      children: cards.map(card => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__.default, {}, card.id, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_4__.initStore.withRedux(Index));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": function() { return /* binding */ initialCards; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; },
/* harmony export */   "initStore": function() { return /* binding */ initStore; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_API_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/API/data.json */ "./pages/API/data.json");


 // Initial startState

const startState = {
  cards: []
}; // Actions

const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: _pages_API_data_json__WEBPACK_IMPORTED_MODULE_2__
  };
}; // Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards
      };

    default:
      return state;
  }
}; // Create store

const store = (initialState = startState) => {
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, initialState);
};

const initStore = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(store);

/***/ }),

/***/ "./pages/Card.module.css":
/*!*******************************!*\
  !*** ./pages/Card.module.css ***!
  \*******************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__3fHIv",
	"front": "Card_front__snEHW",
	"price": "Card_price__DzaWq",
	"container": "Card_container__7IDAI",
	"cardImage": "Card_cardImage__2e1ZA"
};


/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"app": "index_app__dX5MZ",
	"grid": "index_grid__kOMRE",
	"logo": "index_logo__PpCSR",
	"header": "index_header__1p3mc"
};


/***/ }),

/***/ "./pages/API/data.json":
/*!*****************************!*\
  !*** ./pages/API/data.json ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"id":0,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":1,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":2,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":3,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":4,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":5,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":6,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":7,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":8,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":9,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":10,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":11,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":12,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":13,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":14,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":15,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":16,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":17,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."}]');

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC8uL3N0b3JlLmpzIiwid2VicGFjazovL25leHQvLi9wYWdlcy9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjYXJkc3R5bGVzIiwiY2FyZEltYWdlIiwiSW5kZXgiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FyZHMiLCJpbml0aWFsQ2FyZHMiLCJzdHlsZXMiLCJtYXAiLCJjYXJkIiwiaWQiLCJpbml0U3RvcmUiLCJzdGFydFN0YXRlIiwidHlwZSIsImRhdGEiLCJyZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsaUJBQ1Q7QUFBSyxXQUFTLEVBQUVDLDhEQUFoQjtBQUFBLHlCQUNFO0FBQUssYUFBUyxFQUFFQSwrREFBaEI7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBQyxZQUFUO0FBQXNCLFNBQUcsRUFBQyxRQUExQjtBQUFtQyxlQUFTLEVBQUVBLG1FQUFvQkM7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFFRCxtRUFBaEI7QUFBQSw4QkFDRTtBQUFBLGtEQUFrQjtBQUFNLG1CQUFTLEVBQUVBLCtEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFhQSwrREFBZUYsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBWUYsUUFBUSxDQUFDRyxvREFBWSxFQUFiLENBQTFCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFoQjtBQUFBLDRCQUNJO0FBQVEsZUFBUyxFQUFFQSxpRUFBbkI7QUFBQSw2QkFDSTtBQUFLLFdBQUcsRUFBQyxXQUFUO0FBQ0ksaUJBQVMsRUFBRUEsK0RBRGY7QUFDNEIsV0FBRyxFQUFDO0FBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUk7QUFBSyxlQUFTLEVBQUVBLCtEQUFoQjtBQUFBLGdCQUVRRixLQUFLLENBQUNHLEdBQU4sQ0FBV0MsSUFBRCxpQkFDTiw4REFBQywwQ0FBRCxNQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0JILENBcEJEOztBQXFCQSwrREFBZUMsdURBQUEsQ0FBb0JULEtBQXBCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTVUsVUFBVSxHQUFHO0FBQ2ZQLE9BQUssRUFBRTtBQURRLENBQW5CLEMsQ0FJQTs7QUFFTyxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUM5QixTQUFPO0FBQ0hPLFFBQUksRUFBRSxjQURIO0FBRUhSLFNBQUssRUFBRVMsaURBQUlBO0FBRlIsR0FBUDtBQUlILENBTE0sQyxDQU9QOztBQUNPLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdDLFlBQVQsRUFBdUJDLE1BQXZCLEtBQWtDO0FBQ3JELFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUssY0FBTDtBQUNJLGFBQU87QUFDSFIsYUFBSyxFQUFFYSxNQUFNLENBQUNiO0FBRFgsT0FBUDs7QUFHSjtBQUFTLGFBQU9XLEtBQVA7QUFMYjtBQU9ILENBUk0sQyxDQVVQOztBQUNBLE1BQU1HLEtBQUssR0FBRyxDQUFDRixZQUFZLEdBQUdMLFVBQWhCLEtBQStCO0FBQ3pDLFNBQU9RLGtEQUFXLENBQUNMLE9BQUQsRUFBVUUsWUFBVixDQUFsQjtBQUNILENBRkQ7O0FBSU8sTUFBTU4sU0FBUyxHQUFHVSxpRUFBYSxDQUFDRixLQUFELENBQS9CLEM7Ozs7Ozs7Ozs7QUNsQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJkc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkc3R5bGVzLmNhcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmRzdHlsZXMuZnJvbnR9PlxuICAgICAgICA8aW1nIHNyYz1cIi9qdWljZS5qcGdcIiBhbHQ9XCJBdmF0YXJcIiBjbGFzc05hbWU9e2NhcmRzdHlsZXMuY2FyZEltYWdlfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZHN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoMz5WaXRhbWluIEp1aWNlIDxzcGFuIGNsYXNzTmFtZT17Y2FyZHN0eWxlcy5wcmljZX0+JDI0Ljk5PC9zcGFuPjwvaDM+IFxuICAgICAgICAgIDxwPk5lZWQgYSBqdW1wIG9uIHlvdXIgdml0YW1pbnMgd2hpbGUgZHJpbmtpbmc/IFRpcmVkIG9mIHBvcHBpbmcgdGhlIHBpbGxzPyBcbiAgICAgICAgICAgIERyaW5rIG91ciB2aXRhbWluIGVuaGFuY2VkIGp1aWNlLCBhdmFpbGFibGUgaW4gc2V2ZXJhbCBmbGF2b3Vycy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5pbXBvcnQgeyBpbml0U3RvcmUsIGluaXRpYWxDYXJkcyB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBjYXJkcyB9ID0gZGlzcGF0Y2goaW5pdGlhbENhcmRzKCkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkcy5tYXAoKGNhcmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtjYXJkLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBpbml0U3RvcmUud2l0aFJlZHV4KEluZGV4KTsiLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vcGFnZXMvQVBJL2RhdGEuanNvbic7XHJcblxyXG4vLyBJbml0aWFsIHN0YXJ0U3RhdGVcclxuY29uc3Qgc3RhcnRTdGF0ZSA9IHtcclxuICAgIGNhcmRzOiBbXVxyXG59O1xyXG5cclxuLy8gQWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0lOSVRJQUxDQVJEUycsXHJcbiAgICAgICAgY2FyZHM6IGRhdGFcclxuICAgIH1cclxufTtcclxuXHJcbi8vIFJlZHVjZXJzXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTklUSUFMQ0FSRFMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IGFjdGlvbi5jYXJkcyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDcmVhdGUgc3RvcmVcclxuY29uc3Qgc3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gc3RhcnRTdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gY3JlYXRlV3JhcHBlcihzdG9yZSk7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM2ZISXZcIixcblx0XCJmcm9udFwiOiBcIkNhcmRfZnJvbnRfX3NuRUhXXCIsXG5cdFwicHJpY2VcIjogXCJDYXJkX3ByaWNlX19EemFXcVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNhcmRfY29udGFpbmVyX183SURBSVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRfY2FyZEltYWdlX18yZTFaQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXBwXCI6IFwiaW5kZXhfYXBwX19kWDVNWlwiLFxuXHRcImdyaWRcIjogXCJpbmRleF9ncmlkX19rT01SRVwiLFxuXHRcImxvZ29cIjogXCJpbmRleF9sb2dvX19QcENTUlwiLFxuXHRcImhlYWRlclwiOiBcImluZGV4X2hlYWRlcl9fMXAzbWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9