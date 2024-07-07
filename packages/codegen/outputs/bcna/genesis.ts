import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Bitcannaid, BitcannaidAmino, BitcannaidSDKType } from "./bitcannaid";
import { Supplychain, SupplychainAmino, SupplychainSDKType } from "./supplychain";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial } from "../helpers";
import { JsonSafe } from "../json-safe";
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  bitcannaidList: Bitcannaid[];
  bitcannaidCount: bigint;
  supplychainList: Supplychain[];
  supplychainCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino | undefined;
  bitcannaidList?: BitcannaidAmino[];
  bitcannaidCount?: string;
  supplychainList?: SupplychainAmino[];
  supplychainCount?: string;
}
export interface GenesisStateAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType | undefined;
  bitcannaidList: BitcannaidSDKType[];
  bitcannaidCount: bigint;
  supplychainList: SupplychainSDKType[];
  supplychainCount: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    bitcannaidList: [],
    bitcannaidCount: BigInt(0),
    supplychainList: [],
    supplychainCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bitcannaidList) {
      Bitcannaid.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.bitcannaidCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.bitcannaidCount);
    }
    for (const v of message.supplychainList) {
      Supplychain.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.supplychainCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.supplychainCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.bitcannaidList.push(Bitcannaid.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bitcannaidCount = reader.uint64();
          break;
        case 4:
          message.supplychainList.push(Supplychain.decode(reader, reader.uint32()));
          break;
        case 5:
          message.supplychainCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bitcannaidList: Array.isArray(object?.bitcannaidList) ? object.bitcannaidList.map((e: any) => Bitcannaid.fromJSON(e)) : [],
      bitcannaidCount: isSet(object.bitcannaidCount) ? BigInt(object.bitcannaidCount.toString()) : BigInt(0),
      supplychainList: Array.isArray(object?.supplychainList) ? object.supplychainList.map((e: any) => Supplychain.fromJSON(e)) : [],
      supplychainCount: isSet(object.supplychainCount) ? BigInt(object.supplychainCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.bitcannaidList) {
      obj.bitcannaidList = message.bitcannaidList.map(e => e ? Bitcannaid.toJSON(e) : undefined);
    } else {
      obj.bitcannaidList = [];
    }
    message.bitcannaidCount !== undefined && (obj.bitcannaidCount = (message.bitcannaidCount || BigInt(0)).toString());
    if (message.supplychainList) {
      obj.supplychainList = message.supplychainList.map(e => e ? Supplychain.toJSON(e) : undefined);
    } else {
      obj.supplychainList = [];
    }
    message.supplychainCount !== undefined && (obj.supplychainCount = (message.supplychainCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bitcannaidList = object.bitcannaidList?.map(e => Bitcannaid.fromPartial(e)) || [];
    message.bitcannaidCount = object.bitcannaidCount !== undefined && object.bitcannaidCount !== null ? BigInt(object.bitcannaidCount.toString()) : BigInt(0);
    message.supplychainList = object.supplychainList?.map(e => Supplychain.fromPartial(e)) || [];
    message.supplychainCount = object.supplychainCount !== undefined && object.supplychainCount !== null ? BigInt(object.supplychainCount.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      bitcannaidList: Array.isArray(object?.bitcannaidList) ? object.bitcannaidList.map((e: any) => Bitcannaid.fromSDK(e)) : [],
      bitcannaidCount: object?.bitcannaidCount,
      supplychainList: Array.isArray(object?.supplychainList) ? object.supplychainList.map((e: any) => Supplychain.fromSDK(e)) : [],
      supplychainCount: object?.supplychainCount
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.bitcannaidList) {
      obj.bitcannaidList = message.bitcannaidList.map(e => e ? Bitcannaid.toSDK(e) : undefined);
    } else {
      obj.bitcannaidList = [];
    }
    obj.bitcannaidCount = message.bitcannaidCount;
    if (message.supplychainList) {
      obj.supplychainList = message.supplychainList.map(e => e ? Supplychain.toSDK(e) : undefined);
    } else {
      obj.supplychainList = [];
    }
    obj.supplychainCount = message.supplychainCount;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.bitcannaidList = object.bitcannaidList?.map(e => Bitcannaid.fromAmino(e)) || [];
    if (object.bitcannaidCount !== undefined && object.bitcannaidCount !== null) {
      message.bitcannaidCount = BigInt(object.bitcannaidCount);
    }
    message.supplychainList = object.supplychainList?.map(e => Supplychain.fromAmino(e)) || [];
    if (object.supplychainCount !== undefined && object.supplychainCount !== null) {
      message.supplychainCount = BigInt(object.supplychainCount);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.bitcannaidList) {
      obj.bitcannaidList = message.bitcannaidList.map(e => e ? Bitcannaid.toAmino(e) : undefined);
    } else {
      obj.bitcannaidList = message.bitcannaidList;
    }
    obj.bitcannaidCount = message.bitcannaidCount !== BigInt(0) ? message.bitcannaidCount.toString() : undefined;
    if (message.supplychainList) {
      obj.supplychainList = message.supplychainList.map(e => e ? Supplychain.toAmino(e) : undefined);
    } else {
      obj.supplychainList = message.supplychainList;
    }
    obj.supplychainCount = message.supplychainCount !== BigInt(0) ? message.supplychainCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};