import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBid {
  sender: string;
  /** amount of the bid in INJ tokens */
  bidAmount: Coin | undefined;
  /** the current auction round being bid on */
  round: bigint;
}
export interface MsgBidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.MsgBid";
  value: Uint8Array;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidAmino {
  sender?: string;
  /** amount of the bid in INJ tokens */
  bid_amount?: CoinAmino | undefined;
  /** the current auction round being bid on */
  round?: string;
}
export interface MsgBidAminoMsg {
  type: "/injective.auction.v1beta1.MsgBid";
  value: MsgBidAmino;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidSDKType {
  sender: string;
  bid_amount: CoinSDKType | undefined;
  round: bigint;
}
export interface MsgBidResponse {}
export interface MsgBidResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.MsgBidResponse";
  value: Uint8Array;
}
export interface MsgBidResponseAmino {}
export interface MsgBidResponseAminoMsg {
  type: "/injective.auction.v1beta1.MsgBidResponse";
  value: MsgBidResponseAmino;
}
export interface MsgBidResponseSDKType {}
function createBaseMsgBid(): MsgBid {
  return {
    sender: "",
    bidAmount: Coin.fromPartial({}),
    round: BigInt(0)
  };
}
export const MsgBid = {
  typeUrl: "/injective.auction.v1beta1.MsgBid",
  encode(message: MsgBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.bidAmount !== undefined) {
      Coin.encode(message.bidAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.bidAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.round = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBid {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      bidAmount: isSet(object.bidAmount) ? Coin.fromJSON(object.bidAmount) : undefined,
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgBid): JsonSafe<MsgBid> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.bidAmount !== undefined && (obj.bidAmount = message.bidAmount ? Coin.toJSON(message.bidAmount) : undefined);
    message.round !== undefined && (obj.round = (message.round || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.sender = object.sender ?? "";
    message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? Coin.fromPartial(object.bidAmount) : undefined;
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgBidSDKType): MsgBid {
    return {
      sender: object?.sender,
      bidAmount: object.bid_amount ? Coin.fromSDK(object.bid_amount) : undefined,
      round: object?.round
    };
  },
  toSDK(message: MsgBid): MsgBidSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.bidAmount !== undefined && (obj.bid_amount = message.bidAmount ? Coin.toSDK(message.bidAmount) : undefined);
    obj.round = message.round;
    return obj;
  },
  fromAmino(object: MsgBidAmino): MsgBid {
    const message = createBaseMsgBid();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.bid_amount !== undefined && object.bid_amount !== null) {
      message.bidAmount = Coin.fromAmino(object.bid_amount);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    return message;
  },
  toAmino(message: MsgBid): MsgBidAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.bid_amount = message.bidAmount ? Coin.toAmino(message.bidAmount) : undefined;
    obj.round = message.round !== BigInt(0) ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBidAminoMsg): MsgBid {
    return MsgBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBidProtoMsg): MsgBid {
    return MsgBid.decode(message.value);
  },
  toProto(message: MsgBid): Uint8Array {
    return MsgBid.encode(message).finish();
  },
  toProtoMsg(message: MsgBid): MsgBidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.MsgBid",
      value: MsgBid.encode(message).finish()
    };
  }
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}
export const MsgBidResponse = {
  typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
  encode(_: MsgBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBidResponse {
    return {};
  },
  toJSON(_: MsgBidResponse): JsonSafe<MsgBidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
  fromSDK(_: MsgBidResponseSDKType): MsgBidResponse {
    return {};
  },
  toSDK(_: MsgBidResponse): MsgBidResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgBidResponseAmino): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
  toAmino(_: MsgBidResponse): MsgBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBidResponseAminoMsg): MsgBidResponse {
    return MsgBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBidResponseProtoMsg): MsgBidResponse {
    return MsgBidResponse.decode(message.value);
  },
  toProto(message: MsgBidResponse): Uint8Array {
    return MsgBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBidResponse): MsgBidResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
      value: MsgBidResponse.encode(message).finish()
    };
  }
};