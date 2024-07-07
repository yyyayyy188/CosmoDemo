import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponse, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
  /** GetProtoRevAllProfits queries all of the profits from the module */
  getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
  /**
   * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
   * that have been executed for a given pool
   */
  getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
  /**
   * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
   * against and the number of trades and profits that have been executed for
   * each pool
   */
  getProtoRevAllStatistics(request?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponse>;
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByPool = this.getProtoRevStatisticsByPool.bind(this);
    this.getProtoRevAllStatistics = this.getProtoRevAllStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
    return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
    return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponse> {
    const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
    return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
    const data = QueryGetProtoRevStatisticsByPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByPool", data);
    return promise.then(data => QueryGetProtoRevStatisticsByPoolResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllStatistics(request: QueryGetProtoRevAllStatisticsRequest = {}): Promise<QueryGetProtoRevAllStatisticsResponse> {
    const data = QueryGetProtoRevAllStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllStatistics", data);
    return promise.then(data => QueryGetProtoRevAllStatisticsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
    return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse> {
      return queryService.getProtoRevNumberOfTrades(request);
    },
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
      return queryService.getProtoRevProfitsByDenom(request);
    },
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse> {
      return queryService.getProtoRevAllProfits(request);
    },
    getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
      return queryService.getProtoRevStatisticsByPool(request);
    },
    getProtoRevAllStatistics(request?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponse> {
      return queryService.getProtoRevAllStatistics(request);
    },
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
      return queryService.getProtoRevTokenPairArbRoutes(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseGetProtoRevNumberOfTradesQuery<TData> extends ReactQueryParams<QueryGetProtoRevNumberOfTradesResponse, TData> {
  request?: QueryGetProtoRevNumberOfTradesRequest;
}
export interface UseGetProtoRevProfitsByDenomQuery<TData> extends ReactQueryParams<QueryGetProtoRevProfitsByDenomResponse, TData> {
  request: QueryGetProtoRevProfitsByDenomRequest;
}
export interface UseGetProtoRevAllProfitsQuery<TData> extends ReactQueryParams<QueryGetProtoRevAllProfitsResponse, TData> {
  request?: QueryGetProtoRevAllProfitsRequest;
}
export interface UseGetProtoRevStatisticsByPoolQuery<TData> extends ReactQueryParams<QueryGetProtoRevStatisticsByPoolResponse, TData> {
  request: QueryGetProtoRevStatisticsByPoolRequest;
}
export interface UseGetProtoRevAllStatisticsQuery<TData> extends ReactQueryParams<QueryGetProtoRevAllStatisticsResponse, TData> {
  request?: QueryGetProtoRevAllStatisticsRequest;
}
export interface UseGetProtoRevTokenPairArbRoutesQuery<TData> extends ReactQueryParams<QueryGetProtoRevTokenPairArbRoutesResponse, TData> {
  request?: QueryGetProtoRevTokenPairArbRoutesRequest;
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
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useGetProtoRevNumberOfTrades = <TData = QueryGetProtoRevNumberOfTradesResponse,>({
    request,
    options
  }: UseGetProtoRevNumberOfTradesQuery<TData>) => {
    return useQuery<QueryGetProtoRevNumberOfTradesResponse, Error, TData>(["getProtoRevNumberOfTradesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevNumberOfTrades(request);
    }, options);
  };
  const useGetProtoRevProfitsByDenom = <TData = QueryGetProtoRevProfitsByDenomResponse,>({
    request,
    options
  }: UseGetProtoRevProfitsByDenomQuery<TData>) => {
    return useQuery<QueryGetProtoRevProfitsByDenomResponse, Error, TData>(["getProtoRevProfitsByDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevProfitsByDenom(request);
    }, options);
  };
  const useGetProtoRevAllProfits = <TData = QueryGetProtoRevAllProfitsResponse,>({
    request,
    options
  }: UseGetProtoRevAllProfitsQuery<TData>) => {
    return useQuery<QueryGetProtoRevAllProfitsResponse, Error, TData>(["getProtoRevAllProfitsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevAllProfits(request);
    }, options);
  };
  const useGetProtoRevStatisticsByPool = <TData = QueryGetProtoRevStatisticsByPoolResponse,>({
    request,
    options
  }: UseGetProtoRevStatisticsByPoolQuery<TData>) => {
    return useQuery<QueryGetProtoRevStatisticsByPoolResponse, Error, TData>(["getProtoRevStatisticsByPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevStatisticsByPool(request);
    }, options);
  };
  const useGetProtoRevAllStatistics = <TData = QueryGetProtoRevAllStatisticsResponse,>({
    request,
    options
  }: UseGetProtoRevAllStatisticsQuery<TData>) => {
    return useQuery<QueryGetProtoRevAllStatisticsResponse, Error, TData>(["getProtoRevAllStatisticsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevAllStatistics(request);
    }, options);
  };
  const useGetProtoRevTokenPairArbRoutes = <TData = QueryGetProtoRevTokenPairArbRoutesResponse,>({
    request,
    options
  }: UseGetProtoRevTokenPairArbRoutesQuery<TData>) => {
    return useQuery<QueryGetProtoRevTokenPairArbRoutesResponse, Error, TData>(["getProtoRevTokenPairArbRoutesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevTokenPairArbRoutes(request);
    }, options);
  };
  return {
    /** Params queries the parameters of the module. */useParams,
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    useGetProtoRevNumberOfTrades,
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */useGetProtoRevProfitsByDenom,
    /** GetProtoRevAllProfits queries all of the profits from the module */useGetProtoRevAllProfits,
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    useGetProtoRevStatisticsByPool,
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    useGetProtoRevAllStatistics,
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    useGetProtoRevTokenPairArbRoutes
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetProtoRevNumberOfTradesStore {
    store = new QueryStore<QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse>(queryService?.getProtoRevNumberOfTrades);
    getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetProtoRevProfitsByDenomStore {
    store = new QueryStore<QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse>(queryService?.getProtoRevProfitsByDenom);
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetProtoRevAllProfitsStore {
    store = new QueryStore<QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse>(queryService?.getProtoRevAllProfits);
    getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetProtoRevStatisticsByPoolStore {
    store = new QueryStore<QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponse>(queryService?.getProtoRevStatisticsByPool);
    getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetProtoRevAllStatisticsStore {
    store = new QueryStore<QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponse>(queryService?.getProtoRevAllStatistics);
    getProtoRevAllStatistics(request: QueryGetProtoRevAllStatisticsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetProtoRevTokenPairArbRoutesStore {
    store = new QueryStore<QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse>(queryService?.getProtoRevTokenPairArbRoutes);
    getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params queries the parameters of the module. */QueryParamsStore,
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    QueryGetProtoRevNumberOfTradesStore,
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */QueryGetProtoRevProfitsByDenomStore,
    /** GetProtoRevAllProfits queries all of the profits from the module */QueryGetProtoRevAllProfitsStore,
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    QueryGetProtoRevStatisticsByPoolStore,
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    QueryGetProtoRevAllStatisticsStore,
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    QueryGetProtoRevTokenPairArbRoutesStore
  };
};