import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
  /** Deployment queries deployment details */
  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
  /** Group queries group details */
  group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deployments = this.deployments.bind(this);
    this.deployment = this.deployment.bind(this);
    this.group = this.group.bind(this);
  }
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new BinaryReader(data)));
  }
  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new BinaryReader(data)));
  }
  group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
      return queryService.deployments(request);
    },
    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
      return queryService.deployment(request);
    },
    group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
      return queryService.group(request);
    }
  };
};
export interface UseDeploymentsQuery<TData> extends ReactQueryParams<QueryDeploymentsResponse, TData> {
  request: QueryDeploymentsRequest;
}
export interface UseDeploymentQuery<TData> extends ReactQueryParams<QueryDeploymentResponse, TData> {
  request: QueryDeploymentRequest;
}
export interface UseGroupQuery<TData> extends ReactQueryParams<QueryGroupResponse, TData> {
  request: QueryGroupRequest;
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
  const useDeployments = <TData = QueryDeploymentsResponse,>({
    request,
    options
  }: UseDeploymentsQuery<TData>) => {
    return useQuery<QueryDeploymentsResponse, Error, TData>(["deploymentsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deployments(request);
    }, options);
  };
  const useDeployment = <TData = QueryDeploymentResponse,>({
    request,
    options
  }: UseDeploymentQuery<TData>) => {
    return useQuery<QueryDeploymentResponse, Error, TData>(["deploymentQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deployment(request);
    }, options);
  };
  const useGroup = <TData = QueryGroupResponse,>({
    request,
    options
  }: UseGroupQuery<TData>) => {
    return useQuery<QueryGroupResponse, Error, TData>(["groupQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.group(request);
    }, options);
  };
  return {
    /** Deployments queries deployments */useDeployments,
    /** Deployment queries deployment details */useDeployment,
    /** Group queries group details */useGroup
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryDeploymentsStore {
    store = new QueryStore<QueryDeploymentsRequest, QueryDeploymentsResponse>(queryService?.deployments);
    deployments(request: QueryDeploymentsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDeploymentStore {
    store = new QueryStore<QueryDeploymentRequest, QueryDeploymentResponse>(queryService?.deployment);
    deployment(request: QueryDeploymentRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGroupStore {
    store = new QueryStore<QueryGroupRequest, QueryGroupResponse>(queryService?.group);
    group(request: QueryGroupRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Deployments queries deployments */QueryDeploymentsStore,
    /** Deployment queries deployment details */QueryDeploymentStore,
    /** Group queries group details */QueryGroupStore
  };
};