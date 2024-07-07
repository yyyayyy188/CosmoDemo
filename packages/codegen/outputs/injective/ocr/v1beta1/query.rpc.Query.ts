import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service for OCR module. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the OCR FeedConfig for a given FeedId */
  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
  /** Retrieves the OCR FeedConfigInfo for a given FeedId */
  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
  /** Retrieves latest round ID and data, including median answer for that round */
  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
  /** LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID. */
  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
  /** Retrieves transmitter's owed amount */
  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
  /** Retrieves the entire OCR module's state */
  ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.feedConfig = this.feedConfig.bind(this);
    this.feedConfigInfo = this.feedConfigInfo.bind(this);
    this.latestRound = this.latestRound.bind(this);
    this.latestTransmissionDetails = this.latestTransmissionDetails.bind(this);
    this.owedAmount = this.owedAmount.bind(this);
    this.ocrModuleState = this.ocrModuleState.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
    const data = QueryFeedConfigRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
    return promise.then(data => QueryFeedConfigResponse.decode(new BinaryReader(data)));
  }
  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
    const data = QueryFeedConfigInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
    return promise.then(data => QueryFeedConfigInfoResponse.decode(new BinaryReader(data)));
  }
  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
    const data = QueryLatestRoundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
    return promise.then(data => QueryLatestRoundResponse.decode(new BinaryReader(data)));
  }
  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
    const data = QueryLatestTransmissionDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
    return promise.then(data => QueryLatestTransmissionDetailsResponse.decode(new BinaryReader(data)));
  }
  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
    const data = QueryOwedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
    return promise.then(data => QueryOwedAmountResponse.decode(new BinaryReader(data)));
  }
  ocrModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
      return queryService.feedConfig(request);
    },
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
      return queryService.feedConfigInfo(request);
    },
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
      return queryService.latestRound(request);
    },
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
      return queryService.latestTransmissionDetails(request);
    },
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
      return queryService.owedAmount(request);
    },
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.ocrModuleState(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseFeedConfigQuery<TData> extends ReactQueryParams<QueryFeedConfigResponse, TData> {
  request: QueryFeedConfigRequest;
}
export interface UseFeedConfigInfoQuery<TData> extends ReactQueryParams<QueryFeedConfigInfoResponse, TData> {
  request: QueryFeedConfigInfoRequest;
}
export interface UseLatestRoundQuery<TData> extends ReactQueryParams<QueryLatestRoundResponse, TData> {
  request: QueryLatestRoundRequest;
}
export interface UseLatestTransmissionDetailsQuery<TData> extends ReactQueryParams<QueryLatestTransmissionDetailsResponse, TData> {
  request: QueryLatestTransmissionDetailsRequest;
}
export interface UseOwedAmountQuery<TData> extends ReactQueryParams<QueryOwedAmountResponse, TData> {
  request: QueryOwedAmountRequest;
}
export interface UseOcrModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
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
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useFeedConfig = <TData = QueryFeedConfigResponse,>({
    request,
    options
  }: UseFeedConfigQuery<TData>) => {
    return useQuery<QueryFeedConfigResponse, Error, TData>(["feedConfigQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feedConfig(request);
    }, options);
  };
  const useFeedConfigInfo = <TData = QueryFeedConfigInfoResponse,>({
    request,
    options
  }: UseFeedConfigInfoQuery<TData>) => {
    return useQuery<QueryFeedConfigInfoResponse, Error, TData>(["feedConfigInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feedConfigInfo(request);
    }, options);
  };
  const useLatestRound = <TData = QueryLatestRoundResponse,>({
    request,
    options
  }: UseLatestRoundQuery<TData>) => {
    return useQuery<QueryLatestRoundResponse, Error, TData>(["latestRoundQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.latestRound(request);
    }, options);
  };
  const useLatestTransmissionDetails = <TData = QueryLatestTransmissionDetailsResponse,>({
    request,
    options
  }: UseLatestTransmissionDetailsQuery<TData>) => {
    return useQuery<QueryLatestTransmissionDetailsResponse, Error, TData>(["latestTransmissionDetailsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.latestTransmissionDetails(request);
    }, options);
  };
  const useOwedAmount = <TData = QueryOwedAmountResponse,>({
    request,
    options
  }: UseOwedAmountQuery<TData>) => {
    return useQuery<QueryOwedAmountResponse, Error, TData>(["owedAmountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.owedAmount(request);
    }, options);
  };
  const useOcrModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseOcrModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["ocrModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.ocrModuleState(request);
    }, options);
  };
  return {
    useParams,
    /** Retrieves the OCR FeedConfig for a given FeedId */useFeedConfig,
    /** Retrieves the OCR FeedConfigInfo for a given FeedId */useFeedConfigInfo,
    /** Retrieves latest round ID and data, including median answer for that round */useLatestRound,
    /** LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID. */useLatestTransmissionDetails,
    /** Retrieves transmitter's owed amount */useOwedAmount,
    /** Retrieves the entire OCR module's state */useOcrModuleState
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryFeedConfigStore {
    store = new QueryStore<QueryFeedConfigRequest, QueryFeedConfigResponse>(queryService?.feedConfig);
    feedConfig(request: QueryFeedConfigRequest) {
      return this.store.getData(request);
    }
  }
  class QueryFeedConfigInfoStore {
    store = new QueryStore<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>(queryService?.feedConfigInfo);
    feedConfigInfo(request: QueryFeedConfigInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLatestRoundStore {
    store = new QueryStore<QueryLatestRoundRequest, QueryLatestRoundResponse>(queryService?.latestRound);
    latestRound(request: QueryLatestRoundRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLatestTransmissionDetailsStore {
    store = new QueryStore<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>(queryService?.latestTransmissionDetails);
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOwedAmountStore {
    store = new QueryStore<QueryOwedAmountRequest, QueryOwedAmountResponse>(queryService?.owedAmount);
    owedAmount(request: QueryOwedAmountRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOcrModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.ocrModuleState);
    ocrModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  return {
    QueryParamsStore,
    /** Retrieves the OCR FeedConfig for a given FeedId */QueryFeedConfigStore,
    /** Retrieves the OCR FeedConfigInfo for a given FeedId */QueryFeedConfigInfoStore,
    /** Retrieves latest round ID and data, including median answer for that round */QueryLatestRoundStore,
    /** LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID. */QueryLatestTransmissionDetailsStore,
    /** Retrieves transmitter's owed amount */QueryOwedAmountStore,
    /** Retrieves the entire OCR module's state */QueryOcrModuleStateStore
  };
};