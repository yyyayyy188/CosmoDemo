import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Estimates swap amount out given in. */
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  /** Estimates swap amount in given out. */
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  numPools(request: NumPoolsRequest = {}): Promise<NumPoolsResponse> {
    const data = NumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "NumPools", data);
    return promise.then(data => NumPoolsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    },
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse> {
      return queryService.numPools(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<ParamsResponse, TData> {
  request?: ParamsRequest;
}
export interface UseEstimateSwapExactAmountInQuery<TData> extends ReactQueryParams<EstimateSwapExactAmountInResponse, TData> {
  request: EstimateSwapExactAmountInRequest;
}
export interface UseEstimateSwapExactAmountOutQuery<TData> extends ReactQueryParams<EstimateSwapExactAmountOutResponse, TData> {
  request: EstimateSwapExactAmountOutRequest;
}
export interface UseNumPoolsQuery<TData> extends ReactQueryParams<NumPoolsResponse, TData> {
  request?: NumPoolsRequest;
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
  const useParams = <TData = ParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<ParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useEstimateSwapExactAmountIn = <TData = EstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInQuery<TData>) => {
    return useQuery<EstimateSwapExactAmountInResponse, Error, TData>(["estimateSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountIn(request);
    }, options);
  };
  const useEstimateSwapExactAmountOut = <TData = EstimateSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountOutQuery<TData>) => {
    return useQuery<EstimateSwapExactAmountOutResponse, Error, TData>(["estimateSwapExactAmountOutQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountOut(request);
    }, options);
  };
  const useNumPools = <TData = NumPoolsResponse,>({
    request,
    options
  }: UseNumPoolsQuery<TData>) => {
    return useQuery<NumPoolsResponse, Error, TData>(["numPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.numPools(request);
    }, options);
  };
  return {
    useParams,
    /** Estimates swap amount out given in. */useEstimateSwapExactAmountIn,
    /** Estimates swap amount in given out. */useEstimateSwapExactAmountOut,
    useNumPools
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<ParamsRequest, ParamsResponse>(queryService?.params);
    params(request: ParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountInStore {
    store = new QueryStore<EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse>(queryService?.estimateSwapExactAmountIn);
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountOutStore {
    store = new QueryStore<EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse>(queryService?.estimateSwapExactAmountOut);
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest) {
      return this.store.getData(request);
    }
  }
  class QueryNumPoolsStore {
    store = new QueryStore<NumPoolsRequest, NumPoolsResponse>(queryService?.numPools);
    numPools(request: NumPoolsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    QueryParamsStore,
    /** Estimates swap amount out given in. */QueryEstimateSwapExactAmountInStore,
    /** Estimates swap amount in given out. */QueryEstimateSwapExactAmountOutStore,
    QueryNumPoolsStore
  };
};