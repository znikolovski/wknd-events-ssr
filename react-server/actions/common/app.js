exports["ssr"] =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/aem-processor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/Header */ "./src/components/header/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // This component is the application entry point

var App =
/*#__PURE__*/
function (_Page) {
  _inherits(App, _Page);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        navigationRoot: "/content/wknd-events/react/home"
      }), this.childComponents, this.childPages);
    }
  }]);

  return App;
}(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["Page"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["withModel"])(App));

/***/ }),

/***/ "./src/components/MappedComponents.js":
/*!********************************************!*\
  !*** ./src/components/MappedComponents.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
    Dedicated file to include all React components that map to an AEM component
*/
__webpack_require__(/*! ./page/Page */ "./src/components/page/Page.js");

__webpack_require__(/*! ./text/Text */ "./src/components/text/Text.js");

__webpack_require__(/*! ./image/Image */ "./src/components/image/Image.js");

__webpack_require__(/*! ./list/List */ "./src/components/list/List.js");

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.scss */ "./src/components/header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







__webpack_require__(/*! ../../utils/Icons */ "./src/utils/Icons.js");

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "Header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Header-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "Header-title"
      }, "WKND", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Header-title--inverse"
      }, "_")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Header-tools"
      }, this.homeLink)));
    }
  }, {
    key: "homeLink",
    get: function get() {
      var currLocation;
      currLocation = this.props.location.pathname;
      currLocation = currLocation.substr(0, currLocation.length - 5);

      if (this.props.navigationRoot && currLocation !== this.props.navigationRoot) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          className: "Header-action",
          to: this.props.navigationRoot + ".html"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          icon: "chevron-left"
        }));
      }

      return null;
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));

/***/ }),

/***/ "./src/components/header/Header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/Header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Header {\n  background-color: #FFEA08;\n  height: 80px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 99; }\n  @media only screen and (min-width: 768px) and (max-width: 992px) {\n    .Header {\n      height: 100px; } }\n  @media only screen and (min-width: 993px) {\n    .Header {\n      height: 100px; } }\n  .Header-wrapper {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 12px;\n    display: flex;\n    justify-content: space-between; }\n  .Header-title {\n    font-family: 'Helvetica';\n    font-size: 20px;\n    float: left;\n    padding-left: 12px; }\n    @media only screen and (min-width: 768px) and (max-width: 992px) {\n      .Header-title {\n        font-size: 24px; } }\n    @media only screen and (min-width: 993px) {\n      .Header-title {\n        font-size: 24px; } }\n  .Header-title--inverse {\n    color: #ffffff; }\n  .Header-tools {\n    padding-top: 8px;\n    padding-right: 12px; }\n  .Header-action {\n    background: #ffffff;\n    border-radius: 100%;\n    width: 32px;\n    height: 32px;\n    font-size: 18px;\n    color: #080808;\n    text-align: center;\n    align-content: center;\n    float: left;\n    margin-right: 1.5rem; }\n    .Header-action:last-child {\n      margin-right: 0; }\n    .Header-action .svg-inline--fa {\n      position: relative;\n      top: 2.5px;\n      right: 1px; }\n    @media only screen and (min-width: 993px) {\n      .Header-action {\n        width: 46px;\n        height: 46px;\n        font-size: 26px; } }\n    @media only screen and (min-width: 768px) and (max-width: 992px) {\n      .Header-action {\n        width: 40px;\n        height: 40px;\n        font-size: 22px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/image/Image.js":
/*!***************************************!*\
  !*** ./src/components/image/Image.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




__webpack_require__(/*! ./Image.scss */ "./src/components/image/Image.scss");
/**
 * Default Edit configuration for the Image component that interact with the Core Image component and sub-types
 *
 * @type EditConfig
 */


var ImageEditConfig = {
  emptyLabel: 'Image',
  isEmpty: function isEmpty(props) {
    return !props || !props.src || props.src.trim().length < 1;
  }
};
/**
 * Image React Component
 * 
 */

var Image =
/*#__PURE__*/
function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Image"
      }, this.content, this.caption);
    }
  }, {
    key: "caption",
    get: function get() {
      if (this.props.title && this.props.title.length > 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "Image-caption"
        }, this.props.title);
      }

      return null;
    }
  }, {
    key: "content",
    get: function get() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.src,
        alt: this.props.alt,
        title: this.props.displayPopupTitle && this.props.title
      });
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('wknd-events/components/content/image')(Image, ImageEditConfig);

/***/ }),

