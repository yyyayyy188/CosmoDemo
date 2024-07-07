import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../../mobx";
import { QuerySellOrderRequest, QuerySellOrderResponse, QuerySellOrdersRequest, QuerySellOrdersResponse, QuerySellOrdersByBatchDenomRequest, QuerySellOrdersByBatchDenomResponse, QuerySellOrdersByAddressRequest, QuerySellOrdersByAddressResponse, QueryAllowedDenomsRequest, QueryAllowedDenomsResponse } from "./query";
/** Msg is the regen.ecocredit.marketplace.v1 Query service. */
export interface Query {
  /** SellOrder queries a sell order by its ID */
  sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
  /** SellOrders queries a paginated list of all sell orders */
  sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
  /**
   * SellOrdersByDenom queries a paginated list of all sell orders of a specific
   * ecocredit denom
   */
  sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest): Promise<QuerySellOrdersByBatchDenomResponse>;
  /**
   * SellOrdersByAddress queries a paginated list of all sell orders from a
   * specific address
   */
  sellOrdersByAddress(request: QuerySellOrdersByAddressRequest): Promise<QuerySellOrdersByAddressResponse>;
  /**
   * AllowedDenoms queries all denoms allowed to be set in the AskPrice of a
   * sell order
   */
  allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sellOrder = this.sellOrder.bind(this);
    this.sellOrders = this.sellOrders.bind(this);
    this.sellOrdersByBatchDenom = this.sellOrdersByBatchDenom.bind(this);
    this.sellOrdersByAddress = this.sellOrdersByAddress.bind(this);
    this.allowedDenoms = this.allowedDenoms.bind(this);
  }
  sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse> {
    const data = QuerySellOrderRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrder", data);
    return promise.then(data => QuerySellOrderResponse.decode(new BinaryReader(data)));
  }
  sellOrders(request: QuerySellOrdersRequest = {
    pagination: undefined
  }): Promise<QuerySellOrdersResponse> {
    const data = QuerySellOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrders", data);
    return promise.then(data => QuerySellOrdersResponse.decode(new BinaryReader(data)));
  }
  sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest): Promise<QuerySellOrdersByBatchDenomResponse> {
    const data = QuerySellOrdersByBatchDenomRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByBatchDenom", data);
    return promise.then(data => QuerySellOrdersByBatchDenomResponse.decode(new BinaryReader(data)));
  }
  sellOrdersByAddress(request: QuerySellOrdersByAddressRequest): Promise<QuerySellOrdersByAddressResponse> {
    const data = QuerySellOrdersByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByAddress", data);
    return promise.then(data => QuerySellOrdersByAddressResponse.decode(new BinaryReader(data)));
  }
  allowedDenoms(request: QueryAllowedDenomsRequest = {
    pagination: undefined
  }): Promise<QueryAllowedDenomsResponse> {
    const data = QueryAllowedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "AllowedDenoms", data);
    return promise.then(data => QueryAllowedDenomsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse> {
      return queryService.sellOrder(request);
    },
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse> {
      return queryService.sellOrders(request);
    },
    sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest): Promise<QuerySellOrdersByBatchDenomResponse> {
      return queryService.sellOrdersByBatchDenom(request);
    },
    sellOrdersByAddress(request: QuerySellOrdersByAddressRequest): Promise<QuerySellOrdersByAddressResponse> {
      return queryService.sellOrdersByAddress(request);
    },
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse> {
      return queryService.allowedDenoms(request);
    }
  };
};
export interface UseSellOrderQuery<TData> extends ReactQueryParams<QuerySellOrderResponse, TData> {
  request: QuerySellOrderRequest;
}
export interface UseSellOrdersQuery<TData> extends ReactQueryParams<QuerySellOrdersResponse, TData> {
  request?: QuerySellOrdersRequest;
}
export interface UseSellOrdersByBatchDenomQuery<TData> extends ReactQueryParams<QuerySellOrdersByBatchDenomResponse, TData> {
  request: QuerySellOrdersByBatchDenomRequest;
}
export interface UseSellOrdersByAddressQuery<TData> extends ReactQueryParams<QuerySellOrdersByAddressResponse, TData> {
  request: QuerySellOrdersByAddressRequest;
}
export interface UseAllowedDenomsQuery<TData> extends ReactQueryParams<QueryAllowedDenomsResponse, TData> {
  request?: QueryAllowedDenomsRequest;
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
  const useSellOrder = <TData = QuerySellOrderResponse,>({
    request,
    options
  }: UseSellOrderQuery<TData>) => {
    return useQuery<QuerySellOrderResponse, Error, TData>(["sellOrderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sellOrder(request);
    }, options);
  };
  const useSellOrders = <TData = QuerySellOrdersResponse,>({
    request,
    options
  }: UseSellOrdersQuery<TData>) => {
    return useQuery<QuerySellOrdersResponse, Error, TData>(["sellOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sellOrders(request);
    }, options);
  };
  const useSellOrdersByBatchDenom = <TData = QuerySellOrdersByBatchDenomResponse,>({
    request,
    options
  }: UseSellOrdersByBatchDenomQuery<TData>) => {
    return useQuery<QuerySellOrdersByBatchDenomResponse, Error, TData>(["sellOrdersByBatchDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sellOrdersByBatchDenom(request);
    }, options);
  };
  const useSellOrdersByAddress = <TData = QuerySellOrdersByAddressResponse,>({
    request,
    options
  }: UseSellOrdersByAddressQuery<TData>) => {
    return useQuery<QuerySellOrdersByAddressResponse, Error, TData>(["sellOrdersByAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sellOrdersByAddress(request);
    }, options);
  };
  const useAllowedDenoms = <TData = QueryAllowedDenomsResponse,>({
    request,
    options
  }: UseAllowedDenomsQuery<TData>) => {
    return useQuery<QueryAllowedDenomsResponse, Error, TData>(["allowedDenomsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowedDenoms(request);
    }, options);
  };
  return {
    /** SellOrder queries a sell order by its ID */useSellOrder,
    /** SellOrders queries a paginated list of all sell orders */useSellOrders,
    /**
     * SellOrdersByDenom queries a paginated list of all sell orders of a specific
     * ecocredit denom
     */
    useSellOrdersByBatchDenom,
    /**
     * SellOrdersByAddress queries a paginated list of all sell orders from a
     * specific address
     */
    useSellOrdersByAddress,
    /**
     * AllowedDenoms queries all denoms allowed to be set in the AskPrice of a
     * sell order
     */
    useAllowedDenoms
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QuerySellOrderStore {
    store = new QueryStore<QuerySellOrderRequest, QuerySellOrderResponse>(queryService?.sellOrder);
    sellOrder(request: QuerySellOrderRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySellOrdersStore {
    store = new QueryStore<QuerySellOrdersRequest, QuerySellOrdersResponse>(queryService?.sellOrders);
    sellOrders(request: QuerySellOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySellOrdersByBatchDenomStore {
    store = new QueryStore<QuerySellOrdersByBatchDenomRequest, QuerySellOrdersByBatchDenomResponse>(queryService?.sellOrdersByBatchDenom);
    sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySellOrdersByAddressStore {
    store = new QueryStore<QuerySellOrdersByAddressRequest, QuerySellOrdersByAddressResponse>(queryService?.sellOrdersByAddress);
    sellOrdersByAddress(request: QuerySellOrdersByAddressRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllowedDenomsStore {
    store = new QueryStore<QueryAllowedDenomsRequest, QueryAllowedDenomsResponse>(queryService?.allowedDenoms);
    allowedDenoms(request: QueryAllowedDenomsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** SellOrder queries a sell order by its ID */QuerySellOrderStore,
    /** SellOrders queries a paginated list of all sell orders */QuerySellOrdersStore,
    /**
     * SellOrdersByDenom queries a paginated list of all sell orders of a specific
     * ecocredit denom
     */
    QuerySellOrdersByBatchDenomStore,
    /**
     * SellOrdersByAddress queries a paginated list of all sell orders from a
     * specific address
     */
    QuerySellOrdersByAddressStore,
    /**
     * AllowedDenoms queries all denoms allowed to be set in the AskPrice of a
     * sell order
     */
    QueryAllowedDenomsStore
  };
};