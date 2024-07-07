import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchor {
  /** iri is the IRI of the data anchored on chain. */
  iri: string;
}
export interface EventAnchorProtoMsg {
  typeUrl: "/regen.data.v1.EventAnchor";
  value: Uint8Array;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorAmino {
  /** iri is the IRI of the data anchored on chain. */
  iri?: string;
}
export interface EventAnchorAminoMsg {
  type: "/regen.data.v1.EventAnchor";
  value: EventAnchorAmino;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorSDKType {
  iri: string;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttest {
  /** iri is the IRI of the data attested to. */
  iri: string;
  /**
   * attestor is the address of the account that has attested to the veracity of
   * the data.
   */
  attestor: string;
}
export interface EventAttestProtoMsg {
  typeUrl: "/regen.data.v1.EventAttest";
  value: Uint8Array;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestAmino {
  /** iri is the IRI of the data attested to. */
  iri?: string;
  /**
   * attestor is the address of the account that has attested to the veracity of
   * the data.
   */
  attestor?: string;
}
export interface EventAttestAminoMsg {
  type: "/regen.data.v1.EventAttest";
  value: EventAttestAmino;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestSDKType {
  iri: string;
  attestor: string;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolver {
  /** id is the ID of the defined resolver. */
  id: bigint;
}
export interface EventDefineResolverProtoMsg {
  typeUrl: "/regen.data.v1.EventDefineResolver";
  value: Uint8Array;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverAmino {
  /** id is the ID of the defined resolver. */
  id?: string;
}
export interface EventDefineResolverAminoMsg {
  type: "/regen.data.v1.EventDefineResolver";
  value: EventDefineResolverAmino;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverSDKType {
  id: bigint;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolver {
  /** id is the ID of the resolver that the data was registered to. */
  id: bigint;
  /** iri is the IRI of the data that was registered. */
  iri: string;
}
export interface EventRegisterResolverProtoMsg {
  typeUrl: "/regen.data.v1.EventRegisterResolver";
  value: Uint8Array;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverAmino {
  /** id is the ID of the resolver that the data was registered to. */
  id?: string;
  /** iri is the IRI of the data that was registered. */
  iri?: string;
}
export interface EventRegisterResolverAminoMsg {
  type: "/regen.data.v1.EventRegisterResolver";
  value: EventRegisterResolverAmino;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverSDKType {
  id: bigint;
  iri: string;
}
function createBaseEventAnchor(): EventAnchor {
  return {
    iri: ""
  };
}
export const EventAnchor = {
  typeUrl: "/regen.data.v1.EventAnchor",
  encode(message: EventAnchor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAnchor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnchor();
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
  fromJSON(object: any): EventAnchor {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: EventAnchor): JsonSafe<EventAnchor> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<EventAnchor>): EventAnchor {
    const message = createBaseEventAnchor();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: EventAnchorSDKType): EventAnchor {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: EventAnchor): EventAnchorSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: EventAnchorAmino): EventAnchor {
    const message = createBaseEventAnchor();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: EventAnchor): EventAnchorAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: EventAnchorAminoMsg): EventAnchor {
    return EventAnchor.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAnchorProtoMsg): EventAnchor {
    return EventAnchor.decode(message.value);
  },
  toProto(message: EventAnchor): Uint8Array {
    return EventAnchor.encode(message).finish();
  },
  toProtoMsg(message: EventAnchor): EventAnchorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventAnchor",
      value: EventAnchor.encode(message).finish()
    };
  }
};
function createBaseEventAttest(): EventAttest {
  return {
    iri: "",
    attestor: ""
  };
}
export const EventAttest = {
  typeUrl: "/regen.data.v1.EventAttest",
  encode(message: EventAttest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.attestor !== "") {
      writer.uint32(18).string(message.attestor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.attestor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAttest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      attestor: isSet(object.attestor) ? String(object.attestor) : ""
    };
  },
  toJSON(message: EventAttest): JsonSafe<EventAttest> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.attestor !== undefined && (obj.attestor = message.attestor);
    return obj;
  },
  fromPartial(object: DeepPartial<EventAttest>): EventAttest {
    const message = createBaseEventAttest();
    message.iri = object.iri ?? "";
    message.attestor = object.attestor ?? "";
    return message;
  },
  fromSDK(object: EventAttestSDKType): EventAttest {
    return {
      iri: object?.iri,
      attestor: object?.attestor
    };
  },
  toSDK(message: EventAttest): EventAttestSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    obj.attestor = message.attestor;
    return obj;
  },
  fromAmino(object: EventAttestAmino): EventAttest {
    const message = createBaseEventAttest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.attestor !== undefined && object.attestor !== null) {
      message.attestor = object.attestor;
    }
    return message;
  },
  toAmino(message: EventAttest): EventAttestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.attestor = message.attestor === "" ? undefined : message.attestor;
    return obj;
  },
  fromAminoMsg(object: EventAttestAminoMsg): EventAttest {
    return EventAttest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttestProtoMsg): EventAttest {
    return EventAttest.decode(message.value);
  },
  toProto(message: EventAttest): Uint8Array {
    return EventAttest.encode(message).finish();
  },
  toProtoMsg(message: EventAttest): EventAttestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventAttest",
      value: EventAttest.encode(message).finish()
    };
  }
};
function createBaseEventDefineResolver(): EventDefineResolver {
  return {
    id: BigInt(0)
  };
}
export const EventDefineResolver = {
  typeUrl: "/regen.data.v1.EventDefineResolver",
  encode(message: EventDefineResolver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDefineResolver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDefineResolver();
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
  fromJSON(object: any): EventDefineResolver {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventDefineResolver): JsonSafe<EventDefineResolver> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventDefineResolver>): EventDefineResolver {
    const message = createBaseEventDefineResolver();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: EventDefineResolverSDKType): EventDefineResolver {
    return {
      id: object?.id
    };
  },
  toSDK(message: EventDefineResolver): EventDefineResolverSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: EventDefineResolverAmino): EventDefineResolver {
    const message = createBaseEventDefineResolver();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventDefineResolver): EventDefineResolverAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDefineResolverAminoMsg): EventDefineResolver {
    return EventDefineResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDefineResolverProtoMsg): EventDefineResolver {
    return EventDefineResolver.decode(message.value);
  },
  toProto(message: EventDefineResolver): Uint8Array {
    return EventDefineResolver.encode(message).finish();
  },
  toProtoMsg(message: EventDefineResolver): EventDefineResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventDefineResolver",
      value: EventDefineResolver.encode(message).finish()
    };
  }
};
function createBaseEventRegisterResolver(): EventRegisterResolver {
  return {
    id: BigInt(0),
    iri: ""
  };
}
export const EventRegisterResolver = {
  typeUrl: "/regen.data.v1.EventRegisterResolver",
  encode(message: EventRegisterResolver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.iri !== "") {
      writer.uint32(18).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRegisterResolver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRegisterResolver {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: EventRegisterResolver): JsonSafe<EventRegisterResolver> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<EventRegisterResolver>): EventRegisterResolver {
    const message = createBaseEventRegisterResolver();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: EventRegisterResolverSDKType): EventRegisterResolver {
    return {
      id: object?.id,
      iri: object?.iri
    };
  },
  toSDK(message: EventRegisterResolver): EventRegisterResolverSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: EventRegisterResolverAmino): EventRegisterResolver {
    const message = createBaseEventRegisterResolver();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: EventRegisterResolver): EventRegisterResolverAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: EventRegisterResolverAminoMsg): EventRegisterResolver {
    return EventRegisterResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRegisterResolverProtoMsg): EventRegisterResolver {
    return EventRegisterResolver.decode(message.value);
  },
  toProto(message: EventRegisterResolver): Uint8Array {
    return EventRegisterResolver.encode(message).finish();
  },
  toProtoMsg(message: EventRegisterResolver): EventRegisterResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventRegisterResolver",
      value: EventRegisterResolver.encode(message).finish()
    };
  }
};