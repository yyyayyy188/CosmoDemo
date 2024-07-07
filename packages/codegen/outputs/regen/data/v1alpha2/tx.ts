import { ContentHash, ContentHashAmino, ContentHashSDKType, ContentHash_Graph, ContentHash_Raw } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorData {
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;
  /** hash is the hash-based identifier for the anchored content. */
  hash?: ContentHash | undefined;
}
export interface MsgAnchorDataProtoMsg {
  typeUrl: "/regen.data.v1alpha2.MsgAnchorData";
  value: Uint8Array;
}
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorDataAmino {
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender?: string;
  /** hash is the hash-based identifier for the anchored content. */
  hash?: ContentHashAmino | undefined;
}
export interface MsgAnchorDataAminoMsg {
  type: "/regen.data.v1alpha2.MsgAnchorData";
  value: MsgAnchorDataAmino;
}
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorDataSDKType {
  sender: string;
  hash?: ContentHashSDKType | undefined;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp?: Date | undefined;
}
export interface MsgAnchorDataResponseProtoMsg {
  typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse";
  value: Uint8Array;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponseAmino {
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp?: string | undefined;
}
export interface MsgAnchorDataResponseAminoMsg {
  type: "/regen.data.v1alpha2.MsgAnchorDataResponse";
  value: MsgAnchorDataResponseAmino;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponseSDKType {
  timestamp?: Date | undefined;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignData {
  /**
   * signers are the addresses of the accounts signing the data.
   * By making a SignData request, the signers are attesting to the veracity
   * of the data referenced by the cid. The precise meaning of this may vary
   * depending on the underlying data.
   */
  signers: string[];
  /**
   * hash is the hash-based identifier for the anchored content. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  hash?: ContentHash_Graph | undefined;
}
export interface MsgSignDataProtoMsg {
  typeUrl: "/regen.data.v1alpha2.MsgSignData";
  value: Uint8Array;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignDataAmino {
  /**
   * signers are the addresses of the accounts signing the data.
   * By making a SignData request, the signers are attesting to the veracity
   * of the data referenced by the cid. The precise meaning of this may vary
   * depending on the underlying data.
   */
  signers?: string[];
  /**
   * hash is the hash-based identifier for the anchored content. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  hash?: ContentHash_GraphAmino | undefined;
}
export interface MsgSignDataAminoMsg {
  type: "/regen.data.v1alpha2.MsgSignData";
  value: MsgSignDataAmino;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignDataSDKType {
  signers: string[];
  hash?: ContentHash_GraphSDKType | undefined;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {}
export interface MsgSignDataResponseProtoMsg {
  typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse";
  value: Uint8Array;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponseAmino {}
export interface MsgSignDataResponseAminoMsg {
  type: "/regen.data.v1alpha2.MsgSignDataResponse";
  value: MsgSignDataResponseAmino;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponseSDKType {}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawData {
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;
  /** content_hash is the hash-based identifier for the anchored content. */
  contentHash?: ContentHash_Raw | undefined;
  /**
   * content is the content of the raw data corresponding to the provided
   * content hash.
   */
  content: Uint8Array;
}
export interface MsgStoreRawDataProtoMsg {
  typeUrl: "/regen.data.v1alpha2.MsgStoreRawData";
  value: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawDataAmino {
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender?: string;
  /** content_hash is the hash-based identifier for the anchored content. */
  content_hash?: ContentHash_RawAmino | undefined;
  /**
   * content is the content of the raw data corresponding to the provided
   * content hash.
   */
  content?: string;
}
export interface MsgStoreRawDataAminoMsg {
  type: "/regen.data.v1alpha2.MsgStoreRawData";
  value: MsgStoreRawDataAmino;
}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawDataSDKType {
  sender: string;
  content_hash?: ContentHash_RawSDKType | undefined;
  content: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponse {}
export interface MsgStoreRawDataResponseProtoMsg {
  typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse";
  value: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponseAmino {}
export interface MsgStoreRawDataResponseAminoMsg {
  type: "/regen.data.v1alpha2.MsgStoreRawDataResponse";
  value: MsgStoreRawDataResponseAmino;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponseSDKType {}
function createBaseMsgAnchorData(): MsgAnchorData {
  return {
    sender: "",
    hash: undefined
  };
}
export const MsgAnchorData = {
  typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
  encode(message: MsgAnchorData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchorData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnchorData {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined
    };
  },
  toJSON(message: MsgAnchorData): JsonSafe<MsgAnchorData> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAnchorData>): MsgAnchorData {
    const message = createBaseMsgAnchorData();
    message.sender = object.sender ?? "";
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    return message;
  },
  fromSDK(object: MsgAnchorDataSDKType): MsgAnchorData {
    return {
      sender: object?.sender,
      hash: object.hash ? ContentHash.fromSDK(object.hash) : undefined
    };
  },
  toSDK(message: MsgAnchorData): MsgAnchorDataSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toSDK(message.hash) : undefined);
    return obj;
  },
  fromAmino(object: MsgAnchorDataAmino): MsgAnchorData {
    const message = createBaseMsgAnchorData();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = ContentHash.fromAmino(object.hash);
    }
    return message;
  },
  toAmino(message: MsgAnchorData): MsgAnchorDataAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAnchorDataAminoMsg): MsgAnchorData {
    return MsgAnchorData.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnchorDataProtoMsg): MsgAnchorData {
    return MsgAnchorData.decode(message.value);
  },
  toProto(message: MsgAnchorData): Uint8Array {
    return MsgAnchorData.encode(message).finish();
  },
  toProtoMsg(message: MsgAnchorData): MsgAnchorDataProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
      value: MsgAnchorData.encode(message).finish()
    };
  }
};
function createBaseMsgAnchorDataResponse(): MsgAnchorDataResponse {
  return {
    timestamp: undefined
  };
}
export const MsgAnchorDataResponse = {
  typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse",
  encode(message: MsgAnchorDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchorDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnchorDataResponse {
    return {
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined
    };
  },
  toJSON(message: MsgAnchorDataResponse): JsonSafe<MsgAnchorDataResponse> {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAnchorDataResponse>): MsgAnchorDataResponse {
    const message = createBaseMsgAnchorDataResponse();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromSDK(object: MsgAnchorDataResponseSDKType): MsgAnchorDataResponse {
    return {
      timestamp: object.timestamp ?? undefined
    };
  },
  toSDK(message: MsgAnchorDataResponse): MsgAnchorDataResponseSDKType {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    return obj;
  },
  fromAmino(object: MsgAnchorDataResponseAmino): MsgAnchorDataResponse {
    const message = createBaseMsgAnchorDataResponse();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: MsgAnchorDataResponse): MsgAnchorDataResponseAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAnchorDataResponseAminoMsg): MsgAnchorDataResponse {
    return MsgAnchorDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnchorDataResponseProtoMsg): MsgAnchorDataResponse {
    return MsgAnchorDataResponse.decode(message.value);
  },
  toProto(message: MsgAnchorDataResponse): Uint8Array {
    return MsgAnchorDataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAnchorDataResponse): MsgAnchorDataResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse",
      value: MsgAnchorDataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSignData(): MsgSignData {
  return {
    signers: [],
    hash: undefined
  };
}
export const MsgSignData = {
  typeUrl: "/regen.data.v1alpha2.MsgSignData",
  encode(message: MsgSignData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    if (message.hash !== undefined) {
      ContentHash_Graph.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.hash = ContentHash_Graph.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSignData {
    return {
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      hash: isSet(object.hash) ? ContentHash_Graph.fromJSON(object.hash) : undefined
    };
  },
  toJSON(message: MsgSignData): JsonSafe<MsgSignData> {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash_Graph.toJSON(message.hash) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSignData>): MsgSignData {
    const message = createBaseMsgSignData();
    message.signers = object.signers?.map(e => e) || [];
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash_Graph.fromPartial(object.hash) : undefined;
    return message;
  },
  fromSDK(object: MsgSignDataSDKType): MsgSignData {
    return {
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => e) : [],
      hash: object.hash ? ContentHash_Graph.fromSDK(object.hash) : undefined
    };
  },
  toSDK(message: MsgSignData): MsgSignDataSDKType {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash_Graph.toSDK(message.hash) : undefined);
    return obj;
  },
  fromAmino(object: MsgSignDataAmino): MsgSignData {
    const message = createBaseMsgSignData();
    message.signers = object.signers?.map(e => e) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = ContentHash_Graph.fromAmino(object.hash);
    }
    return message;
  },
  toAmino(message: MsgSignData): MsgSignDataAmino {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = message.signers;
    }
    obj.hash = message.hash ? ContentHash_Graph.toAmino(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData {
    return MsgSignData.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData {
    return MsgSignData.decode(message.value);
  },
  toProto(message: MsgSignData): Uint8Array {
    return MsgSignData.encode(message).finish();
  },
  toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.MsgSignData",
      value: MsgSignData.encode(message).finish()
    };
  }
};
function createBaseMsgSignDataResponse(): MsgSignDataResponse {
  return {};
}
export const MsgSignDataResponse = {
  typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse",
  encode(_: MsgSignDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignDataResponse();
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
  fromJSON(_: any): MsgSignDataResponse {
    return {};
  },
  toJSON(_: MsgSignDataResponse): JsonSafe<MsgSignDataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSignDataResponse>): MsgSignDataResponse {
    const message = createBaseMsgSignDataResponse();
    return message;
  },
  fromSDK(_: MsgSignDataResponseSDKType): MsgSignDataResponse {
    return {};
  },
  toSDK(_: MsgSignDataResponse): MsgSignDataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSignDataResponseAmino): MsgSignDataResponse {
    const message = createBaseMsgSignDataResponse();
    return message;
  },
  toAmino(_: MsgSignDataResponse): MsgSignDataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignDataResponseAminoMsg): MsgSignDataResponse {
    return MsgSignDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignDataResponseProtoMsg): MsgSignDataResponse {
    return MsgSignDataResponse.decode(message.value);
  },
  toProto(message: MsgSignDataResponse): Uint8Array {
    return MsgSignDataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignDataResponse): MsgSignDataResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse",
      value: MsgSignDataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStoreRawData(): MsgStoreRawData {
  return {
    sender: "",
    contentHash: undefined,
    content: new Uint8Array()
  };
}
export const MsgStoreRawData = {
  typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
  encode(message: MsgStoreRawData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contentHash !== undefined) {
      ContentHash_Raw.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreRawData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreRawData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contentHash = ContentHash_Raw.decode(reader, reader.uint32());
          break;
        case 3:
          message.content = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreRawData {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contentHash: isSet(object.contentHash) ? ContentHash_Raw.fromJSON(object.contentHash) : undefined,
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array()
    };
  },
  toJSON(message: MsgStoreRawData): JsonSafe<MsgStoreRawData> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash_Raw.toJSON(message.contentHash) : undefined);
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreRawData>): MsgStoreRawData {
    const message = createBaseMsgStoreRawData();
    message.sender = object.sender ?? "";
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash_Raw.fromPartial(object.contentHash) : undefined;
    message.content = object.content ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgStoreRawDataSDKType): MsgStoreRawData {
    return {
      sender: object?.sender,
      contentHash: object.content_hash ? ContentHash_Raw.fromSDK(object.content_hash) : undefined,
      content: object?.content
    };
  },
  toSDK(message: MsgStoreRawData): MsgStoreRawDataSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash_Raw.toSDK(message.contentHash) : undefined);
    obj.content = message.content;
    return obj;
  },
  fromAmino(object: MsgStoreRawDataAmino): MsgStoreRawData {
    const message = createBaseMsgStoreRawData();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash_Raw.fromAmino(object.content_hash);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },
  toAmino(message: MsgStoreRawData): MsgStoreRawDataAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.content_hash = message.contentHash ? ContentHash_Raw.toAmino(message.contentHash) : undefined;
    obj.content = message.content ? base64FromBytes(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreRawDataAminoMsg): MsgStoreRawData {
    return MsgStoreRawData.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStoreRawDataProtoMsg): MsgStoreRawData {
    return MsgStoreRawData.decode(message.value);
  },
  toProto(message: MsgStoreRawData): Uint8Array {
    return MsgStoreRawData.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreRawData): MsgStoreRawDataProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
      value: MsgStoreRawData.encode(message).finish()
    };
  }
};
function createBaseMsgStoreRawDataResponse(): MsgStoreRawDataResponse {
  return {};
}
export const MsgStoreRawDataResponse = {
  typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse",
  encode(_: MsgStoreRawDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreRawDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreRawDataResponse();
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
  fromJSON(_: any): MsgStoreRawDataResponse {
    return {};
  },
  toJSON(_: MsgStoreRawDataResponse): JsonSafe<MsgStoreRawDataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgStoreRawDataResponse>): MsgStoreRawDataResponse {
    const message = createBaseMsgStoreRawDataResponse();
    return message;
  },
  fromSDK(_: MsgStoreRawDataResponseSDKType): MsgStoreRawDataResponse {
    return {};
  },
  toSDK(_: MsgStoreRawDataResponse): MsgStoreRawDataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStoreRawDataResponseAmino): MsgStoreRawDataResponse {
    const message = createBaseMsgStoreRawDataResponse();
    return message;
  },
  toAmino(_: MsgStoreRawDataResponse): MsgStoreRawDataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStoreRawDataResponseAminoMsg): MsgStoreRawDataResponse {
    return MsgStoreRawDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStoreRawDataResponseProtoMsg): MsgStoreRawDataResponse {
    return MsgStoreRawDataResponse.decode(message.value);
  },
  toProto(message: MsgStoreRawDataResponse): Uint8Array {
    return MsgStoreRawDataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreRawDataResponse): MsgStoreRawDataResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse",
      value: MsgStoreRawDataResponse.encode(message).finish()
    };
  }
};