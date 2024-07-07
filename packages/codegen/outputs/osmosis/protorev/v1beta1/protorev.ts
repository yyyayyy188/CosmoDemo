import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arbRoutes: Route[];
  /** Token denomination of the first asset */
  tokenIn: string;
  /** Token denomination of the second asset */
  tokenOut: string;
}
export interface TokenPairArbRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes";
  value: Uint8Array;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesAmino {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arb_routes?: RouteAmino[];
  /** Token denomination of the first asset */
  token_in?: string;
  /** Token denomination of the second asset */
  token_out?: string;
}
export interface TokenPairArbRoutesAminoMsg {
  type: "osmosis/protorev/token-pair-arb-routes";
  value: TokenPairArbRoutesAmino;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
  arb_routes: RouteSDKType[];
  token_in: string;
  token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades: Trade[];
}
export interface RouteProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Route";
  value: Uint8Array;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteAmino {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades?: TradeAmino[];
}
export interface RouteAminoMsg {
  type: "osmosis/protorev/route";
  value: RouteAmino;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
  trades: TradeSDKType[];
}
/** Trade is a single trade in a route */
export interface Trade {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  pool: bigint;
  /** The denom of token A that is traded */
  tokenIn: string;
  /** The denom of token B that is traded */
  tokenOut: string;
}
export interface TradeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Trade";
  value: Uint8Array;
}
/** Trade is a single trade in a route */
export interface TradeAmino {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  pool?: string;
  /** The denom of token A that is traded */
  token_in?: string;
  /** The denom of token B that is traded */
  token_out?: string;
}
export interface TradeAminoMsg {
  type: "osmosis/protorev/trade";
  value: TradeAmino;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
  pool: bigint;
  token_in: string;
  token_out: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatistics {
  /** profits is the total profit from all trades on this pool */
  profits: Coin[];
  /** number_of_trades is the number of trades the module has executed */
  numberOfTrades: string;
  /** pool_id is the id of the pool */
  poolId: bigint;
}
export interface PoolStatisticsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics";
  value: Uint8Array;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsAmino {
  /** profits is the total profit from all trades on this pool */
  profits?: CoinAmino[];
  /** number_of_trades is the number of trades the module has executed */
  number_of_trades?: string;
  /** pool_id is the id of the pool */
  pool_id?: string;
}
export interface PoolStatisticsAminoMsg {
  type: "osmosis/protorev/pool-statistics";
  value: PoolStatisticsAmino;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsSDKType {
  profits: CoinSDKType[];
  number_of_trades: string;
  pool_id: bigint;
}
function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}
export const TokenPairArbRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
  aminoType: "osmosis/protorev/token-pair-arb-routes",
  encode(message: TokenPairArbRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.arbRoutes) {
      Route.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPairArbRoutes {
    return {
      arbRoutes: Array.isArray(object?.arbRoutes) ? object.arbRoutes.map((e: any) => Route.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: TokenPairArbRoutes): JsonSafe<TokenPairArbRoutes> {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arbRoutes = message.arbRoutes.map(e => e ? Route.toJSON(e) : undefined);
    } else {
      obj.arbRoutes = [];
    }
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<TokenPairArbRoutes>): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: TokenPairArbRoutesSDKType): TokenPairArbRoutes {
    return {
      arbRoutes: Array.isArray(object?.arb_routes) ? object.arb_routes.map((e: any) => Route.fromSDK(e)) : [],
      tokenIn: object?.token_in,
      tokenOut: object?.token_out
    };
  },
  toSDK(message: TokenPairArbRoutes): TokenPairArbRoutesSDKType {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arb_routes = message.arbRoutes.map(e => e ? Route.toSDK(e) : undefined);
    } else {
      obj.arb_routes = [];
    }
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arb_routes?.map(e => Route.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arb_routes = message.arbRoutes.map(e => e ? Route.toAmino(e) : undefined);
    } else {
      obj.arb_routes = message.arbRoutes;
    }
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: TokenPairArbRoutesAminoMsg): TokenPairArbRoutes {
    return TokenPairArbRoutes.fromAmino(object.value);
  },
  toAminoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesAminoMsg {
    return {
      type: "osmosis/protorev/token-pair-arb-routes",
      value: TokenPairArbRoutes.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenPairArbRoutesProtoMsg): TokenPairArbRoutes {
    return TokenPairArbRoutes.decode(message.value);
  },
  toProto(message: TokenPairArbRoutes): Uint8Array {
    return TokenPairArbRoutes.encode(message).finish();
  },
  toProtoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
      value: TokenPairArbRoutes.encode(message).finish()
    };
  }
};
function createBaseRoute(): Route {
  return {
    trades: []
  };
}
export const Route = {
  typeUrl: "/osmosis.protorev.v1beta1.Route",
  aminoType: "osmosis/protorev/route",
  encode(message: Route, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Route {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Route {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : []
    };
  },
  toJSON(message: Route): JsonSafe<Route> {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Route>): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: RouteSDKType): Route {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromSDK(e)) : []
    };
  },
  toSDK(message: Route): RouteSDKType {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toSDK(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },
  fromAmino(object: RouteAmino): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Route): RouteAmino {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toAmino(e) : undefined);
    } else {
      obj.trades = message.trades;
    }
    return obj;
  },
  fromAminoMsg(object: RouteAminoMsg): Route {
    return Route.fromAmino(object.value);
  },
  toAminoMsg(message: Route): RouteAminoMsg {
    return {
      type: "osmosis/protorev/route",
      value: Route.toAmino(message)
    };
  },
  fromProtoMsg(message: RouteProtoMsg): Route {
    return Route.decode(message.value);
  },
  toProto(message: Route): Uint8Array {
    return Route.encode(message).finish();
  },
  toProtoMsg(message: Route): RouteProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Route",
      value: Route.encode(message).finish()
    };
  }
};
function createBaseTrade(): Trade {
  return {
    pool: BigInt(0),
    tokenIn: "",
    tokenOut: ""
  };
}
export const Trade = {
  typeUrl: "/osmosis.protorev.v1beta1.Trade",
  aminoType: "osmosis/protorev/trade",
  encode(message: Trade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Trade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Trade {
    return {
      pool: isSet(object.pool) ? BigInt(object.pool.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: Trade): JsonSafe<Trade> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = (message.pool || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<Trade>): Trade {
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? BigInt(object.pool.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: TradeSDKType): Trade {
    return {
      pool: object?.pool,
      tokenIn: object?.token_in,
      tokenOut: object?.token_out
    };
  },
  toSDK(message: Trade): TradeSDKType {
    const obj: any = {};
    obj.pool = message.pool;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAmino(object: TradeAmino): Trade {
    const message = createBaseTrade();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = BigInt(object.pool);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: Trade): TradeAmino {
    const obj: any = {};
    obj.pool = message.pool !== BigInt(0) ? message.pool.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: TradeAminoMsg): Trade {
    return Trade.fromAmino(object.value);
  },
  toAminoMsg(message: Trade): TradeAminoMsg {
    return {
      type: "osmosis/protorev/trade",
      value: Trade.toAmino(message)
    };
  },
  fromProtoMsg(message: TradeProtoMsg): Trade {
    return Trade.decode(message.value);
  },
  toProto(message: Trade): Uint8Array {
    return Trade.encode(message).finish();
  },
  toProtoMsg(message: Trade): TradeProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Trade",
      value: Trade.encode(message).finish()
    };
  }
};
function createBasePoolStatistics(): PoolStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    poolId: BigInt(0)
  };
}
export const PoolStatistics = {
  typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics",
  aminoType: "osmosis/protorev/pool-statistics",
  encode(message: PoolStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.numberOfTrades = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolStatistics {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : [],
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolStatistics): JsonSafe<PoolStatistics> {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<PoolStatistics>): PoolStatistics {
    const message = createBasePoolStatistics();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: PoolStatisticsSDKType): PoolStatistics {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDK(e)) : [],
      numberOfTrades: object?.number_of_trades,
      poolId: object?.pool_id
    };
  },
  toSDK(message: PoolStatistics): PoolStatisticsSDKType {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.profits = [];
    }
    obj.number_of_trades = message.numberOfTrades;
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: PoolStatisticsAmino): PoolStatistics {
    const message = createBasePoolStatistics();
    message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
    if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
      message.numberOfTrades = object.number_of_trades;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: PoolStatistics): PoolStatisticsAmino {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = message.profits;
    }
    obj.number_of_trades = message.numberOfTrades === "" ? undefined : message.numberOfTrades;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolStatisticsAminoMsg): PoolStatistics {
    return PoolStatistics.fromAmino(object.value);
  },
  toAminoMsg(message: PoolStatistics): PoolStatisticsAminoMsg {
    return {
      type: "osmosis/protorev/pool-statistics",
      value: PoolStatistics.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolStatisticsProtoMsg): PoolStatistics {
    return PoolStatistics.decode(message.value);
  },
  toProto(message: PoolStatistics): Uint8Array {
    return PoolStatistics.encode(message).finish();
  },
  toProtoMsg(message: PoolStatistics): PoolStatisticsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics",
      value: PoolStatistics.encode(message).finish()
    };
  }
};