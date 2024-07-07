import { Params, ParamsAmino, ParamsSDKType, Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to auction. */
  params: Params | undefined;
  /** current auction round */
  auctionRound: bigint;
  /** current highest bid */
  highestBid?: Bid | undefined;
  /** auction ending timestamp */
  auctionEndingTimestamp: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.auction.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to auction. */
  params?: ParamsAmino | undefined;
  /** current auction round */
  auction_round?: string;
  /** current highest bid */
  highest_bid?: BidAmino | undefined;
  /** auction ending timestamp */
  auction_ending_timestamp?: string;
}
export interface GenesisStateAminoMsg {
  type: "/injective.auction.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType | undefined;
  auction_round: bigint;
  highest_bid?: BidSDKType | undefined;
  auction_ending_timestamp: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    auctionRound: BigInt(0),
    highestBid: undefined,
    auctionEndingTimestamp: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/injective.auction.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.auctionRound !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }
    if (message.auctionEndingTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.auctionEndingTimestamp);
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
          message.auctionRound = reader.uint64();
          break;
        case 3:
          message.highestBid = Bid.decode(reader, reader.uint32());
          break;
        case 4:
          message.auctionEndingTimestamp = reader.int64();
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
      auctionRound: isSet(object.auctionRound) ? BigInt(object.auctionRound.toString()) : BigInt(0),
      highestBid: isSet(object.highestBid) ? Bid.fromJSON(object.highestBid) : undefined,
      auctionEndingTimestamp: isSet(object.auctionEndingTimestamp) ? BigInt(object.auctionEndingTimestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.auctionRound !== undefined && (obj.auctionRound = (message.auctionRound || BigInt(0)).toString());
    message.highestBid !== undefined && (obj.highestBid = message.highestBid ? Bid.toJSON(message.highestBid) : undefined);
    message.auctionEndingTimestamp !== undefined && (obj.auctionEndingTimestamp = (message.auctionEndingTimestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    message.auctionEndingTimestamp = object.auctionEndingTimestamp !== undefined && object.auctionEndingTimestamp !== null ? BigInt(object.auctionEndingTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      auctionRound: object?.auction_round,
      highestBid: object.highest_bid ? Bid.fromSDK(object.highest_bid) : undefined,
      auctionEndingTimestamp: object?.auction_ending_timestamp
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    obj.auction_round = message.auctionRound;
    message.highestBid !== undefined && (obj.highest_bid = message.highestBid ? Bid.toSDK(message.highestBid) : undefined);
    obj.auction_ending_timestamp = message.auctionEndingTimestamp;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.auction_round !== undefined && object.auction_round !== null) {
      message.auctionRound = BigInt(object.auction_round);
    }
    if (object.highest_bid !== undefined && object.highest_bid !== null) {
      message.highestBid = Bid.fromAmino(object.highest_bid);
    }
    if (object.auction_ending_timestamp !== undefined && object.auction_ending_timestamp !== null) {
      message.auctionEndingTimestamp = BigInt(object.auction_ending_timestamp);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.auction_round = message.auctionRound !== BigInt(0) ? message.auctionRound.toString() : undefined;
    obj.highest_bid = message.highestBid ? Bid.toAmino(message.highestBid) : undefined;
    obj.auction_ending_timestamp = message.auctionEndingTimestamp !== BigInt(0) ? message.auctionEndingTimestamp.toString() : undefined;
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
      typeUrl: "/injective.auction.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};