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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\React\\\\React-Components\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\React-Components\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzQztBQUNBO0FBRXZCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNKLGlEQUFRQTtRQUFDQyxPQUFPQSwrQ0FBS0E7a0JBQ2xCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBR2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY29tcG9uZW50cy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/postApi.ts":
/*!*********************************!*\
  !*** ./src/services/postApi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postApi: () => (/* binding */ postApi),\n/* harmony export */   useGetPostDetailsQuery: () => (/* binding */ useGetPostDetailsQuery),\n/* harmony export */   useGetPostsQuery: () => (/* binding */ useGetPostsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BASE_URL = \"https://swapi.dev/api/people\";\nconst postApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"postApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: BASE_URL\n    }),\n    extractRehydrationInfo (action, { reducerPath }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    endpoints: (build)=>({\n            getPosts: build.query({\n                query: (params)=>({\n                        url: `/?search=${params.searchText}&page=${params.page}`\n                    })\n            }),\n            getPostDetails: build.query({\n                query: (id)=>({\n                        url: `/${id}`\n                    })\n            })\n        })\n});\nconst { useGetPostsQuery, useGetPostDetailsQuery } = postApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcG9zdEFwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlFO0FBRTVCO0FBRTdDLE1BQU1HLFdBQVc7QUFPVixNQUFNQyxVQUFVSix1RUFBU0EsQ0FBQztJQUMvQkssYUFBYTtJQUNiQyxXQUFXTCw0RUFBY0EsQ0FBQztRQUFFTSxTQUFTSjtJQUFTO0lBQzlDSyx3QkFBdUJDLE1BQU0sRUFBRSxFQUFFSixXQUFXLEVBQUU7UUFDNUMsSUFBSUksT0FBT0MsSUFBSSxLQUFLUix1REFBT0EsRUFBRTtZQUMzQixPQUFPTyxPQUFPRSxPQUFPLENBQUNOLFlBQVk7UUFDcEM7SUFDRjtJQUNBTyxXQUFXLENBQUNDLFFBQVc7WUFDckJDLFVBQVVELE1BQU1FLEtBQUssQ0FBZTtnQkFDbENBLE9BQU8sQ0FBQ0MsU0FBb0I7d0JBQzFCQyxLQUFLLENBQUMsU0FBUyxFQUFFRCxPQUFPRSxVQUFVLENBQUMsTUFBTSxFQUFFRixPQUFPRyxJQUFJLENBQUMsQ0FBQztvQkFDMUQ7WUFDRjtZQUNBQyxnQkFBZ0JQLE1BQU1FLEtBQUssQ0FBZTtnQkFDeENBLE9BQU8sQ0FBQ00sS0FBZ0I7d0JBQ3RCSixLQUFLLENBQUMsQ0FBQyxFQUFFSSxHQUFHLENBQUM7b0JBQ2Y7WUFDRjtRQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUVDLHNCQUFzQixFQUFFLEdBQUduQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY29tcG9uZW50cy8uL3NyYy9zZXJ2aWNlcy9wb3N0QXBpLnRzP2MzMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhLCBIZXJvIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS9wZW9wbGUnO1xyXG5cclxuaW50ZXJmYWNlIFBhcmFtcyB7XHJcbiAgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gIHBhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAncG9zdEFwaScsXHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6IEJBU0VfVVJMIH0pLFxyXG4gIGV4dHJhY3RSZWh5ZHJhdGlvbkluZm8oYWN0aW9uLCB7IHJlZHVjZXJQYXRoIH0pIHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRbcmVkdWNlclBhdGhdXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgIGdldFBvc3RzOiBidWlsZC5xdWVyeTxEYXRhLCBQYXJhbXM+KHtcclxuICAgICAgcXVlcnk6IChwYXJhbXM6IFBhcmFtcykgPT4gKHtcclxuICAgICAgICB1cmw6IGAvP3NlYXJjaD0ke3BhcmFtcy5zZWFyY2hUZXh0fSZwYWdlPSR7cGFyYW1zLnBhZ2V9YCxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuICAgIGdldFBvc3REZXRhaWxzOiBidWlsZC5xdWVyeTxIZXJvLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChpZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgIHVybDogYC8ke2lkfWAsXHJcbiAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0UG9zdHNRdWVyeSwgdXNlR2V0UG9zdERldGFpbHNRdWVyeSB9ID0gcG9zdEFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiSFlEUkFURSIsIkJBU0VfVVJMIiwicG9zdEFwaSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImV4dHJhY3RSZWh5ZHJhdGlvbkluZm8iLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImVuZHBvaW50cyIsImJ1aWxkIiwiZ2V0UG9zdHMiLCJxdWVyeSIsInBhcmFtcyIsInVybCIsInNlYXJjaFRleHQiLCJwYWdlIiwiZ2V0UG9zdERldGFpbHMiLCJpZCIsInVzZUdldFBvc3RzUXVlcnkiLCJ1c2VHZXRQb3N0RGV0YWlsc1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/postApi.ts\n");

