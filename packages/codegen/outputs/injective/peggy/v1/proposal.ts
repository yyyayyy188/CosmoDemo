import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface BlacklistEthereumAddressesProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalProtoMsg {
  typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal";
  value: Uint8Array;
}
export interface BlacklistEthereumAddressesProposalAmino {
  title?: string;
  description?: string;
  blacklist_addresses?: string[];
}
export interface BlacklistEthereumAddressesProposalAminoMsg {
  type: "/injective.peggy.v1.BlacklistEthereumAddressesProposal";
  value: BlacklistEthereumAddressesProposalAmino;
}
export interface BlacklistEthereumAddressesProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalProtoMsg {
  typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal";
  value: Uint8Array;
}
export interface RevokeEthereumBlacklistProposalAmino {
  title?: string;
  description?: string;
  blacklist_addresses?: string[];
}
export interface RevokeEthereumBlacklistProposalAminoMsg {
  type: "/injective.peggy.v1.RevokeEthereumBlacklistProposal";
  value: RevokeEthereumBlacklistProposalAmino;
}
export interface RevokeEthereumBlacklistProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
function createBaseBlacklistEthereumAddressesProposal(): BlacklistEthereumAddressesProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}
export const BlacklistEthereumAddressesProposal = {
  typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
  encode(message: BlacklistEthereumAddressesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlacklistEthereumAddressesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlacklistEthereumAddressesProposal();
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
          message.blacklistAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlacklistEthereumAddressesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blacklistAddresses: Array.isArray(object?.blacklistAddresses) ? object.blacklistAddresses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: BlacklistEthereumAddressesProposal): JsonSafe<BlacklistEthereumAddressesProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.blacklistAddresses) {
      obj.blacklistAddresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklistAddresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal {
    const message = createBaseBlacklistEthereumAddressesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  },
  fromSDK(object: BlacklistEthereumAddressesProposalSDKType): BlacklistEthereumAddressesProposal {
    return {
      title: object?.title,
      description: object?.description,
      blacklistAddresses: Array.isArray(object?.blacklist_addresses) ? object.blacklist_addresses.map((e: any) => e) : []
    };
  },
  toSDK(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = [];
    }
    return obj;
  },
  fromAmino(object: BlacklistEthereumAddressesProposalAmino): BlacklistEthereumAddressesProposal {
    const message = createBaseBlacklistEthereumAddressesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.blacklistAddresses = object.blacklist_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = message.blacklistAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: BlacklistEthereumAddressesProposalAminoMsg): BlacklistEthereumAddressesProposal {
    return BlacklistEthereumAddressesProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklistEthereumAddressesProposalProtoMsg): BlacklistEthereumAddressesProposal {
    return BlacklistEthereumAddressesProposal.decode(message.value);
  },
  toProto(message: BlacklistEthereumAddressesProposal): Uint8Array {
    return BlacklistEthereumAddressesProposal.encode(message).finish();
  },
  toProtoMsg(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
      value: BlacklistEthereumAddressesProposal.encode(message).finish()
    };
  }
};
function createBaseRevokeEthereumBlacklistProposal(): RevokeEthereumBlacklistProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}
export const RevokeEthereumBlacklistProposal = {
  typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
  encode(message: RevokeEthereumBlacklistProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeEthereumBlacklistProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeEthereumBlacklistProposal();
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
          message.blacklistAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RevokeEthereumBlacklistProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blacklistAddresses: Array.isArray(object?.blacklistAddresses) ? object.blacklistAddresses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: RevokeEthereumBlacklistProposal): JsonSafe<RevokeEthereumBlacklistProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.blacklistAddresses) {
      obj.blacklistAddresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklistAddresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal {
    const message = createBaseRevokeEthereumBlacklistProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  },
  fromSDK(object: RevokeEthereumBlacklistProposalSDKType): RevokeEthereumBlacklistProposal {
    return {
      title: object?.title,
      description: object?.description,
      blacklistAddresses: Array.isArray(object?.blacklist_addresses) ? object.blacklist_addresses.map((e: any) => e) : []
    };
  },
  toSDK(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = [];
    }
    return obj;
  },
  fromAmino(object: RevokeEthereumBlacklistProposalAmino): RevokeEthereumBlacklistProposal {
    const message = createBaseRevokeEthereumBlacklistProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.blacklistAddresses = object.blacklist_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = message.blacklistAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: RevokeEthereumBlacklistProposalAminoMsg): RevokeEthereumBlacklistProposal {
    return RevokeEthereumBlacklistProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokeEthereumBlacklistProposalProtoMsg): RevokeEthereumBlacklistProposal {
    return RevokeEthereumBlacklistProposal.decode(message.value);
  },
  toProto(message: RevokeEthereumBlacklistProposal): Uint8Array {
    return RevokeEthereumBlacklistProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
      value: RevokeEthereumBlacklistProposal.encode(message).finish()
    };
  }
};