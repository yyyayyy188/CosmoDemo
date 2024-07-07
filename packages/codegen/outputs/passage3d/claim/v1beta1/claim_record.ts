import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** address of claim user */
  address: string;
  /** claimable amount for claim actions */
  claimableAmount: Coin[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/passage3d.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
  /** address of claim user */
  address?: string;
  /** claimable amount for claim actions */
  claimable_amount?: CoinAmino[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed?: boolean[];
}
export interface ClaimRecordAminoMsg {
  type: "/passage3d.claim.v1beta1.ClaimRecord";
  value: ClaimRecordAmino;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  address: string;
  claimable_amount: CoinSDKType[];
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    claimableAmount: [],
    actionCompleted: []
  };
}
export const ClaimRecord = {
  typeUrl: "/passage3d.claim.v1beta1.ClaimRecord",
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.claimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.claimableAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      claimableAmount: Array.isArray(object?.claimableAmount) ? object.claimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
      actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  toJSON(message: ClaimRecord): JsonSafe<ClaimRecord> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.claimableAmount) {
      obj.claimableAmount = message.claimableAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimableAmount = [];
    }
    if (message.actionCompleted) {
      obj.actionCompleted = message.actionCompleted.map(e => e);
    } else {
      obj.actionCompleted = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.claimableAmount = object.claimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ClaimRecordSDKType): ClaimRecord {
    return {
      address: object?.address,
      claimableAmount: Array.isArray(object?.claimable_amount) ? object.claimable_amount.map((e: any) => Coin.fromSDK(e)) : [],
      actionCompleted: Array.isArray(object?.action_completed) ? object.action_completed.map((e: any) => e) : []
    };
  },
  toSDK(message: ClaimRecord): ClaimRecordSDKType {
    const obj: any = {};
    obj.address = message.address;
    if (message.claimableAmount) {
      obj.claimable_amount = message.claimableAmount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.claimable_amount = [];
    }
    if (message.actionCompleted) {
      obj.action_completed = message.actionCompleted.map(e => e);
    } else {
      obj.action_completed = [];
    }
    return obj;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.claimableAmount = object.claimable_amount?.map(e => Coin.fromAmino(e)) || [];
    message.actionCompleted = object.action_completed?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.claimableAmount) {
      obj.claimable_amount = message.claimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_amount = message.claimableAmount;
    }
    if (message.actionCompleted) {
      obj.action_completed = message.actionCompleted.map(e => e);
    } else {
      obj.action_completed = message.actionCompleted;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/passage3d.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};