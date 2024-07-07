import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * amount is the number of credits being put into or taken out of the basket.
   * Decimal values are acceptable within the precision of the corresponding
   *  credit type for this batch.
   */
  amount: string;
}
export interface BasketCreditProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.BasketCredit";
  value: Uint8Array;
}
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCreditAmino {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom?: string;
  /**
   * amount is the number of credits being put into or taken out of the basket.
   * Decimal values are acceptable within the precision of the corresponding
   *  credit type for this batch.
   */
  amount?: string;
}
export interface BasketCreditAminoMsg {
  type: "/regen.ecocredit.basket.v1.BasketCredit";
  value: BasketCreditAmino;
}
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCreditSDKType {
  batch_denom: string;
  amount: string;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 * NOTE: gogo proto `oneof` is not compatible with Amino signing, hence we
 * directly define both `start_date_window` and `min_start_date`. In the future,
 * with pulsar, this should change and we should use `oneof`.
 */
export interface DateCriteria {
  /**
   * min_start_date (optional) is the earliest start date for batches of credits
   * allowed into the basket. At most only one of `start_date_window`,
   * `min_start_date`, and `years_in_the_past` can be set for a basket.
   */
  minStartDate?: Date | undefined;
  /**
   * start_date_window (optional) is a duration of time measured into the past
   * which sets a cutoff for batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date is
   * before `block_timestamp - start_date_window` will not be allowed into the
   * basket. At most only one of `start_date_window`, `min_start_date`, and
   * `years_in_the_past` can be set for a basket.
   */
  startDateWindow?: Duration | undefined;
  /**
   * years_in_the_past (optional) is the number of years into the past which
   * sets a cutoff for the batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date year
   * is less than `block_timestamp_year - years_in_the_past` will not be allowed
   * into the basket. At most only one of `start_date_window`, `min_start_date`,
   * and `years_in_the_past` can be set for a basket.
   * 
   * Since Revision 1
   */
  yearsInThePast: number;
}
export interface DateCriteriaProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.DateCriteria";
  value: Uint8Array;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 * NOTE: gogo proto `oneof` is not compatible with Amino signing, hence we
 * directly define both `start_date_window` and `min_start_date`. In the future,
 * with pulsar, this should change and we should use `oneof`.
 */
export interface DateCriteriaAmino {
  /**
   * min_start_date (optional) is the earliest start date for batches of credits
   * allowed into the basket. At most only one of `start_date_window`,
   * `min_start_date`, and `years_in_the_past` can be set for a basket.
   */
  min_start_date?: string | undefined;
  /**
   * start_date_window (optional) is a duration of time measured into the past
   * which sets a cutoff for batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date is
   * before `block_timestamp - start_date_window` will not be allowed into the
   * basket. At most only one of `start_date_window`, `min_start_date`, and
   * `years_in_the_past` can be set for a basket.
   */
  start_date_window?: DurationAmino | undefined;
  /**
   * years_in_the_past (optional) is the number of years into the past which
   * sets a cutoff for the batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date year
   * is less than `block_timestamp_year - years_in_the_past` will not be allowed
   * into the basket. At most only one of `start_date_window`, `min_start_date`,
   * and `years_in_the_past` can be set for a basket.
   * 
   * Since Revision 1
   */
  years_in_the_past?: number;
}
export interface DateCriteriaAminoMsg {
  type: "/regen.ecocredit.basket.v1.DateCriteria";
  value: DateCriteriaAmino;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 * NOTE: gogo proto `oneof` is not compatible with Amino signing, hence we
 * directly define both `start_date_window` and `min_start_date`. In the future,
 * with pulsar, this should change and we should use `oneof`.
 */
export interface DateCriteriaSDKType {
  min_start_date?: Date | undefined;
  start_date_window?: DurationSDKType | undefined;
  years_in_the_past: number;
}
function createBaseBasketCredit(): BasketCredit {
  return {
    batchDenom: "",
    amount: ""
  };
}
export const BasketCredit = {
  typeUrl: "/regen.ecocredit.basket.v1.BasketCredit",
  encode(message: BasketCredit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BasketCredit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketCredit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BasketCredit {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: BasketCredit): JsonSafe<BasketCredit> {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<BasketCredit>): BasketCredit {
    const message = createBaseBasketCredit();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: BasketCreditSDKType): BasketCredit {
    return {
      batchDenom: object?.batch_denom,
      amount: object?.amount
    };
  },
  toSDK(message: BasketCredit): BasketCreditSDKType {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: BasketCreditAmino): BasketCredit {
    const message = createBaseBasketCredit();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: BasketCredit): BasketCreditAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: BasketCreditAminoMsg): BasketCredit {
    return BasketCredit.fromAmino(object.value);
  },
  fromProtoMsg(message: BasketCreditProtoMsg): BasketCredit {
    return BasketCredit.decode(message.value);
  },
  toProto(message: BasketCredit): Uint8Array {
    return BasketCredit.encode(message).finish();
  },
  toProtoMsg(message: BasketCredit): BasketCreditProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.BasketCredit",
      value: BasketCredit.encode(message).finish()
    };
  }
};
function createBaseDateCriteria(): DateCriteria {
  return {
    minStartDate: undefined,
    startDateWindow: undefined,
    yearsInThePast: 0
  };
}
export const DateCriteria = {
  typeUrl: "/regen.ecocredit.basket.v1.DateCriteria",
  encode(message: DateCriteria, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.minStartDate), writer.uint32(10).fork()).ldelim();
    }
    if (message.startDateWindow !== undefined) {
      Duration.encode(message.startDateWindow, writer.uint32(18).fork()).ldelim();
    }
    if (message.yearsInThePast !== 0) {
      writer.uint32(24).uint32(message.yearsInThePast);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DateCriteria {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.startDateWindow = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.yearsInThePast = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DateCriteria {
    return {
      minStartDate: isSet(object.minStartDate) ? new Date(object.minStartDate) : undefined,
      startDateWindow: isSet(object.startDateWindow) ? Duration.fromJSON(object.startDateWindow) : undefined,
      yearsInThePast: isSet(object.yearsInThePast) ? Number(object.yearsInThePast) : 0
    };
  },
  toJSON(message: DateCriteria): JsonSafe<DateCriteria> {
    const obj: any = {};
    message.minStartDate !== undefined && (obj.minStartDate = message.minStartDate.toISOString());
    message.startDateWindow !== undefined && (obj.startDateWindow = message.startDateWindow ? Duration.toJSON(message.startDateWindow) : undefined);
    message.yearsInThePast !== undefined && (obj.yearsInThePast = Math.round(message.yearsInThePast));
    return obj;
  },
  fromPartial(object: DeepPartial<DateCriteria>): DateCriteria {
    const message = createBaseDateCriteria();
    message.minStartDate = object.minStartDate ?? undefined;
    message.startDateWindow = object.startDateWindow !== undefined && object.startDateWindow !== null ? Duration.fromPartial(object.startDateWindow) : undefined;
    message.yearsInThePast = object.yearsInThePast ?? 0;
    return message;
  },
  fromSDK(object: DateCriteriaSDKType): DateCriteria {
    return {
      minStartDate: object.min_start_date ?? undefined,
      startDateWindow: object.start_date_window ? Duration.fromSDK(object.start_date_window) : undefined,
      yearsInThePast: object?.years_in_the_past
    };
  },
  toSDK(message: DateCriteria): DateCriteriaSDKType {
    const obj: any = {};
    message.minStartDate !== undefined && (obj.min_start_date = message.minStartDate ?? undefined);
    message.startDateWindow !== undefined && (obj.start_date_window = message.startDateWindow ? Duration.toSDK(message.startDateWindow) : undefined);
    obj.years_in_the_past = message.yearsInThePast;
    return obj;
  },
  fromAmino(object: DateCriteriaAmino): DateCriteria {
    const message = createBaseDateCriteria();
    if (object.min_start_date !== undefined && object.min_start_date !== null) {
      message.minStartDate = fromTimestamp(Timestamp.fromAmino(object.min_start_date));
    }
    if (object.start_date_window !== undefined && object.start_date_window !== null) {
      message.startDateWindow = Duration.fromAmino(object.start_date_window);
    }
    if (object.years_in_the_past !== undefined && object.years_in_the_past !== null) {
      message.yearsInThePast = object.years_in_the_past;
    }
    return message;
  },
  toAmino(message: DateCriteria): DateCriteriaAmino {
    const obj: any = {};
    obj.min_start_date = message.minStartDate ? Timestamp.toAmino(toTimestamp(message.minStartDate)) : undefined;
    obj.start_date_window = message.startDateWindow ? Duration.toAmino(message.startDateWindow) : undefined;
    obj.years_in_the_past = message.yearsInThePast === 0 ? undefined : message.yearsInThePast;
    return obj;
  },
  fromAminoMsg(object: DateCriteriaAminoMsg): DateCriteria {
    return DateCriteria.fromAmino(object.value);
  },
  fromProtoMsg(message: DateCriteriaProtoMsg): DateCriteria {
    return DateCriteria.decode(message.value);
  },
  toProto(message: DateCriteria): Uint8Array {
    return DateCriteria.encode(message).finish();
  },
  toProtoMsg(message: DateCriteria): DateCriteriaProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.DateCriteria",
      value: DateCriteria.encode(message).finish()
    };
  }
};