import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupAccountInfoRequest, QueryGroupAccountInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupAccountsByGroupRequest, QueryGroupAccountsByGroupResponse, QueryGroupAccountsByAdminRequest, QueryGroupAccountsByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupAccountRequest, QueryProposalsByGroupAccountResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse } from "./query";
/** Query is the regen.group.v1alpha1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
  /** GroupAccountInfo queries group account info based on group account address. */
  groupAccountInfo(request: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponse>;
  /** GroupMembers queries members of a group */
  groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
  /** GroupAccountsByGroup queries group accounts by group id. */
  groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponse>;
  /** GroupsByAdmin queries group accounts by admin address. */
  groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** ProposalsByGroupAccount queries proposals based on group account address. */
  proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal. */
  votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupAccountInfo = this.groupAccountInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupAccountsByGroup = this.groupAccountsByGroup.bind(this);
    this.groupAccountsByAdmin = this.groupAccountsByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupAccount = this.proposalsByGroupAccount.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
  }
  groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupInfo", data);
    return promise.then(data => QueryGroupInfoResponse.decode(new BinaryReader(data)));
  }
  groupAccountInfo(request: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponse> {
    const data = QueryGroupAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountInfo", data);
    return promise.then(data => QueryGroupAccountInfoResponse.decode(new BinaryReader(data)));
  }
  groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupMembers", data);
    return promise.then(data => QueryGroupMembersResponse.decode(new BinaryReader(data)));
  }
  groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupsByAdmin", data);
    return promise.then(data => QueryGroupsByAdminResponse.decode(new BinaryReader(data)));
  }
  groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponse> {
    const data = QueryGroupAccountsByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountsByGroup", data);
    return promise.then(data => QueryGroupAccountsByGroupResponse.decode(new BinaryReader(data)));
  }
  groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponse> {
    const data = QueryGroupAccountsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountsByAdmin", data);
    return promise.then(data => QueryGroupAccountsByAdminResponse.decode(new BinaryReader(data)));
  }
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  }
  proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponse> {
    const data = QueryProposalsByGroupAccountRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "ProposalsByGroupAccount", data);
    return promise.then(data => QueryProposalsByGroupAccountResponse.decode(new BinaryReader(data)));
  }
  voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "VoteByProposalVoter", data);
    return promise.then(data => QueryVoteByProposalVoterResponse.decode(new BinaryReader(data)));
  }
  votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "VotesByProposal", data);
    return promise.then(data => QueryVotesByProposalResponse.decode(new BinaryReader(data)));
  }
  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("regen.group.v1alpha1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
      return queryService.groupInfo(request);
    },
    groupAccountInfo(request: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponse> {
      return queryService.groupAccountInfo(request);
    },
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> {
      return queryService.groupMembers(request);
    },
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> {
      return queryService.groupsByAdmin(request);
    },
    groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponse> {
      return queryService.groupAccountsByGroup(request);
    },
    groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponse> {
      return queryService.groupAccountsByAdmin(request);
    },
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
      return queryService.proposal(request);
    },
    proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponse> {
      return queryService.proposalsByGroupAccount(request);
    },
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> {
      return queryService.votesByProposal(request);
    },
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
      return queryService.votesByVoter(request);
    }
  };
};
export interface UseGroupInfoQuery<TData> extends ReactQueryParams<QueryGroupInfoResponse, TData> {
  request: QueryGroupInfoRequest;
}
export interface UseGroupAccountInfoQuery<TData> extends ReactQueryParams<QueryGroupAccountInfoResponse, TData> {
  request: QueryGroupAccountInfoRequest;
}
export interface UseGroupMembersQuery<TData> extends ReactQueryParams<QueryGroupMembersResponse, TData> {
  request: QueryGroupMembersRequest;
}
export interface UseGroupsByAdminQuery<TData> extends ReactQueryParams<QueryGroupsByAdminResponse, TData> {
  request: QueryGroupsByAdminRequest;
}
export interface UseGroupAccountsByGroupQuery<TData> extends ReactQueryParams<QueryGroupAccountsByGroupResponse, TData> {
  request: QueryGroupAccountsByGroupRequest;
}
export interface UseGroupAccountsByAdminQuery<TData> extends ReactQueryParams<QueryGroupAccountsByAdminResponse, TData> {
  request: QueryGroupAccountsByAdminRequest;
}
export interface UseProposalQuery<TData> extends ReactQueryParams<QueryProposalResponse, TData> {
  request: QueryProposalRequest;
}
export interface UseProposalsByGroupAccountQuery<TData> extends ReactQueryParams<QueryProposalsByGroupAccountResponse, TData> {
  request: QueryProposalsByGroupAccountRequest;
}
export interface UseVoteByProposalVoterQuery<TData> extends ReactQueryParams<QueryVoteByProposalVoterResponse, TData> {
  request: QueryVoteByProposalVoterRequest;
}
export interface UseVotesByProposalQuery<TData> extends ReactQueryParams<QueryVotesByProposalResponse, TData> {
  request: QueryVotesByProposalRequest;
}
export interface UseVotesByVoterQuery<TData> extends ReactQueryParams<QueryVotesByVoterResponse, TData> {
  request: QueryVotesByVoterRequest;
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
  const useGroupInfo = <TData = QueryGroupInfoResponse,>({
    request,
    options
  }: UseGroupInfoQuery<TData>) => {
    return useQuery<QueryGroupInfoResponse, Error, TData>(["groupInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupInfo(request);
    }, options);
  };
  const useGroupAccountInfo = <TData = QueryGroupAccountInfoResponse,>({
    request,
    options
  }: UseGroupAccountInfoQuery<TData>) => {
    return useQuery<QueryGroupAccountInfoResponse, Error, TData>(["groupAccountInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupAccountInfo(request);
    }, options);
  };
  const useGroupMembers = <TData = QueryGroupMembersResponse,>({
    request,
    options
  }: UseGroupMembersQuery<TData>) => {
    return useQuery<QueryGroupMembersResponse, Error, TData>(["groupMembersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupMembers(request);
    }, options);
  };
  const useGroupsByAdmin = <TData = QueryGroupsByAdminResponse,>({
    request,
    options
  }: UseGroupsByAdminQuery<TData>) => {
    return useQuery<QueryGroupsByAdminResponse, Error, TData>(["groupsByAdminQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupsByAdmin(request);
    }, options);
  };
  const useGroupAccountsByGroup = <TData = QueryGroupAccountsByGroupResponse,>({
    request,
    options
  }: UseGroupAccountsByGroupQuery<TData>) => {
    return useQuery<QueryGroupAccountsByGroupResponse, Error, TData>(["groupAccountsByGroupQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupAccountsByGroup(request);
    }, options);
  };
  const useGroupAccountsByAdmin = <TData = QueryGroupAccountsByAdminResponse,>({
    request,
    options
  }: UseGroupAccountsByAdminQuery<TData>) => {
    return useQuery<QueryGroupAccountsByAdminResponse, Error, TData>(["groupAccountsByAdminQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupAccountsByAdmin(request);
    }, options);
  };
  const useProposal = <TData = QueryProposalResponse,>({
    request,
    options
  }: UseProposalQuery<TData>) => {
    return useQuery<QueryProposalResponse, Error, TData>(["proposalQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposal(request);
    }, options);
  };
  const useProposalsByGroupAccount = <TData = QueryProposalsByGroupAccountResponse,>({
    request,
    options
  }: UseProposalsByGroupAccountQuery<TData>) => {
    return useQuery<QueryProposalsByGroupAccountResponse, Error, TData>(["proposalsByGroupAccountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposalsByGroupAccount(request);
    }, options);
  };
  const useVoteByProposalVoter = <TData = QueryVoteByProposalVoterResponse,>({
    request,
    options
  }: UseVoteByProposalVoterQuery<TData>) => {
    return useQuery<QueryVoteByProposalVoterResponse, Error, TData>(["voteByProposalVoterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.voteByProposalVoter(request);
    }, options);
  };
  const useVotesByProposal = <TData = QueryVotesByProposalResponse,>({
    request,
    options
  }: UseVotesByProposalQuery<TData>) => {
    return useQuery<QueryVotesByProposalResponse, Error, TData>(["votesByProposalQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votesByProposal(request);
    }, options);
  };
  const useVotesByVoter = <TData = QueryVotesByVoterResponse,>({
    request,
    options
  }: UseVotesByVoterQuery<TData>) => {
    return useQuery<QueryVotesByVoterResponse, Error, TData>(["votesByVoterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votesByVoter(request);
    }, options);
  };
  return {
    /** GroupInfo queries group info based on group id. */useGroupInfo,
    /** GroupAccountInfo queries group account info based on group account address. */useGroupAccountInfo,
    /** GroupMembers queries members of a group */useGroupMembers,
    /** GroupsByAdmin queries groups by admin address. */useGroupsByAdmin,
    /** GroupAccountsByGroup queries group accounts by group id. */useGroupAccountsByGroup,
    /** GroupsByAdmin queries group accounts by admin address. */useGroupAccountsByAdmin,
    /** Proposal queries a proposal based on proposal id. */useProposal,
    /** ProposalsByGroupAccount queries proposals based on group account address. */useProposalsByGroupAccount,
    /** VoteByProposalVoter queries a vote by proposal id and voter. */useVoteByProposalVoter,
    /** VotesByProposal queries a vote by proposal. */useVotesByProposal,
    /** VotesByVoter queries a vote by voter. */useVotesByVoter
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryGroupInfoStore {
    store = new QueryStore<QueryGroupInfoRequest, QueryGroupInfoResponse>(queryService?.groupInfo);
    groupInfo(request: QueryGroupInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGroupAccountInfoStore {
    store = new QueryStore<QueryGroupAccountInfoRequest, QueryGroupAccountInfoResponse>(queryService?.groupAccountInfo);
    groupAccountInfo(request: QueryGroupAccountInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGroupMembersStore {
    store = new QueryStore<QueryGroupMembersRequest, QueryGroupMembersResponse>(queryService?.groupMembers);
    groupMembers(request: QueryGroupMembersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGroupsByAdminStore {
    store = new QueryStore<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>(queryService?.groupsByAdmin);
    groupsByAdmin(request: QueryGroupsByAdminRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGroupAccountsByGroupStore {
    store = new QueryStore<QueryGroupAccountsByGroupRequest, QueryGroupAccountsByGroupResponse>(queryService?.groupAccountsByGroup);
    groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGroupAccountsByAdminStore {
    store = new QueryStore<QueryGroupAccountsByAdminRequest, QueryGroupAccountsByAdminResponse>(queryService?.groupAccountsByAdmin);
    groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProposalStore {
    store = new QueryStore<QueryProposalRequest, QueryProposalResponse>(queryService?.proposal);
    proposal(request: QueryProposalRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProposalsByGroupAccountStore {
    store = new QueryStore<QueryProposalsByGroupAccountRequest, QueryProposalsByGroupAccountResponse>(queryService?.proposalsByGroupAccount);
    proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest) {
      return this.store.getData(request);
    }
  }
  class QueryVoteByProposalVoterStore {
    store = new QueryStore<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>(queryService?.voteByProposalVoter);
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest) {
      return this.store.getData(request);
    }
  }
  class QueryVotesByProposalStore {
    store = new QueryStore<QueryVotesByProposalRequest, QueryVotesByProposalResponse>(queryService?.votesByProposal);
    votesByProposal(request: QueryVotesByProposalRequest) {
      return this.store.getData(request);
    }
  }
  class QueryVotesByVoterStore {
    store = new QueryStore<QueryVotesByVoterRequest, QueryVotesByVoterResponse>(queryService?.votesByVoter);
    votesByVoter(request: QueryVotesByVoterRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** GroupInfo queries group info based on group id. */QueryGroupInfoStore,
    /** GroupAccountInfo queries group account info based on group account address. */QueryGroupAccountInfoStore,
    /** GroupMembers queries members of a group */QueryGroupMembersStore,
    /** GroupsByAdmin queries groups by admin address. */QueryGroupsByAdminStore,
    /** GroupAccountsByGroup queries group accounts by group id. */QueryGroupAccountsByGroupStore,
    /** GroupsByAdmin queries group accounts by admin address. */QueryGroupAccountsByAdminStore,
    /** Proposal queries a proposal based on proposal id. */QueryProposalStore,
    /** ProposalsByGroupAccount queries proposals based on group account address. */QueryProposalsByGroupAccountStore,
    /** VoteByProposalVoter queries a vote by proposal id and voter. */QueryVoteByProposalVoterStore,
    /** VotesByProposal queries a vote by proposal. */QueryVotesByProposalStore,
    /** VotesByVoter queries a vote by voter. */QueryVotesByVoterStore
  };
};