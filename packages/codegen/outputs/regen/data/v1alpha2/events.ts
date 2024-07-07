import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
  /** iri is the data IRI */
  iri: string;
}
export interface EventAnchorDataProtoMsg {
  typeUrl: "/regen.data.v1alpha2.EventAnchorData";
  value: Uint8Array;
}
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorDataAmino {
  /** iri is the data IRI */
  iri?: string;
}
export interface EventAnchorDataAminoMsg {
  type: "/regen.data.v1alpha2.EventAnchorData";
  value: EventAnchorDataAmino;
}
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorDataSDKType {
  iri: string;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignData {
  /** iri is the data IRI */
  iri: string;
  /** signers are the addresses of the accounts which have signed the data. */
  signers: string[];
}
export interface EventSignDataProtoMsg {
  typeUrl: "/regen.data.v1alpha2.EventSignData";
  value: Uint8Array;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignDataAmino {
  /** iri is the data IRI */
  iri?: string;
  /** signers are the addresses of the accounts which have signed the data. */
  signers?: string[];
}
export interface EventSignDataAminoMsg {
  type: "/regen.data.v1alpha2.EventSignData";
  value: EventSignDataAmino;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignDataSDKType {
  iri: string;
  signers: string[];
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawData {
  /** iri is the data IRI */
  iri: string;
}
export interface EventStoreRawDataProtoMsg {
  typeUrl: "/regen.data.v1alpha2.EventStoreRawData";
  value: Uint8Array;
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawDataAmino {
  /** iri is the data IRI */
  iri?: string;
}
export interface EventStoreRawDataAminoMsg {
  type: "/regen.data.v1alpha2.EventStoreRawData";
  value: EventStoreRawDataAmino;
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawDataSDKType {
  iri: string;
}
function createBaseEventAnchorData(): EventAnchorData {
  return {
    iri: ""
  };
}
export const EventAnchorData = {
  typeUrl: "/regen.data.v1alpha2.EventAnchorData",
  encode(message: EventAnchorData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAnchorData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnchorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAnchorData {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: EventAnchorData): JsonSafe<EventAnchorData> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<EventAnchorData>): EventAnchorData {
    const message = createBaseEventAnchorData();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: EventAnchorDataSDKType): EventAnchorData {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: EventAnchorData): EventAnchorDataSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: EventAnchorDataAmino): EventAnchorData {
    const message = createBaseEventAnchorData();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: EventAnchorData): EventAnchorDataAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: EventAnchorDataAminoMsg): EventAnchorData {
    return EventAnchorData.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAnchorDataProtoMsg): EventAnchorData {
    return EventAnchorData.decode(message.value);
  },
  toProto(message: EventAnchorData): Uint8Array {
    return EventAnchorData.encode(message).finish();
  },
  toProtoMsg(message: EventAnchorData): EventAnchorDataProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.EventAnchorData",
      value: EventAnchorData.encode(message).finish()
    };
  }
};
function createBaseEventSignData(): EventSignData {
  return {
    iri: "",
    signers: []
  };
}
export const EventSignData = {
  typeUrl: "/regen.data.v1alpha2.EventSignData",
  encode(message: EventSignData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSignData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.signers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSignData {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: EventSignData): JsonSafe<EventSignData> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EventSignData>): EventSignData {
    const message = createBaseEventSignData();
    message.iri = object.iri ?? "";
    message.signers = object.signers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EventSignDataSDKType): EventSignData {
    return {
      iri: object?.iri,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => e) : []
    };
  },
  toSDK(message: EventSignData): EventSignDataSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    return obj;
  },
  fromAmino(object: EventSignDataAmino): EventSignData {
    const message = createBaseEventSignData();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    message.signers = object.signers?.map(e => e) || [];
    return message;
  },
  toAmino(message: EventSignData): EventSignDataAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = message.signers;
    }
    return obj;
  },
  fromAminoMsg(object: EventSignDataAminoMsg): EventSignData {
    return EventSignData.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSignDataProtoMsg): EventSignData {
    return EventSignData.decode(message.value);
  },
  toProto(message: EventSignData): Uint8Array {
    return EventSignData.encode(message).finish();
  },
  toProtoMsg(message: EventSignData): EventSignDataProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.EventSignData",
      value: EventSignData.encode(message).finish()
    };
  }
};
function createBaseEventStoreRawData(): EventStoreRawData {
  return {
    iri: ""
  };
}
export const EventStoreRawData = {
  typeUrl: "/regen.data.v1alpha2.EventStoreRawData",
  encode(message: EventStoreRawData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventStoreRawData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStoreRawData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventStoreRawData {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: EventStoreRawData): JsonSafe<EventStoreRawData> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<EventStoreRawData>): EventStoreRawData {
    const message = createBaseEventStoreRawData();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: EventStoreRawDataSDKType): EventStoreRawData {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: EventStoreRawData): EventStoreRawDataSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: EventStoreRawDataAmino): EventStoreRawData {
    const message = createBaseEventStoreRawData();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: EventStoreRawData): EventStoreRawDataAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: EventStoreRawDataAminoMsg): EventStoreRawData {
    return EventStoreRawData.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStoreRawDataProtoMsg): EventStoreRawData {
    return EventStoreRawData.decode(message.value);
  },
  toProto(message: EventStoreRawData): Uint8Array {
    return EventStoreRawData.encode(message).finish();
  },
  toProtoMsg(message: EventStoreRawData): EventStoreRawDataProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.EventStoreRawData",
      value: EventStoreRawData.encode(message).finish()
    };
  }
};