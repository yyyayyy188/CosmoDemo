import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParams, QueryParamsResponse, QueryRegisteredTokens, QueryRegisteredTokensResponse, QueryMarketSummary, QueryMarketSummaryResponse, QueryAccountBalances, QueryAccountBalancesResponse, QueryAccountSummary, QueryAccountSummaryResponse, QueryLiquidationTargets, QueryLiquidationTargetsResponse, QueryBadDebts, QueryBadDebtsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the x/leverage module. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
  /** RegisteredTokens queries for all the registered tokens. */
  registeredTokens(request?: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
  /** MarketSummary queries a base asset's current borrowing and supplying conditions. */
  marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
  /** AccountBalances queries an account's current supply, collateral, and borrow positions. */
  accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
  /** AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */
  accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
  /** LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */
  liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
  /** BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */
  badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.registeredTokens = this.registeredTokens.bind(this);
    this.marketSummary = this.marketSummary.bind(this);
    this.accountBalances = this.accountBalances.bind(this);
    this.accountSummary = this.accountSummary.bind(this);
    this.liquidationTargets = this.liquidationTargets.bind(this);
    this.badDebts = this.badDebts.bind(this);
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  registeredTokens(request: QueryRegisteredTokens = {}): Promise<QueryRegisteredTokensResponse> {
    const data = QueryRegisteredTokens.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "RegisteredTokens", data);
    return promise.then(data => QueryRegisteredTokensResponse.decode(new BinaryReader(data)));
  }
  marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse> {
    const data = QueryMarketSummary.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "MarketSummary", data);
    return promise.then(data => QueryMarketSummaryResponse.decode(new BinaryReader(data)));
  }
  accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse> {
    const data = QueryAccountBalances.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "AccountBalances", data);
    return promise.then(data => QueryAccountBalancesResponse.decode(new BinaryReader(data)));
  }
  accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse> {
    const data = QueryAccountSummary.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "AccountSummary", data);
    return promise.then(data => QueryAccountSummaryResponse.decode(new BinaryReader(data)));
  }
  liquidationTargets(request: QueryLiquidationTargets = {}): Promise<QueryLiquidationTargetsResponse> {
    const data = QueryLiquidationTargets.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "LiquidationTargets", data);
    return promise.then(data => QueryLiquidationTargetsResponse.decode(new BinaryReader(data)));
  }
  badDebts(request: QueryBadDebts = {}): Promise<QueryBadDebtsResponse> {
    const data = QueryBadDebts.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "BadDebts", data);
    return promise.then(data => QueryBadDebtsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    registeredTokens(request?: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse> {
      return queryService.registeredTokens(request);
    },
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse> {
      return queryService.marketSummary(request);
    },
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse> {
      return queryService.accountBalances(request);
    },
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse> {
      return queryService.accountSummary(request);
    },
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse> {
      return queryService.liquidationTargets(request);
    },
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse> {
      return queryService.badDebts(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParams;
}
export interface UseRegisteredTokensQuery<TData> extends ReactQueryParams<QueryRegisteredTokensResponse, TData> {
  request?: QueryRegisteredTokens;
}
export interface UseMarketSummaryQuery<TData> extends ReactQueryParams<QueryMarketSummaryResponse, TData> {
  request: QueryMarketSummary;
}
export interface UseAccountBalancesQuery<TData> extends ReactQueryParams<QueryAccountBalancesResponse, TData> {
  request: QueryAccountBalances;
}
export interface UseAccountSummaryQuery<TData> extends ReactQueryParams<QueryAccountSummaryResponse, TData> {
  request: QueryAccountSummary;
}
export interface UseLiquidationTargetsQuery<TData> extends ReactQueryParams<QueryLiquidationTargetsResponse, TData> {
  request?: QueryLiquidationTargets;
}
export interface UseBadDebtsQuery<TData> extends ReactQueryParams<QueryBadDebtsResponse, TData> {
  request?: QueryBadDebts;
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
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useRegisteredTokens = <TData = QueryRegisteredTokensResponse,>({
    request,
    options
  }: UseRegisteredTokensQuery<TData>) => {
    return useQuery<QueryRegisteredTokensResponse, Error, TData>(["registeredTokensQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.registeredTokens(request);
    }, options);
  };
  const useMarketSummary = <TData = QueryMarketSummaryResponse,>({
    request,
    options
  }: UseMarketSummaryQuery<TData>) => {
    return useQuery<QueryMarketSummaryResponse, Error, TData>(["marketSummaryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.marketSummary(request);
    }, options);
  };
  const useAccountBalances = <TData = QueryAccountBalancesResponse,>({
    request,
    options
  }: UseAccountBalancesQuery<TData>) => {
    return useQuery<QueryAccountBalancesResponse, Error, TData>(["accountBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountBalances(request);
    }, options);
  };
  const useAccountSummary = <TData = QueryAccountSummaryResponse,>({
    request,
    options
  }: UseAccountSummaryQuery<TData>) => {
    return useQuery<QueryAccountSummaryResponse, Error, TData>(["accountSummaryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountSummary(request);
    }, options);
  };
  const useLiquidationTargets = <TData = QueryLiquidationTargetsResponse,>({
    request,
    options
  }: UseLiquidationTargetsQuery<TData>) => {
    return useQuery<QueryLiquidationTargetsResponse, Error, TData>(["liquidationTargetsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.liquidationTargets(request);
    }, options);
  };
  const useBadDebts = <TData = QueryBadDebtsResponse,>({
    request,
    options
  }: UseBadDebtsQuery<TData>) => {
    return useQuery<QueryBadDebtsResponse, Error, TData>(["badDebtsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.badDebts(request);
    }, options);
  };
  return {
    /** Params queries the parameters of the x/leverage module. */useParams,
    /** RegisteredTokens queries for all the registered tokens. */useRegisteredTokens,
    /** MarketSummary queries a base asset's current borrowing and supplying conditions. */useMarketSummary,
    /** AccountBalances queries an account's current supply, collateral, and borrow positions. */useAccountBalances,
    /** AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */useAccountSummary,
    /** LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */useLiquidationTargets,
    /** BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */useBadDebts
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<QueryParams, QueryParamsResponse>(queryService?.params);
    params(request: QueryParams) {
      return this.store.getData(request);
    }
  }
  class QueryRegisteredTokensStore {
    store = new QueryStore<QueryRegisteredTokens, QueryRegisteredTokensResponse>(queryService?.registeredTokens);
    registeredTokens(request: QueryRegisteredTokens) {
      return this.store.getData(request);
    }
  }
  class QueryMarketSummaryStore {
    store = new QueryStore<QueryMarketSummary, QueryMarketSummaryResponse>(queryService?.marketSummary);
    marketSummary(request: QueryMarketSummary) {
      return this.store.getData(request);
    }
  }
  class QueryAccountBalancesStore {
    store = new QueryStore<QueryAccountBalances, QueryAccountBalancesResponse>(queryService?.accountBalances);
    accountBalances(request: QueryAccountBalances) {
      return this.store.getData(request);
    }
  }
  class QueryAccountSummaryStore {
    store = new QueryStore<QueryAccountSummary, QueryAccountSummaryResponse>(queryService?.accountSummary);
    accountSummary(request: QueryAccountSummary) {
      return this.store.getData(request);
    }
  }
  class QueryLiquidationTargetsStore {
    store = new QueryStore<QueryLiquidationTargets, QueryLiquidationTargetsResponse>(queryService?.liquidationTargets);
    liquidationTargets(request: QueryLiquidationTargets) {
      return this.store.getData(request);
    }
  }
  class QueryBadDebtsStore {
    store = new QueryStore<QueryBadDebts, QueryBadDebtsResponse>(queryService?.badDebts);
    badDebts(request: QueryBadDebts) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params queries the parameters of the x/leverage module. */QueryParamsStore,
    /** RegisteredTokens queries for all the registered tokens. */QueryRegisteredTokensStore,
    /** MarketSummary queries a base asset's current borrowing and supplying conditions. */QueryMarketSummaryStore,
    /** AccountBalances queries an account's current supply, collateral, and borrow positions. */QueryAccountBalancesStore,
    /** AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */QueryAccountSummaryStore,
    /** LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */QueryLiquidationTargetsStore,
    /** BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */QueryBadDebtsStore
  };
};