/***/ "./src/components/image/Image.scss":
/*!*****************************************!*\
  !*** ./src/components/image/Image.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Image {\n  padding: 0 12px !important; }\n  .Image-image {\n    margin: 2rem 0;\n    width: 100%;\n    border: 0;\n    font: inherit;\n    padding: 0;\n    vertical-align: baseline; }\n  .Image-caption {\n    color: #ffffff;\n    background-color: #080808;\n    height: 3em;\n    position: relative;\n    padding: 20px 10px;\n    top: -10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n    @media only screen and (min-width: 768px) and (max-width: 992px) {\n      .Image-caption {\n        padding: 25px 15px;\n        top: -14px; } }\n    @media only screen and (min-width: 993px) {\n      .Image-caption {\n        padding: 30px 20px;\n        top: -16px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/list/List.js":
/*!*************************************!*\
  !*** ./src/components/list/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





__webpack_require__(/*! ./List.scss */ "./src/components/list/List.scss");

var ListEditConfig = {
  emptyLabel: 'List',
  isEmpty: function isEmpty(props) {
    return !props || !props.items || props.items.length < 1;
  }
};
/**
 * ListItem renders the individual items in the list
 */

var ListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      if (!this.props.path || !this.props.title || !this.props.url) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ListItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "ListItem-link",
        to: this.props.url
      }, this.props.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ListItem-date"
      }, this.date)));
    }
  }, {
    key: "date",
    get: function get() {
      if (!this.props.date) {
        return null;
      }

      var date = new Date(this.props.date);
      return date.toLocaleDateString('en-US');
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 * List renders the list contents and maps wknd-events/components/content/list
 */


var List =
/*#__PURE__*/
function (_Component2) {
  _inherits(List, _Component2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "List"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "List-wrapper"
      }, this.props.items && this.props.items.map(function (listItem, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
          key: listItem.path,
          path: listItem.path,
          url: listItem.url,
          title: listItem.title,
          date: listItem.lastModified
        });
      })));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("wknd-events/components/content/list")(List, ListEditConfig);

/***/ }),

/***/ "./src/components/list/List.scss":
/*!***************************************!*\
  !*** ./src/components/list/List.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".List {\n  padding: 0 12px !important; }\n\n.ListItem {\n  list-style: none;\n  float: left;\n  width: 100%;\n  margin-bottom: 1em;\n  font-size: 2rem;\n  padding: 4px;\n  color: #0045ff; }\n  .ListItem:hover {\n    background-color: #ededed; }\n  .ListItem-link {\n    text-decoration: none; }\n  .ListItem-date {\n    width: 100%;\n    float: left;\n    color: #808080;\n    font-size: 1rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/page/Page.css":
/*!**************************************!*\
  !*** ./src/components/page/Page.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Center and max-width the content */\n.WkndPage {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 12px;\n    padding: 0;\n    float: unset !important; \n  }\n  ", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/page/Page.js":
/*!*************************************!*\
  !*** ./src/components/page/Page.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_RouteHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/RouteHelper */ "./src/utils/RouteHelper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
    Page.js

    - WKND specific implementation of Page
    - Maps to wknd-events/components/structure/page
*/



__webpack_require__(/*! ./Page.css */ "./src/components/page/Page.css"); // This component is a variant of a React Page component mapped to the "structure/page" resource type
// No functionality is changed other than to add an app specific CSS class


var WkndPage =
/*#__PURE__*/
function (_Page) {
  _inherits(WkndPage, _Page);

  function WkndPage() {
    _classCallCheck(this, WkndPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(WkndPage).apply(this, arguments));
  }

  _createClass(WkndPage, [{
    key: "containerProps",
    get: function get() {
      var attrs = _get(_getPrototypeOf(WkndPage.prototype), "containerProps", this);

      attrs.className = (attrs.className || '') + ' WkndPage ' + (this.props.cssClassNames || '');
      return attrs;
    }
  }]);

  return WkndPage;
}(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["Page"]);

Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('wknd-events/components/structure/page')(Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withComponentMappingContext"])(Object(_utils_RouteHelper__WEBPACK_IMPORTED_MODULE_1__["withRoute"])(WkndPage)));

/***/ }),

/***/ "./src/components/text/Text.js":
/*!*************************************!*\
  !*** ./src/components/text/Text.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
    Text.js

    Maps to wknd-events/components/content/text
*/



__webpack_require__(/*! ./Text.scss */ "./src/components/text/Text.scss");
/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */


var TextEditConfig = {
  emptyLabel: 'Text',
  isEmpty: function isEmpty(props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};
/**
 * Text React component
 */

var Text =
/*#__PURE__*/
function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var innercontent = this.props.richText ? this.richTextContent : this.textContent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Text"
      }, innercontent);
    }
  }, {
    key: "richTextContent",
    get: function get() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: this.props.text
        }
      });
    }
  }, {
    key: "textContent",
    get: function get() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.text);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('wknd-events/components/content/text')(Text, TextEditConfig);

