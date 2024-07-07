import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface EventAddPair {
  id: bigint;
}
export interface EventAddPairProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.EventAddPair";
  value: Uint8Array;
}
export interface EventAddPairAmino {
  id?: string;
}
export interface EventAddPairAminoMsg {
  type: "/comdex.asset.v1beta1.EventAddPair";
  value: EventAddPairAmino;
}
export interface EventAddPairSDKType {
  id: bigint;
}
function createBaseEventAddPair(): EventAddPair {
  return {
    id: BigInt(0)
  };
}
export const EventAddPair = {
  typeUrl: "/comdex.asset.v1beta1.EventAddPair",
  encode(message: EventAddPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAddPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAddPair {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventAddPair): JsonSafe<EventAddPair> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventAddPair>): EventAddPair {
    const message = createBaseEventAddPair();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: EventAddPairSDKType): EventAddPair {
    return {
      id: object?.id
    };
  },
  toSDK(message: EventAddPair): EventAddPairSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: EventAddPairAmino): EventAddPair {
    const message = createBaseEventAddPair();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventAddPair): EventAddPairAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAddPairAminoMsg): EventAddPair {
    return EventAddPair.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddPairProtoMsg): EventAddPair {
    return EventAddPair.decode(message.value);
  },
  toProto(message: EventAddPair): Uint8Array {
    return EventAddPair.encode(message).finish();
  },
  toProtoMsg(message: EventAddPair): EventAddPairProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.EventAddPair",
      value: EventAddPair.encode(message).finish()
    };
  }
};