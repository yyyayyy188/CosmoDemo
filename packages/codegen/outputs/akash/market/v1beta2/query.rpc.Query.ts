import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order queries order details */
  order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** Bids queries bids with filters */
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  /** Bid queries bid details */
  bid(request: QueryBidRequest): Promise<QueryBidResponse>;
  /** Leases queries leases with filters */
  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
  /** Lease queries lease details */
  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.leases = this.leases.bind(this);
    this.lease = this.lease.bind(this);
  }
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Orders", data);
    return promise.then(data => QueryOrdersResponse.decode(new BinaryReader(data)));
  }
  order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new BinaryReader(data)));
  }
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Bids", data);
    return promise.then(data => QueryBidsResponse.decode(new BinaryReader(data)));
  }
  bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Bid", data);
    return promise.then(data => QueryBidResponse.decode(new BinaryReader(data)));
  }
  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Leases", data);
    return promise.then(data => QueryLeasesResponse.decode(new BinaryReader(data)));
  }
  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Query", "Lease", data);
    return promise.then(data => QueryLeaseResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
      return queryService.orders(request);
    },
    order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
      return queryService.order(request);
    },
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
      return queryService.bids(request);
    },
    bid(request: QueryBidRequest): Promise<QueryBidResponse> {
      return queryService.bid(request);
    },
    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
      return queryService.leases(request);
    },
    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
      return queryService.lease(request);
    }
  };
};
export interface UseOrdersQuery<TData> extends ReactQueryParams<QueryOrdersResponse, TData> {
  request: QueryOrdersRequest;
}
export interface UseOrderQuery<TData> extends ReactQueryParams<QueryOrderResponse, TData> {
  request: QueryOrderRequest;
}
export interface UseBidsQuery<TData> extends ReactQueryParams<QueryBidsResponse, TData> {
  request: QueryBidsRequest;
}
export interface UseBidQuery<TData> extends ReactQueryParams<QueryBidResponse, TData> {
  request: QueryBidRequest;
}
export interface UseLeasesQuery<TData> extends ReactQueryParams<QueryLeasesResponse, TData> {
  request: QueryLeasesRequest;
}
export interface UseLeaseQuery<TData> extends ReactQueryParams<QueryLeaseResponse, TData> {
  request: QueryLeaseRequest;
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
  const useOrders = <TData = QueryOrdersResponse,>({
    request,
    options
  }: UseOrdersQuery<TData>) => {
    return useQuery<QueryOrdersResponse, Error, TData>(["ordersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.orders(request);
    }, options);
  };
  const useOrder = <TData = QueryOrderResponse,>({
    request,
    options
  }: UseOrderQuery<TData>) => {
    return useQuery<QueryOrderResponse, Error, TData>(["orderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.order(request);
    }, options);
  };
  const useBids = <TData = QueryBidsResponse,>({
    request,
    options
  }: UseBidsQuery<TData>) => {
    return useQuery<QueryBidsResponse, Error, TData>(["bidsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bids(request);
    }, options);
  };
  const useBid = <TData = QueryBidResponse,>({
    request,
    options
  }: UseBidQuery<TData>) => {
    return useQuery<QueryBidResponse, Error, TData>(["bidQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bid(request);
    }, options);
  };
  const useLeases = <TData = QueryLeasesResponse,>({
    request,
    options
  }: UseLeasesQuery<TData>) => {
    return useQuery<QueryLeasesResponse, Error, TData>(["leasesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.leases(request);
    }, options);
  };
  const useLease = <TData = QueryLeaseResponse,>({
    request,
    options
  }: UseLeaseQuery<TData>) => {
    return useQuery<QueryLeaseResponse, Error, TData>(["leaseQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lease(request);
    }, options);
  };
  return {
    /** Orders queries orders with filters */useOrders,
    /** Order queries order details */useOrder,
    /** Bids queries bids with filters */useBids,
    /** Bid queries bid details */useBid,
    /** Leases queries leases with filters */useLeases,
    /** Lease queries lease details */useLease
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryOrdersStore {
    store = new QueryStore<QueryOrdersRequest, QueryOrdersResponse>(queryService?.orders);
    orders(request: QueryOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOrderStore {
    store = new QueryStore<QueryOrderRequest, QueryOrderResponse>(queryService?.order);
    order(request: QueryOrderRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBidsStore {
    store = new QueryStore<QueryBidsRequest, QueryBidsResponse>(queryService?.bids);
    bids(request: QueryBidsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBidStore {
    store = new QueryStore<QueryBidRequest, QueryBidResponse>(queryService?.bid);
    bid(request: QueryBidRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLeasesStore {
    store = new QueryStore<QueryLeasesRequest, QueryLeasesResponse>(queryService?.leases);
    leases(request: QueryLeasesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLeaseStore {
    store = new QueryStore<QueryLeaseRequest, QueryLeaseResponse>(queryService?.lease);
    lease(request: QueryLeaseRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Orders queries orders with filters */QueryOrdersStore,
    /** Order queries order details */QueryOrderStore,
    /** Bids queries bids with filters */QueryBidsStore,
    /** Bid queries bid details */QueryBidStore,
    /** Leases queries leases with filters */QueryLeasesStore,
    /** Lease queries lease details */QueryLeaseStore
  };
};