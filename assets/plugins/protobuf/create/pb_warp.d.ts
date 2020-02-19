import * as $protobuf from "protobufjs";
/** Properties of a warp. */
export interface Iwarp {

    /** warp proto */
    proto?: (number|null);

    /** warp data */
    data?: (Uint8Array|null);
}

/** Represents a warp. */
export class warp implements Iwarp {

    /**
     * Constructs a new warp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iwarp);

    /** warp proto. */
    public proto: number;

    /** warp data. */
    public data: Uint8Array;

    /**
     * Creates a new warp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns warp instance
     */
    public static create(properties?: Iwarp): warp;

    /**
     * Encodes the specified warp message. Does not implicitly {@link warp.verify|verify} messages.
     * @param message warp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iwarp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified warp message, length delimited. Does not implicitly {@link warp.verify|verify} messages.
     * @param message warp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iwarp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a warp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): warp;

    /**
     * Decodes a warp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): warp;

    /**
     * Verifies a warp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a warp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns warp
     */
    public static fromObject(object: [ 'object' ].<string, any>): warp;

    /**
     * Creates a plain object from a warp message. Also converts values to other types if specified.
     * @param message warp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: warp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this warp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}
