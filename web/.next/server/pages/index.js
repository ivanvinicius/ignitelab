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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    return null;\n};\nconst getServerSideProps = async ({ req , res  })=>{\n    const session = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/api/auth/login\",\n                permanent: false\n            }\n        };\n    } else {\n        return {\n            redirect: {\n                destination: \"/app\",\n                permanent: false\n            }\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFHakMsU0FBU0MsSUFBSSxHQUFHO0lBQzdCLE9BQU8sSUFBSTtDQUNaO0FBRU0sTUFBTUMsa0JBQWtCLEdBQXVCLE9BQU8sRUFBRUMsR0FBRyxHQUFFQyxHQUFHLEdBQUUsR0FBSztJQUM1RSxNQUFNQyxPQUFPLEdBQUdMLCtEQUFVLENBQUNHLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRXBDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ1osT0FBTztZQUNMQyxRQUFRLEVBQUU7Z0JBQ1JDLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCQyxTQUFTLEVBQUUsS0FBSzthQUNqQjtTQUNGO0tBQ0YsTUFBTTtRQUNMLE9BQU87WUFDTEYsUUFBUSxFQUFFO2dCQUNSQyxXQUFXLEVBQUUsTUFBTTtnQkFDbkJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbihyZXEsIHJlcylcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvYXBpL2F1dGgvbG9naW4nLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogJy9hcHAnLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIkhvbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();