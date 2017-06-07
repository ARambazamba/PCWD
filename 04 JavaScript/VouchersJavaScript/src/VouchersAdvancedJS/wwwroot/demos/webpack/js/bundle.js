/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return login; });\n\r\n\r\nlet login = function login(usrname, password) {\r\n    if (usrname !== 'admin' || password !== 'pwd') {\r\n        console.log('incorrect login');\r\n    } else {\r\n        console.log(`logged in using ${usrname} and ${password}`);\r\n    }\r\n}\r\n\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi5qcz8xZGY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUMsUUFBUSxPQUFPLFNBQVM7QUFDL0Q7QUFDQTs7QUFFUSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5sZXQgbG9naW4gPSBmdW5jdGlvbiBsb2dpbih1c3JuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgaWYgKHVzcm5hbWUgIT09ICdhZG1pbicgfHwgcGFzc3dvcmQgIT09ICdwd2QnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luY29ycmVjdCBsb2dpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgbG9nZ2VkIGluIHVzaW5nICR7dXNybmFtZX0gYW5kICR7cGFzc3dvcmR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9naW4gfVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\r\n\r\nclass Utils {\r\n    log (msg) {\r\n        console.log(msg);\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Utils;\n\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy5qcz9lOGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIGxvZyAobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_js__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(1);\n//require('./utils.js');\r\n//require('./login.js');\r\n\r\n\r\n\r\n\r\ndebugger;\r\n__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__login_js__[\"a\" /* login */])('admin', 'pwd');\r\n\r\nlet u = new __WEBPACK_IMPORTED_MODULE_1__utils_js__[\"a\" /* Utils */]();\r\nu.log(\"all loaded and executed\");\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/ZDhlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQUE7QUFDQTs7QUFFYztBQUNBOztBQUVkO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZXF1aXJlKCcuL3V0aWxzLmpzJyk7XHJcbi8vcmVxdWlyZSgnLi9sb2dpbi5qcycpO1xyXG5cclxuaW1wb3J0IHtsb2dpbn0gZnJvbSBcIi4vbG9naW4uanNcIlxyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi91dGlscy5qc1wiXHJcblxyXG5kZWJ1Z2dlcjtcclxubG9naW4oJ2FkbWluJywgJ3B3ZCcpO1xyXG5cclxubGV0IHUgPSBuZXcgVXRpbHMoKTtcclxudS5sb2coXCJhbGwgbG9hZGVkIGFuZCBleGVjdXRlZFwiKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);