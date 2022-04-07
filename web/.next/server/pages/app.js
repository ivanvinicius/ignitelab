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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyHome),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyHome() {\n    const { user  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/api/auth/logout\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivan/www/ignitelab/web/src/pages/app/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n// export const getServerSideProps: GetServerSideProps = withPageAuthRequired()\nconst getServerSideProps = async ({ req , res  })=>{\n    const { accessToken  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)(req, res);\n    console.log(\"TOKEN: \", `Bearer ${accessToken}`);\n    return {\n        props: {}\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBwL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUk0QjtBQUdiLFNBQVNFLE1BQU0sR0FBRztJQUMvQixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRiw0REFBTyxFQUFFO0lBRTFCLHFCQUNFLDhEQUFDRyxLQUFHOzswQkFDRiw4REFBQ0MsS0FBRzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFBTzswQkFDMUMsOERBQUNLLElBQUU7MEJBQUMsT0FBSzs7Ozs7b0JBQUs7MEJBTWQsOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxrQkFBa0I7MEJBQUMsUUFBTTs7Ozs7b0JBQUk7Ozs7OztZQUNqQyxDQUNQO0NBQ0Y7QUFFRCwrRUFBK0U7QUFFeEUsTUFBTUMsa0JBQWtCLEdBQXVCLE9BQU8sRUFBRUMsR0FBRyxHQUFFQyxHQUFHLEdBQUUsR0FBSztJQUM1RSxNQUFNLEVBQUVDLFdBQVcsR0FBRSxHQUFHLE1BQU1kLG1FQUFjLENBQUNZLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRXRERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUVGLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFL0MsT0FBTztRQUNMRyxLQUFLLEVBQUUsRUFBRTtLQUNWO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvYXBwL2luZGV4LnRzeD82MTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldEFjY2Vzc1Rva2VuLFxuICB1c2VVc2VyLFxuICB3aXRoUGFnZUF1dGhSZXF1aXJlZFxufSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlIb21lKCkge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHVzZXIsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPGgxPkhlbGxvPC9oMT5cblxuICAgICAgey8qXG4gICAgICAgIE7Do28gw6kgcG9zc8OtdmVsIGxpbXBhciBjb29raWVzIHNlcnZlci1zaWRlIGF0cmF2w6lzIGRvIG5hdmVnYWRvciwgcGFyYSBpc3NvXG4gICAgICAgIGNoYW1hbW9zIGEgcm90YSBsb2dvdXQsIG9uZGUgYSBtZXNtYSBzZSBlbmNhcnJlZ2EgZGUgZmF6ZXIgYSBsaW1wZXphLlxuICAgICAgKi99XG4gICAgICA8YSBocmVmPVwiL2FwaS9hdXRoL2xvZ291dFwiPkxvZ291dDwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoUGFnZUF1dGhSZXF1aXJlZCgpXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVxLCByZXMpXG5cbiAgY29uc29sZS5sb2coJ1RPS0VOOiAnLCBgQmVhcmVyICR7YWNjZXNzVG9rZW59YClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0QWNjZXNzVG9rZW4iLCJ1c2VVc2VyIiwiTXlIb21lIiwidXNlciIsImRpdiIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoMSIsImEiLCJocmVmIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwiYWNjZXNzVG9rZW4iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/app/index.tsx\n");

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