import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Bitcannaid by id. */
  bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
  /** Queries a list of Bitcannaid items. */
  bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
  /** Queries a Supplychain by id. */
  supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
  /** Queries a list of Supplychain items. */
  supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.bitcannaid = this.bitcannaid.bind(this);
    this.bitcannaidAll = this.bitcannaidAll.bind(this);
    this.supplychain = this.supplychain.bind(this);
    this.supplychainAll = this.supplychainAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
    const data = QueryGetBitcannaidRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Bitcannaid", data);
    return promise.then(data => QueryGetBitcannaidResponse.decode(new BinaryReader(data)));
  }
  bitcannaidAll(request: QueryAllBitcannaidRequest = {
    pagination: undefined
  }): Promise<QueryAllBitcannaidResponse> {
    const data = QueryAllBitcannaidRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "BitcannaidAll", data);
    return promise.then(data => QueryAllBitcannaidResponse.decode(new BinaryReader(data)));
  }
  supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
    const data = QueryGetSupplychainRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Supplychain", data);
    return promise.then(data => QueryGetSupplychainResponse.decode(new BinaryReader(data)));
  }
  supplychainAll(request: QueryAllSupplychainRequest = {
    pagination: undefined
  }): Promise<QueryAllSupplychainResponse> {
    const data = QueryAllSupplychainRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "SupplychainAll", data);
    return promise.then(data => QueryAllSupplychainResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
      return queryService.bitcannaid(request);
    },
    bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse> {
      return queryService.bitcannaidAll(request);
    },
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
      return queryService.supplychain(request);
    },
    supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse> {
      return queryService.supplychainAll(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseBitcannaidQuery<TData> extends ReactQueryParams<QueryGetBitcannaidResponse, TData> {
  request: QueryGetBitcannaidRequest;
}
export interface UseBitcannaidAllQuery<TData> extends ReactQueryParams<QueryAllBitcannaidResponse, TData> {
  request?: QueryAllBitcannaidRequest;
}
export interface UseSupplychainQuery<TData> extends ReactQueryParams<QueryGetSupplychainResponse, TData> {
  request: QueryGetSupplychainRequest;
}
export interface UseSupplychainAllQuery<TData> extends ReactQueryParams<QueryAllSupplychainResponse, TData> {
  request?: QueryAllSupplychainRequest;
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
  const useBitcannaid = <TData = QueryGetBitcannaidResponse,>({
    request,
    options
  }: UseBitcannaidQuery<TData>) => {
    return useQuery<QueryGetBitcannaidResponse, Error, TData>(["bitcannaidQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bitcannaid(request);
    }, options);
  };
  const useBitcannaidAll = <TData = QueryAllBitcannaidResponse,>({
    request,
    options
  }: UseBitcannaidAllQuery<TData>) => {
    return useQuery<QueryAllBitcannaidResponse, Error, TData>(["bitcannaidAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bitcannaidAll(request);
    }, options);
  };
  const useSupplychain = <TData = QueryGetSupplychainResponse,>({
    request,
    options
  }: UseSupplychainQuery<TData>) => {
    return useQuery<QueryGetSupplychainResponse, Error, TData>(["supplychainQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplychain(request);
    }, options);
  };
  const useSupplychainAll = <TData = QueryAllSupplychainResponse,>({
    request,
    options
  }: UseSupplychainAllQuery<TData>) => {
    return useQuery<QueryAllSupplychainResponse, Error, TData>(["supplychainAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplychainAll(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** Queries a Bitcannaid by id. */useBitcannaid,
    /** Queries a list of Bitcannaid items. */useBitcannaidAll,
    /** Queries a Supplychain by id. */useSupplychain,
    /** Queries a list of Supplychain items. */useSupplychainAll
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
  class QueryBitcannaidStore {
    store = new QueryStore<QueryGetBitcannaidRequest, QueryGetBitcannaidResponse>(queryService?.bitcannaid);
    bitcannaid(request: QueryGetBitcannaidRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBitcannaidAllStore {
    store = new QueryStore<QueryAllBitcannaidRequest, QueryAllBitcannaidResponse>(queryService?.bitcannaidAll);
    bitcannaidAll(request: QueryAllBitcannaidRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySupplychainStore {
    store = new QueryStore<QueryGetSupplychainRequest, QueryGetSupplychainResponse>(queryService?.supplychain);
    supplychain(request: QueryGetSupplychainRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySupplychainAllStore {
    store = new QueryStore<QueryAllSupplychainRequest, QueryAllSupplychainResponse>(queryService?.supplychainAll);
    supplychainAll(request: QueryAllSupplychainRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Parameters queries the parameters of the module. */QueryParamsStore,
    /** Queries a Bitcannaid by id. */QueryBitcannaidStore,
    /** Queries a list of Bitcannaid items. */QueryBitcannaidAllStore,
    /** Queries a Supplychain by id. */QuerySupplychainStore,
    /** Queries a list of Supplychain items. */QuerySupplychainAllStore
  };
};