/***/ }),

/***/ "./src/components/text/Text.scss":
/*!***************************************!*\
  !*** ./src/components/text/Text.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Text {\n  padding: 0 12px !important; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/server/CustomModelClient.js":
/*!*****************************************!*\
  !*** ./src/server/CustomModelClient.js ***!
  \*****************************************/
/*! exports provided: CustomModelClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModelClient", function() { return CustomModelClient; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-spa-page-model-manager */ "@adobe/cq-spa-page-model-manager");
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/**
 * Custom ModelClient meant to demonstrate how to customize the request sent to the remote server
 */

var CustomModelClient =
/*#__PURE__*/
function (_ModelClient) {
  _inherits(CustomModelClient, _ModelClient);

  function CustomModelClient(auth, apiHost) {
    var _this;

    _classCallCheck(this, CustomModelClient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomModelClient).call(this, apiHost));
    _this.FETCH_CONFIG = {};

    if (auth) {
      _this.FETCH_CONFIG = {
        headers: {
          Authorization: auth
        }
      };
    }

    return _this;
  }
  /**
   * Fetches a model using the given a resource path
   *
   * @param {string} modelPath - Path to the model
   * @return {*}
   */


  _createClass(CustomModelClient, [{
    key: "fetch",
    value: function fetch(modelPath) {
      if (!modelPath) {
        var err = 'Fetching model rejected for path: ' + modelPath;
        return Promise.reject(new Error(err));
      } // Either the API host has been provided or we make an absolute request relative to the current host


      var url = "".concat(this._apiHost).concat(modelPath);
      return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, this.FETCH_CONFIG).then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          var error = new Error('while fetching the model for url: ' + url, response.statusText || response.status);
          error.response = response;
          return Promise.reject(error);
        }
      });
    }
  }]);

  return CustomModelClient;
}(_adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelClient"]);

/***/ }),

/***/ "./src/server/aem-processor.js":
/*!*************************************!*\
  !*** ./src/server/aem-processor.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomModelClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomModelClient */ "./src/server/CustomModelClient.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adobe/cq-spa-page-model-manager */ "@adobe/cq-spa-page-model-manager");
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MappedComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MappedComponents */ "./src/components/MappedComponents.js");
/* harmony import */ var _components_MappedComponents__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_MappedComponents__WEBPACK_IMPORTED_MODULE_7__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

global.fetch = __webpack_require__(/*! node-fetch/lib/index */ "node-fetch/lib/index");








/**
 * Renders a valid model to a html stringify
 *
 * @param   {Object} model - the model to render
 * @param   {[type]} pagePath - the pagePath of the current model
 * @param   {[type]} requestUrl - the request url
 * @param   {[type]} requestPath - the request path 
 * @param   {[type]} pageModelRootPath - Path to the app root
 * @param   {[type]} isInEditor - Is the app used in the context of the page editor
 * @returns {String} the string serialization of the html output + state
 */

function renderModelToHTMLString(model, pagePath, requestUrl, requestPath, pageModelRootPath, isInEditor) {
  var html = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
    location: requestUrl,
    context: {}
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["EditorContext"].Provider, {
    value: isInEditor
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cqChildren: model[_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["Constants"].CHILDREN_PROP],
    cqItems: model[_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["Constants"].ITEMS_PROP],
    cqItemsOrder: model[_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["Constants"].ITEMS_ORDER_PROP],
    cqPath: pageModelRootPath,
    locationPathname: requestPath
  })))); // We are using ' for the string to we need to make sure we are encoding all other '

  var state = {
    rootModel: model,
    rootModelUrl: _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].rootPath,
    pagePath: pagePath
  };
  var stateStr = JSON.stringify(state);
  return "".concat(html, "\n     <script type=\"application/json\" id=\"__INITIAL_STATE__\">\n         ").concat(stateStr, "\n     </script>");
}

;

function processSPA(_x) {
  return _processSPA.apply(this, arguments);
}

function _processSPA() {
  _processSPA = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(args.method && args.method === 'GET')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", processGet(args));

          case 4:
            return _context.abrupt("return", processPost(args));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _processSPA.apply(this, arguments);
}

;

function processPost(_x2) {
  return _processPost.apply(this, arguments);
}

