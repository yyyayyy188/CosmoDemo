import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial } from "../helpers";
import { JsonSafe } from "../json-safe";
export interface Supplychain {
  id: bigint;
  product: string;
  info: string;
  supplyinfo: string;
  creator: string;
}
export interface SupplychainProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.Supplychain";
  value: Uint8Array;
}
export interface SupplychainAmino {
  id?: string;
  product?: string;
  info?: string;
  supplyinfo?: string;
  creator?: string;
}
export interface SupplychainAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.Supplychain";
  value: SupplychainAmino;
}
export interface SupplychainSDKType {
  id: bigint;
  product: string;
  info: string;
  supplyinfo: string;
  creator: string;
}
function createBaseSupplychain(): Supplychain {
  return {
    id: BigInt(0),
    product: "",
    info: "",
    supplyinfo: "",
    creator: ""
  };
}
export const Supplychain = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.Supplychain",
  encode(message: Supplychain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.product !== "") {
      writer.uint32(18).string(message.product);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    if (message.supplyinfo !== "") {
      writer.uint32(34).string(message.supplyinfo);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Supplychain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplychain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.product = reader.string();
          break;
        case 3:
          message.info = reader.string();
          break;
        case 4:
          message.supplyinfo = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Supplychain {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      product: isSet(object.product) ? String(object.product) : "",
      info: isSet(object.info) ? String(object.info) : "",
      supplyinfo: isSet(object.supplyinfo) ? String(object.supplyinfo) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: Supplychain): JsonSafe<Supplychain> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.product !== undefined && (obj.product = message.product);
    message.info !== undefined && (obj.info = message.info);
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: DeepPartial<Supplychain>): Supplychain {
    const message = createBaseSupplychain();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromSDK(object: SupplychainSDKType): Supplychain {
    return {
      id: object?.id,
      product: object?.product,
      info: object?.info,
      supplyinfo: object?.supplyinfo,
      creator: object?.creator
    };
  },
  toSDK(message: Supplychain): SupplychainSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.product = message.product;
    obj.info = message.info;
    obj.supplyinfo = message.supplyinfo;
    obj.creator = message.creator;
    return obj;
  },
  fromAmino(object: SupplychainAmino): Supplychain {
    const message = createBaseSupplychain();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = object.supplyinfo;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Supplychain): SupplychainAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.product = message.product === "" ? undefined : message.product;
    obj.info = message.info === "" ? undefined : message.info;
    obj.supplyinfo = message.supplyinfo === "" ? undefined : message.supplyinfo;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: SupplychainAminoMsg): Supplychain {
    return Supplychain.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplychainProtoMsg): Supplychain {
    return Supplychain.decode(message.value);
  },
  toProto(message: Supplychain): Uint8Array {
    return Supplychain.encode(message).finish();
  },
  toProtoMsg(message: Supplychain): SupplychainProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.Supplychain",
      value: Supplychain.encode(message).finish()
    };
  }
};