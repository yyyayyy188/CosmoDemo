import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface MsgCreateRequest {
  from: string;
  pairId: bigint;
  amountIn: string;
  amountOut: string;
}
export interface MsgCreateRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest";
  value: Uint8Array;
}
export interface MsgCreateRequestAmino {
  from?: string;
  pair_id?: string;
  amount_in?: string;
  amount_out?: string;
}
export interface MsgCreateRequestAminoMsg {
  type: "/comdex.vault.v1beta1.MsgCreateRequest";
  value: MsgCreateRequestAmino;
}
export interface MsgCreateRequestSDKType {
  from: string;
  pair_id: bigint;
  amount_in: string;
  amount_out: string;
}
export interface MsgCreateResponse {}
export interface MsgCreateResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgCreateResponse";
  value: Uint8Array;
}
export interface MsgCreateResponseAmino {}
export interface MsgCreateResponseAminoMsg {
  type: "/comdex.vault.v1beta1.MsgCreateResponse";
  value: MsgCreateResponseAmino;
}
export interface MsgCreateResponseSDKType {}
export interface MsgDepositRequest {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgDepositRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgDepositRequest";
  value: Uint8Array;
}
export interface MsgDepositRequestAmino {
  from?: string;
  id?: string;
  amount?: string;
}
export interface MsgDepositRequestAminoMsg {
  type: "/comdex.vault.v1beta1.MsgDepositRequest";
  value: MsgDepositRequestAmino;
}
export interface MsgDepositRequestSDKType {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/comdex.vault.v1beta1.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {}
export interface MsgWithdrawRequest {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgWithdrawRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgWithdrawRequest";
  value: Uint8Array;
}
export interface MsgWithdrawRequestAmino {
  from?: string;
  id?: string;
  amount?: string;
}
export interface MsgWithdrawRequestAminoMsg {
  type: "/comdex.vault.v1beta1.MsgWithdrawRequest";
  value: MsgWithdrawRequestAmino;
}
export interface MsgWithdrawRequestSDKType {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgWithdrawResponse";
  value: Uint8Array;
}
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
  type: "/comdex.vault.v1beta1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
export interface MsgWithdrawResponseSDKType {}
export interface MsgDrawRequest {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgDrawRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgDrawRequest";
  value: Uint8Array;
}
export interface MsgDrawRequestAmino {
  from?: string;
  id?: string;
  amount?: string;
}
export interface MsgDrawRequestAminoMsg {
  type: "/comdex.vault.v1beta1.MsgDrawRequest";
  value: MsgDrawRequestAmino;
}
export interface MsgDrawRequestSDKType {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgDrawResponse {}
export interface MsgDrawResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgDrawResponse";
  value: Uint8Array;
}
export interface MsgDrawResponseAmino {}
export interface MsgDrawResponseAminoMsg {
  type: "/comdex.vault.v1beta1.MsgDrawResponse";
  value: MsgDrawResponseAmino;
}
export interface MsgDrawResponseSDKType {}
export interface MsgRepayRequest {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgRepayRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgRepayRequest";
  value: Uint8Array;
}
export interface MsgRepayRequestAmino {
  from?: string;
  id?: string;
  amount?: string;
}
export interface MsgRepayRequestAminoMsg {
  type: "/comdex.vault.v1beta1.MsgRepayRequest";
  value: MsgRepayRequestAmino;
}
export interface MsgRepayRequestSDKType {
  from: string;
  id: bigint;
  amount: string;
}
export interface MsgRepayResponse {}
export interface MsgRepayResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgRepayResponse";
  value: Uint8Array;
}
export interface MsgRepayResponseAmino {}
export interface MsgRepayResponseAminoMsg {
  type: "/comdex.vault.v1beta1.MsgRepayResponse";
  value: MsgRepayResponseAmino;
}
export interface MsgRepayResponseSDKType {}
export interface MsgCloseRequest {
  from: string;
  id: bigint;
}
export interface MsgCloseRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest";
  value: Uint8Array;
}
export interface MsgCloseRequestAmino {
  from?: string;
  id?: string;
}
export interface MsgCloseRequestAminoMsg {
  type: "/comdex.vault.v1beta1.MsgCloseRequest";
  value: MsgCloseRequestAmino;
}
export interface MsgCloseRequestSDKType {
  from: string;
  id: bigint;
}
export interface MsgCloseResponse {}
export interface MsgCloseResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.MsgCloseResponse";
  value: Uint8Array;
}
export interface MsgCloseResponseAmino {}
export interface MsgCloseResponseAminoMsg {
  type: "/comdex.vault.v1beta1.MsgCloseResponse";
  value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {}
function createBaseMsgCreateRequest(): MsgCreateRequest {
  return {
    from: "",
    pairId: BigInt(0),
    amountIn: "",
    amountOut: ""
  };
}
export const MsgCreateRequest = {
  typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest",
  encode(message: MsgCreateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.pairId !== BigInt(0)) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(34).string(message.amountOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.pairId = reader.uint64();
          break;
        case 3:
          message.amountIn = reader.string();
          break;
        case 4:
          message.amountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      pairId: isSet(object.pairId) ? BigInt(object.pairId.toString()) : BigInt(0),
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : ""
    };
  },
  toJSON(message: MsgCreateRequest): JsonSafe<MsgCreateRequest> {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.pairId !== undefined && (obj.pairId = (message.pairId || BigInt(0)).toString());
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateRequest>): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.from = object.from ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? BigInt(object.pairId.toString()) : BigInt(0);
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
  fromSDK(object: MsgCreateRequestSDKType): MsgCreateRequest {
    return {
      from: object?.from,
      pairId: object?.pair_id,
      amountIn: object?.amount_in,
      amountOut: object?.amount_out
    };
  },
  toSDK(message: MsgCreateRequest): MsgCreateRequestSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.pair_id = message.pairId;
    obj.amount_in = message.amountIn;
    obj.amount_out = message.amountOut;
    return obj;
  },
  fromAmino(object: MsgCreateRequestAmino): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = BigInt(object.pair_id);
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = object.amount_in;
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = object.amount_out;
    }
    return message;
  },
  toAmino(message: MsgCreateRequest): MsgCreateRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.pair_id = message.pairId !== BigInt(0) ? message.pairId.toString() : undefined;
    obj.amount_in = message.amountIn === "" ? undefined : message.amountIn;
    obj.amount_out = message.amountOut === "" ? undefined : message.amountOut;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRequestAminoMsg): MsgCreateRequest {
    return MsgCreateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRequestProtoMsg): MsgCreateRequest {
    return MsgCreateRequest.decode(message.value);
  },
  toProto(message: MsgCreateRequest): Uint8Array {
    return MsgCreateRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRequest): MsgCreateRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest",
      value: MsgCreateRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}
