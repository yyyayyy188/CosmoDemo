import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
  /** credit_class_fee is the fixed fee charged on creation of a new credit class */
  creditClassFee: Coin[];
  /** basket_fee is the fixed fee charged on creation of a new basket */
  basketFee: Coin[];
  /**
   * allowed_class_creators is an allowlist defining the addresses with
   * the required permissions to create credit classes
   */
  allowedClassCreators: string[];
  /**
   * allowlist_enabled is a param that enables/disables the allowlist for credit
   * creation
   */
  allowlistEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/regen.ecocredit.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsAmino {
  /** credit_class_fee is the fixed fee charged on creation of a new credit class */
  credit_class_fee?: CoinAmino[];
  /** basket_fee is the fixed fee charged on creation of a new basket */
  basket_fee?: CoinAmino[];
  /**
   * allowed_class_creators is an allowlist defining the addresses with
   * the required permissions to create credit classes
   */
  allowed_class_creators?: string[];
  /**
   * allowlist_enabled is a param that enables/disables the allowlist for credit
   * creation
   */
  allowlist_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/regen.ecocredit.v1.Params";
  value: ParamsAmino;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsSDKType {
  credit_class_fee: CoinSDKType[];
  basket_fee: CoinSDKType[];
  allowed_class_creators: string[];
  allowlist_enabled: boolean;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTx {
  /**
   * type of the transaction originating the mint process. Eg: Polygon,
   * Ethereum, Verra...
   */
  typ: string;
  /** the id of a transaction based on a type (tx id, serial number) */
  id: string;
}
export interface OriginTxProtoMsg {
  typeUrl: "/regen.ecocredit.v1.OriginTx";
  value: Uint8Array;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTxAmino {
  /**
   * type of the transaction originating the mint process. Eg: Polygon,
   * Ethereum, Verra...
   */
  typ?: string;
  /** the id of a transaction based on a type (tx id, serial number) */
  id?: string;
}
export interface OriginTxAminoMsg {
  type: "/regen.ecocredit.v1.OriginTx";
  value: OriginTxAmino;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTxSDKType {
  typ: string;
  id: string;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposal {
  /** title is the title of the proposal. */
  title: string;
  /** description is the description of the proposal. */
  description: string;
  /**
   * credit_type is the credit type to be added to the network if the proposal
   * passes.
   */
  creditType?: CreditType | undefined;
}
export interface CreditTypeProposalProtoMsg {
  typeUrl: "/regen.ecocredit.v1.CreditTypeProposal";
  value: Uint8Array;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposalAmino {
  /** title is the title of the proposal. */
  title?: string;
  /** description is the description of the proposal. */
  description?: string;
  /**
   * credit_type is the credit type to be added to the network if the proposal
   * passes.
   */
  credit_type?: CreditTypeAmino | undefined;
}
export interface CreditTypeProposalAminoMsg {
  type: "/regen.ecocredit.v1.CreditTypeProposal";
  value: CreditTypeProposalAmino;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposalSDKType {
  title: string;
  description: string;
  credit_type?: CreditTypeSDKType | undefined;
}
function createBaseParams(): Params {
  return {
    creditClassFee: [],
    basketFee: [],
    allowedClassCreators: [],
    allowlistEnabled: false
  };
}
export const Params = {
  typeUrl: "/regen.ecocredit.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.creditClassFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.basketFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.allowedClassCreators) {
      writer.uint32(26).string(v!);
    }
    if (message.allowlistEnabled === true) {
      writer.uint32(32).bool(message.allowlistEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditClassFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.basketFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.allowedClassCreators.push(reader.string());
          break;
        case 4:
          message.allowlistEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      creditClassFee: Array.isArray(object?.creditClassFee) ? object.creditClassFee.map((e: any) => Coin.fromJSON(e)) : [],
      basketFee: Array.isArray(object?.basketFee) ? object.basketFee.map((e: any) => Coin.fromJSON(e)) : [],
      allowedClassCreators: Array.isArray(object?.allowedClassCreators) ? object.allowedClassCreators.map((e: any) => String(e)) : [],
      allowlistEnabled: isSet(object.allowlistEnabled) ? Boolean(object.allowlistEnabled) : false
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.creditClassFee) {
      obj.creditClassFee = message.creditClassFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.creditClassFee = [];
    }
    if (message.basketFee) {
      obj.basketFee = message.basketFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.basketFee = [];
    }
    if (message.allowedClassCreators) {
      obj.allowedClassCreators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowedClassCreators = [];
    }
    message.allowlistEnabled !== undefined && (obj.allowlistEnabled = message.allowlistEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.creditClassFee = object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
    message.basketFee = object.basketFee?.map(e => Coin.fromPartial(e)) || [];
    message.allowedClassCreators = object.allowedClassCreators?.map(e => e) || [];
    message.allowlistEnabled = object.allowlistEnabled ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      creditClassFee: Array.isArray(object?.credit_class_fee) ? object.credit_class_fee.map((e: any) => Coin.fromSDK(e)) : [],
      basketFee: Array.isArray(object?.basket_fee) ? object.basket_fee.map((e: any) => Coin.fromSDK(e)) : [],
      allowedClassCreators: Array.isArray(object?.allowed_class_creators) ? object.allowed_class_creators.map((e: any) => e) : [],
      allowlistEnabled: object?.allowlist_enabled
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.creditClassFee) {
      obj.credit_class_fee = message.creditClassFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.credit_class_fee = [];
    }
    if (message.basketFee) {
      obj.basket_fee = message.basketFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.basket_fee = [];
    }
    if (message.allowedClassCreators) {
      obj.allowed_class_creators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowed_class_creators = [];
    }
    obj.allowlist_enabled = message.allowlistEnabled;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.creditClassFee = object.credit_class_fee?.map(e => Coin.fromAmino(e)) || [];
    message.basketFee = object.basket_fee?.map(e => Coin.fromAmino(e)) || [];
    message.allowedClassCreators = object.allowed_class_creators?.map(e => e) || [];
    if (object.allowlist_enabled !== undefined && object.allowlist_enabled !== null) {
      message.allowlistEnabled = object.allowlist_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.creditClassFee) {
      obj.credit_class_fee = message.creditClassFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.credit_class_fee = message.creditClassFee;
    }
    if (message.basketFee) {
      obj.basket_fee = message.basketFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.basket_fee = message.basketFee;
    }
    if (message.allowedClassCreators) {
      obj.allowed_class_creators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowed_class_creators = message.allowedClassCreators;
    }
    obj.allowlist_enabled = message.allowlistEnabled === false ? undefined : message.allowlistEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseOriginTx(): OriginTx {
  return {
    typ: "",
    id: ""
  };
}
export const OriginTx = {
  typeUrl: "/regen.ecocredit.v1.OriginTx",
  encode(message: OriginTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typ !== "") {
      writer.uint32(10).string(message.typ);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OriginTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typ = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OriginTx {
    return {
      typ: isSet(object.typ) ? String(object.typ) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: OriginTx): JsonSafe<OriginTx> {
    const obj: any = {};
    message.typ !== undefined && (obj.typ = message.typ);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: DeepPartial<OriginTx>): OriginTx {
    const message = createBaseOriginTx();
    message.typ = object.typ ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromSDK(object: OriginTxSDKType): OriginTx {
    return {
      typ: object?.typ,
      id: object?.id
    };
  },
  toSDK(message: OriginTx): OriginTxSDKType {
    const obj: any = {};
    obj.typ = message.typ;
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: OriginTxAmino): OriginTx {
    const message = createBaseOriginTx();
    if (object.typ !== undefined && object.typ !== null) {
      message.typ = object.typ;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: OriginTx): OriginTxAmino {
    const obj: any = {};
    obj.typ = message.typ === "" ? undefined : message.typ;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: OriginTxAminoMsg): OriginTx {
    return OriginTx.fromAmino(object.value);
  },
  fromProtoMsg(message: OriginTxProtoMsg): OriginTx {
    return OriginTx.decode(message.value);
  },
  toProto(message: OriginTx): Uint8Array {
    return OriginTx.encode(message).finish();
  },
  toProtoMsg(message: OriginTx): OriginTxProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.OriginTx",
      value: OriginTx.encode(message).finish()
    };
  }
};
function createBaseCreditTypeProposal(): CreditTypeProposal {
  return {
    title: "",
    description: "",
    creditType: undefined
  };
}
export const CreditTypeProposal = {
  typeUrl: "/regen.ecocredit.v1.CreditTypeProposal",
  encode(message: CreditTypeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreditTypeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditTypeProposal();
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
          message.creditType = CreditType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreditTypeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined
    };
  },
  toJSON(message: CreditTypeProposal): JsonSafe<CreditTypeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.creditType !== undefined && (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreditTypeProposal>): CreditTypeProposal {
    const message = createBaseCreditTypeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
    return message;
  },
  fromSDK(object: CreditTypeProposalSDKType): CreditTypeProposal {
    return {
      title: object?.title,
      description: object?.description,
      creditType: object.credit_type ? CreditType.fromSDK(object.credit_type) : undefined
    };
  },
  toSDK(message: CreditTypeProposal): CreditTypeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.creditType !== undefined && (obj.credit_type = message.creditType ? CreditType.toSDK(message.creditType) : undefined);
    return obj;
  },
  fromAmino(object: CreditTypeProposalAmino): CreditTypeProposal {
    const message = createBaseCreditTypeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.credit_type !== undefined && object.credit_type !== null) {
      message.creditType = CreditType.fromAmino(object.credit_type);
    }
    return message;
  },
  toAmino(message: CreditTypeProposal): CreditTypeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreditTypeProposalAminoMsg): CreditTypeProposal {
    return CreditTypeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CreditTypeProposalProtoMsg): CreditTypeProposal {
    return CreditTypeProposal.decode(message.value);
  },
  toProto(message: CreditTypeProposal): Uint8Array {
    return CreditTypeProposal.encode(message).finish();
  },
  toProtoMsg(message: CreditTypeProposal): CreditTypeProposalProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.CreditTypeProposal",
      value: CreditTypeProposal.encode(message).finish()
    };
  }
};