import { ContentHash, ContentHashAmino, ContentHashSDKType, SignerEntry, SignerEntryAmino, SignerEntrySDKType, Content, ContentAmino, ContentSDKType } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, toTimestamp, fromTimestamp, isSet } from "../../../helpers";
/** GenesisState is the genesis state */
export interface GenesisState {
  /** entries are the content entries */
  entries: GenesisContentEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/regen.data.v1alpha2.GenesisState";
  value: Uint8Array;
}
/** GenesisState is the genesis state */
export interface GenesisStateAmino {
  /** entries are the content entries */
  entries?: GenesisContentEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/regen.data.v1alpha2.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState is the genesis state */
export interface GenesisStateSDKType {
  entries: GenesisContentEntrySDKType[];
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntry {
  /** hash is the ContentHash */
  hash?: ContentHash | undefined;
  /** timestamp is the anchor Timestamp */
  timestamp?: Date | undefined;
  /** signers are the signers, if any */
  signers: SignerEntry[];
  /** content is the actual content if stored on-chain */
  content?: Content | undefined;
}
export interface GenesisContentEntryProtoMsg {
  typeUrl: "/regen.data.v1alpha2.GenesisContentEntry";
  value: Uint8Array;
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntryAmino {
  /** hash is the ContentHash */
  hash?: ContentHashAmino | undefined;
  /** timestamp is the anchor Timestamp */
  timestamp?: string | undefined;
  /** signers are the signers, if any */
  signers?: SignerEntryAmino[];
  /** content is the actual content if stored on-chain */
  content?: ContentAmino | undefined;
}
export interface GenesisContentEntryAminoMsg {
  type: "/regen.data.v1alpha2.GenesisContentEntry";
  value: GenesisContentEntryAmino;
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntrySDKType {
  hash?: ContentHashSDKType | undefined;
  timestamp?: Date | undefined;
  signers: SignerEntrySDKType[];
  content?: ContentSDKType | undefined;
}
function createBaseGenesisState(): GenesisState {
  return {
    entries: []
  };
}
export const GenesisState = {
  typeUrl: "/regen.data.v1alpha2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      GenesisContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(GenesisContentEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => GenesisContentEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? GenesisContentEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.entries = object.entries?.map(e => GenesisContentEntry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => GenesisContentEntry.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? GenesisContentEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.entries = object.entries?.map(e => GenesisContentEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? GenesisContentEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisContentEntry(): GenesisContentEntry {
  return {
    hash: undefined,
    timestamp: undefined,
    signers: [],
    content: undefined
  };
}
export const GenesisContentEntry = {
  typeUrl: "/regen.data.v1alpha2.GenesisContentEntry",
  encode(message: GenesisContentEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signers) {
      SignerEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.content !== undefined) {
      Content.encode(message.content, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisContentEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisContentEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.signers.push(SignerEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.content = Content.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisContentEntry {
    return {
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => SignerEntry.fromJSON(e)) : [],
      content: isSet(object.content) ? Content.fromJSON(object.content) : undefined
    };
  },
  toJSON(message: GenesisContentEntry): JsonSafe<GenesisContentEntry> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? SignerEntry.toJSON(e) : undefined);
    } else {
      obj.signers = [];
    }
    message.content !== undefined && (obj.content = message.content ? Content.toJSON(message.content) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisContentEntry>): GenesisContentEntry {
    const message = createBaseGenesisContentEntry();
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.signers = object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
    message.content = object.content !== undefined && object.content !== null ? Content.fromPartial(object.content) : undefined;
    return message;
  },
  fromSDK(object: GenesisContentEntrySDKType): GenesisContentEntry {
    return {
      hash: object.hash ? ContentHash.fromSDK(object.hash) : undefined,
      timestamp: object.timestamp ?? undefined,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => SignerEntry.fromSDK(e)) : [],
      content: object.content ? Content.fromSDK(object.content) : undefined
    };
  },
  toSDK(message: GenesisContentEntry): GenesisContentEntrySDKType {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toSDK(message.hash) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? SignerEntry.toSDK(e) : undefined);
    } else {
      obj.signers = [];
    }
    message.content !== undefined && (obj.content = message.content ? Content.toSDK(message.content) : undefined);
    return obj;
  },
  fromAmino(object: GenesisContentEntryAmino): GenesisContentEntry {
    const message = createBaseGenesisContentEntry();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = ContentHash.fromAmino(object.hash);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    message.signers = object.signers?.map(e => SignerEntry.fromAmino(e)) || [];
    if (object.content !== undefined && object.content !== null) {
      message.content = Content.fromAmino(object.content);
    }
    return message;
  },
  toAmino(message: GenesisContentEntry): GenesisContentEntryAmino {
    const obj: any = {};
    obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? SignerEntry.toAmino(e) : undefined);
    } else {
      obj.signers = message.signers;
    }
    obj.content = message.content ? Content.toAmino(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisContentEntryAminoMsg): GenesisContentEntry {
    return GenesisContentEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisContentEntryProtoMsg): GenesisContentEntry {
    return GenesisContentEntry.decode(message.value);
  },
  toProto(message: GenesisContentEntry): Uint8Array {
    return GenesisContentEntry.encode(message).finish();
  },
  toProtoMsg(message: GenesisContentEntry): GenesisContentEntryProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.GenesisContentEntry",
      value: GenesisContentEntry.encode(message).finish()
    };
  }
};