import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ClassInfo, ClassInfoAmino, ClassInfoSDKType, BatchInfo, BatchInfoAmino, BatchInfoSDKType, CreditType, CreditTypeAmino, CreditTypeSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
  /** params defines the parameters of the ecocredit module. */
  params?: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the ecocredit module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType | undefined;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest";
  value: Uint8Array;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryClassesRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryClassesRequest";
  value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
  /** classes are the fetched credit classes. */
  classes: ClassInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse";
  value: Uint8Array;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseAmino {
  /** classes are the fetched credit classes. */
  classes?: ClassInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryClassesResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryClassesResponse";
  value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
  classes: ClassInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequest {
  /** class_id is the unique ID of credit class to query. */
  classId: string;
}
export interface QueryClassInfoRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest";
  value: Uint8Array;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequestAmino {
  /** class_id is the unique ID of credit class to query. */
  class_id?: string;
}
export interface QueryClassInfoRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest";
  value: QueryClassInfoRequestAmino;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequestSDKType {
  class_id: string;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponse {
  /** info is the ClassInfo for the credit class. */
  info?: ClassInfo | undefined;
}
export interface QueryClassInfoResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse";
  value: Uint8Array;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponseAmino {
  /** info is the ClassInfo for the credit class. */
  info?: ClassInfoAmino | undefined;
}
export interface QueryClassInfoResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse";
  value: QueryClassInfoResponseAmino;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponseSDKType {
  info?: ClassInfoSDKType | undefined;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
  /** class_id is the unique ID of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryBatchesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest";
  value: Uint8Array;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestAmino {
  /** class_id is the unique ID of the credit class to query. */
  class_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryBatchesRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryBatchesRequest";
  value: QueryBatchesRequestAmino;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
  /** batches are the fetched credit batches within the class. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryBatchesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse";
  value: Uint8Array;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseAmino {
  /** batches are the fetched credit batches within the class. */
  batches?: BatchInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryBatchesResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryBatchesResponse";
  value: QueryBatchesResponseAmino;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
  batches: BatchInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequest {
  /** batch_denom is the unique ID of credit batch to query. */
  batchDenom: string;
}
export interface QueryBatchInfoRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest";
  value: Uint8Array;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequestAmino {
  /** batch_denom is the unique ID of credit batch to query. */
  batch_denom?: string;
}
export interface QueryBatchInfoRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest";
  value: QueryBatchInfoRequestAmino;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequestSDKType {
  batch_denom: string;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponse {
  /** info is the BatchInfo for the credit batch. */
  info?: BatchInfo | undefined;
}
export interface QueryBatchInfoResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse";
  value: Uint8Array;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponseAmino {
  /** info is the BatchInfo for the credit batch. */
  info?: BatchInfoAmino | undefined;
}
export interface QueryBatchInfoResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse";
  value: QueryBatchInfoResponseAmino;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponseSDKType {
  info?: BatchInfoSDKType | undefined;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
  /** account is the address of the account whose balance is being queried. */
  account: string;
  /** batch_denom is the unique ID of credit batch balance to query. */
  batchDenom: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestAmino {
  /** account is the address of the account whose balance is being queried. */
  account?: string;
  /** batch_denom is the unique ID of credit batch balance to query. */
  batch_denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
  account: string;
  batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
  /** tradable_amount is the decimal number of tradable credits. */
  tradableAmount: string;
  /** retired_amount is the decimal number of retired credits. */
  retiredAmount: string;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseAmino {
  /** tradable_amount is the decimal number of tradable credits. */
  tradable_amount?: string;
  /** retired_amount is the decimal number of retired credits. */
  retired_amount?: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
  tradable_amount: string;
  retired_amount: string;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
  /** batch_denom is the unique ID of credit batch to query. */
  batchDenom: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest";
  value: Uint8Array;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestAmino {
  /** batch_denom is the unique ID of credit batch to query. */
  batch_denom?: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
  batch_denom: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
  /**
   * tradable_supply is the decimal number of tradable credits in the batch
   * supply.
   */
  tradableSupply: string;
  /**
   * retired_supply is the decimal number of retired credits in the batch
   * supply.
   */
  retiredSupply: string;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse";
  value: Uint8Array;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseAmino {
  /**
   * tradable_supply is the decimal number of tradable credits in the batch
   * supply.
   */
  tradable_supply?: string;
  /**
   * retired_supply is the decimal number of retired credits in the batch
   * supply.
   */
  retired_supply?: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
  tradable_supply: string;
  retired_supply: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {}
export interface QueryCreditTypesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest";
  value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestAmino {}
export interface QueryCreditTypesRequestAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest";
  value: QueryCreditTypesRequestAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
  /** list of credit types */
  creditTypes: CreditType[];
}
export interface QueryCreditTypesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse";
  value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseAmino {
  /** list of credit types */
  credit_types?: CreditTypeAmino[];
}
export interface QueryCreditTypesResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse";
  value: QueryCreditTypesResponseAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
  credit_types: CreditTypeSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest",
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
      typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse",
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
      typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest",
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromJSON(object: any): QueryClassesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesRequest): JsonSafe<QueryClassesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassesRequestSDKType): QueryClassesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesRequest): QueryClassesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse",
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesResponse): JsonSafe<QueryClassesResponse> {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassesResponseSDKType): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesResponse): QueryClassesResponseSDKType {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassInfoRequest(): QueryClassInfoRequest {
  return {
    classId: ""
  };
}
export const QueryClassInfoRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest",
  encode(message: QueryClassInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassInfoRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  toJSON(message: QueryClassInfoRequest): JsonSafe<QueryClassInfoRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassInfoRequest>): QueryClassInfoRequest {
    const message = createBaseQueryClassInfoRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromSDK(object: QueryClassInfoRequestSDKType): QueryClassInfoRequest {
    return {
      classId: object?.class_id
    };
  },
  toSDK(message: QueryClassInfoRequest): QueryClassInfoRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAmino(object: QueryClassInfoRequestAmino): QueryClassInfoRequest {
    const message = createBaseQueryClassInfoRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassInfoRequest): QueryClassInfoRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassInfoRequestAminoMsg): QueryClassInfoRequest {
    return QueryClassInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassInfoRequestProtoMsg): QueryClassInfoRequest {
    return QueryClassInfoRequest.decode(message.value);
  },
  toProto(message: QueryClassInfoRequest): Uint8Array {
    return QueryClassInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassInfoRequest): QueryClassInfoRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest",
      value: QueryClassInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassInfoResponse(): QueryClassInfoResponse {
  return {
    info: undefined
  };
}
export const QueryClassInfoResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse",
  encode(message: QueryClassInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      ClassInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = ClassInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassInfoResponse {
    return {
      info: isSet(object.info) ? ClassInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryClassInfoResponse): JsonSafe<QueryClassInfoResponse> {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? ClassInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassInfoResponse>): QueryClassInfoResponse {
    const message = createBaseQueryClassInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? ClassInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: QueryClassInfoResponseSDKType): QueryClassInfoResponse {
    return {
      info: object.info ? ClassInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: QueryClassInfoResponse): QueryClassInfoResponseSDKType {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? ClassInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassInfoResponseAmino): QueryClassInfoResponse {
    const message = createBaseQueryClassInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = ClassInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryClassInfoResponse): QueryClassInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? ClassInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassInfoResponseAminoMsg): QueryClassInfoResponse {
    return QueryClassInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassInfoResponseProtoMsg): QueryClassInfoResponse {
    return QueryClassInfoResponse.decode(message.value);
  },
  toProto(message: QueryClassInfoResponse): Uint8Array {
    return QueryClassInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassInfoResponse): QueryClassInfoResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse",
      value: QueryClassInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryBatchesRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest",
  encode(message: QueryBatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
  fromJSON(object: any): QueryBatchesRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesRequest): JsonSafe<QueryBatchesRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesRequest>): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesRequestSDKType): QueryBatchesRequest {
    return {
      classId: object?.class_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesRequest): QueryBatchesRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesRequestAmino): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesRequest): QueryBatchesRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesRequestAminoMsg): QueryBatchesRequest {
    return QueryBatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesRequestProtoMsg): QueryBatchesRequest {
    return QueryBatchesRequest.decode(message.value);
  },
  toProto(message: QueryBatchesRequest): Uint8Array {
    return QueryBatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesRequest): QueryBatchesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest",
      value: QueryBatchesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {
    batches: [],
    pagination: undefined
  };
}
export const QueryBatchesResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse",
  encode(message: QueryBatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesResponse): JsonSafe<QueryBatchesResponse> {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesResponse>): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesResponseSDKType): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesResponse): QueryBatchesResponseSDKType {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toSDK(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesResponseAmino): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesResponse): QueryBatchesResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesResponseAminoMsg): QueryBatchesResponse {
    return QueryBatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesResponseProtoMsg): QueryBatchesResponse {
    return QueryBatchesResponse.decode(message.value);
  },
  toProto(message: QueryBatchesResponse): Uint8Array {
    return QueryBatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesResponse): QueryBatchesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse",
      value: QueryBatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchInfoRequest(): QueryBatchInfoRequest {
  return {
    batchDenom: ""
  };
}
export const QueryBatchInfoRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest",
  encode(message: QueryBatchInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchInfoRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: QueryBatchInfoRequest): JsonSafe<QueryBatchInfoRequest> {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchInfoRequest>): QueryBatchInfoRequest {
    const message = createBaseQueryBatchInfoRequest();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: QueryBatchInfoRequestSDKType): QueryBatchInfoRequest {
    return {
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: QueryBatchInfoRequest): QueryBatchInfoRequestSDKType {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: QueryBatchInfoRequestAmino): QueryBatchInfoRequest {
    const message = createBaseQueryBatchInfoRequest();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QueryBatchInfoRequest): QueryBatchInfoRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QueryBatchInfoRequestAminoMsg): QueryBatchInfoRequest {
    return QueryBatchInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchInfoRequestProtoMsg): QueryBatchInfoRequest {
    return QueryBatchInfoRequest.decode(message.value);
  },
  toProto(message: QueryBatchInfoRequest): Uint8Array {
    return QueryBatchInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchInfoRequest): QueryBatchInfoRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest",
      value: QueryBatchInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchInfoResponse(): QueryBatchInfoResponse {
  return {
    info: undefined
  };
}
export const QueryBatchInfoResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse",
  encode(message: QueryBatchInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      BatchInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BatchInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchInfoResponse {
    return {
      info: isSet(object.info) ? BatchInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryBatchInfoResponse): JsonSafe<QueryBatchInfoResponse> {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? BatchInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchInfoResponse>): QueryBatchInfoResponse {
    const message = createBaseQueryBatchInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? BatchInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchInfoResponseSDKType): QueryBatchInfoResponse {
    return {
      info: object.info ? BatchInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: QueryBatchInfoResponse): QueryBatchInfoResponseSDKType {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? BatchInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchInfoResponseAmino): QueryBatchInfoResponse {
    const message = createBaseQueryBatchInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = BatchInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryBatchInfoResponse): QueryBatchInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? BatchInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchInfoResponseAminoMsg): QueryBatchInfoResponse {
    return QueryBatchInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchInfoResponseProtoMsg): QueryBatchInfoResponse {
    return QueryBatchInfoResponse.decode(message.value);
  },
  toProto(message: QueryBatchInfoResponse): Uint8Array {
    return QueryBatchInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchInfoResponse): QueryBatchInfoResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse",
      value: QueryBatchInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    account: "",
    batchDenom: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: QueryBalanceRequest): JsonSafe<QueryBalanceRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.account = object.account ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest {
    return {
      account: object?.account,
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    tradableAmount: "",
    retiredAmount: ""
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradableAmount !== "") {
      writer.uint32(10).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(18).string(message.retiredAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradableAmount = reader.string();
          break;
        case 2:
          message.retiredAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : ""
    };
  },
  toJSON(message: QueryBalanceResponse): JsonSafe<QueryBalanceResponse> {
    const obj: any = {};
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse {
    return {
      tradableAmount: object?.tradable_amount,
      retiredAmount: object?.retired_amount
    };
  },
  toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType {
    const obj: any = {};
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    return obj;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
    obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    batchDenom: ""
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: QuerySupplyRequest): JsonSafe<QuerySupplyRequest> {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: QuerySupplyRequestSDKType): QuerySupplyRequest {
    return {
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: QuerySupplyRequest): QuerySupplyRequestSDKType {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    tradableSupply: "",
    retiredSupply: ""
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradableSupply !== "") {
      writer.uint32(10).string(message.tradableSupply);
    }
    if (message.retiredSupply !== "") {
      writer.uint32(18).string(message.retiredSupply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradableSupply = reader.string();
          break;
        case 2:
          message.retiredSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    return {
      tradableSupply: isSet(object.tradableSupply) ? String(object.tradableSupply) : "",
      retiredSupply: isSet(object.retiredSupply) ? String(object.retiredSupply) : ""
    };
  },
  toJSON(message: QuerySupplyResponse): JsonSafe<QuerySupplyResponse> {
    const obj: any = {};
    message.tradableSupply !== undefined && (obj.tradableSupply = message.tradableSupply);
    message.retiredSupply !== undefined && (obj.retiredSupply = message.retiredSupply);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.tradableSupply = object.tradableSupply ?? "";
    message.retiredSupply = object.retiredSupply ?? "";
    return message;
  },
  fromSDK(object: QuerySupplyResponseSDKType): QuerySupplyResponse {
    return {
      tradableSupply: object?.tradable_supply,
      retiredSupply: object?.retired_supply
    };
  },
  toSDK(message: QuerySupplyResponse): QuerySupplyResponseSDKType {
    const obj: any = {};
    obj.tradable_supply = message.tradableSupply;
    obj.retired_supply = message.retiredSupply;
    return obj;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.tradable_supply !== undefined && object.tradable_supply !== null) {
      message.tradableSupply = object.tradable_supply;
    }
    if (object.retired_supply !== undefined && object.retired_supply !== null) {
      message.retiredSupply = object.retired_supply;
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.tradable_supply = message.tradableSupply === "" ? undefined : message.tradableSupply;
    obj.retired_supply = message.retiredSupply === "" ? undefined : message.retiredSupply;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCreditTypesRequest(): QueryCreditTypesRequest {
  return {};
}
export const QueryCreditTypesRequest = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest",
  encode(_: QueryCreditTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesRequest();
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
  fromJSON(_: any): QueryCreditTypesRequest {
    return {};
  },
  toJSON(_: QueryCreditTypesRequest): JsonSafe<QueryCreditTypesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryCreditTypesRequest>): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },
  fromSDK(_: QueryCreditTypesRequestSDKType): QueryCreditTypesRequest {
    return {};
  },
  toSDK(_: QueryCreditTypesRequest): QueryCreditTypesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryCreditTypesRequestAmino): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },
  toAmino(_: QueryCreditTypesRequest): QueryCreditTypesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCreditTypesRequestAminoMsg): QueryCreditTypesRequest {
    return QueryCreditTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCreditTypesRequestProtoMsg): QueryCreditTypesRequest {
    return QueryCreditTypesRequest.decode(message.value);
  },
  toProto(message: QueryCreditTypesRequest): Uint8Array {
    return QueryCreditTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCreditTypesRequest): QueryCreditTypesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest",
      value: QueryCreditTypesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCreditTypesResponse(): QueryCreditTypesResponse {
  return {
    creditTypes: []
  };
}
export const QueryCreditTypesResponse = {
  typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse",
  encode(message: QueryCreditTypesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.creditTypes) ? object.creditTypes.map((e: any) => CreditType.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCreditTypesResponse): JsonSafe<QueryCreditTypesResponse> {
    const obj: any = {};
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e => e ? CreditType.toJSON(e) : undefined);
    } else {
      obj.creditTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCreditTypesResponse>): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCreditTypesResponseSDKType): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.credit_types) ? object.credit_types.map((e: any) => CreditType.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCreditTypesResponse): QueryCreditTypesResponseSDKType {
    const obj: any = {};
    if (message.creditTypes) {
      obj.credit_types = message.creditTypes.map(e => e ? CreditType.toSDK(e) : undefined);
    } else {
      obj.credit_types = [];
    }
    return obj;
  },
  fromAmino(object: QueryCreditTypesResponseAmino): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = object.credit_types?.map(e => CreditType.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCreditTypesResponse): QueryCreditTypesResponseAmino {
    const obj: any = {};
    if (message.creditTypes) {
      obj.credit_types = message.creditTypes.map(e => e ? CreditType.toAmino(e) : undefined);
    } else {
      obj.credit_types = message.creditTypes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCreditTypesResponseAminoMsg): QueryCreditTypesResponse {
    return QueryCreditTypesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCreditTypesResponseProtoMsg): QueryCreditTypesResponse {
    return QueryCreditTypesResponse.decode(message.value);
  },
  toProto(message: QueryCreditTypesResponse): Uint8Array {
    return QueryCreditTypesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCreditTypesResponse): QueryCreditTypesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse",
      value: QueryCreditTypesResponse.encode(message).finish()
    };
  }
};