export const MsgCreateResponse = {
  typeUrl: "/comdex.vault.v1beta1.MsgCreateResponse",
  encode(_: MsgCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
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
  fromJSON(_: any): MsgCreateResponse {
    return {};
  },
  toJSON(_: MsgCreateResponse): JsonSafe<MsgCreateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
  fromSDK(_: MsgCreateResponseSDKType): MsgCreateResponse {
    return {};
  },
  toSDK(_: MsgCreateResponse): MsgCreateResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateResponseAmino): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
  toAmino(_: MsgCreateResponse): MsgCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse {
    return MsgCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse {
    return MsgCreateResponse.decode(message.value);
  },
  toProto(message: MsgCreateResponse): Uint8Array {
    return MsgCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgCreateResponse",
      value: MsgCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositRequest(): MsgDepositRequest {
  return {
    from: "",
    id: BigInt(0),
    amount: ""
  };
}
export const MsgDepositRequest = {
  typeUrl: "/comdex.vault.v1beta1.MsgDepositRequest",
  encode(message: MsgDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDepositRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgDepositRequest): JsonSafe<MsgDepositRequest> {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDepositRequest>): MsgDepositRequest {
    const message = createBaseMsgDepositRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgDepositRequestSDKType): MsgDepositRequest {
    return {
      from: object?.from,
      id: object?.id,
      amount: object?.amount
    };
  },
  toSDK(message: MsgDepositRequest): MsgDepositRequestSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.id = message.id;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgDepositRequestAmino): MsgDepositRequest {
    const message = createBaseMsgDepositRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgDepositRequest): MsgDepositRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgDepositRequestAminoMsg): MsgDepositRequest {
    return MsgDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositRequestProtoMsg): MsgDepositRequest {
    return MsgDepositRequest.decode(message.value);
  },
  toProto(message: MsgDepositRequest): Uint8Array {
    return MsgDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositRequest): MsgDepositRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgDepositRequest",
      value: MsgDepositRequest.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/comdex.vault.v1beta1.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  toJSON(_: MsgDepositResponse): JsonSafe<MsgDepositResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },
  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRequest(): MsgWithdrawRequest {
  return {
    from: "",
    id: BigInt(0),
    amount: ""
  };
}
export const MsgWithdrawRequest = {
  typeUrl: "/comdex.vault.v1beta1.MsgWithdrawRequest",
  encode(message: MsgWithdrawRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgWithdrawRequest): JsonSafe<MsgWithdrawRequest> {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawRequest>): MsgWithdrawRequest {
    const message = createBaseMsgWithdrawRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawRequestSDKType): MsgWithdrawRequest {
    return {
      from: object?.from,
      id: object?.id,
      amount: object?.amount
    };
  },
  toSDK(message: MsgWithdrawRequest): MsgWithdrawRequestSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.id = message.id;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgWithdrawRequestAmino): MsgWithdrawRequest {
    const message = createBaseMsgWithdrawRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgWithdrawRequest): MsgWithdrawRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRequestAminoMsg): MsgWithdrawRequest {
    return MsgWithdrawRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRequestProtoMsg): MsgWithdrawRequest {
    return MsgWithdrawRequest.decode(message.value);
  },
  toProto(message: MsgWithdrawRequest): Uint8Array {
    return MsgWithdrawRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRequest): MsgWithdrawRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgWithdrawRequest",
      value: MsgWithdrawRequest.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/comdex.vault.v1beta1.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
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
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  toJSON(_: MsgWithdrawResponse): JsonSafe<MsgWithdrawResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawResponseSDKType): MsgWithdrawResponse {
    return {};
  },
  toSDK(_: MsgWithdrawResponse): MsgWithdrawResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDrawRequest(): MsgDrawRequest {
  return {
    from: "",
    id: BigInt(0),
    amount: ""
  };
}
export const MsgDrawRequest = {
  typeUrl: "/comdex.vault.v1beta1.MsgDrawRequest",
  encode(message: MsgDrawRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDrawRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDrawRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgDrawRequest): JsonSafe<MsgDrawRequest> {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDrawRequest>): MsgDrawRequest {
    const message = createBaseMsgDrawRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgDrawRequestSDKType): MsgDrawRequest {
    return {
      from: object?.from,
      id: object?.id,
      amount: object?.amount
    };
  },
  toSDK(message: MsgDrawRequest): MsgDrawRequestSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.id = message.id;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgDrawRequestAmino): MsgDrawRequest {
    const message = createBaseMsgDrawRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgDrawRequest): MsgDrawRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgDrawRequestAminoMsg): MsgDrawRequest {
    return MsgDrawRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDrawRequestProtoMsg): MsgDrawRequest {
    return MsgDrawRequest.decode(message.value);
  },
  toProto(message: MsgDrawRequest): Uint8Array {
    return MsgDrawRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgDrawRequest): MsgDrawRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgDrawRequest",
      value: MsgDrawRequest.encode(message).finish()
    };
  }
};
function createBaseMsgDrawResponse(): MsgDrawResponse {
  return {};
}
export const MsgDrawResponse = {
  typeUrl: "/comdex.vault.v1beta1.MsgDrawResponse",
  encode(_: MsgDrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawResponse();
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
  fromJSON(_: any): MsgDrawResponse {
    return {};
  },
  toJSON(_: MsgDrawResponse): JsonSafe<MsgDrawResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDrawResponse>): MsgDrawResponse {
    const message = createBaseMsgDrawResponse();
    return message;
  },
  fromSDK(_: MsgDrawResponseSDKType): MsgDrawResponse {
    return {};
  },
  toSDK(_: MsgDrawResponse): MsgDrawResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDrawResponseAmino): MsgDrawResponse {
    const message = createBaseMsgDrawResponse();
    return message;
  },
  toAmino(_: MsgDrawResponse): MsgDrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDrawResponseAminoMsg): MsgDrawResponse {
    return MsgDrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDrawResponseProtoMsg): MsgDrawResponse {
    return MsgDrawResponse.decode(message.value);
  },
  toProto(message: MsgDrawResponse): Uint8Array {
    return MsgDrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDrawResponse): MsgDrawResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgDrawResponse",
      value: MsgDrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRepayRequest(): MsgRepayRequest {
  return {
    from: "",
    id: BigInt(0),
    amount: ""
  };
}
export const MsgRepayRequest = {
  typeUrl: "/comdex.vault.v1beta1.MsgRepayRequest",
  encode(message: MsgRepayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRepayRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRepayRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgRepayRequest): JsonSafe<MsgRepayRequest> {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRepayRequest>): MsgRepayRequest {
    const message = createBaseMsgRepayRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgRepayRequestSDKType): MsgRepayRequest {
    return {
      from: object?.from,
      id: object?.id,
      amount: object?.amount
    };
  },
  toSDK(message: MsgRepayRequest): MsgRepayRequestSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.id = message.id;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgRepayRequestAmino): MsgRepayRequest {
    const message = createBaseMsgRepayRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgRepayRequest): MsgRepayRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgRepayRequestAminoMsg): MsgRepayRequest {
    return MsgRepayRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayRequestProtoMsg): MsgRepayRequest {
    return MsgRepayRequest.decode(message.value);
  },
  toProto(message: MsgRepayRequest): Uint8Array {
    return MsgRepayRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayRequest): MsgRepayRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgRepayRequest",
      value: MsgRepayRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {};
}
export const MsgRepayResponse = {
  typeUrl: "/comdex.vault.v1beta1.MsgRepayResponse",
  encode(_: MsgRepayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRepayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayResponse();
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
  fromJSON(_: any): MsgRepayResponse {
    return {};
  },
  toJSON(_: MsgRepayResponse): JsonSafe<MsgRepayResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    return message;
  },
  fromSDK(_: MsgRepayResponseSDKType): MsgRepayResponse {
    return {};
  },
  toSDK(_: MsgRepayResponse): MsgRepayResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRepayResponseAmino): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    return message;
  },
  toAmino(_: MsgRepayResponse): MsgRepayResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse {
    return MsgRepayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse {
    return MsgRepayResponse.decode(message.value);
  },
  toProto(message: MsgRepayResponse): Uint8Array {
    return MsgRepayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgRepayResponse",
      value: MsgRepayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseRequest(): MsgCloseRequest {
  return {
    from: "",
    id: BigInt(0)
  };
}
export const MsgCloseRequest = {
  typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest",
  encode(message: MsgCloseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCloseRequest): JsonSafe<MsgCloseRequest> {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCloseRequest>): MsgCloseRequest {
    const message = createBaseMsgCloseRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCloseRequestSDKType): MsgCloseRequest {
    return {
      from: object?.from,
      id: object?.id
    };
  },
  toSDK(message: MsgCloseRequest): MsgCloseRequestSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: MsgCloseRequestAmino): MsgCloseRequest {
    const message = createBaseMsgCloseRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseRequest): MsgCloseRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseRequestAminoMsg): MsgCloseRequest {
    return MsgCloseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseRequestProtoMsg): MsgCloseRequest {
    return MsgCloseRequest.decode(message.value);
  },
  toProto(message: MsgCloseRequest): Uint8Array {
    return MsgCloseRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseRequest): MsgCloseRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest",
      value: MsgCloseRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {};
}
export const MsgCloseResponse = {
  typeUrl: "/comdex.vault.v1beta1.MsgCloseResponse",
  encode(_: MsgCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseResponse();
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
  fromJSON(_: any): MsgCloseResponse {
    return {};
  },
  toJSON(_: MsgCloseResponse): JsonSafe<MsgCloseResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCloseResponse>): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  },
  fromSDK(_: MsgCloseResponseSDKType): MsgCloseResponse {
    return {};
  },
  toSDK(_: MsgCloseResponse): MsgCloseResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseResponseAmino): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  },
  toAmino(_: MsgCloseResponse): MsgCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseResponseAminoMsg): MsgCloseResponse {
    return MsgCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseResponseProtoMsg): MsgCloseResponse {
    return MsgCloseResponse.decode(message.value);
  },
  toProto(message: MsgCloseResponse): Uint8Array {
    return MsgCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseResponse): MsgCloseResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.MsgCloseResponse",
      value: MsgCloseResponse.encode(message).finish()
    };
  }
};