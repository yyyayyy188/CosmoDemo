import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** valset */
  currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
  valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
  valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
  valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
  lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
  lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  /** claim */
  lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse>;
  /** batch */
  getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
  batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
  denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
  getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
  getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
  getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
  /** Retrieves the entire peggy module's state */
  peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.currentValset = this.currentValset.bind(this);
    this.valsetRequest = this.valsetRequest.bind(this);
    this.valsetConfirm = this.valsetConfirm.bind(this);
    this.valsetConfirmsByNonce = this.valsetConfirmsByNonce.bind(this);
    this.lastValsetRequests = this.lastValsetRequests.bind(this);
    this.lastPendingValsetRequestByAddr = this.lastPendingValsetRequestByAddr.bind(this);
    this.lastEventByAddr = this.lastEventByAddr.bind(this);
    this.getPendingSendToEth = this.getPendingSendToEth.bind(this);
    this.batchFees = this.batchFees.bind(this);
    this.outgoingTxBatches = this.outgoingTxBatches.bind(this);
    this.lastPendingBatchRequestByAddr = this.lastPendingBatchRequestByAddr.bind(this);
    this.batchRequestByNonce = this.batchRequestByNonce.bind(this);
    this.batchConfirms = this.batchConfirms.bind(this);
    this.eRC20ToDenom = this.eRC20ToDenom.bind(this);
    this.denomToERC20 = this.denomToERC20.bind(this);
    this.getDelegateKeyByValidator = this.getDelegateKeyByValidator.bind(this);
    this.getDelegateKeyByEth = this.getDelegateKeyByEth.bind(this);
    this.getDelegateKeyByOrchestrator = this.getDelegateKeyByOrchestrator.bind(this);
    this.peggyModuleState = this.peggyModuleState.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  currentValset(request: QueryCurrentValsetRequest = {}): Promise<QueryCurrentValsetResponse> {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "CurrentValset", data);
    return promise.then(data => QueryCurrentValsetResponse.decode(new BinaryReader(data)));
  }
  valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetRequest", data);
    return promise.then(data => QueryValsetRequestResponse.decode(new BinaryReader(data)));
  }
  valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirm", data);
    return promise.then(data => QueryValsetConfirmResponse.decode(new BinaryReader(data)));
  }
  valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirmsByNonce", data);
    return promise.then(data => QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
  }
  lastValsetRequests(request: QueryLastValsetRequestsRequest = {}): Promise<QueryLastValsetRequestsResponse> {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastValsetRequests", data);
    return promise.then(data => QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
  }
  lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingValsetRequestByAddr", data);
    return promise.then(data => QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
  }
  lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> {
    const data = QueryLastEventByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastEventByAddr", data);
    return promise.then(data => QueryLastEventByAddrResponse.decode(new BinaryReader(data)));
  }
  getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> {
    const data = QueryPendingSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetPendingSendToEth", data);
    return promise.then(data => QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
  }
  batchFees(request: QueryBatchFeeRequest = {}): Promise<QueryBatchFeeResponse> {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchFees", data);
    return promise.then(data => QueryBatchFeeResponse.decode(new BinaryReader(data)));
  }
  outgoingTxBatches(request: QueryOutgoingTxBatchesRequest = {}): Promise<QueryOutgoingTxBatchesResponse> {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "OutgoingTxBatches", data);
    return promise.then(data => QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
  }
  lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingBatchRequestByAddr", data);
    return promise.then(data => QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
  }
  batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchRequestByNonce", data);
    return promise.then(data => QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
  }
  batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchConfirms", data);
    return promise.then(data => QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
  }
  eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
    const data = QueryERC20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ERC20ToDenom", data);
    return promise.then(data => QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
  }
  denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
    const data = QueryDenomToERC20Request.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "DenomToERC20", data);
    return promise.then(data => QueryDenomToERC20Response.decode(new BinaryReader(data)));
  }
  getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> {
    const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByValidator", data);
    return promise.then(data => QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
  }
  getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> {
    const data = QueryDelegateKeysByEthAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByEth", data);
    return promise.then(data => QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
  }
  getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
    const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByOrchestrator", data);
    return promise.then(data => QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
  }
  peggyModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "PeggyModuleState", data);
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
    currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse> {
      return queryService.currentValset(request);
    },
    valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
      return queryService.valsetRequest(request);
    },
    valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
      return queryService.valsetConfirm(request);
    },
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> {
      return queryService.valsetConfirmsByNonce(request);
    },
    lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse> {
      return queryService.lastValsetRequests(request);
    },
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> {
      return queryService.lastPendingValsetRequestByAddr(request);
    },
    lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> {
      return queryService.lastEventByAddr(request);
    },
    getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> {
      return queryService.getPendingSendToEth(request);
    },
    batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse> {
      return queryService.batchFees(request);
    },
    outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse> {
      return queryService.outgoingTxBatches(request);
    },
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> {
      return queryService.lastPendingBatchRequestByAddr(request);
    },
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
      return queryService.batchRequestByNonce(request);
    },
    batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
      return queryService.batchConfirms(request);
    },
    eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
      return queryService.eRC20ToDenom(request);
    },
    denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
      return queryService.denomToERC20(request);
    },
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> {
      return queryService.getDelegateKeyByValidator(request);
    },
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> {
      return queryService.getDelegateKeyByEth(request);
    },
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
      return queryService.getDelegateKeyByOrchestrator(request);
    },
    peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.peggyModuleState(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseCurrentValsetQuery<TData> extends ReactQueryParams<QueryCurrentValsetResponse, TData> {
  request?: QueryCurrentValsetRequest;
}
export interface UseValsetRequestQuery<TData> extends ReactQueryParams<QueryValsetRequestResponse, TData> {
  request: QueryValsetRequestRequest;
}
export interface UseValsetConfirmQuery<TData> extends ReactQueryParams<QueryValsetConfirmResponse, TData> {
  request: QueryValsetConfirmRequest;
}
export interface UseValsetConfirmsByNonceQuery<TData> extends ReactQueryParams<QueryValsetConfirmsByNonceResponse, TData> {
  request: QueryValsetConfirmsByNonceRequest;
}
export interface UseLastValsetRequestsQuery<TData> extends ReactQueryParams<QueryLastValsetRequestsResponse, TData> {
  request?: QueryLastValsetRequestsRequest;
}
export interface UseLastPendingValsetRequestByAddrQuery<TData> extends ReactQueryParams<QueryLastPendingValsetRequestByAddrResponse, TData> {
  request: QueryLastPendingValsetRequestByAddrRequest;
}
export interface UseLastEventByAddrQuery<TData> extends ReactQueryParams<QueryLastEventByAddrResponse, TData> {
  request: QueryLastEventByAddrRequest;
}
export interface UseGetPendingSendToEthQuery<TData> extends ReactQueryParams<QueryPendingSendToEthResponse, TData> {
  request: QueryPendingSendToEth;
}
export interface UseBatchFeesQuery<TData> extends ReactQueryParams<QueryBatchFeeResponse, TData> {
  request?: QueryBatchFeeRequest;
}
export interface UseOutgoingTxBatchesQuery<TData> extends ReactQueryParams<QueryOutgoingTxBatchesResponse, TData> {
  request?: QueryOutgoingTxBatchesRequest;
}
export interface UseLastPendingBatchRequestByAddrQuery<TData> extends ReactQueryParams<QueryLastPendingBatchRequestByAddrResponse, TData> {
  request: QueryLastPendingBatchRequestByAddrRequest;
}
export interface UseBatchRequestByNonceQuery<TData> extends ReactQueryParams<QueryBatchRequestByNonceResponse, TData> {
  request: QueryBatchRequestByNonceRequest;
}
export interface UseBatchConfirmsQuery<TData> extends ReactQueryParams<QueryBatchConfirmsResponse, TData> {
  request: QueryBatchConfirmsRequest;
}
export interface UseERC20ToDenomQuery<TData> extends ReactQueryParams<QueryERC20ToDenomResponse, TData> {
  request: QueryERC20ToDenomRequest;
}
export interface UseDenomToERC20Query<TData> extends ReactQueryParams<QueryDenomToERC20Response, TData> {
  request: QueryDenomToERC20Request;
}
export interface UseGetDelegateKeyByValidatorQuery<TData> extends ReactQueryParams<QueryDelegateKeysByValidatorAddressResponse, TData> {
  request: QueryDelegateKeysByValidatorAddress;
}
export interface UseGetDelegateKeyByEthQuery<TData> extends ReactQueryParams<QueryDelegateKeysByEthAddressResponse, TData> {
  request: QueryDelegateKeysByEthAddress;
}
export interface UseGetDelegateKeyByOrchestratorQuery<TData> extends ReactQueryParams<QueryDelegateKeysByOrchestratorAddressResponse, TData> {
  request: QueryDelegateKeysByOrchestratorAddress;
}
export interface UsePeggyModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
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
  const useCurrentValset = <TData = QueryCurrentValsetResponse,>({
    request,
    options
  }: UseCurrentValsetQuery<TData>) => {
    return useQuery<QueryCurrentValsetResponse, Error, TData>(["currentValsetQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentValset(request);
    }, options);
  };
  const useValsetRequest = <TData = QueryValsetRequestResponse,>({
    request,
    options
  }: UseValsetRequestQuery<TData>) => {
    return useQuery<QueryValsetRequestResponse, Error, TData>(["valsetRequestQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.valsetRequest(request);
    }, options);
  };
  const useValsetConfirm = <TData = QueryValsetConfirmResponse,>({
    request,
    options
  }: UseValsetConfirmQuery<TData>) => {
    return useQuery<QueryValsetConfirmResponse, Error, TData>(["valsetConfirmQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.valsetConfirm(request);
    }, options);
  };
  const useValsetConfirmsByNonce = <TData = QueryValsetConfirmsByNonceResponse,>({
    request,
    options
  }: UseValsetConfirmsByNonceQuery<TData>) => {
    return useQuery<QueryValsetConfirmsByNonceResponse, Error, TData>(["valsetConfirmsByNonceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.valsetConfirmsByNonce(request);
    }, options);
  };
  const useLastValsetRequests = <TData = QueryLastValsetRequestsResponse,>({
    request,
    options
  }: UseLastValsetRequestsQuery<TData>) => {
    return useQuery<QueryLastValsetRequestsResponse, Error, TData>(["lastValsetRequestsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lastValsetRequests(request);
    }, options);
  };
  const useLastPendingValsetRequestByAddr = <TData = QueryLastPendingValsetRequestByAddrResponse,>({
    request,
    options
  }: UseLastPendingValsetRequestByAddrQuery<TData>) => {
    return useQuery<QueryLastPendingValsetRequestByAddrResponse, Error, TData>(["lastPendingValsetRequestByAddrQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lastPendingValsetRequestByAddr(request);
    }, options);
  };
  const useLastEventByAddr = <TData = QueryLastEventByAddrResponse,>({
    request,
    options
  }: UseLastEventByAddrQuery<TData>) => {
    return useQuery<QueryLastEventByAddrResponse, Error, TData>(["lastEventByAddrQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lastEventByAddr(request);
    }, options);
  };
  const useGetPendingSendToEth = <TData = QueryPendingSendToEthResponse,>({
    request,
    options
  }: UseGetPendingSendToEthQuery<TData>) => {
    return useQuery<QueryPendingSendToEthResponse, Error, TData>(["getPendingSendToEthQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getPendingSendToEth(request);
    }, options);
  };
  const useBatchFees = <TData = QueryBatchFeeResponse,>({
    request,
    options
  }: UseBatchFeesQuery<TData>) => {
    return useQuery<QueryBatchFeeResponse, Error, TData>(["batchFeesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batchFees(request);
    }, options);
  };
  const useOutgoingTxBatches = <TData = QueryOutgoingTxBatchesResponse,>({
    request,
    options
  }: UseOutgoingTxBatchesQuery<TData>) => {
    return useQuery<QueryOutgoingTxBatchesResponse, Error, TData>(["outgoingTxBatchesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.outgoingTxBatches(request);
    }, options);
  };
  const useLastPendingBatchRequestByAddr = <TData = QueryLastPendingBatchRequestByAddrResponse,>({
    request,
    options
  }: UseLastPendingBatchRequestByAddrQuery<TData>) => {
    return useQuery<QueryLastPendingBatchRequestByAddrResponse, Error, TData>(["lastPendingBatchRequestByAddrQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lastPendingBatchRequestByAddr(request);
    }, options);
  };
  const useBatchRequestByNonce = <TData = QueryBatchRequestByNonceResponse,>({
    request,
    options
  }: UseBatchRequestByNonceQuery<TData>) => {
    return useQuery<QueryBatchRequestByNonceResponse, Error, TData>(["batchRequestByNonceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batchRequestByNonce(request);
    }, options);
  };
  const useBatchConfirms = <TData = QueryBatchConfirmsResponse,>({
    request,
    options
  }: UseBatchConfirmsQuery<TData>) => {
    return useQuery<QueryBatchConfirmsResponse, Error, TData>(["batchConfirmsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.batchConfirms(request);
    }, options);
  };
  const useERC20ToDenom = <TData = QueryERC20ToDenomResponse,>({
    request,
    options
  }: UseERC20ToDenomQuery<TData>) => {
    return useQuery<QueryERC20ToDenomResponse, Error, TData>(["eRC20ToDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.eRC20ToDenom(request);
    }, options);
  };
  const useDenomToERC20 = <TData = QueryDenomToERC20Response,>({
    request,
    options
  }: UseDenomToERC20Query<TData>) => {
    return useQuery<QueryDenomToERC20Response, Error, TData>(["denomToERC20Query", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomToERC20(request);
    }, options);
  };
  const useGetDelegateKeyByValidator = <TData = QueryDelegateKeysByValidatorAddressResponse,>({
    request,
    options
  }: UseGetDelegateKeyByValidatorQuery<TData>) => {
    return useQuery<QueryDelegateKeysByValidatorAddressResponse, Error, TData>(["getDelegateKeyByValidatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getDelegateKeyByValidator(request);
    }, options);
  };
  const useGetDelegateKeyByEth = <TData = QueryDelegateKeysByEthAddressResponse,>({
    request,
    options
  }: UseGetDelegateKeyByEthQuery<TData>) => {
    return useQuery<QueryDelegateKeysByEthAddressResponse, Error, TData>(["getDelegateKeyByEthQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getDelegateKeyByEth(request);
    }, options);
  };
  const useGetDelegateKeyByOrchestrator = <TData = QueryDelegateKeysByOrchestratorAddressResponse,>({
    request,
    options
  }: UseGetDelegateKeyByOrchestratorQuery<TData>) => {
    return useQuery<QueryDelegateKeysByOrchestratorAddressResponse, Error, TData>(["getDelegateKeyByOrchestratorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getDelegateKeyByOrchestrator(request);
    }, options);
  };
  const usePeggyModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UsePeggyModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["peggyModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.peggyModuleState(request);
    }, options);
  };
  return {
    /** Deployments queries deployments */useParams,
    /** valset */useCurrentValset,
    useValsetRequest,
    useValsetConfirm,
    useValsetConfirmsByNonce,
    useLastValsetRequests,
    useLastPendingValsetRequestByAddr,
    /** claim */useLastEventByAddr,
    /** batch */useGetPendingSendToEth,
    useBatchFees,
    useOutgoingTxBatches,
    useLastPendingBatchRequestByAddr,
    useBatchRequestByNonce,
    useBatchConfirms,
    useERC20ToDenom,
    useDenomToERC20,
    useGetDelegateKeyByValidator,
    useGetDelegateKeyByEth,
    useGetDelegateKeyByOrchestrator,
    /** Retrieves the entire peggy module's state */usePeggyModuleState
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
  class QueryCurrentValsetStore {
    store = new QueryStore<QueryCurrentValsetRequest, QueryCurrentValsetResponse>(queryService?.currentValset);
    currentValset(request: QueryCurrentValsetRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValsetRequestStore {
    store = new QueryStore<QueryValsetRequestRequest, QueryValsetRequestResponse>(queryService?.valsetRequest);
    valsetRequest(request: QueryValsetRequestRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValsetConfirmStore {
    store = new QueryStore<QueryValsetConfirmRequest, QueryValsetConfirmResponse>(queryService?.valsetConfirm);
    valsetConfirm(request: QueryValsetConfirmRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValsetConfirmsByNonceStore {
    store = new QueryStore<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>(queryService?.valsetConfirmsByNonce);
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLastValsetRequestsStore {
    store = new QueryStore<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>(queryService?.lastValsetRequests);
    lastValsetRequests(request: QueryLastValsetRequestsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLastPendingValsetRequestByAddrStore {
    store = new QueryStore<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>(queryService?.lastPendingValsetRequestByAddr);
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLastEventByAddrStore {
    store = new QueryStore<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>(queryService?.lastEventByAddr);
    lastEventByAddr(request: QueryLastEventByAddrRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetPendingSendToEthStore {
    store = new QueryStore<QueryPendingSendToEth, QueryPendingSendToEthResponse>(queryService?.getPendingSendToEth);
    getPendingSendToEth(request: QueryPendingSendToEth) {
      return this.store.getData(request);
    }
  }
  class QueryBatchFeesStore {
    store = new QueryStore<QueryBatchFeeRequest, QueryBatchFeeResponse>(queryService?.batchFees);
    batchFees(request: QueryBatchFeeRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOutgoingTxBatchesStore {
    store = new QueryStore<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>(queryService?.outgoingTxBatches);
    outgoingTxBatches(request: QueryOutgoingTxBatchesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLastPendingBatchRequestByAddrStore {
    store = new QueryStore<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>(queryService?.lastPendingBatchRequestByAddr);
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchRequestByNonceStore {
    store = new QueryStore<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>(queryService?.batchRequestByNonce);
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBatchConfirmsStore {
    store = new QueryStore<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>(queryService?.batchConfirms);
    batchConfirms(request: QueryBatchConfirmsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryERC20ToDenomStore {
    store = new QueryStore<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>(queryService?.eRC20ToDenom);
    eRC20ToDenom(request: QueryERC20ToDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomToERC20Store {
    store = new QueryStore<QueryDenomToERC20Request, QueryDenomToERC20Response>(queryService?.denomToERC20);
    denomToERC20(request: QueryDenomToERC20Request) {
      return this.store.getData(request);
    }
  }
  class QueryGetDelegateKeyByValidatorStore {
    store = new QueryStore<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>(queryService?.getDelegateKeyByValidator);
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress) {
      return this.store.getData(request);
    }
  }
  class QueryGetDelegateKeyByEthStore {
    store = new QueryStore<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>(queryService?.getDelegateKeyByEth);
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress) {
      return this.store.getData(request);
    }
  }
  class QueryGetDelegateKeyByOrchestratorStore {
    store = new QueryStore<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>(queryService?.getDelegateKeyByOrchestrator);
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress) {
      return this.store.getData(request);
    }
  }
  class QueryPeggyModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.peggyModuleState);
    peggyModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Deployments queries deployments */QueryParamsStore,
    /** valset */QueryCurrentValsetStore,
    QueryValsetRequestStore,
    QueryValsetConfirmStore,
    QueryValsetConfirmsByNonceStore,
    QueryLastValsetRequestsStore,
    QueryLastPendingValsetRequestByAddrStore,
    /** claim */QueryLastEventByAddrStore,
    /** batch */QueryGetPendingSendToEthStore,
    QueryBatchFeesStore,
    QueryOutgoingTxBatchesStore,
    QueryLastPendingBatchRequestByAddrStore,
    QueryBatchRequestByNonceStore,
    QueryBatchConfirmsStore,
    QueryERC20ToDenomStore,
    QueryDenomToERC20Store,
    QueryGetDelegateKeyByValidatorStore,
    QueryGetDelegateKeyByEthStore,
    QueryGetDelegateKeyByOrchestratorStore,
    /** Retrieves the entire peggy module's state */QueryPeggyModuleStateStore
  };
};