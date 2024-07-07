import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves auction params */
  auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
  /** Retrieves current auction basket with current highest bid and bidder */
  currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
  /** Retrieves the entire auction module's state */
  auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.auctionParams = this.auctionParams.bind(this);
    this.currentAuctionBasket = this.currentAuctionBasket.bind(this);
    this.auctionModuleState = this.auctionModuleState.bind(this);
  }
  auctionParams(request: QueryAuctionParamsRequest = {}): Promise<QueryAuctionParamsResponse> {
    const data = QueryAuctionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
    return promise.then(data => QueryAuctionParamsResponse.decode(new BinaryReader(data)));
  }
  currentAuctionBasket(request: QueryCurrentAuctionBasketRequest = {}): Promise<QueryCurrentAuctionBasketResponse> {
    const data = QueryCurrentAuctionBasketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
    return promise.then(data => QueryCurrentAuctionBasketResponse.decode(new BinaryReader(data)));
  }
  auctionModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse> {
      return queryService.auctionParams(request);
    },
    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse> {
      return queryService.currentAuctionBasket(request);
    },
    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.auctionModuleState(request);
    }
  };
};
export interface UseAuctionParamsQuery<TData> extends ReactQueryParams<QueryAuctionParamsResponse, TData> {
  request?: QueryAuctionParamsRequest;
}
export interface UseCurrentAuctionBasketQuery<TData> extends ReactQueryParams<QueryCurrentAuctionBasketResponse, TData> {
  request?: QueryCurrentAuctionBasketRequest;
}
export interface UseAuctionModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
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
  const useAuctionParams = <TData = QueryAuctionParamsResponse,>({
    request,
    options
  }: UseAuctionParamsQuery<TData>) => {
    return useQuery<QueryAuctionParamsResponse, Error, TData>(["auctionParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.auctionParams(request);
    }, options);
  };
  const useCurrentAuctionBasket = <TData = QueryCurrentAuctionBasketResponse,>({
    request,
    options
  }: UseCurrentAuctionBasketQuery<TData>) => {
    return useQuery<QueryCurrentAuctionBasketResponse, Error, TData>(["currentAuctionBasketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentAuctionBasket(request);
    }, options);
  };
  const useAuctionModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseAuctionModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["auctionModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.auctionModuleState(request);
    }, options);
  };
  return {
    /** Retrieves auction params */useAuctionParams,
    /** Retrieves current auction basket with current highest bid and bidder */useCurrentAuctionBasket,
    /** Retrieves the entire auction module's state */useAuctionModuleState
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryAuctionParamsStore {
    store = new QueryStore<QueryAuctionParamsRequest, QueryAuctionParamsResponse>(queryService?.auctionParams);
    auctionParams(request: QueryAuctionParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCurrentAuctionBasketStore {
    store = new QueryStore<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>(queryService?.currentAuctionBasket);
    currentAuctionBasket(request: QueryCurrentAuctionBasketRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAuctionModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.auctionModuleState);
    auctionModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Retrieves auction params */QueryAuctionParamsStore,
    /** Retrieves current auction basket with current highest bid and bidder */QueryCurrentAuctionBasketStore,
    /** Retrieves the entire auction module's state */QueryAuctionModuleStateStore
  };
};