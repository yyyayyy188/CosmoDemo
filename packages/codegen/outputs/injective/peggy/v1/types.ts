import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  power: bigint;
  ethereumAddress: string;
}
export interface BridgeValidatorProtoMsg {
  typeUrl: "/injective.peggy.v1.BridgeValidator";
  value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
  power?: string;
  ethereum_address?: string;
}
export interface BridgeValidatorAminoMsg {
  type: "/injective.peggy.v1.BridgeValidator";
  value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
  power: bigint;
  ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  nonce: bigint;
  members: BridgeValidator[];
  height: bigint;
  rewardAmount: string;
  /** the reward token in it's Ethereum hex address representation */
  rewardToken: string;
}
export interface ValsetProtoMsg {
  typeUrl: "/injective.peggy.v1.Valset";
  value: Uint8Array;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetAmino {
  nonce?: string;
  members?: BridgeValidatorAmino[];
  height?: string;
  reward_amount?: string;
  /** the reward token in it's Ethereum hex address representation */
  reward_token?: string;
}
export interface ValsetAminoMsg {
  type: "/injective.peggy.v1.Valset";
  value: ValsetAmino;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
  nonce: bigint;
  members: BridgeValidatorSDKType[];
  height: bigint;
  reward_amount: string;
  reward_token: string;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
  cosmosBlockHeight: bigint;
  ethereumBlockHeight: bigint;
}
export interface LastObservedEthereumBlockHeightProtoMsg {
  typeUrl: "/injective.peggy.v1.LastObservedEthereumBlockHeight";
  value: Uint8Array;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightAmino {
  cosmos_block_height?: string;
  ethereum_block_height?: string;
}
export interface LastObservedEthereumBlockHeightAminoMsg {
  type: "/injective.peggy.v1.LastObservedEthereumBlockHeight";
  value: LastObservedEthereumBlockHeightAmino;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
  cosmos_block_height: bigint;
  ethereum_block_height: bigint;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEvent {
  ethereumEventNonce: bigint;
  ethereumEventHeight: bigint;
}
export interface LastClaimEventProtoMsg {
  typeUrl: "/injective.peggy.v1.LastClaimEvent";
  value: Uint8Array;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEventAmino {
  ethereum_event_nonce?: string;
  ethereum_event_height?: string;
}
export interface LastClaimEventAminoMsg {
  type: "/injective.peggy.v1.LastClaimEvent";
  value: LastClaimEventAmino;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEventSDKType {
  ethereum_event_nonce: bigint;
  ethereum_event_height: bigint;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
  erc20: string;
  denom: string;
}
export interface ERC20ToDenomProtoMsg {
  typeUrl: "/injective.peggy.v1.ERC20ToDenom";
  value: Uint8Array;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomAmino {
  erc20?: string;
  denom?: string;
}
export interface ERC20ToDenomAminoMsg {
  type: "/injective.peggy.v1.ERC20ToDenom";
  value: ERC20ToDenomAmino;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomSDKType {
  erc20: string;
  denom: string;
}
function createBaseBridgeValidator(): BridgeValidator {
  return {
    power: BigInt(0),
    ethereumAddress: ""
  };
}
export const BridgeValidator = {
  typeUrl: "/injective.peggy.v1.BridgeValidator",
  encode(message: BridgeValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.power !== BigInt(0)) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BridgeValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.uint64();
          break;
        case 2:
          message.ethereumAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BridgeValidator {
    return {
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : ""
    };
  },
  toJSON(message: BridgeValidator): JsonSafe<BridgeValidator> {
    const obj: any = {};
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    message.ethereumAddress !== undefined && (obj.ethereumAddress = message.ethereumAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<BridgeValidator>): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
  fromSDK(object: BridgeValidatorSDKType): BridgeValidator {
    return {
      power: object?.power,
      ethereumAddress: object?.ethereum_address
    };
  },
  toSDK(message: BridgeValidator): BridgeValidatorSDKType {
    const obj: any = {};
    obj.power = message.power;
    obj.ethereum_address = message.ethereumAddress;
    return obj;
  },
  fromAmino(object: BridgeValidatorAmino): BridgeValidator {
    const message = createBaseBridgeValidator();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.ethereum_address !== undefined && object.ethereum_address !== null) {
      message.ethereumAddress = object.ethereum_address;
    }
    return message;
  },
  toAmino(message: BridgeValidator): BridgeValidatorAmino {
    const obj: any = {};
    obj.power = message.power !== BigInt(0) ? message.power.toString() : undefined;
    obj.ethereum_address = message.ethereumAddress === "" ? undefined : message.ethereumAddress;
    return obj;
  },
  fromAminoMsg(object: BridgeValidatorAminoMsg): BridgeValidator {
    return BridgeValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeValidatorProtoMsg): BridgeValidator {
    return BridgeValidator.decode(message.value);
  },
  toProto(message: BridgeValidator): Uint8Array {
    return BridgeValidator.encode(message).finish();
  },
  toProtoMsg(message: BridgeValidator): BridgeValidatorProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.BridgeValidator",
      value: BridgeValidator.encode(message).finish()
    };
  }
};
function createBaseValset(): Valset {
  return {
    nonce: BigInt(0),
    members: [],
    height: BigInt(0),
    rewardAmount: "",
    rewardToken: ""
  };
}
export const Valset = {
  typeUrl: "/injective.peggy.v1.Valset",
  encode(message: Valset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Valset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = reader.uint64();
          break;
        case 4:
          message.rewardAmount = reader.string();
          break;
        case 5:
          message.rewardToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Valset {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : ""
    };
  },
  toJSON(message: Valset): JsonSafe<Valset> {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
    return obj;
  },
  fromPartial(object: DeepPartial<Valset>): Valset {
    const message = createBaseValset();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
  fromSDK(object: ValsetSDKType): Valset {
    return {
      nonce: object?.nonce,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromSDK(e)) : [],
      height: object?.height,
      rewardAmount: object?.reward_amount,
      rewardToken: object?.reward_token
    };
  },
  toSDK(message: Valset): ValsetSDKType {
    const obj: any = {};
    obj.nonce = message.nonce;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.height = message.height;
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    return obj;
  },
  fromAmino(object: ValsetAmino): Valset {
    const message = createBaseValset();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    message.members = object.members?.map(e => BridgeValidator.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = object.reward_token;
    }
    return message;
  },
  toAmino(message: Valset): ValsetAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
    return obj;
  },
  fromAminoMsg(object: ValsetAminoMsg): Valset {
    return Valset.fromAmino(object.value);
  },
  fromProtoMsg(message: ValsetProtoMsg): Valset {
    return Valset.decode(message.value);
  },
  toProto(message: Valset): Uint8Array {
    return Valset.encode(message).finish();
  },
  toProtoMsg(message: Valset): ValsetProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.Valset",
      value: Valset.encode(message).finish()
    };
  }
};
function createBaseLastObservedEthereumBlockHeight(): LastObservedEthereumBlockHeight {
  return {
    cosmosBlockHeight: BigInt(0),
    ethereumBlockHeight: BigInt(0)
  };
}
export const LastObservedEthereumBlockHeight = {
  typeUrl: "/injective.peggy.v1.LastObservedEthereumBlockHeight",
  encode(message: LastObservedEthereumBlockHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.cosmosBlockHeight);
    }
    if (message.ethereumBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethereumBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastObservedEthereumBlockHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastObservedEthereumBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosBlockHeight = reader.uint64();
          break;
        case 2:
          message.ethereumBlockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastObservedEthereumBlockHeight {
    return {
      cosmosBlockHeight: isSet(object.cosmosBlockHeight) ? BigInt(object.cosmosBlockHeight.toString()) : BigInt(0),
      ethereumBlockHeight: isSet(object.ethereumBlockHeight) ? BigInt(object.ethereumBlockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: LastObservedEthereumBlockHeight): JsonSafe<LastObservedEthereumBlockHeight> {
    const obj: any = {};
    message.cosmosBlockHeight !== undefined && (obj.cosmosBlockHeight = (message.cosmosBlockHeight || BigInt(0)).toString());
    message.ethereumBlockHeight !== undefined && (obj.ethereumBlockHeight = (message.ethereumBlockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? BigInt(object.cosmosBlockHeight.toString()) : BigInt(0);
    message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? BigInt(object.ethereumBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: LastObservedEthereumBlockHeightSDKType): LastObservedEthereumBlockHeight {
    return {
      cosmosBlockHeight: object?.cosmos_block_height,
      ethereumBlockHeight: object?.ethereum_block_height
    };
  },
  toSDK(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightSDKType {
    const obj: any = {};
    obj.cosmos_block_height = message.cosmosBlockHeight;
    obj.ethereum_block_height = message.ethereumBlockHeight;
    return obj;
  },
  fromAmino(object: LastObservedEthereumBlockHeightAmino): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    if (object.cosmos_block_height !== undefined && object.cosmos_block_height !== null) {
      message.cosmosBlockHeight = BigInt(object.cosmos_block_height);
    }
    if (object.ethereum_block_height !== undefined && object.ethereum_block_height !== null) {
      message.ethereumBlockHeight = BigInt(object.ethereum_block_height);
    }
    return message;
  },
  toAmino(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightAmino {
    const obj: any = {};
    obj.cosmos_block_height = message.cosmosBlockHeight !== BigInt(0) ? message.cosmosBlockHeight.toString() : undefined;
    obj.ethereum_block_height = message.ethereumBlockHeight !== BigInt(0) ? message.ethereumBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastObservedEthereumBlockHeightAminoMsg): LastObservedEthereumBlockHeight {
    return LastObservedEthereumBlockHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: LastObservedEthereumBlockHeightProtoMsg): LastObservedEthereumBlockHeight {
    return LastObservedEthereumBlockHeight.decode(message.value);
  },
  toProto(message: LastObservedEthereumBlockHeight): Uint8Array {
    return LastObservedEthereumBlockHeight.encode(message).finish();
  },
  toProtoMsg(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.LastObservedEthereumBlockHeight",
      value: LastObservedEthereumBlockHeight.encode(message).finish()
    };
  }
};
function createBaseLastClaimEvent(): LastClaimEvent {
  return {
    ethereumEventNonce: BigInt(0),
    ethereumEventHeight: BigInt(0)
  };
}
export const LastClaimEvent = {
  typeUrl: "/injective.peggy.v1.LastClaimEvent",
  encode(message: LastClaimEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethereumEventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.ethereumEventNonce);
    }
    if (message.ethereumEventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethereumEventHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastClaimEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastClaimEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethereumEventNonce = reader.uint64();
          break;
        case 2:
          message.ethereumEventHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastClaimEvent {
    return {
      ethereumEventNonce: isSet(object.ethereumEventNonce) ? BigInt(object.ethereumEventNonce.toString()) : BigInt(0),
      ethereumEventHeight: isSet(object.ethereumEventHeight) ? BigInt(object.ethereumEventHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: LastClaimEvent): JsonSafe<LastClaimEvent> {
    const obj: any = {};
    message.ethereumEventNonce !== undefined && (obj.ethereumEventNonce = (message.ethereumEventNonce || BigInt(0)).toString());
    message.ethereumEventHeight !== undefined && (obj.ethereumEventHeight = (message.ethereumEventHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<LastClaimEvent>): LastClaimEvent {
    const message = createBaseLastClaimEvent();
    message.ethereumEventNonce = object.ethereumEventNonce !== undefined && object.ethereumEventNonce !== null ? BigInt(object.ethereumEventNonce.toString()) : BigInt(0);
    message.ethereumEventHeight = object.ethereumEventHeight !== undefined && object.ethereumEventHeight !== null ? BigInt(object.ethereumEventHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: LastClaimEventSDKType): LastClaimEvent {
    return {
      ethereumEventNonce: object?.ethereum_event_nonce,
      ethereumEventHeight: object?.ethereum_event_height
    };
  },
  toSDK(message: LastClaimEvent): LastClaimEventSDKType {
    const obj: any = {};
    obj.ethereum_event_nonce = message.ethereumEventNonce;
    obj.ethereum_event_height = message.ethereumEventHeight;
    return obj;
  },
  fromAmino(object: LastClaimEventAmino): LastClaimEvent {
    const message = createBaseLastClaimEvent();
    if (object.ethereum_event_nonce !== undefined && object.ethereum_event_nonce !== null) {
      message.ethereumEventNonce = BigInt(object.ethereum_event_nonce);
    }
    if (object.ethereum_event_height !== undefined && object.ethereum_event_height !== null) {
      message.ethereumEventHeight = BigInt(object.ethereum_event_height);
    }
    return message;
  },
  toAmino(message: LastClaimEvent): LastClaimEventAmino {
    const obj: any = {};
    obj.ethereum_event_nonce = message.ethereumEventNonce !== BigInt(0) ? message.ethereumEventNonce.toString() : undefined;
    obj.ethereum_event_height = message.ethereumEventHeight !== BigInt(0) ? message.ethereumEventHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastClaimEventAminoMsg): LastClaimEvent {
    return LastClaimEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: LastClaimEventProtoMsg): LastClaimEvent {
    return LastClaimEvent.decode(message.value);
  },
  toProto(message: LastClaimEvent): Uint8Array {
    return LastClaimEvent.encode(message).finish();
  },
  toProtoMsg(message: LastClaimEvent): LastClaimEventProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.LastClaimEvent",
      value: LastClaimEvent.encode(message).finish()
    };
  }
};
function createBaseERC20ToDenom(): ERC20ToDenom {
  return {
    erc20: "",
    denom: ""
  };
}
export const ERC20ToDenom = {
  typeUrl: "/injective.peggy.v1.ERC20ToDenom",
  encode(message: ERC20ToDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ERC20ToDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20ToDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ERC20ToDenom {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: ERC20ToDenom): JsonSafe<ERC20ToDenom> {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<ERC20ToDenom>): ERC20ToDenom {
    const message = createBaseERC20ToDenom();
    message.erc20 = object.erc20 ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: ERC20ToDenomSDKType): ERC20ToDenom {
    return {
      erc20: object?.erc20,
      denom: object?.denom
    };
  },
  toSDK(message: ERC20ToDenom): ERC20ToDenomSDKType {
    const obj: any = {};
    obj.erc20 = message.erc20;
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: ERC20ToDenomAmino): ERC20ToDenom {
    const message = createBaseERC20ToDenom();
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = object.erc20;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: ERC20ToDenom): ERC20ToDenomAmino {
    const obj: any = {};
    obj.erc20 = message.erc20 === "" ? undefined : message.erc20;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: ERC20ToDenomAminoMsg): ERC20ToDenom {
    return ERC20ToDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20ToDenomProtoMsg): ERC20ToDenom {
    return ERC20ToDenom.decode(message.value);
  },
  toProto(message: ERC20ToDenom): Uint8Array {
    return ERC20ToDenom.encode(message).finish();
  },
  toProtoMsg(message: ERC20ToDenom): ERC20ToDenomProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.ERC20ToDenom",
      value: ERC20ToDenom.encode(message).finish()
    };
  }
};