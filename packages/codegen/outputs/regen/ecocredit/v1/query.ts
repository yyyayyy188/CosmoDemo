import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { Params, ParamsAmino, ParamsSDKType } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassesRequest";
  value: Uint8Array;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryClassesRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassesRequest";
  value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
  /** classes are the fetched credit classes. */
  classes: ClassInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassesResponse";
  value: Uint8Array;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseAmino {
  /** classes are the fetched credit classes. */
  classes?: ClassInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryClassesResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassesResponse";
  value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
  classes: ClassInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequest {
  /** admin is the address of the admin of the class. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryClassesByAdminRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest";
  value: Uint8Array;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestAmino {
  /** admin is the address of the admin of the class. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryClassesByAdminRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassesByAdminRequest";
  value: QueryClassesByAdminRequestAmino;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponse {
  /** classes are the fetched credit classes. */
  classes: ClassInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryClassesByAdminResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse";
  value: Uint8Array;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseAmino {
  /** classes are the fetched credit classes. */
  classes?: ClassInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryClassesByAdminResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassesByAdminResponse";
  value: QueryClassesByAdminResponseAmino;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseSDKType {
  classes: ClassInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequest {
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
}
export interface QueryClassRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassRequest";
  value: Uint8Array;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestAmino {
  /** class_id is the unique identifier of the credit class to query. */
  class_id?: string;
}
export interface QueryClassRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassRequest";
  value: QueryClassRequestAmino;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestSDKType {
  class_id: string;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponse {
  /** class is the fetched credit class. */
  class?: ClassInfo | undefined;
}
export interface QueryClassResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassResponse";
  value: Uint8Array;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseAmino {
  /** class is the fetched credit class. */
  class?: ClassInfoAmino | undefined;
}
export interface QueryClassResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassResponse";
  value: QueryClassResponseAmino;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseSDKType {
  class?: ClassInfoSDKType | undefined;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequest {
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryClassIssuersRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest";
  value: Uint8Array;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestAmino {
  /** class_id is the unique identifier of the credit class to query. */
  class_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryClassIssuersRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassIssuersRequest";
  value: QueryClassIssuersRequestAmino;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponse {
  /** issuers is a list of issuers for the credit class */
  issuers: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryClassIssuersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse";
  value: Uint8Array;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseAmino {
  /** issuers is a list of issuers for the credit class */
  issuers?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryClassIssuersResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassIssuersResponse";
  value: QueryClassIssuersResponseAmino;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseSDKType {
  issuers: string[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryProjectsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest";
  value: Uint8Array;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestAmino {
  /** class_id is the unique identifier of the credit class to query. */
  class_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryProjectsRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryProjectsRequest";
  value: QueryProjectsRequestAmino;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
  /** projects are the fetched projects. */
  projects: ProjectInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryProjectsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse";
  value: Uint8Array;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseAmino {
  /** projects are the fetched projects. */
  projects?: ProjectInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryProjectsResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryProjectsResponse";
  value: QueryProjectsResponseAmino;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseSDKType {
  projects: ProjectInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequest {
  /** reference_id is the project reference id. */
  referenceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryProjectsByReferenceIdRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest";
  value: Uint8Array;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestAmino {
  /** reference_id is the project reference id. */
  reference_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryProjectsByReferenceIdRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest";
  value: QueryProjectsByReferenceIdRequestAmino;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestSDKType {
  reference_id: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponse {
  /** projects are the fetched projects. */
  projects: ProjectInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryProjectsByReferenceIdResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse";
  value: Uint8Array;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseAmino {
  /** projects are the fetched projects. */
  projects?: ProjectInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryProjectsByReferenceIdResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse";
  value: QueryProjectsByReferenceIdResponseAmino;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseSDKType {
  projects: ProjectInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequest {
  /** project_id is the unique identifier of the project to query. */
  projectId: string;
}
export interface QueryProjectRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryProjectRequest";
  value: Uint8Array;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestAmino {
  /** project_id is the unique identifier of the project to query. */
  project_id?: string;
}
export interface QueryProjectRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryProjectRequest";
  value: QueryProjectRequestAmino;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestSDKType {
  project_id: string;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponse {
  /** project is the fetched project. */
  project?: ProjectInfo | undefined;
}
export interface QueryProjectResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryProjectResponse";
  value: Uint8Array;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseAmino {
  /** project is the fetched project. */
  project?: ProjectInfoAmino | undefined;
}
export interface QueryProjectResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryProjectResponse";
  value: QueryProjectResponseAmino;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseSDKType {
  project?: ProjectInfoSDKType | undefined;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
  /** project_id is the unique identifier of the project to query. */
  projectId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryBatchesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest";
  value: Uint8Array;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestAmino {
  /** project_id is the unique identifier of the project to query. */
  project_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryBatchesRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchesRequest";
  value: QueryBatchesRequestAmino;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
  project_id: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryBatchesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse";
  value: Uint8Array;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseAmino {
  /** batches are the fetched credit batches. */
  batches?: BatchInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryBatchesResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchesResponse";
  value: QueryBatchesResponseAmino;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
  batches: BatchInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequest {
  /** issuer is the address that issued the batch */
  issuer: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryBatchesByIssuerRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest";
  value: Uint8Array;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestAmino {
  /** issuer is the address that issued the batch */
  issuer?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryBatchesByIssuerRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest";
  value: QueryBatchesByIssuerRequestAmino;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestSDKType {
  issuer: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponse {
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryBatchesByIssuerResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse";
  value: Uint8Array;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseAmino {
  /** batches are the fetched credit batches. */
  batches?: BatchInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryBatchesByIssuerResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse";
  value: QueryBatchesByIssuerResponseAmino;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseSDKType {
  batches: BatchInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequest {
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryBatchesByClassRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest";
  value: Uint8Array;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestAmino {
  /** class_id is the unique identifier of the credit class to query. */
  class_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryBatchesByClassRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchesByClassRequest";
  value: QueryBatchesByClassRequestAmino;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponse {
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryBatchesByClassResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse";
  value: Uint8Array;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseAmino {
  /** batches are the fetched credit batches. */
  batches?: BatchInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryBatchesByClassResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchesByClassResponse";
  value: QueryBatchesByClassResponseAmino;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseSDKType {
  batches: BatchInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequest {
  /** batch_denom is the unique identifier of the credit batch to query. */
  batchDenom: string;
}
export interface QueryBatchRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchRequest";
  value: Uint8Array;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestAmino {
  /** batch_denom is the unique identifier of the credit batch to query. */
  batch_denom?: string;
}
export interface QueryBatchRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchRequest";
  value: QueryBatchRequestAmino;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestSDKType {
  batch_denom: string;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponse {
  /** batch is the fetched credit batch. */
  batch?: BatchInfo | undefined;
}
export interface QueryBatchResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBatchResponse";
  value: Uint8Array;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseAmino {
  /** batch is the fetched credit batch. */
  batch?: BatchInfoAmino | undefined;
}
export interface QueryBatchResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryBatchResponse";
  value: QueryBatchResponseAmino;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseSDKType {
  batch?: BatchInfoSDKType | undefined;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
  /** account is the address of the account whose balance is being queried. */
  account: string;
  /** batch_denom is the unique identifier of the credit batch to query. */
  batchDenom: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestAmino {
  /** account is the address of the account whose balance is being queried. */
  account?: string;
  /** batch_denom is the unique identifier of the credit batch to query. */
  batch_denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
  account: string;
  batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
  /** balance is the balance of the given account. */
  balance?: BatchBalanceInfo | undefined;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseAmino {
  /** balance is the balance of the given account. */
  balance?: BatchBalanceInfoAmino | undefined;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
  balance?: BatchBalanceInfoSDKType | undefined;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequest {
  /** account is the address of the account whose balance is being queried. */
  account: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryBalancesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest";
  value: Uint8Array;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestAmino {
  /** account is the address of the account whose balance is being queried. */
  account?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryBalancesRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryBalancesRequest";
  value: QueryBalancesRequestAmino;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestSDKType {
  account: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponse {
  /**
   * balances are a list of balances from different credit batches that the
   * account holds.
   */
  balances: BatchBalanceInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryBalancesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse";
  value: Uint8Array;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseAmino {
  /**
   * balances are a list of balances from different credit batches that the
   * account holds.
   */
  balances?: BatchBalanceInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryBalancesResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryBalancesResponse";
  value: QueryBalancesResponseAmino;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseSDKType {
  balances: BatchBalanceInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
  /** batch_denom is the unique identifier of the credit batch to query. */
  batchDenom: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest";
  value: Uint8Array;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestAmino {
  /** batch_denom is the unique identifier of the credit batch to query. */
  batch_denom?: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "/regen.ecocredit.v1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
  batch_denom: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
  /**
   * tradable_supply is the decimal number of tradable credits in the batch
   * supply.
   */
  tradableSupply: string;
  /**
   * retired_supply is the decimal number of retired credits in the batch
   * supply.
   */
  retiredSupply: string;
  /**
   * cancelled_amount is the decimal number of cancelled credits in the batch
   * supply.
   */
  cancelledAmount: string;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse";
  value: Uint8Array;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseAmino {
  /**
   * tradable_supply is the decimal number of tradable credits in the batch
   * supply.
   */
  tradable_supply?: string;
  /**
   * retired_supply is the decimal number of retired credits in the batch
   * supply.
   */
  retired_supply?: string;
  /**
   * cancelled_amount is the decimal number of cancelled credits in the batch
   * supply.
   */
  cancelled_amount?: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/regen.ecocredit.v1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
  tradable_supply: string;
  retired_supply: string;
  cancelled_amount: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {}
export interface QueryCreditTypesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest";
  value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestAmino {}
export interface QueryCreditTypesRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryCreditTypesRequest";
  value: QueryCreditTypesRequestAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
  /** credit_types are the fetched credit types. */
  creditTypes: CreditType[];
}
export interface QueryCreditTypesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse";
  value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseAmino {
  /** credit_types are the fetched credit types. */
  credit_types?: CreditTypeAmino[];
}
export interface QueryCreditTypesResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryCreditTypesResponse";
  value: QueryCreditTypesResponseAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
  credit_types: CreditTypeSDKType[];
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
  /** params defines the parameters of the ecocredit module. */
  params?: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the ecocredit module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/regen.ecocredit.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType | undefined;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfo {
  /** id is the unique identifier of the credit class. */
  id: string;
  /** admin is the admin of the credit class. */
  admin: string;
  /** metadata is the arbitrary metadata attached to the credit class. */
  metadata: string;
  /**
   * credit_type_abbrev is the abbreviation of the credit type within which this
   * credit class was created.
   */
  creditTypeAbbrev: string;
}
export interface ClassInfoProtoMsg {
  typeUrl: "/regen.ecocredit.v1.ClassInfo";
  value: Uint8Array;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoAmino {
  /** id is the unique identifier of the credit class. */
  id?: string;
  /** admin is the admin of the credit class. */
  admin?: string;
  /** metadata is the arbitrary metadata attached to the credit class. */
  metadata?: string;
  /**
   * credit_type_abbrev is the abbreviation of the credit type within which this
   * credit class was created.
   */
  credit_type_abbrev?: string;
}
export interface ClassInfoAminoMsg {
  type: "/regen.ecocredit.v1.ClassInfo";
  value: ClassInfoAmino;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoSDKType {
  id: string;
  admin: string;
  metadata: string;
  credit_type_abbrev: string;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfo {
  /** id is the unique identifier of the project. */
  id: string;
  /** admin is the admin of the project. */
  admin: string;
  /**
   * class_id is the unique identifier of the credit class within which the
   * project was created.
   */
  classId: string;
  /**
   * jurisdiction is the jurisdiction of the project. Full documentation can be
   * found in MsgCreateProject.jurisdiction.
   */
  jurisdiction: string;
  /** metadata is the arbitrary metadata attached to the project. */
  metadata: string;
  /** reference_id is any arbitrary string that can be use to reference project. */
  referenceId: string;
}
export interface ProjectInfoProtoMsg {
  typeUrl: "/regen.ecocredit.v1.ProjectInfo";
  value: Uint8Array;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoAmino {
  /** id is the unique identifier of the project. */
  id?: string;
  /** admin is the admin of the project. */
  admin?: string;
  /**
   * class_id is the unique identifier of the credit class within which the
   * project was created.
   */
  class_id?: string;
  /**
   * jurisdiction is the jurisdiction of the project. Full documentation can be
   * found in MsgCreateProject.jurisdiction.
   */
  jurisdiction?: string;
  /** metadata is the arbitrary metadata attached to the project. */
  metadata?: string;
  /** reference_id is any arbitrary string that can be use to reference project. */
  reference_id?: string;
}
export interface ProjectInfoAminoMsg {
  type: "/regen.ecocredit.v1.ProjectInfo";
  value: ProjectInfoAmino;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoSDKType {
  id: string;
  admin: string;
  class_id: string;
  jurisdiction: string;
  metadata: string;
  reference_id: string;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfo {
  /**
   * issuer is the address that created the batch and the address authorized to
   * mint new credits to the credit batch if the credit batch is open.
   */
  issuer: string;
  /**
   * project_id is the unique identifier of the project within which this credit
   * batch was created.
   */
  projectId: string;
  /**
   * denom is the unique identifier of the credit batch formed from the project
   * name, batch sequence number and dates.
   */
  denom: string;
  /** metadata is any arbitrary metadata attached to the credit batch. */
  metadata: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  startDate?: Date | undefined;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate?: Date | undefined;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuanceDate?: Date | undefined;
  /**
   * open determines whether or not the credit batch is open, i.e. whether or
   * not new credits can be minted to the credit batch.
   */
  open: boolean;
}
export interface BatchInfoProtoMsg {
  typeUrl: "/regen.ecocredit.v1.BatchInfo";
  value: Uint8Array;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoAmino {
  /**
   * issuer is the address that created the batch and the address authorized to
   * mint new credits to the credit batch if the credit batch is open.
   */
  issuer?: string;
  /**
   * project_id is the unique identifier of the project within which this credit
   * batch was created.
   */
  project_id?: string;
  /**
   * denom is the unique identifier of the credit batch formed from the project
   * name, batch sequence number and dates.
   */
  denom?: string;
  /** metadata is any arbitrary metadata attached to the credit batch. */
  metadata?: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  start_date?: string | undefined;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  end_date?: string | undefined;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuance_date?: string | undefined;
  /**
   * open determines whether or not the credit batch is open, i.e. whether or
   * not new credits can be minted to the credit batch.
   */
  open?: boolean;
}
export interface BatchInfoAminoMsg {
  type: "/regen.ecocredit.v1.BatchInfo";
  value: BatchInfoAmino;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoSDKType {
  issuer: string;
  project_id: string;
  denom: string;
  metadata: string;
  start_date?: Date | undefined;
  end_date?: Date | undefined;
  issuance_date?: Date | undefined;
  open: boolean;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfo {
  /** address is the address of the credit holder. */
  address: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /** tradable is the tradable amount of credits. */
  tradable: string;
  /** retired is the retired amount of credits. */
  retired: string;
  /** escrowed is the amount of credits locked up in escrow for the marketplace. */
  escrowed: string;
}
export interface BatchBalanceInfoProtoMsg {
  typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo";
  value: Uint8Array;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoAmino {
  /** address is the address of the credit holder. */
  address?: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
  /** tradable is the tradable amount of credits. */
  tradable?: string;
  /** retired is the retired amount of credits. */
  retired?: string;
  /** escrowed is the amount of credits locked up in escrow for the marketplace. */
  escrowed?: string;
}
export interface BatchBalanceInfoAminoMsg {
  type: "/regen.ecocredit.v1.BatchBalanceInfo";
  value: BatchBalanceInfoAmino;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoSDKType {
  address: string;
  batch_denom: string;
  tradable: string;
  retired: string;
  escrowed: string;
}
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesRequest): JsonSafe<QueryClassesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassesRequestSDKType): QueryClassesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesRequest): QueryClassesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesResponse): JsonSafe<QueryClassesResponse> {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassesResponseSDKType): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesResponse): QueryClassesResponseSDKType {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByAdminRequest(): QueryClassesByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryClassesByAdminRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
  encode(message: QueryClassesByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
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
  fromJSON(object: any): QueryClassesByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesByAdminRequest): JsonSafe<QueryClassesByAdminRequest> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesByAdminRequest>): QueryClassesByAdminRequest {
    const message = createBaseQueryClassesByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassesByAdminRequestSDKType): QueryClassesByAdminRequest {
    return {
      admin: object?.admin,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesByAdminRequestAmino): QueryClassesByAdminRequest {
    const message = createBaseQueryClassesByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByAdminRequestAminoMsg): QueryClassesByAdminRequest {
    return QueryClassesByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByAdminRequestProtoMsg): QueryClassesByAdminRequest {
    return QueryClassesByAdminRequest.decode(message.value);
  },
  toProto(message: QueryClassesByAdminRequest): Uint8Array {
    return QueryClassesByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
      value: QueryClassesByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByAdminResponse(): QueryClassesByAdminResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesByAdminResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
  encode(message: QueryClassesByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClassesByAdminResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesByAdminResponse): JsonSafe<QueryClassesByAdminResponse> {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesByAdminResponse>): QueryClassesByAdminResponse {
    const message = createBaseQueryClassesByAdminResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassesByAdminResponseSDKType): QueryClassesByAdminResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseSDKType {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesByAdminResponseAmino): QueryClassesByAdminResponse {
    const message = createBaseQueryClassesByAdminResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByAdminResponseAminoMsg): QueryClassesByAdminResponse {
    return QueryClassesByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByAdminResponseProtoMsg): QueryClassesByAdminResponse {
    return QueryClassesByAdminResponse.decode(message.value);
  },
  toProto(message: QueryClassesByAdminResponse): Uint8Array {
    return QueryClassesByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
      value: QueryClassesByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}
export const QueryClassRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  toJSON(message: QueryClassRequest): JsonSafe<QueryClassRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromSDK(object: QueryClassRequestSDKType): QueryClassRequest {
    return {
      classId: object?.class_id
    };
  },
  toSDK(message: QueryClassRequest): QueryClassRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}
export const QueryClassResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      ClassInfo.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = ClassInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassResponse {
    return {
      class: isSet(object.class) ? ClassInfo.fromJSON(object.class) : undefined
    };
  },
  toJSON(message: QueryClassResponse): JsonSafe<QueryClassResponse> {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? ClassInfo.toJSON(message.class) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? ClassInfo.fromPartial(object.class) : undefined;
    return message;
  },
  fromSDK(object: QueryClassResponseSDKType): QueryClassResponse {
    return {
      class: object.class ? ClassInfo.fromSDK(object.class) : undefined
    };
  },
  toSDK(message: QueryClassResponse): QueryClassResponseSDKType {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? ClassInfo.toSDK(message.class) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = ClassInfo.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? ClassInfo.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassIssuersRequest(): QueryClassIssuersRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryClassIssuersRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
  encode(message: QueryClassIssuersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassIssuersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassIssuersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
  fromJSON(object: any): QueryClassIssuersRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassIssuersRequest): JsonSafe<QueryClassIssuersRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassIssuersRequest>): QueryClassIssuersRequest {
    const message = createBaseQueryClassIssuersRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassIssuersRequestSDKType): QueryClassIssuersRequest {
    return {
      classId: object?.class_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassIssuersRequest): QueryClassIssuersRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassIssuersRequestAmino): QueryClassIssuersRequest {
    const message = createBaseQueryClassIssuersRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassIssuersRequest): QueryClassIssuersRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassIssuersRequestAminoMsg): QueryClassIssuersRequest {
    return QueryClassIssuersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassIssuersRequestProtoMsg): QueryClassIssuersRequest {
    return QueryClassIssuersRequest.decode(message.value);
  },
  toProto(message: QueryClassIssuersRequest): Uint8Array {
    return QueryClassIssuersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassIssuersRequest): QueryClassIssuersRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
      value: QueryClassIssuersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassIssuersResponse(): QueryClassIssuersResponse {
  return {
    issuers: [],
    pagination: undefined
  };
}
export const QueryClassIssuersResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
  encode(message: QueryClassIssuersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.issuers) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassIssuersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassIssuersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuers.push(reader.string());
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
  fromJSON(object: any): QueryClassIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassIssuersResponse): JsonSafe<QueryClassIssuersResponse> {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassIssuersResponse>): QueryClassIssuersResponse {
    const message = createBaseQueryClassIssuersResponse();
    message.issuers = object.issuers?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClassIssuersResponseSDKType): QueryClassIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassIssuersResponse): QueryClassIssuersResponseSDKType {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassIssuersResponseAmino): QueryClassIssuersResponse {
    const message = createBaseQueryClassIssuersResponse();
    message.issuers = object.issuers?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassIssuersResponse): QueryClassIssuersResponseAmino {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = message.issuers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassIssuersResponseAminoMsg): QueryClassIssuersResponse {
    return QueryClassIssuersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassIssuersResponseProtoMsg): QueryClassIssuersResponse {
    return QueryClassIssuersResponse.decode(message.value);
  },
  toProto(message: QueryClassIssuersResponse): Uint8Array {
    return QueryClassIssuersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassIssuersResponse): QueryClassIssuersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
      value: QueryClassIssuersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsRequest(): QueryProjectsRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryProjectsRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
  encode(message: QueryProjectsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
  fromJSON(object: any): QueryProjectsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProjectsRequest): JsonSafe<QueryProjectsRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProjectsRequest>): QueryProjectsRequest {
    const message = createBaseQueryProjectsRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProjectsRequestSDKType): QueryProjectsRequest {
    return {
      classId: object?.class_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProjectsRequest): QueryProjectsRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProjectsRequestAmino): QueryProjectsRequest {
    const message = createBaseQueryProjectsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsRequest): QueryProjectsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsRequestAminoMsg): QueryProjectsRequest {
    return QueryProjectsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsRequestProtoMsg): QueryProjectsRequest {
    return QueryProjectsRequest.decode(message.value);
  },
  toProto(message: QueryProjectsRequest): Uint8Array {
    return QueryProjectsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsRequest): QueryProjectsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
      value: QueryProjectsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsResponse(): QueryProjectsResponse {
  return {
    projects: [],
    pagination: undefined
  };
}
export const QueryProjectsResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
  encode(message: QueryProjectsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProjectsResponse): JsonSafe<QueryProjectsResponse> {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProjectsResponse>): QueryProjectsResponse {
    const message = createBaseQueryProjectsResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProjectsResponseSDKType): QueryProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProjectsResponse): QueryProjectsResponseSDKType {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toSDK(e) : undefined);
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProjectsResponseAmino): QueryProjectsResponse {
    const message = createBaseQueryProjectsResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsResponse): QueryProjectsResponseAmino {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
    } else {
      obj.projects = message.projects;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsResponseAminoMsg): QueryProjectsResponse {
    return QueryProjectsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsResponseProtoMsg): QueryProjectsResponse {
    return QueryProjectsResponse.decode(message.value);
  },
  toProto(message: QueryProjectsResponse): Uint8Array {
    return QueryProjectsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsResponse): QueryProjectsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
      value: QueryProjectsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsByReferenceIdRequest(): QueryProjectsByReferenceIdRequest {
  return {
    referenceId: "",
    pagination: undefined
  };
}
export const QueryProjectsByReferenceIdRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
  encode(message: QueryProjectsByReferenceIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByReferenceIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByReferenceIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceId = reader.string();
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
  fromJSON(object: any): QueryProjectsByReferenceIdRequest {
    return {
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProjectsByReferenceIdRequest): JsonSafe<QueryProjectsByReferenceIdRequest> {
    const obj: any = {};
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProjectsByReferenceIdRequest>): QueryProjectsByReferenceIdRequest {
    const message = createBaseQueryProjectsByReferenceIdRequest();
    message.referenceId = object.referenceId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProjectsByReferenceIdRequestSDKType): QueryProjectsByReferenceIdRequest {
    return {
      referenceId: object?.reference_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestSDKType {
    const obj: any = {};
    obj.reference_id = message.referenceId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProjectsByReferenceIdRequestAmino): QueryProjectsByReferenceIdRequest {
    const message = createBaseQueryProjectsByReferenceIdRequest();
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = object.reference_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestAmino {
    const obj: any = {};
    obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsByReferenceIdRequestAminoMsg): QueryProjectsByReferenceIdRequest {
    return QueryProjectsByReferenceIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsByReferenceIdRequestProtoMsg): QueryProjectsByReferenceIdRequest {
    return QueryProjectsByReferenceIdRequest.decode(message.value);
  },
  toProto(message: QueryProjectsByReferenceIdRequest): Uint8Array {
    return QueryProjectsByReferenceIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
      value: QueryProjectsByReferenceIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsByReferenceIdResponse(): QueryProjectsByReferenceIdResponse {
  return {
    projects: [],
    pagination: undefined
  };
}
export const QueryProjectsByReferenceIdResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
  encode(message: QueryProjectsByReferenceIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByReferenceIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByReferenceIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryProjectsByReferenceIdResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProjectsByReferenceIdResponse): JsonSafe<QueryProjectsByReferenceIdResponse> {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProjectsByReferenceIdResponse>): QueryProjectsByReferenceIdResponse {
    const message = createBaseQueryProjectsByReferenceIdResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProjectsByReferenceIdResponseSDKType): QueryProjectsByReferenceIdResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseSDKType {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toSDK(e) : undefined);
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProjectsByReferenceIdResponseAmino): QueryProjectsByReferenceIdResponse {
    const message = createBaseQueryProjectsByReferenceIdResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseAmino {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
    } else {
      obj.projects = message.projects;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsByReferenceIdResponseAminoMsg): QueryProjectsByReferenceIdResponse {
    return QueryProjectsByReferenceIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsByReferenceIdResponseProtoMsg): QueryProjectsByReferenceIdResponse {
    return QueryProjectsByReferenceIdResponse.decode(message.value);
  },
  toProto(message: QueryProjectsByReferenceIdResponse): Uint8Array {
    return QueryProjectsByReferenceIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
      value: QueryProjectsByReferenceIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProjectRequest(): QueryProjectRequest {
  return {
    projectId: ""
  };
}
export const QueryProjectRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
  encode(message: QueryProjectRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProjectRequest {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },
  toJSON(message: QueryProjectRequest): JsonSafe<QueryProjectRequest> {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProjectRequest>): QueryProjectRequest {
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromSDK(object: QueryProjectRequestSDKType): QueryProjectRequest {
    return {
      projectId: object?.project_id
    };
  },
  toSDK(message: QueryProjectRequest): QueryProjectRequestSDKType {
    const obj: any = {};
    obj.project_id = message.projectId;
    return obj;
  },
  fromAmino(object: QueryProjectRequestAmino): QueryProjectRequest {
    const message = createBaseQueryProjectRequest();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: QueryProjectRequest): QueryProjectRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: QueryProjectRequestAminoMsg): QueryProjectRequest {
    return QueryProjectRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectRequestProtoMsg): QueryProjectRequest {
    return QueryProjectRequest.decode(message.value);
  },
  toProto(message: QueryProjectRequest): Uint8Array {
    return QueryProjectRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectRequest): QueryProjectRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
      value: QueryProjectRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProjectResponse(): QueryProjectResponse {
  return {
    project: undefined
  };
}
export const QueryProjectResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
  encode(message: QueryProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== undefined) {
      ProjectInfo.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = ProjectInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProjectResponse {
    return {
      project: isSet(object.project) ? ProjectInfo.fromJSON(object.project) : undefined
    };
  },
  toJSON(message: QueryProjectResponse): JsonSafe<QueryProjectResponse> {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? ProjectInfo.toJSON(message.project) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProjectResponse>): QueryProjectResponse {
    const message = createBaseQueryProjectResponse();
    message.project = object.project !== undefined && object.project !== null ? ProjectInfo.fromPartial(object.project) : undefined;
    return message;
  },
  fromSDK(object: QueryProjectResponseSDKType): QueryProjectResponse {
    return {
      project: object.project ? ProjectInfo.fromSDK(object.project) : undefined
    };
  },
  toSDK(message: QueryProjectResponse): QueryProjectResponseSDKType {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? ProjectInfo.toSDK(message.project) : undefined);
    return obj;
  },
  fromAmino(object: QueryProjectResponseAmino): QueryProjectResponse {
    const message = createBaseQueryProjectResponse();
    if (object.project !== undefined && object.project !== null) {
      message.project = ProjectInfo.fromAmino(object.project);
    }
    return message;
  },
  toAmino(message: QueryProjectResponse): QueryProjectResponseAmino {
    const obj: any = {};
    obj.project = message.project ? ProjectInfo.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectResponseAminoMsg): QueryProjectResponse {
    return QueryProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectResponseProtoMsg): QueryProjectResponse {
    return QueryProjectResponse.decode(message.value);
  },
  toProto(message: QueryProjectResponse): Uint8Array {
    return QueryProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectResponse): QueryProjectResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
      value: QueryProjectResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {
    projectId: "",
    pagination: undefined
  };
}
export const QueryBatchesRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
  encode(message: QueryBatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
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
  fromJSON(object: any): QueryBatchesRequest {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesRequest): JsonSafe<QueryBatchesRequest> {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesRequest>): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    message.projectId = object.projectId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesRequestSDKType): QueryBatchesRequest {
    return {
      projectId: object?.project_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesRequest): QueryBatchesRequestSDKType {
    const obj: any = {};
    obj.project_id = message.projectId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesRequestAmino): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesRequest): QueryBatchesRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesRequestAminoMsg): QueryBatchesRequest {
    return QueryBatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesRequestProtoMsg): QueryBatchesRequest {
    return QueryBatchesRequest.decode(message.value);
  },
  toProto(message: QueryBatchesRequest): Uint8Array {
    return QueryBatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesRequest): QueryBatchesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
      value: QueryBatchesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {
    batches: [],
    pagination: undefined
  };
}
export const QueryBatchesResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
  encode(message: QueryBatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesResponse): JsonSafe<QueryBatchesResponse> {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesResponse>): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesResponseSDKType): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesResponse): QueryBatchesResponseSDKType {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toSDK(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesResponseAmino): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesResponse): QueryBatchesResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesResponseAminoMsg): QueryBatchesResponse {
    return QueryBatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesResponseProtoMsg): QueryBatchesResponse {
    return QueryBatchesResponse.decode(message.value);
  },
  toProto(message: QueryBatchesResponse): Uint8Array {
    return QueryBatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesResponse): QueryBatchesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
      value: QueryBatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesByIssuerRequest(): QueryBatchesByIssuerRequest {
  return {
    issuer: "",
    pagination: undefined
  };
}
export const QueryBatchesByIssuerRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
  encode(message: QueryBatchesByIssuerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByIssuerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByIssuerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
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
  fromJSON(object: any): QueryBatchesByIssuerRequest {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesByIssuerRequest): JsonSafe<QueryBatchesByIssuerRequest> {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesByIssuerRequest>): QueryBatchesByIssuerRequest {
    const message = createBaseQueryBatchesByIssuerRequest();
    message.issuer = object.issuer ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesByIssuerRequestSDKType): QueryBatchesByIssuerRequest {
    return {
      issuer: object?.issuer,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestSDKType {
    const obj: any = {};
    obj.issuer = message.issuer;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesByIssuerRequestAmino): QueryBatchesByIssuerRequest {
    const message = createBaseQueryBatchesByIssuerRequest();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesByIssuerRequestAminoMsg): QueryBatchesByIssuerRequest {
    return QueryBatchesByIssuerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesByIssuerRequestProtoMsg): QueryBatchesByIssuerRequest {
    return QueryBatchesByIssuerRequest.decode(message.value);
  },
  toProto(message: QueryBatchesByIssuerRequest): Uint8Array {
    return QueryBatchesByIssuerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
      value: QueryBatchesByIssuerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesByIssuerResponse(): QueryBatchesByIssuerResponse {
  return {
    batches: [],
    pagination: undefined
  };
}
export const QueryBatchesByIssuerResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
  encode(message: QueryBatchesByIssuerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByIssuerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByIssuerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBatchesByIssuerResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesByIssuerResponse): JsonSafe<QueryBatchesByIssuerResponse> {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesByIssuerResponse>): QueryBatchesByIssuerResponse {
    const message = createBaseQueryBatchesByIssuerResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesByIssuerResponseSDKType): QueryBatchesByIssuerResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseSDKType {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toSDK(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesByIssuerResponseAmino): QueryBatchesByIssuerResponse {
    const message = createBaseQueryBatchesByIssuerResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesByIssuerResponseAminoMsg): QueryBatchesByIssuerResponse {
    return QueryBatchesByIssuerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesByIssuerResponseProtoMsg): QueryBatchesByIssuerResponse {
    return QueryBatchesByIssuerResponse.decode(message.value);
  },
  toProto(message: QueryBatchesByIssuerResponse): Uint8Array {
    return QueryBatchesByIssuerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
      value: QueryBatchesByIssuerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesByClassRequest(): QueryBatchesByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryBatchesByClassRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
  encode(message: QueryBatchesByClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
  fromJSON(object: any): QueryBatchesByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesByClassRequest): JsonSafe<QueryBatchesByClassRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesByClassRequest>): QueryBatchesByClassRequest {
    const message = createBaseQueryBatchesByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesByClassRequestSDKType): QueryBatchesByClassRequest {
    return {
      classId: object?.class_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesByClassRequestAmino): QueryBatchesByClassRequest {
    const message = createBaseQueryBatchesByClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesByClassRequestAminoMsg): QueryBatchesByClassRequest {
    return QueryBatchesByClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesByClassRequestProtoMsg): QueryBatchesByClassRequest {
    return QueryBatchesByClassRequest.decode(message.value);
  },
  toProto(message: QueryBatchesByClassRequest): Uint8Array {
    return QueryBatchesByClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
      value: QueryBatchesByClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchesByClassResponse(): QueryBatchesByClassResponse {
  return {
    batches: [],
    pagination: undefined
  };
}
export const QueryBatchesByClassResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
  encode(message: QueryBatchesByClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBatchesByClassResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBatchesByClassResponse): JsonSafe<QueryBatchesByClassResponse> {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchesByClassResponse>): QueryBatchesByClassResponse {
    const message = createBaseQueryBatchesByClassResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchesByClassResponseSDKType): QueryBatchesByClassResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseSDKType {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toSDK(e) : undefined);
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchesByClassResponseAmino): QueryBatchesByClassResponse {
    const message = createBaseQueryBatchesByClassResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchesByClassResponseAminoMsg): QueryBatchesByClassResponse {
    return QueryBatchesByClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchesByClassResponseProtoMsg): QueryBatchesByClassResponse {
    return QueryBatchesByClassResponse.decode(message.value);
  },
  toProto(message: QueryBatchesByClassResponse): Uint8Array {
    return QueryBatchesByClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
      value: QueryBatchesByClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchRequest(): QueryBatchRequest {
  return {
    batchDenom: ""
  };
}
export const QueryBatchRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
  encode(message: QueryBatchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: QueryBatchRequest): JsonSafe<QueryBatchRequest> {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchRequest>): QueryBatchRequest {
    const message = createBaseQueryBatchRequest();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: QueryBatchRequestSDKType): QueryBatchRequest {
    return {
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: QueryBatchRequest): QueryBatchRequestSDKType {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: QueryBatchRequestAmino): QueryBatchRequest {
    const message = createBaseQueryBatchRequest();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QueryBatchRequest): QueryBatchRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestAminoMsg): QueryBatchRequest {
    return QueryBatchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestProtoMsg): QueryBatchRequest {
    return QueryBatchRequest.decode(message.value);
  },
  toProto(message: QueryBatchRequest): Uint8Array {
    return QueryBatchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequest): QueryBatchRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
      value: QueryBatchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchResponse(): QueryBatchResponse {
  return {
    batch: undefined
  };
}
export const QueryBatchResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
  encode(message: QueryBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batch !== undefined) {
      BatchInfo.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = BatchInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchResponse {
    return {
      batch: isSet(object.batch) ? BatchInfo.fromJSON(object.batch) : undefined
    };
  },
  toJSON(message: QueryBatchResponse): JsonSafe<QueryBatchResponse> {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? BatchInfo.toJSON(message.batch) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBatchResponse>): QueryBatchResponse {
    const message = createBaseQueryBatchResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? BatchInfo.fromPartial(object.batch) : undefined;
    return message;
  },
  fromSDK(object: QueryBatchResponseSDKType): QueryBatchResponse {
    return {
      batch: object.batch ? BatchInfo.fromSDK(object.batch) : undefined
    };
  },
  toSDK(message: QueryBatchResponse): QueryBatchResponseSDKType {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? BatchInfo.toSDK(message.batch) : undefined);
    return obj;
  },
  fromAmino(object: QueryBatchResponseAmino): QueryBatchResponse {
    const message = createBaseQueryBatchResponse();
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = BatchInfo.fromAmino(object.batch);
    }
    return message;
  },
  toAmino(message: QueryBatchResponse): QueryBatchResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? BatchInfo.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchResponseAminoMsg): QueryBatchResponse {
    return QueryBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchResponseProtoMsg): QueryBatchResponse {
    return QueryBatchResponse.decode(message.value);
  },
  toProto(message: QueryBatchResponse): Uint8Array {
    return QueryBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchResponse): QueryBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
      value: QueryBatchResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    account: "",
    batchDenom: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: QueryBalanceRequest): JsonSafe<QueryBalanceRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.account = object.account ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest {
    return {
      account: object?.account,
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: undefined
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      BatchBalanceInfo.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = BatchBalanceInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance) ? BatchBalanceInfo.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: QueryBalanceResponse): JsonSafe<QueryBalanceResponse> {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? BatchBalanceInfo.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? BatchBalanceInfo.fromPartial(object.balance) : undefined;
    return message;
  },
  fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse {
    return {
      balance: object.balance ? BatchBalanceInfo.fromSDK(object.balance) : undefined
    };
  },
  toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? BatchBalanceInfo.toSDK(message.balance) : undefined);
    return obj;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = BatchBalanceInfo.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? BatchBalanceInfo.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {
    account: "",
    pagination: undefined
  };
}
export const QueryBalancesRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
  encode(message: QueryBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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
  fromJSON(object: any): QueryBalancesRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBalancesRequest): JsonSafe<QueryBalancesRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.account = object.account ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBalancesRequestSDKType): QueryBalancesRequest {
    return {
      account: object?.account,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBalancesRequest): QueryBalancesRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBalancesRequestAmino): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBalancesRequest): QueryBalancesRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.decode(message.value);
  },
  toProto(message: QueryBalancesRequest): Uint8Array {
    return QueryBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
      value: QueryBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
export const QueryBalancesResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
  encode(message: QueryBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      BatchBalanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryBalancesResponse): JsonSafe<QueryBalancesResponse> {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryBalancesResponseSDKType): QueryBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBalancesResponse): QueryBalancesResponseSDKType {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toSDK(e) : undefined);
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => BatchBalanceInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.decode(message.value);
  },
  toProto(message: QueryBalancesResponse): Uint8Array {
    return QueryBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
      value: QueryBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    batchDenom: ""
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: QuerySupplyRequest): JsonSafe<QuerySupplyRequest> {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: QuerySupplyRequestSDKType): QuerySupplyRequest {
    return {
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: QuerySupplyRequest): QuerySupplyRequestSDKType {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    tradableSupply: "",
    retiredSupply: "",
    cancelledAmount: ""
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradableSupply !== "") {
      writer.uint32(10).string(message.tradableSupply);
    }
    if (message.retiredSupply !== "") {
      writer.uint32(18).string(message.retiredSupply);
    }
    if (message.cancelledAmount !== "") {
      writer.uint32(26).string(message.cancelledAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradableSupply = reader.string();
          break;
        case 2:
          message.retiredSupply = reader.string();
          break;
        case 3:
          message.cancelledAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    return {
      tradableSupply: isSet(object.tradableSupply) ? String(object.tradableSupply) : "",
      retiredSupply: isSet(object.retiredSupply) ? String(object.retiredSupply) : "",
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : ""
    };
  },
  toJSON(message: QuerySupplyResponse): JsonSafe<QuerySupplyResponse> {
    const obj: any = {};
    message.tradableSupply !== undefined && (obj.tradableSupply = message.tradableSupply);
    message.retiredSupply !== undefined && (obj.retiredSupply = message.retiredSupply);
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.tradableSupply = object.tradableSupply ?? "";
    message.retiredSupply = object.retiredSupply ?? "";
    message.cancelledAmount = object.cancelledAmount ?? "";
    return message;
  },
  fromSDK(object: QuerySupplyResponseSDKType): QuerySupplyResponse {
    return {
      tradableSupply: object?.tradable_supply,
      retiredSupply: object?.retired_supply,
      cancelledAmount: object?.cancelled_amount
    };
  },
  toSDK(message: QuerySupplyResponse): QuerySupplyResponseSDKType {
    const obj: any = {};
    obj.tradable_supply = message.tradableSupply;
    obj.retired_supply = message.retiredSupply;
    obj.cancelled_amount = message.cancelledAmount;
    return obj;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.tradable_supply !== undefined && object.tradable_supply !== null) {
      message.tradableSupply = object.tradable_supply;
    }
    if (object.retired_supply !== undefined && object.retired_supply !== null) {
      message.retiredSupply = object.retired_supply;
    }
    if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
      message.cancelledAmount = object.cancelled_amount;
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.tradable_supply = message.tradableSupply === "" ? undefined : message.tradableSupply;
    obj.retired_supply = message.retiredSupply === "" ? undefined : message.retiredSupply;
    obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCreditTypesRequest(): QueryCreditTypesRequest {
  return {};
}
export const QueryCreditTypesRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
  encode(_: QueryCreditTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryCreditTypesRequest {
    return {};
  },
  toJSON(_: QueryCreditTypesRequest): JsonSafe<QueryCreditTypesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryCreditTypesRequest>): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },
  fromSDK(_: QueryCreditTypesRequestSDKType): QueryCreditTypesRequest {
    return {};
  },
  toSDK(_: QueryCreditTypesRequest): QueryCreditTypesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryCreditTypesRequestAmino): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },
  toAmino(_: QueryCreditTypesRequest): QueryCreditTypesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCreditTypesRequestAminoMsg): QueryCreditTypesRequest {
    return QueryCreditTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCreditTypesRequestProtoMsg): QueryCreditTypesRequest {
    return QueryCreditTypesRequest.decode(message.value);
  },
  toProto(message: QueryCreditTypesRequest): Uint8Array {
    return QueryCreditTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCreditTypesRequest): QueryCreditTypesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
      value: QueryCreditTypesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCreditTypesResponse(): QueryCreditTypesResponse {
  return {
    creditTypes: []
  };
}
export const QueryCreditTypesResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
  encode(message: QueryCreditTypesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.creditTypes) ? object.creditTypes.map((e: any) => CreditType.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCreditTypesResponse): JsonSafe<QueryCreditTypesResponse> {
    const obj: any = {};
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e => e ? CreditType.toJSON(e) : undefined);
    } else {
      obj.creditTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCreditTypesResponse>): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCreditTypesResponseSDKType): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.credit_types) ? object.credit_types.map((e: any) => CreditType.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCreditTypesResponse): QueryCreditTypesResponseSDKType {
    const obj: any = {};
    if (message.creditTypes) {
      obj.credit_types = message.creditTypes.map(e => e ? CreditType.toSDK(e) : undefined);
    } else {
      obj.credit_types = [];
    }
    return obj;
  },
  fromAmino(object: QueryCreditTypesResponseAmino): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = object.credit_types?.map(e => CreditType.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCreditTypesResponse): QueryCreditTypesResponseAmino {
    const obj: any = {};
    if (message.creditTypes) {
      obj.credit_types = message.creditTypes.map(e => e ? CreditType.toAmino(e) : undefined);
    } else {
      obj.credit_types = message.creditTypes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCreditTypesResponseAminoMsg): QueryCreditTypesResponse {
    return QueryCreditTypesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCreditTypesResponseProtoMsg): QueryCreditTypesResponse {
    return QueryCreditTypesResponse.decode(message.value);
  },
  toProto(message: QueryCreditTypesResponse): Uint8Array {
    return QueryCreditTypesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCreditTypesResponse): QueryCreditTypesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
      value: QueryCreditTypesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseClassInfo(): ClassInfo {
  return {
    id: "",
    admin: "",
    metadata: "",
    creditTypeAbbrev: ""
  };
}
export const ClassInfo = {
  typeUrl: "/regen.ecocredit.v1.ClassInfo",
  encode(message: ClassInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.creditTypeAbbrev = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : ""
    };
  },
  toJSON(message: ClassInfo): JsonSafe<ClassInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    return obj;
  },
  fromPartial(object: DeepPartial<ClassInfo>): ClassInfo {
    const message = createBaseClassInfo();
    message.id = object.id ?? "";
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    return message;
  },
  fromSDK(object: ClassInfoSDKType): ClassInfo {
    return {
      id: object?.id,
      admin: object?.admin,
      metadata: object?.metadata,
      creditTypeAbbrev: object?.credit_type_abbrev
    };
  },
  toSDK(message: ClassInfo): ClassInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    return obj;
  },
  fromAmino(object: ClassInfoAmino): ClassInfo {
    const message = createBaseClassInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    return message;
  },
  toAmino(message: ClassInfo): ClassInfoAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
    return obj;
  },
  fromAminoMsg(object: ClassInfoAminoMsg): ClassInfo {
    return ClassInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassInfoProtoMsg): ClassInfo {
    return ClassInfo.decode(message.value);
  },
  toProto(message: ClassInfo): Uint8Array {
    return ClassInfo.encode(message).finish();
  },
  toProtoMsg(message: ClassInfo): ClassInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassInfo",
      value: ClassInfo.encode(message).finish()
    };
  }
};
function createBaseProjectInfo(): ProjectInfo {
  return {
    id: "",
    admin: "",
    classId: "",
    jurisdiction: "",
    metadata: "",
    referenceId: ""
  };
}
export const ProjectInfo = {
  typeUrl: "/regen.ecocredit.v1.ProjectInfo",
  encode(message: ProjectInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.referenceId !== "") {
      writer.uint32(50).string(message.referenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.classId = reader.string();
          break;
        case 4:
          message.jurisdiction = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProjectInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },
  toJSON(message: ProjectInfo): JsonSafe<ProjectInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },
  fromPartial(object: DeepPartial<ProjectInfo>): ProjectInfo {
    const message = createBaseProjectInfo();
    message.id = object.id ?? "";
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },
  fromSDK(object: ProjectInfoSDKType): ProjectInfo {
    return {
      id: object?.id,
      admin: object?.admin,
      classId: object?.class_id,
      jurisdiction: object?.jurisdiction,
      metadata: object?.metadata,
      referenceId: object?.reference_id
    };
  },
  toSDK(message: ProjectInfo): ProjectInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.jurisdiction = message.jurisdiction;
    obj.metadata = message.metadata;
    obj.reference_id = message.referenceId;
    return obj;
  },
  fromAmino(object: ProjectInfoAmino): ProjectInfo {
    const message = createBaseProjectInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = object.reference_id;
    }
    return message;
  },
  toAmino(message: ProjectInfo): ProjectInfoAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
    return obj;
  },
  fromAminoMsg(object: ProjectInfoAminoMsg): ProjectInfo {
    return ProjectInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectInfoProtoMsg): ProjectInfo {
    return ProjectInfo.decode(message.value);
  },
  toProto(message: ProjectInfo): Uint8Array {
    return ProjectInfo.encode(message).finish();
  },
  toProtoMsg(message: ProjectInfo): ProjectInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ProjectInfo",
      value: ProjectInfo.encode(message).finish()
    };
  }
};
function createBaseBatchInfo(): BatchInfo {
  return {
    issuer: "",
    projectId: "",
    denom: "",
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    issuanceDate: undefined,
    open: false
  };
}
export const BatchInfo = {
  typeUrl: "/regen.ecocredit.v1.BatchInfo",
  encode(message: BatchInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.open === true) {
      writer.uint32(64).bool(message.open);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.open = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchInfo {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? new Date(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? new Date(object.endDate) : undefined,
      issuanceDate: isSet(object.issuanceDate) ? new Date(object.issuanceDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false
    };
  },
  toJSON(message: BatchInfo): JsonSafe<BatchInfo> {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.issuanceDate !== undefined && (obj.issuanceDate = message.issuanceDate.toISOString());
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchInfo>): BatchInfo {
    const message = createBaseBatchInfo();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.denom = object.denom ?? "";
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.issuanceDate = object.issuanceDate ?? undefined;
    message.open = object.open ?? false;
    return message;
  },
  fromSDK(object: BatchInfoSDKType): BatchInfo {
    return {
      issuer: object?.issuer,
      projectId: object?.project_id,
      denom: object?.denom,
      metadata: object?.metadata,
      startDate: object.start_date ?? undefined,
      endDate: object.end_date ?? undefined,
      issuanceDate: object.issuance_date ?? undefined,
      open: object?.open
    };
  },
  toSDK(message: BatchInfo): BatchInfoSDKType {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.project_id = message.projectId;
    obj.denom = message.denom;
    obj.metadata = message.metadata;
    message.startDate !== undefined && (obj.start_date = message.startDate ?? undefined);
    message.endDate !== undefined && (obj.end_date = message.endDate ?? undefined);
    message.issuanceDate !== undefined && (obj.issuance_date = message.issuanceDate ?? undefined);
    obj.open = message.open;
    return obj;
  },
  fromAmino(object: BatchInfoAmino): BatchInfo {
    const message = createBaseBatchInfo();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
    }
    if (object.issuance_date !== undefined && object.issuance_date !== null) {
      message.issuanceDate = fromTimestamp(Timestamp.fromAmino(object.issuance_date));
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    }
    return message;
  },
  toAmino(message: BatchInfo): BatchInfoAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
    obj.issuance_date = message.issuanceDate ? Timestamp.toAmino(toTimestamp(message.issuanceDate)) : undefined;
    obj.open = message.open === false ? undefined : message.open;
    return obj;
  },
  fromAminoMsg(object: BatchInfoAminoMsg): BatchInfo {
    return BatchInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchInfoProtoMsg): BatchInfo {
    return BatchInfo.decode(message.value);
  },
  toProto(message: BatchInfo): Uint8Array {
    return BatchInfo.encode(message).finish();
  },
  toProtoMsg(message: BatchInfo): BatchInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchInfo",
      value: BatchInfo.encode(message).finish()
    };
  }
};
function createBaseBatchBalanceInfo(): BatchBalanceInfo {
  return {
    address: "",
    batchDenom: "",
    tradable: "",
    retired: "",
    escrowed: ""
  };
}
export const BatchBalanceInfo = {
  typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
  encode(message: BatchBalanceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.tradable !== "") {
      writer.uint32(26).string(message.tradable);
    }
    if (message.retired !== "") {
      writer.uint32(34).string(message.retired);
    }
    if (message.escrowed !== "") {
      writer.uint32(42).string(message.escrowed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchBalanceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchBalanceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.tradable = reader.string();
          break;
        case 4:
          message.retired = reader.string();
          break;
        case 5:
          message.escrowed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchBalanceInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradable: isSet(object.tradable) ? String(object.tradable) : "",
      retired: isSet(object.retired) ? String(object.retired) : "",
      escrowed: isSet(object.escrowed) ? String(object.escrowed) : ""
    };
  },
  toJSON(message: BatchBalanceInfo): JsonSafe<BatchBalanceInfo> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradable !== undefined && (obj.tradable = message.tradable);
    message.retired !== undefined && (obj.retired = message.retired);
    message.escrowed !== undefined && (obj.escrowed = message.escrowed);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchBalanceInfo>): BatchBalanceInfo {
    const message = createBaseBatchBalanceInfo();
    message.address = object.address ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.tradable = object.tradable ?? "";
    message.retired = object.retired ?? "";
    message.escrowed = object.escrowed ?? "";
    return message;
  },
  fromSDK(object: BatchBalanceInfoSDKType): BatchBalanceInfo {
    return {
      address: object?.address,
      batchDenom: object?.batch_denom,
      tradable: object?.tradable,
      retired: object?.retired,
      escrowed: object?.escrowed
    };
  },
  toSDK(message: BatchBalanceInfo): BatchBalanceInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.batch_denom = message.batchDenom;
    obj.tradable = message.tradable;
    obj.retired = message.retired;
    obj.escrowed = message.escrowed;
    return obj;
  },
  fromAmino(object: BatchBalanceInfoAmino): BatchBalanceInfo {
    const message = createBaseBatchBalanceInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable !== undefined && object.tradable !== null) {
      message.tradable = object.tradable;
    }
    if (object.retired !== undefined && object.retired !== null) {
      message.retired = object.retired;
    }
    if (object.escrowed !== undefined && object.escrowed !== null) {
      message.escrowed = object.escrowed;
    }
    return message;
  },
  toAmino(message: BatchBalanceInfo): BatchBalanceInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.tradable = message.tradable === "" ? undefined : message.tradable;
    obj.retired = message.retired === "" ? undefined : message.retired;
    obj.escrowed = message.escrowed === "" ? undefined : message.escrowed;
    return obj;
  },
  fromAminoMsg(object: BatchBalanceInfoAminoMsg): BatchBalanceInfo {
    return BatchBalanceInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchBalanceInfoProtoMsg): BatchBalanceInfo {
    return BatchBalanceInfo.decode(message.value);
  },
  toProto(message: BatchBalanceInfo): Uint8Array {
    return BatchBalanceInfo.encode(message).finish();
  },
  toProtoMsg(message: BatchBalanceInfo): BatchBalanceInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
      value: BatchBalanceInfo.encode(message).finish()
    };
  }
};