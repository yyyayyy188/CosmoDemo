import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface UpdateAdminProposal {
  title: string;
  description: string;
  address: string;
}
export interface UpdateAdminProposalProtoMsg {
  typeUrl: "/comdex.oracle.v1beta1.UpdateAdminProposal";
  value: Uint8Array;
}
export interface UpdateAdminProposalAmino {
  title?: string;
  description?: string;
  address?: string;
}
export interface UpdateAdminProposalAminoMsg {
  type: "/comdex.oracle.v1beta1.UpdateAdminProposal";
  value: UpdateAdminProposalAmino;
}
export interface UpdateAdminProposalSDKType {
  title: string;
  description: string;
  address: string;
}
function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: "",
    description: "",
    address: ""
  };
}
export const UpdateAdminProposal = {
  typeUrl: "/comdex.oracle.v1beta1.UpdateAdminProposal",
  encode(message: UpdateAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
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
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: UpdateAdminProposal): JsonSafe<UpdateAdminProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: UpdateAdminProposalSDKType): UpdateAdminProposal {
    return {
      title: object?.title,
      description: object?.description,
      address: object?.address
    };
  },
  toSDK(message: UpdateAdminProposal): UpdateAdminProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: UpdateAdminProposalAminoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.decode(message.value);
  },
  toProto(message: UpdateAdminProposal): Uint8Array {
    return UpdateAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg {
    return {
      typeUrl: "/comdex.oracle.v1beta1.UpdateAdminProposal",
      value: UpdateAdminProposal.encode(message).finish()
    };
  }
};