import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryClassesRequest, QueryClassesResponse, QueryClassesByAdminRequest, QueryClassesByAdminResponse, QueryClassRequest, QueryClassResponse, QueryClassIssuersRequest, QueryClassIssuersResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponse, QueryProjectRequest, QueryProjectResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponse, QueryBatchesByClassRequest, QueryBatchesByClassResponse, QueryBatchRequest, QueryBatchResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesRequest, QueryBalancesResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Msg is the regen.ecocredit.v1 Query service. */
export interface Query {
  /** Classes queries for all credit classes with pagination. */
  classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
  /**
   * ClassesByAdmin queries for all credit classes with a specific admin
   * address.
   */
  classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
  /** Class queries for information on a credit class. */
  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** ClassIssuers queries for the addresses of the issuers for a credit class. */
  classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
  /** Projects queries for all projects within a class with pagination. */
  projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse>;
  /**
   * ProjectsByReferenceId queries for all projects by reference-id with
   * pagination.
   */
  projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
  /** Project queries for information on a project. */
  project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
  /** Batches queries for all batches in the given project with pagination. */
  batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
  /** BatchesByIssuer queries all batches issued from a given issuer address. */
  batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
  /** BatchesByClass queries all batches issued from a given class. */
  batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
  /** Batch queries for information on a credit batch. */
  batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
  /**
   * Balance queries the balance (both tradable and retired) of a given credit
   * batch for a given account.
   */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Balances queries all credit balances the given account holds. */
  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
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
    this.classesByAdmin = this.classesByAdmin.bind(this);
    this.class = this.class.bind(this);
    this.classIssuers = this.classIssuers.bind(this);
    this.projects = this.projects.bind(this);
    this.projectsByReferenceId = this.projectsByReferenceId.bind(this);
    this.project = this.project.bind(this);
    this.batches = this.batches.bind(this);
    this.batchesByIssuer = this.batchesByIssuer.bind(this);
    this.batchesByClass = this.batchesByClass.bind(this);
    this.batch = this.batch.bind(this);
    this.balance = this.balance.bind(this);
    this.balances = this.balances.bind(this);
    this.supply = this.supply.bind(this);
    this.creditTypes = this.creditTypes.bind(this);
    this.params = this.params.bind(this);
  }
  classes(request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  }
  classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse> {
    const data = QueryClassesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassesByAdmin", data);
    return promise.then(data => QueryClassesByAdminResponse.decode(new BinaryReader(data)));
  }
  class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
  }
  classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse> {
    const data = QueryClassIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassIssuers", data);
    return promise.then(data => QueryClassIssuersResponse.decode(new BinaryReader(data)));
  }
  projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse> {
    const data = QueryProjectsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Projects", data);
    return promise.then(data => QueryProjectsResponse.decode(new BinaryReader(data)));
  }
  projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse> {
    const data = QueryProjectsByReferenceIdRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByReferenceId", data);
    return promise.then(data => QueryProjectsByReferenceIdResponse.decode(new BinaryReader(data)));
  }
  project(request: QueryProjectRequest): Promise<QueryProjectResponse> {
    const data = QueryProjectRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Project", data);
    return promise.then(data => QueryProjectResponse.decode(new BinaryReader(data)));
  }
  batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
    const data = QueryBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batches", data);
    return promise.then(data => QueryBatchesResponse.decode(new BinaryReader(data)));
  }
  batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse> {
    const data = QueryBatchesByIssuerRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByIssuer", data);
    return promise.then(data => QueryBatchesByIssuerResponse.decode(new BinaryReader(data)));
  }
  batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse> {
    const data = QueryBatchesByClassRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByClass", data);
    return promise.then(data => QueryBatchesByClassResponse.decode(new BinaryReader(data)));
  }
  batch(request: QueryBatchRequest): Promise<QueryBatchResponse> {
    const data = QueryBatchRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batch", data);
    return promise.then(data => QueryBatchResponse.decode(new BinaryReader(data)));
  }
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balances", data);
    return promise.then(data => QueryBalancesResponse.decode(new BinaryReader(data)));
  }
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  creditTypes(request: QueryCreditTypesRequest = {}): Promise<QueryCreditTypesResponse> {
    const data = QueryCreditTypesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditTypes", data);
    return promise.then(data => QueryCreditTypesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Query", "Params", data);
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
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse> {
      return queryService.classesByAdmin(request);
    },
    class(request: QueryClassRequest): Promise<QueryClassResponse> {
      return queryService.class(request);
    },
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse> {
      return queryService.classIssuers(request);
    },
    projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse> {
      return queryService.projects(request);
    },
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse> {
      return queryService.projectsByReferenceId(request);
    },
    project(request: QueryProjectRequest): Promise<QueryProjectResponse> {
      return queryService.project(request);
    },
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
      return queryService.batches(request);
    },
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse> {
      return queryService.batchesByIssuer(request);
    },
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse> {
      return queryService.batchesByClass(request);
    },
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse> {
      return queryService.batch(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
      return queryService.balances(request);
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
export interface UseClassesByAdminQuery<TData> extends ReactQueryParams<QueryClassesByAdminResponse, TData> {
  request: QueryClassesByAdminRequest;
}
export interface UseClassQuery<TData> extends ReactQueryParams<QueryClassResponse, TData> {
  request: QueryClassRequest;
}
export interface UseClassIssuersQuery<TData> extends ReactQueryParams<QueryClassIssuersResponse, TData> {
  request: QueryClassIssuersRequest;
}
export interface UseProjectsQuery<TData> extends ReactQueryParams<QueryProjectsResponse, TData> {
  request: QueryProjectsRequest;
}
export interface UseProjectsByReferenceIdQuery<TData> extends ReactQueryParams<QueryProjectsByReferenceIdResponse, TData> {
  request: QueryProjectsByReferenceIdRequest;
}
export interface UseProjectQuery<TData> extends ReactQueryParams<QueryProjectResponse, TData> {
  request: QueryProjectRequest;
}
export interface UseBatchesQuery<TData> extends ReactQueryParams<QueryBatchesResponse, TData> {
  request: QueryBatchesRequest;
}
export interface UseBatchesByIssuerQuery<TData> extends ReactQueryParams<QueryBatchesByIssuerResponse, TData> {
  request: QueryBatchesByIssuerRequest;
}
export interface UseBatchesByClassQuery<TData> extends ReactQueryParams<QueryBatchesByClassResponse, TData> {
  request: QueryBatchesByClassRequest;
}
export interface UseBatchQuery<TData> extends ReactQueryParams<QueryBatchResponse, TData> {
  request: QueryBatchRequest;
}
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}
export interface UseBalancesQuery<TData> extends ReactQueryParams<QueryBalancesResponse, TData> {
  request: QueryBalancesRequest;
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
  const useClassesByAdmin = <TData = QueryClassesByAdminResponse,>({
    request,
    options
  }: UseClassesByAdminQuery<TData>) => {
    return useQuery<QueryClassesByAdminResponse, Error, TData>(["classesByAdminQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classesByAdmin(request);
    }, options);
  };
  const useClass = <TData = QueryClassResponse,>({
    request,
    options
  }: UseClassQuery<TData>) => {
    return useQuery<QueryClassResponse, Error, TData>(["classQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.class(request);
    }, options);
  };
  const useClassIssuers = <TData = QueryClassIssuersResponse,>({
    request,
    options
  }: UseClassIssuersQuery<TData>) => {
    return useQuery<QueryClassIssuersResponse, Error, TData>(["classIssuersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classIssuers(request);
    }, options);
  };
  const useProjects = <TData = QueryProjectsResponse,>({
    request,
    options
  }: UseProjectsQuery<TData>) => {
    return useQuery<QueryProjectsResponse, Error, TData>(["projectsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.projects(request);
    }, options);
  };
  const useProjectsByReferenceId = <TData = QueryProjectsByReferenceIdResponse,>({
    request,
    options
  }: UseProjectsByReferenceIdQuery<TData>) => {
    return useQuery<QueryProjectsByReferenceIdResponse, Error, TData>(["projectsByReferenceIdQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.projectsByReferenceId(request);
    }, options);
  };
  const useProject = <TData = QueryProjectResponse,>({
    request,
    options
  }: UseProjectQuery<TData>) => {
    return useQuery<QueryProjectResponse, Error, TData>(["projectQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.project(request);
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
  const useBatchesByIssuer = <TData = QueryBatchesByIssuerResponse,>({
    request,
    options
  }: UseBatchesByIssuerQuery<TData>) => {
    return useQuery<QueryBatchesByIssuerResponse, Error, TData>(["batchesByIssuerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batchesByIssuer(request);
    }, options);
  };
  const useBatchesByClass = <TData = QueryBatchesByClassResponse,>({
    request,
    options
  }: UseBatchesByClassQuery<TData>) => {
    return useQuery<QueryBatchesByClassResponse, Error, TData>(["batchesByClassQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batchesByClass(request);
    }, options);
  };
  const useBatch = <TData = QueryBatchResponse,>({
    request,
    options
  }: UseBatchQuery<TData>) => {
    return useQuery<QueryBatchResponse, Error, TData>(["batchQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batch(request);
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
  const useBalances = <TData = QueryBalancesResponse,>({
    request,
    options
  }: UseBalancesQuery<TData>) => {
    return useQuery<QueryBalancesResponse, Error, TData>(["balancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balances(request);
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
    /**
     * ClassesByAdmin queries for all credit classes with a specific admin
     * address.
     */
    useClassesByAdmin,
    /** Class queries for information on a credit class. */useClass,
    /** ClassIssuers queries for the addresses of the issuers for a credit class. */useClassIssuers,
    /** Projects queries for all projects within a class with pagination. */useProjects,
    /**
     * ProjectsByReferenceId queries for all projects by reference-id with
     * pagination.
     */
    useProjectsByReferenceId,
    /** Project queries for information on a project. */useProject,
    /** Batches queries for all batches in the given project with pagination. */useBatches,
    /** BatchesByIssuer queries all batches issued from a given issuer address. */useBatchesByIssuer,
    /** BatchesByClass queries all batches issued from a given class. */useBatchesByClass,
    /** Batch queries for information on a credit batch. */useBatch,
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    useBalance,
    /** Balances queries all credit balances the given account holds. */useBalances,
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
  class QueryClassesByAdminStore {
    store = new QueryStore<QueryClassesByAdminRequest, QueryClassesByAdminResponse>(queryService?.classesByAdmin);
    classesByAdmin(request: QueryClassesByAdminRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClassStore {
    store = new QueryStore<QueryClassRequest, QueryClassResponse>(queryService?.class);
    class(request: QueryClassRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClassIssuersStore {
    store = new QueryStore<QueryClassIssuersRequest, QueryClassIssuersResponse>(queryService?.classIssuers);
    classIssuers(request: QueryClassIssuersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProjectsStore {
    store = new QueryStore<QueryProjectsRequest, QueryProjectsResponse>(queryService?.projects);
    projects(request: QueryProjectsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProjectsByReferenceIdStore {
    store = new QueryStore<QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponse>(queryService?.projectsByReferenceId);
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProjectStore {
    store = new QueryStore<QueryProjectRequest, QueryProjectResponse>(queryService?.project);
    project(request: QueryProjectRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchesStore {
    store = new QueryStore<QueryBatchesRequest, QueryBatchesResponse>(queryService?.batches);
    batches(request: QueryBatchesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchesByIssuerStore {
    store = new QueryStore<QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponse>(queryService?.batchesByIssuer);
    batchesByIssuer(request: QueryBatchesByIssuerRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchesByClassStore {
    store = new QueryStore<QueryBatchesByClassRequest, QueryBatchesByClassResponse>(queryService?.batchesByClass);
    batchesByClass(request: QueryBatchesByClassRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchStore {
    store = new QueryStore<QueryBatchRequest, QueryBatchResponse>(queryService?.batch);
    batch(request: QueryBatchRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBalanceStore {
    store = new QueryStore<QueryBalanceRequest, QueryBalanceResponse>(queryService?.balance);
    balance(request: QueryBalanceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBalancesStore {
    store = new QueryStore<QueryBalancesRequest, QueryBalancesResponse>(queryService?.balances);
    balances(request: QueryBalancesRequest) {
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
    /**
     * ClassesByAdmin queries for all credit classes with a specific admin
     * address.
     */
    QueryClassesByAdminStore,
    /** Class queries for information on a credit class. */QueryClassStore,
    /** ClassIssuers queries for the addresses of the issuers for a credit class. */QueryClassIssuersStore,
    /** Projects queries for all projects within a class with pagination. */QueryProjectsStore,
    /**
     * ProjectsByReferenceId queries for all projects by reference-id with
     * pagination.
     */
    QueryProjectsByReferenceIdStore,
    /** Project queries for information on a project. */QueryProjectStore,
    /** Batches queries for all batches in the given project with pagination. */QueryBatchesStore,
    /** BatchesByIssuer queries all batches issued from a given issuer address. */QueryBatchesByIssuerStore,
    /** BatchesByClass queries all batches issued from a given class. */QueryBatchesByClassStore,
    /** Batch queries for information on a credit batch. */QueryBatchStore,
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    QueryBalanceStore,
    /** Balances queries all credit balances the given account holds. */QueryBalancesStore,
    /** Supply queries the tradable and retired supply of a credit batch. */QuerySupplyStore,
    /**
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    QueryCreditTypesStore,
    /** Params queries the ecocredit module parameters. */QueryParamsStore
  };
};