import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../../mobx";
import { QueryBasketRequest, QueryBasketResponse, QueryBasketsRequest, QueryBasketsResponse, QueryBasketBalancesRequest, QueryBasketBalancesResponse, QueryBasketBalanceRequest, QueryBasketBalanceResponse } from "./query";
/** Msg is the regen.ecocredit.basket.v1 Query service. */
export interface Query {
  /** Basket queries one basket by denom. */
  basket(request: QueryBasketRequest): Promise<QueryBasketResponse>;
  /** Baskets lists all baskets in the ecocredit module. */
  baskets(request?: QueryBasketsRequest): Promise<QueryBasketsResponse>;
  /** BasketBalances lists the balance of each credit batch in the basket. */
  basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse>;
  /** BasketBalance queries the balance of a specific credit batch in the basket. */
  basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.basket = this.basket.bind(this);
    this.baskets = this.baskets.bind(this);
    this.basketBalances = this.basketBalances.bind(this);
    this.basketBalance = this.basketBalance.bind(this);
  }
  basket(request: QueryBasketRequest): Promise<QueryBasketResponse> {
    const data = QueryBasketRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Basket", data);
    return promise.then(data => QueryBasketResponse.decode(new BinaryReader(data)));
  }
  baskets(request: QueryBasketsRequest = {
    pagination: undefined
  }): Promise<QueryBasketsResponse> {
    const data = QueryBasketsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Baskets", data);
    return promise.then(data => QueryBasketsResponse.decode(new BinaryReader(data)));
  }
  basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse> {
    const data = QueryBasketBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalances", data);
    return promise.then(data => QueryBasketBalancesResponse.decode(new BinaryReader(data)));
  }
  basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse> {
    const data = QueryBasketBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalance", data);
    return promise.then(data => QueryBasketBalanceResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    basket(request: QueryBasketRequest): Promise<QueryBasketResponse> {
      return queryService.basket(request);
    },
    baskets(request?: QueryBasketsRequest): Promise<QueryBasketsResponse> {
      return queryService.baskets(request);
    },
    basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse> {
      return queryService.basketBalances(request);
    },
    basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse> {
      return queryService.basketBalance(request);
    }
  };
};
export interface UseBasketQuery<TData> extends ReactQueryParams<QueryBasketResponse, TData> {
  request: QueryBasketRequest;
}
export interface UseBasketsQuery<TData> extends ReactQueryParams<QueryBasketsResponse, TData> {
  request?: QueryBasketsRequest;
}
export interface UseBasketBalancesQuery<TData> extends ReactQueryParams<QueryBasketBalancesResponse, TData> {
  request: QueryBasketBalancesRequest;
}
export interface UseBasketBalanceQuery<TData> extends ReactQueryParams<QueryBasketBalanceResponse, TData> {
  request: QueryBasketBalanceRequest;
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
  const useBasket = <TData = QueryBasketResponse,>({
    request,
    options
  }: UseBasketQuery<TData>) => {
    return useQuery<QueryBasketResponse, Error, TData>(["basketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.basket(request);
    }, options);
  };
  const useBaskets = <TData = QueryBasketsResponse,>({
    request,
    options
  }: UseBasketsQuery<TData>) => {
    return useQuery<QueryBasketsResponse, Error, TData>(["basketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.baskets(request);
    }, options);
  };
  const useBasketBalances = <TData = QueryBasketBalancesResponse,>({
    request,
    options
  }: UseBasketBalancesQuery<TData>) => {
    return useQuery<QueryBasketBalancesResponse, Error, TData>(["basketBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.basketBalances(request);
    }, options);
  };
  const useBasketBalance = <TData = QueryBasketBalanceResponse,>({
    request,
    options
  }: UseBasketBalanceQuery<TData>) => {
    return useQuery<QueryBasketBalanceResponse, Error, TData>(["basketBalanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.basketBalance(request);
    }, options);
  };
  return {
    /** Basket queries one basket by denom. */useBasket,
    /** Baskets lists all baskets in the ecocredit module. */useBaskets,
    /** BasketBalances lists the balance of each credit batch in the basket. */useBasketBalances,
    /** BasketBalance queries the balance of a specific credit batch in the basket. */useBasketBalance
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryBasketStore {
    store = new QueryStore<QueryBasketRequest, QueryBasketResponse>(queryService?.basket);
    basket(request: QueryBasketRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBasketsStore {
    store = new QueryStore<QueryBasketsRequest, QueryBasketsResponse>(queryService?.baskets);
    baskets(request: QueryBasketsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBasketBalancesStore {
    store = new QueryStore<QueryBasketBalancesRequest, QueryBasketBalancesResponse>(queryService?.basketBalances);
    basketBalances(request: QueryBasketBalancesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBasketBalanceStore {
    store = new QueryStore<QueryBasketBalanceRequest, QueryBasketBalanceResponse>(queryService?.basketBalance);
    basketBalance(request: QueryBasketBalanceRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Basket queries one basket by denom. */QueryBasketStore,
    /** Baskets lists all baskets in the ecocredit module. */QueryBasketsStore,
    /** BasketBalances lists the balance of each credit batch in the basket. */QueryBasketBalancesStore,
    /** BasketBalance queries the balance of a specific credit batch in the basket. */QueryBasketBalanceStore
  };
};