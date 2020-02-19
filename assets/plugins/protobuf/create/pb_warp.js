/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.warp = (function() {

    /**
     * Properties of a warp.
     * @exports Iwarp
     * @interface Iwarp
     * @property {number|null} [proto] warp proto
     * @property {Uint8Array|null} [data] warp data
     */

    /**
     * Constructs a new warp.
     * @exports warp
     * @classdesc Represents a warp.
     * @implements Iwarp
     * @constructor
     * @param {Iwarp=} [properties] Properties to set
     */
    function warp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * warp proto.
     * @member {number} proto
     * @memberof warp
     * @instance
     */
    warp.prototype.proto = 0;

    /**
     * warp data.
     * @member {Uint8Array} data
     * @memberof warp
     * @instance
     */
    warp.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new warp instance using the specified properties.
     * @function create
     * @memberof warp
     * @static
     * @param {Iwarp=} [properties] Properties to set
     * @returns {warp} warp instance
     */
    warp.create = function create(properties) {
        return new warp(properties);
    };

    /**
     * Encodes the specified warp message. Does not implicitly {@link warp.verify|verify} messages.
     * @function encode
     * @memberof warp
     * @static
     * @param {Iwarp} message warp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    warp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.proto != null && message.hasOwnProperty("proto"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.proto);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified warp message, length delimited. Does not implicitly {@link warp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof warp
     * @static
     * @param {Iwarp} message warp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    warp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a warp message from the specified reader or buffer.
     * @function decode
     * @memberof warp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {warp} warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    warp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.warp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.proto = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a warp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof warp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {warp} warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    warp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a warp message.
     * @function verify
     * @memberof warp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    warp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.proto != null && message.hasOwnProperty("proto"))
            if (!$util.isInteger(message.proto))
                return "proto: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a warp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof warp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {warp} warp
     */
    warp.fromObject = function fromObject(object) {
        if (object instanceof $root.warp)
            return object;
        var message = new $root.warp();
        if (object.proto != null)
            message.proto = object.proto >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a warp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof warp
     * @static
     * @param {warp} message warp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    warp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.proto = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.proto != null && message.hasOwnProperty("proto"))
            object.proto = message.proto;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this warp to JSON.
     * @function toJSON
     * @memberof warp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    warp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return warp;
})();

module.exports = $root;
