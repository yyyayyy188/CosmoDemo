import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
  /** Module Parameters */
  params: Params | undefined;
  /** Hot routes that are configured on genesis */
  tokenPairs: TokenPairArbRoutes[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateAmino {
  /** Module Parameters */
  params?: ParamsAmino | undefined;
  /** Hot routes that are configured on genesis */
  token_pairs?: TokenPairArbRoutesAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/protorev/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType | undefined;
  token_pairs: TokenPairArbRoutesSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairs: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
  aminoType: "osmosis/protorev/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.tokenPairs.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
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
      tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.tokenPairs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.token_pairs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPairs = object.token_pairs?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/protorev/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};