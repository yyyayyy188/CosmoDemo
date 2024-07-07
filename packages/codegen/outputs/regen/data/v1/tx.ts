import { ContentHash, ContentHashAmino, ContentHashSDKType, ContentHash_Graph, AttestorEntry, AttestorEntryAmino, AttestorEntrySDKType } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchor {
  /**
   * sender is the address of the sender of the transaction. The sender in
   * Anchor is not attesting to the veracity of the underlying data. They
   * can simply be an intermediary providing services.
   */
  sender: string;
  /** content_hash is the content hash for the data to anchor. */
  contentHash?: ContentHash | undefined;
}
export interface MsgAnchorProtoMsg {
  typeUrl: "/regen.data.v1.MsgAnchor";
  value: Uint8Array;
}
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchorAmino {
  /**
   * sender is the address of the sender of the transaction. The sender in
   * Anchor is not attesting to the veracity of the underlying data. They
   * can simply be an intermediary providing services.
   */
  sender?: string;
  /** content_hash is the content hash for the data to anchor. */
  content_hash?: ContentHashAmino | undefined;
}
export interface MsgAnchorAminoMsg {
  type: "/regen.data.v1.MsgAnchor";
  value: MsgAnchorAmino;
}
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchorSDKType {
  sender: string;
  content_hash?: ContentHashSDKType | undefined;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponse {
  /** iri is the IRI of the data that was anchored. */
  iri: string;
  /** timestamp is the timestamp at which the data was anchored. */
  timestamp?: Date | undefined;
}
export interface MsgAnchorResponseProtoMsg {
  typeUrl: "/regen.data.v1.MsgAnchorResponse";
  value: Uint8Array;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponseAmino {
  /** iri is the IRI of the data that was anchored. */
  iri?: string;
  /** timestamp is the timestamp at which the data was anchored. */
  timestamp?: string | undefined;
}
export interface MsgAnchorResponseAminoMsg {
  type: "/regen.data.v1.MsgAnchorResponse";
  value: MsgAnchorResponseAmino;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponseSDKType {
  iri: string;
  timestamp?: Date | undefined;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttest {
  /**
   * attestor is the addresses of the account attesting to the veracity of the
   * data. By making an Attest request, the attestor is attesting to the
   * veracity of the data referenced by the IRI. The precise meaning of this may
   * vary depending on the underlying data.
   */
  attestor: string;
  /**
   * content_hashes are the content hashes for anchored data. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  contentHashes: ContentHash_Graph[];
}
export interface MsgAttestProtoMsg {
  typeUrl: "/regen.data.v1.MsgAttest";
  value: Uint8Array;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttestAmino {
  /**
   * attestor is the addresses of the account attesting to the veracity of the
   * data. By making an Attest request, the attestor is attesting to the
   * veracity of the data referenced by the IRI. The precise meaning of this may
   * vary depending on the underlying data.
   */
  attestor?: string;
  /**
   * content_hashes are the content hashes for anchored data. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  content_hashes?: ContentHash_GraphAmino[];
}
export interface MsgAttestAminoMsg {
  type: "/regen.data.v1.MsgAttest";
  value: MsgAttestAmino;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttestSDKType {
  attestor: string;
  content_hashes: ContentHash_GraphSDKType[];
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponse {
  /**
   * new_entries are the new attestor entries including the attestor, the IRI,
   * and the timestamp. If the attestor attests to the same piece of data, the
   * entry will not be updated and not included in the response.
   */
  newEntries: AttestorEntry[];
}
export interface MsgAttestResponseProtoMsg {
  typeUrl: "/regen.data.v1.MsgAttestResponse";
  value: Uint8Array;
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponseAmino {
  /**
   * new_entries are the new attestor entries including the attestor, the IRI,
   * and the timestamp. If the attestor attests to the same piece of data, the
   * entry will not be updated and not included in the response.
   */
  new_entries?: AttestorEntryAmino[];
}
export interface MsgAttestResponseAminoMsg {
  type: "/regen.data.v1.MsgAttestResponse";
  value: MsgAttestResponseAmino;
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponseSDKType {
  new_entries: AttestorEntrySDKType[];
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolver {
  /**
   * manager is the address of the resolver manager. The manager is able
   * to make future calls using the ID returned by this operation with
   * Msg/RegisterResolver. To authorize other accounts to register resolvers,
   * the manager should make use of cosmos.authz.
   */
  manager: string;
  /**
   * resolver_url is a resolver URL which should refer to an HTTP service
   * which will respond to a GET request with the IRI of a ContentHash
   * and return the content if it exists or a 404. For graph data, resolvers
   * should use the HTTP Accept header to negotiate the RDF serialization
   * format.
   */
  resolverUrl: string;
}
export interface MsgDefineResolverProtoMsg {
  typeUrl: "/regen.data.v1.MsgDefineResolver";
  value: Uint8Array;
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolverAmino {
  /**
   * manager is the address of the resolver manager. The manager is able
   * to make future calls using the ID returned by this operation with
   * Msg/RegisterResolver. To authorize other accounts to register resolvers,
   * the manager should make use of cosmos.authz.
   */
  manager?: string;
  /**
   * resolver_url is a resolver URL which should refer to an HTTP service
   * which will respond to a GET request with the IRI of a ContentHash
   * and return the content if it exists or a 404. For graph data, resolvers
   * should use the HTTP Accept header to negotiate the RDF serialization
   * format.
   */
  resolver_url?: string;
}
export interface MsgDefineResolverAminoMsg {
  type: "/regen.data.v1.MsgDefineResolver";
  value: MsgDefineResolverAmino;
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolverSDKType {
  manager: string;
  resolver_url: string;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponse {
  /**
   * resolver_id is the integer ID of the resolver to be used in
   * MsgRegisterResolver.
   */
  resolverId: bigint;
}
export interface MsgDefineResolverResponseProtoMsg {
  typeUrl: "/regen.data.v1.MsgDefineResolverResponse";
  value: Uint8Array;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponseAmino {
  /**
   * resolver_id is the integer ID of the resolver to be used in
   * MsgRegisterResolver.
   */
  resolver_id?: string;
}
export interface MsgDefineResolverResponseAminoMsg {
  type: "/regen.data.v1.MsgDefineResolverResponse";
  value: MsgDefineResolverResponseAmino;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponseSDKType {
  resolver_id: bigint;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolver {
  /**
   * manager is the address of the resolver manager who registered this
   * resolver with Msg/DefinedResolver.
   */
  manager: string;
  /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */
  resolverId: bigint;
  /**
   * content_hashes is a list of content hashes which the resolver claims to
   * serve.
   */
  contentHashes: ContentHash[];
}
export interface MsgRegisterResolverProtoMsg {
  typeUrl: "/regen.data.v1.MsgRegisterResolver";
  value: Uint8Array;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolverAmino {
  /**
   * manager is the address of the resolver manager who registered this
   * resolver with Msg/DefinedResolver.
   */
  manager?: string;
  /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */
  resolver_id?: string;
  /**
   * content_hashes is a list of content hashes which the resolver claims to
   * serve.
   */
  content_hashes?: ContentHashAmino[];
}
export interface MsgRegisterResolverAminoMsg {
  type: "/regen.data.v1.MsgRegisterResolver";
  value: MsgRegisterResolverAmino;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolverSDKType {
  manager: string;
  resolver_id: bigint;
  content_hashes: ContentHashSDKType[];
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponse {}
export interface MsgRegisterResolverResponseProtoMsg {
  typeUrl: "/regen.data.v1.MsgRegisterResolverResponse";
  value: Uint8Array;
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponseAmino {}
export interface MsgRegisterResolverResponseAminoMsg {
  type: "/regen.data.v1.MsgRegisterResolverResponse";
  value: MsgRegisterResolverResponseAmino;
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponseSDKType {}
function createBaseMsgAnchor(): MsgAnchor {
  return {
    sender: "",
    contentHash: undefined
  };
}
export const MsgAnchor = {
  typeUrl: "/regen.data.v1.MsgAnchor",
  encode(message: MsgAnchor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnchor {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },
  toJSON(message: MsgAnchor): JsonSafe<MsgAnchor> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAnchor>): MsgAnchor {
    const message = createBaseMsgAnchor();
    message.sender = object.sender ?? "";
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromSDK(object: MsgAnchorSDKType): MsgAnchor {
    return {
      sender: object?.sender,
      contentHash: object.content_hash ? ContentHash.fromSDK(object.content_hash) : undefined
    };
  },
  toSDK(message: MsgAnchor): MsgAnchorSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash.toSDK(message.contentHash) : undefined);
    return obj;
  },
  fromAmino(object: MsgAnchorAmino): MsgAnchor {
    const message = createBaseMsgAnchor();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
  },
  toAmino(message: MsgAnchor): MsgAnchorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAnchorAminoMsg): MsgAnchor {
    return MsgAnchor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnchorProtoMsg): MsgAnchor {
    return MsgAnchor.decode(message.value);
  },
  toProto(message: MsgAnchor): Uint8Array {
    return MsgAnchor.encode(message).finish();
  },
  toProtoMsg(message: MsgAnchor): MsgAnchorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgAnchor",
      value: MsgAnchor.encode(message).finish()
    };
  }
};
function createBaseMsgAnchorResponse(): MsgAnchorResponse {
  return {
    iri: "",
    timestamp: undefined
  };
}
export const MsgAnchorResponse = {
  typeUrl: "/regen.data.v1.MsgAnchorResponse",
  encode(message: MsgAnchorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnchorResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined
    };
  },
  toJSON(message: MsgAnchorResponse): JsonSafe<MsgAnchorResponse> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAnchorResponse>): MsgAnchorResponse {
    const message = createBaseMsgAnchorResponse();
    message.iri = object.iri ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromSDK(object: MsgAnchorResponseSDKType): MsgAnchorResponse {
    return {
      iri: object?.iri,
      timestamp: object.timestamp ?? undefined
    };
  },
  toSDK(message: MsgAnchorResponse): MsgAnchorResponseSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    return obj;
  },
  fromAmino(object: MsgAnchorResponseAmino): MsgAnchorResponse {
    const message = createBaseMsgAnchorResponse();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: MsgAnchorResponse): MsgAnchorResponseAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAnchorResponseAminoMsg): MsgAnchorResponse {
    return MsgAnchorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnchorResponseProtoMsg): MsgAnchorResponse {
    return MsgAnchorResponse.decode(message.value);
  },
  toProto(message: MsgAnchorResponse): Uint8Array {
    return MsgAnchorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAnchorResponse): MsgAnchorResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgAnchorResponse",
      value: MsgAnchorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAttest(): MsgAttest {
  return {
    attestor: "",
    contentHashes: []
  };
}
export const MsgAttest = {
  typeUrl: "/regen.data.v1.MsgAttest",
  encode(message: MsgAttest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestor !== "") {
      writer.uint32(10).string(message.attestor);
    }
    for (const v of message.contentHashes) {
      ContentHash_Graph.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAttest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestor = reader.string();
          break;
        case 2:
          message.contentHashes.push(ContentHash_Graph.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAttest {
    return {
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      contentHashes: Array.isArray(object?.contentHashes) ? object.contentHashes.map((e: any) => ContentHash_Graph.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgAttest): JsonSafe<MsgAttest> {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);
    if (message.contentHashes) {
      obj.contentHashes = message.contentHashes.map(e => e ? ContentHash_Graph.toJSON(e) : undefined);
    } else {
      obj.contentHashes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAttest>): MsgAttest {
    const message = createBaseMsgAttest();
    message.attestor = object.attestor ?? "";
    message.contentHashes = object.contentHashes?.map(e => ContentHash_Graph.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgAttestSDKType): MsgAttest {
    return {
      attestor: object?.attestor,
      contentHashes: Array.isArray(object?.content_hashes) ? object.content_hashes.map((e: any) => ContentHash_Graph.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgAttest): MsgAttestSDKType {
    const obj: any = {};
    obj.attestor = message.attestor;
    if (message.contentHashes) {
      obj.content_hashes = message.contentHashes.map(e => e ? ContentHash_Graph.toSDK(e) : undefined);
    } else {
      obj.content_hashes = [];
    }
    return obj;
  },
  fromAmino(object: MsgAttestAmino): MsgAttest {
    const message = createBaseMsgAttest();
    if (object.attestor !== undefined && object.attestor !== null) {
      message.attestor = object.attestor;
    }
    message.contentHashes = object.content_hashes?.map(e => ContentHash_Graph.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAttest): MsgAttestAmino {
    const obj: any = {};
    obj.attestor = message.attestor === "" ? undefined : message.attestor;
    if (message.contentHashes) {
      obj.content_hashes = message.contentHashes.map(e => e ? ContentHash_Graph.toAmino(e) : undefined);
    } else {
      obj.content_hashes = message.contentHashes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAttestAminoMsg): MsgAttest {
    return MsgAttest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAttestProtoMsg): MsgAttest {
    return MsgAttest.decode(message.value);
  },
  toProto(message: MsgAttest): Uint8Array {
    return MsgAttest.encode(message).finish();
  },
  toProtoMsg(message: MsgAttest): MsgAttestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgAttest",
      value: MsgAttest.encode(message).finish()
    };
  }
};
function createBaseMsgAttestResponse(): MsgAttestResponse {
  return {
    newEntries: []
  };
}
export const MsgAttestResponse = {
  typeUrl: "/regen.data.v1.MsgAttestResponse",
  encode(message: MsgAttestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.newEntries) {
      AttestorEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAttestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newEntries.push(AttestorEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAttestResponse {
    return {
      newEntries: Array.isArray(object?.newEntries) ? object.newEntries.map((e: any) => AttestorEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgAttestResponse): JsonSafe<MsgAttestResponse> {
    const obj: any = {};
    if (message.newEntries) {
      obj.newEntries = message.newEntries.map(e => e ? AttestorEntry.toJSON(e) : undefined);
    } else {
      obj.newEntries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAttestResponse>): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    message.newEntries = object.newEntries?.map(e => AttestorEntry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgAttestResponseSDKType): MsgAttestResponse {
    return {
      newEntries: Array.isArray(object?.new_entries) ? object.new_entries.map((e: any) => AttestorEntry.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgAttestResponse): MsgAttestResponseSDKType {
    const obj: any = {};
    if (message.newEntries) {
      obj.new_entries = message.newEntries.map(e => e ? AttestorEntry.toSDK(e) : undefined);
    } else {
      obj.new_entries = [];
    }
    return obj;
  },
  fromAmino(object: MsgAttestResponseAmino): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    message.newEntries = object.new_entries?.map(e => AttestorEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAttestResponse): MsgAttestResponseAmino {
    const obj: any = {};
    if (message.newEntries) {
      obj.new_entries = message.newEntries.map(e => e ? AttestorEntry.toAmino(e) : undefined);
    } else {
      obj.new_entries = message.newEntries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAttestResponseAminoMsg): MsgAttestResponse {
    return MsgAttestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAttestResponseProtoMsg): MsgAttestResponse {
    return MsgAttestResponse.decode(message.value);
  },
  toProto(message: MsgAttestResponse): Uint8Array {
    return MsgAttestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAttestResponse): MsgAttestResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgAttestResponse",
      value: MsgAttestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDefineResolver(): MsgDefineResolver {
  return {
    manager: "",
    resolverUrl: ""
  };
}
export const MsgDefineResolver = {
  typeUrl: "/regen.data.v1.MsgDefineResolver",
  encode(message: MsgDefineResolver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.manager !== "") {
      writer.uint32(10).string(message.manager);
    }
    if (message.resolverUrl !== "") {
      writer.uint32(18).string(message.resolverUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefineResolver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manager = reader.string();
          break;
        case 2:
          message.resolverUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDefineResolver {
    return {
      manager: isSet(object.manager) ? String(object.manager) : "",
      resolverUrl: isSet(object.resolverUrl) ? String(object.resolverUrl) : ""
    };
  },
  toJSON(message: MsgDefineResolver): JsonSafe<MsgDefineResolver> {
    const obj: any = {};
    message.manager !== undefined && (obj.manager = message.manager);
    message.resolverUrl !== undefined && (obj.resolverUrl = message.resolverUrl);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDefineResolver>): MsgDefineResolver {
    const message = createBaseMsgDefineResolver();
    message.manager = object.manager ?? "";
    message.resolverUrl = object.resolverUrl ?? "";
    return message;
  },
  fromSDK(object: MsgDefineResolverSDKType): MsgDefineResolver {
    return {
      manager: object?.manager,
      resolverUrl: object?.resolver_url
    };
  },
  toSDK(message: MsgDefineResolver): MsgDefineResolverSDKType {
    const obj: any = {};
    obj.manager = message.manager;
    obj.resolver_url = message.resolverUrl;
    return obj;
  },
  fromAmino(object: MsgDefineResolverAmino): MsgDefineResolver {
    const message = createBaseMsgDefineResolver();
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    if (object.resolver_url !== undefined && object.resolver_url !== null) {
      message.resolverUrl = object.resolver_url;
    }
    return message;
  },
  toAmino(message: MsgDefineResolver): MsgDefineResolverAmino {
    const obj: any = {};
    obj.manager = message.manager === "" ? undefined : message.manager;
    obj.resolver_url = message.resolverUrl === "" ? undefined : message.resolverUrl;
    return obj;
  },
  fromAminoMsg(object: MsgDefineResolverAminoMsg): MsgDefineResolver {
    return MsgDefineResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefineResolverProtoMsg): MsgDefineResolver {
    return MsgDefineResolver.decode(message.value);
  },
  toProto(message: MsgDefineResolver): Uint8Array {
    return MsgDefineResolver.encode(message).finish();
  },
  toProtoMsg(message: MsgDefineResolver): MsgDefineResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgDefineResolver",
      value: MsgDefineResolver.encode(message).finish()
    };
  }
};
function createBaseMsgDefineResolverResponse(): MsgDefineResolverResponse {
  return {
    resolverId: BigInt(0)
  };
}
export const MsgDefineResolverResponse = {
  typeUrl: "/regen.data.v1.MsgDefineResolverResponse",
  encode(message: MsgDefineResolverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resolverId !== BigInt(0)) {
      writer.uint32(8).uint64(message.resolverId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefineResolverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineResolverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolverId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDefineResolverResponse {
    return {
      resolverId: isSet(object.resolverId) ? BigInt(object.resolverId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgDefineResolverResponse): JsonSafe<MsgDefineResolverResponse> {
    const obj: any = {};
    message.resolverId !== undefined && (obj.resolverId = (message.resolverId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDefineResolverResponse>): MsgDefineResolverResponse {
    const message = createBaseMsgDefineResolverResponse();
    message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? BigInt(object.resolverId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgDefineResolverResponseSDKType): MsgDefineResolverResponse {
    return {
      resolverId: object?.resolver_id
    };
  },
  toSDK(message: MsgDefineResolverResponse): MsgDefineResolverResponseSDKType {
    const obj: any = {};
    obj.resolver_id = message.resolverId;
    return obj;
  },
  fromAmino(object: MsgDefineResolverResponseAmino): MsgDefineResolverResponse {
    const message = createBaseMsgDefineResolverResponse();
    if (object.resolver_id !== undefined && object.resolver_id !== null) {
      message.resolverId = BigInt(object.resolver_id);
    }
    return message;
  },
  toAmino(message: MsgDefineResolverResponse): MsgDefineResolverResponseAmino {
    const obj: any = {};
    obj.resolver_id = message.resolverId !== BigInt(0) ? message.resolverId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDefineResolverResponseAminoMsg): MsgDefineResolverResponse {
    return MsgDefineResolverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefineResolverResponseProtoMsg): MsgDefineResolverResponse {
    return MsgDefineResolverResponse.decode(message.value);
  },
  toProto(message: MsgDefineResolverResponse): Uint8Array {
    return MsgDefineResolverResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDefineResolverResponse): MsgDefineResolverResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgDefineResolverResponse",
      value: MsgDefineResolverResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterResolver(): MsgRegisterResolver {
  return {
    manager: "",
    resolverId: BigInt(0),
    contentHashes: []
  };
}
export const MsgRegisterResolver = {
  typeUrl: "/regen.data.v1.MsgRegisterResolver",
  encode(message: MsgRegisterResolver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.manager !== "") {
      writer.uint32(10).string(message.manager);
    }
    if (message.resolverId !== BigInt(0)) {
      writer.uint32(16).uint64(message.resolverId);
    }
    for (const v of message.contentHashes) {
      ContentHash.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterResolver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manager = reader.string();
          break;
        case 2:
          message.resolverId = reader.uint64();
          break;
        case 3:
          message.contentHashes.push(ContentHash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterResolver {
    return {
      manager: isSet(object.manager) ? String(object.manager) : "",
      resolverId: isSet(object.resolverId) ? BigInt(object.resolverId.toString()) : BigInt(0),
      contentHashes: Array.isArray(object?.contentHashes) ? object.contentHashes.map((e: any) => ContentHash.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRegisterResolver): JsonSafe<MsgRegisterResolver> {
    const obj: any = {};
    message.manager !== undefined && (obj.manager = message.manager);
    message.resolverId !== undefined && (obj.resolverId = (message.resolverId || BigInt(0)).toString());
    if (message.contentHashes) {
      obj.contentHashes = message.contentHashes.map(e => e ? ContentHash.toJSON(e) : undefined);
    } else {
      obj.contentHashes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRegisterResolver>): MsgRegisterResolver {
    const message = createBaseMsgRegisterResolver();
    message.manager = object.manager ?? "";
    message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? BigInt(object.resolverId.toString()) : BigInt(0);
    message.contentHashes = object.contentHashes?.map(e => ContentHash.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgRegisterResolverSDKType): MsgRegisterResolver {
    return {
      manager: object?.manager,
      resolverId: object?.resolver_id,
      contentHashes: Array.isArray(object?.content_hashes) ? object.content_hashes.map((e: any) => ContentHash.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgRegisterResolver): MsgRegisterResolverSDKType {
    const obj: any = {};
    obj.manager = message.manager;
    obj.resolver_id = message.resolverId;
    if (message.contentHashes) {
      obj.content_hashes = message.contentHashes.map(e => e ? ContentHash.toSDK(e) : undefined);
    } else {
      obj.content_hashes = [];
    }
    return obj;
  },
  fromAmino(object: MsgRegisterResolverAmino): MsgRegisterResolver {
    const message = createBaseMsgRegisterResolver();
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    if (object.resolver_id !== undefined && object.resolver_id !== null) {
      message.resolverId = BigInt(object.resolver_id);
    }
    message.contentHashes = object.content_hashes?.map(e => ContentHash.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRegisterResolver): MsgRegisterResolverAmino {
    const obj: any = {};
    obj.manager = message.manager === "" ? undefined : message.manager;
    obj.resolver_id = message.resolverId !== BigInt(0) ? message.resolverId.toString() : undefined;
    if (message.contentHashes) {
      obj.content_hashes = message.contentHashes.map(e => e ? ContentHash.toAmino(e) : undefined);
    } else {
      obj.content_hashes = message.contentHashes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterResolverAminoMsg): MsgRegisterResolver {
    return MsgRegisterResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterResolverProtoMsg): MsgRegisterResolver {
    return MsgRegisterResolver.decode(message.value);
  },
  toProto(message: MsgRegisterResolver): Uint8Array {
    return MsgRegisterResolver.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterResolver): MsgRegisterResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgRegisterResolver",
      value: MsgRegisterResolver.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterResolverResponse(): MsgRegisterResolverResponse {
  return {};
}
export const MsgRegisterResolverResponse = {
  typeUrl: "/regen.data.v1.MsgRegisterResolverResponse",
  encode(_: MsgRegisterResolverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterResolverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResolverResponse();
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
  fromJSON(_: any): MsgRegisterResolverResponse {
    return {};
  },
  toJSON(_: MsgRegisterResolverResponse): JsonSafe<MsgRegisterResolverResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRegisterResolverResponse>): MsgRegisterResolverResponse {
    const message = createBaseMsgRegisterResolverResponse();
    return message;
  },
  fromSDK(_: MsgRegisterResolverResponseSDKType): MsgRegisterResolverResponse {
    return {};
  },
  toSDK(_: MsgRegisterResolverResponse): MsgRegisterResolverResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRegisterResolverResponseAmino): MsgRegisterResolverResponse {
    const message = createBaseMsgRegisterResolverResponse();
    return message;
  },
  toAmino(_: MsgRegisterResolverResponse): MsgRegisterResolverResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterResolverResponseAminoMsg): MsgRegisterResolverResponse {
    return MsgRegisterResolverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterResolverResponseProtoMsg): MsgRegisterResolverResponse {
    return MsgRegisterResolverResponse.decode(message.value);
  },
  toProto(message: MsgRegisterResolverResponse): Uint8Array {
    return MsgRegisterResolverResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterResolverResponse): MsgRegisterResolverResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.MsgRegisterResolverResponse",
      value: MsgRegisterResolverResponse.encode(message).finish()
    };
  }
};