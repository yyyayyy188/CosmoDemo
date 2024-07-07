import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface Params {
  /** auction_period_duration defines the auction period duration */
  auctionPeriod: bigint;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  minNextBidIncrementRate: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.auction.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** auction_period_duration defines the auction period duration */
  auction_period?: string;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  min_next_bid_increment_rate?: string;
}
export interface ParamsAminoMsg {
  type: "/injective.auction.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  auction_period: bigint;
  min_next_bid_increment_rate: string;
}
export interface Bid {
  bidder: string;
  amount: string;
}
export interface BidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.Bid";
  value: Uint8Array;
}
export interface BidAmino {
  bidder: string;
  amount?: string;
}
export interface BidAminoMsg {
  type: "/injective.auction.v1beta1.Bid";
  value: BidAmino;
}
export interface BidSDKType {
  bidder: string;
  amount: string;
}
export interface EventBid {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */
  amount: string;
  /** round defines the round number of auction */
  round: bigint;
}
export interface EventBidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventBid";
  value: Uint8Array;
}
export interface EventBidAmino {
  /** bidder describes the address of bidder */
  bidder?: string;
  /** amount describes the amount the bidder put on the auction */
  amount?: string;
  /** round defines the round number of auction */
  round?: string;
}
export interface EventBidAminoMsg {
  type: "/injective.auction.v1beta1.EventBid";
  value: EventBidAmino;
}
export interface EventBidSDKType {
  bidder: string;
  amount: string;
  round: bigint;
}
export interface EventAuctionResult {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: bigint;
}
export interface EventAuctionResultProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventAuctionResult";
  value: Uint8Array;
}
export interface EventAuctionResultAmino {
  /** winner describes the address of the winner */
  winner?: string;
  /** amount describes the amount the winner get from the auction */
  amount?: string;
  /** round defines the round number of auction */
  round?: string;
}
export interface EventAuctionResultAminoMsg {
  type: "/injective.auction.v1beta1.EventAuctionResult";
  value: EventAuctionResultAmino;
}
export interface EventAuctionResultSDKType {
  winner: string;
  amount: string;
  round: bigint;
}
export interface EventAuctionStart {
  /** round defines the round number of auction */
  round: bigint;
  /** ending_timestamp describes auction end time */
  endingTimestamp: bigint;
  /** new_basket describes auction module balance at the time of new auction start */
  newBasket: Coin[];
}
export interface EventAuctionStartProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventAuctionStart";
  value: Uint8Array;
}
export interface EventAuctionStartAmino {
  /** round defines the round number of auction */
  round?: string;
  /** ending_timestamp describes auction end time */
  ending_timestamp?: string;
  /** new_basket describes auction module balance at the time of new auction start */
  new_basket?: CoinAmino[];
}
export interface EventAuctionStartAminoMsg {
  type: "/injective.auction.v1beta1.EventAuctionStart";
  value: EventAuctionStartAmino;
}
export interface EventAuctionStartSDKType {
  round: bigint;
  ending_timestamp: bigint;
  new_basket: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    auctionPeriod: BigInt(0),
    minNextBidIncrementRate: ""
  };
}
export const Params = {
  typeUrl: "/injective.auction.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionPeriod !== BigInt(0)) {
      writer.uint32(8).int64(message.auctionPeriod);
    }
    if (message.minNextBidIncrementRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minNextBidIncrementRate, 18).atomics);
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
          message.auctionPeriod = reader.int64();
          break;
        case 2:
          message.minNextBidIncrementRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
      auctionPeriod: isSet(object.auctionPeriod) ? BigInt(object.auctionPeriod.toString()) : BigInt(0),
      minNextBidIncrementRate: isSet(object.minNextBidIncrementRate) ? String(object.minNextBidIncrementRate) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.auctionPeriod !== undefined && (obj.auctionPeriod = (message.auctionPeriod || BigInt(0)).toString());
    message.minNextBidIncrementRate !== undefined && (obj.minNextBidIncrementRate = message.minNextBidIncrementRate);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? BigInt(object.auctionPeriod.toString()) : BigInt(0);
    message.minNextBidIncrementRate = object.minNextBidIncrementRate ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      auctionPeriod: object?.auction_period,
      minNextBidIncrementRate: object?.min_next_bid_increment_rate
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.auction_period = message.auctionPeriod;
    obj.min_next_bid_increment_rate = message.minNextBidIncrementRate;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.auction_period !== undefined && object.auction_period !== null) {
      message.auctionPeriod = BigInt(object.auction_period);
    }
    if (object.min_next_bid_increment_rate !== undefined && object.min_next_bid_increment_rate !== null) {
      message.minNextBidIncrementRate = object.min_next_bid_increment_rate;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.auction_period = message.auctionPeriod !== BigInt(0) ? message.auctionPeriod.toString() : undefined;
    obj.min_next_bid_increment_rate = message.minNextBidIncrementRate === "" ? undefined : message.minNextBidIncrementRate;
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
      typeUrl: "/injective.auction.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    bidder: "",
    amount: ""
  };
}
export const Bid = {
  typeUrl: "/injective.auction.v1beta1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: Bid): JsonSafe<Bid> {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: BidSDKType): Bid {
    return {
      bidder: object?.bidder,
      amount: object?.amount
    };
  },
  toSDK(message: Bid): BidSDKType {
    const obj: any = {};
    obj.bidder = message.bidder;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bidder = message.bidder ?? "";
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
function createBaseEventBid(): EventBid {
  return {
    bidder: "",
    amount: "",
    round: BigInt(0)
  };
}
export const EventBid = {
  typeUrl: "/injective.auction.v1beta1.EventBid",
  encode(message: EventBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
  fromJSON(object: any): EventBid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventBid): JsonSafe<EventBid> {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount);
    message.round !== undefined && (obj.round = (message.round || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventBid>): EventBid {
    const message = createBaseEventBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: EventBidSDKType): EventBid {
    return {
      bidder: object?.bidder,
      amount: object?.amount,
      round: object?.round
    };
  },
  toSDK(message: EventBid): EventBidSDKType {
    const obj: any = {};
    obj.bidder = message.bidder;
    obj.amount = message.amount;
    obj.round = message.round;
    return obj;
  },
  fromAmino(object: EventBidAmino): EventBid {
    const message = createBaseEventBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    return message;
  },
  toAmino(message: EventBid): EventBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.round = message.round !== BigInt(0) ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBidAminoMsg): EventBid {
    return EventBid.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBidProtoMsg): EventBid {
    return EventBid.decode(message.value);
  },
  toProto(message: EventBid): Uint8Array {
    return EventBid.encode(message).finish();
  },
  toProtoMsg(message: EventBid): EventBidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventBid",
      value: EventBid.encode(message).finish()
    };
  }
};
function createBaseEventAuctionResult(): EventAuctionResult {
  return {
    winner: "",
    amount: "",
    round: BigInt(0)
  };
}
export const EventAuctionResult = {
  typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
  encode(message: EventAuctionResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAuctionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuctionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
  fromJSON(object: any): EventAuctionResult {
    return {
      winner: isSet(object.winner) ? String(object.winner) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventAuctionResult): JsonSafe<EventAuctionResult> {
    const obj: any = {};
    message.winner !== undefined && (obj.winner = message.winner);
    message.amount !== undefined && (obj.amount = message.amount);
    message.round !== undefined && (obj.round = (message.round || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventAuctionResult>): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: EventAuctionResultSDKType): EventAuctionResult {
    return {
      winner: object?.winner,
      amount: object?.amount,
      round: object?.round
    };
  },
  toSDK(message: EventAuctionResult): EventAuctionResultSDKType {
    const obj: any = {};
    obj.winner = message.winner;
    obj.amount = message.amount;
    obj.round = message.round;
    return obj;
  },
  fromAmino(object: EventAuctionResultAmino): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    return message;
  },
  toAmino(message: EventAuctionResult): EventAuctionResultAmino {
    const obj: any = {};
    obj.winner = message.winner === "" ? undefined : message.winner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.round = message.round !== BigInt(0) ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAuctionResultAminoMsg): EventAuctionResult {
    return EventAuctionResult.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAuctionResultProtoMsg): EventAuctionResult {
    return EventAuctionResult.decode(message.value);
  },
  toProto(message: EventAuctionResult): Uint8Array {
    return EventAuctionResult.encode(message).finish();
  },
  toProtoMsg(message: EventAuctionResult): EventAuctionResultProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
      value: EventAuctionResult.encode(message).finish()
    };
  }
};
function createBaseEventAuctionStart(): EventAuctionStart {
  return {
    round: BigInt(0),
    endingTimestamp: BigInt(0),
    newBasket: []
  };
}
export const EventAuctionStart = {
  typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
  encode(message: EventAuctionStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== BigInt(0)) {
      writer.uint32(8).uint64(message.round);
    }
    if (message.endingTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.endingTimestamp);
    }
    for (const v of message.newBasket) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAuctionStart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuctionStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64();
          break;
        case 2:
          message.endingTimestamp = reader.int64();
          break;
        case 3:
          message.newBasket.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAuctionStart {
    return {
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0),
      endingTimestamp: isSet(object.endingTimestamp) ? BigInt(object.endingTimestamp.toString()) : BigInt(0),
      newBasket: Array.isArray(object?.newBasket) ? object.newBasket.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: EventAuctionStart): JsonSafe<EventAuctionStart> {
    const obj: any = {};
    message.round !== undefined && (obj.round = (message.round || BigInt(0)).toString());
    message.endingTimestamp !== undefined && (obj.endingTimestamp = (message.endingTimestamp || BigInt(0)).toString());
    if (message.newBasket) {
      obj.newBasket = message.newBasket.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.newBasket = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EventAuctionStart>): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.endingTimestamp = object.endingTimestamp !== undefined && object.endingTimestamp !== null ? BigInt(object.endingTimestamp.toString()) : BigInt(0);
    message.newBasket = object.newBasket?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EventAuctionStartSDKType): EventAuctionStart {
    return {
      round: object?.round,
      endingTimestamp: object?.ending_timestamp,
      newBasket: Array.isArray(object?.new_basket) ? object.new_basket.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: EventAuctionStart): EventAuctionStartSDKType {
    const obj: any = {};
    obj.round = message.round;
    obj.ending_timestamp = message.endingTimestamp;
    if (message.newBasket) {
      obj.new_basket = message.newBasket.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.new_basket = [];
    }
    return obj;
  },
  fromAmino(object: EventAuctionStartAmino): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.ending_timestamp !== undefined && object.ending_timestamp !== null) {
      message.endingTimestamp = BigInt(object.ending_timestamp);
    }
    message.newBasket = object.new_basket?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventAuctionStart): EventAuctionStartAmino {
    const obj: any = {};
    obj.round = message.round !== BigInt(0) ? message.round.toString() : undefined;
    obj.ending_timestamp = message.endingTimestamp !== BigInt(0) ? message.endingTimestamp.toString() : undefined;
    if (message.newBasket) {
      obj.new_basket = message.newBasket.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.new_basket = message.newBasket;
    }
    return obj;
  },
  fromAminoMsg(object: EventAuctionStartAminoMsg): EventAuctionStart {
    return EventAuctionStart.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAuctionStartProtoMsg): EventAuctionStart {
    return EventAuctionStart.decode(message.value);
  },
  toProto(message: EventAuctionStart): Uint8Array {
    return EventAuctionStart.encode(message).finish();
  },
  toProtoMsg(message: EventAuctionStart): EventAuctionStartProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
      value: EventAuctionStart.encode(message).finish()
    };
  }
};