(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("http"));
	else if(typeof define === 'function' && define.amd)
		define(["http"], factory);
	else if(typeof exports === 'object')
		exports["httpapijs"] = factory(require("http"));
	else
		root["httpapijs"] = factory(root["http"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ServerAPI = __webpack_require__(1);

	var _ServerAPI2 = _interopRequireDefault(_ServerAPI);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ServerAPI2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ServerAPI = __webpack_require__(2);

	var _ServerAPI2 = _interopRequireDefault(_ServerAPI);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ServerAPI2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _http = __webpack_require__(3);

	var _http2 = _interopRequireDefault(_http);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ServerAPI = function (_Server) {
	  _inherits(ServerAPI, _Server);

	  function ServerAPI() {
	    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 80;
	    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __dirname;

	    _classCallCheck(this, ServerAPI);

	    var _this = _possibleConstructorReturn(this, (ServerAPI.__proto__ || Object.getPrototypeOf(ServerAPI)).call(this));

	    _this.port = parseFloat(port);
	    _this.root = root;

	    _this.on = _this.on.bind(_this);
	    _this.up = _this.up.bind(_this);
	    _get(ServerAPI.prototype.__proto__ || Object.getPrototypeOf(ServerAPI.prototype), 'on', _this).call(_this, 'request', _this.onRequest);
	    return _this;
	  }

	  _createClass(ServerAPI, [{
	    key: 'onRequest',
	    value: function onRequest(request, response) {
	      this.emit(request.method.toLowerCase(), request, response);
	    }
	  }, {
	    key: 'on',
	    value: function on(type, handler) {
	      switch (type) {
	        case 'start':
	          this.onStart = handler.bind(this);
	          break;
	        case 'request':
	          break;
	        default:
	          _get(ServerAPI.prototype.__proto__ || Object.getPrototypeOf(ServerAPI.prototype), 'on', this).call(this, type, handler);
	      }

	      return this;
	    }
	  }, {
	    key: 'up',
	    value: function up() {
	      _get(ServerAPI.prototype.__proto__ || Object.getPrototypeOf(ServerAPI.prototype), 'listen', this).call(this, this.port);
	      this.emit('fired');

	      if (typeof this.onStart === 'function') {
	        this.onStart();
	      }

	      return this;
	    }
	  }]);

	  return ServerAPI;
	}(_http.Server);

	exports.default = ServerAPI;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map