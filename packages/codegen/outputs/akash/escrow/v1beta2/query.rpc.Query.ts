import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.payments = this.payments.bind(this);
  }
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
  }
  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
    const data = QueryPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Payments", data);
    return promise.then(data => QueryPaymentsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },
    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
      return queryService.payments(request);
    }
  };
};
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
  request: QueryAccountsRequest;
}
export interface UsePaymentsQuery<TData> extends ReactQueryParams<QueryPaymentsResponse, TData> {
  request: QueryPaymentsRequest;
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
  const useAccounts = <TData = QueryAccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    return useQuery<QueryAccountsResponse, Error, TData>(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };
  const usePayments = <TData = QueryPaymentsResponse,>({
    request,
    options
  }: UsePaymentsQuery<TData>) => {
    return useQuery<QueryPaymentsResponse, Error, TData>(["paymentsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.payments(request);
    }, options);
  };
  return {
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    useAccounts,
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    usePayments
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryAccountsStore {
    store = new QueryStore<QueryAccountsRequest, QueryAccountsResponse>(queryService?.accounts);
    accounts(request: QueryAccountsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPaymentsStore {
    store = new QueryStore<QueryPaymentsRequest, QueryPaymentsResponse>(queryService?.payments);
    payments(request: QueryPaymentsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    QueryAccountsStore,
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    QueryPaymentsStore
  };
};