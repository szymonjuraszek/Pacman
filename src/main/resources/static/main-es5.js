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

  /*! exports provided: CSV_RESPONSE_HEADERS_PLAYER, CSV_RESPONSE_HEADERS_MONSTER, SERIALIZER_DATA, SERIALIZER_METADATA, DATA_MIME_TYPE */

  /***/
  function globalConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSV_RESPONSE_HEADERS_PLAYER", function () {
      return CSV_RESPONSE_HEADERS_PLAYER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSV_RESPONSE_HEADERS_MONSTER", function () {
      return CSV_RESPONSE_HEADERS_MONSTER;
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
    __webpack_require__.n(rsocket_core__WEBPACK_IMPORTED_MODULE_0__); // Defined data which will be saved into response file for player (not modify)


    var CSV_RESPONSE_HEADERS_PLAYER = ['id', 'response_time_in_millis', 'specific_second_of_communication', 'version_response', 'size', 'request_timestamp']; // Defined data which will be saved into response file for monster (not modify)

    var CSV_RESPONSE_HEADERS_MONSTER = ['id', 'specific_second_of_communication', 'request_timestamp', 'response_time_in_millis']; // 1) Serializer for RSocket

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
          previousDirection: jspb.Message.getFieldWithDefault(msg, 4, "")
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
    goog.exportSymbol('proto.PlayerProto.AdditionalData', null, global);
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
      jspb.Message.initialize(this, opt_data, 0, -1, proto.PlayerProto.repeatedFields_, null);
    };

    goog.inherits(proto.PlayerProto, jspb.Message);

    if (goog.DEBUG && !COMPILED) {
      /**
       * @public
       * @override
       */
      proto.PlayerProto.displayName = 'proto.PlayerProto';
    }
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


    proto.PlayerProto.AdditionalData = function (opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };

    goog.inherits(proto.PlayerProto.AdditionalData, jspb.Message);

    if (goog.DEBUG && !COMPILED) {
      /**
       * @public
       * @override
       */
      proto.PlayerProto.AdditionalData.displayName = 'proto.PlayerProto.AdditionalData';
    }
    /**
     * List of repeated fields within this message type.
     * @private {!Array<number>}
     * @const
     */


    proto.PlayerProto.repeatedFields_ = [7];

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
          version: jspb.Message.getFieldWithDefault(msg, 6, 0),
          additionaldataList: jspb.Message.toObjectList(msg.getAdditionaldataList(), proto.PlayerProto.AdditionalData.toObject, includeInstance)
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

          case 7:
            var value = new proto.PlayerProto.AdditionalData();
            reader.readMessage(value, proto.PlayerProto.AdditionalData.deserializeBinaryFromReader);
            msg.addAdditionaldata(value);
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

      f = message.getAdditionaldataList();

      if (f.length > 0) {
        writer.writeRepeatedMessage(7, f, proto.PlayerProto.AdditionalData.serializeBinaryToWriter);
      }
    };

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
      proto.PlayerProto.AdditionalData.prototype.toObject = function (opt_includeInstance) {
        return proto.PlayerProto.AdditionalData.toObject(opt_includeInstance, this);
      };
      /**
       * Static version of the {@see toObject} method.
       * @param {boolean|undefined} includeInstance Deprecated. Whether to include
       *     the JSPB instance for transitional soy proto support:
       *     http://goto/soy-param-migration
       * @param {!proto.PlayerProto.AdditionalData} msg The msg instance to transform.
       * @return {!Object}
       * @suppress {unusedLocalVariables} f is only used for nested messages
       */


      proto.PlayerProto.AdditionalData.toObject = function (includeInstance, msg) {
        var f,
            obj = {
          text: jspb.Message.getFieldWithDefault(msg, 1, ""),
          number1: jspb.Message.getFieldWithDefault(msg, 2, 0),
          number2: jspb.Message.getFieldWithDefault(msg, 3, 0),
          number3: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
     * @return {!proto.PlayerProto.AdditionalData}
     */


    proto.PlayerProto.AdditionalData.deserializeBinary = function (bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.PlayerProto.AdditionalData();
      return proto.PlayerProto.AdditionalData.deserializeBinaryFromReader(msg, reader);
    };
    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param {!proto.PlayerProto.AdditionalData} msg The message object to deserialize into.
     * @param {!jspb.BinaryReader} reader The BinaryReader to use.
     * @return {!proto.PlayerProto.AdditionalData}
     */


    proto.PlayerProto.AdditionalData.deserializeBinaryFromReader = function (msg, reader) {
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
            msg.setText(value);
            break;

          case 2:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setNumber1(value);
            break;

          case 3:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setNumber2(value);
            break;

          case 4:
            var value =
            /** @type {number} */
            reader.readInt32();
            msg.setNumber3(value);
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


    proto.PlayerProto.AdditionalData.prototype.serializeBinary = function () {
      var writer = new jspb.BinaryWriter();
      proto.PlayerProto.AdditionalData.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    /**
     * Serializes the given message to binary data (in protobuf wire
     * format), writing to the given BinaryWriter.
     * @param {!proto.PlayerProto.AdditionalData} message
     * @param {!jspb.BinaryWriter} writer
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */


    proto.PlayerProto.AdditionalData.serializeBinaryToWriter = function (message, writer) {
      var f = undefined;
      f = message.getText();

      if (f.length > 0) {
        writer.writeString(1, f);
      }

      f = message.getNumber1();

      if (f !== 0) {
        writer.writeInt32(2, f);
      }

      f = message.getNumber2();

      if (f !== 0) {
        writer.writeInt32(3, f);
      }

      f = message.getNumber3();

      if (f !== 0) {
        writer.writeInt32(4, f);
      }
    };
    /**
     * optional string text = 1;
     * @return {string}
     */


    proto.PlayerProto.AdditionalData.prototype.getText = function () {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    /**
     * @param {string} value
     * @return {!proto.PlayerProto.AdditionalData} returns this
     */


    proto.PlayerProto.AdditionalData.prototype.setText = function (value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    /**
     * optional int32 number1 = 2;
     * @return {number}
     */


    proto.PlayerProto.AdditionalData.prototype.getNumber1 = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto.AdditionalData} returns this
     */


    proto.PlayerProto.AdditionalData.prototype.setNumber1 = function (value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    /**
     * optional int32 number2 = 3;
     * @return {number}
     */


    proto.PlayerProto.AdditionalData.prototype.getNumber2 = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto.AdditionalData} returns this
     */


    proto.PlayerProto.AdditionalData.prototype.setNumber2 = function (value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    /**
     * optional int32 number3 = 4;
     * @return {number}
     */


    proto.PlayerProto.AdditionalData.prototype.getNumber3 = function () {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    /**
     * @param {number} value
     * @return {!proto.PlayerProto.AdditionalData} returns this
     */


    proto.PlayerProto.AdditionalData.prototype.setNumber3 = function (value) {
      return jspb.Message.setProto3IntField(this, 4, value);
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
    /**
     * repeated AdditionalData additionalData = 7;
     * @return {!Array<!proto.PlayerProto.AdditionalData>}
     */


    proto.PlayerProto.prototype.getAdditionaldataList = function () {
      return (
        /** @type{!Array<!proto.PlayerProto.AdditionalData>} */
        jspb.Message.getRepeatedWrapperField(this, proto.PlayerProto.AdditionalData, 7)
      );
    };
    /**
     * @param {!Array<!proto.PlayerProto.AdditionalData>} value
     * @return {!proto.PlayerProto} returns this
    */


    proto.PlayerProto.prototype.setAdditionaldataList = function (value) {
      return jspb.Message.setRepeatedWrapperField(this, 7, value);
    };
    /**
     * @param {!proto.PlayerProto.AdditionalData=} opt_value
     * @param {number=} opt_index
     * @return {!proto.PlayerProto.AdditionalData}
     */


    proto.PlayerProto.prototype.addAdditionaldata = function (opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.PlayerProto.AdditionalData, opt_index);
    };
    /**
     * Clears the list making it empty but non-null.
     * @return {!proto.PlayerProto} returns this
     */


    proto.PlayerProto.prototype.clearAdditionaldataList = function () {
      return this.setAdditionaldataList([]);
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


    var _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scene/main-scene.component */
    "./src/app/scene/main-scene.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'game',
      component: _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__["MainSceneComponent"]
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


    var _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./scene/main-scene.component */
    "./src/app/scene/main-scene.component.ts");
    /* harmony import */


    var _communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./communication/websocket/websocket.service */
    "./src/app/communication/websocket/websocket.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js"); // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore


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
      providers: [_communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"]],
          providers: [_communication_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Dir"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_4__["MainSceneComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]]);
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
    /* harmony import */


    var _model_MonsterMeasurement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/MonsterMeasurement */
    "./src/app/model/MonsterMeasurement.ts");

    var MeasurementService =
    /*#__PURE__*/
    function () {
      function MeasurementService() {
        _classCallCheck(this, MeasurementService);

        this.measurements = new Array();
        this.monsterMeasurements = new Array();
      }

      _createClass(MeasurementService, [{
        key: "addMeasurementResponse",
        value: function addMeasurementResponse(id, responseTimeInMillis, specificSecondOfCommunication, version, size, requestTimestamp) {
          this.measurements.push(new _model_MeasurementResponse__WEBPACK_IMPORTED_MODULE_1__["MeasurementResponse"](id, responseTimeInMillis, specificSecondOfCommunication, version, size, requestTimestamp));
        }
      }, {
        key: "addMonsterMeasurement",
        value: function addMonsterMeasurement(id, requestTimestamp) {
          if (this.monsterMeasurements.length === 0) {
            this.firstMonsterTimestamp = requestTimestamp;
          } // this.monsterMeasurements.push(new MonsterMeasurement(id,
          //     Math.ceil((requestTimestamp - this.firstMonsterTimestamp) / 1000),
          //     requestTimestamp));

        }
      }, {
        key: "addMonsterMeasurementWithTime",
        value: function addMonsterMeasurementWithTime(id, requestTimestamp, responseTimeInMillis) {
          if (this.monsterMeasurements.length === 0) {
            this.firstMonsterTimestamp = requestTimestamp;
          }

          this.monsterMeasurements.push(new _model_MonsterMeasurement__WEBPACK_IMPORTED_MODULE_2__["MonsterMeasurement"](id, Math.ceil((requestTimestamp - this.firstMonsterTimestamp) / 1000), requestTimestamp, responseTimeInMillis));
        }
      }, {
        key: "getResponseMeasurements",
        value: function getResponseMeasurements() {
          return this.measurements;
        }
      }, {
        key: "getResponseMeasurementsForMonster",
        value: function getResponseMeasurementsForMonster() {
          return this.monsterMeasurements;
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
      }, {
        key: "timeForStartCommunication",
        get: function get() {
          return this._timeForStartCommunication;
        },
        set: function set(value) {
          this._timeForStartCommunication = value;
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
      function Communicator() {
        _classCallCheck(this, Communicator);

        this.playersToAdd = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.playerToRemove = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.playerToUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.monsterToUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ifJoinGame = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.coinToGet = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.updateScore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.refreshCoin = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
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
      }, {
        key: "serverUrl",
        get: function get() {
          return this._serverUrl;
        },
        set: function set(value) {
          this._serverUrl = value;
        }
      }, {
        key: "formatter",
        get: function get() {
          return this._formatter;
        },
        set: function set(value) {
          this._formatter = value;
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
      Direction["HORIZON"] = "HOR";
      Direction["VERTICAL"] = "VER";
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

    var AdditionalData = _proto_generated_proto_player_pb__WEBPACK_IMPORTED_MODULE_0__["PlayerProto"].AdditionalData;

    var ProtobufFormatter =
    /*#__PURE__*/
    function () {
      function ProtobufFormatter() {
        _classCallCheck(this, ProtobufFormatter);

        this.newData = new Array();
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

          for (var i = this.newData.length; i < data.additionalData.length; i++) {
            var object = new AdditionalData();
            object.setText(data.additionalData[i].text);
            object.setNumber1(data.additionalData[i].number1);
            object.setNumber2(data.additionalData[i].number2);
            object.setNumber3(data.additionalData[i].number3);
            this.newData.push(object);
          }

          playerProto.setAdditionaldataList(this.newData);
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
  "./src/app/communication/http2/http2.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/communication/http2/http2.service.ts ***!
    \******************************************************/

  /*! exports provided: Http2Service */

  /***/
  function srcAppCommunicationHttp2Http2ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Http2Service", function () {
      return Http2Service;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Communicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Communicator */
    "./src/app/communication/Communicator.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _SocketClientState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../SocketClientState */
    "./src/app/communication/SocketClientState.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _cache_measurement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../cache/measurement.service */
    "./src/app/cache/measurement.service.ts");
    /* harmony import */


    var _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../cache/request-cache.service */
    "./src/app/cache/request-cache.service.ts");

    var Http2Service =
    /*#__PURE__*/
    function (_Communicator__WEBPAC) {
      _inherits(Http2Service, _Communicator__WEBPAC);

      var _super = _createSuper(Http2Service);

      function Http2Service(measurementService, http, requestCache) {
        var _this;

        _classCallCheck(this, Http2Service);

        _this = _super.call(this);
        _this.measurementService = measurementService;
        _this.http = http;
        _this.requestCache = requestCache;
        return _this;
      }

      _createClass(Http2Service, [{
        key: "initializeConnection",
        value: function initializeConnection() {
          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].CONNECTED);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          console.error('Zakonczono komunikacje z serverem');

          if (this.eventSource.OPEN) {
            this.eventSource.close();
          }

          this.http["delete"](this.serverUrl + "/emitter/" + this.nickname).subscribe(function (value) {
            console.error('Usunalem gracza');
          });
        }
      }, {
        key: "joinToGame",
        value: function joinToGame(nickname) {
          var _this2 = this;

          this.http.get(this.serverUrl + "/player/" + nickname).subscribe(function (ifExist) {
            if (ifExist === false) {
              _this2.nickname = nickname;
              _this2.eventSource = new EventSource(_this2.serverUrl + "/emitter/" + _this2.nickname);

              _this2.eventSource.addEventListener('/pacman/update/monster', function (monsterPositionEvent) {
                var monsterParsed = JSON.parse(monsterPositionEvent.data);
                var responseTimeInMillis = new Date().getTime() - monsterParsed.requestTimestamp;

                _this2.measurementService.addMonsterMeasurementWithTime(monsterParsed.id, monsterParsed.requestTimestamp, responseTimeInMillis);

                _this2.monsterToUpdate.next(monsterParsed);
              });

              _this2.eventSource.addEventListener('/pacman/get/coin', function (coinPositionEvent) {
                console.error('Zbieram coina');

                _this2.coinToGet.next(JSON.parse(coinPositionEvent.data));
              });

              _this2.eventSource.addEventListener('/pacman/refresh/coins', function (updateMapEvent) {
                console.error('Odswierzenie mapy');

                _this2.refreshCoin.next(JSON.parse(updateMapEvent.data));
              });

              _this2.eventSource.addEventListener('/pacman/remove/player', function (playerToRemoveEvent) {
                console.error('Usuwam gracza!');

                _this2.playerToRemove.next(JSON.parse(playerToRemoveEvent.data));
              });

              _this2.eventSource.addEventListener('/pacman/add/players', function (playerToAddEvent) {
                console.error('Dodaje gracza!');

                _this2.playersToAdd.next(JSON.parse(playerToAddEvent.data));
              });

              _this2.eventSource.addEventListener('/pacman/update/player', function (playerToUpdateEvent) {
                var playersWithMeasurementInfo = JSON.parse(playerToUpdateEvent.data);

                if (playersWithMeasurementInfo.player.nickname.match('local*') || playersWithMeasurementInfo.player.nickname === _this2.myNickname) {
                  _this2.saveResponseTime(playersWithMeasurementInfo.player.nickname, playersWithMeasurementInfo.requestTimestamp, playersWithMeasurementInfo.player.version, playersWithMeasurementInfo.contentLength);
                }

                _this2.playerToUpdate.next(playersWithMeasurementInfo.player);
              });

              _this2.http.get(_this2.serverUrl + "/coins").subscribe(function (coinsPosition) {
                _this2.ifJoinGame.next(coinsPosition);
              });
            } else {
              _this2.ifJoinGame.next(new Array(0));
            }
          });
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(nickname) {
          var _this3 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
          this.http.post(this.serverUrl + "/players", JSON.stringify(nickname), {
            headers: headers,
            observe: "response"
          }).subscribe(function (playerToAdd) {
            if (playerToAdd.status === 201) {
              _this3.playersToAdd.next(playerToAdd.body);
            } else {
              console.error('Nie udalo sie dodac uzytkownika');
            }
          });
        }
      }, {
        key: "sendPosition",
        value: function sendPosition(data) {
          var _this4 = this;

          this.http.put(this.serverUrl + "/player", JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json',
              'requestTimestamp': new Date().getTime().toString()
            },
            observe: 'response'
          }).subscribe(function (player) {
            var responseTimeInMillis = new Date().getTime() - Number(player.headers.get('requestTimestamp'));
            console.error("Odpowiedz serwera " + responseTimeInMillis + " milliseconds");

            if (player.body.nickname.match('local*') || player.body.nickname === _this4.myNickname) {
              _this4.saveResponseTime(player.body.nickname, Number(player.headers.get('requestTimestamp')), player.body.version, Number(player.headers.get('contentLength')));
            }

            if (player.status === 202) {
              var request = _this4.requestCache.getCorrectedPosition(player.body.version);

              if (request !== null) {
                player.body.positionX = request.x;
                player.body.positionY = request.y;

                _this4.playerToUpdate.next(player.body);
              }
            } else if (player.status === 201) {
              var _request3 = _this4.requestCache.getRequest(player.body.version);

              _this4.updateScore.next(player.body.score);

              if (_request3 !== null && (_request3.x !== player.body.positionX || _request3.y !== player.body.positionY)) {
                _this4.playerToUpdate.next(player.body);
              }
            } else if (player.status === 200) {
              _this4.playerToRemove.next(player.body);
            }
          });
        }
      }, {
        key: "saveResponseTime",
        value: function saveResponseTime(id, timestampFromServer, version, size) {
          var responseTimeInMillis = new Date().getTime() - timestampFromServer; // console.error("Odpowiedz serwera " + responseTimeInMillis + " milliseconds");

          this.measurementService.addMeasurementResponse(id, responseTimeInMillis, Math.ceil((timestampFromServer - this.requestCache.timeForStartCommunication) / 1000), version, size, timestampFromServer);
        }
      }]);

      return Http2Service;
    }(_Communicator__WEBPACK_IMPORTED_MODULE_1__["Communicator"]);

    Http2Service.ɵfac = function Http2Service_Factory(t) {
      return new (t || Http2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_measurement_service__WEBPACK_IMPORTED_MODULE_5__["MeasurementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_request_cache_service__WEBPACK_IMPORTED_MODULE_6__["RequestCacheService"]));
    };

    Http2Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Http2Service,
      factory: Http2Service.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Http2Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _cache_measurement_service__WEBPACK_IMPORTED_MODULE_5__["MeasurementService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_6__["RequestCacheService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/communication/simulation/data/AdditionalData.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/communication/simulation/data/AdditionalData.ts ***!
    \*****************************************************************/

  /*! exports provided: AdditionalData */

  /***/
  function srcAppCommunicationSimulationDataAdditionalDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalData", function () {
      return AdditionalData;
    });

    var AdditionalData = function AdditionalData(number1, number2, number3, text) {
      _classCallCheck(this, AdditionalData);

      this.number1 = number1;
      this.number2 = number2;
      this.number3 = number3;
      this.text = text;
    };
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


    var _cache_measurement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../cache/measurement.service */
    "./src/app/cache/measurement.service.ts");
    /* harmony import */


    var _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../cache/request-cache.service */
    "./src/app/cache/request-cache.service.ts");

    var WebsocketService =
    /*#__PURE__*/
    function (_Communicator__WEBPAC2) {
      _inherits(WebsocketService, _Communicator__WEBPAC2);

      var _super2 = _createSuper(WebsocketService);

      function WebsocketService(measurementService, requestCache) {
        var _this5;

        _classCallCheck(this, WebsocketService);

        _this5 = _super2.call(this);
        _this5.measurementService = measurementService;
        _this5.requestCache = requestCache;
        _this5.playersOnTheSameSystemTime = 'local*';
        _this5.variable = _this5.makeid(30000);
        return _this5;
      }

      _createClass(WebsocketService, [{
        key: "initializeConnection",
        value: function initializeConnection() {
          var _this6 = this;

          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].ATTEMPTING);
          this.stompClient = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__["Client"]({
            brokerURL: this.serverUrl,
            splitLargeFrames: true,
            reconnectDelay: 3000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000
          });

          this.stompClient.debug = function () {};

          this.stompClient.onConnect = function (frame) {
            _this6.stompClient.subscribe('/pacman/add/players', function (gameToAddPlayer) {
              _this6.playersToAdd.next(JSON.parse(gameToAddPlayer.body));

              console.error('Zaktualizowano gre, dodano gracza');
            });

            _this6.stompClient.subscribe('/pacman/remove/player', function (playerToRemove) {
              _this6.playerToRemove.next(_this6.formatter.decodePlayer(playerToRemove));

              console.error('Zaktualizowano gre, usunieto gracza');
            });

            _this6.stompClient.subscribe('/pacman/update/player', function (playerToUpdate) {
              var parsedPlayer = _this6.formatter.decodePlayer(playerToUpdate);

              _this6.saveMeasurement(parsedPlayer.nickname, parsedPlayer.version, playerToUpdate.headers.requestTimestamp, playerToUpdate.headers['content-length']);

              if (parsedPlayer.nickname === _this6.myNickname) {
                var request = _this6.requestCache.getRequest(parsedPlayer.version);

                _this6.updateScore.next(parsedPlayer.score);

                if (request !== null && (request.x !== parsedPlayer.positionX || request.y !== parsedPlayer.positionY)) {
                  _this6.playerToUpdate.next(parsedPlayer);
                }
              } else {
                _this6.playerToUpdate.next(parsedPlayer);
              }
            });

            _this6.stompClient.subscribe('/pacman/update/monster', function (monster) {
              var monsterParsed = _this6.formatter.decodeMonster(monster);

              var responseTimeInMillis = new Date().getTime() - Number(monster.headers.requestTimestamp);

              _this6.measurementService.addMonsterMeasurementWithTime(monsterParsed.id, Number(monster.headers.requestTimestamp), responseTimeInMillis);

              _this6.monsterToUpdate.next(monsterParsed);
            });

            _this6.stompClient.subscribe('/pacman/refresh/coins', function () {
              _this6.refreshCoin.next();
            });

            _this6.stompClient.subscribe('/pacman/get/coin', function (coinPosition) {
              _this6.coinToGet.next(_this6.formatter.decodeCoin(coinPosition));
            });

            _this6.stompClient.subscribe('/user/queue/reply', function (currentCoinPosition) {
              _this6.ifJoinGame.next(JSON.parse(currentCoinPosition.body));
            });

            _this6.stompClient.subscribe('/user/queue/correct/player', function (playerToUpdate) {
              var parsedPlayer = _this6.formatter.decodePlayer(playerToUpdate);

              console.error(parsedPlayer);

              _this6.saveMeasurement(parsedPlayer.nickname, parsedPlayer.version, playerToUpdate.headers.requestTimestamp, playerToUpdate.headers['content-length']);

              var request = _this6.requestCache.getCorrectedPosition(parsedPlayer.version);

              if (request !== null) {
                parsedPlayer.positionX = request.x;
                parsedPlayer.positionY = request.y;

                _this6.playerToUpdate.next(parsedPlayer);
              }
            });

            _this6.stompClient.subscribe('/pacman/collision/update', function (allCoinPosition) {});

            _this6.state.next(_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].CONNECTED);
          };

          this.stompClient.onStompError = function (frame) {
            console.log('Broker reported error: ' + frame.headers['message']);
            console.log('Additional details: ' + frame.body);

            _this6.state.next(_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].ERROR);
          };

          this.stompClient.onWebSocketClose = function (frame) {
            console.error(frame);
          };

          this.stompClient.onWebSocketError = function (frame) {
            console.error(frame);

            _this6.state.next(_SocketClientState__WEBPACK_IMPORTED_MODULE_3__["SocketClientState"].ERROR);

            _this6.stompClient.deactivate();
          };

          this.stompClient.activate();
        } //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "disconnect",
        value: function disconnect() {
          this.stompClient.deactivate();
        }
      }, {
        key: "saveMeasurement",
        value: function saveMeasurement(nickname, version, requestTimestampHeader, contentLengthHeader) {
          if (nickname.match(this.playersOnTheSameSystemTime) || nickname === this.myNickname) {
            var responseTimeInMillis = new Date().getTime() - Number(requestTimestampHeader);
            this.measurementService.addMeasurementResponse(nickname, responseTimeInMillis, Math.ceil((Number(requestTimestampHeader) - this.requestCache.timeForStartCommunication) / 1000), version, Number(contentLengthHeader), Number(requestTimestampHeader));
          }
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
      return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_measurement_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_request_cache_service__WEBPACK_IMPORTED_MODULE_8__["RequestCacheService"]));
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
          type: _cache_measurement_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementService"]
        }, {
          type: _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_8__["RequestCacheService"]
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

    var DownloadService =
    /*#__PURE__*/
    function () {
      function DownloadService(cacheMeasurement) {
        _classCallCheck(this, DownloadService);

        this.cacheMeasurement = cacheMeasurement;
        this.RESPONSE_FILE_PLAYER = "response_measurement_player.csv";
        this.RESPONSE_FILE_MONSTER = "response_measurement_monster.csv";
      }

      _createClass(DownloadService, [{
        key: "downloadResponseMeasurements",
        value: function downloadResponseMeasurements() {
          this.downloadResponseFile(this.cacheMeasurement.getResponseMeasurements(), _global_config__WEBPACK_IMPORTED_MODULE_2__["CSV_RESPONSE_HEADERS_PLAYER"], this.RESPONSE_FILE_PLAYER);
          this.downloadResponseFile(this.cacheMeasurement.getResponseMeasurementsForMonster(), _global_config__WEBPACK_IMPORTED_MODULE_2__["CSV_RESPONSE_HEADERS_MONSTER"], this.RESPONSE_FILE_MONSTER);
        }
      }, {
        key: "downloadResponseFile",
        value: function downloadResponseFile(data, headers, fileName) {
          var replacer = function replacer(key, value) {
            return value === null ? '' : value;
          }; // specify how you want to handle null values here


          var csv = data.map(function (row) {
            return headers.map(function (fieldName) {
              return JSON.stringify(row[fieldName], replacer);
            }).join(',');
          });
          headers = headers.map(function (x) {
            return x.toUpperCase();
          });
          csv.unshift(headers.join(','));
          var csvArray = csv.join('\r\n');
          Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(new Blob([csvArray], {
            type: 'text/csv'
          }), fileName);
        }
      }]);

      return DownloadService;
    }();

    DownloadService.ɵfac = function DownloadService_Factory(t) {
      return new (t || DownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cache_measurement_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementService"]));
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
    "./node_modules/phaser/dist/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scene/main-scene.component */
    "./src/app/scene/main-scene.component.ts");

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
            autoCenter: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.CENTER_HORIZONTALLY
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
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__["MainSceneComponent"]));
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
          type: _scene_main_scene_component__WEBPACK_IMPORTED_MODULE_2__["MainSceneComponent"]
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_h4_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You can't start game because other player has the same nickname: '", ctx_r0.answer, "'");
      }
    }

    function HomeComponent_h4_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.versionName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].versionName;
        this.contentFormat = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].contentFormat;
        this.vpsServer = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].vpsServerUrl;
        this.localServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localServerUrl;
        this.speed = 21;
        this.additionalObjects = 0;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].vpsServerUrl;

        if (this.router.getCurrentNavigation().extras.state) {
          this.answer = this.router.getCurrentNavigation().extras.state.nick;
          this.message = this.router.getCurrentNavigation().extras.state.message;
        }
      }

      _createClass(HomeComponent, [{
        key: "startGame",
        value: function startGame(nickname) {
          this.router.navigate(['game'], {
            state: {
              nick: nickname,
              speed: this.speed,
              additionalObjects: this.additionalObjects,
              serverUrl: this.serverUrl,
              formatter: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].formatter
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 40,
      vars: 14,
      consts: [["id", "container"], ["id", "settings"], [3, "ngModel", "ngModelChange"], ["aria-label", "Where to connect", 3, "ngModel", "ngModelChange"], [3, "value"], ["id", "background"], [3, "disabled", "click"], [4, "ngIf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sending speed (ms): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.speed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Additional objects per second: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.additionalObjects = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-group", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_radio_group_ngModelChange_18_listener($event) {
            return ctx.serverUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "VPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "LOCAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Welcome in multiplayer Pacman Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Set nickname and click 'START'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.nickname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_32_listener() {
            return ctx.startGame(ctx.nickname);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_h4_38_Template, 2, 1, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomeComponent_h4_39_Template, 2, 1, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version: ", ctx.versionName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content Format: ", ctx.contentFormat, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sending speed: ", ctx.speed, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Additional objects: ", ctx.additionalObjects, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("URL: ", ctx.serverUrl, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.speed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.additionalObjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.serverUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.vpsServer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.localServerUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nickname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nickname || ctx.nickname == "NO_ONE" || ctx.nickname.length > 10 || ctx.nickname.length < 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["#container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n#background[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    flex-basis: 100rem;\r\n}\r\n\r\n#settings[_ngcontent-%COMP%] {\r\n    flex-basis: 15rem;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jYmFja2dyb3VuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDByZW07XHJcbn1cclxuXHJcbiNzZXR0aW5ncyB7XHJcbiAgICBmbGV4LWJhc2lzOiAxNXJlbTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
      function MeasurementResponse(id, response_time_in_millis, specific_second_of_communication, version_response, size, request_timestamp) {
        _classCallCheck(this, MeasurementResponse);

        this._id = id;
        this._response_time_in_millis = response_time_in_millis;
        this._specific_second_of_communication = specific_second_of_communication;
        this._version_response = version_response;
        this._size = size;
        this._request_timestamp = request_timestamp;
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
        key: "specific_second_of_communication",
        get: function get() {
          return this._specific_second_of_communication;
        },
        set: function set(value) {
          this._specific_second_of_communication = value;
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
      }, {
        key: "size",
        get: function get() {
          return this._size;
        },
        set: function set(value) {
          this._size = value;
        }
      }, {
        key: "request_timestamp",
        get: function get() {
          return this._request_timestamp;
        },
        set: function set(value) {
          this._request_timestamp = value;
        }
      }]);

      return MeasurementResponse;
    }();
    /***/

  },

  /***/
  "./src/app/model/MonsterMeasurement.ts":
  /*!*********************************************!*\
    !*** ./src/app/model/MonsterMeasurement.ts ***!
    \*********************************************/

  /*! exports provided: MonsterMeasurement */

  /***/
  function srcAppModelMonsterMeasurementTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonsterMeasurement", function () {
      return MonsterMeasurement;
    });

    var MonsterMeasurement =
    /*#__PURE__*/
    function () {
      function MonsterMeasurement(id, specific_second_of_communication, request_timestamp, response_time_in_millis) {
        _classCallCheck(this, MonsterMeasurement);

        this._id = id;
        this._specific_second_of_communication = specific_second_of_communication;
        this._request_timestamp = request_timestamp;
        this._response_time_in_millis = response_time_in_millis;
      }

      _createClass(MonsterMeasurement, [{
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value;
        }
      }, {
        key: "specific_second_of_communication",
        get: function get() {
          return this._specific_second_of_communication;
        },
        set: function set(value) {
          this._specific_second_of_communication = value;
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
        key: "response_time_in_millis",
        get: function get() {
          return this._response_time_in_millis;
        },
        set: function set(value) {
          this._response_time_in_millis = value;
        }
      }]);

      return MonsterMeasurement;
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
    "./node_modules/phaser/dist/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

    var Player =
    /*#__PURE__*/
    function (_phaser__WEBPACK_IMPO) {
      _inherits(Player, _phaser__WEBPACK_IMPO);

      var _super3 = _createSuper(Player);

      function Player(scene, x, y, texture, score, version) {
        var _this7;

        _classCallCheck(this, Player);

        _this7 = _super3.call(this, scene, x, y, texture); // Dodanie gracza do sceny (zeby w ogole byl widoczny)

        scene.add.existing(_assertThisInitialized(_this7)); // Dodanie gracza do fizyki co pozwala na ustawianie interakcji

        scene.physics.add.existing(_assertThisInitialized(_this7)); // Dodanie kolidera na graczu oraz warstwie

        scene.physics.add.collider(_assertThisInitialized(_this7), scene.backgroundLayer); // scene.anims.play('myUp');

        _this7._score = score;
        _this7._version = version;
        return _this7;
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
  "./src/app/scene/main-scene.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/scene/main-scene.component.ts ***!
    \***********************************************/

  /*! exports provided: MainSceneComponent */

  /***/
  function srcAppSceneMainSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/phaser/dist/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _model_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/Player */
    "./src/app/model/Player.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _communication_Communicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../communication/Communicator */
    "./src/app/communication/Communicator.ts");
    /* harmony import */


    var _communication_Direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../communication/Direction */
    "./src/app/communication/Direction.ts");
    /* harmony import */


    var _communication_SocketClientState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../communication/SocketClientState */
    "./src/app/communication/SocketClientState.ts");
    /* harmony import */


    var _model_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../model/Request */
    "./src/app/model/Request.ts");
    /* harmony import */


    var _communication_simulation_data_AdditionalData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../communication/simulation/data/AdditionalData */
    "./src/app/communication/simulation/data/AdditionalData.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _downloader_download_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../downloader/download.service */
    "./src/app/downloader/download.service.ts");
    /* harmony import */


    var _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../cache/request-cache.service */
    "./src/app/cache/request-cache.service.ts");

    var MainSceneComponent =
    /*#__PURE__*/
    function (_phaser__WEBPACK_IMPO2) {
      _inherits(MainSceneComponent, _phaser__WEBPACK_IMPO2);

      var _super4 = _createSuper(MainSceneComponent);

      function MainSceneComponent(websocketService, router, renderer, downloadService, requestCache) {
        var _this8;

        _classCallCheck(this, MainSceneComponent);

        _this8 = _super4.call(this, {
          key: 'main'
        });
        _this8.websocketService = websocketService;
        _this8.router = router;
        _this8.renderer = renderer;
        _this8.downloadService = downloadService;
        _this8.requestCache = requestCache; // Game objects

        _this8.players = new Map();
        _this8.monsters = new Map();
        _this8.rank = new Array(); // Sending objects

        _this8.startSendingPlayerPosition = false;
        _this8.counterRequest = 0;
        _this8.scoreRanking = new Map();

        if (_this8.router.getCurrentNavigation().extras.state) {
          _this8.myPlayerName = _this8.router.getCurrentNavigation().extras.state.nick;
          _this8.SENDING_SPEED = _this8.router.getCurrentNavigation().extras.state.speed;
          _this8.websocketService.myNickname = _this8.myPlayerName;
          _this8.websocketService.serverUrl = _this8.router.getCurrentNavigation().extras.state.serverUrl;
          _this8.websocketService.formatter = _this8.router.getCurrentNavigation().extras.state.formatter;
          _this8.numberOfAdditionalObjectsPerSecond = Number(_this8.router.getCurrentNavigation().extras.state.additionalObjects);
          _this8.arrayWithAdditionalData = new Array(Number(_this8.router.getCurrentNavigation().extras.state.additionalObjects));
        } else {
          _this8.router.navigate(['home']);
        }

        return _this8;
      }

      _createClass(MainSceneComponent, [{
        key: "startGame",
        value: function startGame() {
          var _this9 = this;

          this.websocketService.initializeConnection(); // for (let i = 0; i < this.arrayWithAdditionalData.length; i++) {
          //     this.arrayWithAdditionalData[i] = new AdditionalData(this.getRandomInt(20000, 99999), this.getRandomInt(20000, 99999), this.getRandomInt(20000, 99999),
          //         this.randomString(20, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
          // }

          this.stateSubscription = this.websocketService.getState().subscribe(function (state) {
            if (state === _communication_SocketClientState__WEBPACK_IMPORTED_MODULE_6__["SocketClientState"].CONNECTED) {
              _this9.ifJoinToGameSubscription = _this9.websocketService.getIfJoinGame().subscribe(function (currentCoinPosition) {
                if (currentCoinPosition.length > 0) {
                  var _iterator = _createForOfIteratorHelper(currentCoinPosition),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var coinPosition = _step.value;

                      _this9.coins.create(coinPosition.positionX * 32 + 16, coinPosition.positionY * 32 - 16, "coin", null, true, true);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _this9.websocketService.addPlayer(_this9.myPlayerName);
                } else if (currentCoinPosition.length === 0) {
                  document.getElementsByTagName('canvas').item(0).remove();

                  _this9.router.navigate(['home'], {
                    state: {
                      nick: _this9.myPlayerName
                    }
                  });

                  console.error('Juz taki nick istnieje nie mozna dolaczyc!');
                }
              });

              _this9.websocketService.joinToGame(_this9.myPlayerName);

              console.error('Nawiazalem polaczenie websocket i dodalem uzytkownika!');
            } else if (state === _communication_SocketClientState__WEBPACK_IMPORTED_MODULE_6__["SocketClientState"].ERROR) {
              _this9.notifyAboutError('Błąd: Brak połaczenia z serwerem');
            } else {
              console.error('Probuje nawiazac polaczenie!');
            }
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this10 = this;

          this.startGame();
          var updateTop3 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
          this.subscriptionUpdateTop3 = updateTop3.subscribe(function () {
            _this10.checkRanking();
          }); // Jeszcze trzeba zaimplementowac

          this.coinToGetSubscription = this.websocketService.getCoinToGet().subscribe(function (coinToCollect) {});
          this.updateScoreSubscription = this.websocketService.getUpdateScore().subscribe(function (myScore) {
            _this10.players.get(_this10.myPlayerName).score = myScore;

            _this10.yourScore.setText(_this10.myPlayerName + " score: " + myScore);
          });
          this.refreshCoinsSubscription = this.websocketService.getRefreshCoins().subscribe(function () {
            _this10.coinLayer.forEach(function (object) {
              var obj = _this10.coins.create(object.x + 16, object.y - 16, "coin");

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
            _this10.switchScene();
          });
          this.downloadButton = this.add.image(this.game.canvas.width - 208, 48, 'download-button');
          this.downloadButton.setInteractive();
          this.downloadButton.on('pointerup', function () {
            _this10.downloadService.downloadResponseMeasurements();
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
          var _this11 = this;

          this.playersToAddSubscription = this.websocketService.getPlayersToAdd().subscribe(function (playersToAdd) {
            playersToAdd.sort(function (a, b) {
              return b.score - a.score;
            });
            _this11.rank.length = 4;

            _this11.scoreNumber1.setText("NO_ONE");

            _this11.scoreNumber2.setText("NO_ONE");

            _this11.scoreNumber3.setText("NO_ONE");

            var counter = 0;

            var _iterator2 = _createForOfIteratorHelper(playersToAdd),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var player = _step2.value;
                counter++;

                if (counter < 4) {
                  _this11.rank[counter - 1] = player;

                  _this11.setScoreText(counter, player);
                }

                if (!_this11.players.has(player.nickname)) {
                  if (player.nickname !== _this11.myPlayerName) {
                    _this11.players.set(player.nickname, new _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](_this11, player.positionX, player.positionY, 'other-player', player.score, -1));

                    console.error('Dodaje gracza ' + player.nickname);

                    _this11.players.get(player.nickname).anims.play('enemyAnim');
                  } else {
                    _this11.players.set(player.nickname, new _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](_this11, player.positionX, player.positionY, 'my-player', player.score, -1));

                    _this11.startSendingPlayerPosition = true;
                    _this11.yourScore = _this11.add.text(32, 32, _this11.myPlayerName + " score: " + player.score, {
                      font: "30px Arial",
                      fill: "#ff0044",
                      align: "center"
                    }); // Uruchomienie animacji wczesniej przygotowanej

                    _this11.players.get(player.nickname).anims.play('myAnim');

                    _this11.requestCache.lastCorrectRequest = new _model_Request__WEBPACK_IMPORTED_MODULE_7__["Request"](0, player.positionX, player.positionY);
                    _this11.requestCache.timeForStartCommunication = new Date().getTime();

                    _this11.sendPlayerPosition();
                  }

                  _this11.physics.add.overlap(_this11.players.get(player.nickname), _this11.coins, _this11.collectCoin, null, _this11);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
          this.playerToRemoveSubscription = this.websocketService.getPlayerToRemove().subscribe(function (playerToRemove) {
            _this11.rank = _this11.rank.filter(function (item) {
              return item.nickname !== playerToRemove.nickname;
            });

            if (playerToRemove.nickname === _this11.myPlayerName) {
              _this11.cleanAndBackToHomePage();
            }

            _this11.players.get(playerToRemove.nickname).destroy(true);

            _this11.players["delete"](playerToRemove.nickname);
          });
          this.playerToUpdateSubscription = this.websocketService.getPlayerToUpdate().subscribe(function (player) {
            var currentPlayer = _this11.players.get(player.nickname);

            if (currentPlayer) {
              _this11.changeAnimationFrameForOtherPlayers(player, currentPlayer);

              if (currentPlayer.version <= player.version) {
                currentPlayer.x = player.positionX;
                currentPlayer.y = player.positionY;
                currentPlayer.score = player.score;
                currentPlayer.version = player.version;
              }
            }
          });
        }
      }, {
        key: "sendPlayerPosition",
        value: function sendPlayerPosition() {
          var _this12 = this;

          // const player = this.players.get(this.myPlayerName);
          // this.lastX = player.x;
          // this.lastY = player.y;
          // this.lastAngle = player.angle;
          var supplier = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
          supplier.subscribe(function () {
            for (var i = 0; i < _this12.numberOfAdditionalObjectsPerSecond; i++) {
              _this12.arrayWithAdditionalData.push(new _communication_simulation_data_AdditionalData__WEBPACK_IMPORTED_MODULE_8__["AdditionalData"](_this12.getRandomInt(20000, 99999), _this12.getRandomInt(20000, 99999), _this12.getRandomInt(20000, 99999), _this12.randomString(20, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')));
            }
          });
          this.positionSender = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.SENDING_SPEED);
          this.positionSenderSubscription = this.positionSender.subscribe(function () {
            var player = _this12.players.get(_this12.myPlayerName); // if ((this.lastX !== player.x) ||
            //     (this.lastY !== player.y) ||
            //     (this.lastAngle !== player.angle)) {
            //
            //     this.lastX = player.x;
            //     this.lastY = player.y;
            //     this.lastAngle = player.angle;


            _this12.requestCache.addRequest(++_this12.counterRequest, player.x, player.y);

            _this12.websocketService.sendPosition({
              "nickname": _this12.myPlayerName,
              "positionX": player.x,
              "positionY": player.y,
              "score": player.score,
              "stepDirection": _this12.getDirection(),
              "version": _this12.counterRequest,
              "additionalData": _this12.arrayWithAdditionalData
            }); // }

          });
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
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
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
          var _this13 = this;

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
            _this13.setScoreText(counter, element);

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
          var _this14 = this;

          this.monsterToUpdateSubscription = this.websocketService.getMonsterToUpdate().subscribe(function (monsterToUpdate) {
            if (_this14.monsters.has(monsterToUpdate.id)) {
              _this14.monsters.get(monsterToUpdate.id).x = monsterToUpdate.positionX;
              _this14.monsters.get(monsterToUpdate.id).y = monsterToUpdate.positionY;
            } else {
              _this14.monsters.set(monsterToUpdate.id, _this14.physics.add.sprite(monsterToUpdate.positionX, monsterToUpdate.positionY, 'monster'));

              _this14.monsters.get(monsterToUpdate.id).anims.play('animation');
            }
          });
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "createAnimationsBySpriteKey",
        value: function createAnimationsBySpriteKey(figureKey, animKey) {
          this.anims.create({
            key: animKey,
            frames: this.anims.generateFrameNumbers(figureKey, {
              frames: [3, 1]
            }),
            frameRate: 5,
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
              currentPlayer.setAngle(0);
            }

            if (currentPlayer.y > playerToUpdate.positionY) {
              currentPlayer.setAngle(180);
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
        key: "switchScene",
        ////////////////////////////////////            Cleaning operations             ////////////////////////////////////////////////
        value: function switchScene() {
          this.cleanAndBackToHomePage();
        }
      }, {
        key: "cleanAndBackToHomePage",
        value: function cleanAndBackToHomePage() {
          this.startSendingPlayerPosition = false;
          this.myPlayerName = '';
          this.router.navigate(['home'], {});
        }
      }, {
        key: "notifyAboutError",
        value: function notifyAboutError(errorMessage) {
          this.router.navigate(['home'], {
            state: {
              message: errorMessage
            }
          });
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
            this.websocketService.disconnect();
          }

          if (this.game) {
            this.game.destroy(true);
            this.game.scene.remove('main');
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
      return new (t || MainSceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_communication_Communicator__WEBPACK_IMPORTED_MODULE_4__["Communicator"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_downloader_download_service__WEBPACK_IMPORTED_MODULE_11__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cache_request_cache_service__WEBPACK_IMPORTED_MODULE_12__["RequestCacheService"]));
    };

    MainSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainSceneComponent,
      selectors: [["app-main-scene"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _communication_Communicator__WEBPACK_IMPORTED_MODULE_4__["Communicator"],
        useClass: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serviceToCommunication
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      template: function MainSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjZW5lL21haW4tc2NlbmUuY29tcG9uZW50LmNzcyJ9 */"]
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
            useClass: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serviceToCommunication
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _downloader_download_service__WEBPACK_IMPORTED_MODULE_11__["DownloadService"]
        }, {
          type: _cache_request_cache_service__WEBPACK_IMPORTED_MODULE_12__["RequestCacheService"]
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


    var _app_communication_http2_http2_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../app/communication/http2/http2.service */
    "./src/app/communication/http2/http2.service.ts");
    /* harmony import */


    var _app_communication_format_JsonFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app/communication/format/JsonFormatter */
    "./src/app/communication/format/JsonFormatter.ts");

    var environment = {
      production: false,
      serviceToCommunication: _app_communication_http2_http2_service__WEBPACK_IMPORTED_MODULE_0__["Http2Service"],
      formatter: new _app_communication_format_JsonFormatter__WEBPACK_IMPORTED_MODULE_1__["JsonFormatter"](),
      versionName: 'HTTP2 + SSE',
      contentFormat: 'json',
      vpsServerUrl: 'https://83.229.84.77:8080',
      localServerUrl: 'https://localhost:8080'
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