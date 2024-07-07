import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Bitcannaid, BitcannaidAmino, BitcannaidSDKType } from "./bitcannaid";
import { Supplychain, SupplychainAmino, SupplychainSDKType } from "./supplychain";
import { BinaryReader, BinaryWriter } from "../binary";
import { JsonSafe } from "../json-safe";
import { DeepPartial, isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
export interface QueryGetBitcannaidRequest {
  id: bigint;
}
export interface QueryGetBitcannaidRequestProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest";
  value: Uint8Array;
}
export interface QueryGetBitcannaidRequestAmino {
  id?: string;
}
export interface QueryGetBitcannaidRequestAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest";
  value: QueryGetBitcannaidRequestAmino;
}
export interface QueryGetBitcannaidRequestSDKType {
  id: bigint;
}
export interface QueryGetBitcannaidResponse {
  bitcannaid: Bitcannaid | undefined;
}
export interface QueryGetBitcannaidResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse";
  value: Uint8Array;
}
export interface QueryGetBitcannaidResponseAmino {
  Bitcannaid?: BitcannaidAmino | undefined;
}
export interface QueryGetBitcannaidResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse";
  value: QueryGetBitcannaidResponseAmino;
}
export interface QueryGetBitcannaidResponseSDKType {
  Bitcannaid: BitcannaidSDKType | undefined;
}
export interface QueryAllBitcannaidRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryAllBitcannaidRequestProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest";
  value: Uint8Array;
}
export interface QueryAllBitcannaidRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAllBitcannaidRequestAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest";
  value: QueryAllBitcannaidRequestAmino;
}
export interface QueryAllBitcannaidRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAllBitcannaidResponse {
  bitcannaid: Bitcannaid[];
  pagination?: PageResponse | undefined;
}
export interface QueryAllBitcannaidResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse";
  value: Uint8Array;
}
export interface QueryAllBitcannaidResponseAmino {
  Bitcannaid?: BitcannaidAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAllBitcannaidResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse";
  value: QueryAllBitcannaidResponseAmino;
}
export interface QueryAllBitcannaidResponseSDKType {
  Bitcannaid: BitcannaidSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryGetSupplychainRequest {
  id: bigint;
}
export interface QueryGetSupplychainRequestProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest";
  value: Uint8Array;
}
export interface QueryGetSupplychainRequestAmino {
  id?: string;
}
export interface QueryGetSupplychainRequestAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest";
  value: QueryGetSupplychainRequestAmino;
}
export interface QueryGetSupplychainRequestSDKType {
  id: bigint;
}
export interface QueryGetSupplychainResponse {
  supplychain: Supplychain | undefined;
}
export interface QueryGetSupplychainResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse";
  value: Uint8Array;
}
export interface QueryGetSupplychainResponseAmino {
  Supplychain?: SupplychainAmino | undefined;
}
export interface QueryGetSupplychainResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse";
  value: QueryGetSupplychainResponseAmino;
}
export interface QueryGetSupplychainResponseSDKType {
  Supplychain: SupplychainSDKType | undefined;
}
export interface QueryAllSupplychainRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryAllSupplychainRequestProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest";
  value: Uint8Array;
}
export interface QueryAllSupplychainRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAllSupplychainRequestAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest";
  value: QueryAllSupplychainRequestAmino;
}
export interface QueryAllSupplychainRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAllSupplychainResponse {
  supplychain: Supplychain[];
  pagination?: PageResponse | undefined;
}
export interface QueryAllSupplychainResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse";
  value: Uint8Array;
}
export interface QueryAllSupplychainResponseAmino {
  Supplychain?: SupplychainAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAllSupplychainResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse";
  value: QueryAllSupplychainResponseAmino;
}
export interface QueryAllSupplychainResponseSDKType {
  Supplychain: SupplychainSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest",
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
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest",
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
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse",
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
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBitcannaidRequest(): QueryGetBitcannaidRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetBitcannaidRequest = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest",
  encode(message: QueryGetBitcannaidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBitcannaidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBitcannaidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetBitcannaidRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetBitcannaidRequest): JsonSafe<QueryGetBitcannaidRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetBitcannaidRequest>): QueryGetBitcannaidRequest {
    const message = createBaseQueryGetBitcannaidRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryGetBitcannaidRequestSDKType): QueryGetBitcannaidRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryGetBitcannaidRequest): QueryGetBitcannaidRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryGetBitcannaidRequestAmino): QueryGetBitcannaidRequest {
    const message = createBaseQueryGetBitcannaidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetBitcannaidRequest): QueryGetBitcannaidRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBitcannaidRequestAminoMsg): QueryGetBitcannaidRequest {
    return QueryGetBitcannaidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBitcannaidRequestProtoMsg): QueryGetBitcannaidRequest {
    return QueryGetBitcannaidRequest.decode(message.value);
  },
  toProto(message: QueryGetBitcannaidRequest): Uint8Array {
    return QueryGetBitcannaidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBitcannaidRequest): QueryGetBitcannaidRequestProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest",
      value: QueryGetBitcannaidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBitcannaidResponse(): QueryGetBitcannaidResponse {
  return {
    bitcannaid: Bitcannaid.fromPartial({})
  };
}
export const QueryGetBitcannaidResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse",
  encode(message: QueryGetBitcannaidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bitcannaid !== undefined) {
      Bitcannaid.encode(message.bitcannaid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBitcannaidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBitcannaidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitcannaid = Bitcannaid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetBitcannaidResponse {
    return {
      bitcannaid: isSet(object.bitcannaid) ? Bitcannaid.fromJSON(object.bitcannaid) : undefined
    };
  },
  toJSON(message: QueryGetBitcannaidResponse): JsonSafe<QueryGetBitcannaidResponse> {
    const obj: any = {};
    message.bitcannaid !== undefined && (obj.bitcannaid = message.bitcannaid ? Bitcannaid.toJSON(message.bitcannaid) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetBitcannaidResponse>): QueryGetBitcannaidResponse {
    const message = createBaseQueryGetBitcannaidResponse();
    message.bitcannaid = object.bitcannaid !== undefined && object.bitcannaid !== null ? Bitcannaid.fromPartial(object.bitcannaid) : undefined;
    return message;
  },
  fromSDK(object: QueryGetBitcannaidResponseSDKType): QueryGetBitcannaidResponse {
    return {
      bitcannaid: object.Bitcannaid ? Bitcannaid.fromSDK(object.Bitcannaid) : undefined
    };
  },
  toSDK(message: QueryGetBitcannaidResponse): QueryGetBitcannaidResponseSDKType {
    const obj: any = {};
    message.bitcannaid !== undefined && (obj.Bitcannaid = message.bitcannaid ? Bitcannaid.toSDK(message.bitcannaid) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetBitcannaidResponseAmino): QueryGetBitcannaidResponse {
    const message = createBaseQueryGetBitcannaidResponse();
    if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
      message.bitcannaid = Bitcannaid.fromAmino(object.Bitcannaid);
    }
    return message;
  },
  toAmino(message: QueryGetBitcannaidResponse): QueryGetBitcannaidResponseAmino {
    const obj: any = {};
    obj.Bitcannaid = message.bitcannaid ? Bitcannaid.toAmino(message.bitcannaid) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBitcannaidResponseAminoMsg): QueryGetBitcannaidResponse {
    return QueryGetBitcannaidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBitcannaidResponseProtoMsg): QueryGetBitcannaidResponse {
    return QueryGetBitcannaidResponse.decode(message.value);
  },
  toProto(message: QueryGetBitcannaidResponse): Uint8Array {
    return QueryGetBitcannaidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBitcannaidResponse): QueryGetBitcannaidResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse",
      value: QueryGetBitcannaidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBitcannaidRequest(): QueryAllBitcannaidRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllBitcannaidRequest = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest",
  encode(message: QueryAllBitcannaidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBitcannaidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBitcannaidRequest();
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
  fromJSON(object: any): QueryAllBitcannaidRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllBitcannaidRequest): JsonSafe<QueryAllBitcannaidRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllBitcannaidRequest>): QueryAllBitcannaidRequest {
    const message = createBaseQueryAllBitcannaidRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllBitcannaidRequestSDKType): QueryAllBitcannaidRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllBitcannaidRequest): QueryAllBitcannaidRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllBitcannaidRequestAmino): QueryAllBitcannaidRequest {
    const message = createBaseQueryAllBitcannaidRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBitcannaidRequest): QueryAllBitcannaidRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBitcannaidRequestAminoMsg): QueryAllBitcannaidRequest {
    return QueryAllBitcannaidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBitcannaidRequestProtoMsg): QueryAllBitcannaidRequest {
    return QueryAllBitcannaidRequest.decode(message.value);
  },
  toProto(message: QueryAllBitcannaidRequest): Uint8Array {
    return QueryAllBitcannaidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBitcannaidRequest): QueryAllBitcannaidRequestProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest",
      value: QueryAllBitcannaidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBitcannaidResponse(): QueryAllBitcannaidResponse {
  return {
    bitcannaid: [],
    pagination: undefined
  };
}
export const QueryAllBitcannaidResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse",
  encode(message: QueryAllBitcannaidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bitcannaid) {
      Bitcannaid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBitcannaidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBitcannaidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitcannaid.push(Bitcannaid.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllBitcannaidResponse {
    return {
      bitcannaid: Array.isArray(object?.bitcannaid) ? object.bitcannaid.map((e: any) => Bitcannaid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllBitcannaidResponse): JsonSafe<QueryAllBitcannaidResponse> {
    const obj: any = {};
    if (message.bitcannaid) {
      obj.bitcannaid = message.bitcannaid.map(e => e ? Bitcannaid.toJSON(e) : undefined);
    } else {
      obj.bitcannaid = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllBitcannaidResponse>): QueryAllBitcannaidResponse {
    const message = createBaseQueryAllBitcannaidResponse();
    message.bitcannaid = object.bitcannaid?.map(e => Bitcannaid.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllBitcannaidResponseSDKType): QueryAllBitcannaidResponse {
    return {
      bitcannaid: Array.isArray(object?.Bitcannaid) ? object.Bitcannaid.map((e: any) => Bitcannaid.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllBitcannaidResponse): QueryAllBitcannaidResponseSDKType {
    const obj: any = {};
    if (message.bitcannaid) {
      obj.Bitcannaid = message.bitcannaid.map(e => e ? Bitcannaid.toSDK(e) : undefined);
    } else {
      obj.Bitcannaid = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllBitcannaidResponseAmino): QueryAllBitcannaidResponse {
    const message = createBaseQueryAllBitcannaidResponse();
    message.bitcannaid = object.Bitcannaid?.map(e => Bitcannaid.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBitcannaidResponse): QueryAllBitcannaidResponseAmino {
    const obj: any = {};
    if (message.bitcannaid) {
      obj.Bitcannaid = message.bitcannaid.map(e => e ? Bitcannaid.toAmino(e) : undefined);
    } else {
      obj.Bitcannaid = message.bitcannaid;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBitcannaidResponseAminoMsg): QueryAllBitcannaidResponse {
    return QueryAllBitcannaidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBitcannaidResponseProtoMsg): QueryAllBitcannaidResponse {
    return QueryAllBitcannaidResponse.decode(message.value);
  },
  toProto(message: QueryAllBitcannaidResponse): Uint8Array {
    return QueryAllBitcannaidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBitcannaidResponse): QueryAllBitcannaidResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse",
      value: QueryAllBitcannaidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSupplychainRequest(): QueryGetSupplychainRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetSupplychainRequest = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest",
  encode(message: QueryGetSupplychainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSupplychainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSupplychainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetSupplychainRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetSupplychainRequest): JsonSafe<QueryGetSupplychainRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetSupplychainRequest>): QueryGetSupplychainRequest {
    const message = createBaseQueryGetSupplychainRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryGetSupplychainRequestSDKType): QueryGetSupplychainRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryGetSupplychainRequest): QueryGetSupplychainRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryGetSupplychainRequestAmino): QueryGetSupplychainRequest {
    const message = createBaseQueryGetSupplychainRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetSupplychainRequest): QueryGetSupplychainRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSupplychainRequestAminoMsg): QueryGetSupplychainRequest {
    return QueryGetSupplychainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSupplychainRequestProtoMsg): QueryGetSupplychainRequest {
    return QueryGetSupplychainRequest.decode(message.value);
  },
  toProto(message: QueryGetSupplychainRequest): Uint8Array {
    return QueryGetSupplychainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSupplychainRequest): QueryGetSupplychainRequestProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest",
      value: QueryGetSupplychainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSupplychainResponse(): QueryGetSupplychainResponse {
  return {
    supplychain: Supplychain.fromPartial({})
  };
}
export const QueryGetSupplychainResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse",
  encode(message: QueryGetSupplychainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplychain !== undefined) {
      Supplychain.encode(message.supplychain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSupplychainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSupplychainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplychain = Supplychain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetSupplychainResponse {
    return {
      supplychain: isSet(object.supplychain) ? Supplychain.fromJSON(object.supplychain) : undefined
    };
  },
  toJSON(message: QueryGetSupplychainResponse): JsonSafe<QueryGetSupplychainResponse> {
    const obj: any = {};
    message.supplychain !== undefined && (obj.supplychain = message.supplychain ? Supplychain.toJSON(message.supplychain) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetSupplychainResponse>): QueryGetSupplychainResponse {
    const message = createBaseQueryGetSupplychainResponse();
    message.supplychain = object.supplychain !== undefined && object.supplychain !== null ? Supplychain.fromPartial(object.supplychain) : undefined;
    return message;
  },
  fromSDK(object: QueryGetSupplychainResponseSDKType): QueryGetSupplychainResponse {
    return {
      supplychain: object.Supplychain ? Supplychain.fromSDK(object.Supplychain) : undefined
    };
  },
  toSDK(message: QueryGetSupplychainResponse): QueryGetSupplychainResponseSDKType {
    const obj: any = {};
    message.supplychain !== undefined && (obj.Supplychain = message.supplychain ? Supplychain.toSDK(message.supplychain) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetSupplychainResponseAmino): QueryGetSupplychainResponse {
    const message = createBaseQueryGetSupplychainResponse();
    if (object.Supplychain !== undefined && object.Supplychain !== null) {
      message.supplychain = Supplychain.fromAmino(object.Supplychain);
    }
    return message;
  },
  toAmino(message: QueryGetSupplychainResponse): QueryGetSupplychainResponseAmino {
    const obj: any = {};
    obj.Supplychain = message.supplychain ? Supplychain.toAmino(message.supplychain) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSupplychainResponseAminoMsg): QueryGetSupplychainResponse {
    return QueryGetSupplychainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSupplychainResponseProtoMsg): QueryGetSupplychainResponse {
    return QueryGetSupplychainResponse.decode(message.value);
  },
  toProto(message: QueryGetSupplychainResponse): Uint8Array {
    return QueryGetSupplychainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSupplychainResponse): QueryGetSupplychainResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse",
      value: QueryGetSupplychainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSupplychainRequest(): QueryAllSupplychainRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSupplychainRequest = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest",
  encode(message: QueryAllSupplychainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSupplychainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSupplychainRequest();
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
  fromJSON(object: any): QueryAllSupplychainRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllSupplychainRequest): JsonSafe<QueryAllSupplychainRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllSupplychainRequest>): QueryAllSupplychainRequest {
    const message = createBaseQueryAllSupplychainRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllSupplychainRequestSDKType): QueryAllSupplychainRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllSupplychainRequest): QueryAllSupplychainRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllSupplychainRequestAmino): QueryAllSupplychainRequest {
    const message = createBaseQueryAllSupplychainRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSupplychainRequest): QueryAllSupplychainRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSupplychainRequestAminoMsg): QueryAllSupplychainRequest {
    return QueryAllSupplychainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSupplychainRequestProtoMsg): QueryAllSupplychainRequest {
    return QueryAllSupplychainRequest.decode(message.value);
  },
  toProto(message: QueryAllSupplychainRequest): Uint8Array {
    return QueryAllSupplychainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSupplychainRequest): QueryAllSupplychainRequestProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest",
      value: QueryAllSupplychainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSupplychainResponse(): QueryAllSupplychainResponse {
  return {
    supplychain: [],
    pagination: undefined
  };
}
export const QueryAllSupplychainResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse",
  encode(message: QueryAllSupplychainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supplychain) {
      Supplychain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSupplychainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSupplychainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplychain.push(Supplychain.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllSupplychainResponse {
    return {
      supplychain: Array.isArray(object?.supplychain) ? object.supplychain.map((e: any) => Supplychain.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllSupplychainResponse): JsonSafe<QueryAllSupplychainResponse> {
    const obj: any = {};
    if (message.supplychain) {
      obj.supplychain = message.supplychain.map(e => e ? Supplychain.toJSON(e) : undefined);
    } else {
      obj.supplychain = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllSupplychainResponse>): QueryAllSupplychainResponse {
    const message = createBaseQueryAllSupplychainResponse();
    message.supplychain = object.supplychain?.map(e => Supplychain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllSupplychainResponseSDKType): QueryAllSupplychainResponse {
    return {
      supplychain: Array.isArray(object?.Supplychain) ? object.Supplychain.map((e: any) => Supplychain.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllSupplychainResponse): QueryAllSupplychainResponseSDKType {
    const obj: any = {};
    if (message.supplychain) {
      obj.Supplychain = message.supplychain.map(e => e ? Supplychain.toSDK(e) : undefined);
    } else {
      obj.Supplychain = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllSupplychainResponseAmino): QueryAllSupplychainResponse {
    const message = createBaseQueryAllSupplychainResponse();
    message.supplychain = object.Supplychain?.map(e => Supplychain.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSupplychainResponse): QueryAllSupplychainResponseAmino {
    const obj: any = {};
    if (message.supplychain) {
      obj.Supplychain = message.supplychain.map(e => e ? Supplychain.toAmino(e) : undefined);
    } else {
      obj.Supplychain = message.supplychain;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSupplychainResponseAminoMsg): QueryAllSupplychainResponse {
    return QueryAllSupplychainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSupplychainResponseProtoMsg): QueryAllSupplychainResponse {
    return QueryAllSupplychainResponse.decode(message.value);
  },
  toProto(message: QueryAllSupplychainResponse): Uint8Array {
    return QueryAllSupplychainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSupplychainResponse): QueryAllSupplychainResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse",
      value: QueryAllSupplychainResponse.encode(message).finish()
    };
  }
};