import { Params, ParamsAmino, ParamsSDKType } from "./auction";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsRequest {}
export interface QueryAuctionParamsRequestProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest";
  value: Uint8Array;
}
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsRequestAmino {}
export interface QueryAuctionParamsRequestAminoMsg {
  type: "/injective.auction.v1beta1.QueryAuctionParamsRequest";
  value: QueryAuctionParamsRequestAmino;
}
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsRequestSDKType {}
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsResponse {
  params: Params | undefined;
}
export interface QueryAuctionParamsResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse";
  value: Uint8Array;
}
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryAuctionParamsResponseAminoMsg {
  type: "/injective.auction.v1beta1.QueryAuctionParamsResponse";
  value: QueryAuctionParamsResponseAmino;
}
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketRequest {}
export interface QueryCurrentAuctionBasketRequestProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
  value: Uint8Array;
}
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketRequestAmino {}
export interface QueryCurrentAuctionBasketRequestAminoMsg {
  type: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
  value: QueryCurrentAuctionBasketRequestAmino;
}
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketRequestSDKType {}
/** QueryCurrentAuctionBasketResponse is the response type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketResponse {
  /** amount describes the amount put on auction */
  amount: Coin[];
  /** auctionRound describes current auction round */
  auctionRound: bigint;
  /** auctionClosingTime describes auction close time for the round */
  auctionClosingTime: bigint;
  /** highestBidder describes highest bidder on current round */
  highestBidder: string;
  /** highestBidAmount describes highest bid amount on current round */
  highestBidAmount: string;
}
export interface QueryCurrentAuctionBasketResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
  value: Uint8Array;
}
/** QueryCurrentAuctionBasketResponse is the response type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketResponseAmino {
  /** amount describes the amount put on auction */
  amount?: CoinAmino[];
  /** auctionRound describes current auction round */
  auctionRound?: string;
  /** auctionClosingTime describes auction close time for the round */
  auctionClosingTime?: string;
  /** highestBidder describes highest bidder on current round */
  highestBidder?: string;
  /** highestBidAmount describes highest bid amount on current round */
  highestBidAmount?: string;
}
export interface QueryCurrentAuctionBasketResponseAminoMsg {
  type: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
  value: QueryCurrentAuctionBasketResponseAmino;
}
/** QueryCurrentAuctionBasketResponse is the response type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketResponseSDKType {
  amount: CoinSDKType[];
  auctionRound: bigint;
  auctionClosingTime: bigint;
  highestBidder: string;
  highestBidAmount: string;
}
/** QueryModuleStateRequest is the request type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.auction.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateResponse {
  state?: GenesisState | undefined;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino | undefined;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.auction.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType | undefined;
}
function createBaseQueryAuctionParamsRequest(): QueryAuctionParamsRequest {
  return {};
}
export const QueryAuctionParamsRequest = {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
  encode(_: QueryAuctionParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsRequest();
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
  fromJSON(_: any): QueryAuctionParamsRequest {
    return {};
  },
  toJSON(_: QueryAuctionParamsRequest): JsonSafe<QueryAuctionParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryAuctionParamsRequest>): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  },
  fromSDK(_: QueryAuctionParamsRequestSDKType): QueryAuctionParamsRequest {
    return {};
  },
  toSDK(_: QueryAuctionParamsRequest): QueryAuctionParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryAuctionParamsRequestAmino): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  },
  toAmino(_: QueryAuctionParamsRequest): QueryAuctionParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuctionParamsRequestAminoMsg): QueryAuctionParamsRequest {
    return QueryAuctionParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionParamsRequestProtoMsg): QueryAuctionParamsRequest {
    return QueryAuctionParamsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionParamsRequest): Uint8Array {
    return QueryAuctionParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionParamsRequest): QueryAuctionParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
      value: QueryAuctionParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionParamsResponse(): QueryAuctionParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryAuctionParamsResponse = {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
  encode(message: QueryAuctionParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryAuctionParamsResponse): JsonSafe<QueryAuctionParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAuctionParamsResponse>): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryAuctionParamsResponseSDKType): QueryAuctionParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryAuctionParamsResponseAmino): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionParamsResponseAminoMsg): QueryAuctionParamsResponse {
    return QueryAuctionParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionParamsResponseProtoMsg): QueryAuctionParamsResponse {
    return QueryAuctionParamsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionParamsResponse): Uint8Array {
    return QueryAuctionParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
      value: QueryAuctionParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentAuctionBasketRequest(): QueryCurrentAuctionBasketRequest {
  return {};
}
export const QueryCurrentAuctionBasketRequest = {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
  encode(_: QueryCurrentAuctionBasketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentAuctionBasketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentAuctionBasketRequest();
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
  fromJSON(_: any): QueryCurrentAuctionBasketRequest {
    return {};
  },
  toJSON(_: QueryCurrentAuctionBasketRequest): JsonSafe<QueryCurrentAuctionBasketRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryCurrentAuctionBasketRequest>): QueryCurrentAuctionBasketRequest {
    const message = createBaseQueryCurrentAuctionBasketRequest();
    return message;
  },
  fromSDK(_: QueryCurrentAuctionBasketRequestSDKType): QueryCurrentAuctionBasketRequest {
    return {};
  },
  toSDK(_: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryCurrentAuctionBasketRequestAmino): QueryCurrentAuctionBasketRequest {
    const message = createBaseQueryCurrentAuctionBasketRequest();
    return message;
  },
  toAmino(_: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentAuctionBasketRequestAminoMsg): QueryCurrentAuctionBasketRequest {
    return QueryCurrentAuctionBasketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentAuctionBasketRequestProtoMsg): QueryCurrentAuctionBasketRequest {
    return QueryCurrentAuctionBasketRequest.decode(message.value);
  },
  toProto(message: QueryCurrentAuctionBasketRequest): Uint8Array {
    return QueryCurrentAuctionBasketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
      value: QueryCurrentAuctionBasketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentAuctionBasketResponse(): QueryCurrentAuctionBasketResponse {
  return {
    amount: [],
    auctionRound: BigInt(0),
    auctionClosingTime: BigInt(0),
    highestBidder: "",
    highestBidAmount: ""
  };
}
export const QueryCurrentAuctionBasketResponse = {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
  encode(message: QueryCurrentAuctionBasketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.auctionRound !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (message.auctionClosingTime !== BigInt(0)) {
      writer.uint32(24).int64(message.auctionClosingTime);
    }
    if (message.highestBidder !== "") {
      writer.uint32(34).string(message.highestBidder);
    }
    if (message.highestBidAmount !== "") {
      writer.uint32(42).string(message.highestBidAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentAuctionBasketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentAuctionBasketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.auctionRound = reader.uint64();
          break;
        case 3:
          message.auctionClosingTime = reader.int64();
          break;
        case 4:
          message.highestBidder = reader.string();
          break;
        case 5:
          message.highestBidAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentAuctionBasketResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      auctionRound: isSet(object.auctionRound) ? BigInt(object.auctionRound.toString()) : BigInt(0),
      auctionClosingTime: isSet(object.auctionClosingTime) ? BigInt(object.auctionClosingTime.toString()) : BigInt(0),
      highestBidder: isSet(object.highestBidder) ? String(object.highestBidder) : "",
      highestBidAmount: isSet(object.highestBidAmount) ? String(object.highestBidAmount) : ""
    };
  },
  toJSON(message: QueryCurrentAuctionBasketResponse): JsonSafe<QueryCurrentAuctionBasketResponse> {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.auctionRound !== undefined && (obj.auctionRound = (message.auctionRound || BigInt(0)).toString());
    message.auctionClosingTime !== undefined && (obj.auctionClosingTime = (message.auctionClosingTime || BigInt(0)).toString());
    message.highestBidder !== undefined && (obj.highestBidder = message.highestBidder);
    message.highestBidAmount !== undefined && (obj.highestBidAmount = message.highestBidAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCurrentAuctionBasketResponse>): QueryCurrentAuctionBasketResponse {
    const message = createBaseQueryCurrentAuctionBasketResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
    message.auctionClosingTime = object.auctionClosingTime !== undefined && object.auctionClosingTime !== null ? BigInt(object.auctionClosingTime.toString()) : BigInt(0);
    message.highestBidder = object.highestBidder ?? "";
    message.highestBidAmount = object.highestBidAmount ?? "";
    return message;
  },
  fromSDK(object: QueryCurrentAuctionBasketResponseSDKType): QueryCurrentAuctionBasketResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : [],
      auctionRound: object?.auctionRound,
      auctionClosingTime: object?.auctionClosingTime,
      highestBidder: object?.highestBidder,
      highestBidAmount: object?.highestBidAmount
    };
  },
  toSDK(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.auctionRound = message.auctionRound;
    obj.auctionClosingTime = message.auctionClosingTime;
    obj.highestBidder = message.highestBidder;
    obj.highestBidAmount = message.highestBidAmount;
    return obj;
  },
  fromAmino(object: QueryCurrentAuctionBasketResponseAmino): QueryCurrentAuctionBasketResponse {
    const message = createBaseQueryCurrentAuctionBasketResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.auctionRound !== undefined && object.auctionRound !== null) {
      message.auctionRound = BigInt(object.auctionRound);
    }
    if (object.auctionClosingTime !== undefined && object.auctionClosingTime !== null) {
      message.auctionClosingTime = BigInt(object.auctionClosingTime);
    }
    if (object.highestBidder !== undefined && object.highestBidder !== null) {
      message.highestBidder = object.highestBidder;
    }
    if (object.highestBidAmount !== undefined && object.highestBidAmount !== null) {
      message.highestBidAmount = object.highestBidAmount;
    }
    return message;
  },
  toAmino(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.auctionRound = message.auctionRound !== BigInt(0) ? message.auctionRound.toString() : undefined;
    obj.auctionClosingTime = message.auctionClosingTime !== BigInt(0) ? message.auctionClosingTime.toString() : undefined;
    obj.highestBidder = message.highestBidder === "" ? undefined : message.highestBidder;
    obj.highestBidAmount = message.highestBidAmount === "" ? undefined : message.highestBidAmount;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentAuctionBasketResponseAminoMsg): QueryCurrentAuctionBasketResponse {
    return QueryCurrentAuctionBasketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentAuctionBasketResponseProtoMsg): QueryCurrentAuctionBasketResponse {
    return QueryCurrentAuctionBasketResponse.decode(message.value);
  },
  toProto(message: QueryCurrentAuctionBasketResponse): Uint8Array {
    return QueryCurrentAuctionBasketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
      value: QueryCurrentAuctionBasketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
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
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  toJSON(_: QueryModuleStateRequest): JsonSafe<QueryModuleStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromSDK(_: QueryModuleStateRequestSDKType): QueryModuleStateRequest {
    return {};
  },
  toSDK(_: QueryModuleStateRequest): QueryModuleStateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  toJSON(message: QueryModuleStateResponse): JsonSafe<QueryModuleStateResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? GenesisState.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromSDK(object: QueryModuleStateResponseSDKType): QueryModuleStateResponse {
    return {
      state: object.state ? GenesisState.fromSDK(object.state) : undefined
    };
  },
  toSDK(message: QueryModuleStateResponse): QueryModuleStateResponseSDKType {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? GenesisState.toSDK(message.state) : undefined);
    return obj;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};