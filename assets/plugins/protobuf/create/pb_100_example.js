/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.c10000 = (function() {

    /**
     * Properties of a c10000.
     * @exports Ic10000
     * @interface Ic10000
     */

    /**
     * Constructs a new c10000.
     * @exports c10000
     * @classdesc Represents a c10000.
     * @implements Ic10000
     * @constructor
     * @param {Ic10000=} [properties] Properties to set
     */
    function c10000(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new c10000 instance using the specified properties.
     * @function create
     * @memberof c10000
     * @static
     * @param {Ic10000=} [properties] Properties to set
     * @returns {c10000} c10000 instance
     */
    c10000.create = function create(properties) {
        return new c10000(properties);
    };

    /**
     * Encodes the specified c10000 message. Does not implicitly {@link c10000.verify|verify} messages.
     * @function encode
     * @memberof c10000
     * @static
     * @param {Ic10000} message c10000 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    c10000.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified c10000 message, length delimited. Does not implicitly {@link c10000.verify|verify} messages.
     * @function encodeDelimited
     * @memberof c10000
     * @static
     * @param {Ic10000} message c10000 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    c10000.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a c10000 message from the specified reader or buffer.
     * @function decode
     * @memberof c10000
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {c10000} c10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    c10000.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.c10000();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a c10000 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof c10000
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {c10000} c10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    c10000.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a c10000 message.
     * @function verify
     * @memberof c10000
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    c10000.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a c10000 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof c10000
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {c10000} c10000
     */
    c10000.fromObject = function fromObject(object) {
        if (object instanceof $root.c10000)
            return object;
        return new $root.c10000();
    };

    /**
     * Creates a plain object from a c10000 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof c10000
     * @static
     * @param {c10000} message c10000
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    c10000.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this c10000 to JSON.
     * @function toJSON
     * @memberof c10000
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    c10000.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return c10000;
})();

$root.s10000 = (function() {

    /**
     * Properties of a s10000.
     * @exports Is10000
     * @interface Is10000
     * @property {number|null} [time] s10000 time
     */

    /**
     * Constructs a new s10000.
     * @exports s10000
     * @classdesc Represents a s10000.
     * @implements Is10000
     * @constructor
     * @param {Is10000=} [properties] Properties to set
     */
    function s10000(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * s10000 time.
     * @member {number} time
     * @memberof s10000
     * @instance
     */
    s10000.prototype.time = 0;

    /**
     * Creates a new s10000 instance using the specified properties.
     * @function create
     * @memberof s10000
     * @static
     * @param {Is10000=} [properties] Properties to set
     * @returns {s10000} s10000 instance
     */
    s10000.create = function create(properties) {
        return new s10000(properties);
    };

    /**
     * Encodes the specified s10000 message. Does not implicitly {@link s10000.verify|verify} messages.
     * @function encode
     * @memberof s10000
     * @static
     * @param {Is10000} message s10000 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    s10000.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.time);
        return writer;
    };

    /**
     * Encodes the specified s10000 message, length delimited. Does not implicitly {@link s10000.verify|verify} messages.
     * @function encodeDelimited
     * @memberof s10000
     * @static
     * @param {Is10000} message s10000 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    s10000.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a s10000 message from the specified reader or buffer.
     * @function decode
     * @memberof s10000
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {s10000} s10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    s10000.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.s10000();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.time = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a s10000 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof s10000
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {s10000} s10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    s10000.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a s10000 message.
     * @function verify
     * @memberof s10000
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    s10000.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        return null;
    };

    /**
     * Creates a s10000 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof s10000
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {s10000} s10000
     */
    s10000.fromObject = function fromObject(object) {
        if (object instanceof $root.s10000)
            return object;
        var message = new $root.s10000();
        if (object.time != null)
            message.time = object.time >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a s10000 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof s10000
     * @static
     * @param {s10000} message s10000
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    s10000.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.time = 0;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        return object;
    };

    /**
     * Converts this s10000 to JSON.
     * @function toJSON
     * @memberof s10000
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    s10000.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return s10000;
})();

module.exports = $root;
