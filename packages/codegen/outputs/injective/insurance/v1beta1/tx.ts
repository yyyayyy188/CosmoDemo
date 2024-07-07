import { OracleType, oracleTypeFromJSON, oracleTypeToJSON } from "../../oracle/v1beta1/oracle";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFund {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Oracle type */
  oracleType: OracleType;
  /** Expiration time of the market. Should be -1 for perpetual markets. */
  expiry: bigint;
  /** Initial deposit of the insurance fund */
  initialDeposit: Coin | undefined;
}
export interface MsgCreateInsuranceFundProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: Uint8Array;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundAmino {
  /** Creator of the insurance fund. */
  sender?: string;
  /** Ticker for the derivative market. */
  ticker?: string;
  /** Coin denom to use for the market quote denom */
  quote_denom?: string;
  /** Oracle base currency */
  oracle_base?: string;
  /** Oracle quote currency */
  oracle_quote?: string;
  /** Oracle type */
  oracle_type?: OracleType;
  /** Expiration time of the market. Should be -1 for perpetual markets. */
  expiry?: string;
  /** Initial deposit of the insurance fund */
  initial_deposit?: CoinAmino | undefined;
}
export interface MsgCreateInsuranceFundAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: MsgCreateInsuranceFundAmino;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundSDKType {
  sender: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  expiry: bigint;
  initial_deposit: CoinSDKType | undefined;
}
export interface MsgCreateInsuranceFundResponse {}
export interface MsgCreateInsuranceFundResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: Uint8Array;
}
export interface MsgCreateInsuranceFundResponseAmino {}
export interface MsgCreateInsuranceFundResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: MsgCreateInsuranceFundResponseAmino;
}
export interface MsgCreateInsuranceFundResponseSDKType {}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwrite {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit: Coin | undefined;
}
export interface MsgUnderwriteProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: Uint8Array;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteAmino {
  /** Address of the underwriter. */
  sender?: string;
  /** MarketID of the insurance fund. */
  market_id?: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit?: CoinAmino | undefined;
}
export interface MsgUnderwriteAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: MsgUnderwriteAmino;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteSDKType {
  sender: string;
  market_id: string;
  deposit: CoinSDKType | undefined;
}
export interface MsgUnderwriteResponse {}
export interface MsgUnderwriteResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: Uint8Array;
}
export interface MsgUnderwriteResponseAmino {}
export interface MsgUnderwriteResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: MsgUnderwriteResponseAmino;
}
export interface MsgUnderwriteResponseSDKType {}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemption {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Insurance fund share token amount to be redeemed. */
  amount: Coin | undefined;
}
export interface MsgRequestRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: Uint8Array;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionAmino {
  /** Address of the underwriter requesting a redemption. */
  sender?: string;
  /** MarketID of the insurance fund. */
  market_id?: string;
  /** Insurance fund share token amount to be redeemed. */
  amount?: CoinAmino | undefined;
}
export interface MsgRequestRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: MsgRequestRedemptionAmino;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionSDKType {
  sender: string;
  market_id: string;
  amount: CoinSDKType | undefined;
}
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: Uint8Array;
}
export interface MsgRequestRedemptionResponseAmino {}
export interface MsgRequestRedemptionResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: MsgRequestRedemptionResponseAmino;
}
export interface MsgRequestRedemptionResponseSDKType {}
function createBaseMsgCreateInsuranceFund(): MsgCreateInsuranceFund {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: BigInt(0),
    initialDeposit: Coin.fromPartial({})
  };
}
export const MsgCreateInsuranceFund = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
  encode(message: MsgCreateInsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(56).int64(message.expiry);
    }
    if (message.initialDeposit !== undefined) {
      Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.oracleBase = reader.string();
          break;
        case 5:
          message.oracleQuote = reader.string();
          break;
        case 6:
          message.oracleType = (reader.int32() as any);
          break;
        case 7:
          message.expiry = reader.int64();
          break;
        case 8:
          message.initialDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateInsuranceFund {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0),
      initialDeposit: isSet(object.initialDeposit) ? Coin.fromJSON(object.initialDeposit) : undefined
    };
  },
  toJSON(message: MsgCreateInsuranceFund): JsonSafe<MsgCreateInsuranceFund> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
    message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
    message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
    message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
    message.expiry !== undefined && (obj.expiry = (message.expiry || BigInt(0)).toString());
    message.initialDeposit !== undefined && (obj.initialDeposit = message.initialDeposit ? Coin.toJSON(message.initialDeposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? Coin.fromPartial(object.initialDeposit) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateInsuranceFundSDKType): MsgCreateInsuranceFund {
    return {
      sender: object?.sender,
      ticker: object?.ticker,
      quoteDenom: object?.quote_denom,
      oracleBase: object?.oracle_base,
      oracleQuote: object?.oracle_quote,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      expiry: object?.expiry,
      initialDeposit: object.initial_deposit ? Coin.fromSDK(object.initial_deposit) : undefined
    };
  },
  toSDK(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    message.oracleType !== undefined && (obj.oracle_type = oracleTypeToJSON(message.oracleType));
    obj.expiry = message.expiry;
    message.initialDeposit !== undefined && (obj.initial_deposit = message.initialDeposit ? Coin.toSDK(message.initialDeposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateInsuranceFundAmino): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.oracle_base !== undefined && object.oracle_base !== null) {
      message.oracleBase = object.oracle_base;
    }
    if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
      message.oracleQuote = object.oracle_quote;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    if (object.initial_deposit !== undefined && object.initial_deposit !== null) {
      message.initialDeposit = Coin.fromAmino(object.initial_deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry.toString() : undefined;
    obj.initial_deposit = message.initialDeposit ? Coin.toAmino(message.initialDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundAminoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundProtoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFund): Uint8Array {
    return MsgCreateInsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
      value: MsgCreateInsuranceFund.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInsuranceFundResponse(): MsgCreateInsuranceFundResponse {
  return {};
}
export const MsgCreateInsuranceFundResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
  encode(_: MsgCreateInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFundResponse();
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
  fromJSON(_: any): MsgCreateInsuranceFundResponse {
    return {};
  },
  toJSON(_: MsgCreateInsuranceFundResponse): JsonSafe<MsgCreateInsuranceFundResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  },
  fromSDK(_: MsgCreateInsuranceFundResponseSDKType): MsgCreateInsuranceFundResponse {
    return {};
  },
  toSDK(_: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateInsuranceFundResponseAmino): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  },
  toAmino(_: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundResponseAminoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundResponseProtoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFundResponse): Uint8Array {
    return MsgCreateInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
      value: MsgCreateInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnderwrite(): MsgUnderwrite {
  return {
    sender: "",
    marketId: "",
    deposit: Coin.fromPartial({})
  };
}
export const MsgUnderwrite = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
  encode(message: MsgUnderwrite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwrite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnderwrite {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: MsgUnderwrite): JsonSafe<MsgUnderwrite> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnderwrite>): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: MsgUnderwriteSDKType): MsgUnderwrite {
    return {
      sender: object?.sender,
      marketId: object?.market_id,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: MsgUnderwrite): MsgUnderwriteSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgUnderwriteAmino): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgUnderwrite): MsgUnderwriteAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteAminoMsg): MsgUnderwrite {
    return MsgUnderwrite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteProtoMsg): MsgUnderwrite {
    return MsgUnderwrite.decode(message.value);
  },
  toProto(message: MsgUnderwrite): Uint8Array {
    return MsgUnderwrite.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwrite): MsgUnderwriteProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
      value: MsgUnderwrite.encode(message).finish()
    };
  }
};
function createBaseMsgUnderwriteResponse(): MsgUnderwriteResponse {
  return {};
}
export const MsgUnderwriteResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
  encode(_: MsgUnderwriteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwriteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwriteResponse();
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
  fromJSON(_: any): MsgUnderwriteResponse {
    return {};
  },
  toJSON(_: MsgUnderwriteResponse): JsonSafe<MsgUnderwriteResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUnderwriteResponse>): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  },
  fromSDK(_: MsgUnderwriteResponseSDKType): MsgUnderwriteResponse {
    return {};
  },
  toSDK(_: MsgUnderwriteResponse): MsgUnderwriteResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUnderwriteResponseAmino): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  },
  toAmino(_: MsgUnderwriteResponse): MsgUnderwriteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteResponseAminoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteResponseProtoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.decode(message.value);
  },
  toProto(message: MsgUnderwriteResponse): Uint8Array {
    return MsgUnderwriteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwriteResponse): MsgUnderwriteResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
      value: MsgUnderwriteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    sender: "",
    marketId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRequestRedemption = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
  encode(message: MsgRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRequestRedemption {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRequestRedemption): JsonSafe<MsgRequestRedemption> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromSDK(object: MsgRequestRedemptionSDKType): MsgRequestRedemption {
    return {
      sender: object?.sender,
      marketId: object?.market_id,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: MsgRequestRedemption): MsgRequestRedemptionSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.decode(message.value);
  },
  toProto(message: MsgRequestRedemption): Uint8Array {
    return MsgRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
      value: MsgRequestRedemption.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}
export const MsgRequestRedemptionResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
  encode(_: MsgRequestRedemptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemptionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemptionResponse();
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
  fromJSON(_: any): MsgRequestRedemptionResponse {
    return {};
  },
  toJSON(_: MsgRequestRedemptionResponse): JsonSafe<MsgRequestRedemptionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  fromSDK(_: MsgRequestRedemptionResponseSDKType): MsgRequestRedemptionResponse {
    return {};
  },
  toSDK(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.decode(message.value);
  },
  toProto(message: MsgRequestRedemptionResponse): Uint8Array {
    return MsgRequestRedemptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
      value: MsgRequestRedemptionResponse.encode(message).finish()
    };
  }
};