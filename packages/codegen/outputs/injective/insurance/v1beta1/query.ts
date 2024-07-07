import { Params, ParamsAmino, ParamsSDKType, InsuranceFund, InsuranceFundAmino, InsuranceFundSDKType } from "./insurance";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
/** QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams RPC method. */
export interface QueryInsuranceParamsRequest {}
export interface QueryInsuranceParamsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest";
  value: Uint8Array;
}
/** QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams RPC method. */
export interface QueryInsuranceParamsRequestAmino {}
export interface QueryInsuranceParamsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest";
  value: QueryInsuranceParamsRequestAmino;
}
/** QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams RPC method. */
export interface QueryInsuranceParamsRequestSDKType {}
/** QueryInsuranceParamsRequest is the response type for the Query/InsuranceParams RPC method. */
export interface QueryInsuranceParamsResponse {
  params: Params | undefined;
}
export interface QueryInsuranceParamsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse";
  value: Uint8Array;
}
/** QueryInsuranceParamsRequest is the response type for the Query/InsuranceParams RPC method. */
export interface QueryInsuranceParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryInsuranceParamsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse";
  value: QueryInsuranceParamsResponseAmino;
}
/** QueryInsuranceParamsRequest is the response type for the Query/InsuranceParams RPC method. */
export interface QueryInsuranceParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
/** QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryInsuranceFundRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest";
  value: Uint8Array;
}
/** QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundRequestAmino {
  /** Market ID for the market */
  market_id?: string;
}
export interface QueryInsuranceFundRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundRequest";
  value: QueryInsuranceFundRequestAmino;
}
/** QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundRequestSDKType {
  market_id: string;
}
/** QueryInsuranceFundResponse is the response type for the Query/InsuranceFund RPC method. */
export interface QueryInsuranceFundResponse {
  fund?: InsuranceFund | undefined;
}
export interface QueryInsuranceFundResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse";
  value: Uint8Array;
}
/** QueryInsuranceFundResponse is the response type for the Query/InsuranceFund RPC method. */
export interface QueryInsuranceFundResponseAmino {
  fund?: InsuranceFundAmino | undefined;
}
export interface QueryInsuranceFundResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundResponse";
  value: QueryInsuranceFundResponseAmino;
}
/** QueryInsuranceFundResponse is the response type for the Query/InsuranceFund RPC method. */
export interface QueryInsuranceFundResponseSDKType {
  fund?: InsuranceFundSDKType | undefined;
}
/** QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundsRequest {}
export interface QueryInsuranceFundsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest";
  value: Uint8Array;
}
/** QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundsRequestAmino {}
export interface QueryInsuranceFundsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest";
  value: QueryInsuranceFundsRequestAmino;
}
/** QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundsRequestSDKType {}
/** QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundsResponse {
  funds: InsuranceFund[];
}
export interface QueryInsuranceFundsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse";
  value: Uint8Array;
}
/** QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundsResponseAmino {
  funds?: InsuranceFundAmino[];
}
export interface QueryInsuranceFundsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse";
  value: QueryInsuranceFundsResponseAmino;
}
/** QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds RPC method. */
export interface QueryInsuranceFundsResponseSDKType {
  funds: InsuranceFundSDKType[];
}
/** QueryEstimatedRedemptionsRequest is the request type for the Query/EstimatedRedemptions RPC method. */
export interface QueryEstimatedRedemptionsRequest {
  marketId: string;
  address: string;
}
export interface QueryEstimatedRedemptionsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
  value: Uint8Array;
}
/** QueryEstimatedRedemptionsRequest is the request type for the Query/EstimatedRedemptions RPC method. */
export interface QueryEstimatedRedemptionsRequestAmino {
  marketId?: string;
  address?: string;
}
export interface QueryEstimatedRedemptionsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
  value: QueryEstimatedRedemptionsRequestAmino;
}
/** QueryEstimatedRedemptionsRequest is the request type for the Query/EstimatedRedemptions RPC method. */
export interface QueryEstimatedRedemptionsRequestSDKType {
  marketId: string;
  address: string;
}
/** QueryEstimatedRedemptionsResponse is the response type for the Query/EstimatedRedemptions RPC method. */
export interface QueryEstimatedRedemptionsResponse {
  amount: Coin[];
}
export interface QueryEstimatedRedemptionsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
  value: Uint8Array;
}
/** QueryEstimatedRedemptionsResponse is the response type for the Query/EstimatedRedemptions RPC method. */
export interface QueryEstimatedRedemptionsResponseAmino {
  amount?: CoinAmino[];
}
export interface QueryEstimatedRedemptionsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
  value: QueryEstimatedRedemptionsResponseAmino;
}
/** QueryEstimatedRedemptionsResponse is the response type for the Query/EstimatedRedemptions RPC method. */
export interface QueryEstimatedRedemptionsResponseSDKType {
  amount: CoinSDKType[];
}
/** QueryPendingRedemptionsRequest is the request type for the Query/PendingRedemptions RPC method. */
export interface QueryPendingRedemptionsRequest {
  marketId: string;
  address: string;
}
export interface QueryPendingRedemptionsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
  value: Uint8Array;
}
/** QueryPendingRedemptionsRequest is the request type for the Query/PendingRedemptions RPC method. */
export interface QueryPendingRedemptionsRequestAmino {
  marketId?: string;
  address?: string;
}
export interface QueryPendingRedemptionsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
  value: QueryPendingRedemptionsRequestAmino;
}
/** QueryPendingRedemptionsRequest is the request type for the Query/PendingRedemptions RPC method. */
export interface QueryPendingRedemptionsRequestSDKType {
  marketId: string;
  address: string;
}
/** QueryPendingRedemptionsResponse is the response type for the Query/PendingRedemptions RPC method. */
export interface QueryPendingRedemptionsResponse {
  amount: Coin[];
}
export interface QueryPendingRedemptionsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
  value: Uint8Array;
}
/** QueryPendingRedemptionsResponse is the response type for the Query/PendingRedemptions RPC method. */
export interface QueryPendingRedemptionsResponseAmino {
  amount?: CoinAmino[];
}
export interface QueryPendingRedemptionsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
  value: QueryPendingRedemptionsResponseAmino;
}
/** QueryPendingRedemptionsResponse is the response type for the Query/PendingRedemptions RPC method. */
export interface QueryPendingRedemptionsResponseSDKType {
  amount: CoinSDKType[];
}
/** QueryModuleStateRequest is the request type for the Query/InsuranceModuleState RPC method. */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/InsuranceModuleState RPC method. */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/InsuranceModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/InsuranceModuleState RPC method. */
export interface QueryModuleStateResponse {
  state?: GenesisState | undefined;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/InsuranceModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino | undefined;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/InsuranceModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType | undefined;
}
function createBaseQueryInsuranceParamsRequest(): QueryInsuranceParamsRequest {
  return {};
}
export const QueryInsuranceParamsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
  encode(_: QueryInsuranceParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceParamsRequest();
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
  fromJSON(_: any): QueryInsuranceParamsRequest {
    return {};
  },
  toJSON(_: QueryInsuranceParamsRequest): JsonSafe<QueryInsuranceParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryInsuranceParamsRequest>): QueryInsuranceParamsRequest {
    const message = createBaseQueryInsuranceParamsRequest();
    return message;
  },
  fromSDK(_: QueryInsuranceParamsRequestSDKType): QueryInsuranceParamsRequest {
    return {};
  },
  toSDK(_: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryInsuranceParamsRequestAmino): QueryInsuranceParamsRequest {
    const message = createBaseQueryInsuranceParamsRequest();
    return message;
  },
  toAmino(_: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceParamsRequestAminoMsg): QueryInsuranceParamsRequest {
    return QueryInsuranceParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceParamsRequestProtoMsg): QueryInsuranceParamsRequest {
    return QueryInsuranceParamsRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceParamsRequest): Uint8Array {
    return QueryInsuranceParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
      value: QueryInsuranceParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceParamsResponse(): QueryInsuranceParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryInsuranceParamsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
  encode(message: QueryInsuranceParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceParamsResponse();
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
  fromJSON(object: any): QueryInsuranceParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryInsuranceParamsResponse): JsonSafe<QueryInsuranceParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryInsuranceParamsResponse>): QueryInsuranceParamsResponse {
    const message = createBaseQueryInsuranceParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryInsuranceParamsResponseSDKType): QueryInsuranceParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryInsuranceParamsResponseAmino): QueryInsuranceParamsResponse {
    const message = createBaseQueryInsuranceParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceParamsResponseAminoMsg): QueryInsuranceParamsResponse {
    return QueryInsuranceParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceParamsResponseProtoMsg): QueryInsuranceParamsResponse {
    return QueryInsuranceParamsResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceParamsResponse): Uint8Array {
    return QueryInsuranceParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
      value: QueryInsuranceParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundRequest(): QueryInsuranceFundRequest {
  return {
    marketId: ""
  };
}
export const QueryInsuranceFundRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
  encode(message: QueryInsuranceFundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInsuranceFundRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryInsuranceFundRequest): JsonSafe<QueryInsuranceFundRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest {
    const message = createBaseQueryInsuranceFundRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryInsuranceFundRequestSDKType): QueryInsuranceFundRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryInsuranceFundRequestAmino): QueryInsuranceFundRequest {
    const message = createBaseQueryInsuranceFundRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundRequestAminoMsg): QueryInsuranceFundRequest {
    return QueryInsuranceFundRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundRequestProtoMsg): QueryInsuranceFundRequest {
    return QueryInsuranceFundRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceFundRequest): Uint8Array {
    return QueryInsuranceFundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
      value: QueryInsuranceFundRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundResponse(): QueryInsuranceFundResponse {
  return {
    fund: undefined
  };
}
export const QueryInsuranceFundResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
  encode(message: QueryInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fund = InsuranceFund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInsuranceFundResponse {
    return {
      fund: isSet(object.fund) ? InsuranceFund.fromJSON(object.fund) : undefined
    };
  },
  toJSON(message: QueryInsuranceFundResponse): JsonSafe<QueryInsuranceFundResponse> {
    const obj: any = {};
    message.fund !== undefined && (obj.fund = message.fund ? InsuranceFund.toJSON(message.fund) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse {
    const message = createBaseQueryInsuranceFundResponse();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  },
  fromSDK(object: QueryInsuranceFundResponseSDKType): QueryInsuranceFundResponse {
    return {
      fund: object.fund ? InsuranceFund.fromSDK(object.fund) : undefined
    };
  },
  toSDK(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseSDKType {
    const obj: any = {};
    message.fund !== undefined && (obj.fund = message.fund ? InsuranceFund.toSDK(message.fund) : undefined);
    return obj;
  },
  fromAmino(object: QueryInsuranceFundResponseAmino): QueryInsuranceFundResponse {
    const message = createBaseQueryInsuranceFundResponse();
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = InsuranceFund.fromAmino(object.fund);
    }
    return message;
  },
  toAmino(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseAmino {
    const obj: any = {};
    obj.fund = message.fund ? InsuranceFund.toAmino(message.fund) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundResponseAminoMsg): QueryInsuranceFundResponse {
    return QueryInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundResponseProtoMsg): QueryInsuranceFundResponse {
    return QueryInsuranceFundResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceFundResponse): Uint8Array {
    return QueryInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
      value: QueryInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundsRequest(): QueryInsuranceFundsRequest {
  return {};
}
export const QueryInsuranceFundsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
  encode(_: QueryInsuranceFundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundsRequest();
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
  fromJSON(_: any): QueryInsuranceFundsRequest {
    return {};
  },
  toJSON(_: QueryInsuranceFundsRequest): JsonSafe<QueryInsuranceFundsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryInsuranceFundsRequest>): QueryInsuranceFundsRequest {
    const message = createBaseQueryInsuranceFundsRequest();
    return message;
  },
  fromSDK(_: QueryInsuranceFundsRequestSDKType): QueryInsuranceFundsRequest {
    return {};
  },
  toSDK(_: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryInsuranceFundsRequestAmino): QueryInsuranceFundsRequest {
    const message = createBaseQueryInsuranceFundsRequest();
    return message;
  },
  toAmino(_: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundsRequestAminoMsg): QueryInsuranceFundsRequest {
    return QueryInsuranceFundsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundsRequestProtoMsg): QueryInsuranceFundsRequest {
    return QueryInsuranceFundsRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceFundsRequest): Uint8Array {
    return QueryInsuranceFundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
      value: QueryInsuranceFundsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundsResponse(): QueryInsuranceFundsResponse {
  return {
    funds: []
  };
}
export const QueryInsuranceFundsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
  encode(message: QueryInsuranceFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.funds) {
      InsuranceFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funds.push(InsuranceFund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInsuranceFundsResponse {
    return {
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => InsuranceFund.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryInsuranceFundsResponse): JsonSafe<QueryInsuranceFundsResponse> {
    const obj: any = {};
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? InsuranceFund.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryInsuranceFundsResponse>): QueryInsuranceFundsResponse {
    const message = createBaseQueryInsuranceFundsResponse();
    message.funds = object.funds?.map(e => InsuranceFund.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryInsuranceFundsResponseSDKType): QueryInsuranceFundsResponse {
    return {
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => InsuranceFund.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseSDKType {
    const obj: any = {};
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? InsuranceFund.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: QueryInsuranceFundsResponseAmino): QueryInsuranceFundsResponse {
    const message = createBaseQueryInsuranceFundsResponse();
    message.funds = object.funds?.map(e => InsuranceFund.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseAmino {
    const obj: any = {};
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? InsuranceFund.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundsResponseAminoMsg): QueryInsuranceFundsResponse {
    return QueryInsuranceFundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundsResponseProtoMsg): QueryInsuranceFundsResponse {
    return QueryInsuranceFundsResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceFundsResponse): Uint8Array {
    return QueryInsuranceFundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
      value: QueryInsuranceFundsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimatedRedemptionsRequest(): QueryEstimatedRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}
export const QueryEstimatedRedemptionsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
  encode(message: QueryEstimatedRedemptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedRedemptionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedRedemptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedRedemptionsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryEstimatedRedemptionsRequest): JsonSafe<QueryEstimatedRedemptionsRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEstimatedRedemptionsRequest>): QueryEstimatedRedemptionsRequest {
    const message = createBaseQueryEstimatedRedemptionsRequest();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryEstimatedRedemptionsRequestSDKType): QueryEstimatedRedemptionsRequest {
    return {
      marketId: object?.marketId,
      address: object?.address
    };
  },
  toSDK(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestSDKType {
    const obj: any = {};
    obj.marketId = message.marketId;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryEstimatedRedemptionsRequestAmino): QueryEstimatedRedemptionsRequest {
    const message = createBaseQueryEstimatedRedemptionsRequest();
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestAmino {
    const obj: any = {};
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedRedemptionsRequestAminoMsg): QueryEstimatedRedemptionsRequest {
    return QueryEstimatedRedemptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedRedemptionsRequestProtoMsg): QueryEstimatedRedemptionsRequest {
    return QueryEstimatedRedemptionsRequest.decode(message.value);
  },
  toProto(message: QueryEstimatedRedemptionsRequest): Uint8Array {
    return QueryEstimatedRedemptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
      value: QueryEstimatedRedemptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimatedRedemptionsResponse(): QueryEstimatedRedemptionsResponse {
  return {
    amount: []
  };
}
export const QueryEstimatedRedemptionsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
  encode(message: QueryEstimatedRedemptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedRedemptionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedRedemptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryEstimatedRedemptionsResponse): JsonSafe<QueryEstimatedRedemptionsResponse> {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEstimatedRedemptionsResponse>): QueryEstimatedRedemptionsResponse {
    const message = createBaseQueryEstimatedRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryEstimatedRedemptionsResponseSDKType): QueryEstimatedRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: QueryEstimatedRedemptionsResponseAmino): QueryEstimatedRedemptionsResponse {
    const message = createBaseQueryEstimatedRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedRedemptionsResponseAminoMsg): QueryEstimatedRedemptionsResponse {
    return QueryEstimatedRedemptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedRedemptionsResponseProtoMsg): QueryEstimatedRedemptionsResponse {
    return QueryEstimatedRedemptionsResponse.decode(message.value);
  },
  toProto(message: QueryEstimatedRedemptionsResponse): Uint8Array {
    return QueryEstimatedRedemptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
      value: QueryEstimatedRedemptionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRedemptionsRequest(): QueryPendingRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}
export const QueryPendingRedemptionsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
  encode(message: QueryPendingRedemptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingRedemptionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingRedemptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingRedemptionsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryPendingRedemptionsRequest): JsonSafe<QueryPendingRedemptionsRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPendingRedemptionsRequest>): QueryPendingRedemptionsRequest {
    const message = createBaseQueryPendingRedemptionsRequest();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryPendingRedemptionsRequestSDKType): QueryPendingRedemptionsRequest {
    return {
      marketId: object?.marketId,
      address: object?.address
    };
  },
  toSDK(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestSDKType {
    const obj: any = {};
    obj.marketId = message.marketId;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryPendingRedemptionsRequestAmino): QueryPendingRedemptionsRequest {
    const message = createBaseQueryPendingRedemptionsRequest();
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestAmino {
    const obj: any = {};
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPendingRedemptionsRequestAminoMsg): QueryPendingRedemptionsRequest {
    return QueryPendingRedemptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRedemptionsRequestProtoMsg): QueryPendingRedemptionsRequest {
    return QueryPendingRedemptionsRequest.decode(message.value);
  },
  toProto(message: QueryPendingRedemptionsRequest): Uint8Array {
    return QueryPendingRedemptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
      value: QueryPendingRedemptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRedemptionsResponse(): QueryPendingRedemptionsResponse {
  return {
    amount: []
  };
}
export const QueryPendingRedemptionsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
  encode(message: QueryPendingRedemptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingRedemptionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingRedemptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPendingRedemptionsResponse): JsonSafe<QueryPendingRedemptionsResponse> {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPendingRedemptionsResponse>): QueryPendingRedemptionsResponse {
    const message = createBaseQueryPendingRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryPendingRedemptionsResponseSDKType): QueryPendingRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: QueryPendingRedemptionsResponseAmino): QueryPendingRedemptionsResponse {
    const message = createBaseQueryPendingRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingRedemptionsResponseAminoMsg): QueryPendingRedemptionsResponse {
    return QueryPendingRedemptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRedemptionsResponseProtoMsg): QueryPendingRedemptionsResponse {
    return QueryPendingRedemptionsResponse.decode(message.value);
  },
  toProto(message: QueryPendingRedemptionsResponse): Uint8Array {
    return QueryPendingRedemptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
      value: QueryPendingRedemptionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
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
      typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
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
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
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
      typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};