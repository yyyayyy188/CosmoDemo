import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves wasmx params */
  wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
  /** Retrieves the entire wasmx module's state */
  wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.wasmxParams = this.wasmxParams.bind(this);
    this.wasmxModuleState = this.wasmxModuleState.bind(this);
  }
  wasmxParams(request: QueryWasmxParamsRequest = {}): Promise<QueryWasmxParamsResponse> {
    const data = QueryWasmxParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxParams", data);
    return promise.then(data => QueryWasmxParamsResponse.decode(new BinaryReader(data)));
  }
  wasmxModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse> {
      return queryService.wasmxParams(request);
    },
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.wasmxModuleState(request);
    }
  };
};
export interface UseWasmxParamsQuery<TData> extends ReactQueryParams<QueryWasmxParamsResponse, TData> {
  request?: QueryWasmxParamsRequest;
}
export interface UseWasmxModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
  request?: QueryModuleStateRequest;
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
  const useWasmxParams = <TData = QueryWasmxParamsResponse,>({
    request,
    options
  }: UseWasmxParamsQuery<TData>) => {
    return useQuery<QueryWasmxParamsResponse, Error, TData>(["wasmxParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.wasmxParams(request);
    }, options);
  };
  const useWasmxModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseWasmxModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["wasmxModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.wasmxModuleState(request);
    }, options);
  };
  return {
    /** Retrieves wasmx params */useWasmxParams,
    /** Retrieves the entire wasmx module's state */useWasmxModuleState
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryWasmxParamsStore {
    store = new QueryStore<QueryWasmxParamsRequest, QueryWasmxParamsResponse>(queryService?.wasmxParams);
    wasmxParams(request: QueryWasmxParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryWasmxModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.wasmxModuleState);
    wasmxModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Retrieves wasmx params */QueryWasmxParamsStore,
    /** Retrieves the entire wasmx module's state */QueryWasmxModuleStateStore
  };
};