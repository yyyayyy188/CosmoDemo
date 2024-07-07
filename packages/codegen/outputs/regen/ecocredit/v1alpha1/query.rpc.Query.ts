import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryClassesRequest, QueryClassesResponse, QueryClassInfoRequest, QueryClassInfoResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchInfoRequest, QueryBatchInfoResponse, QueryBalanceRequest, QueryBalanceResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Msg is the regen.ecocredit.v1alpha1 Query service. */
export interface Query {
  /** Classes queries for all credit classes with pagination. */
  classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
  /** ClassInfo queries for information on a credit class. */
  classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
  /** Batches queries for all batches in the given credit class with pagination. */
  batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
  /** BatchInfo queries for information on a credit batch. */
  batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
  /**
   * Balance queries the balance (both tradable and retired) of a given credit
   * batch for a given account.
   */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Supply queries the tradable and retired supply of a credit batch. */
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * CreditTypes returns the list of allowed types that credit classes can have.
   * See Types/CreditType for more details.
   */
  creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
  /** Params queries the ecocredit module parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.classes = this.classes.bind(this);
    this.classInfo = this.classInfo.bind(this);
    this.batches = this.batches.bind(this);
    this.batchInfo = this.batchInfo.bind(this);
    this.balance = this.balance.bind(this);
    this.supply = this.supply.bind(this);
    this.creditTypes = this.creditTypes.bind(this);
    this.params = this.params.bind(this);
  }
  classes(request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  }
  classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
    const data = QueryClassInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "ClassInfo", data);
    return promise.then(data => QueryClassInfoResponse.decode(new BinaryReader(data)));
  }
  batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
    const data = QueryBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Batches", data);
    return promise.then(data => QueryBatchesResponse.decode(new BinaryReader(data)));
  }
  batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
    const data = QueryBatchInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "BatchInfo", data);
    return promise.then(data => QueryBatchInfoResponse.decode(new BinaryReader(data)));
  }
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  creditTypes(request: QueryCreditTypesRequest = {}): Promise<QueryCreditTypesResponse> {
    const data = QueryCreditTypesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "CreditTypes", data);
    return promise.then(data => QueryCreditTypesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse> {
      return queryService.classes(request);
    },
    classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
      return queryService.classInfo(request);
    },
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
      return queryService.batches(request);
    },
    batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
      return queryService.batchInfo(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse> {
      return queryService.creditTypes(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};
export interface UseClassesQuery<TData> extends ReactQueryParams<QueryClassesResponse, TData> {
  request?: QueryClassesRequest;
}
export interface UseClassInfoQuery<TData> extends ReactQueryParams<QueryClassInfoResponse, TData> {
  request: QueryClassInfoRequest;
}
export interface UseBatchesQuery<TData> extends ReactQueryParams<QueryBatchesResponse, TData> {
  request: QueryBatchesRequest;
}
export interface UseBatchInfoQuery<TData> extends ReactQueryParams<QueryBatchInfoResponse, TData> {
  request: QueryBatchInfoRequest;
}
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}
export interface UseSupplyQuery<TData> extends ReactQueryParams<QuerySupplyResponse, TData> {
  request: QuerySupplyRequest;
}
export interface UseCreditTypesQuery<TData> extends ReactQueryParams<QueryCreditTypesResponse, TData> {
  request?: QueryCreditTypesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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
  const useClasses = <TData = QueryClassesResponse,>({
    request,
    options
  }: UseClassesQuery<TData>) => {
    return useQuery<QueryClassesResponse, Error, TData>(["classesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classes(request);
    }, options);
  };
  const useClassInfo = <TData = QueryClassInfoResponse,>({
    request,
    options
  }: UseClassInfoQuery<TData>) => {
    return useQuery<QueryClassInfoResponse, Error, TData>(["classInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classInfo(request);
    }, options);
  };
  const useBatches = <TData = QueryBatchesResponse,>({
    request,
    options
  }: UseBatchesQuery<TData>) => {
    return useQuery<QueryBatchesResponse, Error, TData>(["batchesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batches(request);
    }, options);
  };
  const useBatchInfo = <TData = QueryBatchInfoResponse,>({
    request,
    options
  }: UseBatchInfoQuery<TData>) => {
    return useQuery<QueryBatchInfoResponse, Error, TData>(["batchInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batchInfo(request);
    }, options);
  };
  const useBalance = <TData = QueryBalanceResponse,>({
    request,
    options
  }: UseBalanceQuery<TData>) => {
    return useQuery<QueryBalanceResponse, Error, TData>(["balanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };
  const useSupply = <TData = QuerySupplyResponse,>({
    request,
    options
  }: UseSupplyQuery<TData>) => {
    return useQuery<QuerySupplyResponse, Error, TData>(["supplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supply(request);
    }, options);
  };
  const useCreditTypes = <TData = QueryCreditTypesResponse,>({
    request,
    options
  }: UseCreditTypesQuery<TData>) => {
    return useQuery<QueryCreditTypesResponse, Error, TData>(["creditTypesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.creditTypes(request);
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
    /** Classes queries for all credit classes with pagination. */useClasses,
    /** ClassInfo queries for information on a credit class. */useClassInfo,
    /** Batches queries for all batches in the given credit class with pagination. */useBatches,
    /** BatchInfo queries for information on a credit batch. */useBatchInfo,
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    useBalance,
    /** Supply queries the tradable and retired supply of a credit batch. */useSupply,
    /**
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    useCreditTypes,
    /** Params queries the ecocredit module parameters. */useParams
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryClassesStore {
    store = new QueryStore<QueryClassesRequest, QueryClassesResponse>(queryService?.classes);
    classes(request: QueryClassesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClassInfoStore {
    store = new QueryStore<QueryClassInfoRequest, QueryClassInfoResponse>(queryService?.classInfo);
    classInfo(request: QueryClassInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchesStore {
    store = new QueryStore<QueryBatchesRequest, QueryBatchesResponse>(queryService?.batches);
    batches(request: QueryBatchesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchInfoStore {
    store = new QueryStore<QueryBatchInfoRequest, QueryBatchInfoResponse>(queryService?.batchInfo);
    batchInfo(request: QueryBatchInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBalanceStore {
    store = new QueryStore<QueryBalanceRequest, QueryBalanceResponse>(queryService?.balance);
    balance(request: QueryBalanceRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySupplyStore {
    store = new QueryStore<QuerySupplyRequest, QuerySupplyResponse>(queryService?.supply);
    supply(request: QuerySupplyRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCreditTypesStore {
    store = new QueryStore<QueryCreditTypesRequest, QueryCreditTypesResponse>(queryService?.creditTypes);
    creditTypes(request: QueryCreditTypesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Classes queries for all credit classes with pagination. */QueryClassesStore,
    /** ClassInfo queries for information on a credit class. */QueryClassInfoStore,
    /** Batches queries for all batches in the given credit class with pagination. */QueryBatchesStore,
    /** BatchInfo queries for information on a credit batch. */QueryBatchInfoStore,
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    QueryBalanceStore,
    /** Supply queries the tradable and retired supply of a credit batch. */QuerySupplyStore,
    /**
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    QueryCreditTypesStore,
    /** Params queries the ecocredit module parameters. */QueryParamsStore
  };
};