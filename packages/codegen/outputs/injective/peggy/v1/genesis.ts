import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Valset, ValsetAmino, ValsetSDKType, ERC20ToDenom, ERC20ToDenomAmino, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesAmino, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface Params {
  peggyId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: bigint;
  signedValsetsWindow: bigint;
  signedBatchesWindow: bigint;
  signedClaimsWindow: bigint;
  targetBatchTimeout: bigint;
  averageBlockTime: bigint;
  averageEthereumBlockTime: bigint;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: bigint;
  slashFractionBadEthSignature: Uint8Array;
  cosmosCoinDenom: string;
  cosmosCoinErc20Contract: string;
  claimSlashingEnabled: boolean;
  bridgeContractStartHeight: bigint;
  valsetReward: Coin | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.peggy.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  peggy_id?: string;
  contract_source_hash?: string;
  bridge_ethereum_address?: string;
  bridge_chain_id?: string;
  signed_valsets_window?: string;
  signed_batches_window?: string;
  signed_claims_window?: string;
  target_batch_timeout?: string;
  average_block_time?: string;
  average_ethereum_block_time?: string;
  slash_fraction_valset?: string;
  slash_fraction_batch?: string;
  slash_fraction_claim?: string;
  slash_fraction_conflicting_claim?: string;
  unbond_slashing_valsets_window?: string;
  slash_fraction_bad_eth_signature?: string;
  cosmos_coin_denom?: string;
  cosmos_coin_erc20_contract?: string;
  claim_slashing_enabled?: boolean;
  bridge_contract_start_height?: string;
  valset_reward?: CoinAmino | undefined;
}
export interface ParamsAminoMsg {
  type: "/injective.peggy.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  peggy_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: bigint;
  signed_valsets_window: bigint;
  signed_batches_window: bigint;
  signed_claims_window: bigint;
  target_batch_timeout: bigint;
  average_block_time: bigint;
  average_ethereum_block_time: bigint;
  slash_fraction_valset: Uint8Array;
  slash_fraction_batch: Uint8Array;
  slash_fraction_claim: Uint8Array;
  slash_fraction_conflicting_claim: Uint8Array;
  unbond_slashing_valsets_window: bigint;
  slash_fraction_bad_eth_signature: Uint8Array;
  cosmos_coin_denom: string;
  cosmos_coin_erc20_contract: string;
  claim_slashing_enabled: boolean;
  bridge_contract_start_height: bigint;
  valset_reward: CoinSDKType | undefined;
}
/** GenesisState struct */
export interface GenesisState {
  params?: Params | undefined;
  lastObservedNonce: bigint;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  attestations: Attestation[];
  orchestratorAddresses: MsgSetOrchestratorAddresses[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  lastObservedEthereumHeight: bigint;
  lastOutgoingBatchId: bigint;
  lastOutgoingPoolId: bigint;
  lastObservedValset: Valset | undefined;
  ethereumBlacklist: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.peggy.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState struct */
export interface GenesisStateAmino {
  params?: ParamsAmino | undefined;
  last_observed_nonce?: string;
  valsets?: ValsetAmino[];
  valset_confirms?: MsgValsetConfirmAmino[];
  batches?: OutgoingTxBatchAmino[];
  batch_confirms?: MsgConfirmBatchAmino[];
  attestations?: AttestationAmino[];
  orchestrator_addresses?: MsgSetOrchestratorAddressesAmino[];
  erc20_to_denoms?: ERC20ToDenomAmino[];
  unbatched_transfers?: OutgoingTransferTxAmino[];
  last_observed_ethereum_height?: string;
  last_outgoing_batch_id?: string;
  last_outgoing_pool_id?: string;
  last_observed_valset?: ValsetAmino | undefined;
  ethereum_blacklist?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.peggy.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState struct */
export interface GenesisStateSDKType {
  params?: ParamsSDKType | undefined;
  last_observed_nonce: bigint;
  valsets: ValsetSDKType[];
  valset_confirms: MsgValsetConfirmSDKType[];
  batches: OutgoingTxBatchSDKType[];
  batch_confirms: MsgConfirmBatchSDKType[];
  attestations: AttestationSDKType[];
  orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
  erc20_to_denoms: ERC20ToDenomSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
  last_observed_ethereum_height: bigint;
  last_outgoing_batch_id: bigint;
  last_outgoing_pool_id: bigint;
  last_observed_valset: ValsetSDKType | undefined;
  ethereum_blacklist: string[];
}
function createBaseParams(): Params {
  return {
    peggyId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: BigInt(0),
    signedValsetsWindow: BigInt(0),
    signedBatchesWindow: BigInt(0),
    signedClaimsWindow: BigInt(0),
    targetBatchTimeout: BigInt(0),
    averageBlockTime: BigInt(0),
    averageEthereumBlockTime: BigInt(0),
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionClaim: new Uint8Array(),
    slashFractionConflictingClaim: new Uint8Array(),
    unbondSlashingValsetsWindow: BigInt(0),
    slashFractionBadEthSignature: new Uint8Array(),
    cosmosCoinDenom: "",
    cosmosCoinErc20Contract: "",
    claimSlashingEnabled: false,
    bridgeContractStartHeight: BigInt(0),
    valsetReward: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/injective.peggy.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peggyId !== "") {
      writer.uint32(10).string(message.peggyId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(26).string(message.bridgeEthereumAddress);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.bridgeChainId);
    }
    if (message.signedValsetsWindow !== BigInt(0)) {
      writer.uint32(40).uint64(message.signedValsetsWindow);
    }
    if (message.signedBatchesWindow !== BigInt(0)) {
      writer.uint32(48).uint64(message.signedBatchesWindow);
    }
    if (message.signedClaimsWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.signedClaimsWindow);
    }
    if (message.targetBatchTimeout !== BigInt(0)) {
      writer.uint32(64).uint64(message.targetBatchTimeout);
    }
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(72).uint64(message.averageBlockTime);
    }
    if (message.averageEthereumBlockTime !== BigInt(0)) {
      writer.uint32(80).uint64(message.averageEthereumBlockTime);
    }
    if (message.slashFractionValset.length !== 0) {
      writer.uint32(90).bytes(message.slashFractionValset);
    }
    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(98).bytes(message.slashFractionBatch);
    }
    if (message.slashFractionClaim.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionClaim);
    }
    if (message.slashFractionConflictingClaim.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionConflictingClaim);
    }
    if (message.unbondSlashingValsetsWindow !== BigInt(0)) {
      writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
    }
    if (message.slashFractionBadEthSignature.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionBadEthSignature);
    }
    if (message.cosmosCoinDenom !== "") {
      writer.uint32(138).string(message.cosmosCoinDenom);
    }
    if (message.cosmosCoinErc20Contract !== "") {
      writer.uint32(146).string(message.cosmosCoinErc20Contract);
    }
    if (message.claimSlashingEnabled === true) {
      writer.uint32(152).bool(message.claimSlashingEnabled);
    }
    if (message.bridgeContractStartHeight !== BigInt(0)) {
      writer.uint32(160).uint64(message.bridgeContractStartHeight);
    }
    if (message.valsetReward !== undefined) {
      Coin.encode(message.valsetReward, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peggyId = reader.string();
          break;
        case 2:
          message.contractSourceHash = reader.string();
          break;
        case 3:
          message.bridgeEthereumAddress = reader.string();
          break;
        case 4:
          message.bridgeChainId = reader.uint64();
          break;
        case 5:
          message.signedValsetsWindow = reader.uint64();
          break;
        case 6:
          message.signedBatchesWindow = reader.uint64();
          break;
        case 7:
          message.signedClaimsWindow = reader.uint64();
          break;
        case 8:
          message.targetBatchTimeout = reader.uint64();
          break;
        case 9:
          message.averageBlockTime = reader.uint64();
          break;
        case 10:
          message.averageEthereumBlockTime = reader.uint64();
          break;
        case 11:
          message.slashFractionValset = reader.bytes();
          break;
        case 12:
          message.slashFractionBatch = reader.bytes();
          break;
        case 13:
          message.slashFractionClaim = reader.bytes();
          break;
        case 14:
          message.slashFractionConflictingClaim = reader.bytes();
          break;
        case 15:
          message.unbondSlashingValsetsWindow = reader.uint64();
          break;
        case 16:
          message.slashFractionBadEthSignature = reader.bytes();
          break;
        case 17:
          message.cosmosCoinDenom = reader.string();
          break;
        case 18:
          message.cosmosCoinErc20Contract = reader.string();
          break;
        case 19:
          message.claimSlashingEnabled = reader.bool();
          break;
        case 20:
          message.bridgeContractStartHeight = reader.uint64();
          break;
        case 21:
          message.valsetReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      peggyId: isSet(object.peggyId) ? String(object.peggyId) : "",
      contractSourceHash: isSet(object.contractSourceHash) ? String(object.contractSourceHash) : "",
      bridgeEthereumAddress: isSet(object.bridgeEthereumAddress) ? String(object.bridgeEthereumAddress) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? BigInt(object.bridgeChainId.toString()) : BigInt(0),
      signedValsetsWindow: isSet(object.signedValsetsWindow) ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0),
      signedBatchesWindow: isSet(object.signedBatchesWindow) ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0),
      signedClaimsWindow: isSet(object.signedClaimsWindow) ? BigInt(object.signedClaimsWindow.toString()) : BigInt(0),
      targetBatchTimeout: isSet(object.targetBatchTimeout) ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0),
      averageBlockTime: isSet(object.averageBlockTime) ? BigInt(object.averageBlockTime.toString()) : BigInt(0),
      averageEthereumBlockTime: isSet(object.averageEthereumBlockTime) ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0),
      slashFractionValset: isSet(object.slashFractionValset) ? bytesFromBase64(object.slashFractionValset) : new Uint8Array(),
      slashFractionBatch: isSet(object.slashFractionBatch) ? bytesFromBase64(object.slashFractionBatch) : new Uint8Array(),
      slashFractionClaim: isSet(object.slashFractionClaim) ? bytesFromBase64(object.slashFractionClaim) : new Uint8Array(),
      slashFractionConflictingClaim: isSet(object.slashFractionConflictingClaim) ? bytesFromBase64(object.slashFractionConflictingClaim) : new Uint8Array(),
      unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow) ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0),
      slashFractionBadEthSignature: isSet(object.slashFractionBadEthSignature) ? bytesFromBase64(object.slashFractionBadEthSignature) : new Uint8Array(),
      cosmosCoinDenom: isSet(object.cosmosCoinDenom) ? String(object.cosmosCoinDenom) : "",
      cosmosCoinErc20Contract: isSet(object.cosmosCoinErc20Contract) ? String(object.cosmosCoinErc20Contract) : "",
      claimSlashingEnabled: isSet(object.claimSlashingEnabled) ? Boolean(object.claimSlashingEnabled) : false,
      bridgeContractStartHeight: isSet(object.bridgeContractStartHeight) ? BigInt(object.bridgeContractStartHeight.toString()) : BigInt(0),
      valsetReward: isSet(object.valsetReward) ? Coin.fromJSON(object.valsetReward) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.peggyId !== undefined && (obj.peggyId = message.peggyId);
    message.contractSourceHash !== undefined && (obj.contractSourceHash = message.contractSourceHash);
    message.bridgeEthereumAddress !== undefined && (obj.bridgeEthereumAddress = message.bridgeEthereumAddress);
    message.bridgeChainId !== undefined && (obj.bridgeChainId = (message.bridgeChainId || BigInt(0)).toString());
    message.signedValsetsWindow !== undefined && (obj.signedValsetsWindow = (message.signedValsetsWindow || BigInt(0)).toString());
    message.signedBatchesWindow !== undefined && (obj.signedBatchesWindow = (message.signedBatchesWindow || BigInt(0)).toString());
    message.signedClaimsWindow !== undefined && (obj.signedClaimsWindow = (message.signedClaimsWindow || BigInt(0)).toString());
    message.targetBatchTimeout !== undefined && (obj.targetBatchTimeout = (message.targetBatchTimeout || BigInt(0)).toString());
    message.averageBlockTime !== undefined && (obj.averageBlockTime = (message.averageBlockTime || BigInt(0)).toString());
    message.averageEthereumBlockTime !== undefined && (obj.averageEthereumBlockTime = (message.averageEthereumBlockTime || BigInt(0)).toString());
    message.slashFractionValset !== undefined && (obj.slashFractionValset = base64FromBytes(message.slashFractionValset !== undefined ? message.slashFractionValset : new Uint8Array()));
    message.slashFractionBatch !== undefined && (obj.slashFractionBatch = base64FromBytes(message.slashFractionBatch !== undefined ? message.slashFractionBatch : new Uint8Array()));
    message.slashFractionClaim !== undefined && (obj.slashFractionClaim = base64FromBytes(message.slashFractionClaim !== undefined ? message.slashFractionClaim : new Uint8Array()));
    message.slashFractionConflictingClaim !== undefined && (obj.slashFractionConflictingClaim = base64FromBytes(message.slashFractionConflictingClaim !== undefined ? message.slashFractionConflictingClaim : new Uint8Array()));
    message.unbondSlashingValsetsWindow !== undefined && (obj.unbondSlashingValsetsWindow = (message.unbondSlashingValsetsWindow || BigInt(0)).toString());
    message.slashFractionBadEthSignature !== undefined && (obj.slashFractionBadEthSignature = base64FromBytes(message.slashFractionBadEthSignature !== undefined ? message.slashFractionBadEthSignature : new Uint8Array()));
    message.cosmosCoinDenom !== undefined && (obj.cosmosCoinDenom = message.cosmosCoinDenom);
    message.cosmosCoinErc20Contract !== undefined && (obj.cosmosCoinErc20Contract = message.cosmosCoinErc20Contract);
    message.claimSlashingEnabled !== undefined && (obj.claimSlashingEnabled = message.claimSlashingEnabled);
    message.bridgeContractStartHeight !== undefined && (obj.bridgeContractStartHeight = (message.bridgeContractStartHeight || BigInt(0)).toString());
    message.valsetReward !== undefined && (obj.valsetReward = message.valsetReward ? Coin.toJSON(message.valsetReward) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.peggyId = object.peggyId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0);
    message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0);
    message.signedClaimsWindow = object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null ? BigInt(object.signedClaimsWindow.toString()) : BigInt(0);
    message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0);
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0);
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
    message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
    message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0);
    message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
    message.cosmosCoinDenom = object.cosmosCoinDenom ?? "";
    message.cosmosCoinErc20Contract = object.cosmosCoinErc20Contract ?? "";
    message.claimSlashingEnabled = object.claimSlashingEnabled ?? false;
    message.bridgeContractStartHeight = object.bridgeContractStartHeight !== undefined && object.bridgeContractStartHeight !== null ? BigInt(object.bridgeContractStartHeight.toString()) : BigInt(0);
    message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      peggyId: object?.peggy_id,
      contractSourceHash: object?.contract_source_hash,
      bridgeEthereumAddress: object?.bridge_ethereum_address,
      bridgeChainId: object?.bridge_chain_id,
      signedValsetsWindow: object?.signed_valsets_window,
      signedBatchesWindow: object?.signed_batches_window,
      signedClaimsWindow: object?.signed_claims_window,
      targetBatchTimeout: object?.target_batch_timeout,
      averageBlockTime: object?.average_block_time,
      averageEthereumBlockTime: object?.average_ethereum_block_time,
      slashFractionValset: object?.slash_fraction_valset,
      slashFractionBatch: object?.slash_fraction_batch,
      slashFractionClaim: object?.slash_fraction_claim,
      slashFractionConflictingClaim: object?.slash_fraction_conflicting_claim,
      unbondSlashingValsetsWindow: object?.unbond_slashing_valsets_window,
      slashFractionBadEthSignature: object?.slash_fraction_bad_eth_signature,
      cosmosCoinDenom: object?.cosmos_coin_denom,
      cosmosCoinErc20Contract: object?.cosmos_coin_erc20_contract,
      claimSlashingEnabled: object?.claim_slashing_enabled,
      bridgeContractStartHeight: object?.bridge_contract_start_height,
      valsetReward: object.valset_reward ? Coin.fromSDK(object.valset_reward) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.peggy_id = message.peggyId;
    obj.contract_source_hash = message.contractSourceHash;
    obj.bridge_ethereum_address = message.bridgeEthereumAddress;
    obj.bridge_chain_id = message.bridgeChainId;
    obj.signed_valsets_window = message.signedValsetsWindow;
    obj.signed_batches_window = message.signedBatchesWindow;
    obj.signed_claims_window = message.signedClaimsWindow;
    obj.target_batch_timeout = message.targetBatchTimeout;
    obj.average_block_time = message.averageBlockTime;
    obj.average_ethereum_block_time = message.averageEthereumBlockTime;
    obj.slash_fraction_valset = message.slashFractionValset;
    obj.slash_fraction_batch = message.slashFractionBatch;
    obj.slash_fraction_claim = message.slashFractionClaim;
    obj.slash_fraction_conflicting_claim = message.slashFractionConflictingClaim;
    obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow;
    obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature;
    obj.cosmos_coin_denom = message.cosmosCoinDenom;
    obj.cosmos_coin_erc20_contract = message.cosmosCoinErc20Contract;
    obj.claim_slashing_enabled = message.claimSlashingEnabled;
    obj.bridge_contract_start_height = message.bridgeContractStartHeight;
    message.valsetReward !== undefined && (obj.valset_reward = message.valsetReward ? Coin.toSDK(message.valsetReward) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.peggy_id !== undefined && object.peggy_id !== null) {
      message.peggyId = object.peggy_id;
    }
    if (object.contract_source_hash !== undefined && object.contract_source_hash !== null) {
      message.contractSourceHash = object.contract_source_hash;
    }
    if (object.bridge_ethereum_address !== undefined && object.bridge_ethereum_address !== null) {
      message.bridgeEthereumAddress = object.bridge_ethereum_address;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = BigInt(object.bridge_chain_id);
    }
    if (object.signed_valsets_window !== undefined && object.signed_valsets_window !== null) {
      message.signedValsetsWindow = BigInt(object.signed_valsets_window);
    }
    if (object.signed_batches_window !== undefined && object.signed_batches_window !== null) {
      message.signedBatchesWindow = BigInt(object.signed_batches_window);
    }
    if (object.signed_claims_window !== undefined && object.signed_claims_window !== null) {
      message.signedClaimsWindow = BigInt(object.signed_claims_window);
    }
    if (object.target_batch_timeout !== undefined && object.target_batch_timeout !== null) {
      message.targetBatchTimeout = BigInt(object.target_batch_timeout);
    }
    if (object.average_block_time !== undefined && object.average_block_time !== null) {
      message.averageBlockTime = BigInt(object.average_block_time);
    }
    if (object.average_ethereum_block_time !== undefined && object.average_ethereum_block_time !== null) {
      message.averageEthereumBlockTime = BigInt(object.average_ethereum_block_time);
    }
    if (object.slash_fraction_valset !== undefined && object.slash_fraction_valset !== null) {
      message.slashFractionValset = bytesFromBase64(object.slash_fraction_valset);
    }
    if (object.slash_fraction_batch !== undefined && object.slash_fraction_batch !== null) {
      message.slashFractionBatch = bytesFromBase64(object.slash_fraction_batch);
    }
    if (object.slash_fraction_claim !== undefined && object.slash_fraction_claim !== null) {
      message.slashFractionClaim = bytesFromBase64(object.slash_fraction_claim);
    }
    if (object.slash_fraction_conflicting_claim !== undefined && object.slash_fraction_conflicting_claim !== null) {
      message.slashFractionConflictingClaim = bytesFromBase64(object.slash_fraction_conflicting_claim);
    }
    if (object.unbond_slashing_valsets_window !== undefined && object.unbond_slashing_valsets_window !== null) {
      message.unbondSlashingValsetsWindow = BigInt(object.unbond_slashing_valsets_window);
    }
    if (object.slash_fraction_bad_eth_signature !== undefined && object.slash_fraction_bad_eth_signature !== null) {
      message.slashFractionBadEthSignature = bytesFromBase64(object.slash_fraction_bad_eth_signature);
    }
    if (object.cosmos_coin_denom !== undefined && object.cosmos_coin_denom !== null) {
      message.cosmosCoinDenom = object.cosmos_coin_denom;
    }
    if (object.cosmos_coin_erc20_contract !== undefined && object.cosmos_coin_erc20_contract !== null) {
      message.cosmosCoinErc20Contract = object.cosmos_coin_erc20_contract;
    }
    if (object.claim_slashing_enabled !== undefined && object.claim_slashing_enabled !== null) {
      message.claimSlashingEnabled = object.claim_slashing_enabled;
    }
    if (object.bridge_contract_start_height !== undefined && object.bridge_contract_start_height !== null) {
      message.bridgeContractStartHeight = BigInt(object.bridge_contract_start_height);
    }
    if (object.valset_reward !== undefined && object.valset_reward !== null) {
      message.valsetReward = Coin.fromAmino(object.valset_reward);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.peggy_id = message.peggyId === "" ? undefined : message.peggyId;
    obj.contract_source_hash = message.contractSourceHash === "" ? undefined : message.contractSourceHash;
    obj.bridge_ethereum_address = message.bridgeEthereumAddress === "" ? undefined : message.bridgeEthereumAddress;
    obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? message.bridgeChainId.toString() : undefined;
    obj.signed_valsets_window = message.signedValsetsWindow !== BigInt(0) ? message.signedValsetsWindow.toString() : undefined;
    obj.signed_batches_window = message.signedBatchesWindow !== BigInt(0) ? message.signedBatchesWindow.toString() : undefined;
    obj.signed_claims_window = message.signedClaimsWindow !== BigInt(0) ? message.signedClaimsWindow.toString() : undefined;
    obj.target_batch_timeout = message.targetBatchTimeout !== BigInt(0) ? message.targetBatchTimeout.toString() : undefined;
    obj.average_block_time = message.averageBlockTime !== BigInt(0) ? message.averageBlockTime.toString() : undefined;
    obj.average_ethereum_block_time = message.averageEthereumBlockTime !== BigInt(0) ? message.averageEthereumBlockTime.toString() : undefined;
    obj.slash_fraction_valset = message.slashFractionValset ? base64FromBytes(message.slashFractionValset) : undefined;
    obj.slash_fraction_batch = message.slashFractionBatch ? base64FromBytes(message.slashFractionBatch) : undefined;
    obj.slash_fraction_claim = message.slashFractionClaim ? base64FromBytes(message.slashFractionClaim) : undefined;
    obj.slash_fraction_conflicting_claim = message.slashFractionConflictingClaim ? base64FromBytes(message.slashFractionConflictingClaim) : undefined;
    obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow !== BigInt(0) ? message.unbondSlashingValsetsWindow.toString() : undefined;
    obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature ? base64FromBytes(message.slashFractionBadEthSignature) : undefined;
    obj.cosmos_coin_denom = message.cosmosCoinDenom === "" ? undefined : message.cosmosCoinDenom;
    obj.cosmos_coin_erc20_contract = message.cosmosCoinErc20Contract === "" ? undefined : message.cosmosCoinErc20Contract;
    obj.claim_slashing_enabled = message.claimSlashingEnabled === false ? undefined : message.claimSlashingEnabled;
    obj.bridge_contract_start_height = message.bridgeContractStartHeight !== BigInt(0) ? message.bridgeContractStartHeight.toString() : undefined;
    obj.valset_reward = message.valsetReward ? Coin.toAmino(message.valsetReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastObservedNonce: BigInt(0),
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    attestations: [],
    orchestratorAddresses: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    lastObservedEthereumHeight: BigInt(0),
    lastOutgoingBatchId: BigInt(0),
    lastOutgoingPoolId: BigInt(0),
    lastObservedValset: Valset.fromPartial({}),
    ethereumBlacklist: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.peggy.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastObservedNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.orchestratorAddresses) {
      MsgSetOrchestratorAddresses.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastObservedEthereumHeight !== BigInt(0)) {
      writer.uint32(88).uint64(message.lastObservedEthereumHeight);
    }
    if (message.lastOutgoingBatchId !== BigInt(0)) {
      writer.uint32(96).uint64(message.lastOutgoingBatchId);
    }
    if (message.lastOutgoingPoolId !== BigInt(0)) {
      writer.uint32(104).uint64(message.lastOutgoingPoolId);
    }
    if (message.lastObservedValset !== undefined) {
      Valset.encode(message.lastObservedValset, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.ethereumBlacklist) {
      writer.uint32(122).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastObservedNonce = reader.uint64();
          break;
        case 3:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.valsetConfirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        case 5:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        case 6:
          message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        case 7:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.orchestratorAddresses.push(MsgSetOrchestratorAddresses.decode(reader, reader.uint32()));
          break;
        case 9:
          message.erc20ToDenoms.push(ERC20ToDenom.decode(reader, reader.uint32()));
          break;
        case 10:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 11:
          message.lastObservedEthereumHeight = reader.uint64();
          break;
        case 12:
          message.lastOutgoingBatchId = reader.uint64();
          break;
        case 13:
          message.lastOutgoingPoolId = reader.uint64();
          break;
        case 14:
          message.lastObservedValset = Valset.decode(reader, reader.uint32());
          break;
        case 15:
          message.ethereumBlacklist.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastObservedNonce: isSet(object.lastObservedNonce) ? BigInt(object.lastObservedNonce.toString()) : BigInt(0),
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
      valsetConfirms: Array.isArray(object?.valsetConfirms) ? object.valsetConfirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : [],
      batchConfirms: Array.isArray(object?.batchConfirms) ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : [],
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromJSON(e)) : [],
      orchestratorAddresses: Array.isArray(object?.orchestratorAddresses) ? object.orchestratorAddresses.map((e: any) => MsgSetOrchestratorAddresses.fromJSON(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20ToDenoms) ? object.erc20ToDenoms.map((e: any) => ERC20ToDenom.fromJSON(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers) ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      lastObservedEthereumHeight: isSet(object.lastObservedEthereumHeight) ? BigInt(object.lastObservedEthereumHeight.toString()) : BigInt(0),
      lastOutgoingBatchId: isSet(object.lastOutgoingBatchId) ? BigInt(object.lastOutgoingBatchId.toString()) : BigInt(0),
      lastOutgoingPoolId: isSet(object.lastOutgoingPoolId) ? BigInt(object.lastOutgoingPoolId.toString()) : BigInt(0),
      lastObservedValset: isSet(object.lastObservedValset) ? Valset.fromJSON(object.lastObservedValset) : undefined,
      ethereumBlacklist: Array.isArray(object?.ethereumBlacklist) ? object.ethereumBlacklist.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastObservedNonce !== undefined && (obj.lastObservedNonce = (message.lastObservedNonce || BigInt(0)).toString());
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toJSON(e) : undefined);
    } else {
      obj.valsets = [];
    }
    if (message.valsetConfirms) {
      obj.valsetConfirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toJSON(e) : undefined);
    } else {
      obj.valsetConfirms = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batchConfirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toJSON(e) : undefined);
    } else {
      obj.batchConfirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    if (message.orchestratorAddresses) {
      obj.orchestratorAddresses = message.orchestratorAddresses.map(e => e ? MsgSetOrchestratorAddresses.toJSON(e) : undefined);
    } else {
      obj.orchestratorAddresses = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20ToDenoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toJSON(e) : undefined);
    } else {
      obj.erc20ToDenoms = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.unbatchedTransfers = [];
    }
    message.lastObservedEthereumHeight !== undefined && (obj.lastObservedEthereumHeight = (message.lastObservedEthereumHeight || BigInt(0)).toString());
    message.lastOutgoingBatchId !== undefined && (obj.lastOutgoingBatchId = (message.lastOutgoingBatchId || BigInt(0)).toString());
    message.lastOutgoingPoolId !== undefined && (obj.lastOutgoingPoolId = (message.lastOutgoingPoolId || BigInt(0)).toString());
    message.lastObservedValset !== undefined && (obj.lastObservedValset = message.lastObservedValset ? Valset.toJSON(message.lastObservedValset) : undefined);
    if (message.ethereumBlacklist) {
      obj.ethereumBlacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereumBlacklist = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? BigInt(object.lastObservedNonce.toString()) : BigInt(0);
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    message.orchestratorAddresses = object.orchestratorAddresses?.map(e => MsgSetOrchestratorAddresses.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.lastObservedEthereumHeight = object.lastObservedEthereumHeight !== undefined && object.lastObservedEthereumHeight !== null ? BigInt(object.lastObservedEthereumHeight.toString()) : BigInt(0);
    message.lastOutgoingBatchId = object.lastOutgoingBatchId !== undefined && object.lastOutgoingBatchId !== null ? BigInt(object.lastOutgoingBatchId.toString()) : BigInt(0);
    message.lastOutgoingPoolId = object.lastOutgoingPoolId !== undefined && object.lastOutgoingPoolId !== null ? BigInt(object.lastOutgoingPoolId.toString()) : BigInt(0);
    message.lastObservedValset = object.lastObservedValset !== undefined && object.lastObservedValset !== null ? Valset.fromPartial(object.lastObservedValset) : undefined;
    message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      lastObservedNonce: object?.last_observed_nonce,
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromSDK(e)) : [],
      valsetConfirms: Array.isArray(object?.valset_confirms) ? object.valset_confirms.map((e: any) => MsgValsetConfirm.fromSDK(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromSDK(e)) : [],
      batchConfirms: Array.isArray(object?.batch_confirms) ? object.batch_confirms.map((e: any) => MsgConfirmBatch.fromSDK(e)) : [],
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromSDK(e)) : [],
      orchestratorAddresses: Array.isArray(object?.orchestrator_addresses) ? object.orchestrator_addresses.map((e: any) => MsgSetOrchestratorAddresses.fromSDK(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20_to_denoms) ? object.erc20_to_denoms.map((e: any) => ERC20ToDenom.fromSDK(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e: any) => OutgoingTransferTx.fromSDK(e)) : [],
      lastObservedEthereumHeight: object?.last_observed_ethereum_height,
      lastOutgoingBatchId: object?.last_outgoing_batch_id,
      lastOutgoingPoolId: object?.last_outgoing_pool_id,
      lastObservedValset: object.last_observed_valset ? Valset.fromSDK(object.last_observed_valset) : undefined,
      ethereumBlacklist: Array.isArray(object?.ethereum_blacklist) ? object.ethereum_blacklist.map((e: any) => e) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    obj.last_observed_nonce = message.lastObservedNonce;
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toSDK(e) : undefined);
    } else {
      obj.valsets = [];
    }
    if (message.valsetConfirms) {
      obj.valset_confirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toSDK(e) : undefined);
    } else {
      obj.valset_confirms = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toSDK(e) : undefined);
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batch_confirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toSDK(e) : undefined);
    } else {
      obj.batch_confirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toSDK(e) : undefined);
    } else {
      obj.attestations = [];
    }
    if (message.orchestratorAddresses) {
      obj.orchestrator_addresses = message.orchestratorAddresses.map(e => e ? MsgSetOrchestratorAddresses.toSDK(e) : undefined);
    } else {
      obj.orchestrator_addresses = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toSDK(e) : undefined);
    } else {
      obj.erc20_to_denoms = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toSDK(e) : undefined);
    } else {
      obj.unbatched_transfers = [];
    }
    obj.last_observed_ethereum_height = message.lastObservedEthereumHeight;
    obj.last_outgoing_batch_id = message.lastOutgoingBatchId;
    obj.last_outgoing_pool_id = message.lastOutgoingPoolId;
    message.lastObservedValset !== undefined && (obj.last_observed_valset = message.lastObservedValset ? Valset.toSDK(message.lastObservedValset) : undefined);
    if (message.ethereumBlacklist) {
      obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereum_blacklist = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_observed_nonce !== undefined && object.last_observed_nonce !== null) {
      message.lastObservedNonce = BigInt(object.last_observed_nonce);
    }
    message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
    message.valsetConfirms = object.valset_confirms?.map(e => MsgValsetConfirm.fromAmino(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromAmino(e)) || [];
    message.batchConfirms = object.batch_confirms?.map(e => MsgConfirmBatch.fromAmino(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromAmino(e)) || [];
    message.orchestratorAddresses = object.orchestrator_addresses?.map(e => MsgSetOrchestratorAddresses.fromAmino(e)) || [];
    message.erc20ToDenoms = object.erc20_to_denoms?.map(e => ERC20ToDenom.fromAmino(e)) || [];
    message.unbatchedTransfers = object.unbatched_transfers?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
    if (object.last_observed_ethereum_height !== undefined && object.last_observed_ethereum_height !== null) {
      message.lastObservedEthereumHeight = BigInt(object.last_observed_ethereum_height);
    }
    if (object.last_outgoing_batch_id !== undefined && object.last_outgoing_batch_id !== null) {
      message.lastOutgoingBatchId = BigInt(object.last_outgoing_batch_id);
    }
    if (object.last_outgoing_pool_id !== undefined && object.last_outgoing_pool_id !== null) {
      message.lastOutgoingPoolId = BigInt(object.last_outgoing_pool_id);
    }
    if (object.last_observed_valset !== undefined && object.last_observed_valset !== null) {
      message.lastObservedValset = Valset.fromAmino(object.last_observed_valset);
    }
    message.ethereumBlacklist = object.ethereum_blacklist?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.last_observed_nonce = message.lastObservedNonce !== BigInt(0) ? message.lastObservedNonce.toString() : undefined;
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = message.valsets;
    }
    if (message.valsetConfirms) {
      obj.valset_confirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.valset_confirms = message.valsetConfirms;
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    if (message.batchConfirms) {
      obj.batch_confirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.batch_confirms = message.batchConfirms;
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
    } else {
      obj.attestations = message.attestations;
    }
    if (message.orchestratorAddresses) {
      obj.orchestrator_addresses = message.orchestratorAddresses.map(e => e ? MsgSetOrchestratorAddresses.toAmino(e) : undefined);
    } else {
      obj.orchestrator_addresses = message.orchestratorAddresses;
    }
    if (message.erc20ToDenoms) {
      obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toAmino(e) : undefined);
    } else {
      obj.erc20_to_denoms = message.erc20ToDenoms;
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = message.unbatchedTransfers;
    }
    obj.last_observed_ethereum_height = message.lastObservedEthereumHeight !== BigInt(0) ? message.lastObservedEthereumHeight.toString() : undefined;
    obj.last_outgoing_batch_id = message.lastOutgoingBatchId !== BigInt(0) ? message.lastOutgoingBatchId.toString() : undefined;
    obj.last_outgoing_pool_id = message.lastOutgoingPoolId !== BigInt(0) ? message.lastOutgoingPoolId.toString() : undefined;
    obj.last_observed_valset = message.lastObservedValset ? Valset.toAmino(message.lastObservedValset) : undefined;
    if (message.ethereumBlacklist) {
      obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereum_blacklist = message.ethereumBlacklist;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};