import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Market, MarketAmino, MarketSDKType } from "./oracle";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface QueryMarketsRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryMarketsRequestProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketsRequest";
  value: Uint8Array;
}
export interface QueryMarketsRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryMarketsRequestAminoMsg {
  type: "/comdex.oracle.v1beta1.QueryMarketsRequest";
  value: QueryMarketsRequestAmino;
}
export interface QueryMarketsRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryMarketsResponse {
  markets: Market[];
  pagination?: PageResponse | undefined;
}
export interface QueryMarketsResponseProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketsResponse";
  value: Uint8Array;
}
export interface QueryMarketsResponseAmino {
  markets?: MarketAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryMarketsResponseAminoMsg {
  type: "/comdex.oracle.v1beta1.QueryMarketsResponse";
  value: QueryMarketsResponseAmino;
}
export interface QueryMarketsResponseSDKType {
  markets: MarketSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryMarketRequest {
  symbol: string;
}
export interface QueryMarketRequestProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketRequest";
  value: Uint8Array;
}
export interface QueryMarketRequestAmino {
  symbol?: string;
}
export interface QueryMarketRequestAminoMsg {
  type: "/comdex.oracle.v1beta1.QueryMarketRequest";
  value: QueryMarketRequestAmino;
}
export interface QueryMarketRequestSDKType {
  symbol: string;
}
export interface QueryMarketResponse {
  market: Market | undefined;
}
export interface QueryMarketResponseProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketResponse";
  value: Uint8Array;
}
export interface QueryMarketResponseAmino {
  market?: MarketAmino | undefined;
}
export interface QueryMarketResponseAminoMsg {
  type: "/comdex.oracle.v1beta1.QueryMarketResponse";
  value: QueryMarketResponseAmino;
}
export interface QueryMarketResponseSDKType {
  market: MarketSDKType | undefined;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/comdex.oracle.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/comdex.oracle.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
function createBaseQueryMarketsRequest(): QueryMarketsRequest {
  return {
    pagination: undefined
  };
}
export const QueryMarketsRequest = {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketsRequest",
  encode(message: QueryMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMarketsRequest): JsonSafe<QueryMarketsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketsRequest>): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryMarketsRequestSDKType): QueryMarketsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryMarketsRequest): QueryMarketsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryMarketsRequestAmino): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMarketsRequest): QueryMarketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketsRequestAminoMsg): QueryMarketsRequest {
    return QueryMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketsRequestProtoMsg): QueryMarketsRequest {
    return QueryMarketsRequest.decode(message.value);
  },
  toProto(message: QueryMarketsRequest): Uint8Array {
    return QueryMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketsRequest): QueryMarketsRequestProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.QueryMarketsRequest",
      value: QueryMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketsResponse(): QueryMarketsResponse {
  return {
    markets: [],
    pagination: undefined
  };
}
export const QueryMarketsResponse = {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketsResponse",
  encode(message: QueryMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMarketsResponse): JsonSafe<QueryMarketsResponse> {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? Market.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketsResponse>): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.markets = object.markets?.map(e => Market.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryMarketsResponseSDKType): QueryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryMarketsResponse): QueryMarketsResponseSDKType {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? Market.toSDK(e) : undefined);
    } else {
      obj.markets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryMarketsResponseAmino): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.markets = object.markets?.map(e => Market.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMarketsResponse): QueryMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketsResponseAminoMsg): QueryMarketsResponse {
    return QueryMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketsResponseProtoMsg): QueryMarketsResponse {
    return QueryMarketsResponse.decode(message.value);
  },
  toProto(message: QueryMarketsResponse): Uint8Array {
    return QueryMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketsResponse): QueryMarketsResponseProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.QueryMarketsResponse",
      value: QueryMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketRequest(): QueryMarketRequest {
  return {
    symbol: ""
  };
}
export const QueryMarketRequest = {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketRequest",
  encode(message: QueryMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketRequest {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  toJSON(message: QueryMarketRequest): JsonSafe<QueryMarketRequest> {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketRequest>): QueryMarketRequest {
    const message = createBaseQueryMarketRequest();
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromSDK(object: QueryMarketRequestSDKType): QueryMarketRequest {
    return {
      symbol: object?.symbol
    };
  },
  toSDK(message: QueryMarketRequest): QueryMarketRequestSDKType {
    const obj: any = {};
    obj.symbol = message.symbol;
    return obj;
  },
  fromAmino(object: QueryMarketRequestAmino): QueryMarketRequest {
    const message = createBaseQueryMarketRequest();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: QueryMarketRequest): QueryMarketRequestAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: QueryMarketRequestAminoMsg): QueryMarketRequest {
    return QueryMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketRequestProtoMsg): QueryMarketRequest {
    return QueryMarketRequest.decode(message.value);
  },
  toProto(message: QueryMarketRequest): Uint8Array {
    return QueryMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketRequest): QueryMarketRequestProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.QueryMarketRequest",
      value: QueryMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketResponse(): QueryMarketResponse {
  return {
    market: Market.fromPartial({})
  };
}
export const QueryMarketResponse = {
  typeUrl: "/comdex.oracle.v1beta1.QueryMarketResponse",
  encode(message: QueryMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketResponse {
    return {
      market: isSet(object.market) ? Market.fromJSON(object.market) : undefined
    };
  },
  toJSON(message: QueryMarketResponse): JsonSafe<QueryMarketResponse> {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? Market.toJSON(message.market) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketResponse>): QueryMarketResponse {
    const message = createBaseQueryMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? Market.fromPartial(object.market) : undefined;
    return message;
  },
  fromSDK(object: QueryMarketResponseSDKType): QueryMarketResponse {
    return {
      market: object.market ? Market.fromSDK(object.market) : undefined
    };
  },
  toSDK(message: QueryMarketResponse): QueryMarketResponseSDKType {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? Market.toSDK(message.market) : undefined);
    return obj;
  },
  fromAmino(object: QueryMarketResponseAmino): QueryMarketResponse {
    const message = createBaseQueryMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = Market.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QueryMarketResponse): QueryMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? Market.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketResponseAminoMsg): QueryMarketResponse {
    return QueryMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketResponseProtoMsg): QueryMarketResponse {
    return QueryMarketResponse.decode(message.value);
  },
  toProto(message: QueryMarketResponse): Uint8Array {
    return QueryMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketResponse): QueryMarketResponseProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.QueryMarketResponse",
      value: QueryMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/comdex.oracle.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/comdex.oracle.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};