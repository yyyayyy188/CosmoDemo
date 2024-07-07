import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface VaultInfo {
  id: bigint;
  pairId: bigint;
  owner: string;
  collateral: Coin | undefined;
  debt: Coin | undefined;
  collateralizationRatio: string;
}
export interface VaultInfoProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.VaultInfo";
  value: Uint8Array;
}
export interface VaultInfoAmino {
  id?: string;
  pair_id?: string;
  owner?: string;
  collateral?: CoinAmino | undefined;
  debt?: CoinAmino | undefined;
  collateralization_ratio?: string;
}
export interface VaultInfoAminoMsg {
  type: "/comdex.vault.v1beta1.VaultInfo";
  value: VaultInfoAmino;
}
export interface VaultInfoSDKType {
  id: bigint;
  pair_id: bigint;
  owner: string;
  collateral: CoinSDKType | undefined;
  debt: CoinSDKType | undefined;
  collateralization_ratio: string;
}
export interface QueryVaultRequest {
  id: bigint;
}
export interface QueryVaultRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest";
  value: Uint8Array;
}
export interface QueryVaultRequestAmino {
  id?: string;
}
export interface QueryVaultRequestAminoMsg {
  type: "/comdex.vault.v1beta1.QueryVaultRequest";
  value: QueryVaultRequestAmino;
}
export interface QueryVaultRequestSDKType {
  id: bigint;
}
export interface QueryVaultResponse {
  vaultInfo: VaultInfo | undefined;
}
export interface QueryVaultResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse";
  value: Uint8Array;
}
export interface QueryVaultResponseAmino {
  vaultInfo?: VaultInfoAmino | undefined;
}
export interface QueryVaultResponseAminoMsg {
  type: "/comdex.vault.v1beta1.QueryVaultResponse";
  value: QueryVaultResponseAmino;
}
export interface QueryVaultResponseSDKType {
  vaultInfo: VaultInfoSDKType | undefined;
}
export interface QueryVaultsRequest {
  owner: string;
  pagination?: PageRequest | undefined;
}
export interface QueryVaultsRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest";
  value: Uint8Array;
}
export interface QueryVaultsRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryVaultsRequestAminoMsg {
  type: "/comdex.vault.v1beta1.QueryVaultsRequest";
  value: QueryVaultsRequestAmino;
}
export interface QueryVaultsRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryVaultsResponse {
  vaultsInfo: VaultInfo[];
  pagination?: PageResponse | undefined;
}
export interface QueryVaultsResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse";
  value: Uint8Array;
}
export interface QueryVaultsResponseAmino {
  vaultsInfo?: VaultInfoAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryVaultsResponseAminoMsg {
  type: "/comdex.vault.v1beta1.QueryVaultsResponse";
  value: QueryVaultsResponseAmino;
}
export interface QueryVaultsResponseSDKType {
  vaultsInfo: VaultInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryAllVaultsRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryAllVaultsRequestProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest";
  value: Uint8Array;
}
export interface QueryAllVaultsRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAllVaultsRequestAminoMsg {
  type: "/comdex.vault.v1beta1.QueryAllVaultsRequest";
  value: QueryAllVaultsRequestAmino;
}
export interface QueryAllVaultsRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAllVaultsResponse {
  vaultsInfo: VaultInfo[];
  pagination?: PageResponse | undefined;
}
export interface QueryAllVaultsResponseProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse";
  value: Uint8Array;
}
export interface QueryAllVaultsResponseAmino {
  vaultsInfo?: VaultInfoAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAllVaultsResponseAminoMsg {
  type: "/comdex.vault.v1beta1.QueryAllVaultsResponse";
  value: QueryAllVaultsResponseAmino;
}
export interface QueryAllVaultsResponseSDKType {
  vaultsInfo: VaultInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
function createBaseVaultInfo(): VaultInfo {
  return {
    id: BigInt(0),
    pairId: BigInt(0),
    owner: "",
    collateral: Coin.fromPartial({}),
    debt: Coin.fromPartial({}),
    collateralizationRatio: ""
  };
}
export const VaultInfo = {
  typeUrl: "/comdex.vault.v1beta1.VaultInfo",
  encode(message: VaultInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pairId !== BigInt(0)) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
    }
    if (message.collateralizationRatio !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.collateralizationRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VaultInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.pairId = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.collateralizationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VaultInfo {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      pairId: isSet(object.pairId) ? BigInt(object.pairId.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      debt: isSet(object.debt) ? Coin.fromJSON(object.debt) : undefined,
      collateralizationRatio: isSet(object.collateralizationRatio) ? String(object.collateralizationRatio) : ""
    };
  },
  toJSON(message: VaultInfo): JsonSafe<VaultInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.pairId !== undefined && (obj.pairId = (message.pairId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateral !== undefined && (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.debt !== undefined && (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    message.collateralizationRatio !== undefined && (obj.collateralizationRatio = message.collateralizationRatio);
    return obj;
  },
  fromPartial(object: DeepPartial<VaultInfo>): VaultInfo {
    const message = createBaseVaultInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.pairId = object.pairId !== undefined && object.pairId !== null ? BigInt(object.pairId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.debt = object.debt !== undefined && object.debt !== null ? Coin.fromPartial(object.debt) : undefined;
    message.collateralizationRatio = object.collateralizationRatio ?? "";
    return message;
  },
  fromSDK(object: VaultInfoSDKType): VaultInfo {
    return {
      id: object?.id,
      pairId: object?.pair_id,
      owner: object?.owner,
      collateral: object.collateral ? Coin.fromSDK(object.collateral) : undefined,
      debt: object.debt ? Coin.fromSDK(object.debt) : undefined,
      collateralizationRatio: object?.collateralization_ratio
    };
  },
  toSDK(message: VaultInfo): VaultInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.pair_id = message.pairId;
    obj.owner = message.owner;
    message.collateral !== undefined && (obj.collateral = message.collateral ? Coin.toSDK(message.collateral) : undefined);
    message.debt !== undefined && (obj.debt = message.debt ? Coin.toSDK(message.debt) : undefined);
    obj.collateralization_ratio = message.collateralizationRatio;
    return obj;
  },
  fromAmino(object: VaultInfoAmino): VaultInfo {
    const message = createBaseVaultInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = BigInt(object.pair_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromAmino(object.debt);
    }
    if (object.collateralization_ratio !== undefined && object.collateralization_ratio !== null) {
      message.collateralizationRatio = object.collateralization_ratio;
    }
    return message;
  },
  toAmino(message: VaultInfo): VaultInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.pair_id = message.pairId !== BigInt(0) ? message.pairId.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.debt = message.debt ? Coin.toAmino(message.debt) : undefined;
    obj.collateralization_ratio = message.collateralizationRatio === "" ? undefined : message.collateralizationRatio;
    return obj;
  },
  fromAminoMsg(object: VaultInfoAminoMsg): VaultInfo {
    return VaultInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultInfoProtoMsg): VaultInfo {
    return VaultInfo.decode(message.value);
  },
  toProto(message: VaultInfo): Uint8Array {
    return VaultInfo.encode(message).finish();
  },
  toProtoMsg(message: VaultInfo): VaultInfoProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.VaultInfo",
      value: VaultInfo.encode(message).finish()
    };
  }
};
function createBaseQueryVaultRequest(): QueryVaultRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryVaultRequest = {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest",
  encode(message: QueryVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVaultRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryVaultRequest): JsonSafe<QueryVaultRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVaultRequest>): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryVaultRequestSDKType): QueryVaultRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryVaultRequest): QueryVaultRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryVaultRequestAmino): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryVaultRequest): QueryVaultRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultRequestAminoMsg): QueryVaultRequest {
    return QueryVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultRequestProtoMsg): QueryVaultRequest {
    return QueryVaultRequest.decode(message.value);
  },
  toProto(message: QueryVaultRequest): Uint8Array {
    return QueryVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultRequest): QueryVaultRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest",
      value: QueryVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultResponse(): QueryVaultResponse {
  return {
    vaultInfo: VaultInfo.fromPartial({})
  };
}
export const QueryVaultResponse = {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse",
  encode(message: QueryVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultInfo !== undefined) {
      VaultInfo.encode(message.vaultInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultInfo = VaultInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVaultResponse {
    return {
      vaultInfo: isSet(object.vaultInfo) ? VaultInfo.fromJSON(object.vaultInfo) : undefined
    };
  },
  toJSON(message: QueryVaultResponse): JsonSafe<QueryVaultResponse> {
    const obj: any = {};
    message.vaultInfo !== undefined && (obj.vaultInfo = message.vaultInfo ? VaultInfo.toJSON(message.vaultInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVaultResponse>): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    message.vaultInfo = object.vaultInfo !== undefined && object.vaultInfo !== null ? VaultInfo.fromPartial(object.vaultInfo) : undefined;
    return message;
  },
  fromSDK(object: QueryVaultResponseSDKType): QueryVaultResponse {
    return {
      vaultInfo: object.vaultInfo ? VaultInfo.fromSDK(object.vaultInfo) : undefined
    };
  },
  toSDK(message: QueryVaultResponse): QueryVaultResponseSDKType {
    const obj: any = {};
    message.vaultInfo !== undefined && (obj.vaultInfo = message.vaultInfo ? VaultInfo.toSDK(message.vaultInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryVaultResponseAmino): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
      message.vaultInfo = VaultInfo.fromAmino(object.vaultInfo);
    }
    return message;
  },
  toAmino(message: QueryVaultResponse): QueryVaultResponseAmino {
    const obj: any = {};
    obj.vaultInfo = message.vaultInfo ? VaultInfo.toAmino(message.vaultInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultResponseAminoMsg): QueryVaultResponse {
    return QueryVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultResponseProtoMsg): QueryVaultResponse {
    return QueryVaultResponse.decode(message.value);
  },
  toProto(message: QueryVaultResponse): Uint8Array {
    return QueryVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultResponse): QueryVaultResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse",
      value: QueryVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsRequest(): QueryVaultsRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryVaultsRequest = {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest",
  encode(message: QueryVaultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
  fromJSON(object: any): QueryVaultsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVaultsRequest): JsonSafe<QueryVaultsRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVaultsRequestSDKType): QueryVaultsRequest {
    return {
      owner: object?.owner,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVaultsRequest): QueryVaultsRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVaultsRequestAmino): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVaultsRequest): QueryVaultsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultsRequestAminoMsg): QueryVaultsRequest {
    return QueryVaultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsRequestProtoMsg): QueryVaultsRequest {
    return QueryVaultsRequest.decode(message.value);
  },
  toProto(message: QueryVaultsRequest): Uint8Array {
    return QueryVaultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsRequest): QueryVaultsRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest",
      value: QueryVaultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsResponse(): QueryVaultsResponse {
  return {
    vaultsInfo: [],
    pagination: undefined
  };
}
export const QueryVaultsResponse = {
  typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse",
  encode(message: QueryVaultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaultsInfo) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultsInfo.push(VaultInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryVaultsResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo) ? object.vaultsInfo.map((e: any) => VaultInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVaultsResponse): JsonSafe<QueryVaultsResponse> {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toJSON(e) : undefined);
    } else {
      obj.vaultsInfo = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVaultsResponseSDKType): QueryVaultsResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo) ? object.vaultsInfo.map((e: any) => VaultInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVaultsResponse): QueryVaultsResponseSDKType {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toSDK(e) : undefined);
    } else {
      obj.vaultsInfo = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVaultsResponseAmino): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVaultsResponse): QueryVaultsResponseAmino {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toAmino(e) : undefined);
    } else {
      obj.vaultsInfo = message.vaultsInfo;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultsResponseAminoMsg): QueryVaultsResponse {
    return QueryVaultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsResponseProtoMsg): QueryVaultsResponse {
    return QueryVaultsResponse.decode(message.value);
  },
  toProto(message: QueryVaultsResponse): Uint8Array {
    return QueryVaultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsResponse): QueryVaultsResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse",
      value: QueryVaultsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVaultsRequest(): QueryAllVaultsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllVaultsRequest = {
  typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest",
  encode(message: QueryAllVaultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsRequest();
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
  fromJSON(object: any): QueryAllVaultsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllVaultsRequest): JsonSafe<QueryAllVaultsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllVaultsRequest>): QueryAllVaultsRequest {
    const message = createBaseQueryAllVaultsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllVaultsRequestSDKType): QueryAllVaultsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllVaultsRequest): QueryAllVaultsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllVaultsRequestAmino): QueryAllVaultsRequest {
    const message = createBaseQueryAllVaultsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVaultsRequest): QueryAllVaultsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVaultsRequestAminoMsg): QueryAllVaultsRequest {
    return QueryAllVaultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVaultsRequestProtoMsg): QueryAllVaultsRequest {
    return QueryAllVaultsRequest.decode(message.value);
  },
  toProto(message: QueryAllVaultsRequest): Uint8Array {
    return QueryAllVaultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVaultsRequest): QueryAllVaultsRequestProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest",
      value: QueryAllVaultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVaultsResponse(): QueryAllVaultsResponse {
  return {
    vaultsInfo: [],
    pagination: undefined
  };
}
export const QueryAllVaultsResponse = {
  typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse",
  encode(message: QueryAllVaultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaultsInfo) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultsInfo.push(VaultInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllVaultsResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo) ? object.vaultsInfo.map((e: any) => VaultInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllVaultsResponse): JsonSafe<QueryAllVaultsResponse> {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toJSON(e) : undefined);
    } else {
      obj.vaultsInfo = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllVaultsResponse>): QueryAllVaultsResponse {
    const message = createBaseQueryAllVaultsResponse();
    message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllVaultsResponseSDKType): QueryAllVaultsResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo) ? object.vaultsInfo.map((e: any) => VaultInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllVaultsResponse): QueryAllVaultsResponseSDKType {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toSDK(e) : undefined);
    } else {
      obj.vaultsInfo = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllVaultsResponseAmino): QueryAllVaultsResponse {
    const message = createBaseQueryAllVaultsResponse();
    message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVaultsResponse): QueryAllVaultsResponseAmino {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toAmino(e) : undefined);
    } else {
      obj.vaultsInfo = message.vaultsInfo;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVaultsResponseAminoMsg): QueryAllVaultsResponse {
    return QueryAllVaultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVaultsResponseProtoMsg): QueryAllVaultsResponse {
    return QueryAllVaultsResponse.decode(message.value);
  },
  toProto(message: QueryAllVaultsResponse): Uint8Array {
    return QueryAllVaultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVaultsResponse): QueryAllVaultsResponseProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse",
      value: QueryAllVaultsResponse.encode(message).finish()
    };
  }
};