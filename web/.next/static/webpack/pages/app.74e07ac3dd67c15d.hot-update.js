"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app",{

/***/ "./src/pages/app/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/app/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MyHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction MyHome() {\n    _s();\n    var user = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser)().user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/api/auth/logout\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n_s(MyHome, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = MyHome;\nvar _c;\n$RefreshReg$(_c, \"MyHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBwL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBSTRCOzs7QUFHYixTQUFTQyxNQUFNLEdBQUc7O0lBQy9CLElBQU0sSUFBTSxHQUFLRCw0REFBTyxFQUFFLENBQWxCRSxJQUFJO0lBRVoscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxLQUFHOzBCQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Ozs7O29CQUFPOzBCQUMxQyw4REFBQ0ssSUFBRTswQkFBQyxPQUFLOzs7OztvQkFBSzswQkFNZCw4REFBQ0MsR0FBQztnQkFBQ0MsSUFBSSxFQUFDLGtCQUFrQjswQkFBQyxRQUFNOzs7OztvQkFBSTs7Ozs7O1lBQ2pDLENBQ1A7Q0FDRjtHQWZ1QlIsTUFBTTs7UUFDWEQsd0RBQU87OztBQURGQyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcHAvaW5kZXgudHN4PzYxNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0QWNjZXNzVG9rZW4sXG4gIHVzZVVzZXIsXG4gIHdpdGhQYWdlQXV0aFJlcXVpcmVkXG59IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUhvbWUoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8aDE+SGVsbG88L2gxPlxuXG4gICAgICB7LypcbiAgICAgICAgTsOjbyDDqSBwb3Nzw612ZWwgbGltcGFyIGNvb2tpZXMgc2VydmVyLXNpZGUgYXRyYXbDqXMgZG8gbmF2ZWdhZG9yLCBwYXJhIGlzc29cbiAgICAgICAgY2hhbWFtb3MgYSByb3RhIGxvZ291dCwgb25kZSBhIG1lc21hIHNlIGVuY2FycmVnYSBkZSBmYXplciBhIGxpbXBlemEuXG4gICAgICAqL31cbiAgICAgIDxhIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCI+TG9nb3V0PC9hPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVxLCByZXMpXG5cbiAgY29uc29sZS5sb2coJ1RPS0VOOiAnLCBgQmVhcmVyICR7YWNjZXNzVG9rZW59YClcblxuICByZXR1cm4gKCkgPT4gd2l0aFBhZ2VBdXRoUmVxdWlyZWQoKVxufVxuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJNeUhvbWUiLCJ1c2VyIiwiZGl2IiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImgxIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/app/index.tsx\n");

/***/ })

});