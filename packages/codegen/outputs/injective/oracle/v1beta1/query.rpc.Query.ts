import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves oracle params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the band relayers */
  bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
  /** Retrieves the state for all band price feeds */
  bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
  /** Retrieves the state for all band ibc price feeds */
  bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
  /** Retrieves the state for all price feeds */
  priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
  /** Retrieves the state for all coinbase price feeds */
  coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
  /** Retrieves the state for all provider price feeds */
  providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
  /** Retrieves the entire oracle module's state */
  oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /** Retrieves historical price records for a given OracleType and Symbol */
  historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
  /** Retrieves mixed volatility value for the specified pair of base/quote */
  oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
  oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
  oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.bandRelayers = this.bandRelayers.bind(this);
    this.bandPriceStates = this.bandPriceStates.bind(this);
    this.bandIBCPriceStates = this.bandIBCPriceStates.bind(this);
    this.priceFeedPriceStates = this.priceFeedPriceStates.bind(this);
    this.coinbasePriceStates = this.coinbasePriceStates.bind(this);
    this.providerPriceState = this.providerPriceState.bind(this);
    this.oracleModuleState = this.oracleModuleState.bind(this);
    this.historicalPriceRecords = this.historicalPriceRecords.bind(this);
    this.oracleVolatility = this.oracleVolatility.bind(this);
    this.oracleProvidersInfo = this.oracleProvidersInfo.bind(this);
    this.oracleProviderPrices = this.oracleProviderPrices.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  bandRelayers(request: QueryBandRelayersRequest = {}): Promise<QueryBandRelayersResponse> {
    const data = QueryBandRelayersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandRelayers", data);
    return promise.then(data => QueryBandRelayersResponse.decode(new BinaryReader(data)));
  }
  bandPriceStates(request: QueryBandPriceStatesRequest = {}): Promise<QueryBandPriceStatesResponse> {
    const data = QueryBandPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandPriceStates", data);
    return promise.then(data => QueryBandPriceStatesResponse.decode(new BinaryReader(data)));
  }
  bandIBCPriceStates(request: QueryBandIBCPriceStatesRequest = {}): Promise<QueryBandIBCPriceStatesResponse> {
    const data = QueryBandIBCPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandIBCPriceStates", data);
    return promise.then(data => QueryBandIBCPriceStatesResponse.decode(new BinaryReader(data)));
  }
  priceFeedPriceStates(request: QueryPriceFeedPriceStatesRequest = {}): Promise<QueryPriceFeedPriceStatesResponse> {
    const data = QueryPriceFeedPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PriceFeedPriceStates", data);
    return promise.then(data => QueryPriceFeedPriceStatesResponse.decode(new BinaryReader(data)));
  }
  coinbasePriceStates(request: QueryCoinbasePriceStatesRequest = {}): Promise<QueryCoinbasePriceStatesResponse> {
    const data = QueryCoinbasePriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "CoinbasePriceStates", data);
    return promise.then(data => QueryCoinbasePriceStatesResponse.decode(new BinaryReader(data)));
  }
  providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> {
    const data = QueryProviderPriceStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "ProviderPriceState", data);
    return promise.then(data => QueryProviderPriceStateResponse.decode(new BinaryReader(data)));
  }
  oracleModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
  historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> {
    const data = QueryHistoricalPriceRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "HistoricalPriceRecords", data);
    return promise.then(data => QueryHistoricalPriceRecordsResponse.decode(new BinaryReader(data)));
  }
  oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> {
    const data = QueryOracleVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleVolatility", data);
    return promise.then(data => QueryOracleVolatilityResponse.decode(new BinaryReader(data)));
  }
  oracleProvidersInfo(request: QueryOracleProvidersInfoRequest = {}): Promise<QueryOracleProvidersInfoResponse> {
    const data = QueryOracleProvidersInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProvidersInfo", data);
    return promise.then(data => QueryOracleProvidersInfoResponse.decode(new BinaryReader(data)));
  }
  oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> {
    const data = QueryOracleProviderPricesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProviderPrices", data);
    return promise.then(data => QueryOracleProviderPricesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse> {
      return queryService.bandRelayers(request);
    },
    bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse> {
      return queryService.bandPriceStates(request);
    },
    bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse> {
      return queryService.bandIBCPriceStates(request);
    },
    priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse> {
      return queryService.priceFeedPriceStates(request);
    },
    coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse> {
      return queryService.coinbasePriceStates(request);
    },
    providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> {
      return queryService.providerPriceState(request);
    },
    oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.oracleModuleState(request);
    },
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> {
      return queryService.historicalPriceRecords(request);
    },
    oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> {
      return queryService.oracleVolatility(request);
    },
    oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse> {
      return queryService.oracleProvidersInfo(request);
    },
    oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> {
      return queryService.oracleProviderPrices(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseBandRelayersQuery<TData> extends ReactQueryParams<QueryBandRelayersResponse, TData> {
  request?: QueryBandRelayersRequest;
}
export interface UseBandPriceStatesQuery<TData> extends ReactQueryParams<QueryBandPriceStatesResponse, TData> {
  request?: QueryBandPriceStatesRequest;
}
export interface UseBandIBCPriceStatesQuery<TData> extends ReactQueryParams<QueryBandIBCPriceStatesResponse, TData> {
  request?: QueryBandIBCPriceStatesRequest;
}
export interface UsePriceFeedPriceStatesQuery<TData> extends ReactQueryParams<QueryPriceFeedPriceStatesResponse, TData> {
  request?: QueryPriceFeedPriceStatesRequest;
}
export interface UseCoinbasePriceStatesQuery<TData> extends ReactQueryParams<QueryCoinbasePriceStatesResponse, TData> {
  request?: QueryCoinbasePriceStatesRequest;
}
export interface UseProviderPriceStateQuery<TData> extends ReactQueryParams<QueryProviderPriceStateResponse, TData> {
  request: QueryProviderPriceStateRequest;
}
export interface UseOracleModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
  request?: QueryModuleStateRequest;
}
export interface UseHistoricalPriceRecordsQuery<TData> extends ReactQueryParams<QueryHistoricalPriceRecordsResponse, TData> {
  request: QueryHistoricalPriceRecordsRequest;
}
export interface UseOracleVolatilityQuery<TData> extends ReactQueryParams<QueryOracleVolatilityResponse, TData> {
  request: QueryOracleVolatilityRequest;
}
export interface UseOracleProvidersInfoQuery<TData> extends ReactQueryParams<QueryOracleProvidersInfoResponse, TData> {
  request?: QueryOracleProvidersInfoRequest;
}
export interface UseOracleProviderPricesQuery<TData> extends ReactQueryParams<QueryOracleProviderPricesResponse, TData> {
  request: QueryOracleProviderPricesRequest;
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
  const useBandRelayers = <TData = QueryBandRelayersResponse,>({
    request,
    options
  }: UseBandRelayersQuery<TData>) => {
    return useQuery<QueryBandRelayersResponse, Error, TData>(["bandRelayersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bandRelayers(request);
    }, options);
  };
  const useBandPriceStates = <TData = QueryBandPriceStatesResponse,>({
    request,
    options
  }: UseBandPriceStatesQuery<TData>) => {
    return useQuery<QueryBandPriceStatesResponse, Error, TData>(["bandPriceStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bandPriceStates(request);
    }, options);
  };
  const useBandIBCPriceStates = <TData = QueryBandIBCPriceStatesResponse,>({
    request,
    options
  }: UseBandIBCPriceStatesQuery<TData>) => {
    return useQuery<QueryBandIBCPriceStatesResponse, Error, TData>(["bandIBCPriceStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bandIBCPriceStates(request);
    }, options);
  };
  const usePriceFeedPriceStates = <TData = QueryPriceFeedPriceStatesResponse,>({
    request,
    options
  }: UsePriceFeedPriceStatesQuery<TData>) => {
    return useQuery<QueryPriceFeedPriceStatesResponse, Error, TData>(["priceFeedPriceStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.priceFeedPriceStates(request);
    }, options);
  };
  const useCoinbasePriceStates = <TData = QueryCoinbasePriceStatesResponse,>({
    request,
    options
  }: UseCoinbasePriceStatesQuery<TData>) => {
    return useQuery<QueryCoinbasePriceStatesResponse, Error, TData>(["coinbasePriceStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.coinbasePriceStates(request);
    }, options);
  };
  const useProviderPriceState = <TData = QueryProviderPriceStateResponse,>({
    request,
    options
  }: UseProviderPriceStateQuery<TData>) => {
    return useQuery<QueryProviderPriceStateResponse, Error, TData>(["providerPriceStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.providerPriceState(request);
    }, options);
  };
  const useOracleModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseOracleModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["oracleModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.oracleModuleState(request);
    }, options);
  };
  const useHistoricalPriceRecords = <TData = QueryHistoricalPriceRecordsResponse,>({
    request,
    options
  }: UseHistoricalPriceRecordsQuery<TData>) => {
    return useQuery<QueryHistoricalPriceRecordsResponse, Error, TData>(["historicalPriceRecordsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.historicalPriceRecords(request);
    }, options);
  };
  const useOracleVolatility = <TData = QueryOracleVolatilityResponse,>({
    request,
    options
  }: UseOracleVolatilityQuery<TData>) => {
    return useQuery<QueryOracleVolatilityResponse, Error, TData>(["oracleVolatilityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.oracleVolatility(request);
    }, options);
  };
  const useOracleProvidersInfo = <TData = QueryOracleProvidersInfoResponse,>({
    request,
    options
  }: UseOracleProvidersInfoQuery<TData>) => {
    return useQuery<QueryOracleProvidersInfoResponse, Error, TData>(["oracleProvidersInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.oracleProvidersInfo(request);
    }, options);
  };
  const useOracleProviderPrices = <TData = QueryOracleProviderPricesResponse,>({
    request,
    options
  }: UseOracleProviderPricesQuery<TData>) => {
    return useQuery<QueryOracleProviderPricesResponse, Error, TData>(["oracleProviderPricesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.oracleProviderPrices(request);
    }, options);
  };
  return {
    /** Retrieves oracle params */useParams,
    /** Retrieves the band relayers */useBandRelayers,
    /** Retrieves the state for all band price feeds */useBandPriceStates,
    /** Retrieves the state for all band ibc price feeds */useBandIBCPriceStates,
    /** Retrieves the state for all price feeds */usePriceFeedPriceStates,
    /** Retrieves the state for all coinbase price feeds */useCoinbasePriceStates,
    /** Retrieves the state for all provider price feeds */useProviderPriceState,
    /** Retrieves the entire oracle module's state */useOracleModuleState,
    /** Retrieves historical price records for a given OracleType and Symbol */useHistoricalPriceRecords,
    /** Retrieves mixed volatility value for the specified pair of base/quote */useOracleVolatility,
    useOracleProvidersInfo,
    useOracleProviderPrices
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
  class QueryBandRelayersStore {
    store = new QueryStore<QueryBandRelayersRequest, QueryBandRelayersResponse>(queryService?.bandRelayers);
    bandRelayers(request: QueryBandRelayersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBandPriceStatesStore {
    store = new QueryStore<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>(queryService?.bandPriceStates);
    bandPriceStates(request: QueryBandPriceStatesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBandIBCPriceStatesStore {
    store = new QueryStore<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>(queryService?.bandIBCPriceStates);
    bandIBCPriceStates(request: QueryBandIBCPriceStatesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPriceFeedPriceStatesStore {
    store = new QueryStore<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>(queryService?.priceFeedPriceStates);
    priceFeedPriceStates(request: QueryPriceFeedPriceStatesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCoinbasePriceStatesStore {
    store = new QueryStore<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>(queryService?.coinbasePriceStates);
    coinbasePriceStates(request: QueryCoinbasePriceStatesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProviderPriceStateStore {
    store = new QueryStore<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>(queryService?.providerPriceState);
    providerPriceState(request: QueryProviderPriceStateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOracleModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.oracleModuleState);
    oracleModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryHistoricalPriceRecordsStore {
    store = new QueryStore<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>(queryService?.historicalPriceRecords);
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOracleVolatilityStore {
    store = new QueryStore<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>(queryService?.oracleVolatility);
    oracleVolatility(request: QueryOracleVolatilityRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOracleProvidersInfoStore {
    store = new QueryStore<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>(queryService?.oracleProvidersInfo);
    oracleProvidersInfo(request: QueryOracleProvidersInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOracleProviderPricesStore {
    store = new QueryStore<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>(queryService?.oracleProviderPrices);
    oracleProviderPrices(request: QueryOracleProviderPricesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Retrieves oracle params */QueryParamsStore,
    /** Retrieves the band relayers */QueryBandRelayersStore,
    /** Retrieves the state for all band price feeds */QueryBandPriceStatesStore,
    /** Retrieves the state for all band ibc price feeds */QueryBandIBCPriceStatesStore,
    /** Retrieves the state for all price feeds */QueryPriceFeedPriceStatesStore,
    /** Retrieves the state for all coinbase price feeds */QueryCoinbasePriceStatesStore,
    /** Retrieves the state for all provider price feeds */QueryProviderPriceStateStore,
    /** Retrieves the entire oracle module's state */QueryOracleModuleStateStore,
    /** Retrieves historical price records for a given OracleType and Symbol */QueryHistoricalPriceRecordsStore,
    /** Retrieves mixed volatility value for the specified pair of base/quote */QueryOracleVolatilityStore,
    QueryOracleProvidersInfoStore,
    QueryOracleProviderPricesStore
  };
};