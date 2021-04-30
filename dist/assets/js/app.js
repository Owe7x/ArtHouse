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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n$(document).ready(function($){\r\n\r\n    $('.multiple-items').slick({\r\n        infinite: true,\r\n        slidesToShow: 4,\r\n        slidesToScroll: 2,\r\n        responsive: [\r\n            {\r\n              breakpoint: 1400,\r\n              settings: {\r\n                slidesToShow: 3,\r\n                slidesToScroll: 3,\r\n                infinite: true,\r\n                dots: true\r\n              }\r\n            },\r\n            {\r\n              breakpoint: 1200,\r\n              settings: {\r\n                slidesToShow: 2,\r\n                slidesToScroll: 2\r\n              }\r\n            },\r\n            {\r\n              breakpoint: 800,\r\n              settings: {\r\n                slidesToShow: 1,\r\n                slidesToScroll: 1\r\n              }\r\n            }\r\n          ]\r\n       \r\n     });\r\n    \r\n    $('.spoiler_links').click(function(){\r\n        $(this).parents().children('.spoiler_body').toggle('slow');\r\n        $(this).toggleClass('close')\r\n        return false;\r\n    });\r\n    \r\n})\r\n\r\n\r\nfunction sliderHandler(price) {\r\n    // calculate\r\n    if (price === undefined) {\r\n      price = srvPrices;\r\n    }\r\n \r\n    var persents = price.totalS1 * price.totalS2 * 120000 * 0.05;\r\n    var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);\r\n    document.getElementById(\"s1\").innerHTML = result.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \") + ' ' + 'рублей';\r\n    document.querySelector(\".polzunok__value\").innerHTML = price.totalS1.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \") ;\r\n    document.querySelector(\".polzunok__value-one\").innerHTML = price.totalS2;\r\n  }\r\n \r\n  var srvPrices = {}\r\n  var c1 = document.getElementById(\"s3-check1\");\r\n  var c2 = document.getElementById(\"s3-check2\");\r\n \r\n \r\n  $(\".range1\").ionRangeSlider({\r\n    from: 25,\r\n    grid: false,\r\n    values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\r\n    onChange: function (data) {\r\n      srvPrices.totalS1 = data.from_value;\r\n      sliderHandler(srvPrices)\r\n    },\r\n    onStart: function(data) {\r\n      srvPrices.totalS1 = data.from_value;\r\n      sliderHandler(srvPrices)\r\n    }\r\n });\r\n \n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\ArtHouse\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\ArtHouse\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });