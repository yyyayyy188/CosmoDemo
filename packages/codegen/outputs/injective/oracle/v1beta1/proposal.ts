import { BandOracleRequest, BandOracleRequestAmino, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsAmino, BandIBCParamsSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface GrantBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
  value: Uint8Array;
}
export interface GrantBandOraclePrivilegeProposalAmino {
  title?: string;
  description?: string;
  relayers?: string[];
}
export interface GrantBandOraclePrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
  value: GrantBandOraclePrivilegeProposalAmino;
}
export interface GrantBandOraclePrivilegeProposalSDKType {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeBandOraclePrivilegeProposalAmino {
  title?: string;
  description?: string;
  relayers?: string[];
}
export interface RevokeBandOraclePrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
  value: RevokeBandOraclePrivilegeProposalAmino;
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantPriceFeederPrivilegeProposalAmino {
  title?: string;
  description?: string;
  base?: string;
  quote?: string;
  relayers?: string[];
}
export interface GrantPriceFeederPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
  value: GrantPriceFeederPrivilegeProposalAmino;
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantProviderPrivilegeProposalAmino {
  title?: string;
  description?: string;
  provider?: string;
  relayers?: string[];
}
export interface GrantProviderPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
  value: GrantProviderPrivilegeProposalAmino;
}
export interface GrantProviderPrivilegeProposalSDKType {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeProviderPrivilegeProposalAmino {
  title?: string;
  description?: string;
  provider?: string;
  relayers?: string[];
}
export interface RevokeProviderPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
  value: RevokeProviderPrivilegeProposalAmino;
}
export interface RevokeProviderPrivilegeProposalSDKType {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokePriceFeederPrivilegeProposalAmino {
  title?: string;
  description?: string;
  base?: string;
  quote?: string;
  relayers?: string[];
}
export interface RevokePriceFeederPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
  value: RevokePriceFeederPrivilegeProposalAmino;
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
  title: string;
  description: string;
  request: BandOracleRequest | undefined;
}
export interface AuthorizeBandOracleRequestProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
  value: Uint8Array;
}
export interface AuthorizeBandOracleRequestProposalAmino {
  title?: string;
  description?: string;
  request?: BandOracleRequestAmino | undefined;
}
export interface AuthorizeBandOracleRequestProposalAminoMsg {
  type: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
  value: AuthorizeBandOracleRequestProposalAmino;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
  title: string;
  description: string;
  request: BandOracleRequestSDKType | undefined;
}
export interface UpdateBandOracleRequestProposal {
  title: string;
  description: string;
  deleteRequestId: bigint;
  updateOracleRequest?: BandOracleRequest | undefined;
}
export interface UpdateBandOracleRequestProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
  value: Uint8Array;
}
export interface UpdateBandOracleRequestProposalAmino {
  title?: string;
  description?: string;
  delete_request_id?: string;
  update_oracle_request?: BandOracleRequestAmino | undefined;
}
export interface UpdateBandOracleRequestProposalAminoMsg {
  type: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
  value: UpdateBandOracleRequestProposalAmino;
}
export interface UpdateBandOracleRequestProposalSDKType {
  title: string;
  description: string;
  delete_request_id: bigint;
  update_oracle_request?: BandOracleRequestSDKType | undefined;
}
export interface EnableBandIBCProposal {
  title: string;
  description: string;
  bandIbcParams: BandIBCParams | undefined;
}
export interface EnableBandIBCProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal";
  value: Uint8Array;
}
export interface EnableBandIBCProposalAmino {
  title?: string;
  description?: string;
  band_ibc_params?: BandIBCParamsAmino | undefined;
}
export interface EnableBandIBCProposalAminoMsg {
  type: "/injective.oracle.v1beta1.EnableBandIBCProposal";
  value: EnableBandIBCProposalAmino;
}
export interface EnableBandIBCProposalSDKType {
  title: string;
  description: string;
  band_ibc_params: BandIBCParamsSDKType | undefined;
}
function createBaseGrantBandOraclePrivilegeProposal(): GrantBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}
export const GrantBandOraclePrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
  encode(message: GrantBandOraclePrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantBandOraclePrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantBandOraclePrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantBandOraclePrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: GrantBandOraclePrivilegeProposal): JsonSafe<GrantBandOraclePrivilegeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal {
    const message = createBaseGrantBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GrantBandOraclePrivilegeProposalSDKType): GrantBandOraclePrivilegeProposal {
    return {
      title: object?.title,
      description: object?.description,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: GrantBandOraclePrivilegeProposalAmino): GrantBandOraclePrivilegeProposal {
    const message = createBaseGrantBandOraclePrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantBandOraclePrivilegeProposalAminoMsg): GrantBandOraclePrivilegeProposal {
    return GrantBandOraclePrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantBandOraclePrivilegeProposalProtoMsg): GrantBandOraclePrivilegeProposal {
    return GrantBandOraclePrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantBandOraclePrivilegeProposal): Uint8Array {
    return GrantBandOraclePrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
      value: GrantBandOraclePrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseRevokeBandOraclePrivilegeProposal(): RevokeBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}
export const RevokeBandOraclePrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
  encode(message: RevokeBandOraclePrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeBandOraclePrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RevokeBandOraclePrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: RevokeBandOraclePrivilegeProposal): JsonSafe<RevokeBandOraclePrivilegeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal {
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: RevokeBandOraclePrivilegeProposalSDKType): RevokeBandOraclePrivilegeProposal {
    return {
      title: object?.title,
      description: object?.description,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: RevokeBandOraclePrivilegeProposalAmino): RevokeBandOraclePrivilegeProposal {
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokeBandOraclePrivilegeProposalAminoMsg): RevokeBandOraclePrivilegeProposal {
    return RevokeBandOraclePrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokeBandOraclePrivilegeProposalProtoMsg): RevokeBandOraclePrivilegeProposal {
    return RevokeBandOraclePrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeBandOraclePrivilegeProposal): Uint8Array {
    return RevokeBandOraclePrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
      value: RevokeBandOraclePrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseGrantPriceFeederPrivilegeProposal(): GrantPriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const GrantPriceFeederPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
  encode(message: GrantPriceFeederPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantPriceFeederPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.quote = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantPriceFeederPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: GrantPriceFeederPrivilegeProposal): JsonSafe<GrantPriceFeederPrivilegeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal {
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GrantPriceFeederPrivilegeProposalSDKType): GrantPriceFeederPrivilegeProposal {
    return {
      title: object?.title,
      description: object?.description,
      base: object?.base,
      quote: object?.quote,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.base = message.base;
    obj.quote = message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: GrantPriceFeederPrivilegeProposalAmino): GrantPriceFeederPrivilegeProposal {
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantPriceFeederPrivilegeProposalAminoMsg): GrantPriceFeederPrivilegeProposal {
    return GrantPriceFeederPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantPriceFeederPrivilegeProposalProtoMsg): GrantPriceFeederPrivilegeProposal {
    return GrantPriceFeederPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantPriceFeederPrivilegeProposal): Uint8Array {
    return GrantPriceFeederPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
      value: GrantPriceFeederPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseGrantProviderPrivilegeProposal(): GrantProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const GrantProviderPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
  encode(message: GrantProviderPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantProviderPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantProviderPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantProviderPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: GrantProviderPrivilegeProposal): JsonSafe<GrantProviderPrivilegeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal {
    const message = createBaseGrantProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GrantProviderPrivilegeProposalSDKType): GrantProviderPrivilegeProposal {
    return {
      title: object?.title,
      description: object?.description,
      provider: object?.provider,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.provider = message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: GrantProviderPrivilegeProposalAmino): GrantProviderPrivilegeProposal {
    const message = createBaseGrantProviderPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantProviderPrivilegeProposalAminoMsg): GrantProviderPrivilegeProposal {
    return GrantProviderPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantProviderPrivilegeProposalProtoMsg): GrantProviderPrivilegeProposal {
    return GrantProviderPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantProviderPrivilegeProposal): Uint8Array {
    return GrantProviderPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
      value: GrantProviderPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseRevokeProviderPrivilegeProposal(): RevokeProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const RevokeProviderPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
  encode(message: RevokeProviderPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeProviderPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeProviderPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RevokeProviderPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: RevokeProviderPrivilegeProposal): JsonSafe<RevokeProviderPrivilegeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal {
    const message = createBaseRevokeProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: RevokeProviderPrivilegeProposalSDKType): RevokeProviderPrivilegeProposal {
    return {
      title: object?.title,
      description: object?.description,
      provider: object?.provider,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.provider = message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: RevokeProviderPrivilegeProposalAmino): RevokeProviderPrivilegeProposal {
    const message = createBaseRevokeProviderPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokeProviderPrivilegeProposalAminoMsg): RevokeProviderPrivilegeProposal {
    return RevokeProviderPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokeProviderPrivilegeProposalProtoMsg): RevokeProviderPrivilegeProposal {
    return RevokeProviderPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeProviderPrivilegeProposal): Uint8Array {
    return RevokeProviderPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
      value: RevokeProviderPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseRevokePriceFeederPrivilegeProposal(): RevokePriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const RevokePriceFeederPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
  encode(message: RevokePriceFeederPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokePriceFeederPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.quote = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RevokePriceFeederPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: RevokePriceFeederPrivilegeProposal): JsonSafe<RevokePriceFeederPrivilegeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal {
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: RevokePriceFeederPrivilegeProposalSDKType): RevokePriceFeederPrivilegeProposal {
    return {
      title: object?.title,
      description: object?.description,
      base: object?.base,
      quote: object?.quote,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.base = message.base;
    obj.quote = message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: RevokePriceFeederPrivilegeProposalAmino): RevokePriceFeederPrivilegeProposal {
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokePriceFeederPrivilegeProposalAminoMsg): RevokePriceFeederPrivilegeProposal {
    return RevokePriceFeederPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokePriceFeederPrivilegeProposalProtoMsg): RevokePriceFeederPrivilegeProposal {
    return RevokePriceFeederPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokePriceFeederPrivilegeProposal): Uint8Array {
    return RevokePriceFeederPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
      value: RevokePriceFeederPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseAuthorizeBandOracleRequestProposal(): AuthorizeBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    request: BandOracleRequest.fromPartial({})
  };
}
export const AuthorizeBandOracleRequestProposal = {
  typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
  encode(message: AuthorizeBandOracleRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.request !== undefined) {
      BandOracleRequest.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthorizeBandOracleRequestProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeBandOracleRequestProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.request = BandOracleRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthorizeBandOracleRequestProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      request: isSet(object.request) ? BandOracleRequest.fromJSON(object.request) : undefined
    };
  },
  toJSON(message: AuthorizeBandOracleRequestProposal): JsonSafe<AuthorizeBandOracleRequestProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.request !== undefined && (obj.request = message.request ? BandOracleRequest.toJSON(message.request) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal {
    const message = createBaseAuthorizeBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.request = object.request !== undefined && object.request !== null ? BandOracleRequest.fromPartial(object.request) : undefined;
    return message;
  },
  fromSDK(object: AuthorizeBandOracleRequestProposalSDKType): AuthorizeBandOracleRequestProposal {
    return {
      title: object?.title,
      description: object?.description,
      request: object.request ? BandOracleRequest.fromSDK(object.request) : undefined
    };
  },
  toSDK(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.request !== undefined && (obj.request = message.request ? BandOracleRequest.toSDK(message.request) : undefined);
    return obj;
  },
  fromAmino(object: AuthorizeBandOracleRequestProposalAmino): AuthorizeBandOracleRequestProposal {
    const message = createBaseAuthorizeBandOracleRequestProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = BandOracleRequest.fromAmino(object.request);
    }
    return message;
  },
  toAmino(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.request = message.request ? BandOracleRequest.toAmino(message.request) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuthorizeBandOracleRequestProposalAminoMsg): AuthorizeBandOracleRequestProposal {
    return AuthorizeBandOracleRequestProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorizeBandOracleRequestProposalProtoMsg): AuthorizeBandOracleRequestProposal {
    return AuthorizeBandOracleRequestProposal.decode(message.value);
  },
  toProto(message: AuthorizeBandOracleRequestProposal): Uint8Array {
    return AuthorizeBandOracleRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
      value: AuthorizeBandOracleRequestProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateBandOracleRequestProposal(): UpdateBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    deleteRequestId: BigInt(0),
    updateOracleRequest: undefined
  };
}
export const UpdateBandOracleRequestProposal = {
  typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
  encode(message: UpdateBandOracleRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.deleteRequestId !== BigInt(0)) {
      writer.uint32(24).uint64(message.deleteRequestId);
    }
    if (message.updateOracleRequest !== undefined) {
      BandOracleRequest.encode(message.updateOracleRequest, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateBandOracleRequestProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBandOracleRequestProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.deleteRequestId = reader.uint64();
          break;
        case 4:
          message.updateOracleRequest = BandOracleRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateBandOracleRequestProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      deleteRequestId: isSet(object.deleteRequestId) ? BigInt(object.deleteRequestId.toString()) : BigInt(0),
      updateOracleRequest: isSet(object.updateOracleRequest) ? BandOracleRequest.fromJSON(object.updateOracleRequest) : undefined
    };
  },
  toJSON(message: UpdateBandOracleRequestProposal): JsonSafe<UpdateBandOracleRequestProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.deleteRequestId !== undefined && (obj.deleteRequestId = (message.deleteRequestId || BigInt(0)).toString());
    message.updateOracleRequest !== undefined && (obj.updateOracleRequest = message.updateOracleRequest ? BandOracleRequest.toJSON(message.updateOracleRequest) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deleteRequestId = object.deleteRequestId !== undefined && object.deleteRequestId !== null ? BigInt(object.deleteRequestId.toString()) : BigInt(0);
    message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
    return message;
  },
  fromSDK(object: UpdateBandOracleRequestProposalSDKType): UpdateBandOracleRequestProposal {
    return {
      title: object?.title,
      description: object?.description,
      deleteRequestId: object?.delete_request_id,
      updateOracleRequest: object.update_oracle_request ? BandOracleRequest.fromSDK(object.update_oracle_request) : undefined
    };
  },
  toSDK(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.delete_request_id = message.deleteRequestId;
    message.updateOracleRequest !== undefined && (obj.update_oracle_request = message.updateOracleRequest ? BandOracleRequest.toSDK(message.updateOracleRequest) : undefined);
    return obj;
  },
  fromAmino(object: UpdateBandOracleRequestProposalAmino): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.delete_request_id !== undefined && object.delete_request_id !== null) {
      message.deleteRequestId = BigInt(object.delete_request_id);
    }
    if (object.update_oracle_request !== undefined && object.update_oracle_request !== null) {
      message.updateOracleRequest = BandOracleRequest.fromAmino(object.update_oracle_request);
    }
    return message;
  },
  toAmino(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.delete_request_id = message.deleteRequestId !== BigInt(0) ? message.deleteRequestId.toString() : undefined;
    obj.update_oracle_request = message.updateOracleRequest ? BandOracleRequest.toAmino(message.updateOracleRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateBandOracleRequestProposalAminoMsg): UpdateBandOracleRequestProposal {
    return UpdateBandOracleRequestProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateBandOracleRequestProposalProtoMsg): UpdateBandOracleRequestProposal {
    return UpdateBandOracleRequestProposal.decode(message.value);
  },
  toProto(message: UpdateBandOracleRequestProposal): Uint8Array {
    return UpdateBandOracleRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
      value: UpdateBandOracleRequestProposal.encode(message).finish()
    };
  }
};
function createBaseEnableBandIBCProposal(): EnableBandIBCProposal {
  return {
    title: "",
    description: "",
    bandIbcParams: BandIBCParams.fromPartial({})
  };
}
export const EnableBandIBCProposal = {
  typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
  encode(message: EnableBandIBCProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnableBandIBCProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableBandIBCProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnableBandIBCProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      bandIbcParams: isSet(object.bandIbcParams) ? BandIBCParams.fromJSON(object.bandIbcParams) : undefined
    };
  },
  toJSON(message: EnableBandIBCProposal): JsonSafe<EnableBandIBCProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.bandIbcParams !== undefined && (obj.bandIbcParams = message.bandIbcParams ? BandIBCParams.toJSON(message.bandIbcParams) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EnableBandIBCProposal>): EnableBandIBCProposal {
    const message = createBaseEnableBandIBCProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    return message;
  },
  fromSDK(object: EnableBandIBCProposalSDKType): EnableBandIBCProposal {
    return {
      title: object?.title,
      description: object?.description,
      bandIbcParams: object.band_ibc_params ? BandIBCParams.fromSDK(object.band_ibc_params) : undefined
    };
  },
  toSDK(message: EnableBandIBCProposal): EnableBandIBCProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.bandIbcParams !== undefined && (obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toSDK(message.bandIbcParams) : undefined);
    return obj;
  },
  fromAmino(object: EnableBandIBCProposalAmino): EnableBandIBCProposal {
    const message = createBaseEnableBandIBCProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.band_ibc_params !== undefined && object.band_ibc_params !== null) {
      message.bandIbcParams = BandIBCParams.fromAmino(object.band_ibc_params);
    }
    return message;
  },
  toAmino(message: EnableBandIBCProposal): EnableBandIBCProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnableBandIBCProposalAminoMsg): EnableBandIBCProposal {
    return EnableBandIBCProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: EnableBandIBCProposalProtoMsg): EnableBandIBCProposal {
    return EnableBandIBCProposal.decode(message.value);
  },
  toProto(message: EnableBandIBCProposal): Uint8Array {
    return EnableBandIBCProposal.encode(message).finish();
  },
  toProtoMsg(message: EnableBandIBCProposal): EnableBandIBCProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
      value: EnableBandIBCProposal.encode(message).finish()
    };
  }
};