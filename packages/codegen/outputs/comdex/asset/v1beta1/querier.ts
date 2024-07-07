import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetAmino, AssetSDKType } from "./asset";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { Decimal } from "@cosmjs/math";
export interface QueryAssetsRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryAssetsRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest";
  value: Uint8Array;
}
export interface QueryAssetsRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAssetsRequestAminoMsg {
  type: "/comdex.asset.v1beta1.QueryAssetsRequest";
  value: QueryAssetsRequestAmino;
}
export interface QueryAssetsRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAssetsResponse {
  assets: Asset[];
  pagination?: PageResponse | undefined;
}
export interface QueryAssetsResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse";
  value: Uint8Array;
}
export interface QueryAssetsResponseAmino {
  assets?: AssetAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAssetsResponseAminoMsg {
  type: "/comdex.asset.v1beta1.QueryAssetsResponse";
  value: QueryAssetsResponseAmino;
}
export interface QueryAssetsResponseSDKType {
  assets: AssetSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryAssetRequest {
  id: bigint;
}
export interface QueryAssetRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest";
  value: Uint8Array;
}
export interface QueryAssetRequestAmino {
  id?: string;
}
export interface QueryAssetRequestAminoMsg {
  type: "/comdex.asset.v1beta1.QueryAssetRequest";
  value: QueryAssetRequestAmino;
}
export interface QueryAssetRequestSDKType {
  id: bigint;
}
export interface QueryAssetResponse {
  asset: Asset | undefined;
}
export interface QueryAssetResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse";
  value: Uint8Array;
}
export interface QueryAssetResponseAmino {
  asset?: AssetAmino | undefined;
}
export interface QueryAssetResponseAminoMsg {
  type: "/comdex.asset.v1beta1.QueryAssetResponse";
  value: QueryAssetResponseAmino;
}
export interface QueryAssetResponseSDKType {
  asset: AssetSDKType | undefined;
}
export interface PairInfo {
  id: bigint;
  assetIn: bigint;
  denomIn: string;
  assetOut: bigint;
  denomOut: string;
  liquidationRatio: string;
}
export interface PairInfoProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.PairInfo";
  value: Uint8Array;
}
export interface PairInfoAmino {
  id?: string;
  asset_in?: string;
  denom_in?: string;
  asset_out?: string;
  denom_out?: string;
  liquidation_ratio?: string;
}
export interface PairInfoAminoMsg {
  type: "/comdex.asset.v1beta1.PairInfo";
  value: PairInfoAmino;
}
export interface PairInfoSDKType {
  id: bigint;
  asset_in: bigint;
  denom_in: string;
  asset_out: bigint;
  denom_out: string;
  liquidation_ratio: string;
}
export interface QueryPairsRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryPairsRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest";
  value: Uint8Array;
}
export interface QueryPairsRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPairsRequestAminoMsg {
  type: "/comdex.asset.v1beta1.QueryPairsRequest";
  value: QueryPairsRequestAmino;
}
export interface QueryPairsRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPairsResponse {
  pairsInfo: PairInfo[];
  pagination?: PageResponse | undefined;
}
export interface QueryPairsResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse";
  value: Uint8Array;
}
export interface QueryPairsResponseAmino {
  pairsInfo?: PairInfoAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryPairsResponseAminoMsg {
  type: "/comdex.asset.v1beta1.QueryPairsResponse";
  value: QueryPairsResponseAmino;
}
export interface QueryPairsResponseSDKType {
  pairsInfo: PairInfoSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryPairRequest {
  id: bigint;
}
export interface QueryPairRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryPairRequest";
  value: Uint8Array;
}
export interface QueryPairRequestAmino {
  id?: string;
}
export interface QueryPairRequestAminoMsg {
  type: "/comdex.asset.v1beta1.QueryPairRequest";
  value: QueryPairRequestAmino;
}
export interface QueryPairRequestSDKType {
  id: bigint;
}
export interface QueryPairResponse {
  pairInfo: PairInfo | undefined;
}
export interface QueryPairResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryPairResponse";
  value: Uint8Array;
}
export interface QueryPairResponseAmino {
  pairInfo?: PairInfoAmino | undefined;
}
export interface QueryPairResponseAminoMsg {
  type: "/comdex.asset.v1beta1.QueryPairResponse";
  value: QueryPairResponseAmino;
}
export interface QueryPairResponseSDKType {
  pairInfo: PairInfoSDKType | undefined;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/comdex.asset.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/comdex.asset.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
function createBaseQueryAssetsRequest(): QueryAssetsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAssetsRequest = {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest",
  encode(message: QueryAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsRequest();
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
  fromJSON(object: any): QueryAssetsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAssetsRequest): JsonSafe<QueryAssetsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAssetsRequest>): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAssetsRequestSDKType): QueryAssetsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAssetsRequest): QueryAssetsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAssetsRequestAmino): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAssetsRequest): QueryAssetsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetsRequestAminoMsg): QueryAssetsRequest {
    return QueryAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsRequestProtoMsg): QueryAssetsRequest {
    return QueryAssetsRequest.decode(message.value);
  },
  toProto(message: QueryAssetsRequest): Uint8Array {
    return QueryAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsRequest): QueryAssetsRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest",
      value: QueryAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetsResponse(): QueryAssetsResponse {
  return {
    assets: [],
    pagination: undefined
  };
}
export const QueryAssetsResponse = {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse",
  encode(message: QueryAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAssetsResponse): JsonSafe<QueryAssetsResponse> {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAssetsResponse>): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAssetsResponseSDKType): QueryAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAssetsResponse): QueryAssetsResponseSDKType {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toSDK(e) : undefined);
    } else {
      obj.assets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAssetsResponseAmino): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAssetsResponse): QueryAssetsResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetsResponseAminoMsg): QueryAssetsResponse {
    return QueryAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsResponseProtoMsg): QueryAssetsResponse {
    return QueryAssetsResponse.decode(message.value);
  },
  toProto(message: QueryAssetsResponse): Uint8Array {
    return QueryAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsResponse): QueryAssetsResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse",
      value: QueryAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetRequest(): QueryAssetRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryAssetRequest = {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest",
  encode(message: QueryAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
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
  fromJSON(object: any): QueryAssetRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAssetRequest): JsonSafe<QueryAssetRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryAssetRequestSDKType): QueryAssetRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryAssetRequest): QueryAssetRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryAssetRequestAmino): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryAssetRequest): QueryAssetRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetRequestAminoMsg): QueryAssetRequest {
    return QueryAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetRequestProtoMsg): QueryAssetRequest {
    return QueryAssetRequest.decode(message.value);
  },
  toProto(message: QueryAssetRequest): Uint8Array {
    return QueryAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetRequest): QueryAssetRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest",
      value: QueryAssetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: Asset.fromPartial({})
  };
}
export const QueryAssetResponse = {
  typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse",
  encode(message: QueryAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetResponse {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: QueryAssetResponse): JsonSafe<QueryAssetResponse> {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: QueryAssetResponseSDKType): QueryAssetResponse {
    return {
      asset: object.asset ? Asset.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: QueryAssetResponse): QueryAssetResponseSDKType {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: QueryAssetResponseAmino): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QueryAssetResponse): QueryAssetResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetResponseAminoMsg): QueryAssetResponse {
    return QueryAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetResponseProtoMsg): QueryAssetResponse {
    return QueryAssetResponse.decode(message.value);
  },
  toProto(message: QueryAssetResponse): Uint8Array {
    return QueryAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetResponse): QueryAssetResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse",
      value: QueryAssetResponse.encode(message).finish()
    };
  }
};
function createBasePairInfo(): PairInfo {
  return {
    id: BigInt(0),
    assetIn: BigInt(0),
    denomIn: "",
    assetOut: BigInt(0),
    denomOut: "",
    liquidationRatio: ""
  };
}
export const PairInfo = {
  typeUrl: "/comdex.asset.v1beta1.PairInfo",
  encode(message: PairInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.assetIn !== BigInt(0)) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (message.denomIn !== "") {
      writer.uint32(26).string(message.denomIn);
    }
    if (message.assetOut !== BigInt(0)) {
      writer.uint32(32).uint64(message.assetOut);
    }
    if (message.denomOut !== "") {
      writer.uint32(42).string(message.denomOut);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PairInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.assetIn = reader.uint64();
          break;
        case 3:
          message.denomIn = reader.string();
          break;
        case 4:
          message.assetOut = reader.uint64();
          break;
        case 5:
          message.denomOut = reader.string();
          break;
        case 6:
          message.liquidationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PairInfo {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      assetIn: isSet(object.assetIn) ? BigInt(object.assetIn.toString()) : BigInt(0),
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
      assetOut: isSet(object.assetOut) ? BigInt(object.assetOut.toString()) : BigInt(0),
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
      liquidationRatio: isSet(object.liquidationRatio) ? String(object.liquidationRatio) : ""
    };
  },
  toJSON(message: PairInfo): JsonSafe<PairInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.assetIn !== undefined && (obj.assetIn = (message.assetIn || BigInt(0)).toString());
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    message.assetOut !== undefined && (obj.assetOut = (message.assetOut || BigInt(0)).toString());
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    message.liquidationRatio !== undefined && (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },
  fromPartial(object: DeepPartial<PairInfo>): PairInfo {
    const message = createBasePairInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? BigInt(object.assetIn.toString()) : BigInt(0);
    message.denomIn = object.denomIn ?? "";
    message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? BigInt(object.assetOut.toString()) : BigInt(0);
    message.denomOut = object.denomOut ?? "";
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  },
  fromSDK(object: PairInfoSDKType): PairInfo {
    return {
      id: object?.id,
      assetIn: object?.asset_in,
      denomIn: object?.denom_in,
      assetOut: object?.asset_out,
      denomOut: object?.denom_out,
      liquidationRatio: object?.liquidation_ratio
    };
  },
  toSDK(message: PairInfo): PairInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.asset_in = message.assetIn;
    obj.denom_in = message.denomIn;
    obj.asset_out = message.assetOut;
    obj.denom_out = message.denomOut;
    obj.liquidation_ratio = message.liquidationRatio;
    return obj;
  },
  fromAmino(object: PairInfoAmino): PairInfo {
    const message = createBasePairInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.asset_in !== undefined && object.asset_in !== null) {
      message.assetIn = BigInt(object.asset_in);
    }
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    if (object.asset_out !== undefined && object.asset_out !== null) {
      message.assetOut = BigInt(object.asset_out);
    }
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
      message.liquidationRatio = object.liquidation_ratio;
    }
    return message;
  },
  toAmino(message: PairInfo): PairInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.asset_in = message.assetIn !== BigInt(0) ? message.assetIn.toString() : undefined;
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    obj.asset_out = message.assetOut !== BigInt(0) ? message.assetOut.toString() : undefined;
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
    return obj;
  },
  fromAminoMsg(object: PairInfoAminoMsg): PairInfo {
    return PairInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PairInfoProtoMsg): PairInfo {
    return PairInfo.decode(message.value);
  },
  toProto(message: PairInfo): Uint8Array {
    return PairInfo.encode(message).finish();
  },
  toProtoMsg(message: PairInfo): PairInfoProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.PairInfo",
      value: PairInfo.encode(message).finish()
    };
  }
};
function createBaseQueryPairsRequest(): QueryPairsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPairsRequest = {
  typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest",
  encode(message: QueryPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsRequest();
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
  fromJSON(object: any): QueryPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPairsRequest): JsonSafe<QueryPairsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPairsRequest>): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPairsRequestSDKType): QueryPairsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPairsRequest): QueryPairsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPairsRequestAmino): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPairsRequest): QueryPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPairsRequestAminoMsg): QueryPairsRequest {
    return QueryPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPairsRequestProtoMsg): QueryPairsRequest {
    return QueryPairsRequest.decode(message.value);
  },
  toProto(message: QueryPairsRequest): Uint8Array {
    return QueryPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPairsRequest): QueryPairsRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest",
      value: QueryPairsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPairsResponse(): QueryPairsResponse {
  return {
    pairsInfo: [],
    pagination: undefined
  };
}
export const QueryPairsResponse = {
  typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse",
  encode(message: QueryPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairsInfo) {
      PairInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairsInfo.push(PairInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryPairsResponse {
    return {
      pairsInfo: Array.isArray(object?.pairsInfo) ? object.pairsInfo.map((e: any) => PairInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPairsResponse): JsonSafe<QueryPairsResponse> {
    const obj: any = {};
    if (message.pairsInfo) {
      obj.pairsInfo = message.pairsInfo.map(e => e ? PairInfo.toJSON(e) : undefined);
    } else {
      obj.pairsInfo = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPairsResponse>): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.pairsInfo = object.pairsInfo?.map(e => PairInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPairsResponseSDKType): QueryPairsResponse {
    return {
      pairsInfo: Array.isArray(object?.pairsInfo) ? object.pairsInfo.map((e: any) => PairInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPairsResponse): QueryPairsResponseSDKType {
    const obj: any = {};
    if (message.pairsInfo) {
      obj.pairsInfo = message.pairsInfo.map(e => e ? PairInfo.toSDK(e) : undefined);
    } else {
      obj.pairsInfo = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPairsResponseAmino): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.pairsInfo = object.pairsInfo?.map(e => PairInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPairsResponse): QueryPairsResponseAmino {
    const obj: any = {};
    if (message.pairsInfo) {
      obj.pairsInfo = message.pairsInfo.map(e => e ? PairInfo.toAmino(e) : undefined);
    } else {
      obj.pairsInfo = message.pairsInfo;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPairsResponseAminoMsg): QueryPairsResponse {
    return QueryPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPairsResponseProtoMsg): QueryPairsResponse {
    return QueryPairsResponse.decode(message.value);
  },
  toProto(message: QueryPairsResponse): Uint8Array {
    return QueryPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPairsResponse): QueryPairsResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse",
      value: QueryPairsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPairRequest(): QueryPairRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryPairRequest = {
  typeUrl: "/comdex.asset.v1beta1.QueryPairRequest",
  encode(message: QueryPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairRequest();
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
  fromJSON(object: any): QueryPairRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPairRequest): JsonSafe<QueryPairRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPairRequest>): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPairRequestSDKType): QueryPairRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryPairRequest): QueryPairRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryPairRequestAmino): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryPairRequest): QueryPairRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPairRequestAminoMsg): QueryPairRequest {
    return QueryPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPairRequestProtoMsg): QueryPairRequest {
    return QueryPairRequest.decode(message.value);
  },
  toProto(message: QueryPairRequest): Uint8Array {
    return QueryPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPairRequest): QueryPairRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryPairRequest",
      value: QueryPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPairResponse(): QueryPairResponse {
  return {
    pairInfo: PairInfo.fromPartial({})
  };
}
export const QueryPairResponse = {
  typeUrl: "/comdex.asset.v1beta1.QueryPairResponse",
  encode(message: QueryPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairInfo !== undefined) {
      PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairInfo = PairInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPairResponse {
    return {
      pairInfo: isSet(object.pairInfo) ? PairInfo.fromJSON(object.pairInfo) : undefined
    };
  },
  toJSON(message: QueryPairResponse): JsonSafe<QueryPairResponse> {
    const obj: any = {};
    message.pairInfo !== undefined && (obj.pairInfo = message.pairInfo ? PairInfo.toJSON(message.pairInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPairResponse>): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.pairInfo = object.pairInfo !== undefined && object.pairInfo !== null ? PairInfo.fromPartial(object.pairInfo) : undefined;
    return message;
  },
  fromSDK(object: QueryPairResponseSDKType): QueryPairResponse {
    return {
      pairInfo: object.pairInfo ? PairInfo.fromSDK(object.pairInfo) : undefined
    };
  },
  toSDK(message: QueryPairResponse): QueryPairResponseSDKType {
    const obj: any = {};
    message.pairInfo !== undefined && (obj.pairInfo = message.pairInfo ? PairInfo.toSDK(message.pairInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryPairResponseAmino): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    if (object.pairInfo !== undefined && object.pairInfo !== null) {
      message.pairInfo = PairInfo.fromAmino(object.pairInfo);
    }
    return message;
  },
  toAmino(message: QueryPairResponse): QueryPairResponseAmino {
    const obj: any = {};
    obj.pairInfo = message.pairInfo ? PairInfo.toAmino(message.pairInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPairResponseAminoMsg): QueryPairResponse {
    return QueryPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPairResponseProtoMsg): QueryPairResponse {
    return QueryPairResponse.decode(message.value);
  },
  toProto(message: QueryPairResponse): Uint8Array {
    return QueryPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPairResponse): QueryPairResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.QueryPairResponse",
      value: QueryPairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest",
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
      typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse",
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
      typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};