function _processPost() {
  _processPost = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(args) {
    var APP_ROOT_PATH, wcmMode, isInEditor, pageModelRootPath, modelData, pagePath, modelClient, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            APP_ROOT_PATH = '/content/wknd-events/react';
            wcmMode = args.wcmmode;
            isInEditor = wcmMode && wcmMode === 'EDIT' || wcmMode === 'PREVIEW';
            pageModelRootPath = args.pageRoot || APP_ROOT_PATH;
            modelData = args.data;
            pagePath = args.pagePath.replace('.html', '');
            modelClient = new _CustomModelClient__WEBPACK_IMPORTED_MODULE_0__["CustomModelClient"]('Basic YWRtaW46YWRtaW4=');
            _context2.next = 9;
            return _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].initialize({
              path: pageModelRootPath,
              model: modelData,
              modelClient: modelClient
            });

          case 9:
            _context2.next = 11;
            return renderModelToHTMLString(modelData, pagePath, args.pagePath, args.pagePath, pageModelRootPath, isInEditor);

          case 11:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _processPost.apply(this, arguments);
}

;

function processGet(_x3) {
  return _processGet.apply(this, arguments);
}

function _processGet() {
  _processGet = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(args) {
    var APP_ROOT_PATH, API_HOST, wcmMode, isInEditor, pageModelRootPath, modelData, pagePath, modelClient, model, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            APP_ROOT_PATH = args.pageRoot || '/content/wknd-events/react';
            API_HOST = args.apiHost || 'http://localhost:4502';
            wcmMode = args.wcmmode;
            isInEditor = wcmMode && wcmMode === 'EDIT' || wcmMode === 'PREVIEW';
            pageModelRootPath = args.pageRoot || APP_ROOT_PATH;
            modelData = args.data;
            pagePath = args.pagePath.replace('.html', '');
            modelClient = new _CustomModelClient__WEBPACK_IMPORTED_MODULE_0__["CustomModelClient"]('Basic YWRtaW46YWRtaW4=', API_HOST);
            _context3.next = 10;
            return _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].initialize({
              path: pageModelRootPath,
              model: modelData,
              modelClient: modelClient
            });

          case 10:
            _context3.next = 12;
            return _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].getData({
              path: pagePath
            });

          case 12:
            model = _context3.sent;
            _context3.next = 15;
            return renderModelToHTMLString(model, pagePath, args.pagePath, args.pagePath, pageModelRootPath, isInEditor);

          case 15:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _processGet.apply(this, arguments);
}

;
exports.processSPA = processSPA;

/***/ }),

/***/ "./src/utils/Icons.js":
/*!****************************!*\
  !*** ./src/utils/Icons.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeadphonesAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMusic"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCamera"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFutbol"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPaintBrush"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTheaterMasks"]);

/***/ }),

/***/ "./src/utils/RouteHelper.js":
/*!**********************************!*\
  !*** ./src/utils/RouteHelper.js ***!
  \**********************************/
/*! exports provided: withRoute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRoute", function() { return withRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Helper that facilitate the use of the {@link Route} component
 */

/**
 * Returns a composite component where a {@link Route} component wraps the provided component
 *
 * @param {React.Component} WrappedComponent    - React component to be wrapped
 * @param {string} [extension=html]             - extension used to identify a route amongst the tree of resource URLs
 * @returns {CompositeRoute}
 */

var withRoute = function withRoute(WrappedComponent, extension) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(CompositeRoute, _Component);

      function CompositeRoute() {
        _classCallCheck(this, CompositeRoute);

        return _possibleConstructorReturn(this, _getPrototypeOf(CompositeRoute).apply(this, arguments));
      }

      _createClass(CompositeRoute, [{
        key: "render",
        value: function render() {
          var _this = this;

          var routePath = this.props.cqPath;

          if (!routePath) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
          }

          extension = extension || 'html'; // Context path + route path + extension

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
            key: routePath,
            path: '(.*)' + routePath + '.' + extension,
            render: function render(routeProps) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, _this.props, routeProps));
            }
          });
        }
      }]);

      return CompositeRoute;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
};
/**
 * ScrollToTop component will scroll the window on every navigation.
 * wrapped in in `withRouter` to have access to router's props.
 */

var ScrollToTop =
/*#__PURE__*/
function (_Component2) {
  _inherits(ScrollToTop, _Component2);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTop).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ScrollToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ScrollToTop));

/***/ }),

/***/ "@adobe/cq-react-editable-components":
/*!******************************************************!*\
  !*** external "@adobe/cq-react-editable-components" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/cq-react-editable-components");

/***/ }),

/***/ "@adobe/cq-spa-page-model-manager":
/*!***************************************************!*\
  !*** external "@adobe/cq-spa-page-model-manager" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/cq-spa-page-model-manager");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "node-fetch/lib/index":
/*!***************************************!*\
  !*** external "node-fetch/lib/index" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch/lib/index");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map