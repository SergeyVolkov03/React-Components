"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/reducers/searchSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/searchSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchSlice: function() { return /* binding */ searchSlice; },\n/* harmony export */   setSearch: function() { return /* binding */ setSearch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    // search: localStorage.getItem('name') || '',\n    search: \"\"\n};\nconst searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"search\",\n    initialState,\n    reducers: {\n        setSearch (state, action) {\n            localStorage.setItem(\"name\", action.payload.trim());\n            state.search = action.payload.trim();\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchSlice.reducer);\nconst { setSearch } = searchSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2VhcmNoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThEO0FBTTlELE1BQU1DLGVBQTRCO0lBQ2hDLDhDQUE4QztJQUM5Q0MsUUFBUTtBQUNWO0FBRU8sTUFBTUMsY0FBY0gsNkRBQVdBLENBQUM7SUFDckNJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxXQUFVQyxLQUFLLEVBQUVDLE1BQTZCO1lBQzVDQyxhQUFhQyxPQUFPLENBQUMsUUFBUUYsT0FBT0csT0FBTyxDQUFDQyxJQUFJO1lBQ2hETCxNQUFNTCxNQUFNLEdBQUdNLE9BQU9HLE9BQU8sQ0FBQ0MsSUFBSTtRQUNwQztJQUNGO0FBQ0YsR0FBRztBQUVILCtEQUFlVCxZQUFZVSxPQUFPLEVBQUM7QUFDNUIsTUFBTSxFQUFFUCxTQUFTLEVBQUUsR0FBR0gsWUFBWVcsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9zZWFyY2hTbGljZS50cz9jZjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG50eXBlIFNlYXJjaFN0YXRlID0ge1xyXG4gIHNlYXJjaDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZWFyY2hTdGF0ZSA9IHtcclxuICAvLyBzZWFyY2g6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykgfHwgJycsXHJcbiAgc2VhcmNoOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnc2VhcmNoJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlYXJjaChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBhY3Rpb24ucGF5bG9hZC50cmltKCkpO1xyXG4gICAgICBzdGF0ZS5zZWFyY2ggPSBhY3Rpb24ucGF5bG9hZC50cmltKCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoU2xpY2UucmVkdWNlcjtcclxuZXhwb3J0IGNvbnN0IHsgc2V0U2VhcmNoIH0gPSBzZWFyY2hTbGljZS5hY3Rpb25zO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJzZWFyY2giLCJzZWFyY2hTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlYXJjaCIsInN0YXRlIiwiYWN0aW9uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInBheWxvYWQiLCJ0cmltIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/reducers/searchSlice.ts\n"));

/***/ })

});