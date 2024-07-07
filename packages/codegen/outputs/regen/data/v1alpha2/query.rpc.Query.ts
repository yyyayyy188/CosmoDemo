import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryByHashRequest, QueryByHashResponse, QueryBySignerRequest, QueryBySignerResponse } from "./query";
/** Query is the regen.data.v1alpha2 Query service */
export interface Query {
  /** ByHash queries data based on its ContentHash. */
  byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
  /** BySigner queries data based on signers. */
  bySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.byHash = this.byHash.bind(this);
    this.bySigner = this.bySigner.bind(this);
  }
  byHash(request: QueryByHashRequest): Promise<QueryByHashResponse> {
    const data = QueryByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1alpha2.Query", "ByHash", data);
    return promise.then(data => QueryByHashResponse.decode(new BinaryReader(data)));
  }
  bySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse> {
    const data = QueryBySignerRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1alpha2.Query", "BySigner", data);
    return promise.then(data => QueryBySignerResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse> {
      return queryService.byHash(request);
    },
    bySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse> {
      return queryService.bySigner(request);
    }
  };
};
export interface UseByHashQuery<TData> extends ReactQueryParams<QueryByHashResponse, TData> {
  request: QueryByHashRequest;
}
export interface UseBySignerQuery<TData> extends ReactQueryParams<QueryBySignerResponse, TData> {
  request: QueryBySignerRequest;
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
  const useByHash = <TData = QueryByHashResponse,>({
    request,
    options
  }: UseByHashQuery<TData>) => {
    return useQuery<QueryByHashResponse, Error, TData>(["byHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.byHash(request);
    }, options);
  };
  const useBySigner = <TData = QueryBySignerResponse,>({
    request,
    options
  }: UseBySignerQuery<TData>) => {
    return useQuery<QueryBySignerResponse, Error, TData>(["bySignerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bySigner(request);
    }, options);
  };
  return {
    /** ByHash queries data based on its ContentHash. */useByHash,
    /** BySigner queries data based on signers. */useBySigner
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryByHashStore {
    store = new QueryStore<QueryByHashRequest, QueryByHashResponse>(queryService?.byHash);
    byHash(request: QueryByHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBySignerStore {
    store = new QueryStore<QueryBySignerRequest, QueryBySignerResponse>(queryService?.bySigner);
    bySigner(request: QueryBySignerRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** ByHash queries data based on its ContentHash. */QueryByHashStore,
    /** BySigner queries data based on signers. */QueryBySignerStore
  };
};