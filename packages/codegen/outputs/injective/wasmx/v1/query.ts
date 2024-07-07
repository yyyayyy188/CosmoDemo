import { Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequest {}
export interface QueryWasmxParamsRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest";
  value: Uint8Array;
}
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequestAmino {}
export interface QueryWasmxParamsRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryWasmxParamsRequest";
  value: QueryWasmxParamsRequestAmino;
}
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequestSDKType {}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponse {
  params: Params | undefined;
}
export interface QueryWasmxParamsResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse";
  value: Uint8Array;
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryWasmxParamsResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryWasmxParamsResponse";
  value: QueryWasmxParamsResponseAmino;
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest";
  value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponse {
  state?: GenesisState | undefined;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse";
  value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino | undefined;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType | undefined;
}
function createBaseQueryWasmxParamsRequest(): QueryWasmxParamsRequest {
  return {};
}
export const QueryWasmxParamsRequest = {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
  encode(_: QueryWasmxParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmxParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmxParamsRequest();
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
  fromJSON(_: any): QueryWasmxParamsRequest {
    return {};
  },
  toJSON(_: QueryWasmxParamsRequest): JsonSafe<QueryWasmxParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  },
  fromSDK(_: QueryWasmxParamsRequestSDKType): QueryWasmxParamsRequest {
    return {};
  },
  toSDK(_: QueryWasmxParamsRequest): QueryWasmxParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryWasmxParamsRequestAmino): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  },
  toAmino(_: QueryWasmxParamsRequest): QueryWasmxParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWasmxParamsRequestAminoMsg): QueryWasmxParamsRequest {
    return QueryWasmxParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWasmxParamsRequestProtoMsg): QueryWasmxParamsRequest {
    return QueryWasmxParamsRequest.decode(message.value);
  },
  toProto(message: QueryWasmxParamsRequest): Uint8Array {
    return QueryWasmxParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmxParamsRequest): QueryWasmxParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
      value: QueryWasmxParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWasmxParamsResponse(): QueryWasmxParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryWasmxParamsResponse = {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
  encode(message: QueryWasmxParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmxParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmxParamsResponse();
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
  fromJSON(object: any): QueryWasmxParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryWasmxParamsResponse): JsonSafe<QueryWasmxParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse {
    const message = createBaseQueryWasmxParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryWasmxParamsResponseSDKType): QueryWasmxParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryWasmxParamsResponseAmino): QueryWasmxParamsResponse {
    const message = createBaseQueryWasmxParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWasmxParamsResponseAminoMsg): QueryWasmxParamsResponse {
    return QueryWasmxParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWasmxParamsResponseProtoMsg): QueryWasmxParamsResponse {
    return QueryWasmxParamsResponse.decode(message.value);
  },
  toProto(message: QueryWasmxParamsResponse): Uint8Array {
    return QueryWasmxParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
      value: QueryWasmxParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
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
      typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
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
  typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
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
      typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};