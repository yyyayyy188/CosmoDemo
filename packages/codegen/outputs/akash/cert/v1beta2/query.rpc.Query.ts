import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.certificates = this.certificates.bind(this);
  }
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
      return queryService.certificates(request);
    }
  };
};
export interface UseCertificatesQuery<TData> extends ReactQueryParams<QueryCertificatesResponse, TData> {
  request: QueryCertificatesRequest;
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
  const useCertificates = <TData = QueryCertificatesResponse,>({
    request,
    options
  }: UseCertificatesQuery<TData>) => {
    return useQuery<QueryCertificatesResponse, Error, TData>(["certificatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.certificates(request);
    }, options);
  };
  return {
    /** Certificates queries certificates */useCertificates
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryCertificatesStore {
    store = new QueryStore<QueryCertificatesRequest, QueryCertificatesResponse>(queryService?.certificates);
    certificates(request: QueryCertificatesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Certificates queries certificates */QueryCertificatesStore
  };
};