/***/ }),

/***/ "./src/store/reducers/pageSlice.ts":
/*!*****************************************!*\
  !*** ./src/store/reducers/pageSlice.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   pageSlice: () => (/* binding */ pageSlice),\n/* harmony export */   setPage: () => (/* binding */ setPage)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    page: \"1\"\n};\nconst pageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"page\",\n    initialState,\n    reducers: {\n        setPage (state, action) {\n            state.page = action.payload;\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSlice.reducer);\nconst { setPage } = pageSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvcGFnZVNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThEO0FBTTlELE1BQU1DLGVBQTBCO0lBQzlCQyxNQUFNO0FBQ1I7QUFFTyxNQUFNQyxZQUFZSCw2REFBV0EsQ0FBQztJQUNuQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFNBQVFDLEtBQUssRUFBRUMsTUFBNkI7WUFDMUNELE1BQU1MLElBQUksR0FBR00sT0FBT0MsT0FBTztRQUM3QjtJQUNGO0FBQ0YsR0FBRztBQUVILGlFQUFlTixVQUFVTyxPQUFPLEVBQUM7QUFDMUIsTUFBTSxFQUFFSixPQUFPLEVBQUUsR0FBR0gsVUFBVVEsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY29tcG9uZW50cy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9wYWdlU2xpY2UudHM/MGVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxudHlwZSBQYWdlU3RhdGUgPSB7XHJcbiAgcGFnZTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQYWdlU3RhdGUgPSB7XHJcbiAgcGFnZTogJzEnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncGFnZScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRQYWdlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZVNsaWNlLnJlZHVjZXI7XHJcbmV4cG9ydCBjb25zdCB7IHNldFBhZ2UgfSA9IHBhZ2VTbGljZS5hY3Rpb25zO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJwYWdlIiwicGFnZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0UGFnZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/pageSlice.ts\n");

/***/ }),

