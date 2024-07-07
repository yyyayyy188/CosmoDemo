import { Member, MemberAmino, MemberSDKType, Choice, choiceFromJSON, choiceToJSON } from "./types";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: Member[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: Uint8Array;
}
export interface MsgCreateGroupProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroup";
  value: Uint8Array;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** members defines the group members. */
  members?: MemberAmino[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata?: string;
}
export interface MsgCreateGroupAminoMsg {
  type: "/regen.group.v1alpha1.MsgCreateGroup";
  value: MsgCreateGroupAmino;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
  admin: string;
  members: MemberSDKType[];
  metadata: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  groupId: bigint;
}
export interface MsgCreateGroupResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse";
  value: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseAmino {
  /** group_id is the unique ID of the newly created group. */
  group_id?: string;
}
export interface MsgCreateGroupResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgCreateGroupResponse";
  value: MsgCreateGroupResponseAmino;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
  group_id: bigint;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: Member[];
}
export interface MsgUpdateGroupMembersProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers";
  value: Uint8Array;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  member_updates?: MemberAmino[];
}
export interface MsgUpdateGroupMembersAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupMembers";
  value: MsgUpdateGroupMembersAmino;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
  admin: string;
  group_id: bigint;
  member_updates: MemberSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}
export interface MsgUpdateGroupMembersResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {}
export interface MsgUpdateGroupMembersResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse";
  value: MsgUpdateGroupMembersResponseAmino;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}
export interface MsgUpdateGroupAdminProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin";
  value: Uint8Array;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminAmino {
  /** admin is the current account address of the group admin. */
  admin?: string;
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** new_admin is the group new admin account address. */
  new_admin?: string;
}
export interface MsgUpdateGroupAdminAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAdmin";
  value: MsgUpdateGroupAdminAmino;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
  admin: string;
  group_id: bigint;
  new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}
export interface MsgUpdateGroupAdminResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {}
export interface MsgUpdateGroupAdminResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse";
  value: MsgUpdateGroupAdminResponseAmino;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** metadata is the updated group's metadata. */
  metadata: Uint8Array;
}
export interface MsgUpdateGroupMetadataProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** metadata is the updated group's metadata. */
  metadata?: string;
}
export interface MsgUpdateGroupMetadataAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupMetadata";
  value: MsgUpdateGroupMetadataAmino;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
  admin: string;
  group_id: bigint;
  metadata: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}
export interface MsgUpdateGroupMetadataResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {}
export interface MsgUpdateGroupMetadataResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse";
  value: MsgUpdateGroupMetadataResponseAmino;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {}
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccount {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** metadata is any arbitrary metadata to attached to the group account. */
  metadata: Uint8Array;
  /** decision_policy specifies the group account's decision policy. */
  decisionPolicy?: Any | undefined;
}
export interface MsgCreateGroupAccountProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount";
  value: Uint8Array;
}
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccountAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** metadata is any arbitrary metadata to attached to the group account. */
  metadata?: string;
  /** decision_policy specifies the group account's decision policy. */
  decision_policy?: AnyAmino | undefined;
}
export interface MsgCreateGroupAccountAminoMsg {
  type: "/regen.group.v1alpha1.MsgCreateGroupAccount";
  value: MsgCreateGroupAccountAmino;
}
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccountSDKType {
  admin: string;
  group_id: bigint;
  metadata: Uint8Array;
  decision_policy?: AnySDKType | undefined;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponse {
  /** address is the account address of the newly created group account. */
  address: string;
}
export interface MsgCreateGroupAccountResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse";
  value: Uint8Array;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponseAmino {
  /** address is the account address of the newly created group account. */
  address?: string;
}
export interface MsgCreateGroupAccountResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse";
  value: MsgCreateGroupAccountResponseAmino;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponseSDKType {
  address: string;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the group account address. */
  address: string;
  /** new_admin is the new group account admin. */
  newAdmin: string;
}
export interface MsgUpdateGroupAccountAdminProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin";
  value: Uint8Array;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdminAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** address is the group account address. */
  address?: string;
  /** new_admin is the new group account admin. */
  new_admin?: string;
}
export interface MsgUpdateGroupAccountAdminAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin";
  value: MsgUpdateGroupAccountAdminAmino;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdminSDKType {
  admin: string;
  address: string;
  new_admin: string;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponse {}
export interface MsgUpdateGroupAccountAdminResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponseAmino {}
export interface MsgUpdateGroupAccountAdminResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse";
  value: MsgUpdateGroupAccountAdminResponseAmino;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponseSDKType {}
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the group account address. */
  address: string;
  /** decision_policy is the updated group account decision policy. */
  decisionPolicy?: Any | undefined;
}
export interface MsgUpdateGroupAccountDecisionPolicyProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** address is the group account address. */
  address?: string;
  /** decision_policy is the updated group account decision policy. */
  decision_policy?: AnyAmino | undefined;
}
export interface MsgUpdateGroupAccountDecisionPolicyAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy";
  value: MsgUpdateGroupAccountDecisionPolicyAmino;
}
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicySDKType {
  admin: string;
  address: string;
  decision_policy?: AnySDKType | undefined;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponse {}
export interface MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponseAmino {}
export interface MsgUpdateGroupAccountDecisionPolicyResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse";
  value: MsgUpdateGroupAccountDecisionPolicyResponseAmino;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponseSDKType {}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the group account address. */
  address: string;
  /** metadata is the updated group account metadata. */
  metadata: Uint8Array;
}
export interface MsgUpdateGroupAccountMetadataProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadataAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** address is the group account address. */
  address?: string;
  /** metadata is the updated group account metadata. */
  metadata?: string;
}
export interface MsgUpdateGroupAccountMetadataAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata";
  value: MsgUpdateGroupAccountMetadataAmino;
}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadataSDKType {
  admin: string;
  address: string;
  metadata: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponse {}
export interface MsgUpdateGroupAccountMetadataResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponseAmino {}
export interface MsgUpdateGroupAccountMetadataResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse";
  value: MsgUpdateGroupAccountMetadataResponseAmino;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponseSDKType {}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposal {
  /** address is the group account address. */
  address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: Uint8Array;
  /** msgs is a list of Msgs that will be executed if the proposal passes. */
  msgs: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}
export interface MsgCreateProposalProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgCreateProposal";
  value: Uint8Array;
}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposalAmino {
  /** address is the group account address. */
  address?: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers?: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata?: string;
  /** msgs is a list of Msgs that will be executed if the proposal passes. */
  msgs?: AnyAmino[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec?: Exec;
}
export interface MsgCreateProposalAminoMsg {
  type: "/regen.group.v1alpha1.MsgCreateProposal";
  value: MsgCreateProposalAmino;
}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposalSDKType {
  address: string;
  proposers: string[];
  metadata: Uint8Array;
  msgs: AnySDKType[];
  exec: Exec;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface MsgCreateProposalResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse";
  value: Uint8Array;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponseAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface MsgCreateProposalResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgCreateProposalResponse";
  value: MsgCreateProposalResponseAmino;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponseSDKType {
  proposal_id: bigint;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** voter is the voter account address. */
  voter: string;
  /** choice is the voter's choice on the proposal. */
  choice: Choice;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: Uint8Array;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgVote";
  value: Uint8Array;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id?: string;
  /** voter is the voter account address. */
  voter?: string;
  /** choice is the voter's choice on the proposal. */
  choice?: Choice;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata?: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec?: Exec;
}
export interface MsgVoteAminoMsg {
  type: "/regen.group.v1alpha1.MsgVote";
  value: MsgVoteAmino;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
  proposal_id: bigint;
  voter: string;
  choice: Choice;
  metadata: Uint8Array;
  exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** signer is the account address used to execute the proposal. */
  signer: string;
}
export interface MsgExecProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgExec";
  value: Uint8Array;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id?: string;
  /** signer is the account address used to execute the proposal. */
  signer?: string;
}
export interface MsgExecAminoMsg {
  type: "/regen.group.v1alpha1.MsgExec";
  value: MsgExecAmino;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
  proposal_id: bigint;
  signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {}
export interface MsgExecResponseAminoMsg {
  type: "/regen.group.v1alpha1.MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {}
function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    admin: "",
    members: [],
    metadata: new Uint8Array()
  };
}
export const MsgCreateGroup = {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
  encode(message: MsgCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  toJSON(message: MsgCreateGroup): JsonSafe<MsgCreateGroup> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgCreateGroupSDKType): MsgCreateGroup {
    return {
      admin: object?.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromSDK(e)) : [],
      metadata: object?.metadata
    };
  },
  toSDK(message: MsgCreateGroup): MsgCreateGroupSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup {
    return MsgCreateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message: MsgCreateGroup): Uint8Array {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: BigInt(0)
  };
}
export const MsgCreateGroupResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse",
  encode(message: MsgCreateGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateGroupResponse): JsonSafe<MsgCreateGroupResponse> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateGroupResponseSDKType): MsgCreateGroupResponse {
    return {
      groupId: object?.group_id
    };
  },
  toSDK(message: MsgCreateGroupResponse): MsgCreateGroupResponseSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupResponse): Uint8Array {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    admin: "",
    groupId: BigInt(0),
    memberUpdates: []
  };
}
export const MsgUpdateGroupMembers = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
  encode(message: MsgUpdateGroupMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      memberUpdates: Array.isArray(object?.memberUpdates) ? object.memberUpdates.map((e: any) => Member.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateGroupMembers): JsonSafe<MsgUpdateGroupMembers> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.memberUpdates = object.memberUpdates?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgUpdateGroupMembersSDKType): MsgUpdateGroupMembers {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      memberUpdates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => Member.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? Member.toSDK(e) : undefined);
    } else {
      obj.member_updates = [];
    }
    return obj;
  },
  fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    message.memberUpdates = object.member_updates?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member_updates = message.memberUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembers): Uint8Array {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}
export const MsgUpdateGroupMembersResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse",
  encode(_: MsgUpdateGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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
  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMembersResponse): JsonSafe<MsgUpdateGroupMembersResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupMembersResponseSDKType): MsgUpdateGroupMembersResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembersResponse): Uint8Array {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    admin: "",
    groupId: BigInt(0),
    newAdmin: ""
  };
}
export const MsgUpdateGroupAdmin = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
  encode(message: MsgUpdateGroupAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message: MsgUpdateGroupAdmin): JsonSafe<MsgUpdateGroupAdmin> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupAdminSDKType): MsgUpdateGroupAdmin {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      newAdmin: object?.new_admin
    };
  },
  toSDK(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminAminoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAdminProtoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdmin): Uint8Array {
    return MsgUpdateGroupAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}
export const MsgUpdateGroupAdminResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse",
  encode(_: MsgUpdateGroupAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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
  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupAdminResponse): JsonSafe<MsgUpdateGroupAdminResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupAdminResponseSDKType): MsgUpdateGroupAdminResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminResponseAminoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAdminResponseProtoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdminResponse): Uint8Array {
    return MsgUpdateGroupAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: new Uint8Array()
  };
}
export const MsgUpdateGroupMetadata = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
  encode(message: MsgUpdateGroupMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  toJSON(message: MsgUpdateGroupMetadata): JsonSafe<MsgUpdateGroupMetadata> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgUpdateGroupMetadataSDKType): MsgUpdateGroupMetadata {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      metadata: object?.metadata
    };
  },
  toSDK(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataAminoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataProtoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadata): Uint8Array {
    return MsgUpdateGroupMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}
export const MsgUpdateGroupMetadataResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse",
  encode(_: MsgUpdateGroupMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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
  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMetadataResponse): JsonSafe<MsgUpdateGroupMetadataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupMetadataResponseSDKType): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataResponseAminoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataResponseProtoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadataResponse): Uint8Array {
    return MsgUpdateGroupMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupAccount(): MsgCreateGroupAccount {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: new Uint8Array(),
    decisionPolicy: undefined
  };
}
export const MsgCreateGroupAccount = {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
  encode(message: MsgCreateGroupAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupAccount {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },
  toJSON(message: MsgCreateGroupAccount): JsonSafe<MsgCreateGroupAccount> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupAccount>): MsgCreateGroupAccount {
    const message = createBaseMsgCreateGroupAccount();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = object.metadata ?? new Uint8Array();
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateGroupAccountSDKType): MsgCreateGroupAccount {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      metadata: object?.metadata,
      decisionPolicy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined
    };
  },
  toSDK(message: MsgCreateGroupAccount): MsgCreateGroupAccountSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    obj.metadata = message.metadata;
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? Any.toSDK(message.decisionPolicy) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateGroupAccountAmino): MsgCreateGroupAccount {
    const message = createBaseMsgCreateGroupAccount();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = Any.fromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message: MsgCreateGroupAccount): MsgCreateGroupAccountAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAccountAminoMsg): MsgCreateGroupAccount {
    return MsgCreateGroupAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupAccountProtoMsg): MsgCreateGroupAccount {
    return MsgCreateGroupAccount.decode(message.value);
  },
  toProto(message: MsgCreateGroupAccount): Uint8Array {
    return MsgCreateGroupAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupAccount): MsgCreateGroupAccountProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
      value: MsgCreateGroupAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupAccountResponse(): MsgCreateGroupAccountResponse {
  return {
    address: ""
  };
}
export const MsgCreateGroupAccountResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse",
  encode(message: MsgCreateGroupAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupAccountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgCreateGroupAccountResponse): JsonSafe<MsgCreateGroupAccountResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupAccountResponse>): MsgCreateGroupAccountResponse {
    const message = createBaseMsgCreateGroupAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: MsgCreateGroupAccountResponseSDKType): MsgCreateGroupAccountResponse {
    return {
      address: object?.address
    };
  },
  toSDK(message: MsgCreateGroupAccountResponse): MsgCreateGroupAccountResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: MsgCreateGroupAccountResponseAmino): MsgCreateGroupAccountResponse {
    const message = createBaseMsgCreateGroupAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateGroupAccountResponse): MsgCreateGroupAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAccountResponseAminoMsg): MsgCreateGroupAccountResponse {
    return MsgCreateGroupAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupAccountResponseProtoMsg): MsgCreateGroupAccountResponse {
    return MsgCreateGroupAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupAccountResponse): Uint8Array {
    return MsgCreateGroupAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupAccountResponse): MsgCreateGroupAccountResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse",
      value: MsgCreateGroupAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAccountAdmin(): MsgUpdateGroupAccountAdmin {
  return {
    admin: "",
    address: "",
    newAdmin: ""
  };
}
export const MsgUpdateGroupAccountAdmin = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
  encode(message: MsgUpdateGroupAccountAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAccountAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAccountAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      address: isSet(object.address) ? String(object.address) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message: MsgUpdateGroupAccountAdmin): JsonSafe<MsgUpdateGroupAccountAdmin> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAccountAdmin>): MsgUpdateGroupAccountAdmin {
    const message = createBaseMsgUpdateGroupAccountAdmin();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupAccountAdminSDKType): MsgUpdateGroupAccountAdmin {
    return {
      admin: object?.admin,
      address: object?.address,
      newAdmin: object?.new_admin
    };
  },
  toSDK(message: MsgUpdateGroupAccountAdmin): MsgUpdateGroupAccountAdminSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupAccountAdminAmino): MsgUpdateGroupAccountAdmin {
    const message = createBaseMsgUpdateGroupAccountAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupAccountAdmin): MsgUpdateGroupAccountAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.address = message.address === "" ? undefined : message.address;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAccountAdminAminoMsg): MsgUpdateGroupAccountAdmin {
    return MsgUpdateGroupAccountAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAccountAdminProtoMsg): MsgUpdateGroupAccountAdmin {
    return MsgUpdateGroupAccountAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAccountAdmin): Uint8Array {
    return MsgUpdateGroupAccountAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAccountAdmin): MsgUpdateGroupAccountAdminProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
      value: MsgUpdateGroupAccountAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAccountAdminResponse(): MsgUpdateGroupAccountAdminResponse {
  return {};
}
export const MsgUpdateGroupAccountAdminResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse",
  encode(_: MsgUpdateGroupAccountAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAccountAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountAdminResponse();
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
  fromJSON(_: any): MsgUpdateGroupAccountAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupAccountAdminResponse): JsonSafe<MsgUpdateGroupAccountAdminResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAccountAdminResponse>): MsgUpdateGroupAccountAdminResponse {
    const message = createBaseMsgUpdateGroupAccountAdminResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupAccountAdminResponseSDKType): MsgUpdateGroupAccountAdminResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupAccountAdminResponse): MsgUpdateGroupAccountAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupAccountAdminResponseAmino): MsgUpdateGroupAccountAdminResponse {
    const message = createBaseMsgUpdateGroupAccountAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupAccountAdminResponse): MsgUpdateGroupAccountAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAccountAdminResponseAminoMsg): MsgUpdateGroupAccountAdminResponse {
    return MsgUpdateGroupAccountAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAccountAdminResponseProtoMsg): MsgUpdateGroupAccountAdminResponse {
    return MsgUpdateGroupAccountAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAccountAdminResponse): Uint8Array {
    return MsgUpdateGroupAccountAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAccountAdminResponse): MsgUpdateGroupAccountAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse",
      value: MsgUpdateGroupAccountAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAccountDecisionPolicy(): MsgUpdateGroupAccountDecisionPolicy {
  return {
    admin: "",
    address: "",
    decisionPolicy: undefined
  };
}
export const MsgUpdateGroupAccountDecisionPolicy = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
  encode(message: MsgUpdateGroupAccountDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAccountDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAccountDecisionPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      address: isSet(object.address) ? String(object.address) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },
  toJSON(message: MsgUpdateGroupAccountDecisionPolicy): JsonSafe<MsgUpdateGroupAccountDecisionPolicy> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAccountDecisionPolicy>): MsgUpdateGroupAccountDecisionPolicy {
    const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateGroupAccountDecisionPolicySDKType): MsgUpdateGroupAccountDecisionPolicy {
    return {
      admin: object?.admin,
      address: object?.address,
      decisionPolicy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined
    };
  },
  toSDK(message: MsgUpdateGroupAccountDecisionPolicy): MsgUpdateGroupAccountDecisionPolicySDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.address = message.address;
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? Any.toSDK(message.decisionPolicy) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateGroupAccountDecisionPolicyAmino): MsgUpdateGroupAccountDecisionPolicy {
    const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = Any.fromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupAccountDecisionPolicy): MsgUpdateGroupAccountDecisionPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.address = message.address === "" ? undefined : message.address;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAccountDecisionPolicyAminoMsg): MsgUpdateGroupAccountDecisionPolicy {
    return MsgUpdateGroupAccountDecisionPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAccountDecisionPolicyProtoMsg): MsgUpdateGroupAccountDecisionPolicy {
    return MsgUpdateGroupAccountDecisionPolicy.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAccountDecisionPolicy): Uint8Array {
    return MsgUpdateGroupAccountDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAccountDecisionPolicy): MsgUpdateGroupAccountDecisionPolicyProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
      value: MsgUpdateGroupAccountDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAccountDecisionPolicyResponse(): MsgUpdateGroupAccountDecisionPolicyResponse {
  return {};
}
export const MsgUpdateGroupAccountDecisionPolicyResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse",
  encode(_: MsgUpdateGroupAccountDecisionPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAccountDecisionPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
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
  fromJSON(_: any): MsgUpdateGroupAccountDecisionPolicyResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupAccountDecisionPolicyResponse): JsonSafe<MsgUpdateGroupAccountDecisionPolicyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAccountDecisionPolicyResponse>): MsgUpdateGroupAccountDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupAccountDecisionPolicyResponseSDKType): MsgUpdateGroupAccountDecisionPolicyResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupAccountDecisionPolicyResponse): MsgUpdateGroupAccountDecisionPolicyResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupAccountDecisionPolicyResponseAmino): MsgUpdateGroupAccountDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupAccountDecisionPolicyResponse): MsgUpdateGroupAccountDecisionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAccountDecisionPolicyResponseAminoMsg): MsgUpdateGroupAccountDecisionPolicyResponse {
    return MsgUpdateGroupAccountDecisionPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg): MsgUpdateGroupAccountDecisionPolicyResponse {
    return MsgUpdateGroupAccountDecisionPolicyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAccountDecisionPolicyResponse): Uint8Array {
    return MsgUpdateGroupAccountDecisionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAccountDecisionPolicyResponse): MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse",
      value: MsgUpdateGroupAccountDecisionPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAccountMetadata(): MsgUpdateGroupAccountMetadata {
  return {
    admin: "",
    address: "",
    metadata: new Uint8Array()
  };
}
export const MsgUpdateGroupAccountMetadata = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
  encode(message: MsgUpdateGroupAccountMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAccountMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAccountMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  toJSON(message: MsgUpdateGroupAccountMetadata): JsonSafe<MsgUpdateGroupAccountMetadata> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAccountMetadata>): MsgUpdateGroupAccountMetadata {
    const message = createBaseMsgUpdateGroupAccountMetadata();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgUpdateGroupAccountMetadataSDKType): MsgUpdateGroupAccountMetadata {
    return {
      admin: object?.admin,
      address: object?.address,
      metadata: object?.metadata
    };
  },
  toSDK(message: MsgUpdateGroupAccountMetadata): MsgUpdateGroupAccountMetadataSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupAccountMetadataAmino): MsgUpdateGroupAccountMetadata {
    const message = createBaseMsgUpdateGroupAccountMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupAccountMetadata): MsgUpdateGroupAccountMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.address = message.address === "" ? undefined : message.address;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAccountMetadataAminoMsg): MsgUpdateGroupAccountMetadata {
    return MsgUpdateGroupAccountMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAccountMetadataProtoMsg): MsgUpdateGroupAccountMetadata {
    return MsgUpdateGroupAccountMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAccountMetadata): Uint8Array {
    return MsgUpdateGroupAccountMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAccountMetadata): MsgUpdateGroupAccountMetadataProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
      value: MsgUpdateGroupAccountMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAccountMetadataResponse(): MsgUpdateGroupAccountMetadataResponse {
  return {};
}
export const MsgUpdateGroupAccountMetadataResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse",
  encode(_: MsgUpdateGroupAccountMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAccountMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountMetadataResponse();
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
  fromJSON(_: any): MsgUpdateGroupAccountMetadataResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupAccountMetadataResponse): JsonSafe<MsgUpdateGroupAccountMetadataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAccountMetadataResponse>): MsgUpdateGroupAccountMetadataResponse {
    const message = createBaseMsgUpdateGroupAccountMetadataResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupAccountMetadataResponseSDKType): MsgUpdateGroupAccountMetadataResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupAccountMetadataResponse): MsgUpdateGroupAccountMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupAccountMetadataResponseAmino): MsgUpdateGroupAccountMetadataResponse {
    const message = createBaseMsgUpdateGroupAccountMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupAccountMetadataResponse): MsgUpdateGroupAccountMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAccountMetadataResponseAminoMsg): MsgUpdateGroupAccountMetadataResponse {
    return MsgUpdateGroupAccountMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupAccountMetadataResponseProtoMsg): MsgUpdateGroupAccountMetadataResponse {
    return MsgUpdateGroupAccountMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAccountMetadataResponse): Uint8Array {
    return MsgUpdateGroupAccountMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAccountMetadataResponse): MsgUpdateGroupAccountMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse",
      value: MsgUpdateGroupAccountMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProposal(): MsgCreateProposal {
  return {
    address: "",
    proposers: [],
    metadata: new Uint8Array(),
    msgs: [],
    exec: 0
  };
}
export const MsgCreateProposal = {
  typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
  encode(message: MsgCreateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateProposal {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toJSON(message: MsgCreateProposal): JsonSafe<MsgCreateProposal> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateProposal>): MsgCreateProposal {
    const message = createBaseMsgCreateProposal();
    message.address = object.address ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },
  fromSDK(object: MsgCreateProposalSDKType): MsgCreateProposal {
    return {
      address: object?.address,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      metadata: object?.metadata,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromSDK(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toSDK(message: MsgCreateProposal): MsgCreateProposalSDKType {
    const obj: any = {};
    obj.address = message.address;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.metadata = message.metadata;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromAmino(object: MsgCreateProposalAmino): MsgCreateProposal {
    const message = createBaseMsgCreateProposal();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.proposers = object.proposers?.map(e => e) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    }
    return message;
  },
  toAmino(message: MsgCreateProposal): MsgCreateProposalAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = message.proposers;
    }
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.exec = message.exec === 0 ? undefined : message.exec;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProposalAminoMsg): MsgCreateProposal {
    return MsgCreateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProposalProtoMsg): MsgCreateProposal {
    return MsgCreateProposal.decode(message.value);
  },
  toProto(message: MsgCreateProposal): Uint8Array {
    return MsgCreateProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProposal): MsgCreateProposalProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
      value: MsgCreateProposal.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProposalResponse(): MsgCreateProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgCreateProposalResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse",
  encode(message: MsgCreateProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateProposalResponse): JsonSafe<MsgCreateProposalResponse> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateProposalResponse>): MsgCreateProposalResponse {
    const message = createBaseMsgCreateProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateProposalResponseSDKType): MsgCreateProposalResponse {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: MsgCreateProposalResponse): MsgCreateProposalResponseSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: MsgCreateProposalResponseAmino): MsgCreateProposalResponse {
    const message = createBaseMsgCreateProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgCreateProposalResponse): MsgCreateProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProposalResponseAminoMsg): MsgCreateProposalResponse {
    return MsgCreateProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProposalResponseProtoMsg): MsgCreateProposalResponse {
    return MsgCreateProposalResponse.decode(message.value);
  },
  toProto(message: MsgCreateProposalResponse): Uint8Array {
    return MsgCreateProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProposalResponse): MsgCreateProposalResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse",
      value: MsgCreateProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    choice: 0,
    metadata: new Uint8Array(),
    exec: 0
  };
}
export const MsgVote = {
  typeUrl: "/regen.group.v1alpha1.MsgVote",
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.choice !== 0) {
      writer.uint32(24).int32(message.choice);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.choice = (reader.int32() as any);
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      choice: isSet(object.choice) ? choiceFromJSON(object.choice) : -1,
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toJSON(message: MsgVote): JsonSafe<MsgVote> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.choice !== undefined && (obj.choice = choiceToJSON(message.choice));
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.choice = object.choice ?? 0;
    message.metadata = object.metadata ?? new Uint8Array();
    message.exec = object.exec ?? 0;
    return message;
  },
  fromSDK(object: MsgVoteSDKType): MsgVote {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      choice: isSet(object.choice) ? choiceFromJSON(object.choice) : -1,
      metadata: object?.metadata,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toSDK(message: MsgVote): MsgVoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    message.choice !== undefined && (obj.choice = choiceToJSON(message.choice));
    obj.metadata = message.metadata;
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.choice !== undefined && object.choice !== null) {
      message.choice = object.choice;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    }
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.choice = message.choice === 0 ? undefined : message.choice;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.exec = message.exec === 0 ? undefined : message.exec;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromJSON(_: any): MsgVoteResponse {
    return {};
  },
  toJSON(_: MsgVoteResponse): JsonSafe<MsgVoteResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse {
    return {};
  },
  toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec(): MsgExec {
  return {
    proposalId: BigInt(0),
    signer: ""
  };
}
export const MsgExec = {
  typeUrl: "/regen.group.v1alpha1.MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExec {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgExec): JsonSafe<MsgExec> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgExecSDKType): MsgExec {
    return {
      proposalId: object?.proposal_id,
      signer: object?.signer
    };
  },
  toSDK(message: MsgExec): MsgExecSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {};
}
export const MsgExecResponse = {
  typeUrl: "/regen.group.v1alpha1.MsgExecResponse",
  encode(_: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
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
  fromJSON(_: any): MsgExecResponse {
    return {};
  },
  toJSON(_: MsgExecResponse): JsonSafe<MsgExecResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },
  fromSDK(_: MsgExecResponseSDKType): MsgExecResponse {
    return {};
  },
  toSDK(_: MsgExecResponse): MsgExecResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },
  toAmino(_: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};