import { BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreate {
  /** basket_denom is the basket bank denom. */
  basketDenom: string;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  curator: string;
}
export interface EventCreateProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventCreate";
  value: Uint8Array;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateAmino {
  /** basket_denom is the basket bank denom. */
  basket_denom?: string;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  curator?: string;
}
export interface EventCreateAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventCreate";
  value: EventCreateAmino;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateSDKType {
  basket_denom: string;
  /** @deprecated */
  curator: string;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPut {
  /** owner is the owner of the credits put into the basket. */
  owner: string;
  /** basket_denom is the basket bank denom that the credits were added to. */
  basketDenom: string;
  /**
   * credits are the credits that were added to the basket.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  credits: BasketCredit[];
  /**
   * amount is the integer number of basket tokens converted from credits.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  amount: string;
}
export interface EventPutProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventPut";
  value: Uint8Array;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutAmino {
  /** owner is the owner of the credits put into the basket. */
  owner?: string;
  /** basket_denom is the basket bank denom that the credits were added to. */
  basket_denom?: string;
  /**
   * credits are the credits that were added to the basket.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  credits?: BasketCreditAmino[];
  /**
   * amount is the integer number of basket tokens converted from credits.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  amount?: string;
}
export interface EventPutAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventPut";
  value: EventPutAmino;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutSDKType {
  owner: string;
  basket_denom: string;
  /** @deprecated */
  credits: BasketCreditSDKType[];
  /** @deprecated */
  amount: string;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTake {
  /** owner is the owner of the credits taken from the basket. */
  owner: string;
  /** basket_denom is the basket bank denom that credits were taken from. */
  basketDenom: string;
  /**
   * credits are the credits that were taken from the basket.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  credits: BasketCredit[];
  /**
   * amount is the integer number of basket tokens converted to credits.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  amount: string;
}
export interface EventTakeProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventTake";
  value: Uint8Array;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeAmino {
  /** owner is the owner of the credits taken from the basket. */
  owner?: string;
  /** basket_denom is the basket bank denom that credits were taken from. */
  basket_denom?: string;
  /**
   * credits are the credits that were taken from the basket.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  credits?: BasketCreditAmino[];
  /**
   * amount is the integer number of basket tokens converted to credits.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */
  /** @deprecated */
  amount?: string;
}
export interface EventTakeAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventTake";
  value: EventTakeAmino;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeSDKType {
  owner: string;
  basket_denom: string;
  /** @deprecated */
  credits: BasketCreditSDKType[];
  /** @deprecated */
  amount: string;
}
function createBaseEventCreate(): EventCreate {
  return {
    basketDenom: "",
    curator: ""
  };
}
export const EventCreate = {
  typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
  encode(message: EventCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }
    if (message.curator !== "") {
      writer.uint32(18).string(message.curator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;
        case 2:
          message.curator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreate {
    return {
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      curator: isSet(object.curator) ? String(object.curator) : ""
    };
  },
  toJSON(message: EventCreate): JsonSafe<EventCreate> {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.curator !== undefined && (obj.curator = message.curator);
    return obj;
  },
  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.basketDenom = object.basketDenom ?? "";
    message.curator = object.curator ?? "";
    return message;
  },
  fromSDK(object: EventCreateSDKType): EventCreate {
    return {
      basketDenom: object?.basket_denom,
      curator: object?.curator
    };
  },
  toSDK(message: EventCreate): EventCreateSDKType {
    const obj: any = {};
    obj.basket_denom = message.basketDenom;
    obj.curator = message.curator;
    return obj;
  },
  fromAmino(object: EventCreateAmino): EventCreate {
    const message = createBaseEventCreate();
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = object.curator;
    }
    return message;
  },
  toAmino(message: EventCreate): EventCreateAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    obj.curator = message.curator === "" ? undefined : message.curator;
    return obj;
  },
  fromAminoMsg(object: EventCreateAminoMsg): EventCreate {
    return EventCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateProtoMsg): EventCreate {
    return EventCreate.decode(message.value);
  },
  toProto(message: EventCreate): Uint8Array {
    return EventCreate.encode(message).finish();
  },
  toProtoMsg(message: EventCreate): EventCreateProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
      value: EventCreate.encode(message).finish()
    };
  }
};
function createBaseEventPut(): EventPut {
  return {
    owner: "",
    basketDenom: "",
    credits: [],
    amount: ""
  };
}
export const EventPut = {
  typeUrl: "/regen.ecocredit.basket.v1.EventPut",
  encode(message: EventPut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }
    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPut {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: EventPut): JsonSafe<EventPut> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<EventPut>): EventPut {
    const message = createBaseEventPut();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: EventPutSDKType): EventPut {
    return {
      owner: object?.owner,
      basketDenom: object?.basket_denom,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromSDK(e)) : [],
      amount: object?.amount
    };
  },
  toSDK(message: EventPut): EventPutSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.basket_denom = message.basketDenom;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toSDK(e) : undefined);
    } else {
      obj.credits = [];
    }
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: EventPutAmino): EventPut {
    const message = createBaseEventPut();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventPut): EventPutAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventPutAminoMsg): EventPut {
    return EventPut.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPutProtoMsg): EventPut {
    return EventPut.decode(message.value);
  },
  toProto(message: EventPut): Uint8Array {
    return EventPut.encode(message).finish();
  },
  toProtoMsg(message: EventPut): EventPutProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventPut",
      value: EventPut.encode(message).finish()
    };
  }
};
function createBaseEventTake(): EventTake {
  return {
    owner: "",
    basketDenom: "",
    credits: [],
    amount: ""
  };
}
export const EventTake = {
  typeUrl: "/regen.ecocredit.basket.v1.EventTake",
  encode(message: EventTake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }
    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTake {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: EventTake): JsonSafe<EventTake> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<EventTake>): EventTake {
    const message = createBaseEventTake();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: EventTakeSDKType): EventTake {
    return {
      owner: object?.owner,
      basketDenom: object?.basket_denom,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromSDK(e)) : [],
      amount: object?.amount
    };
  },
  toSDK(message: EventTake): EventTakeSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.basket_denom = message.basketDenom;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toSDK(e) : undefined);
    } else {
      obj.credits = [];
    }
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: EventTakeAmino): EventTake {
    const message = createBaseEventTake();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventTake): EventTakeAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventTakeAminoMsg): EventTake {
    return EventTake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTakeProtoMsg): EventTake {
    return EventTake.decode(message.value);
  },
  toProto(message: EventTake): Uint8Array {
    return EventTake.encode(message).finish();
  },
  toProtoMsg(message: EventTake): EventTakeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventTake",
      value: EventTake.encode(message).finish()
    };
  }
};