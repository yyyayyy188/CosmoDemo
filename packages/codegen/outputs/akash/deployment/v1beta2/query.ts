import { DeploymentFilters, DeploymentFiltersAmino, DeploymentFiltersSDKType, DeploymentID, DeploymentIDAmino, DeploymentIDSDKType, Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { Account, AccountAmino, AccountSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters: DeploymentFilters | undefined;
  pagination?: PageRequest | undefined;
}
export interface QueryDeploymentsRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest";
  value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestAmino {
  filters?: DeploymentFiltersAmino | undefined;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryDeploymentsRequestAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentsRequest";
  value: QueryDeploymentsRequestAmino;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestSDKType {
  filters: DeploymentFiltersSDKType | undefined;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination?: PageResponse | undefined;
}
export interface QueryDeploymentsResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
  value: Uint8Array;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseAmino {
  deployments?: QueryDeploymentResponseAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDeploymentsResponseAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
  value: QueryDeploymentsResponseAmino;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseSDKType {
  deployments: QueryDeploymentResponseSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id: DeploymentID | undefined;
}
export interface QueryDeploymentRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest";
  value: Uint8Array;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestAmino {
  id?: DeploymentIDAmino | undefined;
}
export interface QueryDeploymentRequestAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentRequest";
  value: QueryDeploymentRequestAmino;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestSDKType {
  id: DeploymentIDSDKType | undefined;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment: Deployment | undefined;
  groups: Group[];
  escrowAccount: Account | undefined;
}
export interface QueryDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse";
  value: Uint8Array;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseAmino {
  deployment: DeploymentAmino | undefined;
  groups: GroupAmino[];
  escrow_account?: AccountAmino | undefined;
}
export interface QueryDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentResponse";
  value: QueryDeploymentResponseAmino;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseSDKType {
  deployment: DeploymentSDKType | undefined;
  groups: GroupSDKType[];
  escrow_account: AccountSDKType | undefined;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id: GroupID | undefined;
}
export interface QueryGroupRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest";
  value: Uint8Array;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestAmino {
  id?: GroupIDAmino | undefined;
}
export interface QueryGroupRequestAminoMsg {
  type: "/akash.deployment.v1beta2.QueryGroupRequest";
  value: QueryGroupRequestAmino;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
  id: GroupIDSDKType | undefined;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group: Group | undefined;
}
export interface QueryGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse";
  value: Uint8Array;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseAmino {
  group?: GroupAmino | undefined;
}
export interface QueryGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta2.QueryGroupResponse";
  value: QueryGroupResponseAmino;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
  group: GroupSDKType | undefined;
}
function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    filters: DeploymentFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryDeploymentsRequest = {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest",
  encode(message: QueryDeploymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = DeploymentFilters.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentsRequest {
    return {
      filters: isSet(object.filters) ? DeploymentFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDeploymentsRequest): JsonSafe<QueryDeploymentsRequest> {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? DeploymentFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDeploymentsRequestSDKType): QueryDeploymentsRequest {
    return {
      filters: object.filters ? DeploymentFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDeploymentsRequest): QueryDeploymentsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentsRequestAmino): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeploymentsRequest): QueryDeploymentsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? DeploymentFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentsRequestAminoMsg): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentsRequestProtoMsg): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.decode(message.value);
  },
  toProto(message: QueryDeploymentsRequest): Uint8Array {
    return QueryDeploymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentsRequest): QueryDeploymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest",
      value: QueryDeploymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
  return {
    deployments: [],
    pagination: undefined
  };
}
export const QueryDeploymentsResponse = {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse",
  encode(message: QueryDeploymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments.push(QueryDeploymentResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDeploymentsResponse): JsonSafe<QueryDeploymentsResponse> {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDeploymentsResponse>): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDeploymentsResponseSDKType): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDeploymentsResponse): QueryDeploymentsResponseSDKType {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toSDK(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentsResponseAmino): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeploymentsResponse): QueryDeploymentsResponseAmino {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toAmino(e) : undefined);
    } else {
      obj.deployments = message.deployments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentsResponseAminoMsg): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentsResponseProtoMsg): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.decode(message.value);
  },
  toProto(message: QueryDeploymentsResponse): Uint8Array {
    return QueryDeploymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentsResponse): QueryDeploymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse",
      value: QueryDeploymentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return {
    id: DeploymentID.fromPartial({})
  };
}
export const QueryDeploymentRequest = {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest",
  encode(message: QueryDeploymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentRequest {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined
    };
  },
  toJSON(message: QueryDeploymentRequest): JsonSafe<QueryDeploymentRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
  fromSDK(object: QueryDeploymentRequestSDKType): QueryDeploymentRequest {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryDeploymentRequest): QueryDeploymentRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentRequestAmino): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryDeploymentRequest): QueryDeploymentRequestAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentRequestAminoMsg): QueryDeploymentRequest {
    return QueryDeploymentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentRequestProtoMsg): QueryDeploymentRequest {
    return QueryDeploymentRequest.decode(message.value);
  },
  toProto(message: QueryDeploymentRequest): Uint8Array {
    return QueryDeploymentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentRequest): QueryDeploymentRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest",
      value: QueryDeploymentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    deployment: Deployment.fromPartial({}),
    groups: [],
    escrowAccount: Account.fromPartial({})
  };
}
export const QueryDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse",
  encode(message: QueryDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        case 3:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentResponse {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      escrowAccount: isSet(object.escrowAccount) ? Account.fromJSON(object.escrowAccount) : undefined
    };
  },
  toJSON(message: QueryDeploymentResponse): JsonSafe<QueryDeploymentResponse> {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toJSON(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDeploymentResponse>): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
    return message;
  },
  fromSDK(object: QueryDeploymentResponseSDKType): QueryDeploymentResponse {
    return {
      deployment: object.deployment ? Deployment.fromSDK(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDK(e)) : [],
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },
  toSDK(message: QueryDeploymentResponse): QueryDeploymentResponseSDKType {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toSDK(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentResponseAmino): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromAmino(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    if (object.escrow_account !== undefined && object.escrow_account !== null) {
      message.escrowAccount = Account.fromAmino(object.escrow_account);
    }
    return message;
  },
  toAmino(message: QueryDeploymentResponse): QueryDeploymentResponseAmino {
    const obj: any = {};
    obj.deployment = message.deployment ? Deployment.toAmino(message.deployment) : Deployment.toAmino(Deployment.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentResponseAminoMsg): QueryDeploymentResponse {
    return QueryDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentResponseProtoMsg): QueryDeploymentResponse {
    return QueryDeploymentResponse.decode(message.value);
  },
  toProto(message: QueryDeploymentResponse): Uint8Array {
    return QueryDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentResponse): QueryDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse",
      value: QueryDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupRequest(): QueryGroupRequest {
  return {
    id: GroupID.fromPartial({})
  };
}
export const QueryGroupRequest = {
  typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest",
  encode(message: QueryGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupRequest {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },
  toJSON(message: QueryGroupRequest): JsonSafe<QueryGroupRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupRequestSDKType): QueryGroupRequest {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryGroupRequest): QueryGroupRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupRequestAmino): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryGroupRequest): QueryGroupRequestAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupRequestAminoMsg): QueryGroupRequest {
    return QueryGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupRequestProtoMsg): QueryGroupRequest {
    return QueryGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupRequest): Uint8Array {
    return QueryGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupRequest): QueryGroupRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest",
      value: QueryGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    group: Group.fromPartial({})
  };
}
export const QueryGroupResponse = {
  typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse",
  encode(message: QueryGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupResponse {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined
    };
  },
  toJSON(message: QueryGroupResponse): JsonSafe<QueryGroupResponse> {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupResponseSDKType): QueryGroupResponse {
    return {
      group: object.group ? Group.fromSDK(object.group) : undefined
    };
  },
  toSDK(message: QueryGroupResponse): QueryGroupResponseSDKType {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toSDK(message.group) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupResponseAmino): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    return message;
  },
  toAmino(message: QueryGroupResponse): QueryGroupResponseAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupResponseAminoMsg): QueryGroupResponse {
    return QueryGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupResponseProtoMsg): QueryGroupResponse {
    return QueryGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupResponse): Uint8Array {
    return QueryGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupResponse): QueryGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse",
      value: QueryGroupResponse.encode(message).finish()
    };
  }
};