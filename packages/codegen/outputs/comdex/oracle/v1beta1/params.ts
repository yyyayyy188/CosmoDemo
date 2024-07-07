import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface IBCParams {
  port: string;
  version: string;
}
export interface IBCParamsProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.IBCParams";
  value: Uint8Array;
}
export interface IBCParamsAmino {
  port?: string;
  version?: string;
}
export interface IBCParamsAminoMsg {
  type: "/comdex.oracle.v1beta1.IBCParams";
  value: IBCParamsAmino;
}
export interface IBCParamsSDKType {
  port: string;
  version: string;
}
export interface OracleParams {
  askCount: bigint;
  minCount: bigint;
  multiplier: bigint;
}
export interface OracleParamsProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.OracleParams";
  value: Uint8Array;
}
export interface OracleParamsAmino {
  ask_count?: string;
  min_count?: string;
  multiplier?: string;
}
export interface OracleParamsAminoMsg {
  type: "/comdex.oracle.v1beta1.OracleParams";
  value: OracleParamsAmino;
}
export interface OracleParamsSDKType {
  ask_count: bigint;
  min_count: bigint;
  multiplier: bigint;
}
export interface Params {
  ibc: IBCParams | undefined;
  oracle: OracleParams | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  ibc?: IBCParamsAmino | undefined;
  oracle?: OracleParamsAmino | undefined;
}
export interface ParamsAminoMsg {
  type: "/comdex.oracle.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  ibc: IBCParamsSDKType | undefined;
  oracle: OracleParamsSDKType | undefined;
}
function createBaseIBCParams(): IBCParams {
  return {
    port: "",
    version: ""
  };
}
export const IBCParams = {
  typeUrl: "/comdex.oracle.v1beta1.IBCParams",
  encode(message: IBCParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port !== "") {
      writer.uint32(10).string(message.port);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IBCParams {
    return {
      port: isSet(object.port) ? String(object.port) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message: IBCParams): JsonSafe<IBCParams> {
    const obj: any = {};
    message.port !== undefined && (obj.port = message.port);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
  fromPartial(object: DeepPartial<IBCParams>): IBCParams {
    const message = createBaseIBCParams();
    message.port = object.port ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromSDK(object: IBCParamsSDKType): IBCParams {
    return {
      port: object?.port,
      version: object?.version
    };
  },
  toSDK(message: IBCParams): IBCParamsSDKType {
    const obj: any = {};
    obj.port = message.port;
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: IBCParamsAmino): IBCParams {
    const message = createBaseIBCParams();
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: IBCParams): IBCParamsAmino {
    const obj: any = {};
    obj.port = message.port === "" ? undefined : message.port;
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: IBCParamsAminoMsg): IBCParams {
    return IBCParams.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCParamsProtoMsg): IBCParams {
    return IBCParams.decode(message.value);
  },
  toProto(message: IBCParams): Uint8Array {
    return IBCParams.encode(message).finish();
  },
  toProtoMsg(message: IBCParams): IBCParamsProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.IBCParams",
      value: IBCParams.encode(message).finish()
    };
  }
};
function createBaseOracleParams(): OracleParams {
  return {
    askCount: BigInt(0),
    minCount: BigInt(0),
    multiplier: BigInt(0)
  };
}
export const OracleParams = {
  typeUrl: "/comdex.oracle.v1beta1.OracleParams",
  encode(message: OracleParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.askCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.minCount);
    }
    if (message.multiplier !== BigInt(0)) {
      writer.uint32(24).uint64(message.multiplier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.askCount = reader.uint64();
          break;
        case 2:
          message.minCount = reader.uint64();
          break;
        case 3:
          message.multiplier = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OracleParams {
    return {
      askCount: isSet(object.askCount) ? BigInt(object.askCount.toString()) : BigInt(0),
      minCount: isSet(object.minCount) ? BigInt(object.minCount.toString()) : BigInt(0),
      multiplier: isSet(object.multiplier) ? BigInt(object.multiplier.toString()) : BigInt(0)
    };
  },
  toJSON(message: OracleParams): JsonSafe<OracleParams> {
    const obj: any = {};
    message.askCount !== undefined && (obj.askCount = (message.askCount || BigInt(0)).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || BigInt(0)).toString());
    message.multiplier !== undefined && (obj.multiplier = (message.multiplier || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? BigInt(object.multiplier.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: OracleParamsSDKType): OracleParams {
    return {
      askCount: object?.ask_count,
      minCount: object?.min_count,
      multiplier: object?.multiplier
    };
  },
  toSDK(message: OracleParams): OracleParamsSDKType {
    const obj: any = {};
    obj.ask_count = message.askCount;
    obj.min_count = message.minCount;
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAmino(object: OracleParamsAmino): OracleParams {
    const message = createBaseOracleParams();
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.askCount = BigInt(object.ask_count);
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = BigInt(object.multiplier);
    }
    return message;
  },
  toAmino(message: OracleParams): OracleParamsAmino {
    const obj: any = {};
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount.toString() : undefined;
    obj.multiplier = message.multiplier !== BigInt(0) ? message.multiplier.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OracleParamsAminoMsg): OracleParams {
    return OracleParams.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleParamsProtoMsg): OracleParams {
    return OracleParams.decode(message.value);
  },
  toProto(message: OracleParams): Uint8Array {
    return OracleParams.encode(message).finish();
  },
  toProtoMsg(message: OracleParams): OracleParamsProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.OracleParams",
      value: OracleParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    ibc: IBCParams.fromPartial({}),
    oracle: OracleParams.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/comdex.oracle.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibc !== undefined) {
      IBCParams.encode(message.ibc, writer.uint32(10).fork()).ldelim();
    }
    if (message.oracle !== undefined) {
      OracleParams.encode(message.oracle, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibc = IBCParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.oracle = OracleParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      ibc: isSet(object.ibc) ? IBCParams.fromJSON(object.ibc) : undefined,
      oracle: isSet(object.oracle) ? OracleParams.fromJSON(object.oracle) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.ibc !== undefined && (obj.ibc = message.ibc ? IBCParams.toJSON(message.ibc) : undefined);
    message.oracle !== undefined && (obj.oracle = message.oracle ? OracleParams.toJSON(message.oracle) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.ibc = object.ibc !== undefined && object.ibc !== null ? IBCParams.fromPartial(object.ibc) : undefined;
    message.oracle = object.oracle !== undefined && object.oracle !== null ? OracleParams.fromPartial(object.oracle) : undefined;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      ibc: object.ibc ? IBCParams.fromSDK(object.ibc) : undefined,
      oracle: object.oracle ? OracleParams.fromSDK(object.oracle) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.ibc !== undefined && (obj.ibc = message.ibc ? IBCParams.toSDK(message.ibc) : undefined);
    message.oracle !== undefined && (obj.oracle = message.oracle ? OracleParams.toSDK(message.oracle) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.ibc !== undefined && object.ibc !== null) {
      message.ibc = IBCParams.fromAmino(object.ibc);
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = OracleParams.fromAmino(object.oracle);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ibc = message.ibc ? IBCParams.toAmino(message.ibc) : undefined;
    obj.oracle = message.oracle ? OracleParams.toAmino(message.oracle) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};