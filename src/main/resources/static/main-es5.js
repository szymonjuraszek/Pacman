function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./global-config.ts":
  /*!**************************!*\
    !*** ./global-config.ts ***!
    \**************************/

  /*! exports provided: CSV_RESPONSE_HEADERS, HTTP_URL_DOWNLOAD, HTTP_URL_MAIN, WEBSOCKET_URL_MAIN, RSOCKET_URL_MAIN, SERIALIZER_DATA, SERIALIZER_METADATA, DATA_MIME_TYPE */

  /***/
  function globalConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSV_RESPONSE_HEADERS", function () {
      return CSV_RESPONSE_HEADERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_URL_DOWNLOAD", function () {
      return HTTP_URL_DOWNLOAD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_URL_MAIN", function () {
      return HTTP_URL_MAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WEBSOCKET_URL_MAIN", function () {
      return WEBSOCKET_URL_MAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RSOCKET_URL_MAIN", function () {
      return RSOCKET_URL_MAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERIALIZER_DATA", function () {
      return SERIALIZER_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERIALIZER_METADATA", function () {
      return SERIALIZER_METADATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATA_MIME_TYPE", function () {
      return DATA_MIME_TYPE;
    });
    /* harmony import */


    var rsocket_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rsocket-core */
    "./node_modules/rsocket-core/build/index.js");
    /* harmony import */


    var rsocket_core__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(rsocket_core__WEBPACK_IMPORTED_MODULE_0__); // Defined data which will be saved into response file (not modify)


    var CSV_RESPONSE_HEADERS = ['id', 'response_time_in_millis', 'request_timestamp', 'version_response']; //-----------------------   Global options for application which you can modify    -------------------------
    // 1) URLS
    // URL for measurement file (request file)
    // export const HTTP_URL_DOWNLOAD = 'https://localhost:8080/report/measurement';

    var HTTP_URL_DOWNLOAD = 'https://pacman-websocket.herokuapp.com/report/measurement'; // domain for server (http2)
    // export const HTTP_URL_MAIN = 'https://localhost:8080';

    var HTTP_URL_MAIN = 'https://http2-pacman.herokuapp.com'; // websocket(stomp) URL for connection
    // export const WEBSOCKET_URL_MAIN = 'ws://localhost:8080/socket';

    var WEBSOCKET_URL_MAIN = 'wss://pacman-websocket.herokuapp.com/socket'; // rsocket(websocket) URL for connection

    var RSOCKET_URL_MAIN = 'ws://localhost:8080/rsocket'; // export const RSOCKET_URL_MAIN =  'wss://pacman-rsocket.herokuapp.com/rsocket';
    // 3) Serializer for RSocket

    var SERIALIZER_DATA = rsocket_core__WEBPACK_IMPORTED_MODULE_0__["JsonSerializer"];
    var SERIALIZER_METADATA = rsocket_core__WEBPACK_IMPORTED_MODULE_0__["IdentitySerializer"];
    var DATA_MIME_TYPE = 'application/json';
    /***/
  },

  /***/
  "./proto/generated/proto/coin_pb.js":
  /*!******************************************!*\
    !*** ./proto/generated/proto/coin_pb.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function protoGeneratedProtoCoin_pbJs(module, exports, __webpack_require__) {
    // source: proto/coin.proto

    /**
     * @fileoverview
     * @enhanceable
     * @suppress {messageConventions} JS Compiler reports an error if a variable or
     *     field starts with 'MSG_' and isn't a translatable message.
     * @public
     */
    // GENERATED CODE -- DO NOT EDIT!
    var jspb = __webpack_require__(
    /*! google-protobuf */
    "./node_modules/google-protobuf/google-protobuf.js");

    var goog = jspb;
    var global = Function('return this')();
    goog.exportSymbol('proto.CoinProto', null, global);
    /**
     * Generated by JsPbCodeGenerator.
     * @param {Array=} opt_data Optional initial data array, typically from a
     * server response, or constructed directly in Javascript. The array is used
     * in place and becomes part of the constructed object. It is not cloned.
     * If no data is provided, the constructed object will be empty, but still
     * valid.
     * @extends {jspb.Message}
     * @constructor
     */

    proto.CoinProto = function (opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };

    goog.inherits(proto.CoinProto, jspb.Message);

    if (goog.DEBUG && !COMPILED) {
      /**
       * @public
       * @override
       */
      proto.CoinProto.displayName = 'proto.CoinProto';
    }

    if (jspb.Message.GENERATE_TO_OBJECT) {
      /**
       * Creates an object representation of this proto.
       * Field names that are reserved in JavaScript and will be renamed to pb_name.
       * Optional fields that are not set will be set to undefined.
       * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
       * For the list of reserved names please see:
       *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
       * @param {boolean=} opt_includeInstance Deprecated. whether to include the
       *     JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @return {!Object}
       */
      proto.CoinProto.prototype.toObject = function (opt_includeInstance) {
        return proto.CoinProto.toObject(opt_includeInstance, this);
      };
      /**
       * Static version of the {@see toObject} method.
       * @param {boolean|undefined} includeInstance Deprecated. Whether to include
       *     the JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @param {!proto.CoinProto} msg The msg instance to transform.
       * @return {!Object}
       * @suppress {unusedLocalVariables} f is only used for nested messages
       */


      proto.CoinProto.toObject = function (includeInstance, msg) {
        var f,
            obj = {
          positionX: jspb.Message.getFieldWithDefault(msg, 1, 0),
          positionY: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };

        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }

        return obj;
      };
    }
    /**
     * Deserializes binary data (in protobuf wire format).
     * @param {jspb.ByteSource} bytes The bytes to deserialize.
     * @return {!proto.CoinProto}
     */


    proto.CoinProto.deserializeBinary = function (bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.CoinProto();
      return proto.CoinProto.deserializeBinaryFromReader(msg, reader);
    };
    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param {!proto.CoinProto} msg The message object to deserialize into.
     * @param {!jspb.BinaryReader} reader The BinaryReader to use.
     * @return {!proto.CoinProto}
     */


    proto.CoinProto.deserializeBinaryFromReader = function (msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }

        var field = reader.getFieldNumber();

        switch (field) {
          case 1:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setPositionX(value);
            break;

          case 2:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setPositionY(value);
            break;

          default:
            reader.skipField();
            break;
        }
      }

      return msg;
    };
    /**
     * Serializes the message to binary data (in protobuf wire format).
     * @return {!Uint8Array}
     */


    proto.CoinProto.prototype.serializeBinary = function () {
      var writer = new jspb.BinaryWriter();
      proto.CoinProto.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    /**
     * Serializes the given message to binary data (in protobuf wire
     * format), writing to the given BinaryWriter.
     * @param {!proto.CoinProto} message
     * @param {!jspb.BinaryWriter} writer
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */


    proto.CoinProto.serializeBinaryToWriter = function (message, writer) {
      var f = undefined;
      f = message.getPositionX();

      if (f !== 0) {
        writer.writeInt32(1, f);
      }

      f = message.getPositionY();

      if (f !== 0) {
        writer.writeInt32(2, f);
      }
    };
    /**
     * optional int32 position_x = 1;
     * @return {number}
     */


    proto.CoinProto.prototype.getPositionX = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.CoinProto} returns this
     */


    proto.CoinProto.prototype.setPositionX = function (value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    /**
     * optional int32 position_y = 2;
     * @return {number}
     */


    proto.CoinProto.prototype.getPositionY = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.CoinProto} returns this
     */


    proto.CoinProto.prototype.setPositionY = function (value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };

    goog.object.extend(exports, proto);
    /***/
  },

  /***/
  "./proto/generated/proto/monster_pb.js":
  /*!*********************************************!*\
    !*** ./proto/generated/proto/monster_pb.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function protoGeneratedProtoMonster_pbJs(module, exports, __webpack_require__) {
    // source: proto/monster.proto

    /**
     * @fileoverview
     * @enhanceable
     * @suppress {messageConventions} JS Compiler reports an error if a variable or
     *     field starts with 'MSG_' and isn't a translatable message.
     * @public
     */
    // GENERATED CODE -- DO NOT EDIT!
    var jspb = __webpack_require__(
    /*! google-protobuf */
    "./node_modules/google-protobuf/google-protobuf.js");

    var goog = jspb;
    var global = Function('return this')();
    goog.exportSymbol('proto.MonsterProto', null, global);
    /**
     * Generated by JsPbCodeGenerator.
     * @param {Array=} opt_data Optional initial data array, typically from a
     * server response, or constructed directly in Javascript. The array is used
     * in place and becomes part of the constructed object. It is not cloned.
     * If no data is provided, the constructed object will be empty, but still
     * valid.
     * @extends {jspb.Message}
     * @constructor
     */

    proto.MonsterProto = function (opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };

    goog.inherits(proto.MonsterProto, jspb.Message);

    if (goog.DEBUG && !COMPILED) {
      /**
       * @public
       * @override
       */
      proto.MonsterProto.displayName = 'proto.MonsterProto';
    }

    if (jspb.Message.GENERATE_TO_OBJECT) {
      /**
       * Creates an object representation of this proto.
       * Field names that are reserved in JavaScript and will be renamed to pb_name.
       * Optional fields that are not set will be set to undefined.
       * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
       * For the list of reserved names please see:
       *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
       * @param {boolean=} opt_includeInstance Deprecated. whether to include the
       *     JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @return {!Object}
       */
      proto.MonsterProto.prototype.toObject = function (opt_includeInstance) {
        return proto.MonsterProto.toObject(opt_includeInstance, this);
      };
      /**
       * Static version of the {@see toObject} method.
       * @param {boolean|undefined} includeInstance Deprecated. Whether to include
       *     the JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @param {!proto.MonsterProto} msg The msg instance to transform.
       * @return {!Object}
       * @suppress {unusedLocalVariables} f is only used for nested messages
       */


      proto.MonsterProto.toObject = function (includeInstance, msg) {
        var f,
            obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, 0),
          positionX: jspb.Message.getFieldWithDefault(msg, 2, 0),
          positionY: jspb.Message.getFieldWithDefault(msg, 3, 0),
          previousDirection: jspb.Message.getFieldWithDefault(msg, 4, ""),
          timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0)
        };

        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }

        return obj;
      };
    }
    /**
     * Deserializes binary data (in protobuf wire format).
     * @param {jspb.ByteSource} bytes The bytes to deserialize.
     * @return {!proto.MonsterProto}
     */


    proto.MonsterProto.deserializeBinary = function (bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.MonsterProto();
      return proto.MonsterProto.deserializeBinaryFromReader(msg, reader);
    };
    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param {!proto.MonsterProto} msg The message object to deserialize into.
     * @param {!jspb.BinaryReader} reader The BinaryReader to use.
     * @return {!proto.MonsterProto}
     */


    proto.MonsterProto.deserializeBinaryFromReader = function (msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }

        var field = reader.getFieldNumber();

        switch (field) {
          case 1:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setId(value);
            break;

          case 2:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setPositionX(value);
            break;

          case 3:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setPositionY(value);
            break;

          case 4:
            var value =
            /** @type {string} */
            reader.readString();
            msg.setPreviousDirection(value);
            break;

          case 5:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setTimestamp(value);
            break;

          default:
            reader.skipField();
            break;
        }
      }

      return msg;
    };
    /**
     * Serializes the message to binary data (in protobuf wire format).
     * @return {!Uint8Array}
     */


    proto.MonsterProto.prototype.serializeBinary = function () {
      var writer = new jspb.BinaryWriter();
      proto.MonsterProto.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    /**
     * Serializes the given message to binary data (in protobuf wire
     * format), writing to the given BinaryWriter.
     * @param {!proto.MonsterProto} message
     * @param {!jspb.BinaryWriter} writer
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */


    proto.MonsterProto.serializeBinaryToWriter = function (message, writer) {
      var f = undefined;
      f = message.getId();

      if (f !== 0) {
        writer.writeInt32(1, f);
      }

      f = message.getPositionX();

      if (f !== 0) {
        writer.writeInt32(2, f);
      }

      f = message.getPositionY();

      if (f !== 0) {
        writer.writeInt32(3, f);
      }

      f = message.getPreviousDirection();

      if (f.length > 0) {
        writer.writeString(4, f);
      }

      f = message.getTimestamp();

      if (f !== 0) {
        writer.writeInt32(5, f);
      }
    };
    /**
     * optional int32 id = 1;
     * @return {number}
     */


    proto.MonsterProto.prototype.getId = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.MonsterProto} returns this
     */


    proto.MonsterProto.prototype.setId = function (value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    /**
     * optional int32 position_x = 2;
     * @return {number}
     */


    proto.MonsterProto.prototype.getPositionX = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.MonsterProto} returns this
     */


    proto.MonsterProto.prototype.setPositionX = function (value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    /**
     * optional int32 position_y = 3;
     * @return {number}
     */


    proto.MonsterProto.prototype.getPositionY = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.MonsterProto} returns this
     */


    proto.MonsterProto.prototype.setPositionY = function (value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    /**
     * optional string previous_direction = 4;
     * @return {string}
     */


    proto.MonsterProto.prototype.getPreviousDirection = function () {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 4, "")
      );
    };
    /**
     * @param {string} value
     * @return {!proto.MonsterProto} returns this
     */


    proto.MonsterProto.prototype.setPreviousDirection = function (value) {
      return jspb.Message.setProto3StringField(this, 4, value);
    };
    /**
     * optional int32 timestamp = 5;
     * @return {number}
     */


    proto.MonsterProto.prototype.getTimestamp = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.MonsterProto} returns this
     */


    proto.MonsterProto.prototype.setTimestamp = function (value) {
      return jspb.Message.setProto3IntField(this, 5, value);
    };

    goog.object.extend(exports, proto);
    /***/
  },

  /***/
  "./proto/generated/proto/player_pb.js":
  /*!********************************************!*\
    !*** ./proto/generated/proto/player_pb.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function protoGeneratedProtoPlayer_pbJs(module, exports, __webpack_require__) {
    // source: proto/player.proto

    /**
     * @fileoverview
     * @enhanceable
     * @suppress {messageConventions} JS Compiler reports an error if a variable or
     *     field starts with 'MSG_' and isn't a translatable message.
     * @public
     */
    // GENERATED CODE -- DO NOT EDIT!
    var jspb = __webpack_require__(
    /*! google-protobuf */
    "./node_modules/google-protobuf/google-protobuf.js");

    var goog = jspb;
    var global = Function('return this')();
    goog.exportSymbol('proto.PlayerProto', null, global);
    /**
     * Generated by JsPbCodeGenerator.
     * @param {Array=} opt_data Optional initial data array, typically from a
     * server response, or constructed directly in Javascript. The array is used
     * in place and becomes part of the constructed object. It is not cloned.
     * If no data is provided, the constructed object will be empty, but still
     * valid.
     * @extends {jspb.Message}
     * @constructor
     */

    proto.PlayerProto = function (opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };

    goog.inherits(proto.PlayerProto, jspb.Message);

    if (goog.DEBUG && !COMPILED) {
      /**
       * @public
       * @override
       */
      proto.PlayerProto.displayName = 'proto.PlayerProto';
    }

    if (jspb.Message.GENERATE_TO_OBJECT) {
      /**
       * Creates an object representation of this proto.
       * Field names that are reserved in JavaScript and will be renamed to pb_name.
       * Optional fields that are not set will be set to undefined.
       * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
       * For the list of reserved names please see:
       *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
       * @param {boolean=} opt_includeInstance Deprecated. whether to include the
       *     JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @return {!Object}
       */
      proto.PlayerProto.prototype.toObject = function (opt_includeInstance) {
        return proto.PlayerProto.toObject(opt_includeInstance, this);
      };
      /**
       * Static version of the {@see toObject} method.
       * @param {boolean|undefined} includeInstance Deprecated. Whether to include
       *     the JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @param {!proto.PlayerProto} msg The msg instance to transform.
       * @return {!Object}
       * @suppress {unusedLocalVariables} f is only used for nested messages
       */


      proto.PlayerProto.toObject = function (includeInstance, msg) {
        var f,
            obj = {
          nickname: jspb.Message.getFieldWithDefault(msg, 1, ""),
          positionX: jspb.Message.getFieldWithDefault(msg, 2, 0),
          positionY: jspb.Message.getFieldWithDefault(msg, 3, 0),
          score: jspb.Message.getFieldWithDefault(msg, 4, 0),
          stepDirection: jspb.Message.getFieldWithDefault(msg, 5, ""),
          version: jspb.Message.getFieldWithDefault(msg, 6, 0)
        };

        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }

        return obj;
      };
    }
    /**
     * Deserializes binary data (in protobuf wire format).
     * @param {jspb.ByteSource} bytes The bytes to deserialize.
     * @return {!proto.PlayerProto}
     */


    proto.PlayerProto.deserializeBinary = function (bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.PlayerProto();
      return proto.PlayerProto.deserializeBinaryFromReader(msg, reader);
    };
    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param {!proto.PlayerProto} msg The message object to deserialize into.
     * @param {!jspb.BinaryReader} reader The BinaryReader to use.
     * @return {!proto.PlayerProto}
     */


    proto.PlayerProto.deserializeBinaryFromReader = function (msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }

        var field = reader.getFieldNumber();

        switch (field) {
          case 1:
            var value =
            /** @type {string} */
            reader.readString();
            msg.setNickname(value);
            break;

          case 2:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setPositionX(value);
            break;

          case 3:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setPositionY(value);
            break;

          case 4:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setScore(value);
            break;

          case 5:
            var value =
            /** @type {string} */
            reader.readString();
            msg.setStepDirection(value);
            break;

          case 6:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setVersion(value);
            break;

          default:
            reader.skipField();
            break;
        }
      }

      return msg;
    };
    /**
     * Serializes the message to binary data (in protobuf wire format).
     * @return {!Uint8Array}
     */


    proto.PlayerProto.prototype.serializeBinary = function () {
      var writer = new jspb.BinaryWriter();
      proto.PlayerProto.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    /**
     * Serializes the given message to binary data (in protobuf wire
     * format), writing to the given BinaryWriter.
     * @param {!proto.PlayerProto} message
     * @param {!jspb.BinaryWriter} writer
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */


    proto.PlayerProto.serializeBinaryToWriter = function (message, writer) {
      var f = undefined;
      f = message.getNickname();

      if (f.length > 0) {
        writer.writeString(1, f);
      }

      f = message.getPositionX();

      if (f !== 0) {
        writer.writeInt32(2, f);
      }

      f = message.getPositionY();

      if (f !== 0) {
        writer.writeInt32(3, f);
      }

      f = message.getScore();

      if (f !== 0) {
        writer.writeInt32(4, f);
      }

      f = message.getStepDirection();

      if (f.length > 0) {
        writer.writeString(5, f);
      }

      f = message.getVersion();

      if (f !== 0) {
        writer.writeInt32(6, f);
      }
    };
    /**
     * optional string nickname = 1;
     * @return {string}
     */


    proto.PlayerProto.prototype.getNickname = function () {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    /**
     * @param {string} value
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.setNickname = function (value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    /**
     * optional int32 position_x = 2;
     * @return {number}
     */


    proto.PlayerProto.prototype.getPositionX = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.setPositionX = function (value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    /**
     * optional int32 position_y = 3;
     * @return {number}
     */


    proto.PlayerProto.prototype.getPositionY = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.setPositionY = function (value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    /**
     * optional int32 score = 4;
     * @return {number}
     */


    proto.PlayerProto.prototype.getScore = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.setScore = function (value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    /**
     * optional string step_direction = 5;
     * @return {string}
     */


    proto.PlayerProto.prototype.getStepDirection = function () {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 5, "")
      );
    };
    /**
     * @param {string} value
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.setStepDirection = function (value) {
      return jspb.Message.setProto3StringField(this, 5, value);
    };
    /**
     * optional int32 version = 6;
     * @return {number}
     */


    proto.PlayerProto.prototype.getVersion = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 6, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.setVersion = function (value) {
      return jspb.Message.setProto3IntField(this, 6, value);
    };

    goog.object.extend(exports, proto);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scenes/main-scene/main-scene.component */
    "./src/app/scenes/main-scene/main-scene.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'game',
      component: _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__["MainSceneComponent"]
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["#mainScene[_ngcontent-%COMP%] {\r\n  margin-left: 500px;\r\n  padding-left: 40px;\r\n  background-color: aqua;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5TY2VuZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./scenes/main-scene/main-scene.component */
    "./src/app/scenes/main-scene/main-scene.component.ts");
    /* harmony import */


    var _communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./communication/websocket/websocket.service */
    "./src/app/communication/websocket/websocket.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./http/http.service */
    "./src/app/http/http.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"], _http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
          providers: [_communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"], _http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/cache/measurement.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/cache/measurement.service.ts ***!
    \**********************************************/

  /*! exports provided: MeasurementService */

  /***/
  function srcAppCacheMeasurementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasurementService", function () {
      return MeasurementService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_MeasurementResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/MeasurementResponse */
    "./src/app/model/MeasurementResponse.ts");

    var MeasurementService =
    /*#__PURE__*/
    function () {
      function MeasurementService() {
        _classCallCheck(this, MeasurementService);

        this.measurements = new Array();
      }

      _createClass(MeasurementService, [{
        key: "addMeasurementResponse",
        value: function addMeasurementResponse(id, responseTimeInMillis, requestTimestamp, version) {
          // if (this.measurements.length > 1999) {
          //     this.measurements.splice(0, 1);
          // }
          this.measurements.push(new _model_MeasurementResponse__WEBPACK_IMPORTED_MODULE_1__["MeasurementResponse"](id, responseTimeInMillis, requestTimestamp, version));
        }
      }, {
        key: "getResponseMeasurements",
        value: function getResponseMeasurements() {
          return this.measurements;
        }
      }]);

      return MeasurementService;
    }();

    MeasurementService.ɵfac = function MeasurementService_Factory(t) {
      return new (t || MeasurementService)();
    };

    MeasurementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MeasurementService,
      factory: MeasurementService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasurementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cache/request-cache.service.ts":
  /*!************************************************!*\
    !*** ./src/app/cache/request-cache.service.ts ***!
    \************************************************/

  /*! exports provided: RequestCacheService */

  /***/
  function srcAppCacheRequestCacheServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestCacheService", function () {
      return RequestCacheService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/Request */
    "./src/app/model/Request.ts");
    /* harmony import */


    var queue_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! queue-typescript */
    "./node_modules/queue-typescript/lib/src/index.js");
    /* harmony import */


    var queue_typescript__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(queue_typescript__WEBPACK_IMPORTED_MODULE_2__);

    var RequestCacheService =
    /*#__PURE__*/
    function () {
      function RequestCacheService() {
        _classCallCheck(this, RequestCacheService);

        this.requests = new queue_typescript__WEBPACK_IMPORTED_MODULE_2__["Queue"]();
      }

      _createClass(RequestCacheService, [{
        key: "addRequest",
        value: function addRequest(id, x, y) {
          // if (this.requests.length > 1999) {
          //     this.requests.splice(0, 1);
          // }
          this.requests.enqueue(new _model_Request__WEBPACK_IMPORTED_MODULE_1__["Request"](id, x, y));
        }
      }, {
        key: "getRequest",
        value: function getRequest(id) {
          if (this.requests.length > 0) {
            var request = this.requests.front;

            if (request.id > id) {
              return null;
            }
          }

          while (this.requests.length > 0) {
            var _request = this.requests.dequeue();

            if (_request.id === id) {
              this.lastCorrectRequest = _request;
              return _request;
            }
          }

          return null;
        }
      }, {
        key: "getCorrectedPosition",
        value: function getCorrectedPosition(id) {
          if (this.requests.length > 0) {
            var request = this.requests.front;
            console.error(request);

            if (request.id > id) {
              return null;
            }
          }

          while (this.requests.length > 0) {
            var _request2 = this.requests.dequeue();

            if (_request2.id === id) {
              return this.lastCorrectRequest;
            }
          }

          return null;
        }
      }, {
        key: "lastCorrectRequest",
        get: function get() {
          return this._lastCorrectRequest;
        },
        set: function set(value) {
          this._lastCorrectRequest = value;
        }
      }], [{
        key: "nickname",
        set: function set(value) {
          this._nickname = value;
        }
      }]);

      return RequestCacheService;
    }();

    RequestCacheService.ɵfac = function RequestCacheService_Factory(t) {
      return new (t || RequestCacheService)();
    };

    RequestCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequestCacheService,
      factory: RequestCacheService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/communication/Communicator.ts":
  /*!***********************************************!*\
    !*** ./src/app/communication/Communicator.ts ***!
    \***********************************************/

  /*! exports provided: Communicator */

  /***/
  function srcAppCommunicationCommunicatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Communicator", function () {
      return Communicator;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Communicator =
    /*#__PURE__*/
    function () {
      function Communicator(serverUrl) {
        _classCallCheck(this, Communicator);

        this.playersToAdd = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.playerToRemove = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.playerToUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.monsterToUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ifJoinGame = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.coinToGet = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.updateScore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.refreshCoin = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.serverUrl = serverUrl;
      }

      _createClass(Communicator, [{
        key: "getState",
        value: function getState() {
          return this.state.asObservable();
        }
      }, {
        key: "getPlayersToAdd",
        value: function getPlayersToAdd() {
          return this.playersToAdd.asObservable();
        }
      }, {
        key: "getPlayerToRemove",
        value: function getPlayerToRemove() {
          return this.playerToRemove.asObservable();
        }
      }, {
        key: "getPlayerToUpdate",
        value: function getPlayerToUpdate() {
          return this.playerToUpdate.asObservable();
        }
      }, {
        key: "getMonsterToUpdate",
        value: function getMonsterToUpdate() {
          return this.monsterToUpdate.asObservable();
        }
      }, {
        key: "getIfJoinGame",
        value: function getIfJoinGame() {
          return this.ifJoinGame.asObservable();
        }
      }, {
        key: "getCoinToGet",
        value: function getCoinToGet() {
          return this.coinToGet.asObservable();
        }
      }, {
        key: "getRefreshCoins",
        value: function getRefreshCoins() {
          return this.refreshCoin.asObservable();
        }
      }, {
        key: "getUpdateScore",
        value: function getUpdateScore() {
          return this.updateScore.asObservable();
        }
      }, {
        key: "myNickname",
        get: function get() {
          return this._myNickname;
        },
        set: function set(value) {
          this._myNickname = value;
        }
      }]);

      return Communicator;
    }();
    /***/

  },

  /***/
  "./src/app/communication/Direction.ts":
  /*!********************************************!*\
    !*** ./src/app/communication/Direction.ts ***!
    \********************************************/

  /*! exports provided: Direction */

  /***/
  function srcAppCommunicationDirectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });

    var Direction;

    (function (Direction) {
      Direction["HORIZON"] = "HORIZON";
      Direction["VERTICAL"] = "VERTICAL";
    })(Direction || (Direction = {}));
    /***/

  },

  /***/
  "./src/app/communication/SocketClientState.ts":
  /*!****************************************************!*\
    !*** ./src/app/communication/SocketClientState.ts ***!
    \****************************************************/

  /*! exports provided: SocketClientState */

  /***/
  function srcAppCommunicationSocketClientStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketClientState", function () {
      return SocketClientState;
    });

    var SocketClientState;

    (function (SocketClientState) {
      SocketClientState[SocketClientState["CONNECTED"] = 0] = "CONNECTED";
      SocketClientState[SocketClientState["ATTEMPTING"] = 1] = "ATTEMPTING";
      SocketClientState[SocketClientState["ERROR"] = 2] = "ERROR";
    })(SocketClientState || (SocketClientState = {}));
    /***/

  },

  /***/
  "./src/app/communication/format/JsonFormatter.ts":
  /*!*******************************************************!*\
    !*** ./src/app/communication/format/JsonFormatter.ts ***!
    \*******************************************************/

  /*! exports provided: JsonFormatter */

  /***/
  function srcAppCommunicationFormatJsonFormatterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormatter", function () {
      return JsonFormatter;
    });

    var JsonFormatter =
    /*#__PURE__*/
    function () {
      function JsonFormatter() {
        _classCallCheck(this, JsonFormatter);
      }

      _createClass(JsonFormatter, [{
        key: "decodeCoin",
        value: function decodeCoin(data) {
          return JSON.parse(data.body);
        }
      }, {
        key: "decodeMonster",
        value: function decodeMonster(data) {
          return JSON.parse(data.body);
        }
      }, {
        key: "decodePlayer",
        value: function decodePlayer(data) {
          return JSON.parse(data.body);
        }
      }, {
        key: "encode",
        value: function encode(data) {
          return data;
        }
      }, {
        key: "prepareNicknamePayload",
        value: function prepareNicknamePayload(nickname) {
          return {
            'nickname': nickname
          };
        }
      }]);

      return JsonFormatter;
    }();
    /***/

  },

  /***/
  "./src/app/communication/format/ProtobufFormatter.ts":
  /*!***********************************************************!*\
    !*** ./src/app/communication/format/ProtobufFormatter.ts ***!
    \***********************************************************/

  /*! exports provided: ProtobufFormatter */

  /***/
  function srcAppCommunicationFormatProtobufFormatterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProtobufFormatter", function () {
      return ProtobufFormatter;
    });
    /* harmony import */


    var _proto_generated_proto_player_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../../proto/generated/proto/player_pb */
    "./proto/generated/proto/player_pb.js");
    /* harmony import */


    var _proto_generated_proto_player_pb__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_proto_generated_proto_player_pb__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _proto_generated_proto_coin_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../proto/generated/proto/coin_pb */
    "./proto/generated/proto/coin_pb.js");
    /* harmony import */


    var _proto_generated_proto_coin_pb__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_proto_generated_proto_coin_pb__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _proto_generated_proto_monster_pb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../proto/generated/proto/monster_pb */
    "./proto/generated/proto/monster_pb.js");
    /* harmony import */


    var _proto_generated_proto_monster_pb__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_proto_generated_proto_monster_pb__WEBPACK_IMPORTED_MODULE_2__);

    var ProtobufFormatter =
    /*#__PURE__*/
    function () {
      function ProtobufFormatter() {
        _classCallCheck(this, ProtobufFormatter);
      }

      _createClass(ProtobufFormatter, [{
        key: "decodeCoin",
        value: function decodeCoin(data) {
          return _proto_generated_proto_coin_pb__WEBPACK_IMPORTED_MODULE_1__["CoinProto"].deserializeBinary(data.binaryBody).toObject();
        }
      }, {
        key: "decodeMonster",
        value: function decodeMonster(data) {
          return _proto_generated_proto_monster_pb__WEBPACK_IMPORTED_MODULE_2__["MonsterProto"].deserializeBinary(data.binaryBody).toObject();
        }
      }, {
        key: "decodePlayer",
        value: function decodePlayer(data) {
          return _proto_generated_proto_player_pb__WEBPACK_IMPORTED_MODULE_0__["PlayerProto"].deserializeBinary(data.binaryBody).toObject();
        }
      }, {
        key: "encode",
        value: function encode(data) {
          var playerProto = new _proto_generated_proto_player_pb__WEBPACK_IMPORTED_MODULE_0__["PlayerProto"]();
          playerProto.setNickname(data.nickname);
          playerProto.setPositionX(data.positionX);
          playerProto.setPositionY(data.positionY);
          playerProto.setScore(data.score);
          playerProto.setStepDirection(data.stepDirection);
          playerProto.setVersion(data.version);
          return playerProto;
        }
      }, {
        key: "prepareNicknamePayload",
        value: function prepareNicknamePayload(nickname) {
          return nickname;
        }
      }]);

      return ProtobufFormatter;
    }();
    /***/

  },

  /***/
  "./src/app/communication/websocket/websocket.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/communication/websocket/websocket.service.ts ***!
    \**************************************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcAppCommunicationWebsocketWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Communicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Communicator */
    "./src/app/communication/Communicator.ts");
    /* harmony import */


    var _SocketClientState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../SocketClientState */
    "./src/app/communication/SocketClientState.ts");
    /* harmony import */


    var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @stomp/stompjs */
    "./node_modules/@stomp/stompjs/bundles/stomp.umd.js");
    /* harmony import */


    var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _format_JsonFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../format/JsonFormatter */
    "./src/app/communication/format/JsonFormatter.ts");
    /* harmony import */


    var _format_ProtobufFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../format/ProtobufFormatter */
    "./src/app/communication/format/ProtobufFormatter.ts");
    /* harmony import */


    var _global_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../global-config */
    "./global-config.ts");
    /* harmony import */


    var _cache_measurement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../cache/measurement.service */
    "./src/app/cache/measurement.service.ts");
    /* harmony import */


    var _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../cache/request-cache.service */
    "./src/app/cache/request-cache.service.ts");

    var WebsocketService =
    /*#__PURE__*/
    function (_Communicator__WEBPAC) {
      _inherits(WebsocketService, _Communicator__WEBPAC);

      var _super = _createSuper(WebsocketService);

      function WebsocketService(measurementService, requestCache) {
        var _this;

        _classCallCheck(this, WebsocketService);

        _this = _super.call(this, _global_config__WEBPACK_IMPORTED_MODULE_7__["WEBSOCKET_URL_MAIN"]);
        _this.measurementService = measurementService;
        _this.requestCache = requestCache;
        _this.variable = _this.makeid(30000);

        _this.setFormatter(new _format_JsonFormatter__WEBPACK_IMPORTED_MODULE_5__["JsonFormatter"]());

        return _this;
      }

      _createClass(WebsocketService, [{
        key: "initializeConnection",
        value: function initializeConnection() {
          var _this2 = this;

          // const ws = new SockJS(this.serverUrl);
          // this.stompClient = Stomp.over(ws);
          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].ATTEMPTING);
          this.stompClient = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__["Client"]({
            brokerURL: this.serverUrl,
            debug: function debug(str) {
              console.log(str);
            },
            // maxWebSocketChunkSize: 5000,
            splitLargeFrames: true,
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000
          });

          this.stompClient.debug = function () {};

          this.stompClient.onConnect = function (frame) {
            console.error(frame);

            _this2.stompClient.subscribe('/pacman/add/players', function (gameToAddPlayer) {
              _this2.playersToAdd.next(JSON.parse(gameToAddPlayer.body));

              console.error('Zaktualizowano gre, dodano gracza');
            });

            _this2.stompClient.subscribe('/pacman/remove/player', function (playerToRemove) {
              _this2.playerToRemove.next(_this2.formatter.decodePlayer(playerToRemove));

              console.error('Zaktualizowano gre, usunieto gracza');
            });

            _this2.stompClient.subscribe('/pacman/update/player', function (playerToUpdate) {
              var parsedPlayer = _this2.formatter.decodePlayer(playerToUpdate);

              var responseTimeInMillis = new Date().getTime() - Number(playerToUpdate.headers.requestTimestamp); // console.error("Odpowiedz serwera " + responseTimeInMillis + " milliseconds")

              _this2.measurementService.addMeasurementResponse(parsedPlayer.nickname, responseTimeInMillis, playerToUpdate.headers.requestTimestamp, parsedPlayer.version);

              if (parsedPlayer.nickname === _this2.myNickname) {
                var request = _this2.requestCache.getRequest(parsedPlayer.version);

                _this2.updateScore.next(parsedPlayer.score);

                if (request !== null && (request.x !== parsedPlayer.positionX || request.y !== parsedPlayer.positionY)) {
                  _this2.playerToUpdate.next(parsedPlayer);
                }
              } else {
                _this2.playerToUpdate.next(parsedPlayer);
              }
            });

            _this2.stompClient.subscribe('/pacman/update/monster', function (monster) {
              var monsterParsed = _this2.formatter.decodeMonster(monster);

              _this2.measurementService.addMeasurementResponse(monsterParsed.id, new Date().getTime() - Number(monster.headers.timestamp), monster.headers.timestamp, 0);

              _this2.monsterToUpdate.next(monsterParsed);
            });

            _this2.stompClient.subscribe('/pacman/refresh/coins', function () {
              _this2.refreshCoin.next();
            });

            _this2.stompClient.subscribe('/pacman/get/coin', function (coinPosition) {
              _this2.coinToGet.next(_this2.formatter.decodeCoin(coinPosition));
            });

            _this2.stompClient.subscribe('/user/queue/reply', function (currentCoinPosition) {
              _this2.ifJoinGame.next(JSON.parse(currentCoinPosition.body));
            });

            _this2.stompClient.subscribe('/user/queue/player', function (playerToUpdate) {
              var parsedPlayer = _this2.formatter.decodePlayer(playerToUpdate);

              var responseTimeInMillis = new Date().getTime() - Number(playerToUpdate.headers.requestTimestamp);

              _this2.measurementService.addMeasurementResponse(parsedPlayer.nickname, responseTimeInMillis, playerToUpdate.headers.requestTimestamp, parsedPlayer.version);

              var request = _this2.requestCache.getCorrectedPosition(parsedPlayer.version);

              if (request !== null) {
                parsedPlayer.positionX = request.x;
                parsedPlayer.positionY = request.y;

                _this2.playerToUpdate.next(parsedPlayer);
              }
            });

            _this2.stompClient.subscribe('/pacman/collision/update', function (allCoinPosition) {});

            _this2.state.next(_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].CONNECTED);
          };

          this.stompClient.onStompError = function (frame) {
            console.log('Broker reported error: ' + frame.headers['message']);
            console.log('Additional details: ' + frame.body);
          };

          this.stompClient.activate();
        } //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "disconnect",
        value: function disconnect() {
          console.error('Disconnected');
          this.stompClient.deactivate();
        }
      }, {
        key: "sendPosition",
        value: function sendPosition(dataToSend) {
          var dataWithSpecificFormat = this.formatter.encode(dataToSend);

          if (this.formatter instanceof _format_JsonFormatter__WEBPACK_IMPORTED_MODULE_5__["JsonFormatter"]) {
            this.stompClient.publish({
              destination: '/app/send/position',
              body: JSON.stringify(dataWithSpecificFormat),
              headers: {
                requestTimestamp: new Date().getTime().toString()
              }
            });
          } else if (this.formatter instanceof _format_ProtobufFormatter__WEBPACK_IMPORTED_MODULE_6__["ProtobufFormatter"]) {
            this.stompClient.publish({
              destination: '/app/send/position/protobuf',
              binaryBody: dataWithSpecificFormat.serializeBinary(),
              headers: {
                /*'content-type': 'application/octet-stream',*/
                requestTimestamp: new Date().getTime().toString()
              }
            });
          } else {
            this.stompClient.publish({
              destination: '/app/send/position/custom/binary',
              binaryBody: dataWithSpecificFormat,
              headers: {
                /*'content-type': 'application/octet-stream',*/
                requestTimestamp: new Date().getTime().toString()
              }
            });
          }
        }
      }, {
        key: "joinToGame",
        value: function joinToGame(nickname) {
          this.stompClient.publish({
            destination: '/app/join/game',
            body: JSON.stringify({
              "nickname": nickname
            })
          });
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(nickname) {
          this.stompClient.publish({
            destination: '/app/add/player',
            body: JSON.stringify({
              "nickname": nickname
            })
          });
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }, {
        key: "setFormatter",
        value: function setFormatter(formatter) {
          this.formatter = formatter;
        }
      }]);

      return WebsocketService;
    }(_Communicator__WEBPACK_IMPORTED_MODULE_2__["Communicator"]);

    WebsocketService.ɵfac = function WebsocketService_Factory(t) {
      return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_measurement_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_request_cache_service__WEBPACK_IMPORTED_MODULE_9__["RequestCacheService"]));
    };

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebsocketService,
      factory: WebsocketService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _cache_measurement_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementService"]
        }, {
          type: _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_9__["RequestCacheService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/downloader/download.service.ts":
  /*!************************************************!*\
    !*** ./src/app/downloader/download.service.ts ***!
    \************************************************/

  /*! exports provided: DownloadService */

  /***/
  function srcAppDownloaderDownloadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadService", function () {
      return DownloadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../global-config */
    "./global-config.ts");
    /* harmony import */


    var _cache_measurement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cache/measurement.service */
    "./src/app/cache/measurement.service.ts");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../http/http.service */
    "./src/app/http/http.service.ts");

    var DownloadService =
    /*#__PURE__*/
    function () {
      function DownloadService(cacheMeasurement, httpService) {
        _classCallCheck(this, DownloadService);

        this.cacheMeasurement = cacheMeasurement;
        this.httpService = httpService;
        this.RESPONSE_FILE = "response_measurement.csv";
        this.REQUEST_FILE = "request_measurement.csv";
      }

      _createClass(DownloadService, [{
        key: "downloadRequestMeasurements",
        value: function downloadRequestMeasurements() {
          var _this3 = this;

          if (this._rsocketObject) {
            this._rsocketObject.requestResponse({
              metadata: String.fromCharCode('/report/measurement'.length) + '/report/measurement'
            }).subscribe({
              onComplete: function onComplete(payload) {
                _this3.downloadRequestFile(payload.data.data);
              },
              onError: function onError(error) {
                console.log('got error with requestResponse');
                console.error(error);
              },
              onSubscribe: function onSubscribe(cancel) {}
            });
          } else {
            this.httpService.downloadMeasurements().subscribe(function (data) {
              _this3.downloadRequestFile(data.body);
            });
          }
        }
      }, {
        key: "downloadResponseMeasurements",
        value: function downloadResponseMeasurements() {
          this.downloadResponseFile(this.cacheMeasurement.getResponseMeasurements());
        }
      }, {
        key: "downloadRequestFile",
        value: function downloadRequestFile(data) {
          var blob = new Blob([data], {
            type: 'text/csv'
          });
          var url = window.URL.createObjectURL(blob);
          var anchor = document.createElement('a');
          anchor.download = this.REQUEST_FILE; // here you can specify file name

          anchor.href = url;
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
      }, {
        key: "downloadResponseFile",
        value: function downloadResponseFile(data) {
          var replacer = function replacer(key, value) {
            return value === null ? '' : value;
          }; // specify how you want to handle null values here


          var header = _global_config__WEBPACK_IMPORTED_MODULE_2__["CSV_RESPONSE_HEADERS"];
          var csv = data.map(function (row) {
            return header.map(function (fieldName) {
              return JSON.stringify(row[fieldName], replacer);
            }).join(',');
          });
          header = header.map(function (x) {
            return x.toUpperCase();
          });
          csv.unshift(header.join(','));
          var csvArray = csv.join('\r\n');
          Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(new Blob([csvArray], {
            type: 'text/csv'
          }), this.RESPONSE_FILE);
        }
      }, {
        key: "rsocketObject",
        set: function set(value) {
          this._rsocketObject = value;
        }
      }]);

      return DownloadService;
    }();

    DownloadService.ɵfac = function DownloadService_Factory(t) {
      return new (t || DownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_measurement_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]));
    };

    DownloadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DownloadService,
      factory: DownloadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _cache_measurement_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementService"]
        }, {
          type: _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scenes/main-scene/main-scene.component */
    "./src/app/scenes/main-scene/main-scene.component.ts");

    var GameComponent =
    /*#__PURE__*/
    function () {
      function GameComponent(mainScene) {
        _classCallCheck(this, GameComponent);

        this.mainScene = mainScene;
        this.config = {
          type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.AUTO,
          height: 1024,
          width: 1600,
          scale: {
            mode: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.FIT,
            autoCenter: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.CENTER_BOTH
          },
          scene: [],
          parent: 'gameContainer',
          physics: {
            "default": 'arcade',
            arcade: {
              gravity: {
                y: 0
              }
            }
          },
          fps: {
            target: 50,
            forceSetTimeOut: true
          }
        };
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.error('Initialize Game Object');
          this.phaserGame = new phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Game(this.config);
          this.phaserGame.scene.add('main', this.mainScene);
          this.phaserGame.scene.start('main');
          console.error('Completed Initialization Game Object');
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__["MainSceneComponent"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 0,
      vars: 0,
      template: function GameComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.css']
        }]
      }], function () {
        return [{
          type: _scenes_main_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__["MainSceneComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_h4_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You can't start game because other player has the same nickname: ", ctx_r0.answer, "");
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;

        if (this.router.getCurrentNavigation().extras.state) {
          this.answer = this.router.getCurrentNavigation().extras.state.nick;
        }
      }

      _createClass(HomeComponent, [{
        key: "startGame",
        value: function startGame(nickname) {
          this.router.navigate(['game'], {
            state: {
              nick: nickname
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 16,
      vars: 3,
      consts: [["id", "background"], [3, "ngModel", "ngModelChange"], [3, "disabled", "click"], [4, "ngIf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome in multiplayer Pacman Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Set nickname and click 'START'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.nickname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() {
            return ctx.startGame(ctx.nickname);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_h4_15_Template, 2, 1, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nickname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nickname || ctx.nickname == "NO_ONE" || ctx.nickname.length > 10 || ctx.nickname.length < 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answer);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["#background[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/http/http.service.ts":
  /*!**************************************!*\
    !*** ./src/app/http/http.service.ts ***!
    \**************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../global-config */
    "./global-config.ts");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(httpClient) {
        _classCallCheck(this, HttpService);

        this.httpClient = httpClient;
      }

      _createClass(HttpService, [{
        key: "downloadMeasurements",
        value: function downloadMeasurements() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Accept', 'text/csv; charset=utf-8');
          return this.httpClient.get(_global_config__WEBPACK_IMPORTED_MODULE_2__["HTTP_URL_DOWNLOAD"], {
            headers: headers,
            observe: 'response',
            responseType: 'text'
          });
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/MeasurementResponse.ts":
  /*!**********************************************!*\
    !*** ./src/app/model/MeasurementResponse.ts ***!
    \**********************************************/

  /*! exports provided: MeasurementResponse */

  /***/
  function srcAppModelMeasurementResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasurementResponse", function () {
      return MeasurementResponse;
    });

    var MeasurementResponse =
    /*#__PURE__*/
    function () {
      function MeasurementResponse(id, response_time_in_millis, request_timestamp, version_response) {
        _classCallCheck(this, MeasurementResponse);

        this._id = id;
        this._response_time_in_millis = response_time_in_millis;
        this._request_timestamp = request_timestamp;
        this._version_response = version_response;
      }

      _createClass(MeasurementResponse, [{
        key: "response_time_in_millis",
        get: function get() {
          return this._response_time_in_millis;
        },
        set: function set(value) {
          this._response_time_in_millis = value;
        }
      }, {
        key: "request_timestamp",
        get: function get() {
          return this._request_timestamp;
        },
        set: function set(value) {
          this._request_timestamp = value;
        }
      }, {
        key: "version_response",
        get: function get() {
          return this._version_response;
        },
        set: function set(value) {
          this._version_response = value;
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value;
        }
      }]);

      return MeasurementResponse;
    }();
    /***/

  },

  /***/
  "./src/app/model/Player.ts":
  /*!*********************************!*\
    !*** ./src/app/model/Player.ts ***!
    \*********************************/

  /*! exports provided: Player */

  /***/
  function srcAppModelPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

    var Player =
    /*#__PURE__*/
    function (_phaser__WEBPACK_IMPO) {
      _inherits(Player, _phaser__WEBPACK_IMPO);

      var _super2 = _createSuper(Player);

      function Player(scene, x, y, texture, score) {
        var _this4;

        _classCallCheck(this, Player);

        _this4 = _super2.call(this, scene, x, y, texture); // Dodanie gracza do sceny (zeby w ogole byl widoczny)

        scene.add.existing(_assertThisInitialized(_this4)); // Dodanie gracza do fizyki co pozwala na ustawianie interakcji

        scene.physics.add.existing(_assertThisInitialized(_this4)); // Dodanie kolidera na graczu oraz warstwie

        scene.physics.add.collider(_assertThisInitialized(_this4), scene.backgroundLayer); // scene.anims.play('myUp');

        _this4._score = score;
        return _this4;
      }

      _createClass(Player, [{
        key: "score",
        get: function get() {
          return this._score;
        },
        set: function set(value) {
          this._score = value;
        }
      }, {
        key: "positionX",
        get: function get() {
          return this._positionX;
        },
        set: function set(value) {
          this._positionX = value;
        }
      }, {
        key: "positionY",
        get: function get() {
          return this._positionY;
        },
        set: function set(value) {
          this._positionY = value;
        }
      }, {
        key: "version",
        get: function get() {
          return this._version;
        },
        set: function set(value) {
          this._version = value;
        }
      }]);

      return Player;
    }(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite);

    Player.SPEED = 200;
    /***/
  },

  /***/
  "./src/app/model/Request.ts":
  /*!**********************************!*\
    !*** ./src/app/model/Request.ts ***!
    \**********************************/

  /*! exports provided: Request */

  /***/
  function srcAppModelRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Request", function () {
      return Request;
    });

    var Request =
    /*#__PURE__*/
    function () {
      function Request(id, x, y) {
        _classCallCheck(this, Request);

        this._id = id;
        this._x = x;
        this._y = y;
      }

      _createClass(Request, [{
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value;
        }
      }, {
        key: "x",
        get: function get() {
          return this._x;
        },
        set: function set(value) {
          this._x = value;
        }
      }, {
        key: "y",
        get: function get() {
          return this._y;
        },
        set: function set(value) {
          this._y = value;
        }
      }]);

      return Request;
    }();
    /***/

  },

  /***/
  "./src/app/scenes/main-scene/main-scene.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/scenes/main-scene/main-scene.component.ts ***!
    \***********************************************************/

  /*! exports provided: MainSceneComponent */

  /***/
  function srcAppScenesMainSceneMainSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainSceneComponent", function () {
      return MainSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _model_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../model/Player */
    "./src/app/model/Player.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _communication_Communicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../communication/Communicator */
    "./src/app/communication/Communicator.ts");
    /* harmony import */


    var _communication_Direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../communication/Direction */
    "./src/app/communication/Direction.ts");
    /* harmony import */


    var _communication_SocketClientState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../communication/SocketClientState */
    "./src/app/communication/SocketClientState.ts");
    /* harmony import */


    var _model_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../model/Request */
    "./src/app/model/Request.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _downloader_download_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../downloader/download.service */
    "./src/app/downloader/download.service.ts");
    /* harmony import */


    var _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../cache/request-cache.service */
    "./src/app/cache/request-cache.service.ts");

    var MainSceneComponent =
    /*#__PURE__*/
    function (_phaser__WEBPACK_IMPO2) {
      _inherits(MainSceneComponent, _phaser__WEBPACK_IMPO2);

      var _super3 = _createSuper(MainSceneComponent);

      function MainSceneComponent(websocketService, router, elementRef, downloadService, requestCache) {
        var _this5;

        _classCallCheck(this, MainSceneComponent);

        _this5 = _super3.call(this, {
          key: 'main'
        });
        _this5.websocketService = websocketService;
        _this5.router = router;
        _this5.elementRef = elementRef;
        _this5.downloadService = downloadService;
        _this5.requestCache = requestCache; // Additional data for testing changing data size

        _this5.additionalData = _this5.randomString(50, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        _this5.arrayWithAdditionalData = new Array(20); // Game objects

        _this5.players = new Map();
        _this5.monsters = new Map();
        _this5.rank = new Array(); // Sending objects

        _this5.startSendingPlayerPosition = false;
        _this5.counterRequest = 0;
        _this5.scoreRanking = new Map();

        if (_this5.router.getCurrentNavigation().extras.state) {
          _this5.myPlayerName = _this5.router.getCurrentNavigation().extras.state.nick;
          _this5.websocketService.myNickname = _this5.myPlayerName;
        } else {
          _this5.router.navigate(['home']);
        }

        return _this5;
      }

      _createClass(MainSceneComponent, [{
        key: "startGame",
        value: function startGame() {
          var _this6 = this;

          this.websocketService.initializeConnection(); // const tab = (data as any).default;
          //
          // for (let i = 0; i < this.arrayWithAdditionalData.length; i++) {
          //     this.arrayWithAdditionalData[i] = new AdditionalObject(5555, this.additionalData);
          // }
          // setTimeout(() => {
          //         for (let i = 0; i < tab.length; i++) {
          //             this.simulationConnection[i] = new WebsocketSimulationConnection(tab[i].nickname);
          //             this.simulationConnection[i].initializeConnection(tab[i],4000 + 500 * i);
          //         }
          //     }, 5000
          // )

          this.stateSubscription = this.websocketService.getState().subscribe(function (state) {
            if (state === _communication_SocketClientState__WEBPACK_IMPORTED_MODULE_6__["SocketClientState"].CONNECTED) {
              _this6.ifJoinToGameSubscription = _this6.websocketService.getIfJoinGame().subscribe(function (currentCoinPosition) {
                if (currentCoinPosition.length > 0) {
                  var _iterator = _createForOfIteratorHelper(currentCoinPosition),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var coinPosition = _step.value;

                      _this6.coins.create(coinPosition.positionX * 32 + 16, coinPosition.positionY * 32 - 16, "coin", null, true, true);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _this6.websocketService.addPlayer(_this6.myPlayerName);
                } else if (currentCoinPosition.length === 0) {
                  document.getElementsByTagName('canvas').item(0).remove();

                  _this6.router.navigate(['home'], {
                    state: {
                      nick: _this6.myPlayerName
                    }
                  });

                  console.error('Juz taki nick istnieje nie mozna dolaczyc!');
                }
              });

              _this6.websocketService.joinToGame(_this6.myPlayerName);

              console.error('Nawiazalem polaczenie websocket i dodalem uzytkownika!');
            } else if (state === _communication_SocketClientState__WEBPACK_IMPORTED_MODULE_6__["SocketClientState"].ERROR) {
              console.error('Brak polaczenia websocket z serwerem');

              _this6.cleanAndBackToHomePage();
            } else {
              console.error('Probuje nawiazac polaczenie!');
            }
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this7 = this;

          this.startGame();
          var updateTop3 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
          this.subscriptionUpdateTop3 = updateTop3.subscribe(function () {
            _this7.checkRanking();
          }); // Jeszcze trzeba zaimplementowac

          this.coinToGetSubscription = this.websocketService.getCoinToGet().subscribe(function (coinToCollect) {});
          this.updateScoreSubscription = this.websocketService.getUpdateScore().subscribe(function (myScore) {
            _this7.players.get(_this7.myPlayerName).score = myScore;

            _this7.yourScore.setText(_this7.myPlayerName + " score: " + myScore);
          }); // Jeszcze trzeba zaimplementowac

          this.refreshCoinsSubscription = this.websocketService.getRefreshCoins().subscribe(function () {
            _this7.coinLayer.forEach(function (object) {
              var obj = _this7.coins.create(object.x + 16, object.y - 16, "coin");

              obj.setScale(object.width / 32, object.height / 32);
              obj.body.width = object.width;
              obj.body.height = object.height;
            });
          });
          this.managePlayersInGame();
          this.manageMonstersInGame();
          console.error('Create Board');
          this.game.loop.targetFps = 50;
          this.physics.world.setFPS(50);
          console.error('---------------- Wyswietlam informacje o grze ---------------');
          console.error('FPS actual: ' + this.game.loop.actualFps);
          console.error('FPS physics.world ' + this.physics.world.fps);
          console.error('---------------------------------------------');
          this.createAnimationsBySpriteKey('my-player', 'myAnim');
          this.createAnimationsBySpriteKey('other-player', 'enemyAnim');
          this.anims.create({
            key: 'animation',
            frames: this.anims.generateFrameNumbers('monster', {
              frames: [0, 7]
            }),
            frameRate: 2,
            repeat: -1
          });
          this.board = this.add.tilemap('board');
          this.pacmanObjects = this.board.addTilesetImage('pacman-elements');
          this.coin = this.board.addTilesetImage('coin');
          this.pathLayer = this.board.createDynamicLayer('path', [this.pacmanObjects], 0, 0);
          this._backgroundLayer = this.board.createDynamicLayer('background_main', [this.pacmanObjects], 0, 0);
          this.coinLayer = this.board.getObjectLayer('objectLayer')['objects'];
          this.exitButton = this.add.image(this.game.canvas.width - 48, 48, 'exit-button');
          this.exitButton.setInteractive();
          this.exitButton.on('pointerup', function () {
            _this7.switchScene();
          });
          this.downloadButton = this.add.image(this.game.canvas.width - 208, 48, 'download-button');
          this.downloadButton.setInteractive();
          this.downloadButton.on('pointerup', function () {
            // this.downloadService.downloadRequestMeasurements();
            _this7.downloadService.downloadResponseMeasurements();
          }); // Dodanie kolizji dla elementow warstwy background o id od 150 do 250 (te id znajduja sie w tileset ktory sklada sie na te warstwe)

          this._backgroundLayer.setCollisionBetween(140, 250);

          this.cursorKeys = this.input.keyboard.createCursorKeys();
          this.coins = this.physics.add.group();
          this.scoreNumber1 = this.add.text(700, 32, '-', {
            font: "30px Arial",
            fill: "#0022ff",
            align: "center"
          });
          this.scoreNumber2 = this.add.text(1100, 32, '-', {
            font: "30px Arial",
            fill: "#0022ff",
            align: "center"
          });
          this.scoreNumber3 = this.add.text(400, 32, '-', {
            font: "30px Arial",
            fill: "#0022ff",
            align: "center"
          });

          this.coins.removeCallback = function () {};

          console.error('Completed Board');
        }
      }, {
        key: "preload",
        value: function preload() {
          this.load.image('pacman-elements', 'assets/main/images/pacmanObjects.png');
          this.load.image('coin', 'assets/main/images/coin.png');
          this.load.image('exit-button', 'assets/main/images/exit-button.png');
          this.load.image('download-button', 'assets/main/images/download-button.png');
          this.load.spritesheet('my-player', 'assets/main/images/my-player.png', {
            frameWidth: 32,
            frameHeight: 32
          });
          this.load.spritesheet('other-player', 'assets/main/images/enemie.png', {
            frameWidth: 32,
            frameHeight: 32
          });
          this.load.spritesheet('monster', 'assets/main/images/monster.png', {
            frameWidth: 32,
            frameHeight: 32
          });
          this.load.tilemapTiledJSON('board', 'assets/main/map/board.json');
        }
      }, {
        key: "update",
        value: function update() {
          // console.log('PETLA GRA');
          if (this.startSendingPlayerPosition) {
            this.movePlayerManager();
          }
        }
      }, {
        key: "collectCoin",
        value: function collectCoin(player, coin) {
          coin.destroy(coin.x, coin.y);
          return false;
        }
      }, {
        key: "managePlayersInGame",
        value: function managePlayersInGame() {
          var _this8 = this;

          this.playersToAddSubscription = this.websocketService.getPlayersToAdd().subscribe(function (playersToAdd) {
            playersToAdd.sort(function (a, b) {
              return b.score - a.score;
            });
            _this8.rank.length = 4;

            _this8.scoreNumber1.setText("NO_ONE");

            _this8.scoreNumber2.setText("NO_ONE");

            _this8.scoreNumber3.setText("NO_ONE");

            var counter = 0;

            var _iterator2 = _createForOfIteratorHelper(playersToAdd),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var player = _step2.value;
                counter++;

                if (counter < 4) {
                  _this8.rank[counter - 1] = player;

                  _this8.setScoreText(counter, player);
                }

                if (!_this8.players.has(player.nickname)) {
                  if (player.nickname !== _this8.myPlayerName) {
                    _this8.players.set(player.nickname, new _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](_this8, player.positionX, player.positionY, 'other-player', player.score));

                    console.error('Dodaje gracza ' + player.nickname);

                    _this8.players.get(player.nickname).anims.play('enemyAnim');
                  } else {
                    _this8.players.set(player.nickname, new _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](_this8, player.positionX, player.positionY, 'my-player', player.score));

                    _this8.startSendingPlayerPosition = true;
                    _this8.yourScore = _this8.add.text(32, 32, _this8.myPlayerName + " score: " + player.score, {
                      font: "30px Arial",
                      fill: "#ff0044",
                      align: "center"
                    }); // Uruchomienie animacji wczesniej przygotowanej

                    _this8.players.get(player.nickname).anims.play('myAnim');

                    _this8.requestCache.lastCorrectRequest = new _model_Request__WEBPACK_IMPORTED_MODULE_7__["Request"](0, player.positionX, player.positionY);

                    _this8.sendPlayerPosition();
                  }

                  _this8.physics.add.overlap(_this8.players.get(player.nickname), _this8.coins, _this8.collectCoin, null, _this8);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
          this.playerToRemoveSubscription = this.websocketService.getPlayerToRemove().subscribe(function (playerToRemove) {
            _this8.rank = _this8.rank.filter(function (item) {
              return item.nickname !== playerToRemove.nickname;
            });
            console.error("Po srpawdzeniu rankingu");

            if (playerToRemove.nickname === _this8.myPlayerName) {
              _this8.cleanAndBackToHomePage();
            }

            _this8.players.get(playerToRemove.nickname).destroy(true);

            _this8.players["delete"](playerToRemove.nickname);
          });
          this.playerToUpdateSubscription = this.websocketService.getPlayerToUpdate().subscribe(function (player) {
            var currentPlayer = _this8.players.get(player.nickname);

            if (currentPlayer) {
              _this8.changeAnimationFrameForOtherPlayers(player, currentPlayer);

              currentPlayer.x = player.positionX;
              currentPlayer.y = player.positionY;
              currentPlayer.score = player.score;
              console.error('current player');
            }
          });
        } // 50 FPS dla 20 milis

      }, {
        key: "sendPlayerPosition",
        value: function sendPlayerPosition() {
          var _this9 = this;

          var player = this.players.get(this.myPlayerName); // this.lastAngle = player.angle;
          //
          // this.setDeceleratingTimeout(()=> {
          //     const player: Player = this.players.get(this.myPlayerName);
          //     this.requestCache.addRequest(++this.counterRequest, player.x, player.y);
          //     if(this.arrayWithAdditionalData.length < 2000) {
          //         this.arrayWithAdditionalData.push(new AdditionalObject(5555,this.additionalData));
          //     }
          //
          //     this.websocketService.sendPosition({
          //         "nickname": this.myPlayerName,
          //         "positionX": player.x,
          //         "positionY": player.y,
          //         "score": player.score,
          //         "stepDirection": this.getDirection(),
          //         "version": this.counterRequest,
          //         "requestTimestamp": new Date().getTime(),
          //         // "additionalData": this.arrayWithAdditionalData
          //     });
          //
          //     }, 1, 10000);

          this.lastX = player.x;
          this.lastY = player.y;
          this.lastAngle = player.angle; // const dataProvider = interval(1000);
          // const subscriptionDataProvider = dataProvider.subscribe(()=> {
          //     for(let i =0;i<10;i++) {
          //         this.arrayWithAdditionalData.push(new AdditionalObject(5555,this.additionalData));
          //     }
          //     if(this.arrayWithAdditionalData.length > 400) {
          //         subscriptionDataProvider.unsubscribe();
          //         this.subscription7.unsubscribe();
          //     }
          // });

          this.positionSender = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(20);
          this.positionSenderSubscription = this.positionSender.subscribe(function () {
            var player = _this9.players.get(_this9.myPlayerName);

            if (_this9.lastX !== player.x || _this9.lastY !== player.y || _this9.lastAngle !== player.angle) {
              _this9.lastX = player.x;
              _this9.lastY = player.y;
              _this9.lastAngle = player.angle;

              _this9.requestCache.addRequest(++_this9.counterRequest, player.x, player.y);

              _this9.websocketService.sendPosition({
                "nickname": _this9.myPlayerName,
                "positionX": player.x,
                "positionY": player.y,
                "score": player.score,
                "stepDirection": _this9.getDirection(),
                "version": _this9.counterRequest,
                "requestTimestamp": new Date().getTime() // "additionalData": this.arrayWithAdditionalData

              });
            }
          });
        }
      }, {
        key: "setDeceleratingTimeout",
        value: function setDeceleratingTimeout(callback, factor, times) {
          var internalCallback = function (tick, counter) {
            return function () {
              if (--tick >= 0) {
                window.setTimeout(internalCallback, (20000 - ++counter * factor) / 1000);
                callback();
              }
            };
          }(times, 0);

          window.setTimeout(internalCallback, factor);
        }
      }, {
        key: "randomString",
        value: function randomString(length, chars) {
          var result = '';

          for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
          }

          return result;
        }
      }, {
        key: "setScoreText",
        value: function setScoreText(number, player) {
          switch (number) {
            case 1:
              {
                this.scoreNumber1.setText(player.nickname + " score: " + player.score);
                this.scoreRanking.set(player.nickname, this.scoreNumber1);
                this.scoreNumber2.setText("-");
                this.scoreNumber3.setText("-");
                break;
              }

            case 2:
              {
                this.scoreNumber2.setText(player.nickname + " score: " + player.score);
                this.scoreRanking.set(player.nickname, this.scoreNumber2);
                this.scoreNumber3.setText("-");
                break;
              }

            case 3:
              {
                this.scoreNumber3.setText(player.nickname + " score: " + player.score);
                this.scoreRanking.set(player.nickname, this.scoreNumber3);
                break;
              }
          }
        }
      }, {
        key: "checkRanking",
        value: function checkRanking() {
          var _this10 = this;

          var playersArray = new Array();
          this.players.forEach(function (value, key) {
            value.nickname = key;
            playersArray.push(value);
          });
          playersArray = playersArray.sort(function (a, b) {
            return b.score - a.score;
          });
          var counter = 1;
          playersArray.forEach(function (element) {
            _this10.setScoreText(counter, element);

            counter++;

            if (counter > 3) {
              return;
            }
          });
        }
      }, {
        key: "movePlayerManager",
        value: function movePlayerManager() {
          if (this.cursorKeys.left.isDown === true) {
            this.players.get(this.myPlayerName).setVelocity(-_model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"].SPEED, 0);
            this.players.get(this.myPlayerName).setAngle(270);
          } else if (this.cursorKeys.right.isDown === true) {
            this.players.get(this.myPlayerName).setVelocity(_model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"].SPEED, 0);
            this.players.get(this.myPlayerName).setAngle(90);
          } else if (this.cursorKeys.up.isDown === true) {
            this.players.get(this.myPlayerName).setVelocity(0, -_model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"].SPEED);
            this.players.get(this.myPlayerName).setAngle(0);
          } else if (this.cursorKeys.down.isDown === true) {
            this.players.get(this.myPlayerName).setVelocity(0, _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"].SPEED);
            this.players.get(this.myPlayerName).setAngle(180);
          }
        }
      }, {
        key: "manageMonstersInGame",
        value: function manageMonstersInGame() {
          var _this11 = this;

          this.monsterToUpdateSubscription = this.websocketService.getMonsterToUpdate().subscribe(function (monsterToUpdate) {
            if (_this11.monsters.has(monsterToUpdate.id)) {
              _this11.monsters.get(monsterToUpdate.id).x = monsterToUpdate.positionX;
              _this11.monsters.get(monsterToUpdate.id).y = monsterToUpdate.positionY;
            } else {
              _this11.monsters.set(monsterToUpdate.id, _this11.physics.add.sprite(monsterToUpdate.positionX, monsterToUpdate.positionY, 'monster'));

              _this11.monsters.get(monsterToUpdate.id).anims.play('animation');
            }
          });
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "switchScene",
        value: function switchScene() {
          this.cleanAndBackToHomePage();
        }
      }, {
        key: "cleanAndBackToHomePage",
        value: function cleanAndBackToHomePage() {
          this.startSendingPlayerPosition = false;
          this.myPlayerName = '';
          this.router.navigate(['home']);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.ifJoinToGameSubscription && this.stateSubscription && this.playersToAddSubscription && this.playerToRemoveSubscription && this.playerToUpdateSubscription && this.monsterToUpdateSubscription && this.positionSenderSubscription && this.coinToGetSubscription && this.updateScoreSubscription && this.refreshCoinsSubscription && this.subscriptionUpdateTop3) {
            console.error('OnDestory');
            this.counterRequest = 0;
            this.ifJoinToGameSubscription.unsubscribe();
            this.stateSubscription.unsubscribe();
            this.playersToAddSubscription.unsubscribe();
            this.playerToRemoveSubscription.unsubscribe();
            this.playerToUpdateSubscription.unsubscribe();
            this.monsterToUpdateSubscription.unsubscribe();
            this.positionSenderSubscription.unsubscribe();
            this.coinToGetSubscription.unsubscribe();
            this.updateScoreSubscription.unsubscribe();
            this.refreshCoinsSubscription.unsubscribe();
            this.subscriptionUpdateTop3.unsubscribe();
            this.websocketService.disconnect(); // for (let i = 0; i < this.simulationConnection.length; i++) {
            //     this.simulationConnection[i].disconnect();
            // }
          }

          if (this.game != null) {
            this.game.destroy(true);
            this.game.scene.remove('main');
          }

          if (document.getElementsByTagName('canvas').item(0) != null) {
            document.getElementsByTagName('canvas').item(0).remove();
          }

          this.elementRef.nativeElement.remove();
        }
      }, {
        key: "createAnimationsBySpriteKey",
        value: function createAnimationsBySpriteKey(figureKey, animKey) {
          this.anims.create({
            key: animKey,
            frames: this.anims.generateFrameNumbers(figureKey, {
              frames: [3, 1]
            }),
            frameRate: 10,
            repeat: -1
          });
        }
      }, {
        key: "changeAnimationFrameForOtherPlayers",
        value: function changeAnimationFrameForOtherPlayers(playerToUpdate, currentPlayer) {
          if (this.myPlayerName !== playerToUpdate.nickname) {
            if (currentPlayer.x < playerToUpdate.positionX) {
              currentPlayer.setAngle(90);
            }

            if (currentPlayer.x > playerToUpdate.positionX) {
              currentPlayer.setAngle(270);
            }

            if (currentPlayer.y < playerToUpdate.positionY) {
              currentPlayer.setAngle(180);
            }

            if (currentPlayer.y > playerToUpdate.positionY) {
              currentPlayer.setAngle(0);
            }
          }
        }
      }, {
        key: "getDirection",
        value: function getDirection() {
          switch (this.players.get(this.myPlayerName).angle) {
            case 90:
              {
                return _communication_Direction__WEBPACK_IMPORTED_MODULE_5__["Direction"].HORIZON;
              }

            case -180:
              {
                return _communication_Direction__WEBPACK_IMPORTED_MODULE_5__["Direction"].VERTICAL;
              }

            case -90:
              {
                return _communication_Direction__WEBPACK_IMPORTED_MODULE_5__["Direction"].HORIZON;
              }

            case 0:
              {
                return _communication_Direction__WEBPACK_IMPORTED_MODULE_5__["Direction"].VERTICAL;
              }
          }
        }
      }, {
        key: "backgroundLayer",
        get: function get() {
          return this._backgroundLayer;
        }
      }]);

      return MainSceneComponent;
    }(phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene);

    MainSceneComponent.ɵfac = function MainSceneComponent_Factory(t) {
      return new (t || MainSceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communication_Communicator__WEBPACK_IMPORTED_MODULE_4__["Communicator"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_downloader_download_service__WEBPACK_IMPORTED_MODULE_10__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cache_request_cache_service__WEBPACK_IMPORTED_MODULE_11__["RequestCacheService"]));
    };

    MainSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainSceneComponent,
      selectors: [["app-main-scene"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _communication_Communicator__WEBPACK_IMPORTED_MODULE_4__["Communicator"],
        useClass: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].serviceToCommunication
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      template: function MainSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game");
        }
      },
      styles: ["#mainScene[_ngcontent-%COMP%] {\r\n  margin-left: 500px;\r\n  padding-left: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NlbmVzL21haW4tc2NlbmUvbWFpbi1zY2VuZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NjZW5lcy9tYWluLXNjZW5lL21haW4tc2NlbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluU2NlbmUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuIl19 */"]
    });
    MainSceneComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainSceneComponent,
      factory: MainSceneComponent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-scene',
          providers: [{
            provide: _communication_Communicator__WEBPACK_IMPORTED_MODULE_4__["Communicator"],
            useClass: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].serviceToCommunication
          }],
          templateUrl: './main-scene.component.html',
          styleUrls: ['./main-scene.component.css']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _communication_Communicator__WEBPACK_IMPORTED_MODULE_4__["Communicator"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _downloader_download_service__WEBPACK_IMPORTED_MODULE_10__["DownloadService"]
        }, {
          type: _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_11__["RequestCacheService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var _app_communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../app/communication/websocket/websocket.service */
    "./src/app/communication/websocket/websocket.service.ts");

    var environment = {
      production: false,
      serviceToCommunication: _app_communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__["WebsocketService"],
      download_measurement_rsocket: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\szymo\IdeaProjects\Pacman-Server\Frontend-Pacman\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map