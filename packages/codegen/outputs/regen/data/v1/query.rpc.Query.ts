import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryByIRIRequest, QueryByIRIResponse, QueryByHashRequest, QueryByHashResponse, QueryByAttestorRequest, QueryByAttestorResponse, QueryIRIByHashRequest, QueryIRIByHashResponse, QueryIRIByRawHashRequest, QueryIRIByRawHashResponse, QueryIRIByGraphHashRequest, QueryIRIByGraphHashResponse, QueryHashByIRIRequest, QueryHashByIRIResponse, QueryAttestorsByIRIRequest, QueryAttestorsByIRIResponse, QueryAttestorsByHashRequest, QueryAttestorsByHashResponse, QueryResolversByIRIRequest, QueryResolversByIRIResponse, QueryResolversByHashRequest, QueryResolversByHashResponse, QueryResolverInfoRequest, QueryResolverInfoResponse } from "./query";
/** Query is the regen.data.v1 Query service */
export interface Query {
  /** ByIRI queries data based on IRI. */
  byIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse>;
  /** ByHash queries data based on ContentHash. */
  byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
  /** ByAttestor queries data based on attestor. */
  byAttestor(request: QueryByAttestorRequest): Promise<QueryByAttestorResponse>;
  /** IRIByHash queries IRI based on ContentHash. */
  iRIByHash(request: QueryIRIByHashRequest): Promise<QueryIRIByHashResponse>;
  /** IRIByRawHash queries IRI based on ContentHash_Raw properties. */
  iRIByRawHash(request: QueryIRIByRawHashRequest): Promise<QueryIRIByRawHashResponse>;
  /** IRIByGraphHash queries IRI based on ContentHash_Graph properties. */
  iRIByGraphHash(request: QueryIRIByGraphHashRequest): Promise<QueryIRIByGraphHashResponse>;
  /** HashByIRI queries ContentHash based on IRI. */
  hashByIRI(request: QueryHashByIRIRequest): Promise<QueryHashByIRIResponse>;
  /** AttestorsByIRI queries attestors based on IRI. */
  attestorsByIRI(request: QueryAttestorsByIRIRequest): Promise<QueryAttestorsByIRIResponse>;
  /** AttestorsByHash queries attestors based on ContentHash. */
  attestorsByHash(request: QueryAttestorsByHashRequest): Promise<QueryAttestorsByHashResponse>;
  /** ResolversByIRI queries resolvers based on IRI. */
  resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
  /** ResolversByHash queries resolvers based on ContentHash. */
  resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
  /** ResolverInfo queries information about a resolved based on URL. */
  resolverInfo(request: QueryResolverInfoRequest): Promise<QueryResolverInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.byIRI = this.byIRI.bind(this);
    this.byHash = this.byHash.bind(this);
    this.byAttestor = this.byAttestor.bind(this);
    this.iRIByHash = this.iRIByHash.bind(this);
    this.iRIByRawHash = this.iRIByRawHash.bind(this);
    this.iRIByGraphHash = this.iRIByGraphHash.bind(this);
    this.hashByIRI = this.hashByIRI.bind(this);
    this.attestorsByIRI = this.attestorsByIRI.bind(this);
    this.attestorsByHash = this.attestorsByHash.bind(this);
    this.resolversByIRI = this.resolversByIRI.bind(this);
    this.resolversByHash = this.resolversByHash.bind(this);
    this.resolverInfo = this.resolverInfo.bind(this);
  }
  byIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse> {
    const data = QueryByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ByIRI", data);
    return promise.then(data => QueryByIRIResponse.decode(new BinaryReader(data)));
  }
  byHash(request: QueryByHashRequest): Promise<QueryByHashResponse> {
    const data = QueryByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ByHash", data);
    return promise.then(data => QueryByHashResponse.decode(new BinaryReader(data)));
  }
  byAttestor(request: QueryByAttestorRequest): Promise<QueryByAttestorResponse> {
    const data = QueryByAttestorRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ByAttestor", data);
    return promise.then(data => QueryByAttestorResponse.decode(new BinaryReader(data)));
  }
  iRIByHash(request: QueryIRIByHashRequest): Promise<QueryIRIByHashResponse> {
    const data = QueryIRIByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "IRIByHash", data);
    return promise.then(data => QueryIRIByHashResponse.decode(new BinaryReader(data)));
  }
  iRIByRawHash(request: QueryIRIByRawHashRequest): Promise<QueryIRIByRawHashResponse> {
    const data = QueryIRIByRawHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "IRIByRawHash", data);
    return promise.then(data => QueryIRIByRawHashResponse.decode(new BinaryReader(data)));
  }
  iRIByGraphHash(request: QueryIRIByGraphHashRequest): Promise<QueryIRIByGraphHashResponse> {
    const data = QueryIRIByGraphHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "IRIByGraphHash", data);
    return promise.then(data => QueryIRIByGraphHashResponse.decode(new BinaryReader(data)));
  }
  hashByIRI(request: QueryHashByIRIRequest): Promise<QueryHashByIRIResponse> {
    const data = QueryHashByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "HashByIRI", data);
    return promise.then(data => QueryHashByIRIResponse.decode(new BinaryReader(data)));
  }
  attestorsByIRI(request: QueryAttestorsByIRIRequest): Promise<QueryAttestorsByIRIResponse> {
    const data = QueryAttestorsByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AttestorsByIRI", data);
    return promise.then(data => QueryAttestorsByIRIResponse.decode(new BinaryReader(data)));
  }
  attestorsByHash(request: QueryAttestorsByHashRequest): Promise<QueryAttestorsByHashResponse> {
    const data = QueryAttestorsByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AttestorsByHash", data);
    return promise.then(data => QueryAttestorsByHashResponse.decode(new BinaryReader(data)));
  }
  resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse> {
    const data = QueryResolversByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ResolversByIRI", data);
    return promise.then(data => QueryResolversByIRIResponse.decode(new BinaryReader(data)));
  }
  resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse> {
    const data = QueryResolversByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ResolversByHash", data);
    return promise.then(data => QueryResolversByHashResponse.decode(new BinaryReader(data)));
  }
  resolverInfo(request: QueryResolverInfoRequest): Promise<QueryResolverInfoResponse> {
    const data = QueryResolverInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ResolverInfo", data);
    return promise.then(data => QueryResolverInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    byIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse> {
      return queryService.byIRI(request);
    },
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse> {
      return queryService.byHash(request);
    },
    byAttestor(request: QueryByAttestorRequest): Promise<QueryByAttestorResponse> {
      return queryService.byAttestor(request);
    },
    iRIByHash(request: QueryIRIByHashRequest): Promise<QueryIRIByHashResponse> {
      return queryService.iRIByHash(request);
    },
    iRIByRawHash(request: QueryIRIByRawHashRequest): Promise<QueryIRIByRawHashResponse> {
      return queryService.iRIByRawHash(request);
    },
    iRIByGraphHash(request: QueryIRIByGraphHashRequest): Promise<QueryIRIByGraphHashResponse> {
      return queryService.iRIByGraphHash(request);
    },
    hashByIRI(request: QueryHashByIRIRequest): Promise<QueryHashByIRIResponse> {
      return queryService.hashByIRI(request);
    },
    attestorsByIRI(request: QueryAttestorsByIRIRequest): Promise<QueryAttestorsByIRIResponse> {
      return queryService.attestorsByIRI(request);
    },
    attestorsByHash(request: QueryAttestorsByHashRequest): Promise<QueryAttestorsByHashResponse> {
      return queryService.attestorsByHash(request);
    },
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse> {
      return queryService.resolversByIRI(request);
    },
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse> {
      return queryService.resolversByHash(request);
    },
    resolverInfo(request: QueryResolverInfoRequest): Promise<QueryResolverInfoResponse> {
      return queryService.resolverInfo(request);
    }
  };
};
export interface UseByIRIQuery<TData> extends ReactQueryParams<QueryByIRIResponse, TData> {
  request: QueryByIRIRequest;
}
export interface UseByHashQuery<TData> extends ReactQueryParams<QueryByHashResponse, TData> {
  request: QueryByHashRequest;
}
export interface UseByAttestorQuery<TData> extends ReactQueryParams<QueryByAttestorResponse, TData> {
  request: QueryByAttestorRequest;
}
export interface UseIRIByHashQuery<TData> extends ReactQueryParams<QueryIRIByHashResponse, TData> {
  request: QueryIRIByHashRequest;
}
export interface UseIRIByRawHashQuery<TData> extends ReactQueryParams<QueryIRIByRawHashResponse, TData> {
  request: QueryIRIByRawHashRequest;
}
export interface UseIRIByGraphHashQuery<TData> extends ReactQueryParams<QueryIRIByGraphHashResponse, TData> {
  request: QueryIRIByGraphHashRequest;
}
export interface UseHashByIRIQuery<TData> extends ReactQueryParams<QueryHashByIRIResponse, TData> {
  request: QueryHashByIRIRequest;
}
export interface UseAttestorsByIRIQuery<TData> extends ReactQueryParams<QueryAttestorsByIRIResponse, TData> {
  request: QueryAttestorsByIRIRequest;
}
export interface UseAttestorsByHashQuery<TData> extends ReactQueryParams<QueryAttestorsByHashResponse, TData> {
  request: QueryAttestorsByHashRequest;
}
export interface UseResolversByIRIQuery<TData> extends ReactQueryParams<QueryResolversByIRIResponse, TData> {
  request: QueryResolversByIRIRequest;
}
export interface UseResolversByHashQuery<TData> extends ReactQueryParams<QueryResolversByHashResponse, TData> {
  request: QueryResolversByHashRequest;
}
export interface UseResolverInfoQuery<TData> extends ReactQueryParams<QueryResolverInfoResponse, TData> {
  request: QueryResolverInfoRequest;
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
  const useByIRI = <TData = QueryByIRIResponse,>({
    request,
    options
  }: UseByIRIQuery<TData>) => {
    return useQuery<QueryByIRIResponse, Error, TData>(["byIRIQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.byIRI(request);
    }, options);
  };
  const useByHash = <TData = QueryByHashResponse,>({
    request,
    options
  }: UseByHashQuery<TData>) => {
    return useQuery<QueryByHashResponse, Error, TData>(["byHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.byHash(request);
    }, options);
  };
  const useByAttestor = <TData = QueryByAttestorResponse,>({
    request,
    options
  }: UseByAttestorQuery<TData>) => {
    return useQuery<QueryByAttestorResponse, Error, TData>(["byAttestorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.byAttestor(request);
    }, options);
  };
  const useIRIByHash = <TData = QueryIRIByHashResponse,>({
    request,
    options
  }: UseIRIByHashQuery<TData>) => {
    return useQuery<QueryIRIByHashResponse, Error, TData>(["iRIByHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.iRIByHash(request);
    }, options);
  };
  const useIRIByRawHash = <TData = QueryIRIByRawHashResponse,>({
    request,
    options
  }: UseIRIByRawHashQuery<TData>) => {
    return useQuery<QueryIRIByRawHashResponse, Error, TData>(["iRIByRawHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.iRIByRawHash(request);
    }, options);
  };
  const useIRIByGraphHash = <TData = QueryIRIByGraphHashResponse,>({
    request,
    options
  }: UseIRIByGraphHashQuery<TData>) => {
    return useQuery<QueryIRIByGraphHashResponse, Error, TData>(["iRIByGraphHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.iRIByGraphHash(request);
    }, options);
  };
  const useHashByIRI = <TData = QueryHashByIRIResponse,>({
    request,
    options
  }: UseHashByIRIQuery<TData>) => {
    return useQuery<QueryHashByIRIResponse, Error, TData>(["hashByIRIQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.hashByIRI(request);
    }, options);
  };
  const useAttestorsByIRI = <TData = QueryAttestorsByIRIResponse,>({
    request,
    options
  }: UseAttestorsByIRIQuery<TData>) => {
    return useQuery<QueryAttestorsByIRIResponse, Error, TData>(["attestorsByIRIQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.attestorsByIRI(request);
    }, options);
  };
  const useAttestorsByHash = <TData = QueryAttestorsByHashResponse,>({
    request,
    options
  }: UseAttestorsByHashQuery<TData>) => {
    return useQuery<QueryAttestorsByHashResponse, Error, TData>(["attestorsByHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.attestorsByHash(request);
    }, options);
  };
  const useResolversByIRI = <TData = QueryResolversByIRIResponse,>({
    request,
    options
  }: UseResolversByIRIQuery<TData>) => {
    return useQuery<QueryResolversByIRIResponse, Error, TData>(["resolversByIRIQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.resolversByIRI(request);
    }, options);
  };
  const useResolversByHash = <TData = QueryResolversByHashResponse,>({
    request,
    options
  }: UseResolversByHashQuery<TData>) => {
    return useQuery<QueryResolversByHashResponse, Error, TData>(["resolversByHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.resolversByHash(request);
    }, options);
  };
  const useResolverInfo = <TData = QueryResolverInfoResponse,>({
    request,
    options
  }: UseResolverInfoQuery<TData>) => {
    return useQuery<QueryResolverInfoResponse, Error, TData>(["resolverInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.resolverInfo(request);
    }, options);
  };
  return {
    /** ByIRI queries data based on IRI. */useByIRI,
    /** ByHash queries data based on ContentHash. */useByHash,
    /** ByAttestor queries data based on attestor. */useByAttestor,
    /** IRIByHash queries IRI based on ContentHash. */useIRIByHash,
    /** IRIByRawHash queries IRI based on ContentHash_Raw properties. */useIRIByRawHash,
    /** IRIByGraphHash queries IRI based on ContentHash_Graph properties. */useIRIByGraphHash,
    /** HashByIRI queries ContentHash based on IRI. */useHashByIRI,
    /** AttestorsByIRI queries attestors based on IRI. */useAttestorsByIRI,
    /** AttestorsByHash queries attestors based on ContentHash. */useAttestorsByHash,
    /** ResolversByIRI queries resolvers based on IRI. */useResolversByIRI,
    /** ResolversByHash queries resolvers based on ContentHash. */useResolversByHash,
    /** ResolverInfo queries information about a resolved based on URL. */useResolverInfo
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryByIRIStore {
    store = new QueryStore<QueryByIRIRequest, QueryByIRIResponse>(queryService?.byIRI);
    byIRI(request: QueryByIRIRequest) {
      return this.store.getData(request);
    }
  }
  class QueryByHashStore {
    store = new QueryStore<QueryByHashRequest, QueryByHashResponse>(queryService?.byHash);
    byHash(request: QueryByHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryByAttestorStore {
    store = new QueryStore<QueryByAttestorRequest, QueryByAttestorResponse>(queryService?.byAttestor);
    byAttestor(request: QueryByAttestorRequest) {
      return this.store.getData(request);
    }
  }
  class QueryIRIByHashStore {
    store = new QueryStore<QueryIRIByHashRequest, QueryIRIByHashResponse>(queryService?.iRIByHash);
    iRIByHash(request: QueryIRIByHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryIRIByRawHashStore {
    store = new QueryStore<QueryIRIByRawHashRequest, QueryIRIByRawHashResponse>(queryService?.iRIByRawHash);
    iRIByRawHash(request: QueryIRIByRawHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryIRIByGraphHashStore {
    store = new QueryStore<QueryIRIByGraphHashRequest, QueryIRIByGraphHashResponse>(queryService?.iRIByGraphHash);
    iRIByGraphHash(request: QueryIRIByGraphHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryHashByIRIStore {
    store = new QueryStore<QueryHashByIRIRequest, QueryHashByIRIResponse>(queryService?.hashByIRI);
    hashByIRI(request: QueryHashByIRIRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAttestorsByIRIStore {
    store = new QueryStore<QueryAttestorsByIRIRequest, QueryAttestorsByIRIResponse>(queryService?.attestorsByIRI);
    attestorsByIRI(request: QueryAttestorsByIRIRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAttestorsByHashStore {
    store = new QueryStore<QueryAttestorsByHashRequest, QueryAttestorsByHashResponse>(queryService?.attestorsByHash);
    attestorsByHash(request: QueryAttestorsByHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryResolversByIRIStore {
    store = new QueryStore<QueryResolversByIRIRequest, QueryResolversByIRIResponse>(queryService?.resolversByIRI);
    resolversByIRI(request: QueryResolversByIRIRequest) {
      return this.store.getData(request);
    }
  }
  class QueryResolversByHashStore {
    store = new QueryStore<QueryResolversByHashRequest, QueryResolversByHashResponse>(queryService?.resolversByHash);
    resolversByHash(request: QueryResolversByHashRequest) {
      return this.store.getData(request);
    }
  }
  class QueryResolverInfoStore {
    store = new QueryStore<QueryResolverInfoRequest, QueryResolverInfoResponse>(queryService?.resolverInfo);
    resolverInfo(request: QueryResolverInfoRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** ByIRI queries data based on IRI. */QueryByIRIStore,
    /** ByHash queries data based on ContentHash. */QueryByHashStore,
    /** ByAttestor queries data based on attestor. */QueryByAttestorStore,
    /** IRIByHash queries IRI based on ContentHash. */QueryIRIByHashStore,
    /** IRIByRawHash queries IRI based on ContentHash_Raw properties. */QueryIRIByRawHashStore,
    /** IRIByGraphHash queries IRI based on ContentHash_Graph properties. */QueryIRIByGraphHashStore,
    /** HashByIRI queries ContentHash based on IRI. */QueryHashByIRIStore,
    /** AttestorsByIRI queries attestors based on IRI. */QueryAttestorsByIRIStore,
    /** AttestorsByHash queries attestors based on ContentHash. */QueryAttestorsByHashStore,
    /** ResolversByIRI queries resolvers based on IRI. */QueryResolversByIRIStore,
    /** ResolversByHash queries resolvers based on ContentHash. */QueryResolversByHashStore,
    /** ResolverInfo queries information about a resolved based on URL. */QueryResolverInfoStore
  };
};