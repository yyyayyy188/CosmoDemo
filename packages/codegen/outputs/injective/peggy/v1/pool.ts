import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
/** IDSet represents a set of IDs */
export interface IDSet {
  ids: bigint[];
}
export interface IDSetProtoMsg {
  typeUrl: "/injective.peggy.v1.IDSet";
  value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
  ids?: string[];
}
export interface IDSetAminoMsg {
  type: "/injective.peggy.v1.IDSet";
  value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
  ids: bigint[];
}
export interface BatchFees {
  token: string;
  totalFees: string;
}
export interface BatchFeesProtoMsg {
  typeUrl: "/injective.peggy.v1.BatchFees";
  value: Uint8Array;
}
export interface BatchFeesAmino {
  token?: string;
  total_fees?: string;
}
export interface BatchFeesAminoMsg {
  type: "/injective.peggy.v1.BatchFees";
  value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
  token: string;
  total_fees: string;
}
function createBaseIDSet(): IDSet {
  return {
    ids: []
  };
}
export const IDSet = {
  typeUrl: "/injective.peggy.v1.IDSet",
  encode(message: IDSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IDSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: IDSet): JsonSafe<IDSet> {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<IDSet>): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: IDSetSDKType): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => e) : []
    };
  },
  toSDK(message: IDSet): IDSetSDKType {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAmino(object: IDSetAmino): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: IDSet): IDSetAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: IDSetAminoMsg): IDSet {
    return IDSet.fromAmino(object.value);
  },
  fromProtoMsg(message: IDSetProtoMsg): IDSet {
    return IDSet.decode(message.value);
  },
  toProto(message: IDSet): Uint8Array {
    return IDSet.encode(message).finish();
  },
  toProtoMsg(message: IDSet): IDSetProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.IDSet",
      value: IDSet.encode(message).finish()
    };
  }
};
function createBaseBatchFees(): BatchFees {
  return {
    token: "",
    totalFees: ""
  };
}
export const BatchFees = {
  typeUrl: "/injective.peggy.v1.BatchFees",
  encode(message: BatchFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchFees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.totalFees = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchFees {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      totalFees: isSet(object.totalFees) ? String(object.totalFees) : ""
    };
  },
  toJSON(message: BatchFees): JsonSafe<BatchFees> {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.totalFees !== undefined && (obj.totalFees = message.totalFees);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchFees>): BatchFees {
    const message = createBaseBatchFees();
    message.token = object.token ?? "";
    message.totalFees = object.totalFees ?? "";
    return message;
  },
  fromSDK(object: BatchFeesSDKType): BatchFees {
    return {
      token: object?.token,
      totalFees: object?.total_fees
    };
  },
  toSDK(message: BatchFees): BatchFeesSDKType {
    const obj: any = {};
    obj.token = message.token;
    obj.total_fees = message.totalFees;
    return obj;
  },
  fromAmino(object: BatchFeesAmino): BatchFees {
    const message = createBaseBatchFees();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.total_fees !== undefined && object.total_fees !== null) {
      message.totalFees = object.total_fees;
    }
    return message;
  },
  toAmino(message: BatchFees): BatchFeesAmino {
    const obj: any = {};
    obj.token = message.token === "" ? undefined : message.token;
    obj.total_fees = message.totalFees === "" ? undefined : message.totalFees;
    return obj;
  },
  fromAminoMsg(object: BatchFeesAminoMsg): BatchFees {
    return BatchFees.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchFeesProtoMsg): BatchFees {
    return BatchFees.decode(message.value);
  },
  toProto(message: BatchFees): Uint8Array {
    return BatchFees.encode(message).finish();
  },
  toProtoMsg(message: BatchFees): BatchFeesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.BatchFees",
      value: BatchFees.encode(message).finish()
    };
  }
};