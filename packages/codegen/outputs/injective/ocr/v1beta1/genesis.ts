import { Params, ParamsAmino, ParamsSDKType, FeedConfig, FeedConfigAmino, FeedConfigSDKType, Transmission, TransmissionAmino, TransmissionSDKType, EpochAndRound, EpochAndRoundAmino, EpochAndRoundSDKType } from "./ocr";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to OCR. */
  params: Params | undefined;
  /** feed_configs stores all of the supported OCR feeds */
  feedConfigs: FeedConfig[];
  /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
  latestEpochAndRounds: FeedEpochAndRound[];
  /** feed_transmissions stores the last transmission for each feed */
  feedTransmissions: FeedTransmission[];
  /** latest_aggregator_round_ids stores the latest aggregator round ID for each feedId */
  latestAggregatorRoundIds: FeedLatestAggregatorRoundIDs[];
  /** reward_pools stores the reward pools */
  rewardPools: RewardPool[];
  /** feed_observation_counts stores the feed observation counts */
  feedObservationCounts: FeedCounts[];
  /** feed_transmission_counts stores the feed transmission counts */
  feedTransmissionCounts: FeedCounts[];
  /** pending_payeeships stores the pending payeeships */
  pendingPayeeships: PendingPayeeship[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to OCR. */
  params?: ParamsAmino | undefined;
  /** feed_configs stores all of the supported OCR feeds */
  feed_configs?: FeedConfigAmino[];
  /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
  latest_epoch_and_rounds?: FeedEpochAndRoundAmino[];
  /** feed_transmissions stores the last transmission for each feed */
  feed_transmissions?: FeedTransmissionAmino[];
  /** latest_aggregator_round_ids stores the latest aggregator round ID for each feedId */
  latest_aggregator_round_ids?: FeedLatestAggregatorRoundIDsAmino[];
  /** reward_pools stores the reward pools */
  reward_pools?: RewardPoolAmino[];
  /** feed_observation_counts stores the feed observation counts */
  feed_observation_counts?: FeedCountsAmino[];
  /** feed_transmission_counts stores the feed transmission counts */
  feed_transmission_counts?: FeedCountsAmino[];
  /** pending_payeeships stores the pending payeeships */
  pending_payeeships?: PendingPayeeshipAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.ocr.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType | undefined;
  feed_configs: FeedConfigSDKType[];
  latest_epoch_and_rounds: FeedEpochAndRoundSDKType[];
  feed_transmissions: FeedTransmissionSDKType[];
  latest_aggregator_round_ids: FeedLatestAggregatorRoundIDsSDKType[];
  reward_pools: RewardPoolSDKType[];
  feed_observation_counts: FeedCountsSDKType[];
  feed_transmission_counts: FeedCountsSDKType[];
  pending_payeeships: PendingPayeeshipSDKType[];
}
export interface FeedTransmission {
  feedId: string;
  transmission?: Transmission | undefined;
}
export interface FeedTransmissionProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedTransmission";
  value: Uint8Array;
}
export interface FeedTransmissionAmino {
  feed_id?: string;
  transmission?: TransmissionAmino | undefined;
}
export interface FeedTransmissionAminoMsg {
  type: "/injective.ocr.v1beta1.FeedTransmission";
  value: FeedTransmissionAmino;
}
export interface FeedTransmissionSDKType {
  feed_id: string;
  transmission?: TransmissionSDKType | undefined;
}
export interface FeedEpochAndRound {
  feedId: string;
  epochAndRound?: EpochAndRound | undefined;
}
export interface FeedEpochAndRoundProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound";
  value: Uint8Array;
}
export interface FeedEpochAndRoundAmino {
  feed_id?: string;
  epoch_and_round?: EpochAndRoundAmino | undefined;
}
export interface FeedEpochAndRoundAminoMsg {
  type: "/injective.ocr.v1beta1.FeedEpochAndRound";
  value: FeedEpochAndRoundAmino;
}
export interface FeedEpochAndRoundSDKType {
  feed_id: string;
  epoch_and_round?: EpochAndRoundSDKType | undefined;
}
export interface FeedLatestAggregatorRoundIDs {
  feedId: string;
  aggregatorRoundId: bigint;
}
export interface FeedLatestAggregatorRoundIDsProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
  value: Uint8Array;
}
export interface FeedLatestAggregatorRoundIDsAmino {
  feed_id?: string;
  aggregator_round_id?: string;
}
export interface FeedLatestAggregatorRoundIDsAminoMsg {
  type: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
  value: FeedLatestAggregatorRoundIDsAmino;
}
export interface FeedLatestAggregatorRoundIDsSDKType {
  feed_id: string;
  aggregator_round_id: bigint;
}
export interface RewardPool {
  feedId: string;
  amount: Coin | undefined;
}
export interface RewardPoolProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.RewardPool";
  value: Uint8Array;
}
export interface RewardPoolAmino {
  feed_id?: string;
  amount?: CoinAmino | undefined;
}
export interface RewardPoolAminoMsg {
  type: "/injective.ocr.v1beta1.RewardPool";
  value: RewardPoolAmino;
}
export interface RewardPoolSDKType {
  feed_id: string;
  amount: CoinSDKType | undefined;
}
export interface FeedCounts {
  feedId: string;
  counts: Count[];
}
export interface FeedCountsProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedCounts";
  value: Uint8Array;
}
export interface FeedCountsAmino {
  feed_id?: string;
  counts?: CountAmino[];
}
export interface FeedCountsAminoMsg {
  type: "/injective.ocr.v1beta1.FeedCounts";
  value: FeedCountsAmino;
}
export interface FeedCountsSDKType {
  feed_id: string;
  counts: CountSDKType[];
}
export interface Count {
  address: string;
  count: bigint;
}
export interface CountProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.Count";
  value: Uint8Array;
}
export interface CountAmino {
  address?: string;
  count?: string;
}
export interface CountAminoMsg {
  type: "/injective.ocr.v1beta1.Count";
  value: CountAmino;
}
export interface CountSDKType {
  address: string;
  count: bigint;
}
export interface PendingPayeeship {
  feedId: string;
  transmitter: string;
  proposedPayee: string;
}
export interface PendingPayeeshipProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.PendingPayeeship";
  value: Uint8Array;
}
export interface PendingPayeeshipAmino {
  feed_id?: string;
  transmitter?: string;
  proposed_payee?: string;
}
export interface PendingPayeeshipAminoMsg {
  type: "/injective.ocr.v1beta1.PendingPayeeship";
  value: PendingPayeeshipAmino;
}
export interface PendingPayeeshipSDKType {
  feed_id: string;
  transmitter: string;
  proposed_payee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feedConfigs: [],
    latestEpochAndRounds: [],
    feedTransmissions: [],
    latestAggregatorRoundIds: [],
    rewardPools: [],
    feedObservationCounts: [],
    feedTransmissionCounts: [],
    pendingPayeeships: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.ocr.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feedConfigs) {
      FeedConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.latestEpochAndRounds) {
      FeedEpochAndRound.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.feedTransmissions) {
      FeedTransmission.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.latestAggregatorRoundIds) {
      FeedLatestAggregatorRoundIDs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.rewardPools) {
      RewardPool.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.feedObservationCounts) {
      FeedCounts.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.feedTransmissionCounts) {
      FeedCounts.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pendingPayeeships) {
      PendingPayeeship.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feedConfigs.push(FeedConfig.decode(reader, reader.uint32()));
          break;
        case 3:
          message.latestEpochAndRounds.push(FeedEpochAndRound.decode(reader, reader.uint32()));
          break;
        case 4:
          message.feedTransmissions.push(FeedTransmission.decode(reader, reader.uint32()));
          break;
        case 5:
          message.latestAggregatorRoundIds.push(FeedLatestAggregatorRoundIDs.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardPools.push(RewardPool.decode(reader, reader.uint32()));
          break;
        case 7:
          message.feedObservationCounts.push(FeedCounts.decode(reader, reader.uint32()));
          break;
        case 8:
          message.feedTransmissionCounts.push(FeedCounts.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pendingPayeeships.push(PendingPayeeship.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feedConfigs: Array.isArray(object?.feedConfigs) ? object.feedConfigs.map((e: any) => FeedConfig.fromJSON(e)) : [],
      latestEpochAndRounds: Array.isArray(object?.latestEpochAndRounds) ? object.latestEpochAndRounds.map((e: any) => FeedEpochAndRound.fromJSON(e)) : [],
      feedTransmissions: Array.isArray(object?.feedTransmissions) ? object.feedTransmissions.map((e: any) => FeedTransmission.fromJSON(e)) : [],
      latestAggregatorRoundIds: Array.isArray(object?.latestAggregatorRoundIds) ? object.latestAggregatorRoundIds.map((e: any) => FeedLatestAggregatorRoundIDs.fromJSON(e)) : [],
      rewardPools: Array.isArray(object?.rewardPools) ? object.rewardPools.map((e: any) => RewardPool.fromJSON(e)) : [],
      feedObservationCounts: Array.isArray(object?.feedObservationCounts) ? object.feedObservationCounts.map((e: any) => FeedCounts.fromJSON(e)) : [],
      feedTransmissionCounts: Array.isArray(object?.feedTransmissionCounts) ? object.feedTransmissionCounts.map((e: any) => FeedCounts.fromJSON(e)) : [],
      pendingPayeeships: Array.isArray(object?.pendingPayeeships) ? object.pendingPayeeships.map((e: any) => PendingPayeeship.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feedConfigs) {
      obj.feedConfigs = message.feedConfigs.map(e => e ? FeedConfig.toJSON(e) : undefined);
    } else {
      obj.feedConfigs = [];
    }
    if (message.latestEpochAndRounds) {
      obj.latestEpochAndRounds = message.latestEpochAndRounds.map(e => e ? FeedEpochAndRound.toJSON(e) : undefined);
    } else {
      obj.latestEpochAndRounds = [];
    }
    if (message.feedTransmissions) {
      obj.feedTransmissions = message.feedTransmissions.map(e => e ? FeedTransmission.toJSON(e) : undefined);
    } else {
      obj.feedTransmissions = [];
    }
    if (message.latestAggregatorRoundIds) {
      obj.latestAggregatorRoundIds = message.latestAggregatorRoundIds.map(e => e ? FeedLatestAggregatorRoundIDs.toJSON(e) : undefined);
    } else {
      obj.latestAggregatorRoundIds = [];
    }
    if (message.rewardPools) {
      obj.rewardPools = message.rewardPools.map(e => e ? RewardPool.toJSON(e) : undefined);
    } else {
      obj.rewardPools = [];
    }
    if (message.feedObservationCounts) {
      obj.feedObservationCounts = message.feedObservationCounts.map(e => e ? FeedCounts.toJSON(e) : undefined);
    } else {
      obj.feedObservationCounts = [];
    }
    if (message.feedTransmissionCounts) {
      obj.feedTransmissionCounts = message.feedTransmissionCounts.map(e => e ? FeedCounts.toJSON(e) : undefined);
    } else {
      obj.feedTransmissionCounts = [];
    }
    if (message.pendingPayeeships) {
      obj.pendingPayeeships = message.pendingPayeeships.map(e => e ? PendingPayeeship.toJSON(e) : undefined);
    } else {
      obj.pendingPayeeships = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feedConfigs = object.feedConfigs?.map(e => FeedConfig.fromPartial(e)) || [];
    message.latestEpochAndRounds = object.latestEpochAndRounds?.map(e => FeedEpochAndRound.fromPartial(e)) || [];
    message.feedTransmissions = object.feedTransmissions?.map(e => FeedTransmission.fromPartial(e)) || [];
    message.latestAggregatorRoundIds = object.latestAggregatorRoundIds?.map(e => FeedLatestAggregatorRoundIDs.fromPartial(e)) || [];
    message.rewardPools = object.rewardPools?.map(e => RewardPool.fromPartial(e)) || [];
    message.feedObservationCounts = object.feedObservationCounts?.map(e => FeedCounts.fromPartial(e)) || [];
    message.feedTransmissionCounts = object.feedTransmissionCounts?.map(e => FeedCounts.fromPartial(e)) || [];
    message.pendingPayeeships = object.pendingPayeeships?.map(e => PendingPayeeship.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      feedConfigs: Array.isArray(object?.feed_configs) ? object.feed_configs.map((e: any) => FeedConfig.fromSDK(e)) : [],
      latestEpochAndRounds: Array.isArray(object?.latest_epoch_and_rounds) ? object.latest_epoch_and_rounds.map((e: any) => FeedEpochAndRound.fromSDK(e)) : [],
      feedTransmissions: Array.isArray(object?.feed_transmissions) ? object.feed_transmissions.map((e: any) => FeedTransmission.fromSDK(e)) : [],
      latestAggregatorRoundIds: Array.isArray(object?.latest_aggregator_round_ids) ? object.latest_aggregator_round_ids.map((e: any) => FeedLatestAggregatorRoundIDs.fromSDK(e)) : [],
      rewardPools: Array.isArray(object?.reward_pools) ? object.reward_pools.map((e: any) => RewardPool.fromSDK(e)) : [],
      feedObservationCounts: Array.isArray(object?.feed_observation_counts) ? object.feed_observation_counts.map((e: any) => FeedCounts.fromSDK(e)) : [],
      feedTransmissionCounts: Array.isArray(object?.feed_transmission_counts) ? object.feed_transmission_counts.map((e: any) => FeedCounts.fromSDK(e)) : [],
      pendingPayeeships: Array.isArray(object?.pending_payeeships) ? object.pending_payeeships.map((e: any) => PendingPayeeship.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.feedConfigs) {
      obj.feed_configs = message.feedConfigs.map(e => e ? FeedConfig.toSDK(e) : undefined);
    } else {
      obj.feed_configs = [];
    }
    if (message.latestEpochAndRounds) {
      obj.latest_epoch_and_rounds = message.latestEpochAndRounds.map(e => e ? FeedEpochAndRound.toSDK(e) : undefined);
    } else {
      obj.latest_epoch_and_rounds = [];
    }
    if (message.feedTransmissions) {
      obj.feed_transmissions = message.feedTransmissions.map(e => e ? FeedTransmission.toSDK(e) : undefined);
    } else {
      obj.feed_transmissions = [];
    }
    if (message.latestAggregatorRoundIds) {
      obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds.map(e => e ? FeedLatestAggregatorRoundIDs.toSDK(e) : undefined);
    } else {
      obj.latest_aggregator_round_ids = [];
    }
    if (message.rewardPools) {
      obj.reward_pools = message.rewardPools.map(e => e ? RewardPool.toSDK(e) : undefined);
    } else {
      obj.reward_pools = [];
    }
    if (message.feedObservationCounts) {
      obj.feed_observation_counts = message.feedObservationCounts.map(e => e ? FeedCounts.toSDK(e) : undefined);
    } else {
      obj.feed_observation_counts = [];
    }
    if (message.feedTransmissionCounts) {
      obj.feed_transmission_counts = message.feedTransmissionCounts.map(e => e ? FeedCounts.toSDK(e) : undefined);
    } else {
      obj.feed_transmission_counts = [];
    }
    if (message.pendingPayeeships) {
      obj.pending_payeeships = message.pendingPayeeships.map(e => e ? PendingPayeeship.toSDK(e) : undefined);
    } else {
      obj.pending_payeeships = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feedConfigs = object.feed_configs?.map(e => FeedConfig.fromAmino(e)) || [];
    message.latestEpochAndRounds = object.latest_epoch_and_rounds?.map(e => FeedEpochAndRound.fromAmino(e)) || [];
    message.feedTransmissions = object.feed_transmissions?.map(e => FeedTransmission.fromAmino(e)) || [];
    message.latestAggregatorRoundIds = object.latest_aggregator_round_ids?.map(e => FeedLatestAggregatorRoundIDs.fromAmino(e)) || [];
    message.rewardPools = object.reward_pools?.map(e => RewardPool.fromAmino(e)) || [];
    message.feedObservationCounts = object.feed_observation_counts?.map(e => FeedCounts.fromAmino(e)) || [];
    message.feedTransmissionCounts = object.feed_transmission_counts?.map(e => FeedCounts.fromAmino(e)) || [];
    message.pendingPayeeships = object.pending_payeeships?.map(e => PendingPayeeship.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feedConfigs) {
      obj.feed_configs = message.feedConfigs.map(e => e ? FeedConfig.toAmino(e) : undefined);
    } else {
      obj.feed_configs = message.feedConfigs;
    }
    if (message.latestEpochAndRounds) {
      obj.latest_epoch_and_rounds = message.latestEpochAndRounds.map(e => e ? FeedEpochAndRound.toAmino(e) : undefined);
    } else {
      obj.latest_epoch_and_rounds = message.latestEpochAndRounds;
    }
    if (message.feedTransmissions) {
      obj.feed_transmissions = message.feedTransmissions.map(e => e ? FeedTransmission.toAmino(e) : undefined);
    } else {
      obj.feed_transmissions = message.feedTransmissions;
    }
    if (message.latestAggregatorRoundIds) {
      obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds.map(e => e ? FeedLatestAggregatorRoundIDs.toAmino(e) : undefined);
    } else {
      obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds;
    }
    if (message.rewardPools) {
      obj.reward_pools = message.rewardPools.map(e => e ? RewardPool.toAmino(e) : undefined);
    } else {
      obj.reward_pools = message.rewardPools;
    }
    if (message.feedObservationCounts) {
      obj.feed_observation_counts = message.feedObservationCounts.map(e => e ? FeedCounts.toAmino(e) : undefined);
    } else {
      obj.feed_observation_counts = message.feedObservationCounts;
    }
    if (message.feedTransmissionCounts) {
      obj.feed_transmission_counts = message.feedTransmissionCounts.map(e => e ? FeedCounts.toAmino(e) : undefined);
    } else {
      obj.feed_transmission_counts = message.feedTransmissionCounts;
    }
    if (message.pendingPayeeships) {
      obj.pending_payeeships = message.pendingPayeeships.map(e => e ? PendingPayeeship.toAmino(e) : undefined);
    } else {
      obj.pending_payeeships = message.pendingPayeeships;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseFeedTransmission(): FeedTransmission {
  return {
    feedId: "",
    transmission: undefined
  };
}
export const FeedTransmission = {
  typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
  encode(message: FeedTransmission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.transmission !== undefined) {
      Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedTransmission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedTransmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.transmission = Transmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedTransmission {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      transmission: isSet(object.transmission) ? Transmission.fromJSON(object.transmission) : undefined
    };
  },
  toJSON(message: FeedTransmission): JsonSafe<FeedTransmission> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    message.transmission !== undefined && (obj.transmission = message.transmission ? Transmission.toJSON(message.transmission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<FeedTransmission>): FeedTransmission {
    const message = createBaseFeedTransmission();
    message.feedId = object.feedId ?? "";
    message.transmission = object.transmission !== undefined && object.transmission !== null ? Transmission.fromPartial(object.transmission) : undefined;
    return message;
  },
  fromSDK(object: FeedTransmissionSDKType): FeedTransmission {
    return {
      feedId: object?.feed_id,
      transmission: object.transmission ? Transmission.fromSDK(object.transmission) : undefined
    };
  },
  toSDK(message: FeedTransmission): FeedTransmissionSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    message.transmission !== undefined && (obj.transmission = message.transmission ? Transmission.toSDK(message.transmission) : undefined);
    return obj;
  },
  fromAmino(object: FeedTransmissionAmino): FeedTransmission {
    const message = createBaseFeedTransmission();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.transmission !== undefined && object.transmission !== null) {
      message.transmission = Transmission.fromAmino(object.transmission);
    }
    return message;
  },
  toAmino(message: FeedTransmission): FeedTransmissionAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.transmission = message.transmission ? Transmission.toAmino(message.transmission) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedTransmissionAminoMsg): FeedTransmission {
    return FeedTransmission.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedTransmissionProtoMsg): FeedTransmission {
    return FeedTransmission.decode(message.value);
  },
  toProto(message: FeedTransmission): Uint8Array {
    return FeedTransmission.encode(message).finish();
  },
  toProtoMsg(message: FeedTransmission): FeedTransmissionProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
      value: FeedTransmission.encode(message).finish()
    };
  }
};
function createBaseFeedEpochAndRound(): FeedEpochAndRound {
  return {
    feedId: "",
    epochAndRound: undefined
  };
}
export const FeedEpochAndRound = {
  typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
  encode(message: FeedEpochAndRound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedEpochAndRound {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedEpochAndRound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedEpochAndRound {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined
    };
  },
  toJSON(message: FeedEpochAndRound): JsonSafe<FeedEpochAndRound> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    message.epochAndRound !== undefined && (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<FeedEpochAndRound>): FeedEpochAndRound {
    const message = createBaseFeedEpochAndRound();
    message.feedId = object.feedId ?? "";
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  },
  fromSDK(object: FeedEpochAndRoundSDKType): FeedEpochAndRound {
    return {
      feedId: object?.feed_id,
      epochAndRound: object.epoch_and_round ? EpochAndRound.fromSDK(object.epoch_and_round) : undefined
    };
  },
  toSDK(message: FeedEpochAndRound): FeedEpochAndRoundSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    message.epochAndRound !== undefined && (obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toSDK(message.epochAndRound) : undefined);
    return obj;
  },
  fromAmino(object: FeedEpochAndRoundAmino): FeedEpochAndRound {
    const message = createBaseFeedEpochAndRound();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
      message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
    }
    return message;
  },
  toAmino(message: FeedEpochAndRound): FeedEpochAndRoundAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedEpochAndRoundAminoMsg): FeedEpochAndRound {
    return FeedEpochAndRound.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedEpochAndRoundProtoMsg): FeedEpochAndRound {
    return FeedEpochAndRound.decode(message.value);
  },
  toProto(message: FeedEpochAndRound): Uint8Array {
    return FeedEpochAndRound.encode(message).finish();
  },
  toProtoMsg(message: FeedEpochAndRound): FeedEpochAndRoundProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
      value: FeedEpochAndRound.encode(message).finish()
    };
  }
};
function createBaseFeedLatestAggregatorRoundIDs(): FeedLatestAggregatorRoundIDs {
  return {
    feedId: "",
    aggregatorRoundId: BigInt(0)
  };
}
export const FeedLatestAggregatorRoundIDs = {
  typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
  encode(message: FeedLatestAggregatorRoundIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.aggregatorRoundId !== BigInt(0)) {
      writer.uint32(16).uint64(message.aggregatorRoundId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedLatestAggregatorRoundIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedLatestAggregatorRoundIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.aggregatorRoundId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedLatestAggregatorRoundIDs {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      aggregatorRoundId: isSet(object.aggregatorRoundId) ? BigInt(object.aggregatorRoundId.toString()) : BigInt(0)
    };
  },
  toJSON(message: FeedLatestAggregatorRoundIDs): JsonSafe<FeedLatestAggregatorRoundIDs> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    message.aggregatorRoundId !== undefined && (obj.aggregatorRoundId = (message.aggregatorRoundId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<FeedLatestAggregatorRoundIDs>): FeedLatestAggregatorRoundIDs {
    const message = createBaseFeedLatestAggregatorRoundIDs();
    message.feedId = object.feedId ?? "";
    message.aggregatorRoundId = object.aggregatorRoundId !== undefined && object.aggregatorRoundId !== null ? BigInt(object.aggregatorRoundId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: FeedLatestAggregatorRoundIDsSDKType): FeedLatestAggregatorRoundIDs {
    return {
      feedId: object?.feed_id,
      aggregatorRoundId: object?.aggregator_round_id
    };
  },
  toSDK(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.aggregator_round_id = message.aggregatorRoundId;
    return obj;
  },
  fromAmino(object: FeedLatestAggregatorRoundIDsAmino): FeedLatestAggregatorRoundIDs {
    const message = createBaseFeedLatestAggregatorRoundIDs();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.aggregator_round_id !== undefined && object.aggregator_round_id !== null) {
      message.aggregatorRoundId = BigInt(object.aggregator_round_id);
    }
    return message;
  },
  toAmino(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.aggregator_round_id = message.aggregatorRoundId !== BigInt(0) ? message.aggregatorRoundId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedLatestAggregatorRoundIDsAminoMsg): FeedLatestAggregatorRoundIDs {
    return FeedLatestAggregatorRoundIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedLatestAggregatorRoundIDsProtoMsg): FeedLatestAggregatorRoundIDs {
    return FeedLatestAggregatorRoundIDs.decode(message.value);
  },
  toProto(message: FeedLatestAggregatorRoundIDs): Uint8Array {
    return FeedLatestAggregatorRoundIDs.encode(message).finish();
  },
  toProtoMsg(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
      value: FeedLatestAggregatorRoundIDs.encode(message).finish()
    };
  }
};
function createBaseRewardPool(): RewardPool {
  return {
    feedId: "",
    amount: Coin.fromPartial({})
  };
}
export const RewardPool = {
  typeUrl: "/injective.ocr.v1beta1.RewardPool",
  encode(message: RewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardPool {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: RewardPool): JsonSafe<RewardPool> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<RewardPool>): RewardPool {
    const message = createBaseRewardPool();
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromSDK(object: RewardPoolSDKType): RewardPool {
    return {
      feedId: object?.feed_id,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: RewardPool): RewardPoolSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: RewardPoolAmino): RewardPool {
    const message = createBaseRewardPool();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: RewardPool): RewardPoolAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardPoolAminoMsg): RewardPool {
    return RewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPoolProtoMsg): RewardPool {
    return RewardPool.decode(message.value);
  },
  toProto(message: RewardPool): Uint8Array {
    return RewardPool.encode(message).finish();
  },
  toProtoMsg(message: RewardPool): RewardPoolProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.RewardPool",
      value: RewardPool.encode(message).finish()
    };
  }
};
function createBaseFeedCounts(): FeedCounts {
  return {
    feedId: "",
    counts: []
  };
}
export const FeedCounts = {
  typeUrl: "/injective.ocr.v1beta1.FeedCounts",
  encode(message: FeedCounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    for (const v of message.counts) {
      Count.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedCounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.counts.push(Count.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedCounts {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      counts: Array.isArray(object?.counts) ? object.counts.map((e: any) => Count.fromJSON(e)) : []
    };
  },
  toJSON(message: FeedCounts): JsonSafe<FeedCounts> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    if (message.counts) {
      obj.counts = message.counts.map(e => e ? Count.toJSON(e) : undefined);
    } else {
      obj.counts = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FeedCounts>): FeedCounts {
    const message = createBaseFeedCounts();
    message.feedId = object.feedId ?? "";
    message.counts = object.counts?.map(e => Count.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FeedCountsSDKType): FeedCounts {
    return {
      feedId: object?.feed_id,
      counts: Array.isArray(object?.counts) ? object.counts.map((e: any) => Count.fromSDK(e)) : []
    };
  },
  toSDK(message: FeedCounts): FeedCountsSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    if (message.counts) {
      obj.counts = message.counts.map(e => e ? Count.toSDK(e) : undefined);
    } else {
      obj.counts = [];
    }
    return obj;
  },
  fromAmino(object: FeedCountsAmino): FeedCounts {
    const message = createBaseFeedCounts();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    message.counts = object.counts?.map(e => Count.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeedCounts): FeedCountsAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    if (message.counts) {
      obj.counts = message.counts.map(e => e ? Count.toAmino(e) : undefined);
    } else {
      obj.counts = message.counts;
    }
    return obj;
  },
  fromAminoMsg(object: FeedCountsAminoMsg): FeedCounts {
    return FeedCounts.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedCountsProtoMsg): FeedCounts {
    return FeedCounts.decode(message.value);
  },
  toProto(message: FeedCounts): Uint8Array {
    return FeedCounts.encode(message).finish();
  },
  toProtoMsg(message: FeedCounts): FeedCountsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedCounts",
      value: FeedCounts.encode(message).finish()
    };
  }
};
function createBaseCount(): Count {
  return {
    address: "",
    count: BigInt(0)
  };
}
export const Count = {
  typeUrl: "/injective.ocr.v1beta1.Count",
  encode(message: Count, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Count {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Count {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0)
    };
  },
  toJSON(message: Count): JsonSafe<Count> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Count>): Count {
    const message = createBaseCount();
    message.address = object.address ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: CountSDKType): Count {
    return {
      address: object?.address,
      count: object?.count
    };
  },
  toSDK(message: Count): CountSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.count = message.count;
    return obj;
  },
  fromAmino(object: CountAmino): Count {
    const message = createBaseCount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: Count): CountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.count = message.count !== BigInt(0) ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CountAminoMsg): Count {
    return Count.fromAmino(object.value);
  },
  fromProtoMsg(message: CountProtoMsg): Count {
    return Count.decode(message.value);
  },
  toProto(message: Count): Uint8Array {
    return Count.encode(message).finish();
  },
  toProtoMsg(message: Count): CountProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.Count",
      value: Count.encode(message).finish()
    };
  }
};
function createBasePendingPayeeship(): PendingPayeeship {
  return {
    feedId: "",
    transmitter: "",
    proposedPayee: ""
  };
}
export const PendingPayeeship = {
  typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
  encode(message: PendingPayeeship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.proposedPayee !== "") {
      writer.uint32(26).string(message.proposedPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingPayeeship {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingPayeeship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.transmitter = reader.string();
          break;
        case 3:
          message.proposedPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PendingPayeeship {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
      proposedPayee: isSet(object.proposedPayee) ? String(object.proposedPayee) : ""
    };
  },
  toJSON(message: PendingPayeeship): JsonSafe<PendingPayeeship> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    message.transmitter !== undefined && (obj.transmitter = message.transmitter);
    message.proposedPayee !== undefined && (obj.proposedPayee = message.proposedPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<PendingPayeeship>): PendingPayeeship {
    const message = createBasePendingPayeeship();
    message.feedId = object.feedId ?? "";
    message.transmitter = object.transmitter ?? "";
    message.proposedPayee = object.proposedPayee ?? "";
    return message;
  },
  fromSDK(object: PendingPayeeshipSDKType): PendingPayeeship {
    return {
      feedId: object?.feed_id,
      transmitter: object?.transmitter,
      proposedPayee: object?.proposed_payee
    };
  },
  toSDK(message: PendingPayeeship): PendingPayeeshipSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.transmitter = message.transmitter;
    obj.proposed_payee = message.proposedPayee;
    return obj;
  },
  fromAmino(object: PendingPayeeshipAmino): PendingPayeeship {
    const message = createBasePendingPayeeship();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    if (object.proposed_payee !== undefined && object.proposed_payee !== null) {
      message.proposedPayee = object.proposed_payee;
    }
    return message;
  },
  toAmino(message: PendingPayeeship): PendingPayeeshipAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    obj.proposed_payee = message.proposedPayee === "" ? undefined : message.proposedPayee;
    return obj;
  },
  fromAminoMsg(object: PendingPayeeshipAminoMsg): PendingPayeeship {
    return PendingPayeeship.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingPayeeshipProtoMsg): PendingPayeeship {
    return PendingPayeeship.decode(message.value);
  },
  toProto(message: PendingPayeeship): Uint8Array {
    return PendingPayeeship.encode(message).finish();
  },
  toProtoMsg(message: PendingPayeeship): PendingPayeeshipProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
      value: PendingPayeeship.encode(message).finish()
    };
  }
};