import * as $protobuf from "protobufjs";
/** Properties of a c10000. */
export interface Ic10000 {
}

/** Represents a c10000. */
export class c10000 implements Ic10000 {

    /**
     * Constructs a new c10000.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ic10000);

    /**
     * Creates a new c10000 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns c10000 instance
     */
    public static create(properties?: Ic10000): c10000;

    /**
     * Encodes the specified c10000 message. Does not implicitly {@link c10000.verify|verify} messages.
     * @param message c10000 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ic10000, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified c10000 message, length delimited. Does not implicitly {@link c10000.verify|verify} messages.
     * @param message c10000 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ic10000, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a c10000 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns c10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): c10000;

    /**
     * Decodes a c10000 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns c10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): c10000;

    /**
     * Verifies a c10000 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a c10000 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns c10000
     */
    public static fromObject(object: [ 'object' ].<string, any>): c10000;

    /**
     * Creates a plain object from a c10000 message. Also converts values to other types if specified.
     * @param message c10000
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: c10000, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this c10000 to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a s10000. */
export interface Is10000 {

    /** s10000 time */
    time?: (number|null);
}

/** Represents a s10000. */
export class s10000 implements Is10000 {

    /**
     * Constructs a new s10000.
     * @param [properties] Properties to set
     */
    constructor(properties?: Is10000);

    /** s10000 time. */
    public time: number;

    /**
     * Creates a new s10000 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns s10000 instance
     */
    public static create(properties?: Is10000): s10000;

    /**
     * Encodes the specified s10000 message. Does not implicitly {@link s10000.verify|verify} messages.
     * @param message s10000 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Is10000, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified s10000 message, length delimited. Does not implicitly {@link s10000.verify|verify} messages.
     * @param message s10000 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Is10000, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a s10000 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns s10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): s10000;

    /**
     * Decodes a s10000 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns s10000
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): s10000;

    /**
     * Verifies a s10000 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a s10000 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns s10000
     */
    public static fromObject(object: [ 'object' ].<string, any>): s10000;

    /**
     * Creates a plain object from a s10000 message. Also converts values to other types if specified.
     * @param message s10000
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: s10000, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this s10000 to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}
