import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Providers queries providers */
  providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** Provider queries provider details */
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.providers = this.providers.bind(this);
    this.provider = this.provider.bind(this);
  }
  providers(request: QueryProvidersRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
  }
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Query", "Provider", data);
    return promise.then(data => QueryProviderResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse> {
      return queryService.providers(request);
    },
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
      return queryService.provider(request);
    }
  };
};
export interface UseProvidersQuery<TData> extends ReactQueryParams<QueryProvidersResponse, TData> {
  request?: QueryProvidersRequest;
}
export interface UseProviderQuery<TData> extends ReactQueryParams<QueryProviderResponse, TData> {
  request: QueryProviderRequest;
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
  const useProviders = <TData = QueryProvidersResponse,>({
    request,
    options
  }: UseProvidersQuery<TData>) => {
    return useQuery<QueryProvidersResponse, Error, TData>(["providersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.providers(request);
    }, options);
  };
  const useProvider = <TData = QueryProviderResponse,>({
    request,
    options
  }: UseProviderQuery<TData>) => {
    return useQuery<QueryProviderResponse, Error, TData>(["providerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.provider(request);
    }, options);
  };
  return {
    /** Providers queries providers */useProviders,
    /** Provider queries provider details */useProvider
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryProvidersStore {
    store = new QueryStore<QueryProvidersRequest, QueryProvidersResponse>(queryService?.providers);
    providers(request: QueryProvidersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProviderStore {
    store = new QueryStore<QueryProviderRequest, QueryProviderResponse>(queryService?.provider);
    provider(request: QueryProviderRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Providers queries providers */QueryProvidersStore,
    /** Provider queries provider details */QueryProviderStore
  };
};