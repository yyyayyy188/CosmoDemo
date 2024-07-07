import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryExchangeRates, QueryExchangeRatesResponse, QueryActiveExchangeRates, QueryActiveExchangeRatesResponse, QueryFeederDelegation, QueryFeederDelegationResponse, QueryMissCounter, QueryMissCounterResponse, QuerySlashWindow, QuerySlashWindowResponse, QueryAggregatePrevote, QueryAggregatePrevoteResponse, QueryAggregatePrevotes, QueryAggregatePrevotesResponse, QueryAggregateVote, QueryAggregateVoteResponse, QueryAggregateVotes, QueryAggregateVotesResponse, QueryParams, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * ExchangeRates returns exchange rates of all denoms,
   * or, if specified, returns a single denom
   */
  exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse>;
  /** ActiveExchangeRates returns all active denoms */
  activeExchangeRates(request?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse>;
  /** FeederDelegation returns feeder delegation of a validator */
  feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator */
  missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse>;
  /** SlashWindow returns slash window information */
  slashWindow(request?: QuerySlashWindow): Promise<QuerySlashWindowResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  aggregatePrevotes(request?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator */
  aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators */
  aggregateVotes(request?: QueryAggregateVotes): Promise<QueryAggregateVotesResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.exchangeRates = this.exchangeRates.bind(this);
    this.activeExchangeRates = this.activeExchangeRates.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.slashWindow = this.slashWindow.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
  }
  exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRates.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ExchangeRates", data);
    return promise.then(data => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  activeExchangeRates(request: QueryActiveExchangeRates = {}): Promise<QueryActiveExchangeRatesResponse> {
    const data = QueryActiveExchangeRates.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ActiveExchangeRates", data);
    return promise.then(data => QueryActiveExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegation.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "FeederDelegation", data);
    return promise.then(data => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
  }
  missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounter.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "MissCounter", data);
    return promise.then(data => QueryMissCounterResponse.decode(new BinaryReader(data)));
  }
  slashWindow(request: QuerySlashWindow = {}): Promise<QuerySlashWindowResponse> {
    const data = QuerySlashWindow.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "SlashWindow", data);
    return promise.then(data => QuerySlashWindowResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevote.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevote", data);
    return promise.then(data => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevotes(request: QueryAggregatePrevotes = {}): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotes.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevotes", data);
    return promise.then(data => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
  }
  aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVote.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVote", data);
    return promise.then(data => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
  }
  aggregateVotes(request: QueryAggregateVotes = {}): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotes.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVotes", data);
    return promise.then(data => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse> {
      return queryService.exchangeRates(request);
    },
    activeExchangeRates(request?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse> {
      return queryService.activeExchangeRates(request);
    },
    feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse> {
      return queryService.feederDelegation(request);
    },
    missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse> {
      return queryService.missCounter(request);
    },
    slashWindow(request?: QuerySlashWindow): Promise<QuerySlashWindowResponse> {
      return queryService.slashWindow(request);
    },
    aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse> {
      return queryService.aggregatePrevote(request);
    },
    aggregatePrevotes(request?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse> {
      return queryService.aggregatePrevotes(request);
    },
    aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse> {
      return queryService.aggregateVote(request);
    },
    aggregateVotes(request?: QueryAggregateVotes): Promise<QueryAggregateVotesResponse> {
      return queryService.aggregateVotes(request);
    },
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};
export interface UseExchangeRatesQuery<TData> extends ReactQueryParams<QueryExchangeRatesResponse, TData> {
  request: QueryExchangeRates;
}
export interface UseActiveExchangeRatesQuery<TData> extends ReactQueryParams<QueryActiveExchangeRatesResponse, TData> {
  request?: QueryActiveExchangeRates;
}
export interface UseFeederDelegationQuery<TData> extends ReactQueryParams<QueryFeederDelegationResponse, TData> {
  request: QueryFeederDelegation;
}
export interface UseMissCounterQuery<TData> extends ReactQueryParams<QueryMissCounterResponse, TData> {
  request: QueryMissCounter;
}
export interface UseSlashWindowQuery<TData> extends ReactQueryParams<QuerySlashWindowResponse, TData> {
  request?: QuerySlashWindow;
}
export interface UseAggregatePrevoteQuery<TData> extends ReactQueryParams<QueryAggregatePrevoteResponse, TData> {
  request: QueryAggregatePrevote;
}
export interface UseAggregatePrevotesQuery<TData> extends ReactQueryParams<QueryAggregatePrevotesResponse, TData> {
  request?: QueryAggregatePrevotes;
}
export interface UseAggregateVoteQuery<TData> extends ReactQueryParams<QueryAggregateVoteResponse, TData> {
  request: QueryAggregateVote;
}
export interface UseAggregateVotesQuery<TData> extends ReactQueryParams<QueryAggregateVotesResponse, TData> {
  request?: QueryAggregateVotes;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParams;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useExchangeRates = <TData = QueryExchangeRatesResponse,>({
    request,
    options
  }: UseExchangeRatesQuery<TData>) => {
    return useQuery<QueryExchangeRatesResponse, Error, TData>(["exchangeRatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.exchangeRates(request);
    }, options);
  };
  const useActiveExchangeRates = <TData = QueryActiveExchangeRatesResponse,>({
    request,
    options
  }: UseActiveExchangeRatesQuery<TData>) => {
    return useQuery<QueryActiveExchangeRatesResponse, Error, TData>(["activeExchangeRatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.activeExchangeRates(request);
    }, options);
  };
  const useFeederDelegation = <TData = QueryFeederDelegationResponse,>({
    request,
    options
  }: UseFeederDelegationQuery<TData>) => {
    return useQuery<QueryFeederDelegationResponse, Error, TData>(["feederDelegationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feederDelegation(request);
    }, options);
  };
  const useMissCounter = <TData = QueryMissCounterResponse,>({
    request,
    options
  }: UseMissCounterQuery<TData>) => {
    return useQuery<QueryMissCounterResponse, Error, TData>(["missCounterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.missCounter(request);
    }, options);
  };
  const useSlashWindow = <TData = QuerySlashWindowResponse,>({
    request,
    options
  }: UseSlashWindowQuery<TData>) => {
    return useQuery<QuerySlashWindowResponse, Error, TData>(["slashWindowQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.slashWindow(request);
    }, options);
  };
  const useAggregatePrevote = <TData = QueryAggregatePrevoteResponse,>({
    request,
    options
  }: UseAggregatePrevoteQuery<TData>) => {
    return useQuery<QueryAggregatePrevoteResponse, Error, TData>(["aggregatePrevoteQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.aggregatePrevote(request);
    }, options);
  };
  const useAggregatePrevotes = <TData = QueryAggregatePrevotesResponse,>({
    request,
    options
  }: UseAggregatePrevotesQuery<TData>) => {
    return useQuery<QueryAggregatePrevotesResponse, Error, TData>(["aggregatePrevotesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.aggregatePrevotes(request);
    }, options);
  };
  const useAggregateVote = <TData = QueryAggregateVoteResponse,>({
    request,
    options
  }: UseAggregateVoteQuery<TData>) => {
    return useQuery<QueryAggregateVoteResponse, Error, TData>(["aggregateVoteQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.aggregateVote(request);
    }, options);
  };
  const useAggregateVotes = <TData = QueryAggregateVotesResponse,>({
    request,
    options
  }: UseAggregateVotesQuery<TData>) => {
    return useQuery<QueryAggregateVotesResponse, Error, TData>(["aggregateVotesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.aggregateVotes(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  return {
    /**
     * ExchangeRates returns exchange rates of all denoms,
     * or, if specified, returns a single denom
     */
    useExchangeRates,
    /** ActiveExchangeRates returns all active denoms */useActiveExchangeRates,
    /** FeederDelegation returns feeder delegation of a validator */useFeederDelegation,
    /** MissCounter returns oracle miss counter of a validator */useMissCounter,
    /** SlashWindow returns slash window information */useSlashWindow,
    /** AggregatePrevote returns an aggregate prevote of a validator */useAggregatePrevote,
    /** AggregatePrevotes returns aggregate prevotes of all validators */useAggregatePrevotes,
    /** AggregateVote returns an aggregate vote of a validator */useAggregateVote,
    /** AggregateVotes returns aggregate votes of all validators */useAggregateVotes,
    /** Params queries all parameters. */useParams
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryExchangeRatesStore {
    store = new QueryStore<QueryExchangeRates, QueryExchangeRatesResponse>(queryService?.exchangeRates);
    exchangeRates(request: QueryExchangeRates) {
      return this.store.getData(request);
    }
  }
  class QueryActiveExchangeRatesStore {
    store = new QueryStore<QueryActiveExchangeRates, QueryActiveExchangeRatesResponse>(queryService?.activeExchangeRates);
    activeExchangeRates(request: QueryActiveExchangeRates) {
      return this.store.getData(request);
    }
  }
  class QueryFeederDelegationStore {
    store = new QueryStore<QueryFeederDelegation, QueryFeederDelegationResponse>(queryService?.feederDelegation);
    feederDelegation(request: QueryFeederDelegation) {
      return this.store.getData(request);
    }
  }
  class QueryMissCounterStore {
    store = new QueryStore<QueryMissCounter, QueryMissCounterResponse>(queryService?.missCounter);
    missCounter(request: QueryMissCounter) {
      return this.store.getData(request);
    }
  }
  class QuerySlashWindowStore {
    store = new QueryStore<QuerySlashWindow, QuerySlashWindowResponse>(queryService?.slashWindow);
    slashWindow(request: QuerySlashWindow) {
      return this.store.getData(request);
    }
  }
  class QueryAggregatePrevoteStore {
    store = new QueryStore<QueryAggregatePrevote, QueryAggregatePrevoteResponse>(queryService?.aggregatePrevote);
    aggregatePrevote(request: QueryAggregatePrevote) {
      return this.store.getData(request);
    }
  }
  class QueryAggregatePrevotesStore {
    store = new QueryStore<QueryAggregatePrevotes, QueryAggregatePrevotesResponse>(queryService?.aggregatePrevotes);
    aggregatePrevotes(request: QueryAggregatePrevotes) {
      return this.store.getData(request);
    }
  }
  class QueryAggregateVoteStore {
    store = new QueryStore<QueryAggregateVote, QueryAggregateVoteResponse>(queryService?.aggregateVote);
    aggregateVote(request: QueryAggregateVote) {
      return this.store.getData(request);
    }
  }
  class QueryAggregateVotesStore {
    store = new QueryStore<QueryAggregateVotes, QueryAggregateVotesResponse>(queryService?.aggregateVotes);
    aggregateVotes(request: QueryAggregateVotes) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParams, QueryParamsResponse>(queryService?.params);
    params(request: QueryParams) {
      return this.store.getData(request);
    }
  }
  return {
    /**
     * ExchangeRates returns exchange rates of all denoms,
     * or, if specified, returns a single denom
     */
    QueryExchangeRatesStore,
    /** ActiveExchangeRates returns all active denoms */QueryActiveExchangeRatesStore,
    /** FeederDelegation returns feeder delegation of a validator */QueryFeederDelegationStore,
    /** MissCounter returns oracle miss counter of a validator */QueryMissCounterStore,
    /** SlashWindow returns slash window information */QuerySlashWindowStore,
    /** AggregatePrevote returns an aggregate prevote of a validator */QueryAggregatePrevoteStore,
    /** AggregatePrevotes returns aggregate prevotes of all validators */QueryAggregatePrevotesStore,
    /** AggregateVote returns an aggregate vote of a validator */QueryAggregateVoteStore,
    /** AggregateVotes returns aggregate votes of all validators */QueryAggregateVotesStore,
    /** Params queries all parameters. */QueryParamsStore
  };
};