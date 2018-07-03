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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar login = function login(usrname, password) {\n  if (usrname !== \"admin\" || password !== \"pwd\") {\n    console.log(\"incorrect login\");\n  } else {\n    console.log(\"logged in using \" + usrname + \" and \" + password);\n  }\n};\n\nvar other = 10;\n\nexports.login = login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi5qcz8xZGY5Il0sIm5hbWVzIjpbImxvZ2luIiwidXNybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsIm90aGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFFBQVEsU0FBU0EsS0FBVCxDQUFlQyxPQUFmLEVBQXdCQyxRQUF4QixFQUFrQztBQUM1QyxNQUFJRCxZQUFZLE9BQVosSUFBdUJDLGFBQWEsS0FBeEMsRUFBK0M7QUFDN0NDLFlBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNELEdBRkQsTUFFTztBQUNMRCxZQUFRQyxHQUFSLHNCQUErQkgsT0FBL0IsYUFBOENDLFFBQTlDO0FBQ0Q7QUFDRixDQU5EOztBQVFBLElBQUlHLFFBQVEsRUFBWjs7UUFFU0wsSyxHQUFBQSxLIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9naW4gPSBmdW5jdGlvbiBsb2dpbih1c3JuYW1lLCBwYXNzd29yZCkge1xyXG4gIGlmICh1c3JuYW1lICE9PSBcImFkbWluXCIgfHwgcGFzc3dvcmQgIT09IFwicHdkXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0IGxvZ2luXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9nZ2VkIGluIHVzaW5nICR7dXNybmFtZX0gYW5kICR7cGFzc3dvcmR9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIG90aGVyID0gMTA7XHJcblxyXG5leHBvcnQgeyBsb2dpbiB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9sb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Utils = exports.Utils = function () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n\n  _createClass(Utils, [{\n    key: \"log\",\n    value: function log(msg) {\n      console.log(msg);\n    }\n  }, {\n    key: \"saySthg\",\n    value: function saySthg() {\n      console.log(\"sthg\");\n    }\n  }]);\n\n  return Utils;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy5qcz9lOGZiIl0sIm5hbWVzIjpbIlV0aWxzIiwibXNnIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxLLFdBQUFBLEs7Ozs7Ozs7d0JBQ1BDLEcsRUFBSztBQUNQQyxjQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDs7OzhCQUVTO0FBQ1JDLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgbG9nKG1zZykge1xyXG4gICAgY29uc29sZS5sb2cobXNnKTtcclxuICB9XHJcblxyXG4gIHNheVN0aGcoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0aGdcIik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _login = __webpack_require__(0);\n\nvar _utils = __webpack_require__(1);\n\n// Module Loader: System.js Common.js\n//require('./utils.js');\n//require('./login.js');\n\ndebugger;\n(0, _login.login)(\"admin\", \"pwd\");\n\nvar u = new _utils.Utils();\nu.log(\"all loaded and executed!\");\n\nu.saySthg();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/ZDhlZSJdLCJuYW1lcyI6WyJ1IiwiVXRpbHMiLCJsb2ciLCJzYXlTdGhnIl0sIm1hcHBpbmdzIjoiOztBQUlBOztBQUNBOztBQUxBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBLGtCQUFNLE9BQU4sRUFBZSxLQUFmOztBQUVBLElBQUlBLElBQUksSUFBSUMsWUFBSixFQUFSO0FBQ0FELEVBQUVFLEdBQUYsQ0FBTSwwQkFBTjs7QUFFQUYsRUFBRUcsT0FBRiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlIExvYWRlcjogU3lzdGVtLmpzIENvbW1vbi5qc1xyXG4vL3JlcXVpcmUoJy4vdXRpbHMuanMnKTtcclxuLy9yZXF1aXJlKCcuL2xvZ2luLmpzJyk7XHJcblxyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuL2xvZ2luLmpzXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuXHJcbmRlYnVnZ2VyO1xyXG5sb2dpbihcImFkbWluXCIsIFwicHdkXCIpO1xyXG5cclxubGV0IHUgPSBuZXcgVXRpbHMoKTtcclxudS5sb2coXCJhbGwgbG9hZGVkIGFuZCBleGVjdXRlZCFcIik7XHJcblxyXG51LnNheVN0aGcoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);