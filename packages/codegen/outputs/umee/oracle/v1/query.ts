import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRates {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryExchangeRatesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryExchangeRates";
  value: Uint8Array;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesAmino {
  /** denom defines the denomination to query for. */
  denom?: string;
}
export interface QueryExchangeRatesAminoMsg {
  type: "/umee.oracle.v1.QueryExchangeRates";
  value: QueryExchangeRatesAmino;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesSDKType {
  denom: string;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchangeRates: DecCoin[];
}
export interface QueryExchangeRatesResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseAmino {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchange_rates?: DecCoinAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
  type: "/umee.oracle.v1.QueryExchangeRatesResponse";
  value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
  exchange_rates: DecCoinSDKType[];
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRates {}
export interface QueryActiveExchangeRatesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates";
  value: Uint8Array;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesAmino {}
export interface QueryActiveExchangeRatesAminoMsg {
  type: "/umee.oracle.v1.QueryActiveExchangeRates";
  value: QueryActiveExchangeRatesAmino;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesSDKType {}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponse {
  /**
   * activeRates defines a list of the denomination which oracle prices aggreed
   * upon.
   */
  activeRates: string[];
}
export interface QueryActiveExchangeRatesResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseAmino {
  /**
   * activeRates defines a list of the denomination which oracle prices aggreed
   * upon.
   */
  active_rates?: string[];
}
export interface QueryActiveExchangeRatesResponseAminoMsg {
  type: "/umee.oracle.v1.QueryActiveExchangeRatesResponse";
  value: QueryActiveExchangeRatesResponseAmino;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseSDKType {
  active_rates: string[];
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegation {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryFeederDelegationProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryFeederDelegation";
  value: Uint8Array;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryFeederDelegationAminoMsg {
  type: "/umee.oracle.v1.QueryFeederDelegation";
  value: QueryFeederDelegationAmino;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationSDKType {
  validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseAmino {
  /** feeder_addr defines the feeder delegation of a validator */
  feeder_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
  type: "/umee.oracle.v1.QueryFeederDelegationResponse";
  value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounter {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryMissCounterProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryMissCounter";
  value: Uint8Array;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryMissCounterAminoMsg {
  type: "/umee.oracle.v1.QueryMissCounter";
  value: QueryMissCounterAmino;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterSDKType {
  validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator */
  missCounter: bigint;
}
export interface QueryMissCounterResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryMissCounterResponse";
  value: Uint8Array;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseAmino {
  /** miss_counter defines the oracle miss counter of a validator */
  miss_counter?: string;
}
export interface QueryMissCounterResponseAminoMsg {
  type: "/umee.oracle.v1.QueryMissCounterResponse";
  value: QueryMissCounterResponseAmino;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
  miss_counter: bigint;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindow {}
export interface QuerySlashWindowProtoMsg {
  typeUrl: "/umee.oracle.v1.QuerySlashWindow";
  value: Uint8Array;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowAmino {}
export interface QuerySlashWindowAminoMsg {
  type: "/umee.oracle.v1.QuerySlashWindow";
  value: QuerySlashWindowAmino;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowSDKType {}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
  /**
   * window_progress defines the number of voting periods
   * since the last slashing event would have taken place.
   */
  windowProgress: bigint;
}
export interface QuerySlashWindowResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse";
  value: Uint8Array;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseAmino {
  /**
   * window_progress defines the number of voting periods
   * since the last slashing event would have taken place.
   */
  window_progress?: string;
}
export interface QuerySlashWindowResponseAminoMsg {
  type: "/umee.oracle.v1.QuerySlashWindowResponse";
  value: QuerySlashWindowResponseAmino;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
  window_progress: bigint;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevote {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryAggregatePrevoteProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevote";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryAggregatePrevoteAminoMsg {
  type: "/umee.oracle.v1.QueryAggregatePrevote";
  value: QueryAggregatePrevoteAmino;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteSDKType {
  validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregatePrevote: AggregateExchangeRatePrevote | undefined;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseAmino {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregate_prevote?: AggregateExchangeRatePrevoteAmino | undefined;
}
export interface QueryAggregatePrevoteResponseAminoMsg {
  type: "/umee.oracle.v1.QueryAggregatePrevoteResponse";
  value: QueryAggregatePrevoteResponseAmino;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
  aggregate_prevote: AggregateExchangeRatePrevoteSDKType | undefined;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotes {}
export interface QueryAggregatePrevotesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesAmino {}
export interface QueryAggregatePrevotesAminoMsg {
  type: "/umee.oracle.v1.QueryAggregatePrevotes";
  value: QueryAggregatePrevotesAmino;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesSDKType {}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}
export interface QueryAggregatePrevotesResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseAmino {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregate_prevotes?: AggregateExchangeRatePrevoteAmino[];
}
export interface QueryAggregatePrevotesResponseAminoMsg {
  type: "/umee.oracle.v1.QueryAggregatePrevotesResponse";
  value: QueryAggregatePrevotesResponseAmino;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
  aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVote {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryAggregateVoteProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregateVote";
  value: Uint8Array;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryAggregateVoteAminoMsg {
  type: "/umee.oracle.v1.QueryAggregateVote";
  value: QueryAggregateVoteAmino;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteSDKType {
  validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregateVote: AggregateExchangeRateVote | undefined;
}
export interface QueryAggregateVoteResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseAmino {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregate_vote?: AggregateExchangeRateVoteAmino | undefined;
}
export interface QueryAggregateVoteResponseAminoMsg {
  type: "/umee.oracle.v1.QueryAggregateVoteResponse";
  value: QueryAggregateVoteResponseAmino;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
  aggregate_vote: AggregateExchangeRateVoteSDKType | undefined;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotes {}
export interface QueryAggregateVotesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotes";
  value: Uint8Array;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesAmino {}
export interface QueryAggregateVotesAminoMsg {
  type: "/umee.oracle.v1.QueryAggregateVotes";
  value: QueryAggregateVotesAmino;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesSDKType {}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregateVotes: AggregateExchangeRateVote[];
}
export interface QueryAggregateVotesResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseAmino {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregate_votes?: AggregateExchangeRateVoteAmino[];
}
export interface QueryAggregateVotesResponseAminoMsg {
  type: "/umee.oracle.v1.QueryAggregateVotesResponse";
  value: QueryAggregateVotesResponseAmino;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
  aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryParams";
  value: Uint8Array;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.oracle.v1.QueryParams";
  value: QueryParamsAmino;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/umee.oracle.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
function createBaseQueryExchangeRates(): QueryExchangeRates {
  return {
    denom: ""
  };
}
export const QueryExchangeRates = {
  typeUrl: "/umee.oracle.v1.QueryExchangeRates",
  encode(message: QueryExchangeRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExchangeRates {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryExchangeRates): JsonSafe<QueryExchangeRates> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExchangeRates>): QueryExchangeRates {
    const message = createBaseQueryExchangeRates();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QueryExchangeRatesSDKType): QueryExchangeRates {
    return {
      denom: object?.denom
    };
  },
  toSDK(message: QueryExchangeRates): QueryExchangeRatesSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: QueryExchangeRatesAmino): QueryExchangeRates {
    const message = createBaseQueryExchangeRates();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryExchangeRates): QueryExchangeRatesAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesAminoMsg): QueryExchangeRates {
    return QueryExchangeRates.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesProtoMsg): QueryExchangeRates {
    return QueryExchangeRates.decode(message.value);
  },
  toProto(message: QueryExchangeRates): Uint8Array {
    return QueryExchangeRates.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRates): QueryExchangeRatesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryExchangeRates",
      value: QueryExchangeRates.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    exchangeRates: []
  };
}
export const QueryExchangeRatesResponse = {
  typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
  encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExchangeRatesResponse {
    return {
      exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryExchangeRatesResponse): JsonSafe<QueryExchangeRatesResponse> {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.exchangeRates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryExchangeRatesResponseSDKType): QueryExchangeRatesResponse {
    return {
      exchangeRates: Array.isArray(object?.exchange_rates) ? object.exchange_rates.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseSDKType {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.exchange_rates = [];
    }
    return obj;
  },
  fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchange_rates?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.exchange_rates = message.exchangeRates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
      value: QueryExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveExchangeRates(): QueryActiveExchangeRates {
  return {};
}
export const QueryActiveExchangeRates = {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
  encode(_: QueryActiveExchangeRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveExchangeRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveExchangeRates();
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
  fromJSON(_: any): QueryActiveExchangeRates {
    return {};
  },
  toJSON(_: QueryActiveExchangeRates): JsonSafe<QueryActiveExchangeRates> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryActiveExchangeRates>): QueryActiveExchangeRates {
    const message = createBaseQueryActiveExchangeRates();
    return message;
  },
  fromSDK(_: QueryActiveExchangeRatesSDKType): QueryActiveExchangeRates {
    return {};
  },
  toSDK(_: QueryActiveExchangeRates): QueryActiveExchangeRatesSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryActiveExchangeRatesAmino): QueryActiveExchangeRates {
    const message = createBaseQueryActiveExchangeRates();
    return message;
  },
  toAmino(_: QueryActiveExchangeRates): QueryActiveExchangeRatesAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActiveExchangeRatesAminoMsg): QueryActiveExchangeRates {
    return QueryActiveExchangeRates.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveExchangeRatesProtoMsg): QueryActiveExchangeRates {
    return QueryActiveExchangeRates.decode(message.value);
  },
  toProto(message: QueryActiveExchangeRates): Uint8Array {
    return QueryActiveExchangeRates.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveExchangeRates): QueryActiveExchangeRatesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
      value: QueryActiveExchangeRates.encode(message).finish()
    };
  }
};
function createBaseQueryActiveExchangeRatesResponse(): QueryActiveExchangeRatesResponse {
  return {
    activeRates: []
  };
}
export const QueryActiveExchangeRatesResponse = {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
  encode(message: QueryActiveExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.activeRates) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveExchangeRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeRates.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryActiveExchangeRatesResponse {
    return {
      activeRates: Array.isArray(object?.activeRates) ? object.activeRates.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryActiveExchangeRatesResponse): JsonSafe<QueryActiveExchangeRatesResponse> {
    const obj: any = {};
    if (message.activeRates) {
      obj.activeRates = message.activeRates.map(e => e);
    } else {
      obj.activeRates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse {
    const message = createBaseQueryActiveExchangeRatesResponse();
    message.activeRates = object.activeRates?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryActiveExchangeRatesResponseSDKType): QueryActiveExchangeRatesResponse {
    return {
      activeRates: Array.isArray(object?.active_rates) ? object.active_rates.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseSDKType {
    const obj: any = {};
    if (message.activeRates) {
      obj.active_rates = message.activeRates.map(e => e);
    } else {
      obj.active_rates = [];
    }
    return obj;
  },
  fromAmino(object: QueryActiveExchangeRatesResponseAmino): QueryActiveExchangeRatesResponse {
    const message = createBaseQueryActiveExchangeRatesResponse();
    message.activeRates = object.active_rates?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.activeRates) {
      obj.active_rates = message.activeRates.map(e => e);
    } else {
      obj.active_rates = message.activeRates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActiveExchangeRatesResponseAminoMsg): QueryActiveExchangeRatesResponse {
    return QueryActiveExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveExchangeRatesResponseProtoMsg): QueryActiveExchangeRatesResponse {
    return QueryActiveExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryActiveExchangeRatesResponse): Uint8Array {
    return QueryActiveExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
      value: QueryActiveExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegation(): QueryFeederDelegation {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegation = {
  typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
  encode(message: QueryFeederDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeederDelegation {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: QueryFeederDelegation): JsonSafe<QueryFeederDelegation> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeederDelegation>): QueryFeederDelegation {
    const message = createBaseQueryFeederDelegation();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryFeederDelegationSDKType): QueryFeederDelegation {
    return {
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryFeederDelegation): QueryFeederDelegationSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryFeederDelegationAmino): QueryFeederDelegation {
    const message = createBaseQueryFeederDelegation();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegation): QueryFeederDelegationAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationAminoMsg): QueryFeederDelegation {
    return QueryFeederDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationProtoMsg): QueryFeederDelegation {
    return QueryFeederDelegation.decode(message.value);
  },
  toProto(message: QueryFeederDelegation): Uint8Array {
    return QueryFeederDelegation.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegation): QueryFeederDelegationProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
      value: QueryFeederDelegation.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
  encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeederDelegationResponse {
    return {
      feederAddr: isSet(object.feederAddr) ? String(object.feederAddr) : ""
    };
  },
  toJSON(message: QueryFeederDelegationResponse): JsonSafe<QueryFeederDelegationResponse> {
    const obj: any = {};
    message.feederAddr !== undefined && (obj.feederAddr = message.feederAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  },
  fromSDK(object: QueryFeederDelegationResponseSDKType): QueryFeederDelegationResponse {
    return {
      feederAddr: object?.feeder_addr
    };
  },
  toSDK(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseSDKType {
    const obj: any = {};
    obj.feeder_addr = message.feederAddr;
    return obj;
  },
  fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
      message.feederAddr = object.feeder_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino {
    const obj: any = {};
    obj.feeder_addr = message.feederAddr === "" ? undefined : message.feederAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
      value: QueryFeederDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMissCounter(): QueryMissCounter {
  return {
    validatorAddr: ""
  };
}
export const QueryMissCounter = {
  typeUrl: "/umee.oracle.v1.QueryMissCounter",
  encode(message: QueryMissCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMissCounter {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: QueryMissCounter): JsonSafe<QueryMissCounter> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMissCounter>): QueryMissCounter {
    const message = createBaseQueryMissCounter();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryMissCounterSDKType): QueryMissCounter {
    return {
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryMissCounter): QueryMissCounterSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryMissCounterAmino): QueryMissCounter {
    const message = createBaseQueryMissCounter();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryMissCounter): QueryMissCounterAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryMissCounterAminoMsg): QueryMissCounter {
    return QueryMissCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCounterProtoMsg): QueryMissCounter {
    return QueryMissCounter.decode(message.value);
  },
  toProto(message: QueryMissCounter): Uint8Array {
    return QueryMissCounter.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounter): QueryMissCounterProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMissCounter",
      value: QueryMissCounter.encode(message).finish()
    };
  }
};
function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return {
    missCounter: BigInt(0)
  };
}
export const QueryMissCounterResponse = {
  typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
  encode(message: QueryMissCounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMissCounterResponse {
    return {
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryMissCounterResponse): JsonSafe<QueryMissCounterResponse> {
    const obj: any = {};
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMissCounterResponse>): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryMissCounterResponseSDKType): QueryMissCounterResponse {
    return {
      missCounter: object?.miss_counter
    };
  },
  toSDK(message: QueryMissCounterResponse): QueryMissCounterResponseSDKType {
    const obj: any = {};
    obj.miss_counter = message.missCounter;
    return obj;
  },
  fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    return message;
  },
  toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino {
    const obj: any = {};
    obj.miss_counter = message.missCounter !== BigInt(0) ? message.missCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMissCounterResponseAminoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.decode(message.value);
  },
  toProto(message: QueryMissCounterResponse): Uint8Array {
    return QueryMissCounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
      value: QueryMissCounterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindow(): QuerySlashWindow {
  return {};
}
export const QuerySlashWindow = {
  typeUrl: "/umee.oracle.v1.QuerySlashWindow",
  encode(_: QuerySlashWindow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindow();
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
  fromJSON(_: any): QuerySlashWindow {
    return {};
  },
  toJSON(_: QuerySlashWindow): JsonSafe<QuerySlashWindow> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QuerySlashWindow>): QuerySlashWindow {
    const message = createBaseQuerySlashWindow();
    return message;
  },
  fromSDK(_: QuerySlashWindowSDKType): QuerySlashWindow {
    return {};
  },
  toSDK(_: QuerySlashWindow): QuerySlashWindowSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QuerySlashWindowAmino): QuerySlashWindow {
    const message = createBaseQuerySlashWindow();
    return message;
  },
  toAmino(_: QuerySlashWindow): QuerySlashWindowAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowAminoMsg): QuerySlashWindow {
    return QuerySlashWindow.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowProtoMsg): QuerySlashWindow {
    return QuerySlashWindow.decode(message.value);
  },
  toProto(message: QuerySlashWindow): Uint8Array {
    return QuerySlashWindow.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindow): QuerySlashWindowProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QuerySlashWindow",
      value: QuerySlashWindow.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
  return {
    windowProgress: BigInt(0)
  };
}
export const QuerySlashWindowResponse = {
  typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
  encode(message: QuerySlashWindowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.windowProgress !== BigInt(0)) {
      writer.uint32(8).uint64(message.windowProgress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windowProgress = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlashWindowResponse {
    return {
      windowProgress: isSet(object.windowProgress) ? BigInt(object.windowProgress.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySlashWindowResponse): JsonSafe<QuerySlashWindowResponse> {
    const obj: any = {};
    message.windowProgress !== undefined && (obj.windowProgress = (message.windowProgress || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySlashWindowResponse>): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? BigInt(object.windowProgress.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QuerySlashWindowResponseSDKType): QuerySlashWindowResponse {
    return {
      windowProgress: object?.window_progress
    };
  },
  toSDK(message: QuerySlashWindowResponse): QuerySlashWindowResponseSDKType {
    const obj: any = {};
    obj.window_progress = message.windowProgress;
    return obj;
  },
  fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    if (object.window_progress !== undefined && object.window_progress !== null) {
      message.windowProgress = BigInt(object.window_progress);
    }
    return message;
  },
  toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino {
    const obj: any = {};
    obj.window_progress = message.windowProgress !== BigInt(0) ? message.windowProgress.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.decode(message.value);
  },
  toProto(message: QuerySlashWindowResponse): Uint8Array {
    return QuerySlashWindowResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
      value: QuerySlashWindowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevote(): QueryAggregatePrevote {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregatePrevote = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
  encode(message: QueryAggregatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAggregatePrevote {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: QueryAggregatePrevote): JsonSafe<QueryAggregatePrevote> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAggregatePrevote>): QueryAggregatePrevote {
    const message = createBaseQueryAggregatePrevote();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryAggregatePrevoteSDKType): QueryAggregatePrevote {
    return {
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryAggregatePrevote): QueryAggregatePrevoteSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryAggregatePrevoteAmino): QueryAggregatePrevote {
    const message = createBaseQueryAggregatePrevote();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregatePrevote): QueryAggregatePrevoteAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevoteAminoMsg): QueryAggregatePrevote {
    return QueryAggregatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevoteProtoMsg): QueryAggregatePrevote {
    return QueryAggregatePrevote.decode(message.value);
  },
  toProto(message: QueryAggregatePrevote): Uint8Array {
    return QueryAggregatePrevote.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevote): QueryAggregatePrevoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
      value: QueryAggregatePrevote.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({})
  };
}
export const QueryAggregatePrevoteResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
  encode(message: QueryAggregatePrevoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAggregatePrevoteResponse {
    return {
      aggregatePrevote: isSet(object.aggregatePrevote) ? AggregateExchangeRatePrevote.fromJSON(object.aggregatePrevote) : undefined
    };
  },
  toJSON(message: QueryAggregatePrevoteResponse): JsonSafe<QueryAggregatePrevoteResponse> {
    const obj: any = {};
    message.aggregatePrevote !== undefined && (obj.aggregatePrevote = message.aggregatePrevote ? AggregateExchangeRatePrevote.toJSON(message.aggregatePrevote) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
    return message;
  },
  fromSDK(object: QueryAggregatePrevoteResponseSDKType): QueryAggregatePrevoteResponse {
    return {
      aggregatePrevote: object.aggregate_prevote ? AggregateExchangeRatePrevote.fromSDK(object.aggregate_prevote) : undefined
    };
  },
  toSDK(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseSDKType {
    const obj: any = {};
    message.aggregatePrevote !== undefined && (obj.aggregate_prevote = message.aggregatePrevote ? AggregateExchangeRatePrevote.toSDK(message.aggregatePrevote) : undefined);
    return obj;
  },
  fromAmino(object: QueryAggregatePrevoteResponseAmino): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromAmino(object.aggregate_prevote);
    }
    return message;
  },
  toAmino(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseAmino {
    const obj: any = {};
    obj.aggregate_prevote = message.aggregatePrevote ? AggregateExchangeRatePrevote.toAmino(message.aggregatePrevote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevoteResponseAminoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteResponse): Uint8Array {
    return QueryAggregatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
      value: QueryAggregatePrevoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotes(): QueryAggregatePrevotes {
  return {};
}
export const QueryAggregatePrevotes = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
  encode(_: QueryAggregatePrevotes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotes();
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
  fromJSON(_: any): QueryAggregatePrevotes {
    return {};
  },
  toJSON(_: QueryAggregatePrevotes): JsonSafe<QueryAggregatePrevotes> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryAggregatePrevotes>): QueryAggregatePrevotes {
    const message = createBaseQueryAggregatePrevotes();
    return message;
  },
  fromSDK(_: QueryAggregatePrevotesSDKType): QueryAggregatePrevotes {
    return {};
  },
  toSDK(_: QueryAggregatePrevotes): QueryAggregatePrevotesSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryAggregatePrevotesAmino): QueryAggregatePrevotes {
    const message = createBaseQueryAggregatePrevotes();
    return message;
  },
  toAmino(_: QueryAggregatePrevotes): QueryAggregatePrevotesAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevotesAminoMsg): QueryAggregatePrevotes {
    return QueryAggregatePrevotes.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevotesProtoMsg): QueryAggregatePrevotes {
    return QueryAggregatePrevotes.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotes): Uint8Array {
    return QueryAggregatePrevotes.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotes): QueryAggregatePrevotesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
      value: QueryAggregatePrevotes.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    aggregatePrevotes: []
  };
}
export const QueryAggregatePrevotesResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
  encode(message: QueryAggregatePrevotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAggregatePrevotesResponse {
    return {
      aggregatePrevotes: Array.isArray(object?.aggregatePrevotes) ? object.aggregatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAggregatePrevotesResponse): JsonSafe<QueryAggregatePrevotesResponse> {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregatePrevotes = message.aggregatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toJSON(e) : undefined);
    } else {
      obj.aggregatePrevotes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryAggregatePrevotesResponseSDKType): QueryAggregatePrevotesResponse {
    return {
      aggregatePrevotes: Array.isArray(object?.aggregate_prevotes) ? object.aggregate_prevotes.map((e: any) => AggregateExchangeRatePrevote.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseSDKType {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregate_prevotes = message.aggregatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toSDK(e) : undefined);
    } else {
      obj.aggregate_prevotes = [];
    }
    return obj;
  },
  fromAmino(object: QueryAggregatePrevotesResponseAmino): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseAmino {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregate_prevotes = message.aggregatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toAmino(e) : undefined);
    } else {
      obj.aggregate_prevotes = message.aggregatePrevotes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevotesResponseAminoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesResponse): Uint8Array {
    return QueryAggregatePrevotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
      value: QueryAggregatePrevotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVote(): QueryAggregateVote {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregateVote = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVote",
  encode(message: QueryAggregateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAggregateVote {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message: QueryAggregateVote): JsonSafe<QueryAggregateVote> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAggregateVote>): QueryAggregateVote {
    const message = createBaseQueryAggregateVote();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryAggregateVoteSDKType): QueryAggregateVote {
    return {
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryAggregateVote): QueryAggregateVoteSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryAggregateVoteAmino): QueryAggregateVote {
    const message = createBaseQueryAggregateVote();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregateVote): QueryAggregateVoteAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVoteAminoMsg): QueryAggregateVote {
    return QueryAggregateVote.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVoteProtoMsg): QueryAggregateVote {
    return QueryAggregateVote.decode(message.value);
  },
  toProto(message: QueryAggregateVote): Uint8Array {
    return QueryAggregateVote.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVote): QueryAggregateVoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVote",
      value: QueryAggregateVote.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    aggregateVote: AggregateExchangeRateVote.fromPartial({})
  };
}
export const QueryAggregateVoteResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
  encode(message: QueryAggregateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVote = AggregateExchangeRateVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAggregateVoteResponse {
    return {
      aggregateVote: isSet(object.aggregateVote) ? AggregateExchangeRateVote.fromJSON(object.aggregateVote) : undefined
    };
  },
  toJSON(message: QueryAggregateVoteResponse): JsonSafe<QueryAggregateVoteResponse> {
    const obj: any = {};
    message.aggregateVote !== undefined && (obj.aggregateVote = message.aggregateVote ? AggregateExchangeRateVote.toJSON(message.aggregateVote) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
    return message;
  },
  fromSDK(object: QueryAggregateVoteResponseSDKType): QueryAggregateVoteResponse {
    return {
      aggregateVote: object.aggregate_vote ? AggregateExchangeRateVote.fromSDK(object.aggregate_vote) : undefined
    };
  },
  toSDK(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseSDKType {
    const obj: any = {};
    message.aggregateVote !== undefined && (obj.aggregate_vote = message.aggregateVote ? AggregateExchangeRateVote.toSDK(message.aggregateVote) : undefined);
    return obj;
  },
  fromAmino(object: QueryAggregateVoteResponseAmino): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromAmino(object.aggregate_vote);
    }
    return message;
  },
  toAmino(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseAmino {
    const obj: any = {};
    obj.aggregate_vote = message.aggregateVote ? AggregateExchangeRateVote.toAmino(message.aggregateVote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVoteResponseAminoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVoteResponse): Uint8Array {
    return QueryAggregateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
      value: QueryAggregateVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotes(): QueryAggregateVotes {
  return {};
}
export const QueryAggregateVotes = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
  encode(_: QueryAggregateVotes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotes();
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
  fromJSON(_: any): QueryAggregateVotes {
    return {};
  },
  toJSON(_: QueryAggregateVotes): JsonSafe<QueryAggregateVotes> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryAggregateVotes>): QueryAggregateVotes {
    const message = createBaseQueryAggregateVotes();
    return message;
  },
  fromSDK(_: QueryAggregateVotesSDKType): QueryAggregateVotes {
    return {};
  },
  toSDK(_: QueryAggregateVotes): QueryAggregateVotesSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryAggregateVotesAmino): QueryAggregateVotes {
    const message = createBaseQueryAggregateVotes();
    return message;
  },
  toAmino(_: QueryAggregateVotes): QueryAggregateVotesAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVotesAminoMsg): QueryAggregateVotes {
    return QueryAggregateVotes.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVotesProtoMsg): QueryAggregateVotes {
    return QueryAggregateVotes.decode(message.value);
  },
  toProto(message: QueryAggregateVotes): Uint8Array {
    return QueryAggregateVotes.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotes): QueryAggregateVotesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
      value: QueryAggregateVotes.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return {
    aggregateVotes: []
  };
}
export const QueryAggregateVotesResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
  encode(message: QueryAggregateVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAggregateVotesResponse {
    return {
      aggregateVotes: Array.isArray(object?.aggregateVotes) ? object.aggregateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAggregateVotesResponse): JsonSafe<QueryAggregateVotesResponse> {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregateVotes = message.aggregateVotes.map(e => e ? AggregateExchangeRateVote.toJSON(e) : undefined);
    } else {
      obj.aggregateVotes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryAggregateVotesResponseSDKType): QueryAggregateVotesResponse {
    return {
      aggregateVotes: Array.isArray(object?.aggregate_votes) ? object.aggregate_votes.map((e: any) => AggregateExchangeRateVote.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseSDKType {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregate_votes = message.aggregateVotes.map(e => e ? AggregateExchangeRateVote.toSDK(e) : undefined);
    } else {
      obj.aggregate_votes = [];
    }
    return obj;
  },
  fromAmino(object: QueryAggregateVotesResponseAmino): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseAmino {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregate_votes = message.aggregateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
    } else {
      obj.aggregate_votes = message.aggregateVotes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVotesResponseAminoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVotesResponse): Uint8Array {
    return QueryAggregateVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
      value: QueryAggregateVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.oracle.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParams();
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
  fromJSON(_: any): QueryParams {
    return {};
  },
  toJSON(_: QueryParams): JsonSafe<QueryParams> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromSDK(_: QueryParamsSDKType): QueryParams {
    return {};
  },
  toSDK(_: QueryParams): QueryParamsSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.oracle.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};