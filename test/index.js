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
	exports.getStatusText = exports.getContentType = undefined;

	var _ServerAPI = __webpack_require__(1);

	var _ServerAPI2 = _interopRequireDefault(_ServerAPI);

	var _getContentType = __webpack_require__(4);

	var _getContentType2 = _interopRequireDefault(_getContentType);

	var _getStatusText = __webpack_require__(7);

	var _getStatusText2 = _interopRequireDefault(_getStatusText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ServerAPI2.default;
	exports.getContentType = _getContentType2.default;
	exports.getStatusText = _getStatusText2.default;

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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HANDLERS = {};

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

	    _this.on('request', _this.onRequest.bind(_this));
	    return _this;
	  }

	  _createClass(ServerAPI, [{
	    key: 'onRequest',
	    value: function onRequest(request, response) {
	      // this.emit(request.method.toLowerCase(), request, response);

	      var method = request.method;

	      var type = method.toLowerCase();

	      if (Object.prototype.hasOwnProperty.call(HANDLERS, type)) {
	        HANDLERS[type](request, response);
	      }
	    }
	  }, {
	    key: 'on',
	    value: function on(type, handler) {
	      switch (type) {
	        case 'start':
	          this.onStart = handler.bind(this);
	          break;
	        case 'connection':
	        case 'request':
	          _get(ServerAPI.prototype.__proto__ || Object.getPrototypeOf(ServerAPI.prototype), 'on', this).call(this, type, handler);
	          break;
	        default:
	          HANDLERS[type] = handler;
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getContentType = __webpack_require__(5);

	var _getContentType2 = _interopRequireDefault(_getContentType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _getContentType2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(6);

	var MIME = {
	  '.txt': 'text/plain; ' + _constants.charsetCode,
	  '.htm': 'text/html; ' + _constants.charsetCode,
	  '.html': 'text/html; ' + _constants.charsetCode,
	  '.js': 'text/javascript; ' + _constants.charsetCode,
	  '.css': 'text/css; ' + _constants.charsetCode,
	  '.bin': 'application/binary',
	  '.json': 'application/json; ' + _constants.charsetCode,
	  '.jpeg': 'image/jpeg',
	  '.jpg': 'image/jpeg',
	  '.png': 'image/png',
	  '.ico': 'image/x-icon',
	  '.mp4': 'video/mp4',
	  '.mp3': 'audio/mp3',
	  '.gif': 'image/gif'
	};

	exports.default = function () {
	  var mime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.html';

	  if (!/^\..*/.test(mime)) {
	    mime = '.' + mime;
	  }

	  return MIME[mime];
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var charsetCode = exports.charsetCode = 'charset=utf-8';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getStatusText = __webpack_require__(8);

	var _getStatusText2 = _interopRequireDefault(_getStatusText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _getStatusText2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _statuses = __webpack_require__(9);

	var _statuses2 = _interopRequireDefault(_statuses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (code) {
	  return _statuses2.default[code];
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  100: 'Continue',
	  101: 'Switching Protocols',
	  102: 'Processing',

	  200: 'OK',
	  201: 'Created',
	  202: 'Accepted',
	  203: 'Non-Authoritative Information',
	  204: 'No Content',
	  205: 'Reset Content',
	  206: 'Partial Content',
	  207: 'Multi-Status',
	  208: 'Already Reported',
	  226: 'IM Used',

	  300: 'Multiple Choices',
	  301: 'Moved Permanently',
	  302: 'Found',
	  303: 'See Other',
	  304: 'Not Modified',
	  305: 'Use Proxy',
	  306: 'Switch Proxy',
	  307: 'Temporary Redirect',
	  308: 'Permanent Redirect',

	  400: 'Bad Request',
	  401: 'Unauthorized',
	  402: 'Payment Required',
	  403: 'Forbidden',
	  404: 'Not Found',
	  405: 'Method Not Allowed',
	  406: 'Not Acceptable',
	  407: 'Proxy Authentication Required',
	  408: 'Request Timeout',
	  409: 'Conflict',
	  410: 'Gone',
	  411: 'Length Required',

	  500: 'Internal Server Error',
	  501: 'Not Implemented',
	  502: 'Bad Gateway',
	  503: 'Service Unavailable',
	  504: 'Gateway Timeout',
	  505: 'HTTP Version Not Supported',
	  506: 'Variant Also Negotiates',
	  507: 'Insufficient Storage',
	  508: 'Loop Detected',
	  509: 'Bandwidth Limit Exceeded',
	  510: 'Not Extended',
	  511: 'Network Authentication Required',
	  520: 'Unknown Error',
	  522: 'Origin Connection Time-out',
	  598: 'Network read timeout error',
	  599: 'Network connect timeout error'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map