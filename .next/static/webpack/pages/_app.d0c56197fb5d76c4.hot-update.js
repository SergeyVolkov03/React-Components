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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchSlice: function() { return /* binding */ searchSlice; },\n/* harmony export */   setSearch: function() { return /* binding */ setSearch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    search: localStorage.getItem(\"name\") || \"\"\n};\nconst searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"search\",\n    initialState,\n    reducers: {\n        setSearch (state, action) {\n            localStorage.setItem(\"name\", action.payload.trim());\n            state.search = action.payload.trim();\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchSlice.reducer);\nconst { setSearch } = searchSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2VhcmNoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThEO0FBTTlELE1BQU1DLGVBQTRCO0lBQ2hDQyxRQUFRQyxhQUFhQyxPQUFPLENBQUMsV0FBVztBQUMxQztBQUVPLE1BQU1DLGNBQWNMLDZEQUFXQSxDQUFDO0lBQ3JDTSxNQUFNO0lBQ05MO0lBQ0FNLFVBQVU7UUFDUkMsV0FBVUMsS0FBSyxFQUFFQyxNQUE2QjtZQUM1Q1AsYUFBYVEsT0FBTyxDQUFDLFFBQVFELE9BQU9FLE9BQU8sQ0FBQ0MsSUFBSTtZQUNoREosTUFBTVAsTUFBTSxHQUFHUSxPQUFPRSxPQUFPLENBQUNDLElBQUk7UUFDcEM7SUFDRjtBQUNGLEdBQUc7QUFFSCwrREFBZVIsWUFBWVMsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRU4sU0FBUyxFQUFFLEdBQUdILFlBQVlVLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2VhcmNoU2xpY2UudHM/Y2Y2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxudHlwZSBTZWFyY2hTdGF0ZSA9IHtcclxuICBzZWFyY2g6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU2VhcmNoU3RhdGUgPSB7XHJcbiAgc2VhcmNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpIHx8ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VhcmNoKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIGFjdGlvbi5wYXlsb2FkLnRyaW0oKSk7XHJcbiAgICAgIHN0YXRlLnNlYXJjaCA9IGFjdGlvbi5wYXlsb2FkLnRyaW0oKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hTbGljZS5yZWR1Y2VyO1xyXG5leHBvcnQgY29uc3QgeyBzZXRTZWFyY2ggfSA9IHNlYXJjaFNsaWNlLmFjdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZWFyY2hTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlYXJjaCIsInN0YXRlIiwiYWN0aW9uIiwic2V0SXRlbSIsInBheWxvYWQiLCJ0cmltIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/reducers/searchSlice.ts\n"));

/***/ })

});