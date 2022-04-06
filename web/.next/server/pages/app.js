"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/app";
exports.ids = ["pages/app"];
exports.modules = {

/***/ "./src/pages/app/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/app/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyHome),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyHome() {\n    const { user  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/api/auth/logout\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\nconst getServerSideProps = async ({ req , res  })=>{\n    const { accessToken  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)(req, res);\n    console.log(\"TOKEN: \", `Bearer ${accessToken}`);\n    return {\n        props: {}\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBwL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUk0QjtBQUdiLFNBQVNFLE1BQU0sR0FBRztJQUMvQixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRiw0REFBTyxFQUFFO0lBRTFCLHFCQUNFLDhEQUFDRyxLQUFHOzswQkFDRiw4REFBQ0MsS0FBRzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFBTzswQkFDMUMsOERBQUNLLElBQUU7MEJBQUMsT0FBSzs7Ozs7b0JBQUs7MEJBTWQsOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxrQkFBa0I7MEJBQUMsUUFBTTs7Ozs7b0JBQUk7Ozs7OztZQUNqQyxDQUNQO0NBQ0Y7QUFFTSxNQUFNQyxrQkFBa0IsR0FBdUIsT0FBTyxFQUFFQyxHQUFHLEdBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzVFLE1BQU0sRUFBRUMsV0FBVyxHQUFFLEdBQUcsTUFBTWQsbUVBQWMsQ0FBQ1ksR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFFdERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRUYsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUvQyxPQUFPO1FBQ0xHLEtBQUssRUFBRSxFQUFFO0tBQ1Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3NyYy9wYWdlcy9hcHAvaW5kZXgudHN4PzYxNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0QWNjZXNzVG9rZW4sXG4gIHVzZVVzZXIsXG4gIHdpdGhQYWdlQXV0aFJlcXVpcmVkXG59IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUhvbWUoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8aDE+SGVsbG88L2gxPlxuXG4gICAgICB7LypcbiAgICAgICAgTsOjbyDDqSBwb3Nzw612ZWwgbGltcGFyIGNvb2tpZXMgc2VydmVyLXNpZGUgYXRyYXbDqXMgZG8gbmF2ZWdhZG9yLCBwYXJhIGlzc29cbiAgICAgICAgY2hhbWFtb3MgYSByb3RhIGxvZ291dCwgb25kZSBhIG1lc21hIHNlIGVuY2FycmVnYSBkZSBmYXplciBhIGxpbXBlemEuXG4gICAgICAqL31cbiAgICAgIDxhIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCI+TG9nb3V0PC9hPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVxLCByZXMpXG5cbiAgY29uc29sZS5sb2coJ1RPS0VOOiAnLCBgQmVhcmVyICR7YWNjZXNzVG9rZW59YClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0QWNjZXNzVG9rZW4iLCJ1c2VVc2VyIiwiTXlIb21lIiwidXNlciIsImRpdiIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoMSIsImEiLCJocmVmIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwiYWNjZXNzVG9rZW4iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/app/index.tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/app/index.tsx"));
module.exports = __webpack_exports__;

})();