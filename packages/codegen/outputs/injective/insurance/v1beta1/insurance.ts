import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { OracleType, oracleTypeFromJSON, oracleTypeToJSON } from "../../oracle/v1beta1/oracle";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface Params {
  /**
   * default_redemption_notice_period_duration defines the default minimum notice period duration that must pass after an underwriter sends
   * a redemption request before the underwriter can claim his tokens
   */
  defaultRedemptionNoticePeriodDuration: Duration | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * default_redemption_notice_period_duration defines the default minimum notice period duration that must pass after an underwriter sends
   * a redemption request before the underwriter can claim his tokens
   */
  default_redemption_notice_period_duration?: DurationAmino | undefined;
}
export interface ParamsAminoMsg {
  type: "/injective.insurance.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  default_redemption_notice_period_duration: DurationSDKType | undefined;
}
export interface InsuranceFund {
  /** deposit denomination for the given insurance fund */
  depositDenom: string;
  /** insurance fund pool token denomination for the given insurance fund */
  insurancePoolTokenDenom: string;
  /**
   * redemption_notice_period_duration defines the minimum notice period duration that must pass after an underwriter sends
   * a redemption request before the underwriter can claim his tokens
   */
  redemptionNoticePeriodDuration: Duration | undefined;
  /** balance of fund */
  balance: string;
  /** total share tokens minted */
  totalShare: string;
  /** marketID of the derivative market */
  marketId: string;
  /** ticker of the derivative market */
  marketTicker: string;
  /** Oracle base currency of the derivative market */
  oracleBase: string;
  /** Oracle quote currency of the derivative market */
  oracleQuote: string;
  /** Oracle type of the derivative market */
  oracleType: OracleType;
  /** Expiration time of the derivative market. Should be -1 for perpetual markets. */
  expiry: bigint;
}
export interface InsuranceFundProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.InsuranceFund";
  value: Uint8Array;
}
export interface InsuranceFundAmino {
  /** deposit denomination for the given insurance fund */
  deposit_denom?: string;
  /** insurance fund pool token denomination for the given insurance fund */
  insurance_pool_token_denom?: string;
  /**
   * redemption_notice_period_duration defines the minimum notice period duration that must pass after an underwriter sends
   * a redemption request before the underwriter can claim his tokens
   */
  redemption_notice_period_duration?: DurationAmino | undefined;
  /** balance of fund */
  balance?: string;
  /** total share tokens minted */
  total_share?: string;
  /** marketID of the derivative market */
  market_id?: string;
  /** ticker of the derivative market */
  market_ticker?: string;
  /** Oracle base currency of the derivative market */
  oracle_base?: string;
  /** Oracle quote currency of the derivative market */
  oracle_quote?: string;
  /** Oracle type of the derivative market */
  oracle_type?: OracleType;
  /** Expiration time of the derivative market. Should be -1 for perpetual markets. */
  expiry?: string;
}
export interface InsuranceFundAminoMsg {
  type: "/injective.insurance.v1beta1.InsuranceFund";
  value: InsuranceFundAmino;
}
export interface InsuranceFundSDKType {
  deposit_denom: string;
  insurance_pool_token_denom: string;
  redemption_notice_period_duration: DurationSDKType | undefined;
  balance: string;
  total_share: string;
  market_id: string;
  market_ticker: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  expiry: bigint;
}
export interface RedemptionSchedule {
  /** id of redemption schedule */
  id: bigint;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** address of the redeemer */
  redeemer: string;
  /** the time after which the redemption can be claimed */
  claimableRedemptionTime: Date | undefined;
  /** the insurance_pool_token amount to redeem */
  redemptionAmount: Coin | undefined;
}
export interface RedemptionScheduleProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule";
  value: Uint8Array;
}
export interface RedemptionScheduleAmino {
  /** id of redemption schedule */
  id?: string;
  /** marketId of insurance fund for the redemption */
  marketId?: string;
  /** address of the redeemer */
  redeemer?: string;
  /** the time after which the redemption can be claimed */
  claimable_redemption_time?: string | undefined;
  /** the insurance_pool_token amount to redeem */
  redemption_amount?: CoinAmino | undefined;
}
export interface RedemptionScheduleAminoMsg {
  type: "/injective.insurance.v1beta1.RedemptionSchedule";
  value: RedemptionScheduleAmino;
}
export interface RedemptionScheduleSDKType {
  id: bigint;
  marketId: string;
  redeemer: string;
  claimable_redemption_time: Date | undefined;
  redemption_amount: CoinSDKType | undefined;
}
export interface EventInsuranceFundUpdate {
  fund?: InsuranceFund | undefined;
}
export interface EventInsuranceFundUpdateProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate";
  value: Uint8Array;
}
export interface EventInsuranceFundUpdateAmino {
  fund?: InsuranceFundAmino | undefined;
}
export interface EventInsuranceFundUpdateAminoMsg {
  type: "/injective.insurance.v1beta1.EventInsuranceFundUpdate";
  value: EventInsuranceFundUpdateAmino;
}
export interface EventInsuranceFundUpdateSDKType {
  fund?: InsuranceFundSDKType | undefined;
}
export interface EventRequestRedemption {
  schedule?: RedemptionSchedule | undefined;
}
export interface EventRequestRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption";
  value: Uint8Array;
}
export interface EventRequestRedemptionAmino {
  schedule?: RedemptionScheduleAmino | undefined;
}
export interface EventRequestRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.EventRequestRedemption";
  value: EventRequestRedemptionAmino;
}
export interface EventRequestRedemptionSDKType {
  schedule?: RedemptionScheduleSDKType | undefined;
}
export interface EventWithdrawRedemption {
  /** redemption schedule triggered withdraw */
  schedule?: RedemptionSchedule | undefined;
  /** redeem coin amount in base_currency */
  redeemCoin: Coin | undefined;
}
export interface EventWithdrawRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption";
  value: Uint8Array;
}
export interface EventWithdrawRedemptionAmino {
  /** redemption schedule triggered withdraw */
  schedule?: RedemptionScheduleAmino | undefined;
  /** redeem coin amount in base_currency */
  redeem_coin?: CoinAmino | undefined;
}
export interface EventWithdrawRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.EventWithdrawRedemption";
  value: EventWithdrawRedemptionAmino;
}
export interface EventWithdrawRedemptionSDKType {
  schedule?: RedemptionScheduleSDKType | undefined;
  redeem_coin: CoinSDKType | undefined;
}
export interface EventUnderwrite {
  /** address of the underwriter */
  underwriter: string;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** deposit coin amount */
  deposit: Coin | undefined;
  /** share coin amount */
  shares: Coin | undefined;
}
export interface EventUnderwriteProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventUnderwrite";
  value: Uint8Array;
}
export interface EventUnderwriteAmino {
  /** address of the underwriter */
  underwriter?: string;
  /** marketId of insurance fund for the redemption */
  marketId?: string;
  /** deposit coin amount */
  deposit?: CoinAmino | undefined;
  /** share coin amount */
  shares?: CoinAmino | undefined;
}
export interface EventUnderwriteAminoMsg {
  type: "/injective.insurance.v1beta1.EventUnderwrite";
  value: EventUnderwriteAmino;
}
export interface EventUnderwriteSDKType {
  underwriter: string;
  marketId: string;
  deposit: CoinSDKType | undefined;
  shares: CoinSDKType | undefined;
}
function createBaseParams(): Params {
  return {
    defaultRedemptionNoticePeriodDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/injective.insurance.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultRedemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.defaultRedemptionNoticePeriodDuration, writer.uint32(10).fork()).ldelim();
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
          message.defaultRedemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
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
      defaultRedemptionNoticePeriodDuration: isSet(object.defaultRedemptionNoticePeriodDuration) ? Duration.fromJSON(object.defaultRedemptionNoticePeriodDuration) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.defaultRedemptionNoticePeriodDuration !== undefined && (obj.defaultRedemptionNoticePeriodDuration = message.defaultRedemptionNoticePeriodDuration ? Duration.toJSON(message.defaultRedemptionNoticePeriodDuration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.defaultRedemptionNoticePeriodDuration = object.defaultRedemptionNoticePeriodDuration !== undefined && object.defaultRedemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.defaultRedemptionNoticePeriodDuration) : undefined;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      defaultRedemptionNoticePeriodDuration: object.default_redemption_notice_period_duration ? Duration.fromSDK(object.default_redemption_notice_period_duration) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.defaultRedemptionNoticePeriodDuration !== undefined && (obj.default_redemption_notice_period_duration = message.defaultRedemptionNoticePeriodDuration ? Duration.toSDK(message.defaultRedemptionNoticePeriodDuration) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.default_redemption_notice_period_duration !== undefined && object.default_redemption_notice_period_duration !== null) {
      message.defaultRedemptionNoticePeriodDuration = Duration.fromAmino(object.default_redemption_notice_period_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.default_redemption_notice_period_duration = message.defaultRedemptionNoticePeriodDuration ? Duration.toAmino(message.defaultRedemptionNoticePeriodDuration) : undefined;
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
      typeUrl: "/injective.insurance.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseInsuranceFund(): InsuranceFund {
  return {
    depositDenom: "",
    insurancePoolTokenDenom: "",
    redemptionNoticePeriodDuration: Duration.fromPartial({}),
    balance: "",
    totalShare: "",
    marketId: "",
    marketTicker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: BigInt(0)
  };
}
export const InsuranceFund = {
  typeUrl: "/injective.insurance.v1beta1.InsuranceFund",
  encode(message: InsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.insurancePoolTokenDenom !== "") {
      writer.uint32(18).string(message.insurancePoolTokenDenom);
    }
    if (message.redemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.redemptionNoticePeriodDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.totalShare !== "") {
      writer.uint32(42).string(message.totalShare);
    }
    if (message.marketId !== "") {
      writer.uint32(50).string(message.marketId);
    }
    if (message.marketTicker !== "") {
      writer.uint32(58).string(message.marketTicker);
    }
    if (message.oracleBase !== "") {
      writer.uint32(66).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(74).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(80).int32(message.oracleType);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(88).int64(message.expiry);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositDenom = reader.string();
          break;
        case 2:
          message.insurancePoolTokenDenom = reader.string();
          break;
        case 3:
          message.redemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.totalShare = reader.string();
          break;
        case 6:
          message.marketId = reader.string();
          break;
        case 7:
          message.marketTicker = reader.string();
          break;
        case 8:
          message.oracleBase = reader.string();
          break;
        case 9:
          message.oracleQuote = reader.string();
          break;
        case 10:
          message.oracleType = (reader.int32() as any);
          break;
        case 11:
          message.expiry = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InsuranceFund {
    return {
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      insurancePoolTokenDenom: isSet(object.insurancePoolTokenDenom) ? String(object.insurancePoolTokenDenom) : "",
      redemptionNoticePeriodDuration: isSet(object.redemptionNoticePeriodDuration) ? Duration.fromJSON(object.redemptionNoticePeriodDuration) : undefined,
      balance: isSet(object.balance) ? String(object.balance) : "",
      totalShare: isSet(object.totalShare) ? String(object.totalShare) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      marketTicker: isSet(object.marketTicker) ? String(object.marketTicker) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0)
    };
  },
  toJSON(message: InsuranceFund): JsonSafe<InsuranceFund> {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.insurancePoolTokenDenom !== undefined && (obj.insurancePoolTokenDenom = message.insurancePoolTokenDenom);
    message.redemptionNoticePeriodDuration !== undefined && (obj.redemptionNoticePeriodDuration = message.redemptionNoticePeriodDuration ? Duration.toJSON(message.redemptionNoticePeriodDuration) : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    message.totalShare !== undefined && (obj.totalShare = message.totalShare);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.marketTicker !== undefined && (obj.marketTicker = message.marketTicker);
    message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
    message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
    message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
    message.expiry !== undefined && (obj.expiry = (message.expiry || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<InsuranceFund>): InsuranceFund {
    const message = createBaseInsuranceFund();
    message.depositDenom = object.depositDenom ?? "";
    message.insurancePoolTokenDenom = object.insurancePoolTokenDenom ?? "";
    message.redemptionNoticePeriodDuration = object.redemptionNoticePeriodDuration !== undefined && object.redemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.redemptionNoticePeriodDuration) : undefined;
    message.balance = object.balance ?? "";
    message.totalShare = object.totalShare ?? "";
    message.marketId = object.marketId ?? "";
    message.marketTicker = object.marketTicker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: InsuranceFundSDKType): InsuranceFund {
    return {
      depositDenom: object?.deposit_denom,
      insurancePoolTokenDenom: object?.insurance_pool_token_denom,
      redemptionNoticePeriodDuration: object.redemption_notice_period_duration ? Duration.fromSDK(object.redemption_notice_period_duration) : undefined,
      balance: object?.balance,
      totalShare: object?.total_share,
      marketId: object?.market_id,
      marketTicker: object?.market_ticker,
      oracleBase: object?.oracle_base,
      oracleQuote: object?.oracle_quote,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      expiry: object?.expiry
    };
  },
  toSDK(message: InsuranceFund): InsuranceFundSDKType {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.insurance_pool_token_denom = message.insurancePoolTokenDenom;
    message.redemptionNoticePeriodDuration !== undefined && (obj.redemption_notice_period_duration = message.redemptionNoticePeriodDuration ? Duration.toSDK(message.redemptionNoticePeriodDuration) : undefined);
    obj.balance = message.balance;
    obj.total_share = message.totalShare;
    obj.market_id = message.marketId;
    obj.market_ticker = message.marketTicker;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    message.oracleType !== undefined && (obj.oracle_type = oracleTypeToJSON(message.oracleType));
    obj.expiry = message.expiry;
    return obj;
  },
  fromAmino(object: InsuranceFundAmino): InsuranceFund {
    const message = createBaseInsuranceFund();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.insurance_pool_token_denom !== undefined && object.insurance_pool_token_denom !== null) {
      message.insurancePoolTokenDenom = object.insurance_pool_token_denom;
    }
    if (object.redemption_notice_period_duration !== undefined && object.redemption_notice_period_duration !== null) {
      message.redemptionNoticePeriodDuration = Duration.fromAmino(object.redemption_notice_period_duration);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.total_share !== undefined && object.total_share !== null) {
      message.totalShare = object.total_share;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.market_ticker !== undefined && object.market_ticker !== null) {
      message.marketTicker = object.market_ticker;
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
    return message;
  },
  toAmino(message: InsuranceFund): InsuranceFundAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.insurance_pool_token_denom = message.insurancePoolTokenDenom === "" ? undefined : message.insurancePoolTokenDenom;
    obj.redemption_notice_period_duration = message.redemptionNoticePeriodDuration ? Duration.toAmino(message.redemptionNoticePeriodDuration) : undefined;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.total_share = message.totalShare === "" ? undefined : message.totalShare;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.market_ticker = message.marketTicker === "" ? undefined : message.marketTicker;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InsuranceFundAminoMsg): InsuranceFund {
    return InsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: InsuranceFundProtoMsg): InsuranceFund {
    return InsuranceFund.decode(message.value);
  },
  toProto(message: InsuranceFund): Uint8Array {
    return InsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: InsuranceFund): InsuranceFundProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.InsuranceFund",
      value: InsuranceFund.encode(message).finish()
    };
  }
};
function createBaseRedemptionSchedule(): RedemptionSchedule {
  return {
    id: BigInt(0),
    marketId: "",
    redeemer: "",
    claimableRedemptionTime: new Date(),
    redemptionAmount: Coin.fromPartial({})
  };
}
export const RedemptionSchedule = {
  typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule",
  encode(message: RedemptionSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.redeemer !== "") {
      writer.uint32(26).string(message.redeemer);
    }
    if (message.claimableRedemptionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.claimableRedemptionTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.redemptionAmount !== undefined) {
      Coin.encode(message.redemptionAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedemptionSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.redeemer = reader.string();
          break;
        case 4:
          message.claimableRedemptionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.redemptionAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedemptionSchedule {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      redeemer: isSet(object.redeemer) ? String(object.redeemer) : "",
      claimableRedemptionTime: isSet(object.claimableRedemptionTime) ? new Date(object.claimableRedemptionTime) : undefined,
      redemptionAmount: isSet(object.redemptionAmount) ? Coin.fromJSON(object.redemptionAmount) : undefined
    };
  },
  toJSON(message: RedemptionSchedule): JsonSafe<RedemptionSchedule> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.redeemer !== undefined && (obj.redeemer = message.redeemer);
    message.claimableRedemptionTime !== undefined && (obj.claimableRedemptionTime = message.claimableRedemptionTime.toISOString());
    message.redemptionAmount !== undefined && (obj.redemptionAmount = message.redemptionAmount ? Coin.toJSON(message.redemptionAmount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<RedemptionSchedule>): RedemptionSchedule {
    const message = createBaseRedemptionSchedule();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.marketId = object.marketId ?? "";
    message.redeemer = object.redeemer ?? "";
    message.claimableRedemptionTime = object.claimableRedemptionTime ?? undefined;
    message.redemptionAmount = object.redemptionAmount !== undefined && object.redemptionAmount !== null ? Coin.fromPartial(object.redemptionAmount) : undefined;
    return message;
  },
  fromSDK(object: RedemptionScheduleSDKType): RedemptionSchedule {
    return {
      id: object?.id,
      marketId: object?.marketId,
      redeemer: object?.redeemer,
      claimableRedemptionTime: object.claimable_redemption_time ?? undefined,
      redemptionAmount: object.redemption_amount ? Coin.fromSDK(object.redemption_amount) : undefined
    };
  },
  toSDK(message: RedemptionSchedule): RedemptionScheduleSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.marketId = message.marketId;
    obj.redeemer = message.redeemer;
    message.claimableRedemptionTime !== undefined && (obj.claimable_redemption_time = message.claimableRedemptionTime ?? undefined);
    message.redemptionAmount !== undefined && (obj.redemption_amount = message.redemptionAmount ? Coin.toSDK(message.redemptionAmount) : undefined);
    return obj;
  },
  fromAmino(object: RedemptionScheduleAmino): RedemptionSchedule {
    const message = createBaseRedemptionSchedule();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.redeemer !== undefined && object.redeemer !== null) {
      message.redeemer = object.redeemer;
    }
    if (object.claimable_redemption_time !== undefined && object.claimable_redemption_time !== null) {
      message.claimableRedemptionTime = fromTimestamp(Timestamp.fromAmino(object.claimable_redemption_time));
    }
    if (object.redemption_amount !== undefined && object.redemption_amount !== null) {
      message.redemptionAmount = Coin.fromAmino(object.redemption_amount);
    }
    return message;
  },
  toAmino(message: RedemptionSchedule): RedemptionScheduleAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.redeemer = message.redeemer === "" ? undefined : message.redeemer;
    obj.claimable_redemption_time = message.claimableRedemptionTime ? Timestamp.toAmino(toTimestamp(message.claimableRedemptionTime)) : undefined;
    obj.redemption_amount = message.redemptionAmount ? Coin.toAmino(message.redemptionAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: RedemptionScheduleAminoMsg): RedemptionSchedule {
    return RedemptionSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: RedemptionScheduleProtoMsg): RedemptionSchedule {
    return RedemptionSchedule.decode(message.value);
  },
  toProto(message: RedemptionSchedule): Uint8Array {
    return RedemptionSchedule.encode(message).finish();
  },
  toProtoMsg(message: RedemptionSchedule): RedemptionScheduleProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule",
      value: RedemptionSchedule.encode(message).finish()
    };
  }
};
function createBaseEventInsuranceFundUpdate(): EventInsuranceFundUpdate {
  return {
    fund: undefined
  };
}
export const EventInsuranceFundUpdate = {
  typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate",
  encode(message: EventInsuranceFundUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInsuranceFundUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInsuranceFundUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fund = InsuranceFund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventInsuranceFundUpdate {
    return {
      fund: isSet(object.fund) ? InsuranceFund.fromJSON(object.fund) : undefined
    };
  },
  toJSON(message: EventInsuranceFundUpdate): JsonSafe<EventInsuranceFundUpdate> {
    const obj: any = {};
    message.fund !== undefined && (obj.fund = message.fund ? InsuranceFund.toJSON(message.fund) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate {
    const message = createBaseEventInsuranceFundUpdate();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  },
  fromSDK(object: EventInsuranceFundUpdateSDKType): EventInsuranceFundUpdate {
    return {
      fund: object.fund ? InsuranceFund.fromSDK(object.fund) : undefined
    };
  },
  toSDK(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateSDKType {
    const obj: any = {};
    message.fund !== undefined && (obj.fund = message.fund ? InsuranceFund.toSDK(message.fund) : undefined);
    return obj;
  },
  fromAmino(object: EventInsuranceFundUpdateAmino): EventInsuranceFundUpdate {
    const message = createBaseEventInsuranceFundUpdate();
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = InsuranceFund.fromAmino(object.fund);
    }
    return message;
  },
  toAmino(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateAmino {
    const obj: any = {};
    obj.fund = message.fund ? InsuranceFund.toAmino(message.fund) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventInsuranceFundUpdateAminoMsg): EventInsuranceFundUpdate {
    return EventInsuranceFundUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInsuranceFundUpdateProtoMsg): EventInsuranceFundUpdate {
    return EventInsuranceFundUpdate.decode(message.value);
  },
  toProto(message: EventInsuranceFundUpdate): Uint8Array {
    return EventInsuranceFundUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate",
      value: EventInsuranceFundUpdate.encode(message).finish()
    };
  }
};
function createBaseEventRequestRedemption(): EventRequestRedemption {
  return {
    schedule: undefined
  };
}
export const EventRequestRedemption = {
  typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption",
  encode(message: EventRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRequestRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRequestRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRequestRedemption {
    return {
      schedule: isSet(object.schedule) ? RedemptionSchedule.fromJSON(object.schedule) : undefined
    };
  },
  toJSON(message: EventRequestRedemption): JsonSafe<EventRequestRedemption> {
    const obj: any = {};
    message.schedule !== undefined && (obj.schedule = message.schedule ? RedemptionSchedule.toJSON(message.schedule) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EventRequestRedemption>): EventRequestRedemption {
    const message = createBaseEventRequestRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    return message;
  },
  fromSDK(object: EventRequestRedemptionSDKType): EventRequestRedemption {
    return {
      schedule: object.schedule ? RedemptionSchedule.fromSDK(object.schedule) : undefined
    };
  },
  toSDK(message: EventRequestRedemption): EventRequestRedemptionSDKType {
    const obj: any = {};
    message.schedule !== undefined && (obj.schedule = message.schedule ? RedemptionSchedule.toSDK(message.schedule) : undefined);
    return obj;
  },
  fromAmino(object: EventRequestRedemptionAmino): EventRequestRedemption {
    const message = createBaseEventRequestRedemption();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = RedemptionSchedule.fromAmino(object.schedule);
    }
    return message;
  },
  toAmino(message: EventRequestRedemption): EventRequestRedemptionAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? RedemptionSchedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRequestRedemptionAminoMsg): EventRequestRedemption {
    return EventRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRequestRedemptionProtoMsg): EventRequestRedemption {
    return EventRequestRedemption.decode(message.value);
  },
  toProto(message: EventRequestRedemption): Uint8Array {
    return EventRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: EventRequestRedemption): EventRequestRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption",
      value: EventRequestRedemption.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawRedemption(): EventWithdrawRedemption {
  return {
    schedule: undefined,
    redeemCoin: Coin.fromPartial({})
  };
}
export const EventWithdrawRedemption = {
  typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption",
  encode(message: EventWithdrawRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    if (message.redeemCoin !== undefined) {
      Coin.encode(message.redeemCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
          break;
        case 2:
          message.redeemCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWithdrawRedemption {
    return {
      schedule: isSet(object.schedule) ? RedemptionSchedule.fromJSON(object.schedule) : undefined,
      redeemCoin: isSet(object.redeemCoin) ? Coin.fromJSON(object.redeemCoin) : undefined
    };
  },
  toJSON(message: EventWithdrawRedemption): JsonSafe<EventWithdrawRedemption> {
    const obj: any = {};
    message.schedule !== undefined && (obj.schedule = message.schedule ? RedemptionSchedule.toJSON(message.schedule) : undefined);
    message.redeemCoin !== undefined && (obj.redeemCoin = message.redeemCoin ? Coin.toJSON(message.redeemCoin) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EventWithdrawRedemption>): EventWithdrawRedemption {
    const message = createBaseEventWithdrawRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    message.redeemCoin = object.redeemCoin !== undefined && object.redeemCoin !== null ? Coin.fromPartial(object.redeemCoin) : undefined;
    return message;
  },
  fromSDK(object: EventWithdrawRedemptionSDKType): EventWithdrawRedemption {
    return {
      schedule: object.schedule ? RedemptionSchedule.fromSDK(object.schedule) : undefined,
      redeemCoin: object.redeem_coin ? Coin.fromSDK(object.redeem_coin) : undefined
    };
  },
  toSDK(message: EventWithdrawRedemption): EventWithdrawRedemptionSDKType {
    const obj: any = {};
    message.schedule !== undefined && (obj.schedule = message.schedule ? RedemptionSchedule.toSDK(message.schedule) : undefined);
    message.redeemCoin !== undefined && (obj.redeem_coin = message.redeemCoin ? Coin.toSDK(message.redeemCoin) : undefined);
    return obj;
  },
  fromAmino(object: EventWithdrawRedemptionAmino): EventWithdrawRedemption {
    const message = createBaseEventWithdrawRedemption();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = RedemptionSchedule.fromAmino(object.schedule);
    }
    if (object.redeem_coin !== undefined && object.redeem_coin !== null) {
      message.redeemCoin = Coin.fromAmino(object.redeem_coin);
    }
    return message;
  },
  toAmino(message: EventWithdrawRedemption): EventWithdrawRedemptionAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? RedemptionSchedule.toAmino(message.schedule) : undefined;
    obj.redeem_coin = message.redeemCoin ? Coin.toAmino(message.redeemCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawRedemptionAminoMsg): EventWithdrawRedemption {
    return EventWithdrawRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawRedemptionProtoMsg): EventWithdrawRedemption {
    return EventWithdrawRedemption.decode(message.value);
  },
  toProto(message: EventWithdrawRedemption): Uint8Array {
    return EventWithdrawRedemption.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawRedemption): EventWithdrawRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption",
      value: EventWithdrawRedemption.encode(message).finish()
    };
  }
};
function createBaseEventUnderwrite(): EventUnderwrite {
  return {
    underwriter: "",
    marketId: "",
    deposit: Coin.fromPartial({}),
    shares: Coin.fromPartial({})
  };
}
export const EventUnderwrite = {
  typeUrl: "/injective.insurance.v1beta1.EventUnderwrite",
  encode(message: EventUnderwrite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.underwriter !== "") {
      writer.uint32(10).string(message.underwriter);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.shares !== undefined) {
      Coin.encode(message.shares, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnderwrite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnderwrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underwriter = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.shares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUnderwrite {
    return {
      underwriter: isSet(object.underwriter) ? String(object.underwriter) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      shares: isSet(object.shares) ? Coin.fromJSON(object.shares) : undefined
    };
  },
  toJSON(message: EventUnderwrite): JsonSafe<EventUnderwrite> {
    const obj: any = {};
    message.underwriter !== undefined && (obj.underwriter = message.underwriter);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.shares !== undefined && (obj.shares = message.shares ? Coin.toJSON(message.shares) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EventUnderwrite>): EventUnderwrite {
    const message = createBaseEventUnderwrite();
    message.underwriter = object.underwriter ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.shares = object.shares !== undefined && object.shares !== null ? Coin.fromPartial(object.shares) : undefined;
    return message;
  },
  fromSDK(object: EventUnderwriteSDKType): EventUnderwrite {
    return {
      underwriter: object?.underwriter,
      marketId: object?.marketId,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined,
      shares: object.shares ? Coin.fromSDK(object.shares) : undefined
    };
  },
  toSDK(message: EventUnderwrite): EventUnderwriteSDKType {
    const obj: any = {};
    obj.underwriter = message.underwriter;
    obj.marketId = message.marketId;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    message.shares !== undefined && (obj.shares = message.shares ? Coin.toSDK(message.shares) : undefined);
    return obj;
  },
  fromAmino(object: EventUnderwriteAmino): EventUnderwrite {
    const message = createBaseEventUnderwrite();
    if (object.underwriter !== undefined && object.underwriter !== null) {
      message.underwriter = object.underwriter;
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = Coin.fromAmino(object.shares);
    }
    return message;
  },
  toAmino(message: EventUnderwrite): EventUnderwriteAmino {
    const obj: any = {};
    obj.underwriter = message.underwriter === "" ? undefined : message.underwriter;
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.shares = message.shares ? Coin.toAmino(message.shares) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUnderwriteAminoMsg): EventUnderwrite {
    return EventUnderwrite.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnderwriteProtoMsg): EventUnderwrite {
    return EventUnderwrite.decode(message.value);
  },
  toProto(message: EventUnderwrite): Uint8Array {
    return EventUnderwrite.encode(message).finish();
  },
  toProtoMsg(message: EventUnderwrite): EventUnderwriteProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventUnderwrite",
      value: EventUnderwrite.encode(message).finish()
    };
  }
};