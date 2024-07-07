import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves insurance params */
  insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
  /** Retrieves individual insurance fund information from market id */
  insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
  /** Retrieves all insurance funds */
  insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
  /** Retrives the value of insurance fund share token at current price (not pending redemption) */
  estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
  /** Retrieves pending redemptions' share token at current price */
  pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
  /** Retrieves the entire insurance module's state */
  insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.insuranceParams = this.insuranceParams.bind(this);
    this.insuranceFund = this.insuranceFund.bind(this);
    this.insuranceFunds = this.insuranceFunds.bind(this);
    this.estimatedRedemptions = this.estimatedRedemptions.bind(this);
    this.pendingRedemptions = this.pendingRedemptions.bind(this);
    this.insuranceModuleState = this.insuranceModuleState.bind(this);
  }
  insuranceParams(request: QueryInsuranceParamsRequest = {}): Promise<QueryInsuranceParamsResponse> {
    const data = QueryInsuranceParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceParams", data);
    return promise.then(data => QueryInsuranceParamsResponse.decode(new BinaryReader(data)));
  }
  insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> {
    const data = QueryInsuranceFundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFund", data);
    return promise.then(data => QueryInsuranceFundResponse.decode(new BinaryReader(data)));
  }
  insuranceFunds(request: QueryInsuranceFundsRequest = {}): Promise<QueryInsuranceFundsResponse> {
    const data = QueryInsuranceFundsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFunds", data);
    return promise.then(data => QueryInsuranceFundsResponse.decode(new BinaryReader(data)));
  }
  estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> {
    const data = QueryEstimatedRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "EstimatedRedemptions", data);
    return promise.then(data => QueryEstimatedRedemptionsResponse.decode(new BinaryReader(data)));
  }
  pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> {
    const data = QueryPendingRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "PendingRedemptions", data);
    return promise.then(data => QueryPendingRedemptionsResponse.decode(new BinaryReader(data)));
  }
  insuranceModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse> {
      return queryService.insuranceParams(request);
    },
    insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> {
      return queryService.insuranceFund(request);
    },
    insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse> {
      return queryService.insuranceFunds(request);
    },
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> {
      return queryService.estimatedRedemptions(request);
    },
    pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> {
      return queryService.pendingRedemptions(request);
    },
    insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.insuranceModuleState(request);
    }
  };
};
export interface UseInsuranceParamsQuery<TData> extends ReactQueryParams<QueryInsuranceParamsResponse, TData> {
  request?: QueryInsuranceParamsRequest;
}
export interface UseInsuranceFundQuery<TData> extends ReactQueryParams<QueryInsuranceFundResponse, TData> {
  request: QueryInsuranceFundRequest;
}
export interface UseInsuranceFundsQuery<TData> extends ReactQueryParams<QueryInsuranceFundsResponse, TData> {
  request?: QueryInsuranceFundsRequest;
}
export interface UseEstimatedRedemptionsQuery<TData> extends ReactQueryParams<QueryEstimatedRedemptionsResponse, TData> {
  request: QueryEstimatedRedemptionsRequest;
}
export interface UsePendingRedemptionsQuery<TData> extends ReactQueryParams<QueryPendingRedemptionsResponse, TData> {
  request: QueryPendingRedemptionsRequest;
}
export interface UseInsuranceModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
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
  const useInsuranceParams = <TData = QueryInsuranceParamsResponse,>({
    request,
    options
  }: UseInsuranceParamsQuery<TData>) => {
    return useQuery<QueryInsuranceParamsResponse, Error, TData>(["insuranceParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.insuranceParams(request);
    }, options);
  };
  const useInsuranceFund = <TData = QueryInsuranceFundResponse,>({
    request,
    options
  }: UseInsuranceFundQuery<TData>) => {
    return useQuery<QueryInsuranceFundResponse, Error, TData>(["insuranceFundQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.insuranceFund(request);
    }, options);
  };
  const useInsuranceFunds = <TData = QueryInsuranceFundsResponse,>({
    request,
    options
  }: UseInsuranceFundsQuery<TData>) => {
    return useQuery<QueryInsuranceFundsResponse, Error, TData>(["insuranceFundsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.insuranceFunds(request);
    }, options);
  };
  const useEstimatedRedemptions = <TData = QueryEstimatedRedemptionsResponse,>({
    request,
    options
  }: UseEstimatedRedemptionsQuery<TData>) => {
    return useQuery<QueryEstimatedRedemptionsResponse, Error, TData>(["estimatedRedemptionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimatedRedemptions(request);
    }, options);
  };
  const usePendingRedemptions = <TData = QueryPendingRedemptionsResponse,>({
    request,
    options
  }: UsePendingRedemptionsQuery<TData>) => {
    return useQuery<QueryPendingRedemptionsResponse, Error, TData>(["pendingRedemptionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pendingRedemptions(request);
    }, options);
  };
  const useInsuranceModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseInsuranceModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["insuranceModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.insuranceModuleState(request);
    }, options);
  };
  return {
    /** Retrieves insurance params */useInsuranceParams,
    /** Retrieves individual insurance fund information from market id */useInsuranceFund,
    /** Retrieves all insurance funds */useInsuranceFunds,
    /** Retrives the value of insurance fund share token at current price (not pending redemption) */useEstimatedRedemptions,
    /** Retrieves pending redemptions' share token at current price */usePendingRedemptions,
    /** Retrieves the entire insurance module's state */useInsuranceModuleState
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryInsuranceParamsStore {
    store = new QueryStore<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>(queryService?.insuranceParams);
    insuranceParams(request: QueryInsuranceParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryInsuranceFundStore {
    store = new QueryStore<QueryInsuranceFundRequest, QueryInsuranceFundResponse>(queryService?.insuranceFund);
    insuranceFund(request: QueryInsuranceFundRequest) {
      return this.store.getData(request);
    }
  }
  class QueryInsuranceFundsStore {
    store = new QueryStore<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>(queryService?.insuranceFunds);
    insuranceFunds(request: QueryInsuranceFundsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimatedRedemptionsStore {
    store = new QueryStore<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>(queryService?.estimatedRedemptions);
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPendingRedemptionsStore {
    store = new QueryStore<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>(queryService?.pendingRedemptions);
    pendingRedemptions(request: QueryPendingRedemptionsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryInsuranceModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.insuranceModuleState);
    insuranceModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Retrieves insurance params */QueryInsuranceParamsStore,
    /** Retrieves individual insurance fund information from market id */QueryInsuranceFundStore,
    /** Retrieves all insurance funds */QueryInsuranceFundsStore,
    /** Retrives the value of insurance fund share token at current price (not pending redemption) */QueryEstimatedRedemptionsStore,
    /** Retrieves pending redemptions' share token at current price */QueryPendingRedemptionsStore,
    /** Retrieves the entire insurance module's state */QueryInsuranceModuleStateStore
  };
};