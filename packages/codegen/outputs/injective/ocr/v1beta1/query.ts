import { Params, ParamsAmino, ParamsSDKType, FeedConfigInfo, FeedConfigInfoAmino, FeedConfigInfoSDKType, FeedConfig, FeedConfigAmino, FeedConfigSDKType, EpochAndRound, EpochAndRoundAmino, EpochAndRoundSDKType, Transmission, TransmissionAmino, TransmissionSDKType } from "./ocr";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
export interface QueryFeedConfigRequest {
  feedId: string;
}
export interface QueryFeedConfigRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest";
  value: Uint8Array;
}
export interface QueryFeedConfigRequestAmino {
  feed_id?: string;
}
export interface QueryFeedConfigRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigRequest";
  value: QueryFeedConfigRequestAmino;
}
export interface QueryFeedConfigRequestSDKType {
  feed_id: string;
}
export interface QueryFeedConfigResponse {
  feedConfigInfo?: FeedConfigInfo | undefined;
  feedConfig?: FeedConfig | undefined;
}
export interface QueryFeedConfigResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse";
  value: Uint8Array;
}
export interface QueryFeedConfigResponseAmino {
  feed_config_info?: FeedConfigInfoAmino | undefined;
  feed_config?: FeedConfigAmino | undefined;
}
export interface QueryFeedConfigResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigResponse";
  value: QueryFeedConfigResponseAmino;
}
export interface QueryFeedConfigResponseSDKType {
  feed_config_info?: FeedConfigInfoSDKType | undefined;
  feed_config?: FeedConfigSDKType | undefined;
}
export interface QueryFeedConfigInfoRequest {
  feedId: string;
}
export interface QueryFeedConfigInfoRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
  value: Uint8Array;
}
export interface QueryFeedConfigInfoRequestAmino {
  feed_id?: string;
}
export interface QueryFeedConfigInfoRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
  value: QueryFeedConfigInfoRequestAmino;
}
export interface QueryFeedConfigInfoRequestSDKType {
  feed_id: string;
}
export interface QueryFeedConfigInfoResponse {
  feedConfigInfo?: FeedConfigInfo | undefined;
  epochAndRound?: EpochAndRound | undefined;
}
export interface QueryFeedConfigInfoResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
  value: Uint8Array;
}
export interface QueryFeedConfigInfoResponseAmino {
  feed_config_info?: FeedConfigInfoAmino | undefined;
  epoch_and_round?: EpochAndRoundAmino | undefined;
}
export interface QueryFeedConfigInfoResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
  value: QueryFeedConfigInfoResponseAmino;
}
export interface QueryFeedConfigInfoResponseSDKType {
  feed_config_info?: FeedConfigInfoSDKType | undefined;
  epoch_and_round?: EpochAndRoundSDKType | undefined;
}
export interface QueryLatestRoundRequest {
  feedId: string;
}
export interface QueryLatestRoundRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest";
  value: Uint8Array;
}
export interface QueryLatestRoundRequestAmino {
  feed_id?: string;
}
export interface QueryLatestRoundRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestRoundRequest";
  value: QueryLatestRoundRequestAmino;
}
export interface QueryLatestRoundRequestSDKType {
  feed_id: string;
}
export interface QueryLatestRoundResponse {
  latestRoundId: bigint;
  data?: Transmission | undefined;
}
export interface QueryLatestRoundResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse";
  value: Uint8Array;
}
export interface QueryLatestRoundResponseAmino {
  latest_round_id?: string;
  data?: TransmissionAmino | undefined;
}
export interface QueryLatestRoundResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestRoundResponse";
  value: QueryLatestRoundResponseAmino;
}
export interface QueryLatestRoundResponseSDKType {
  latest_round_id: bigint;
  data?: TransmissionSDKType | undefined;
}
export interface QueryLatestTransmissionDetailsRequest {
  feedId: string;
}
export interface QueryLatestTransmissionDetailsRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
  value: Uint8Array;
}
export interface QueryLatestTransmissionDetailsRequestAmino {
  feed_id?: string;
}
export interface QueryLatestTransmissionDetailsRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
  value: QueryLatestTransmissionDetailsRequestAmino;
}
export interface QueryLatestTransmissionDetailsRequestSDKType {
  feed_id: string;
}
export interface QueryLatestTransmissionDetailsResponse {
  configDigest: Uint8Array;
  epochAndRound?: EpochAndRound | undefined;
  data?: Transmission | undefined;
}
export interface QueryLatestTransmissionDetailsResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
  value: Uint8Array;
}
export interface QueryLatestTransmissionDetailsResponseAmino {
  config_digest?: string;
  epoch_and_round?: EpochAndRoundAmino | undefined;
  data?: TransmissionAmino | undefined;
}
export interface QueryLatestTransmissionDetailsResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
  value: QueryLatestTransmissionDetailsResponseAmino;
}
export interface QueryLatestTransmissionDetailsResponseSDKType {
  config_digest: Uint8Array;
  epoch_and_round?: EpochAndRoundSDKType | undefined;
  data?: TransmissionSDKType | undefined;
}
export interface QueryOwedAmountRequest {
  transmitter: string;
}
export interface QueryOwedAmountRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest";
  value: Uint8Array;
}
export interface QueryOwedAmountRequestAmino {
  transmitter?: string;
}
export interface QueryOwedAmountRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryOwedAmountRequest";
  value: QueryOwedAmountRequestAmino;
}
export interface QueryOwedAmountRequestSDKType {
  transmitter: string;
}
export interface QueryOwedAmountResponse {
  amount: Coin | undefined;
}
export interface QueryOwedAmountResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse";
  value: Uint8Array;
}
export interface QueryOwedAmountResponseAmino {
  amount?: CoinAmino | undefined;
}
export interface QueryOwedAmountResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryOwedAmountResponse";
  value: QueryOwedAmountResponseAmino;
}
export interface QueryOwedAmountResponseSDKType {
  amount: CoinSDKType | undefined;
}
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
export interface QueryModuleStateRequestSDKType {}
export interface QueryModuleStateResponse {
  state?: GenesisState | undefined;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino | undefined;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType | undefined;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
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
      typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
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
  typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
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
      typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeedConfigRequest(): QueryFeedConfigRequest {
  return {
    feedId: ""
  };
}
export const QueryFeedConfigRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
  encode(message: QueryFeedConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeedConfigRequest {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : ""
    };
  },
  toJSON(message: QueryFeedConfigRequest): JsonSafe<QueryFeedConfigRequest> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigRequest>): QueryFeedConfigRequest {
    const message = createBaseQueryFeedConfigRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromSDK(object: QueryFeedConfigRequestSDKType): QueryFeedConfigRequest {
    return {
      feedId: object?.feed_id
    };
  },
  toSDK(message: QueryFeedConfigRequest): QueryFeedConfigRequestSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    return obj;
  },
  fromAmino(object: QueryFeedConfigRequestAmino): QueryFeedConfigRequest {
    const message = createBaseQueryFeedConfigRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryFeedConfigRequest): QueryFeedConfigRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigRequestAminoMsg): QueryFeedConfigRequest {
    return QueryFeedConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigRequestProtoMsg): QueryFeedConfigRequest {
    return QueryFeedConfigRequest.decode(message.value);
  },
  toProto(message: QueryFeedConfigRequest): Uint8Array {
    return QueryFeedConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigRequest): QueryFeedConfigRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
      value: QueryFeedConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeedConfigResponse(): QueryFeedConfigResponse {
  return {
    feedConfigInfo: undefined,
    feedConfig: undefined
  };
}
export const QueryFeedConfigResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
  encode(message: QueryFeedConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedConfigInfo !== undefined) {
      FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.feedConfig !== undefined) {
      FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.feedConfig = FeedConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeedConfigResponse {
    return {
      feedConfigInfo: isSet(object.feedConfigInfo) ? FeedConfigInfo.fromJSON(object.feedConfigInfo) : undefined,
      feedConfig: isSet(object.feedConfig) ? FeedConfig.fromJSON(object.feedConfig) : undefined
    };
  },
  toJSON(message: QueryFeedConfigResponse): JsonSafe<QueryFeedConfigResponse> {
    const obj: any = {};
    message.feedConfigInfo !== undefined && (obj.feedConfigInfo = message.feedConfigInfo ? FeedConfigInfo.toJSON(message.feedConfigInfo) : undefined);
    message.feedConfig !== undefined && (obj.feedConfig = message.feedConfig ? FeedConfig.toJSON(message.feedConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigResponse>): QueryFeedConfigResponse {
    const message = createBaseQueryFeedConfigResponse();
    message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
    message.feedConfig = object.feedConfig !== undefined && object.feedConfig !== null ? FeedConfig.fromPartial(object.feedConfig) : undefined;
    return message;
  },
  fromSDK(object: QueryFeedConfigResponseSDKType): QueryFeedConfigResponse {
    return {
      feedConfigInfo: object.feed_config_info ? FeedConfigInfo.fromSDK(object.feed_config_info) : undefined,
      feedConfig: object.feed_config ? FeedConfig.fromSDK(object.feed_config) : undefined
    };
  },
  toSDK(message: QueryFeedConfigResponse): QueryFeedConfigResponseSDKType {
    const obj: any = {};
    message.feedConfigInfo !== undefined && (obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toSDK(message.feedConfigInfo) : undefined);
    message.feedConfig !== undefined && (obj.feed_config = message.feedConfig ? FeedConfig.toSDK(message.feedConfig) : undefined);
    return obj;
  },
  fromAmino(object: QueryFeedConfigResponseAmino): QueryFeedConfigResponse {
    const message = createBaseQueryFeedConfigResponse();
    if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
      message.feedConfigInfo = FeedConfigInfo.fromAmino(object.feed_config_info);
    }
    if (object.feed_config !== undefined && object.feed_config !== null) {
      message.feedConfig = FeedConfig.fromAmino(object.feed_config);
    }
    return message;
  },
  toAmino(message: QueryFeedConfigResponse): QueryFeedConfigResponseAmino {
    const obj: any = {};
    obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
    obj.feed_config = message.feedConfig ? FeedConfig.toAmino(message.feedConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigResponseAminoMsg): QueryFeedConfigResponse {
    return QueryFeedConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigResponseProtoMsg): QueryFeedConfigResponse {
    return QueryFeedConfigResponse.decode(message.value);
  },
  toProto(message: QueryFeedConfigResponse): Uint8Array {
    return QueryFeedConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigResponse): QueryFeedConfigResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
      value: QueryFeedConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeedConfigInfoRequest(): QueryFeedConfigInfoRequest {
  return {
    feedId: ""
  };
}
export const QueryFeedConfigInfoRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
  encode(message: QueryFeedConfigInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeedConfigInfoRequest {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : ""
    };
  },
  toJSON(message: QueryFeedConfigInfoRequest): JsonSafe<QueryFeedConfigInfoRequest> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigInfoRequest>): QueryFeedConfigInfoRequest {
    const message = createBaseQueryFeedConfigInfoRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromSDK(object: QueryFeedConfigInfoRequestSDKType): QueryFeedConfigInfoRequest {
    return {
      feedId: object?.feed_id
    };
  },
  toSDK(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    return obj;
  },
  fromAmino(object: QueryFeedConfigInfoRequestAmino): QueryFeedConfigInfoRequest {
    const message = createBaseQueryFeedConfigInfoRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigInfoRequestAminoMsg): QueryFeedConfigInfoRequest {
    return QueryFeedConfigInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigInfoRequestProtoMsg): QueryFeedConfigInfoRequest {
    return QueryFeedConfigInfoRequest.decode(message.value);
  },
  toProto(message: QueryFeedConfigInfoRequest): Uint8Array {
    return QueryFeedConfigInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
      value: QueryFeedConfigInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeedConfigInfoResponse(): QueryFeedConfigInfoResponse {
  return {
    feedConfigInfo: undefined,
    epochAndRound: undefined
  };
}
export const QueryFeedConfigInfoResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
  encode(message: QueryFeedConfigInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedConfigInfo !== undefined) {
      FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeedConfigInfoResponse {
    return {
      feedConfigInfo: isSet(object.feedConfigInfo) ? FeedConfigInfo.fromJSON(object.feedConfigInfo) : undefined,
      epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined
    };
  },
  toJSON(message: QueryFeedConfigInfoResponse): JsonSafe<QueryFeedConfigInfoResponse> {
    const obj: any = {};
    message.feedConfigInfo !== undefined && (obj.feedConfigInfo = message.feedConfigInfo ? FeedConfigInfo.toJSON(message.feedConfigInfo) : undefined);
    message.epochAndRound !== undefined && (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigInfoResponse>): QueryFeedConfigInfoResponse {
    const message = createBaseQueryFeedConfigInfoResponse();
    message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  },
  fromSDK(object: QueryFeedConfigInfoResponseSDKType): QueryFeedConfigInfoResponse {
    return {
      feedConfigInfo: object.feed_config_info ? FeedConfigInfo.fromSDK(object.feed_config_info) : undefined,
      epochAndRound: object.epoch_and_round ? EpochAndRound.fromSDK(object.epoch_and_round) : undefined
    };
  },
  toSDK(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseSDKType {
    const obj: any = {};
    message.feedConfigInfo !== undefined && (obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toSDK(message.feedConfigInfo) : undefined);
    message.epochAndRound !== undefined && (obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toSDK(message.epochAndRound) : undefined);
    return obj;
  },
  fromAmino(object: QueryFeedConfigInfoResponseAmino): QueryFeedConfigInfoResponse {
    const message = createBaseQueryFeedConfigInfoResponse();
    if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
      message.feedConfigInfo = FeedConfigInfo.fromAmino(object.feed_config_info);
    }
    if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
      message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
    }
    return message;
  },
  toAmino(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseAmino {
    const obj: any = {};
    obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigInfoResponseAminoMsg): QueryFeedConfigInfoResponse {
    return QueryFeedConfigInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigInfoResponseProtoMsg): QueryFeedConfigInfoResponse {
    return QueryFeedConfigInfoResponse.decode(message.value);
  },
  toProto(message: QueryFeedConfigInfoResponse): Uint8Array {
    return QueryFeedConfigInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
      value: QueryFeedConfigInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLatestRoundRequest(): QueryLatestRoundRequest {
  return {
    feedId: ""
  };
}
export const QueryLatestRoundRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
  encode(message: QueryLatestRoundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestRoundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLatestRoundRequest {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : ""
    };
  },
  toJSON(message: QueryLatestRoundRequest): JsonSafe<QueryLatestRoundRequest> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLatestRoundRequest>): QueryLatestRoundRequest {
    const message = createBaseQueryLatestRoundRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromSDK(object: QueryLatestRoundRequestSDKType): QueryLatestRoundRequest {
    return {
      feedId: object?.feed_id
    };
  },
  toSDK(message: QueryLatestRoundRequest): QueryLatestRoundRequestSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    return obj;
  },
  fromAmino(object: QueryLatestRoundRequestAmino): QueryLatestRoundRequest {
    const message = createBaseQueryLatestRoundRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryLatestRoundRequest): QueryLatestRoundRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryLatestRoundRequestAminoMsg): QueryLatestRoundRequest {
    return QueryLatestRoundRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestRoundRequestProtoMsg): QueryLatestRoundRequest {
    return QueryLatestRoundRequest.decode(message.value);
  },
  toProto(message: QueryLatestRoundRequest): Uint8Array {
    return QueryLatestRoundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestRoundRequest): QueryLatestRoundRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
      value: QueryLatestRoundRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLatestRoundResponse(): QueryLatestRoundResponse {
  return {
    latestRoundId: BigInt(0),
    data: undefined
  };
}
export const QueryLatestRoundResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
  encode(message: QueryLatestRoundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latestRoundId !== BigInt(0)) {
      writer.uint32(8).uint64(message.latestRoundId);
    }
    if (message.data !== undefined) {
      Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestRoundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestRoundId = reader.uint64();
          break;
        case 2:
          message.data = Transmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLatestRoundResponse {
    return {
      latestRoundId: isSet(object.latestRoundId) ? BigInt(object.latestRoundId.toString()) : BigInt(0),
      data: isSet(object.data) ? Transmission.fromJSON(object.data) : undefined
    };
  },
  toJSON(message: QueryLatestRoundResponse): JsonSafe<QueryLatestRoundResponse> {
    const obj: any = {};
    message.latestRoundId !== undefined && (obj.latestRoundId = (message.latestRoundId || BigInt(0)).toString());
    message.data !== undefined && (obj.data = message.data ? Transmission.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLatestRoundResponse>): QueryLatestRoundResponse {
    const message = createBaseQueryLatestRoundResponse();
    message.latestRoundId = object.latestRoundId !== undefined && object.latestRoundId !== null ? BigInt(object.latestRoundId.toString()) : BigInt(0);
    message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
    return message;
  },
  fromSDK(object: QueryLatestRoundResponseSDKType): QueryLatestRoundResponse {
    return {
      latestRoundId: object?.latest_round_id,
      data: object.data ? Transmission.fromSDK(object.data) : undefined
    };
  },
  toSDK(message: QueryLatestRoundResponse): QueryLatestRoundResponseSDKType {
    const obj: any = {};
    obj.latest_round_id = message.latestRoundId;
    message.data !== undefined && (obj.data = message.data ? Transmission.toSDK(message.data) : undefined);
    return obj;
  },
  fromAmino(object: QueryLatestRoundResponseAmino): QueryLatestRoundResponse {
    const message = createBaseQueryLatestRoundResponse();
    if (object.latest_round_id !== undefined && object.latest_round_id !== null) {
      message.latestRoundId = BigInt(object.latest_round_id);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Transmission.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: QueryLatestRoundResponse): QueryLatestRoundResponseAmino {
    const obj: any = {};
    obj.latest_round_id = message.latestRoundId !== BigInt(0) ? message.latestRoundId.toString() : undefined;
    obj.data = message.data ? Transmission.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestRoundResponseAminoMsg): QueryLatestRoundResponse {
    return QueryLatestRoundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestRoundResponseProtoMsg): QueryLatestRoundResponse {
    return QueryLatestRoundResponse.decode(message.value);
  },
  toProto(message: QueryLatestRoundResponse): Uint8Array {
    return QueryLatestRoundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestRoundResponse): QueryLatestRoundResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
      value: QueryLatestRoundResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLatestTransmissionDetailsRequest(): QueryLatestTransmissionDetailsRequest {
  return {
    feedId: ""
  };
}
export const QueryLatestTransmissionDetailsRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
  encode(message: QueryLatestTransmissionDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestTransmissionDetailsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLatestTransmissionDetailsRequest {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : ""
    };
  },
  toJSON(message: QueryLatestTransmissionDetailsRequest): JsonSafe<QueryLatestTransmissionDetailsRequest> {
    const obj: any = {};
    message.feedId !== undefined && (obj.feedId = message.feedId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLatestTransmissionDetailsRequest>): QueryLatestTransmissionDetailsRequest {
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromSDK(object: QueryLatestTransmissionDetailsRequestSDKType): QueryLatestTransmissionDetailsRequest {
    return {
      feedId: object?.feed_id
    };
  },
  toSDK(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestSDKType {
    const obj: any = {};
    obj.feed_id = message.feedId;
    return obj;
  },
  fromAmino(object: QueryLatestTransmissionDetailsRequestAmino): QueryLatestTransmissionDetailsRequest {
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryLatestTransmissionDetailsRequestAminoMsg): QueryLatestTransmissionDetailsRequest {
    return QueryLatestTransmissionDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestTransmissionDetailsRequestProtoMsg): QueryLatestTransmissionDetailsRequest {
    return QueryLatestTransmissionDetailsRequest.decode(message.value);
  },
  toProto(message: QueryLatestTransmissionDetailsRequest): Uint8Array {
    return QueryLatestTransmissionDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
      value: QueryLatestTransmissionDetailsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLatestTransmissionDetailsResponse(): QueryLatestTransmissionDetailsResponse {
  return {
    configDigest: new Uint8Array(),
    epochAndRound: undefined,
    data: undefined
  };
}
export const QueryLatestTransmissionDetailsResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
  encode(message: QueryLatestTransmissionDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestTransmissionDetailsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configDigest = reader.bytes();
          break;
        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = Transmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLatestTransmissionDetailsResponse {
    return {
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined,
      data: isSet(object.data) ? Transmission.fromJSON(object.data) : undefined
    };
  },
  toJSON(message: QueryLatestTransmissionDetailsResponse): JsonSafe<QueryLatestTransmissionDetailsResponse> {
    const obj: any = {};
    message.configDigest !== undefined && (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
    message.epochAndRound !== undefined && (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
    message.data !== undefined && (obj.data = message.data ? Transmission.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLatestTransmissionDetailsResponse>): QueryLatestTransmissionDetailsResponse {
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
    return message;
  },
  fromSDK(object: QueryLatestTransmissionDetailsResponseSDKType): QueryLatestTransmissionDetailsResponse {
    return {
      configDigest: object?.config_digest,
      epochAndRound: object.epoch_and_round ? EpochAndRound.fromSDK(object.epoch_and_round) : undefined,
      data: object.data ? Transmission.fromSDK(object.data) : undefined
    };
  },
  toSDK(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseSDKType {
    const obj: any = {};
    obj.config_digest = message.configDigest;
    message.epochAndRound !== undefined && (obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toSDK(message.epochAndRound) : undefined);
    message.data !== undefined && (obj.data = message.data ? Transmission.toSDK(message.data) : undefined);
    return obj;
  },
  fromAmino(object: QueryLatestTransmissionDetailsResponseAmino): QueryLatestTransmissionDetailsResponse {
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    if (object.config_digest !== undefined && object.config_digest !== null) {
      message.configDigest = bytesFromBase64(object.config_digest);
    }
    if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
      message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Transmission.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseAmino {
    const obj: any = {};
    obj.config_digest = message.configDigest ? base64FromBytes(message.configDigest) : undefined;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    obj.data = message.data ? Transmission.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestTransmissionDetailsResponseAminoMsg): QueryLatestTransmissionDetailsResponse {
    return QueryLatestTransmissionDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestTransmissionDetailsResponseProtoMsg): QueryLatestTransmissionDetailsResponse {
    return QueryLatestTransmissionDetailsResponse.decode(message.value);
  },
  toProto(message: QueryLatestTransmissionDetailsResponse): Uint8Array {
    return QueryLatestTransmissionDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
      value: QueryLatestTransmissionDetailsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwedAmountRequest(): QueryOwedAmountRequest {
  return {
    transmitter: ""
  };
}
export const QueryOwedAmountRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
  encode(message: QueryOwedAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwedAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwedAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transmitter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwedAmountRequest {
    return {
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : ""
    };
  },
  toJSON(message: QueryOwedAmountRequest): JsonSafe<QueryOwedAmountRequest> {
    const obj: any = {};
    message.transmitter !== undefined && (obj.transmitter = message.transmitter);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOwedAmountRequest>): QueryOwedAmountRequest {
    const message = createBaseQueryOwedAmountRequest();
    message.transmitter = object.transmitter ?? "";
    return message;
  },
  fromSDK(object: QueryOwedAmountRequestSDKType): QueryOwedAmountRequest {
    return {
      transmitter: object?.transmitter
    };
  },
  toSDK(message: QueryOwedAmountRequest): QueryOwedAmountRequestSDKType {
    const obj: any = {};
    obj.transmitter = message.transmitter;
    return obj;
  },
  fromAmino(object: QueryOwedAmountRequestAmino): QueryOwedAmountRequest {
    const message = createBaseQueryOwedAmountRequest();
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    return message;
  },
  toAmino(message: QueryOwedAmountRequest): QueryOwedAmountRequestAmino {
    const obj: any = {};
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    return obj;
  },
  fromAminoMsg(object: QueryOwedAmountRequestAminoMsg): QueryOwedAmountRequest {
    return QueryOwedAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwedAmountRequestProtoMsg): QueryOwedAmountRequest {
    return QueryOwedAmountRequest.decode(message.value);
  },
  toProto(message: QueryOwedAmountRequest): Uint8Array {
    return QueryOwedAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwedAmountRequest): QueryOwedAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
      value: QueryOwedAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwedAmountResponse(): QueryOwedAmountResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryOwedAmountResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
  encode(message: QueryOwedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwedAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwedAmountResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: QueryOwedAmountResponse): JsonSafe<QueryOwedAmountResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOwedAmountResponse>): QueryOwedAmountResponse {
    const message = createBaseQueryOwedAmountResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromSDK(object: QueryOwedAmountResponseSDKType): QueryOwedAmountResponse {
    return {
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: QueryOwedAmountResponse): QueryOwedAmountResponseSDKType {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: QueryOwedAmountResponseAmino): QueryOwedAmountResponse {
    const message = createBaseQueryOwedAmountResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryOwedAmountResponse): QueryOwedAmountResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwedAmountResponseAminoMsg): QueryOwedAmountResponse {
    return QueryOwedAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwedAmountResponseProtoMsg): QueryOwedAmountResponse {
    return QueryOwedAmountResponse.decode(message.value);
  },
  toProto(message: QueryOwedAmountResponse): Uint8Array {
    return QueryOwedAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwedAmountResponse): QueryOwedAmountResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
      value: QueryOwedAmountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
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
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  toJSON(_: QueryModuleStateRequest): JsonSafe<QueryModuleStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromSDK(_: QueryModuleStateRequestSDKType): QueryModuleStateRequest {
    return {};
  },
  toSDK(_: QueryModuleStateRequest): QueryModuleStateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  toJSON(message: QueryModuleStateResponse): JsonSafe<QueryModuleStateResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? GenesisState.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromSDK(object: QueryModuleStateResponseSDKType): QueryModuleStateResponse {
    return {
      state: object.state ? GenesisState.fromSDK(object.state) : undefined
    };
  },
  toSDK(message: QueryModuleStateResponse): QueryModuleStateResponseSDKType {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? GenesisState.toSDK(message.state) : undefined);
    return obj;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};