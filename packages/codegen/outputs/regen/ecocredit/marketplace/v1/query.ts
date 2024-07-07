import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { AllowedDenom, AllowedDenomAmino, AllowedDenomSDKType } from "./state";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
  /** sell_order_id is the id of the requested sell order. */
  sellOrderId: bigint;
}
export interface QuerySellOrderRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest";
  value: Uint8Array;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestAmino {
  /** sell_order_id is the id of the requested sell order. */
  sell_order_id?: string;
}
export interface QuerySellOrderRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest";
  value: QuerySellOrderRequestAmino;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestSDKType {
  sell_order_id: bigint;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
  /** sell_order contains all information related to a sell order. */
  sellOrder?: SellOrderInfo | undefined;
}
export interface QuerySellOrderResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse";
  value: Uint8Array;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseAmino {
  /** sell_order contains all information related to a sell order. */
  sell_order?: SellOrderInfoAmino | undefined;
}
export interface QuerySellOrderResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse";
  value: QuerySellOrderResponseAmino;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseSDKType {
  sell_order?: SellOrderInfoSDKType | undefined;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QuerySellOrdersRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest";
  value: Uint8Array;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QuerySellOrdersRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest";
  value: QuerySellOrdersRequestAmino;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QuerySellOrdersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse";
  value: Uint8Array;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseAmino {
  /** sell_orders is a list of sell orders. */
  sell_orders?: SellOrderInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QuerySellOrdersResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse";
  value: QuerySellOrdersResponseAmino;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseSDKType {
  sell_orders: SellOrderInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QuerySellOrdersByDenomRequest is the Query/SellOrdersByDenom request type. */
export interface QuerySellOrdersByBatchDenomRequest {
  /** batch_denom is an ecocredit denom */
  batchDenom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QuerySellOrdersByBatchDenomRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomRequest";
  value: Uint8Array;
}
/** QuerySellOrdersByDenomRequest is the Query/SellOrdersByDenom request type. */
export interface QuerySellOrdersByBatchDenomRequestAmino {
  /** batch_denom is an ecocredit denom */
  batch_denom?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QuerySellOrdersByBatchDenomRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomRequest";
  value: QuerySellOrdersByBatchDenomRequestAmino;
}
/** QuerySellOrdersByDenomRequest is the Query/SellOrdersByDenom request type. */
export interface QuerySellOrdersByBatchDenomRequestSDKType {
  batch_denom: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QuerySellOrdersByDenomResponse is the Query/SellOrdersByDenom response type. */
export interface QuerySellOrdersByBatchDenomResponse {
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse | undefined;
}
export interface QuerySellOrdersByBatchDenomResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomResponse";
  value: Uint8Array;
}
/** QuerySellOrdersByDenomResponse is the Query/SellOrdersByDenom response type. */
export interface QuerySellOrdersByBatchDenomResponseAmino {
  /** sell_orders is a list of sell orders. */
  sell_orders?: SellOrderInfoAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QuerySellOrdersByBatchDenomResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomResponse";
  value: QuerySellOrdersByBatchDenomResponseAmino;
}
/** QuerySellOrdersByDenomResponse is the Query/SellOrdersByDenom response type. */
export interface QuerySellOrdersByBatchDenomResponseSDKType {
  sell_orders: SellOrderInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QuerySellOrdersByAddressRequest is the Query/SellOrdersByAddress request
 * type.
 */
export interface QuerySellOrdersByAddressRequest {
  /** address is the creator of the sell order */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QuerySellOrdersByAddressRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressRequest";
  value: Uint8Array;
}
/**
 * QuerySellOrdersByAddressRequest is the Query/SellOrdersByAddress request
 * type.
 */
export interface QuerySellOrdersByAddressRequestAmino {
  /** address is the creator of the sell order */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QuerySellOrdersByAddressRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressRequest";
  value: QuerySellOrdersByAddressRequestAmino;
}
/**
 * QuerySellOrdersByAddressRequest is the Query/SellOrdersByAddress request
 * type.
 */
export interface QuerySellOrdersByAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QuerySellOrdersByAddressResponse is the Query/SellOrdersByAddressResponse
 * response type.
 */
export interface QuerySellOrdersByAddressResponse {
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse | undefined;
}
export interface QuerySellOrdersByAddressResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressResponse";
  value: Uint8Array;
}
/**
 * QuerySellOrdersByAddressResponse is the Query/SellOrdersByAddressResponse
 * response type.
 */
export interface QuerySellOrdersByAddressResponseAmino {
  /** sell_orders is a list of sell orders. */
  sell_orders?: SellOrderInfoAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QuerySellOrdersByAddressResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressResponse";
  value: QuerySellOrdersByAddressResponseAmino;
}
/**
 * QuerySellOrdersByAddressResponse is the Query/SellOrdersByAddressResponse
 * response type.
 */
export interface QuerySellOrdersByAddressResponseSDKType {
  sell_orders: SellOrderInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryAllowedDenomsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest";
  value: Uint8Array;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAllowedDenomsRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest";
  value: QueryAllowedDenomsRequestAmino;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponse {
  /**
   * allowed_denoms is a list of coin denoms allowed to use in the ask price of
   * sell orders.
   */
  allowedDenoms: AllowedDenom[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryAllowedDenomsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse";
  value: Uint8Array;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseAmino {
  /**
   * allowed_denoms is a list of coin denoms allowed to use in the ask price of
   * sell orders.
   */
  allowed_denoms?: AllowedDenomAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAllowedDenomsResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse";
  value: QueryAllowedDenomsResponseAmino;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseSDKType {
  allowed_denoms: AllowedDenomSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfo {
  /** id is the unique ID of sell order. */
  id: bigint;
  /** seller is the account address of the owner of the credits being sold. */
  seller: string;
  /** batch_denom is denom of the credit batch being sold. */
  batchDenom: string;
  /** quantity is the decimal quantity of credits being sold. */
  quantity: string;
  /** ask_denom is the denom used in the ask price of the sell order. */
  askDenom: string;
  /**
   * ask_price is the integer price (encoded as a string) the seller is asking
   * for each unit of the batch_denom. Each credit unit of the batch will be
   * sold for at least the ask_price or more.
   */
  askPrice: string;
  /**
   * disable_auto_retire disables auto-retirement of credits which allows a
   * buyer to disable auto-retirement in their buy order enabling them to
   * resell the credits to another buyer.
   */
  disableAutoRetire: boolean;
  /**
   * expiration is an optional timestamp when the sell order expires. When the
   * expiration time is reached, the sell order is removed from state.
   */
  expiration?: Date | undefined;
}
export interface SellOrderInfoProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo";
  value: Uint8Array;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoAmino {
  /** id is the unique ID of sell order. */
  id?: string;
  /** seller is the account address of the owner of the credits being sold. */
  seller?: string;
  /** batch_denom is denom of the credit batch being sold. */
  batch_denom?: string;
  /** quantity is the decimal quantity of credits being sold. */
  quantity?: string;
  /** ask_denom is the denom used in the ask price of the sell order. */
  ask_denom?: string;
  /**
   * ask_price is the integer price (encoded as a string) the seller is asking
   * for each unit of the batch_denom. Each credit unit of the batch will be
   * sold for at least the ask_price or more.
   */
  ask_price?: string;
  /**
   * disable_auto_retire disables auto-retirement of credits which allows a
   * buyer to disable auto-retirement in their buy order enabling them to
   * resell the credits to another buyer.
   */
  disable_auto_retire?: boolean;
  /**
   * expiration is an optional timestamp when the sell order expires. When the
   * expiration time is reached, the sell order is removed from state.
   */
  expiration?: string | undefined;
}
export interface SellOrderInfoAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.SellOrderInfo";
  value: SellOrderInfoAmino;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoSDKType {
  id: bigint;
  seller: string;
  batch_denom: string;
  quantity: string;
  ask_denom: string;
  ask_price: string;
  disable_auto_retire: boolean;
  expiration?: Date | undefined;
}
function createBaseQuerySellOrderRequest(): QuerySellOrderRequest {
  return {
    sellOrderId: BigInt(0)
  };
}
export const QuerySellOrderRequest = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest",
  encode(message: QuerySellOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySellOrderRequest {
    return {
      sellOrderId: isSet(object.sellOrderId) ? BigInt(object.sellOrderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySellOrderRequest): JsonSafe<QuerySellOrderRequest> {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrderRequest>): QuerySellOrderRequest {
    const message = createBaseQuerySellOrderRequest();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QuerySellOrderRequestSDKType): QuerySellOrderRequest {
    return {
      sellOrderId: object?.sell_order_id
    };
  },
  toSDK(message: QuerySellOrderRequest): QuerySellOrderRequestSDKType {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId;
    return obj;
  },
  fromAmino(object: QuerySellOrderRequestAmino): QuerySellOrderRequest {
    const message = createBaseQuerySellOrderRequest();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    return message;
  },
  toAmino(message: QuerySellOrderRequest): QuerySellOrderRequestAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrderRequestAminoMsg): QuerySellOrderRequest {
    return QuerySellOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrderRequestProtoMsg): QuerySellOrderRequest {
    return QuerySellOrderRequest.decode(message.value);
  },
  toProto(message: QuerySellOrderRequest): Uint8Array {
    return QuerySellOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrderRequest): QuerySellOrderRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest",
      value: QuerySellOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrderResponse(): QuerySellOrderResponse {
  return {
    sellOrder: undefined
  };
}
export const QuerySellOrderResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse",
  encode(message: QuerySellOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrder !== undefined) {
      SellOrderInfo.encode(message.sellOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrder = SellOrderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySellOrderResponse {
    return {
      sellOrder: isSet(object.sellOrder) ? SellOrderInfo.fromJSON(object.sellOrder) : undefined
    };
  },
  toJSON(message: QuerySellOrderResponse): JsonSafe<QuerySellOrderResponse> {
    const obj: any = {};
    message.sellOrder !== undefined && (obj.sellOrder = message.sellOrder ? SellOrderInfo.toJSON(message.sellOrder) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrderResponse>): QuerySellOrderResponse {
    const message = createBaseQuerySellOrderResponse();
    message.sellOrder = object.sellOrder !== undefined && object.sellOrder !== null ? SellOrderInfo.fromPartial(object.sellOrder) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrderResponseSDKType): QuerySellOrderResponse {
    return {
      sellOrder: object.sell_order ? SellOrderInfo.fromSDK(object.sell_order) : undefined
    };
  },
  toSDK(message: QuerySellOrderResponse): QuerySellOrderResponseSDKType {
    const obj: any = {};
    message.sellOrder !== undefined && (obj.sell_order = message.sellOrder ? SellOrderInfo.toSDK(message.sellOrder) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrderResponseAmino): QuerySellOrderResponse {
    const message = createBaseQuerySellOrderResponse();
    if (object.sell_order !== undefined && object.sell_order !== null) {
      message.sellOrder = SellOrderInfo.fromAmino(object.sell_order);
    }
    return message;
  },
  toAmino(message: QuerySellOrderResponse): QuerySellOrderResponseAmino {
    const obj: any = {};
    obj.sell_order = message.sellOrder ? SellOrderInfo.toAmino(message.sellOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrderResponseAminoMsg): QuerySellOrderResponse {
    return QuerySellOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrderResponseProtoMsg): QuerySellOrderResponse {
    return QuerySellOrderResponse.decode(message.value);
  },
  toProto(message: QuerySellOrderResponse): Uint8Array {
    return QuerySellOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrderResponse): QuerySellOrderResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse",
      value: QuerySellOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersRequest(): QuerySellOrdersRequest {
  return {
    pagination: undefined
  };
}
export const QuerySellOrdersRequest = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest",
  encode(message: QuerySellOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersRequest();
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
  fromJSON(object: any): QuerySellOrdersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersRequest): JsonSafe<QuerySellOrdersRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrdersRequest>): QuerySellOrdersRequest {
    const message = createBaseQuerySellOrdersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrdersRequestSDKType): QuerySellOrdersRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySellOrdersRequest): QuerySellOrdersRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrdersRequestAmino): QuerySellOrdersRequest {
    const message = createBaseQuerySellOrdersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySellOrdersRequest): QuerySellOrdersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersRequestAminoMsg): QuerySellOrdersRequest {
    return QuerySellOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersRequestProtoMsg): QuerySellOrdersRequest {
    return QuerySellOrdersRequest.decode(message.value);
  },
  toProto(message: QuerySellOrdersRequest): Uint8Array {
    return QuerySellOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersRequest): QuerySellOrdersRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest",
      value: QuerySellOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersResponse(): QuerySellOrdersResponse {
  return {
    sellOrders: [],
    pagination: undefined
  };
}
export const QuerySellOrdersResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse",
  encode(message: QuerySellOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySellOrdersResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersResponse): JsonSafe<QuerySellOrdersResponse> {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrdersResponse>): QuerySellOrdersResponse {
    const message = createBaseQuerySellOrdersResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrdersResponseSDKType): QuerySellOrdersResponse {
    return {
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SellOrderInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySellOrdersResponse): QuerySellOrdersResponseSDKType {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toSDK(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrdersResponseAmino): QuerySellOrdersResponse {
    const message = createBaseQuerySellOrdersResponse();
    message.sellOrders = object.sell_orders?.map(e => SellOrderInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySellOrdersResponse): QuerySellOrdersResponseAmino {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersResponseAminoMsg): QuerySellOrdersResponse {
    return QuerySellOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersResponseProtoMsg): QuerySellOrdersResponse {
    return QuerySellOrdersResponse.decode(message.value);
  },
  toProto(message: QuerySellOrdersResponse): Uint8Array {
    return QuerySellOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersResponse): QuerySellOrdersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse",
      value: QuerySellOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersByBatchDenomRequest(): QuerySellOrdersByBatchDenomRequest {
  return {
    batchDenom: "",
    pagination: undefined
  };
}
export const QuerySellOrdersByBatchDenomRequest = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomRequest",
  encode(message: QuerySellOrdersByBatchDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrdersByBatchDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySellOrdersByBatchDenomRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersByBatchDenomRequest): JsonSafe<QuerySellOrdersByBatchDenomRequest> {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrdersByBatchDenomRequest>): QuerySellOrdersByBatchDenomRequest {
    const message = createBaseQuerySellOrdersByBatchDenomRequest();
    message.batchDenom = object.batchDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrdersByBatchDenomRequestSDKType): QuerySellOrdersByBatchDenomRequest {
    return {
      batchDenom: object?.batch_denom,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySellOrdersByBatchDenomRequest): QuerySellOrdersByBatchDenomRequestSDKType {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrdersByBatchDenomRequestAmino): QuerySellOrdersByBatchDenomRequest {
    const message = createBaseQuerySellOrdersByBatchDenomRequest();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySellOrdersByBatchDenomRequest): QuerySellOrdersByBatchDenomRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersByBatchDenomRequestAminoMsg): QuerySellOrdersByBatchDenomRequest {
    return QuerySellOrdersByBatchDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersByBatchDenomRequestProtoMsg): QuerySellOrdersByBatchDenomRequest {
    return QuerySellOrdersByBatchDenomRequest.decode(message.value);
  },
  toProto(message: QuerySellOrdersByBatchDenomRequest): Uint8Array {
    return QuerySellOrdersByBatchDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersByBatchDenomRequest): QuerySellOrdersByBatchDenomRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomRequest",
      value: QuerySellOrdersByBatchDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersByBatchDenomResponse(): QuerySellOrdersByBatchDenomResponse {
  return {
    sellOrders: [],
    pagination: undefined
  };
}
export const QuerySellOrdersByBatchDenomResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomResponse",
  encode(message: QuerySellOrdersByBatchDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrdersByBatchDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySellOrdersByBatchDenomResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersByBatchDenomResponse): JsonSafe<QuerySellOrdersByBatchDenomResponse> {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrdersByBatchDenomResponse>): QuerySellOrdersByBatchDenomResponse {
    const message = createBaseQuerySellOrdersByBatchDenomResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrdersByBatchDenomResponseSDKType): QuerySellOrdersByBatchDenomResponse {
    return {
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SellOrderInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySellOrdersByBatchDenomResponse): QuerySellOrdersByBatchDenomResponseSDKType {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toSDK(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrdersByBatchDenomResponseAmino): QuerySellOrdersByBatchDenomResponse {
    const message = createBaseQuerySellOrdersByBatchDenomResponse();
    message.sellOrders = object.sell_orders?.map(e => SellOrderInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySellOrdersByBatchDenomResponse): QuerySellOrdersByBatchDenomResponseAmino {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersByBatchDenomResponseAminoMsg): QuerySellOrdersByBatchDenomResponse {
    return QuerySellOrdersByBatchDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersByBatchDenomResponseProtoMsg): QuerySellOrdersByBatchDenomResponse {
    return QuerySellOrdersByBatchDenomResponse.decode(message.value);
  },
  toProto(message: QuerySellOrdersByBatchDenomResponse): Uint8Array {
    return QuerySellOrdersByBatchDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersByBatchDenomResponse): QuerySellOrdersByBatchDenomResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomResponse",
      value: QuerySellOrdersByBatchDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersByAddressRequest(): QuerySellOrdersByAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QuerySellOrdersByAddressRequest = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressRequest",
  encode(message: QuerySellOrdersByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrdersByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySellOrdersByAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersByAddressRequest): JsonSafe<QuerySellOrdersByAddressRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrdersByAddressRequest>): QuerySellOrdersByAddressRequest {
    const message = createBaseQuerySellOrdersByAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrdersByAddressRequestSDKType): QuerySellOrdersByAddressRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySellOrdersByAddressRequest): QuerySellOrdersByAddressRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrdersByAddressRequestAmino): QuerySellOrdersByAddressRequest {
    const message = createBaseQuerySellOrdersByAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySellOrdersByAddressRequest): QuerySellOrdersByAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersByAddressRequestAminoMsg): QuerySellOrdersByAddressRequest {
    return QuerySellOrdersByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersByAddressRequestProtoMsg): QuerySellOrdersByAddressRequest {
    return QuerySellOrdersByAddressRequest.decode(message.value);
  },
  toProto(message: QuerySellOrdersByAddressRequest): Uint8Array {
    return QuerySellOrdersByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersByAddressRequest): QuerySellOrdersByAddressRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressRequest",
      value: QuerySellOrdersByAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersByAddressResponse(): QuerySellOrdersByAddressResponse {
  return {
    sellOrders: [],
    pagination: undefined
  };
}
export const QuerySellOrdersByAddressResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressResponse",
  encode(message: QuerySellOrdersByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOrdersByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySellOrdersByAddressResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersByAddressResponse): JsonSafe<QuerySellOrdersByAddressResponse> {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySellOrdersByAddressResponse>): QuerySellOrdersByAddressResponse {
    const message = createBaseQuerySellOrdersByAddressResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySellOrdersByAddressResponseSDKType): QuerySellOrdersByAddressResponse {
    return {
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SellOrderInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySellOrdersByAddressResponse): QuerySellOrdersByAddressResponseSDKType {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toSDK(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySellOrdersByAddressResponseAmino): QuerySellOrdersByAddressResponse {
    const message = createBaseQuerySellOrdersByAddressResponse();
    message.sellOrders = object.sell_orders?.map(e => SellOrderInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySellOrdersByAddressResponse): QuerySellOrdersByAddressResponseAmino {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersByAddressResponseAminoMsg): QuerySellOrdersByAddressResponse {
    return QuerySellOrdersByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersByAddressResponseProtoMsg): QuerySellOrdersByAddressResponse {
    return QuerySellOrdersByAddressResponse.decode(message.value);
  },
  toProto(message: QuerySellOrdersByAddressResponse): Uint8Array {
    return QuerySellOrdersByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersByAddressResponse): QuerySellOrdersByAddressResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressResponse",
      value: QuerySellOrdersByAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedDenomsRequest(): QueryAllowedDenomsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllowedDenomsRequest = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest",
  encode(message: QueryAllowedDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowedDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsRequest();
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
  fromJSON(object: any): QueryAllowedDenomsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowedDenomsRequest): JsonSafe<QueryAllowedDenomsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowedDenomsRequest>): QueryAllowedDenomsRequest {
    const message = createBaseQueryAllowedDenomsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowedDenomsRequestSDKType): QueryAllowedDenomsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowedDenomsRequestAmino): QueryAllowedDenomsRequest {
    const message = createBaseQueryAllowedDenomsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowedDenomsRequestAminoMsg): QueryAllowedDenomsRequest {
    return QueryAllowedDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedDenomsRequestProtoMsg): QueryAllowedDenomsRequest {
    return QueryAllowedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryAllowedDenomsRequest): Uint8Array {
    return QueryAllowedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest",
      value: QueryAllowedDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedDenomsResponse(): QueryAllowedDenomsResponse {
  return {
    allowedDenoms: [],
    pagination: undefined
  };
}
export const QueryAllowedDenomsResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse",
  encode(message: QueryAllowedDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedDenoms) {
      AllowedDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowedDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedDenoms.push(AllowedDenom.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllowedDenomsResponse {
    return {
      allowedDenoms: Array.isArray(object?.allowedDenoms) ? object.allowedDenoms.map((e: any) => AllowedDenom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowedDenomsResponse): JsonSafe<QueryAllowedDenomsResponse> {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map(e => e ? AllowedDenom.toJSON(e) : undefined);
    } else {
      obj.allowedDenoms = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowedDenomsResponse>): QueryAllowedDenomsResponse {
    const message = createBaseQueryAllowedDenomsResponse();
    message.allowedDenoms = object.allowedDenoms?.map(e => AllowedDenom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowedDenomsResponseSDKType): QueryAllowedDenomsResponse {
    return {
      allowedDenoms: Array.isArray(object?.allowed_denoms) ? object.allowed_denoms.map((e: any) => AllowedDenom.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseSDKType {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e ? AllowedDenom.toSDK(e) : undefined);
    } else {
      obj.allowed_denoms = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowedDenomsResponseAmino): QueryAllowedDenomsResponse {
    const message = createBaseQueryAllowedDenomsResponse();
    message.allowedDenoms = object.allowed_denoms?.map(e => AllowedDenom.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseAmino {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e ? AllowedDenom.toAmino(e) : undefined);
    } else {
      obj.allowed_denoms = message.allowedDenoms;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowedDenomsResponseAminoMsg): QueryAllowedDenomsResponse {
    return QueryAllowedDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedDenomsResponseProtoMsg): QueryAllowedDenomsResponse {
    return QueryAllowedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryAllowedDenomsResponse): Uint8Array {
    return QueryAllowedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse",
      value: QueryAllowedDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseSellOrderInfo(): SellOrderInfo {
  return {
    id: BigInt(0),
    seller: "",
    batchDenom: "",
    quantity: "",
    askDenom: "",
    askPrice: "",
    disableAutoRetire: false,
    expiration: undefined
  };
}
export const SellOrderInfo = {
  typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo",
  encode(message: SellOrderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.batchDenom !== "") {
      writer.uint32(26).string(message.batchDenom);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }
    if (message.askDenom !== "") {
      writer.uint32(42).string(message.askDenom);
    }
    if (message.askPrice !== "") {
      writer.uint32(50).string(message.askPrice);
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(56).bool(message.disableAutoRetire);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SellOrderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.seller = reader.string();
          break;
        case 3:
          message.batchDenom = reader.string();
          break;
        case 4:
          message.quantity = reader.string();
          break;
        case 5:
          message.askDenom = reader.string();
          break;
        case 6:
          message.askPrice = reader.string();
          break;
        case 7:
          message.disableAutoRetire = reader.bool();
          break;
        case 9:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SellOrderInfo {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      seller: isSet(object.seller) ? String(object.seller) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : "",
      askPrice: isSet(object.askPrice) ? String(object.askPrice) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      expiration: isSet(object.expiration) ? new Date(object.expiration) : undefined
    };
  },
  toJSON(message: SellOrderInfo): JsonSafe<SellOrderInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.seller !== undefined && (obj.seller = message.seller);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    message.askPrice !== undefined && (obj.askPrice = message.askPrice);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<SellOrderInfo>): SellOrderInfo {
    const message = createBaseSellOrderInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.seller = object.seller ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.askDenom = object.askDenom ?? "";
    message.askPrice = object.askPrice ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromSDK(object: SellOrderInfoSDKType): SellOrderInfo {
    return {
      id: object?.id,
      seller: object?.seller,
      batchDenom: object?.batch_denom,
      quantity: object?.quantity,
      askDenom: object?.ask_denom,
      askPrice: object?.ask_price,
      disableAutoRetire: object?.disable_auto_retire,
      expiration: object.expiration ?? undefined
    };
  },
  toSDK(message: SellOrderInfo): SellOrderInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.seller = message.seller;
    obj.batch_denom = message.batchDenom;
    obj.quantity = message.quantity;
    obj.ask_denom = message.askDenom;
    obj.ask_price = message.askPrice;
    obj.disable_auto_retire = message.disableAutoRetire;
    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    return obj;
  },
  fromAmino(object: SellOrderInfoAmino): SellOrderInfo {
    const message = createBaseSellOrderInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.ask_denom !== undefined && object.ask_denom !== null) {
      message.askDenom = object.ask_denom;
    }
    if (object.ask_price !== undefined && object.ask_price !== null) {
      message.askPrice = object.ask_price;
    }
    if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
      message.disableAutoRetire = object.disable_auto_retire;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: SellOrderInfo): SellOrderInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.ask_denom = message.askDenom === "" ? undefined : message.askDenom;
    obj.ask_price = message.askPrice === "" ? undefined : message.askPrice;
    obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: SellOrderInfoAminoMsg): SellOrderInfo {
    return SellOrderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SellOrderInfoProtoMsg): SellOrderInfo {
    return SellOrderInfo.decode(message.value);
  },
  toProto(message: SellOrderInfo): Uint8Array {
    return SellOrderInfo.encode(message).finish();
  },
  toProtoMsg(message: SellOrderInfo): SellOrderInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo",
      value: SellOrderInfo.encode(message).finish()
    };
  }
};