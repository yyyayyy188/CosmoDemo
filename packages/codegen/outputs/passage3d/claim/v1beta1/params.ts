import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Params defines the claim module's parameters. */
export interface Params {
  airdropEnabled: boolean;
  /** airdrop starting time */
  airdropStartTime: Date | undefined;
  durationUntilDecay: Duration | undefined;
  durationOfDecay: Duration | undefined;
  /** denom of claimable asset */
  claimDenom: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/passage3d.claim.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
  airdrop_enabled?: boolean;
  /** airdrop starting time */
  airdrop_start_time?: string | undefined;
  duration_until_decay?: DurationAmino | undefined;
  duration_of_decay?: DurationAmino | undefined;
  /** denom of claimable asset */
  claim_denom?: string;
}
export interface ParamsAminoMsg {
  type: "/passage3d.claim.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_enabled: boolean;
  airdrop_start_time: Date | undefined;
  duration_until_decay: DurationSDKType | undefined;
  duration_of_decay: DurationSDKType | undefined;
  claim_denom: string;
}
function createBaseParams(): Params {
  return {
    airdropEnabled: false,
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: ""
  };
}
export const Params = {
  typeUrl: "/passage3d.claim.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropEnabled === true) {
      writer.uint32(8).bool(message.airdropEnabled);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(42).string(message.claimDenom);
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
          message.airdropEnabled = reader.bool();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimDenom = reader.string();
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
      airdropEnabled: isSet(object.airdropEnabled) ? Boolean(object.airdropEnabled) : false,
      airdropStartTime: isSet(object.airdropStartTime) ? new Date(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.airdropEnabled !== undefined && (obj.airdropEnabled = message.airdropEnabled);
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdropEnabled = object.airdropEnabled ?? false;
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      airdropEnabled: object?.airdrop_enabled,
      airdropStartTime: object.airdrop_start_time ?? undefined,
      durationUntilDecay: object.duration_until_decay ? Duration.fromSDK(object.duration_until_decay) : undefined,
      durationOfDecay: object.duration_of_decay ? Duration.fromSDK(object.duration_of_decay) : undefined,
      claimDenom: object?.claim_denom
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.airdrop_enabled = message.airdropEnabled;
    message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ?? undefined);
    message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? Duration.toSDK(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? Duration.toSDK(message.durationOfDecay) : undefined);
    obj.claim_denom = message.claimDenom;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.airdrop_enabled !== undefined && object.airdrop_enabled !== null) {
      message.airdropEnabled = object.airdrop_enabled;
    }
    if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
      message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
      message.durationUntilDecay = Duration.fromAmino(object.duration_until_decay);
    }
    if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
      message.durationOfDecay = Duration.fromAmino(object.duration_of_decay);
    }
    if (object.claim_denom !== undefined && object.claim_denom !== null) {
      message.claimDenom = object.claim_denom;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.airdrop_enabled = message.airdropEnabled === false ? undefined : message.airdropEnabled;
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
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
      typeUrl: "/passage3d.claim.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};