/***/ "./src/store/reducers/searchSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/searchSlice.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   searchSlice: () => (/* binding */ searchSlice),\n/* harmony export */   setSearch: () => (/* binding */ setSearch)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    // search: localStorage.getItem('name') || '',\n    search: \"\"\n};\nconst searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"search\",\n    initialState,\n    reducers: {\n        setSearch (state, action) {\n            localStorage.setItem(\"name\", action.payload.trim());\n            state.search = action.payload.trim();\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);\nconst { setSearch } = searchSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2VhcmNoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEQ7QUFNOUQsTUFBTUMsZUFBNEI7SUFDaEMsOENBQThDO0lBQzlDQyxRQUFRO0FBQ1Y7QUFFTyxNQUFNQyxjQUFjSCw2REFBV0EsQ0FBQztJQUNyQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFdBQVVDLEtBQUssRUFBRUMsTUFBNkI7WUFDNUNDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRRixPQUFPRyxPQUFPLENBQUNDLElBQUk7WUFDaERMLE1BQU1MLE1BQU0sR0FBR00sT0FBT0csT0FBTyxDQUFDQyxJQUFJO1FBQ3BDO0lBQ0Y7QUFDRixHQUFHO0FBRUgsaUVBQWVULFlBQVlVLE9BQU8sRUFBQztBQUM1QixNQUFNLEVBQUVQLFNBQVMsRUFBRSxHQUFHSCxZQUFZVyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jb21wb25lbnRzLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NlYXJjaFNsaWNlLnRzP2NmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbnR5cGUgU2VhcmNoU3RhdGUgPSB7XHJcbiAgc2VhcmNoOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFNlYXJjaFN0YXRlID0ge1xyXG4gIC8vIHNlYXJjaDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKSB8fCAnJyxcclxuICBzZWFyY2g6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VhcmNoKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIGFjdGlvbi5wYXlsb2FkLnRyaW0oKSk7XHJcbiAgICAgIHN0YXRlLnNlYXJjaCA9IGFjdGlvbi5wYXlsb2FkLnRyaW0oKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hTbGljZS5yZWR1Y2VyO1xyXG5leHBvcnQgY29uc3QgeyBzZXRTZWFyY2ggfSA9IHNlYXJjaFNsaWNlLmFjdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaCIsInNlYXJjaFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VhcmNoIiwic3RhdGUiLCJhY3Rpb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicGF5bG9hZCIsInRyaW0iLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/searchSlice.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reducers_pageSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/pageSlice */ \"./src/store/reducers/pageSlice.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_postApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/postApi */ \"./src/services/postApi.ts\");\n/* harmony import */ var _reducers_searchSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/searchSlice */ \"./src/store/reducers/searchSlice.ts\");\n\n\n\n\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    pageReducer: _reducers_pageSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    searchReducer: _reducers_searchSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    [_services_postApi__WEBPACK_IMPORTED_MODULE_2__.postApi.reducerPath]: _services_postApi__WEBPACK_IMPORTED_MODULE_2__.postApi.reducer\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: rootReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_services_postApi__WEBPACK_IMPORTED_MODULE_2__.postApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ29CO0FBQ3JCO0FBQ0s7QUFFbkQsTUFBTUssY0FBY0osaUVBQWVBLENBQUM7SUFDbENELFdBQVdBLDZEQUFBQTtJQUNYSSxhQUFhQSwrREFBQUE7SUFDYixDQUFDRCxzREFBT0EsQ0FBQ0csV0FBVyxDQUFDLEVBQUVILHNEQUFPQSxDQUFDSSxPQUFPO0FBQ3hDO0FBRU8sTUFBTUMsUUFBUU4sZ0VBQWNBLENBQUM7SUFDbENLLFNBQVNGO0lBQ1RJLFlBQVksQ0FBQ0MsdUJBQ1hBLHVCQUF1QkMsTUFBTSxDQUFDUixzREFBT0EsQ0FBQ00sVUFBVTtBQUNwRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY29tcG9uZW50cy8uL3NyYy9zdG9yZS9zdG9yZS50cz81MDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWdlUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3BhZ2VTbGljZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgcG9zdEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL3Bvc3RBcGknO1xyXG5pbXBvcnQgc2VhcmNoUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3NlYXJjaFNsaWNlJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwYWdlUmVkdWNlcixcclxuICBzZWFyY2hSZWR1Y2VyLFxyXG4gIFtwb3N0QXBpLnJlZHVjZXJQYXRoXTogcG9zdEFwaS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChwb3N0QXBpLm1pZGRsZXdhcmUpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuIl0sIm5hbWVzIjpbInBhZ2VSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJwb3N0QXBpIiwic2VhcmNoUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJyZWR1Y2VyIiwic3RvcmUiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();