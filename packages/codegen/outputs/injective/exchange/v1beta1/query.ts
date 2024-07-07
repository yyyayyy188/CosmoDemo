import { SubaccountOrderData, SubaccountOrderDataAmino, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataAmino, SubaccountOrderbookMetadataSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, Position, PositionAmino, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoAmino, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsAmino, TradeRecordsSDKType, TradeRecord, TradeRecordAmino, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceAmino, BalanceSDKType, DerivativePosition, DerivativePositionAmino, DerivativePositionSDKType, GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsAmino, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, isObject } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { Decimal } from "@cosmjs/math";
/** CancellationStrategy is the list of cancellation strategies. */
export enum CancellationStrategy {
  /** UnspecifiedOrder - just cancelling in random order in most efficient way */
  UnspecifiedOrder = 0,
  /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
  FromWorstToBest = 1,
  /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
  FromBestToWorst = 2,
  UNRECOGNIZED = -1,
}
export const CancellationStrategySDKType = CancellationStrategy;
export const CancellationStrategyAmino = CancellationStrategy;
export function cancellationStrategyFromJSON(object: any): CancellationStrategy {
  switch (object) {
    case 0:
    case "UnspecifiedOrder":
      return CancellationStrategy.UnspecifiedOrder;
    case 1:
    case "FromWorstToBest":
      return CancellationStrategy.FromWorstToBest;
    case 2:
    case "FromBestToWorst":
      return CancellationStrategy.FromBestToWorst;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CancellationStrategy.UNRECOGNIZED;
  }
}
export function cancellationStrategyToJSON(object: CancellationStrategy): string {
  switch (object) {
    case CancellationStrategy.UnspecifiedOrder:
      return "UnspecifiedOrder";
    case CancellationStrategy.FromWorstToBest:
      return "FromWorstToBest";
    case CancellationStrategy.FromBestToWorst:
      return "FromBestToWorst";
    case CancellationStrategy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Subaccount {
  trader: string;
  subaccountNonce: number;
}
export interface SubaccountProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Subaccount";
  value: Uint8Array;
}
export interface SubaccountAmino {
  trader?: string;
  subaccount_nonce?: number;
}
export interface SubaccountAminoMsg {
  type: "/injective.exchange.v1beta1.Subaccount";
  value: SubaccountAmino;
}
export interface SubaccountSDKType {
  trader: string;
  subaccount_nonce: number;
}
export interface QuerySubaccountOrdersRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
  value: Uint8Array;
}
export interface QuerySubaccountOrdersRequestAmino {
  subaccount_id?: string;
  market_id?: string;
}
export interface QuerySubaccountOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
  value: QuerySubaccountOrdersRequestAmino;
}
export interface QuerySubaccountOrdersRequestSDKType {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountOrdersResponse {
  buyOrders: SubaccountOrderData[];
  sellOrders: SubaccountOrderData[];
}
export interface QuerySubaccountOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
  value: Uint8Array;
}
export interface QuerySubaccountOrdersResponseAmino {
  buy_orders?: SubaccountOrderDataAmino[];
  sell_orders?: SubaccountOrderDataAmino[];
}
export interface QuerySubaccountOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
  value: QuerySubaccountOrdersResponseAmino;
}
export interface QuerySubaccountOrdersResponseSDKType {
  buy_orders: SubaccountOrderDataSDKType[];
  sell_orders: SubaccountOrderDataSDKType[];
}
export interface SubaccountOrderbookMetadataWithMarket {
  metadata?: SubaccountOrderbookMetadata | undefined;
  marketId: string;
  isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
  value: Uint8Array;
}
export interface SubaccountOrderbookMetadataWithMarketAmino {
  metadata?: SubaccountOrderbookMetadataAmino | undefined;
  market_id?: string;
  isBuy?: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
  value: SubaccountOrderbookMetadataWithMarketAmino;
}
export interface SubaccountOrderbookMetadataWithMarketSDKType {
  metadata?: SubaccountOrderbookMetadataSDKType | undefined;
  market_id: string;
  isBuy: boolean;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequest {}
export interface QueryExchangeParamsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
  value: Uint8Array;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequestAmino {}
export interface QueryExchangeParamsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
  value: QueryExchangeParamsRequestAmino;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequestSDKType {}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponse {
  params: Params | undefined;
}
export interface QueryExchangeParamsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
  value: Uint8Array;
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryExchangeParamsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
  value: QueryExchangeParamsResponseAmino;
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequest {
  subaccountId: string;
  subaccount?: Subaccount | undefined;
}
export interface QuerySubaccountDepositsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
  value: Uint8Array;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequestAmino {
  subaccount_id?: string;
  subaccount?: SubaccountAmino | undefined;
}
export interface QuerySubaccountDepositsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
  value: QuerySubaccountDepositsRequestAmino;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequestSDKType {
  subaccount_id: string;
  subaccount?: SubaccountSDKType | undefined;
}
export interface QuerySubaccountDepositsResponse_DepositsEntry {
  key: string;
  value?: Deposit | undefined;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAmino {
  key?: string;
  value?: DepositAmino | undefined;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAminoMsg {
  type: string;
  value: QuerySubaccountDepositsResponse_DepositsEntryAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntrySDKType {
  key: string;
  value?: DepositSDKType | undefined;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponse {
  deposits: {
    [key: string]: Deposit | undefined;
  };
}
export interface QuerySubaccountDepositsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
  value: Uint8Array;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponseAmino {
  deposits?: {
    [key: string]: DepositAmino | undefined;
  };
}
export interface QuerySubaccountDepositsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
  value: QuerySubaccountDepositsResponseAmino;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponseSDKType {
  deposits: {
    [key: string]: DepositSDKType | undefined;
  };
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequest {}
export interface QueryExchangeBalancesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
  value: Uint8Array;
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequestAmino {}
export interface QueryExchangeBalancesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
  value: QueryExchangeBalancesRequestAmino;
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequestSDKType {}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponse {
  balances: Balance[];
}
export interface QueryExchangeBalancesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
  value: Uint8Array;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponseAmino {
  balances?: BalanceAmino[];
}
export interface QueryExchangeBalancesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
  value: QueryExchangeBalancesResponseAmino;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponseSDKType {
  balances: BalanceSDKType[];
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequest {
  subaccountId: string;
  denom: string;
}
export interface QuerySubaccountDepositRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
  value: Uint8Array;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequestAmino {
  subaccount_id?: string;
  denom?: string;
}
export interface QuerySubaccountDepositRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
  value: QuerySubaccountDepositRequestAmino;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequestSDKType {
  subaccount_id: string;
  denom: string;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponse {
  deposits?: Deposit | undefined;
}
export interface QuerySubaccountDepositResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
  value: Uint8Array;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponseAmino {
  deposits?: DepositAmino | undefined;
}
export interface QuerySubaccountDepositResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
  value: QuerySubaccountDepositResponseAmino;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponseSDKType {
  deposits?: DepositSDKType | undefined;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
}
export interface QuerySpotMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
  value: Uint8Array;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status?: string;
}
export interface QuerySpotMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
  value: QuerySpotMarketsRequestAmino;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequestSDKType {
  status: string;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponse {
  markets: SpotMarket[];
}
export interface QuerySpotMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
  value: Uint8Array;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponseAmino {
  markets?: SpotMarketAmino[];
}
export interface QuerySpotMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
  value: QuerySpotMarketsResponseAmino;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponseSDKType {
  markets: SpotMarketSDKType[];
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QuerySpotMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
  value: Uint8Array;
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequestAmino {
  /** Market ID for the market */
  market_id?: string;
}
export interface QuerySpotMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
  value: QuerySpotMarketRequestAmino;
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequestSDKType {
  market_id: string;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponse {
  market?: SpotMarket | undefined;
}
export interface QuerySpotMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
  value: Uint8Array;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponseAmino {
  market?: SpotMarketAmino | undefined;
}
export interface QuerySpotMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
  value: QuerySpotMarketResponseAmino;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponseSDKType {
  market?: SpotMarketSDKType | undefined;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequest {
  /** Market ID for the market */
  marketId: string;
  limit: bigint;
}
export interface QuerySpotOrderbookRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
  value: Uint8Array;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  limit?: string;
}
export interface QuerySpotOrderbookRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
  value: QuerySpotOrderbookRequestAmino;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequestSDKType {
  market_id: string;
  limit: bigint;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponse {
  buysPriceLevel: PriceLevel[];
  sellsPriceLevel: PriceLevel[];
}
export interface QuerySpotOrderbookResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
  value: Uint8Array;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponseAmino {
  buys_price_level?: PriceLevelAmino[];
  sells_price_level?: PriceLevelAmino[];
}
export interface QuerySpotOrderbookResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
  value: QuerySpotOrderbookResponseAmino;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponseSDKType {
  buys_price_level: PriceLevelSDKType[];
  sells_price_level: PriceLevelSDKType[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the order hashes */
  orderHashes: string[];
}
export interface QuerySpotOrdersByHashesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
  value: Uint8Array;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  /** SubaccountID of the trader */
  subaccount_id?: string;
  /** the order hashes */
  order_hashes?: string[];
}
export interface QuerySpotOrdersByHashesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
  value: QuerySpotOrdersByHashesRequestAmino;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequestSDKType {
  market_id: string;
  subaccount_id: string;
  order_hashes: string[];
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponse {
  orders: TrimmedSpotLimitOrder[];
}
export interface QuerySpotOrdersByHashesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
  value: Uint8Array;
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponseAmino {
  orders?: TrimmedSpotLimitOrderAmino[];
}
export interface QuerySpotOrdersByHashesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
  value: QuerySpotOrdersByHashesResponseAmino;
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponseSDKType {
  orders: TrimmedSpotLimitOrderSDKType[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
}
export interface QueryTraderSpotOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
  value: Uint8Array;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  /** SubaccountID of the trader */
  subaccount_id?: string;
}
export interface QueryTraderSpotOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
  value: QueryTraderSpotOrdersRequestAmino;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequestSDKType {
  market_id: string;
  subaccount_id: string;
}
export interface TrimmedSpotLimitOrder {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  orderHash: string;
}
export interface TrimmedSpotLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
  value: Uint8Array;
}
export interface TrimmedSpotLimitOrderAmino {
  /** price of the order */
  price?: string;
  /** quantity of the order */
  quantity?: string;
  /** the amount of the quantity remaining fillable */
  fillable?: string;
  /** true if the order is a buy */
  isBuy?: boolean;
  order_hash?: string;
}
export interface TrimmedSpotLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
  value: TrimmedSpotLimitOrderAmino;
}
export interface TrimmedSpotLimitOrderSDKType {
  price: string;
  quantity: string;
  fillable: string;
  isBuy: boolean;
  order_hash: string;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponse {
  orders: TrimmedSpotLimitOrder[];
}
export interface QueryTraderSpotOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
  value: Uint8Array;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponseAmino {
  orders?: TrimmedSpotLimitOrderAmino[];
}
export interface QueryTraderSpotOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
  value: QueryTraderSpotOrdersResponseAmino;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponseSDKType {
  orders: TrimmedSpotLimitOrderSDKType[];
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QuerySpotMidPriceAndTOBRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
  value: Uint8Array;
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequestAmino {
  /** Market ID for the market */
  market_id?: string;
}
export interface QuerySpotMidPriceAndTOBRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
  value: QuerySpotMidPriceAndTOBRequestAmino;
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequestSDKType {
  market_id: string;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponse {
  /** mid price of the market */
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface QuerySpotMidPriceAndTOBResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
  value: Uint8Array;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponseAmino {
  /** mid price of the market */
  mid_price?: string;
  /** best buy price of the market */
  best_buy_price?: string;
  /** best sell price of the market */
  best_sell_price?: string;
}
export interface QuerySpotMidPriceAndTOBResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
  value: QuerySpotMidPriceAndTOBResponseAmino;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponseSDKType {
  mid_price?: string;
  best_buy_price?: string;
  best_sell_price?: string;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
  value: Uint8Array;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequestAmino {
  /** Market ID for the market */
  market_id?: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
  value: QueryDerivativeMidPriceAndTOBRequestAmino;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequestSDKType {
  market_id: string;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponse {
  /** mid price of the market */
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
  value: Uint8Array;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponseAmino {
  /** mid price of the market */
  mid_price?: string;
  /** best buy price of the market */
  best_buy_price?: string;
  /** best sell price of the market */
  best_sell_price?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
  value: QueryDerivativeMidPriceAndTOBResponseAmino;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponseSDKType {
  mid_price?: string;
  best_buy_price?: string;
  best_sell_price?: string;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequest {
  /** Market ID for the market */
  marketId: string;
  limit: bigint;
}
export interface QueryDerivativeOrderbookRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
  value: Uint8Array;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  limit?: string;
}
export interface QueryDerivativeOrderbookRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
  value: QueryDerivativeOrderbookRequestAmino;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequestSDKType {
  market_id: string;
  limit: bigint;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponse {
  buysPriceLevel: PriceLevel[];
  sellsPriceLevel: PriceLevel[];
}
export interface QueryDerivativeOrderbookResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
  value: Uint8Array;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponseAmino {
  buys_price_level?: PriceLevelAmino[];
  sells_price_level?: PriceLevelAmino[];
}
export interface QueryDerivativeOrderbookResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
  value: QueryDerivativeOrderbookResponseAmino;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponseSDKType {
  buys_price_level: PriceLevelSDKType[];
  sells_price_level: PriceLevelSDKType[];
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the base amount to cancel (free up) */
  baseAmount: string;
  /** the quote amount to cancel (free up) */
  quoteAmount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /** The reference price for the cancellation strategy, e.g. mid price or mark price */
  referencePrice?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
  value: Uint8Array;
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  /** SubaccountID of the trader */
  subaccount_id?: string;
  /** the base amount to cancel (free up) */
  base_amount?: string;
  /** the quote amount to cancel (free up) */
  quote_amount?: string;
  /** The cancellation strategy */
  strategy?: CancellationStrategy;
  /** The reference price for the cancellation strategy, e.g. mid price or mark price */
  reference_price?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
  value: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestSDKType {
  market_id: string;
  subaccount_id: string;
  base_amount: string;
  quote_amount: string;
  strategy: CancellationStrategy;
  reference_price?: string;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the quote amount to cancel (free up) */
  quoteAmount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /** The reference price for the cancellation strategy, e.g. mid price or mark price */
  referencePrice?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
  value: Uint8Array;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  /** SubaccountID of the trader */
  subaccount_id?: string;
  /** the quote amount to cancel (free up) */
  quote_amount?: string;
  /** The cancellation strategy */
  strategy?: CancellationStrategy;
  /** The reference price for the cancellation strategy, e.g. mid price or mark price */
  reference_price?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
  value: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestSDKType {
  market_id: string;
  subaccount_id: string;
  quote_amount: string;
  strategy: CancellationStrategy;
  reference_price?: string;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
}
export interface QueryTraderDerivativeOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
  value: Uint8Array;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  /** SubaccountID of the trader */
  subaccount_id?: string;
}
export interface QueryTraderDerivativeOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
  value: QueryTraderDerivativeOrdersRequestAmino;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequestSDKType {
  market_id: string;
  subaccount_id: string;
}
export interface TrimmedDerivativeLimitOrder {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** margin of the order */
  margin: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  orderHash: string;
}
export interface TrimmedDerivativeLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
  value: Uint8Array;
}
export interface TrimmedDerivativeLimitOrderAmino {
  /** price of the order */
  price?: string;
  /** quantity of the order */
  quantity?: string;
  /** margin of the order */
  margin?: string;
  /** the amount of the quantity remaining fillable */
  fillable?: string;
  /** true if the order is a buy */
  isBuy: boolean;
  order_hash?: string;
}
export interface TrimmedDerivativeLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
  value: TrimmedDerivativeLimitOrderAmino;
}
export interface TrimmedDerivativeLimitOrderSDKType {
  price: string;
  quantity: string;
  margin: string;
  fillable: string;
  isBuy: boolean;
  order_hash: string;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponse {
  orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryTraderDerivativeOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
  value: Uint8Array;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponseAmino {
  orders?: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryTraderDerivativeOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
  value: QueryTraderDerivativeOrdersResponseAmino;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponseSDKType {
  orders: TrimmedDerivativeLimitOrderSDKType[];
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the order hashes */
  orderHashes: string[];
}
export interface QueryDerivativeOrdersByHashesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
  value: Uint8Array;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequestAmino {
  /** Market ID for the market */
  market_id?: string;
  /** SubaccountID of the trader */
  subaccount_id?: string;
  /** the order hashes */
  order_hashes?: string[];
}
export interface QueryDerivativeOrdersByHashesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
  value: QueryDerivativeOrdersByHashesRequestAmino;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequestSDKType {
  market_id: string;
  subaccount_id: string;
  order_hashes: string[];
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponse {
  orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryDerivativeOrdersByHashesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
  value: Uint8Array;
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponseAmino {
  orders?: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryDerivativeOrdersByHashesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
  value: QueryDerivativeOrdersByHashesResponseAmino;
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponseSDKType {
  orders: TrimmedDerivativeLimitOrderSDKType[];
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
}
export interface QueryDerivativeMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
  value: Uint8Array;
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status?: string;
}
export interface QueryDerivativeMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
  value: QueryDerivativeMarketsRequestAmino;
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequestSDKType {
  status: string;
}
export interface PriceLevel {
  price: string;
  /** quantity */
  quantity: string;
}
export interface PriceLevelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PriceLevel";
  value: Uint8Array;
}
export interface PriceLevelAmino {
  price?: string;
  /** quantity */
  quantity?: string;
}
export interface PriceLevelAminoMsg {
  type: "/injective.exchange.v1beta1.PriceLevel";
  value: PriceLevelAmino;
}
export interface PriceLevelSDKType {
  price: string;
  quantity: string;
}
export interface PerpetualMarketState {
  marketInfo?: PerpetualMarketInfo | undefined;
  fundingInfo?: PerpetualMarketFunding | undefined;
}
export interface PerpetualMarketStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState";
  value: Uint8Array;
}
export interface PerpetualMarketStateAmino {
  market_info?: PerpetualMarketInfoAmino | undefined;
  funding_info?: PerpetualMarketFundingAmino | undefined;
}
export interface PerpetualMarketStateAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketState";
  value: PerpetualMarketStateAmino;
}
export interface PerpetualMarketStateSDKType {
  market_info?: PerpetualMarketInfoSDKType | undefined;
  funding_info?: PerpetualMarketFundingSDKType | undefined;
}
export interface FullDerivativeMarket {
  market?: DerivativeMarket | undefined;
  perpetualInfo?: PerpetualMarketState | undefined;
  futuresInfo?: ExpiryFuturesMarketInfo | undefined;
  markPrice: string;
}
export interface FullDerivativeMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket";
  value: Uint8Array;
}
export interface FullDerivativeMarketAmino {
  market?: DerivativeMarketAmino | undefined;
  perpetual_info?: PerpetualMarketStateAmino | undefined;
  futures_info?: ExpiryFuturesMarketInfoAmino | undefined;
  mark_price?: string;
}
export interface FullDerivativeMarketAminoMsg {
  type: "/injective.exchange.v1beta1.FullDerivativeMarket";
  value: FullDerivativeMarketAmino;
}
export interface FullDerivativeMarketSDKType {
  market?: DerivativeMarketSDKType | undefined;
  perpetual_info?: PerpetualMarketStateSDKType | undefined;
  futures_info?: ExpiryFuturesMarketInfoSDKType | undefined;
  mark_price: string;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponse {
  markets: FullDerivativeMarket[];
}
export interface QueryDerivativeMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
  value: Uint8Array;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponseAmino {
  markets?: FullDerivativeMarketAmino[];
}
export interface QueryDerivativeMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
  value: QueryDerivativeMarketsResponseAmino;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponseSDKType {
  markets: FullDerivativeMarketSDKType[];
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
  value: Uint8Array;
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequestAmino {
  /** Market ID for the market */
  market_id?: string;
}
export interface QueryDerivativeMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
  value: QueryDerivativeMarketRequestAmino;
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequestSDKType {
  market_id: string;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponse {
  market?: FullDerivativeMarket | undefined;
}
export interface QueryDerivativeMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
  value: Uint8Array;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponseAmino {
  market?: FullDerivativeMarketAmino | undefined;
}
export interface QueryDerivativeMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
  value: QueryDerivativeMarketResponseAmino;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponseSDKType {
  market?: FullDerivativeMarketSDKType | undefined;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMarketAddressRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
  value: Uint8Array;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequestAmino {
  /** Market ID for the market */
  market_id?: string;
}
export interface QueryDerivativeMarketAddressRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
  value: QueryDerivativeMarketAddressRequestAmino;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequestSDKType {
  market_id: string;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponse {
  /** address for the market */
  address: string;
  /** subaccountID for the market */
  subaccountId: string;
}
export interface QueryDerivativeMarketAddressResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
  value: Uint8Array;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponseAmino {
  /** address for the market */
  address?: string;
  /** subaccountID for the market */
  subaccount_id?: string;
}
export interface QueryDerivativeMarketAddressResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
  value: QueryDerivativeMarketAddressResponseAmino;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponseSDKType {
  address: string;
  subaccount_id: string;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequest {
  subaccountId: string;
}
export interface QuerySubaccountTradeNonceRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
  value: Uint8Array;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequestAmino {
  subaccount_id?: string;
}
export interface QuerySubaccountTradeNonceRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
  value: QuerySubaccountTradeNonceRequestAmino;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequestSDKType {
  subaccount_id: string;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequest {
  subaccountId: string;
}
export interface QuerySubaccountPositionsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
  value: Uint8Array;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequestAmino {
  subaccount_id?: string;
}
export interface QuerySubaccountPositionsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
  value: QuerySubaccountPositionsRequestAmino;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequestSDKType {
  subaccount_id: string;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountPositionInMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
  value: Uint8Array;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequestAmino {
  subaccount_id?: string;
  market_id?: string;
}
export interface QuerySubaccountPositionInMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
  value: QuerySubaccountPositionInMarketRequestAmino;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequestSDKType {
  subaccount_id: string;
  market_id: string;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
  value: Uint8Array;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequestAmino {
  subaccount_id?: string;
  market_id?: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
  value: QuerySubaccountEffectivePositionInMarketRequestAmino;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequestSDKType {
  subaccount_id: string;
  market_id: string;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequest {
  subaccountId: string;
}
export interface QuerySubaccountOrderMetadataRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
  value: Uint8Array;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequestAmino {
  subaccount_id?: string;
}
export interface QuerySubaccountOrderMetadataRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
  value: QuerySubaccountOrderMetadataRequestAmino;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequestSDKType {
  subaccount_id: string;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponse {
  state: DerivativePosition[];
}
export interface QuerySubaccountPositionsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
  value: Uint8Array;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponseAmino {
  state?: DerivativePositionAmino[];
}
export interface QuerySubaccountPositionsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
  value: QuerySubaccountPositionsResponseAmino;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponseSDKType {
  state: DerivativePositionSDKType[];
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponse {
  state?: Position | undefined;
}
export interface QuerySubaccountPositionInMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
  value: Uint8Array;
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponseAmino {
  state?: PositionAmino | undefined;
}
export interface QuerySubaccountPositionInMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
  value: QuerySubaccountPositionInMarketResponseAmino;
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponseSDKType {
  state?: PositionSDKType | undefined;
}
export interface EffectivePosition {
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  effectiveMargin: string;
}
export interface EffectivePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EffectivePosition";
  value: Uint8Array;
}
export interface EffectivePositionAmino {
  is_long?: boolean;
  quantity?: string;
  entry_price?: string;
  effective_margin?: string;
}
export interface EffectivePositionAminoMsg {
  type: "/injective.exchange.v1beta1.EffectivePosition";
  value: EffectivePositionAmino;
}
export interface EffectivePositionSDKType {
  is_long: boolean;
  quantity: string;
  entry_price: string;
  effective_margin: string;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponse {
  state?: EffectivePosition | undefined;
}
export interface QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
  value: Uint8Array;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponseAmino {
  state?: EffectivePositionAmino | undefined;
}
export interface QuerySubaccountEffectivePositionInMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
  value: QuerySubaccountEffectivePositionInMarketResponseAmino;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponseSDKType {
  state?: EffectivePositionSDKType | undefined;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequest {
  marketId: string;
}
export interface QueryPerpetualMarketInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
  value: Uint8Array;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequestAmino {
  market_id?: string;
}
export interface QueryPerpetualMarketInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
  value: QueryPerpetualMarketInfoRequestAmino;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequestSDKType {
  market_id: string;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponse {
  info: PerpetualMarketInfo | undefined;
}
export interface QueryPerpetualMarketInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
  value: Uint8Array;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponseAmino {
  info?: PerpetualMarketInfoAmino | undefined;
}
export interface QueryPerpetualMarketInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
  value: QueryPerpetualMarketInfoResponseAmino;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponseSDKType {
  info: PerpetualMarketInfoSDKType | undefined;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequest {
  marketId: string;
}
export interface QueryExpiryFuturesMarketInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
  value: Uint8Array;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequestAmino {
  market_id?: string;
}
export interface QueryExpiryFuturesMarketInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
  value: QueryExpiryFuturesMarketInfoRequestAmino;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequestSDKType {
  market_id: string;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponse {
  info: ExpiryFuturesMarketInfo | undefined;
}
export interface QueryExpiryFuturesMarketInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
  value: Uint8Array;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponseAmino {
  info?: ExpiryFuturesMarketInfoAmino | undefined;
}
export interface QueryExpiryFuturesMarketInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
  value: QueryExpiryFuturesMarketInfoResponseAmino;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponseSDKType {
  info: ExpiryFuturesMarketInfoSDKType | undefined;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequest {
  marketId: string;
}
export interface QueryPerpetualMarketFundingRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
  value: Uint8Array;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequestAmino {
  market_id?: string;
}
export interface QueryPerpetualMarketFundingRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
  value: QueryPerpetualMarketFundingRequestAmino;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequestSDKType {
  market_id: string;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponse {
  state: PerpetualMarketFunding | undefined;
}
export interface QueryPerpetualMarketFundingResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
  value: Uint8Array;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponseAmino {
  state?: PerpetualMarketFundingAmino | undefined;
}
export interface QueryPerpetualMarketFundingResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
  value: QueryPerpetualMarketFundingResponseAmino;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponseSDKType {
  state: PerpetualMarketFundingSDKType | undefined;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponse {
  metadata: SubaccountOrderbookMetadataWithMarket[];
}
export interface QuerySubaccountOrderMetadataResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
  value: Uint8Array;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponseAmino {
  metadata?: SubaccountOrderbookMetadataWithMarketAmino[];
}
export interface QuerySubaccountOrderMetadataResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
  value: QuerySubaccountOrderMetadataResponseAmino;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponseSDKType {
  metadata: SubaccountOrderbookMetadataWithMarketSDKType[];
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponse {
  nonce: number;
}
export interface QuerySubaccountTradeNonceResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
  value: Uint8Array;
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponseAmino {
  nonce?: number;
}
export interface QuerySubaccountTradeNonceResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
  value: QuerySubaccountTradeNonceResponseAmino;
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponseSDKType {
  nonce: number;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponse {
  state?: GenesisState | undefined;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino | undefined;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType | undefined;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {}
export interface QueryPositionsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest";
  value: Uint8Array;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestAmino {}
export interface QueryPositionsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPositionsRequest";
  value: QueryPositionsRequestAmino;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestSDKType {}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponse {
  state: DerivativePosition[];
}
export interface QueryPositionsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse";
  value: Uint8Array;
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponseAmino {
  state?: DerivativePositionAmino[];
}
export interface QueryPositionsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPositionsResponse";
  value: QueryPositionsResponseAmino;
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponseSDKType {
  state: DerivativePositionSDKType[];
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequest {
  accounts: string[];
  pendingPoolTimestamp: bigint;
}
export interface QueryTradeRewardPointsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
  value: Uint8Array;
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequestAmino {
  accounts?: string[];
  pending_pool_timestamp?: string;
}
export interface QueryTradeRewardPointsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
  value: QueryTradeRewardPointsRequestAmino;
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequestSDKType {
  accounts: string[];
  pending_pool_timestamp: bigint;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponse {
  accountTradeRewardPoints: string[];
}
export interface QueryTradeRewardPointsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
  value: Uint8Array;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponseAmino {
  account_trade_reward_points?: string[];
}
export interface QueryTradeRewardPointsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
  value: QueryTradeRewardPointsResponseAmino;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponseSDKType {
  account_trade_reward_points: string[];
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequest {}
export interface QueryTradeRewardCampaignRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
  value: Uint8Array;
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequestAmino {}
export interface QueryTradeRewardCampaignRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
  value: QueryTradeRewardCampaignRequestAmino;
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequestSDKType {}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponse {
  tradingRewardCampaignInfo?: TradingRewardCampaignInfo | undefined;
  tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  totalTradeRewardPoints: string;
  pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  pendingTotalTradeRewardPoints: string[];
}
export interface QueryTradeRewardCampaignResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
  value: Uint8Array;
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponseAmino {
  trading_reward_campaign_info?: TradingRewardCampaignInfoAmino | undefined;
  trading_reward_pool_campaign_schedule?: CampaignRewardPoolAmino[];
  total_trade_reward_points?: string;
  pending_trading_reward_pool_campaign_schedule?: CampaignRewardPoolAmino[];
  pending_total_trade_reward_points?: string[];
}
export interface QueryTradeRewardCampaignResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
  value: QueryTradeRewardCampaignResponseAmino;
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponseSDKType {
  trading_reward_campaign_info?: TradingRewardCampaignInfoSDKType | undefined;
  trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
  total_trade_reward_points: string;
  pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
  pending_total_trade_reward_points: string[];
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequest {
  account: string;
}
export interface QueryIsOptedOutOfRewardsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
  value: Uint8Array;
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequestAmino {
  account?: string;
}
export interface QueryIsOptedOutOfRewardsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
  value: QueryIsOptedOutOfRewardsRequestAmino;
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequestSDKType {
  account: string;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponse {
  isOptedOut: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
  value: Uint8Array;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponseAmino {
  is_opted_out?: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
  value: QueryIsOptedOutOfRewardsResponseAmino;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponseSDKType {
  is_opted_out: boolean;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequest {}
export interface QueryOptedOutOfRewardsAccountsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
  value: Uint8Array;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequestAmino {}
export interface QueryOptedOutOfRewardsAccountsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
  value: QueryOptedOutOfRewardsAccountsRequestAmino;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequestSDKType {}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponse {
  accounts: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
  value: Uint8Array;
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponseAmino {
  accounts?: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
  value: QueryOptedOutOfRewardsAccountsResponseAmino;
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponseSDKType {
  accounts: string[];
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequest {
  account: string;
}
export interface QueryFeeDiscountAccountInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
  value: Uint8Array;
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequestAmino {
  account?: string;
}
export interface QueryFeeDiscountAccountInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
  value: QueryFeeDiscountAccountInfoRequestAmino;
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequestSDKType {
  account: string;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponse {
  tierLevel: bigint;
  accountInfo?: FeeDiscountTierInfo | undefined;
  accountTtl?: FeeDiscountTierTTL | undefined;
}
export interface QueryFeeDiscountAccountInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
  value: Uint8Array;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponseAmino {
  tier_level?: string;
  account_info?: FeeDiscountTierInfoAmino | undefined;
  account_ttl?: FeeDiscountTierTTLAmino | undefined;
}
export interface QueryFeeDiscountAccountInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
  value: QueryFeeDiscountAccountInfoResponseAmino;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponseSDKType {
  tier_level: bigint;
  account_info?: FeeDiscountTierInfoSDKType | undefined;
  account_ttl?: FeeDiscountTierTTLSDKType | undefined;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequest {}
export interface QueryFeeDiscountScheduleRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
  value: Uint8Array;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequestAmino {}
export interface QueryFeeDiscountScheduleRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
  value: QueryFeeDiscountScheduleRequestAmino;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequestSDKType {}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponse {
  feeDiscountSchedule?: FeeDiscountSchedule | undefined;
}
export interface QueryFeeDiscountScheduleResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
  value: Uint8Array;
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponseAmino {
  fee_discount_schedule?: FeeDiscountScheduleAmino | undefined;
}
export interface QueryFeeDiscountScheduleResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
  value: QueryFeeDiscountScheduleResponseAmino;
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponseSDKType {
  fee_discount_schedule?: FeeDiscountScheduleSDKType | undefined;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequest {
  dustFactor: bigint;
}
export interface QueryBalanceMismatchesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
  value: Uint8Array;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequestAmino {
  dust_factor?: string;
}
export interface QueryBalanceMismatchesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
  value: QueryBalanceMismatchesRequestAmino;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequestSDKType {
  dust_factor: bigint;
}
export interface BalanceMismatch {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balanceHold: string;
  expectedTotal: string;
  difference: string;
}
export interface BalanceMismatchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BalanceMismatch";
  value: Uint8Array;
}
export interface BalanceMismatchAmino {
  subaccountId?: string;
  denom?: string;
  available?: string;
  total?: string;
  balance_hold?: string;
  expected_total?: string;
  difference?: string;
}
export interface BalanceMismatchAminoMsg {
  type: "/injective.exchange.v1beta1.BalanceMismatch";
  value: BalanceMismatchAmino;
}
export interface BalanceMismatchSDKType {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balance_hold: string;
  expected_total: string;
  difference: string;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponse {
  balanceMismatches: BalanceMismatch[];
}
export interface QueryBalanceMismatchesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
  value: Uint8Array;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponseAmino {
  balance_mismatches?: BalanceMismatchAmino[];
}
export interface QueryBalanceMismatchesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
  value: QueryBalanceMismatchesResponseAmino;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponseSDKType {
  balance_mismatches: BalanceMismatchSDKType[];
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequest {}
export interface QueryBalanceWithBalanceHoldsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
  value: Uint8Array;
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequestAmino {}
export interface QueryBalanceWithBalanceHoldsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
  value: QueryBalanceWithBalanceHoldsRequestAmino;
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequestSDKType {}
export interface BalanceWithMarginHold {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balanceHold: string;
}
export interface BalanceWithMarginHoldProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold";
  value: Uint8Array;
}
export interface BalanceWithMarginHoldAmino {
  subaccountId?: string;
  denom?: string;
  available?: string;
  total?: string;
  balance_hold?: string;
}
export interface BalanceWithMarginHoldAminoMsg {
  type: "/injective.exchange.v1beta1.BalanceWithMarginHold";
  value: BalanceWithMarginHoldAmino;
}
export interface BalanceWithMarginHoldSDKType {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balance_hold: string;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponse {
  balanceWithBalanceHolds: BalanceWithMarginHold[];
}
export interface QueryBalanceWithBalanceHoldsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
  value: Uint8Array;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponseAmino {
  balance_with_balance_holds?: BalanceWithMarginHoldAmino[];
}
export interface QueryBalanceWithBalanceHoldsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
  value: QueryBalanceWithBalanceHoldsResponseAmino;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponseSDKType {
  balance_with_balance_holds: BalanceWithMarginHoldSDKType[];
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequest {}
export interface QueryFeeDiscountTierStatisticsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
  value: Uint8Array;
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequestAmino {}
export interface QueryFeeDiscountTierStatisticsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
  value: QueryFeeDiscountTierStatisticsRequestAmino;
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {}
export interface TierStatistic {
  tier: bigint;
  count: bigint;
}
export interface TierStatisticProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TierStatistic";
  value: Uint8Array;
}
export interface TierStatisticAmino {
  tier?: string;
  count?: string;
}
export interface TierStatisticAminoMsg {
  type: "/injective.exchange.v1beta1.TierStatistic";
  value: TierStatisticAmino;
}
export interface TierStatisticSDKType {
  tier: bigint;
  count: bigint;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponse {
  statistics: TierStatistic[];
}
export interface QueryFeeDiscountTierStatisticsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
  value: Uint8Array;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponseAmino {
  statistics?: TierStatisticAmino[];
}
export interface QueryFeeDiscountTierStatisticsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
  value: QueryFeeDiscountTierStatisticsResponseAmino;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponseSDKType {
  statistics: TierStatisticSDKType[];
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequest {}
export interface NinjaVaultInfosRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest";
  value: Uint8Array;
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequestAmino {}
export interface NinjaVaultInfosRequestAminoMsg {
  type: "/injective.exchange.v1beta1.NinjaVaultInfosRequest";
  value: NinjaVaultInfosRequestAmino;
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequestSDKType {}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponse {
  masterAddresses: string[];
  derivativeAddresses: string[];
  spotAddresses: string[];
  cw20Addresses: string[];
}
export interface NinjaVaultInfosResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse";
  value: Uint8Array;
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponseAmino {
  master_addresses?: string[];
  derivative_addresses?: string[];
  spot_addresses?: string[];
  cw20_addresses?: string[];
}
export interface NinjaVaultInfosResponseAminoMsg {
  type: "/injective.exchange.v1beta1.NinjaVaultInfosResponse";
  value: NinjaVaultInfosResponseAmino;
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponseSDKType {
  master_addresses: string[];
  derivative_addresses: string[];
  spot_addresses: string[];
  cw20_addresses: string[];
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequest {
  vaultSubaccountId: string;
}
export interface QueryMarketIDFromVaultRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
  value: Uint8Array;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestAmino {
  vault_subaccount_id?: string;
}
export interface QueryMarketIDFromVaultRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
  value: QueryMarketIDFromVaultRequestAmino;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestSDKType {
  vault_subaccount_id: string;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponse {
  marketId: string;
}
export interface QueryMarketIDFromVaultResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
  value: Uint8Array;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponseAmino {
  market_id?: string;
}
export interface QueryMarketIDFromVaultResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
  value: QueryMarketIDFromVaultResponseAmino;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponseSDKType {
  market_id: string;
}
export interface QueryHistoricalTradeRecordsRequest {
  marketId: string;
}
export interface QueryHistoricalTradeRecordsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
  value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsRequestAmino {
  market_id?: string;
}
export interface QueryHistoricalTradeRecordsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
  value: QueryHistoricalTradeRecordsRequestAmino;
}
export interface QueryHistoricalTradeRecordsRequestSDKType {
  market_id: string;
}
export interface QueryHistoricalTradeRecordsResponse {
  tradeRecords: TradeRecords[];
}
export interface QueryHistoricalTradeRecordsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
  value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsResponseAmino {
  trade_records?: TradeRecordsAmino[];
}
export interface QueryHistoricalTradeRecordsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
  value: QueryHistoricalTradeRecordsResponseAmino;
}
export interface QueryHistoricalTradeRecordsResponseSDKType {
  trade_records: TradeRecordsSDKType[];
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptions {
  /** TradeGroupingSec of 0 means use the chain's default grouping */
  tradeGroupingSec: bigint;
  /**
   * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
   * A value of 0 means use all the records present on the chain.
   */
  maxAge: bigint;
  /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
  includeRawHistory: boolean;
  /** If IncludeMetadata is true, metadata on the computation is included in the response */
  includeMetadata: boolean;
}
export interface TradeHistoryOptionsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions";
  value: Uint8Array;
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptionsAmino {
  /** TradeGroupingSec of 0 means use the chain's default grouping */
  trade_grouping_sec?: string;
  /**
   * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
   * A value of 0 means use all the records present on the chain.
   */
  max_age?: string;
  /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
  include_raw_history?: boolean;
  /** If IncludeMetadata is true, metadata on the computation is included in the response */
  include_metadata?: boolean;
}
export interface TradeHistoryOptionsAminoMsg {
  type: "/injective.exchange.v1beta1.TradeHistoryOptions";
  value: TradeHistoryOptionsAmino;
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptionsSDKType {
  trade_grouping_sec: bigint;
  max_age: bigint;
  include_raw_history: boolean;
  include_metadata: boolean;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequest {
  marketId: string;
  tradeHistoryOptions?: TradeHistoryOptions | undefined;
}
export interface QueryMarketVolatilityRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
  value: Uint8Array;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequestAmino {
  market_id?: string;
  trade_history_options?: TradeHistoryOptionsAmino | undefined;
}
export interface QueryMarketVolatilityRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
  value: QueryMarketVolatilityRequestAmino;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequestSDKType {
  market_id: string;
  trade_history_options?: TradeHistoryOptionsSDKType | undefined;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponse {
  volatility: string;
  historyMetadata?: MetadataStatistics | undefined;
  rawHistory: TradeRecord[];
}
export interface QueryMarketVolatilityResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
  value: Uint8Array;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponseAmino {
  volatility?: string;
  history_metadata?: MetadataStatisticsAmino | undefined;
  raw_history?: TradeRecordAmino[];
}
export interface QueryMarketVolatilityResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
  value: QueryMarketVolatilityResponseAmino;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponseSDKType {
  volatility: string;
  history_metadata?: MetadataStatisticsSDKType | undefined;
  raw_history: TradeRecordSDKType[];
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
}
export interface QueryBinaryMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
  value: Uint8Array;
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status?: string;
}
export interface QueryBinaryMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
  value: QueryBinaryMarketsRequestAmino;
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequestSDKType {
  status: string;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponse {
  markets: BinaryOptionsMarket[];
}
export interface QueryBinaryMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
  value: Uint8Array;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponseAmino {
  markets?: BinaryOptionsMarketAmino[];
}
export interface QueryBinaryMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
  value: QueryBinaryMarketsResponseAmino;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponseSDKType {
  markets: BinaryOptionsMarketSDKType[];
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequest {
  subaccountId: string;
  marketId: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
  value: Uint8Array;
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequestAmino {
  subaccount_id?: string;
  market_id?: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
  value: QueryTraderDerivativeConditionalOrdersRequestAmino;
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequestSDKType {
  subaccount_id: string;
  market_id: string;
}
export interface TrimmedDerivativeConditionalOrder {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** margin of the order */
  margin: string;
  /** price to trigger the order */
  triggerPrice: string;
  /** true if the order is a buy */
  isBuy: boolean;
  isLimit: boolean;
  orderHash: string;
}
export interface TrimmedDerivativeConditionalOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
  value: Uint8Array;
}
export interface TrimmedDerivativeConditionalOrderAmino {
  /** price of the order */
  price?: string;
  /** quantity of the order */
  quantity?: string;
  /** margin of the order */
  margin?: string;
  /** price to trigger the order */
  triggerPrice?: string;
  /** true if the order is a buy */
  isBuy: boolean;
  isLimit: boolean;
  order_hash?: string;
}
export interface TrimmedDerivativeConditionalOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
  value: TrimmedDerivativeConditionalOrderAmino;
}
export interface TrimmedDerivativeConditionalOrderSDKType {
  price: string;
  quantity: string;
  margin: string;
  triggerPrice: string;
  isBuy: boolean;
  isLimit: boolean;
  order_hash: string;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponse {
  orders: TrimmedDerivativeConditionalOrder[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
  value: Uint8Array;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponseAmino {
  orders?: TrimmedDerivativeConditionalOrderAmino[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
  value: QueryTraderDerivativeConditionalOrdersResponseAmino;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponseSDKType {
  orders: TrimmedDerivativeConditionalOrderSDKType[];
}
function createBaseSubaccount(): Subaccount {
  return {
    trader: "",
    subaccountNonce: 0
  };
}
export const Subaccount = {
  typeUrl: "/injective.exchange.v1beta1.Subaccount",
  encode(message: Subaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    if (message.subaccountNonce !== 0) {
      writer.uint32(16).uint32(message.subaccountNonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Subaccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trader = reader.string();
          break;
        case 2:
          message.subaccountNonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Subaccount {
    return {
      trader: isSet(object.trader) ? String(object.trader) : "",
      subaccountNonce: isSet(object.subaccountNonce) ? Number(object.subaccountNonce) : 0
    };
  },
  toJSON(message: Subaccount): JsonSafe<Subaccount> {
    const obj: any = {};
    message.trader !== undefined && (obj.trader = message.trader);
    message.subaccountNonce !== undefined && (obj.subaccountNonce = Math.round(message.subaccountNonce));
    return obj;
  },
  fromPartial(object: DeepPartial<Subaccount>): Subaccount {
    const message = createBaseSubaccount();
    message.trader = object.trader ?? "";
    message.subaccountNonce = object.subaccountNonce ?? 0;
    return message;
  },
  fromSDK(object: SubaccountSDKType): Subaccount {
    return {
      trader: object?.trader,
      subaccountNonce: object?.subaccount_nonce
    };
  },
  toSDK(message: Subaccount): SubaccountSDKType {
    const obj: any = {};
    obj.trader = message.trader;
    obj.subaccount_nonce = message.subaccountNonce;
    return obj;
  },
  fromAmino(object: SubaccountAmino): Subaccount {
    const message = createBaseSubaccount();
    if (object.trader !== undefined && object.trader !== null) {
      message.trader = object.trader;
    }
    if (object.subaccount_nonce !== undefined && object.subaccount_nonce !== null) {
      message.subaccountNonce = object.subaccount_nonce;
    }
    return message;
  },
  toAmino(message: Subaccount): SubaccountAmino {
    const obj: any = {};
    obj.trader = message.trader === "" ? undefined : message.trader;
    obj.subaccount_nonce = message.subaccountNonce === 0 ? undefined : message.subaccountNonce;
    return obj;
  },
  fromAminoMsg(object: SubaccountAminoMsg): Subaccount {
    return Subaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountProtoMsg): Subaccount {
    return Subaccount.decode(message.value);
  },
  toProto(message: Subaccount): Uint8Array {
    return Subaccount.encode(message).finish();
  },
  toProtoMsg(message: Subaccount): SubaccountProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Subaccount",
      value: Subaccount.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrdersRequest(): QuerySubaccountOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
  encode(message: QuerySubaccountOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountOrdersRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QuerySubaccountOrdersRequest): JsonSafe<QuerySubaccountOrdersRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest {
    const message = createBaseQuerySubaccountOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountOrdersRequestSDKType): QuerySubaccountOrdersRequest {
    return {
      subaccountId: object?.subaccount_id,
      marketId: object?.market_id
    };
  },
  toSDK(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QuerySubaccountOrdersRequestAmino): QuerySubaccountOrdersRequest {
    const message = createBaseQuerySubaccountOrdersRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrdersRequestAminoMsg): QuerySubaccountOrdersRequest {
    return QuerySubaccountOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrdersRequestProtoMsg): QuerySubaccountOrdersRequest {
    return QuerySubaccountOrdersRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountOrdersRequest): Uint8Array {
    return QuerySubaccountOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
      value: QuerySubaccountOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrdersResponse(): QuerySubaccountOrdersResponse {
  return {
    buyOrders: [],
    sellOrders: []
  };
}
export const QuerySubaccountOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
  encode(message: QuerySubaccountOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buyOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sellOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountOrdersResponse {
    return {
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => SubaccountOrderData.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SubaccountOrderData.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySubaccountOrdersResponse): JsonSafe<QuerySubaccountOrdersResponse> {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? SubaccountOrderData.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SubaccountOrderData.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse {
    const message = createBaseQuerySubaccountOrdersResponse();
    message.buyOrders = object.buyOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySubaccountOrdersResponseSDKType): QuerySubaccountOrdersResponse {
    return {
      buyOrders: Array.isArray(object?.buy_orders) ? object.buy_orders.map((e: any) => SubaccountOrderData.fromSDK(e)) : [],
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SubaccountOrderData.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseSDKType {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? SubaccountOrderData.toSDK(e) : undefined);
    } else {
      obj.buy_orders = [];
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SubaccountOrderData.toSDK(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    return obj;
  },
  fromAmino(object: QuerySubaccountOrdersResponseAmino): QuerySubaccountOrdersResponse {
    const message = createBaseQuerySubaccountOrdersResponse();
    message.buyOrders = object.buy_orders?.map(e => SubaccountOrderData.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => SubaccountOrderData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseAmino {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrdersResponseAminoMsg): QuerySubaccountOrdersResponse {
    return QuerySubaccountOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrdersResponseProtoMsg): QuerySubaccountOrdersResponse {
    return QuerySubaccountOrdersResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountOrdersResponse): Uint8Array {
    return QuerySubaccountOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
      value: QuerySubaccountOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseSubaccountOrderbookMetadataWithMarket(): SubaccountOrderbookMetadataWithMarket {
  return {
    metadata: undefined,
    marketId: "",
    isBuy: false
  };
}
export const SubaccountOrderbookMetadataWithMarket = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
  encode(message: SubaccountOrderbookMetadataWithMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(24).bool(message.isBuy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountOrderbookMetadataWithMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = SubaccountOrderbookMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.isBuy = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubaccountOrderbookMetadataWithMarket {
    return {
      metadata: isSet(object.metadata) ? SubaccountOrderbookMetadata.fromJSON(object.metadata) : undefined,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false
    };
  },
  toJSON(message: SubaccountOrderbookMetadataWithMarket): JsonSafe<SubaccountOrderbookMetadataWithMarket> {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toJSON(message.metadata) : undefined);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.isBuy !== undefined && (obj.isBuy = message.isBuy);
    return obj;
  },
  fromPartial(object: DeepPartial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket {
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? SubaccountOrderbookMetadata.fromPartial(object.metadata) : undefined;
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  },
  fromSDK(object: SubaccountOrderbookMetadataWithMarketSDKType): SubaccountOrderbookMetadataWithMarket {
    return {
      metadata: object.metadata ? SubaccountOrderbookMetadata.fromSDK(object.metadata) : undefined,
      marketId: object?.market_id,
      isBuy: object?.isBuy
    };
  },
  toSDK(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketSDKType {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toSDK(message.metadata) : undefined);
    obj.market_id = message.marketId;
    obj.isBuy = message.isBuy;
    return obj;
  },
  fromAmino(object: SubaccountOrderbookMetadataWithMarketAmino): SubaccountOrderbookMetadataWithMarket {
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = SubaccountOrderbookMetadata.fromAmino(object.metadata);
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    return message;
  },
  toAmino(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toAmino(message.metadata) : undefined;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderbookMetadataWithMarketAminoMsg): SubaccountOrderbookMetadataWithMarket {
    return SubaccountOrderbookMetadataWithMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderbookMetadataWithMarketProtoMsg): SubaccountOrderbookMetadataWithMarket {
    return SubaccountOrderbookMetadataWithMarket.decode(message.value);
  },
  toProto(message: SubaccountOrderbookMetadataWithMarket): Uint8Array {
    return SubaccountOrderbookMetadataWithMarket.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
      value: SubaccountOrderbookMetadataWithMarket.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeParamsRequest(): QueryExchangeParamsRequest {
  return {};
}
export const QueryExchangeParamsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
  encode(_: QueryExchangeParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeParamsRequest();
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
  fromJSON(_: any): QueryExchangeParamsRequest {
    return {};
  },
  toJSON(_: QueryExchangeParamsRequest): JsonSafe<QueryExchangeParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  },
  fromSDK(_: QueryExchangeParamsRequestSDKType): QueryExchangeParamsRequest {
    return {};
  },
  toSDK(_: QueryExchangeParamsRequest): QueryExchangeParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryExchangeParamsRequestAmino): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  },
  toAmino(_: QueryExchangeParamsRequest): QueryExchangeParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeParamsRequestAminoMsg): QueryExchangeParamsRequest {
    return QueryExchangeParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeParamsRequestProtoMsg): QueryExchangeParamsRequest {
    return QueryExchangeParamsRequest.decode(message.value);
  },
  toProto(message: QueryExchangeParamsRequest): Uint8Array {
    return QueryExchangeParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeParamsRequest): QueryExchangeParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
      value: QueryExchangeParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeParamsResponse(): QueryExchangeParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryExchangeParamsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
  encode(message: QueryExchangeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeParamsResponse();
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
  fromJSON(object: any): QueryExchangeParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryExchangeParamsResponse): JsonSafe<QueryExchangeParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse {
    const message = createBaseQueryExchangeParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryExchangeParamsResponseSDKType): QueryExchangeParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryExchangeParamsResponseAmino): QueryExchangeParamsResponse {
    const message = createBaseQueryExchangeParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeParamsResponseAminoMsg): QueryExchangeParamsResponse {
    return QueryExchangeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeParamsResponseProtoMsg): QueryExchangeParamsResponse {
    return QueryExchangeParamsResponse.decode(message.value);
  },
  toProto(message: QueryExchangeParamsResponse): Uint8Array {
    return QueryExchangeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
      value: QueryExchangeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositsRequest(): QuerySubaccountDepositsRequest {
  return {
    subaccountId: "",
    subaccount: undefined
  };
}
export const QuerySubaccountDepositsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
  encode(message: QuerySubaccountDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.subaccount !== undefined) {
      Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.subaccount = Subaccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountDepositsRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      subaccount: isSet(object.subaccount) ? Subaccount.fromJSON(object.subaccount) : undefined
    };
  },
  toJSON(message: QuerySubaccountDepositsRequest): JsonSafe<QuerySubaccountDepositsRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.subaccount !== undefined && (obj.subaccount = message.subaccount ? Subaccount.toJSON(message.subaccount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest {
    const message = createBaseQuerySubaccountDepositsRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? Subaccount.fromPartial(object.subaccount) : undefined;
    return message;
  },
  fromSDK(object: QuerySubaccountDepositsRequestSDKType): QuerySubaccountDepositsRequest {
    return {
      subaccountId: object?.subaccount_id,
      subaccount: object.subaccount ? Subaccount.fromSDK(object.subaccount) : undefined
    };
  },
  toSDK(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    message.subaccount !== undefined && (obj.subaccount = message.subaccount ? Subaccount.toSDK(message.subaccount) : undefined);
    return obj;
  },
  fromAmino(object: QuerySubaccountDepositsRequestAmino): QuerySubaccountDepositsRequest {
    const message = createBaseQuerySubaccountDepositsRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.subaccount !== undefined && object.subaccount !== null) {
      message.subaccount = Subaccount.fromAmino(object.subaccount);
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.subaccount = message.subaccount ? Subaccount.toAmino(message.subaccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsRequestAminoMsg): QuerySubaccountDepositsRequest {
    return QuerySubaccountDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsRequestProtoMsg): QuerySubaccountDepositsRequest {
    return QuerySubaccountDepositsRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsRequest): Uint8Array {
    return QuerySubaccountDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
      value: QuerySubaccountDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry(): QuerySubaccountDepositsResponse_DepositsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const QuerySubaccountDepositsResponse_DepositsEntry = {
  encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsResponse_DepositsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountDepositsResponse_DepositsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Deposit.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: QuerySubaccountDepositsResponse_DepositsEntry): JsonSafe<QuerySubaccountDepositsResponse_DepositsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Deposit.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry {
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Deposit.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: QuerySubaccountDepositsResponse_DepositsEntrySDKType): QuerySubaccountDepositsResponse_DepositsEntry {
    return {
      key: object?.key,
      value: object.value ? Deposit.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: QuerySubaccountDepositsResponse_DepositsEntry): QuerySubaccountDepositsResponse_DepositsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Deposit.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: QuerySubaccountDepositsResponse_DepositsEntryAmino): QuerySubaccountDepositsResponse_DepositsEntry {
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Deposit.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositsResponse_DepositsEntry): QuerySubaccountDepositsResponse_DepositsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? Deposit.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): QuerySubaccountDepositsResponse_DepositsEntry {
    return QuerySubaccountDepositsResponse_DepositsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): QuerySubaccountDepositsResponse_DepositsEntry {
    return QuerySubaccountDepositsResponse_DepositsEntry.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array {
    return QuerySubaccountDepositsResponse_DepositsEntry.encode(message).finish();
  }
};
function createBaseQuerySubaccountDepositsResponse(): QuerySubaccountDepositsResponse {
  return {
    deposits: {}
  };
}
export const QuerySubaccountDepositsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
  encode(message: QuerySubaccountDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.deposits).forEach(([key, value]) => {
      QuerySubaccountDepositsResponse_DepositsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.deposits[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountDepositsResponse {
    return {
      deposits: isObject(object.deposits) ? Object.entries(object.deposits).reduce<{
        [key: string]: Deposit;
      }>((acc, [key, value]) => {
        acc[key] = Deposit.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: QuerySubaccountDepositsResponse): JsonSafe<QuerySubaccountDepositsResponse> {
    const obj: any = {};
    obj.deposits = {};
    if (message.deposits) {
      Object.entries(message.deposits).forEach(([k, v]) => {
        obj.deposits[k] = Deposit.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse {
    const message = createBaseQuerySubaccountDepositsResponse();
    message.deposits = Object.entries(object.deposits ?? {}).reduce<{
      [key: string]: Deposit;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Deposit.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: QuerySubaccountDepositsResponseSDKType): QuerySubaccountDepositsResponse {
    return {
      deposits: isObject(object.deposits) ? Object.entries(object.deposits).reduce<{
        [key: string]: Deposit;
      }>((acc, [key, value]) => {
        acc[key] = Deposit.fromSDK(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseSDKType {
    const obj: any = {};
    obj.deposits = {};
    if (message.deposits) {
      Object.entries(message.deposits).forEach(([k, v]) => {
        obj.deposits[k] = Deposit.toSDK(v);
      });
    }
    return obj;
  },
  fromAmino(object: QuerySubaccountDepositsResponseAmino): QuerySubaccountDepositsResponse {
    const message = createBaseQuerySubaccountDepositsResponse();
    message.deposits = Object.entries(object.deposits ?? {}).reduce<{
      [key: string]: Deposit;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Deposit.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseAmino {
    const obj: any = {};
    obj.deposits = {};
    if (message.deposits) {
      Object.entries(message.deposits).forEach(([k, v]) => {
        obj.deposits[k] = Deposit.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsResponseAminoMsg): QuerySubaccountDepositsResponse {
    return QuerySubaccountDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsResponseProtoMsg): QuerySubaccountDepositsResponse {
    return QuerySubaccountDepositsResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsResponse): Uint8Array {
    return QuerySubaccountDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
      value: QuerySubaccountDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeBalancesRequest(): QueryExchangeBalancesRequest {
  return {};
}
export const QueryExchangeBalancesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
  encode(_: QueryExchangeBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeBalancesRequest();
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
  fromJSON(_: any): QueryExchangeBalancesRequest {
    return {};
  },
  toJSON(_: QueryExchangeBalancesRequest): JsonSafe<QueryExchangeBalancesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  },
  fromSDK(_: QueryExchangeBalancesRequestSDKType): QueryExchangeBalancesRequest {
    return {};
  },
  toSDK(_: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryExchangeBalancesRequestAmino): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  },
  toAmino(_: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeBalancesRequestAminoMsg): QueryExchangeBalancesRequest {
    return QueryExchangeBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeBalancesRequestProtoMsg): QueryExchangeBalancesRequest {
    return QueryExchangeBalancesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeBalancesRequest): Uint8Array {
    return QueryExchangeBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
      value: QueryExchangeBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeBalancesResponse(): QueryExchangeBalancesResponse {
  return {
    balances: []
  };
}
export const QueryExchangeBalancesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
  encode(message: QueryExchangeBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExchangeBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryExchangeBalancesResponse): JsonSafe<QueryExchangeBalancesResponse> {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse {
    const message = createBaseQueryExchangeBalancesResponse();
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryExchangeBalancesResponseSDKType): QueryExchangeBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseSDKType {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toSDK(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromAmino(object: QueryExchangeBalancesResponseAmino): QueryExchangeBalancesResponse {
    const message = createBaseQueryExchangeBalancesResponse();
    message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeBalancesResponseAminoMsg): QueryExchangeBalancesResponse {
    return QueryExchangeBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeBalancesResponseProtoMsg): QueryExchangeBalancesResponse {
    return QueryExchangeBalancesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeBalancesResponse): Uint8Array {
    return QueryExchangeBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
      value: QueryExchangeBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositRequest(): QuerySubaccountDepositRequest {
  return {
    subaccountId: "",
    denom: ""
  };
}
export const QuerySubaccountDepositRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
  encode(message: QuerySubaccountDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
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
  fromJSON(object: any): QuerySubaccountDepositRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QuerySubaccountDepositRequest): JsonSafe<QuerySubaccountDepositRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest {
    const message = createBaseQuerySubaccountDepositRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountDepositRequestSDKType): QuerySubaccountDepositRequest {
    return {
      subaccountId: object?.subaccount_id,
      denom: object?.denom
    };
  },
  toSDK(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: QuerySubaccountDepositRequestAmino): QuerySubaccountDepositRequest {
    const message = createBaseQuerySubaccountDepositRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositRequestAminoMsg): QuerySubaccountDepositRequest {
    return QuerySubaccountDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositRequestProtoMsg): QuerySubaccountDepositRequest {
    return QuerySubaccountDepositRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositRequest): Uint8Array {
    return QuerySubaccountDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
      value: QuerySubaccountDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositResponse(): QuerySubaccountDepositResponse {
  return {
    deposits: undefined
  };
}
export const QuerySubaccountDepositResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
  encode(message: QuerySubaccountDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountDepositResponse {
    return {
      deposits: isSet(object.deposits) ? Deposit.fromJSON(object.deposits) : undefined
    };
  },
  toJSON(message: QuerySubaccountDepositResponse): JsonSafe<QuerySubaccountDepositResponse> {
    const obj: any = {};
    message.deposits !== undefined && (obj.deposits = message.deposits ? Deposit.toJSON(message.deposits) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse {
    const message = createBaseQuerySubaccountDepositResponse();
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  },
  fromSDK(object: QuerySubaccountDepositResponseSDKType): QuerySubaccountDepositResponse {
    return {
      deposits: object.deposits ? Deposit.fromSDK(object.deposits) : undefined
    };
  },
  toSDK(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseSDKType {
    const obj: any = {};
    message.deposits !== undefined && (obj.deposits = message.deposits ? Deposit.toSDK(message.deposits) : undefined);
    return obj;
  },
  fromAmino(object: QuerySubaccountDepositResponseAmino): QuerySubaccountDepositResponse {
    const message = createBaseQuerySubaccountDepositResponse();
    if (object.deposits !== undefined && object.deposits !== null) {
      message.deposits = Deposit.fromAmino(object.deposits);
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseAmino {
    const obj: any = {};
    obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositResponseAminoMsg): QuerySubaccountDepositResponse {
    return QuerySubaccountDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositResponseProtoMsg): QuerySubaccountDepositResponse {
    return QuerySubaccountDepositResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositResponse): Uint8Array {
    return QuerySubaccountDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
      value: QuerySubaccountDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketsRequest(): QuerySpotMarketsRequest {
  return {
    status: ""
  };
}
export const QuerySpotMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
  encode(message: QuerySpotMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  toJSON(message: QuerySpotMarketsRequest): JsonSafe<QuerySpotMarketsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest {
    const message = createBaseQuerySpotMarketsRequest();
    message.status = object.status ?? "";
    return message;
  },
  fromSDK(object: QuerySpotMarketsRequestSDKType): QuerySpotMarketsRequest {
    return {
      status: object?.status
    };
  },
  toSDK(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestSDKType {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAmino(object: QuerySpotMarketsRequestAmino): QuerySpotMarketsRequest {
    const message = createBaseQuerySpotMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketsRequestAminoMsg): QuerySpotMarketsRequest {
    return QuerySpotMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketsRequestProtoMsg): QuerySpotMarketsRequest {
    return QuerySpotMarketsRequest.decode(message.value);
  },
  toProto(message: QuerySpotMarketsRequest): Uint8Array {
    return QuerySpotMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
      value: QuerySpotMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketsResponse(): QuerySpotMarketsResponse {
  return {
    markets: []
  };
}
export const QuerySpotMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
  encode(message: QuerySpotMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      SpotMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(SpotMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => SpotMarket.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySpotMarketsResponse): JsonSafe<QuerySpotMarketsResponse> {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? SpotMarket.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse {
    const message = createBaseQuerySpotMarketsResponse();
    message.markets = object.markets?.map(e => SpotMarket.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySpotMarketsResponseSDKType): QuerySpotMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => SpotMarket.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseSDKType {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? SpotMarket.toSDK(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAmino(object: QuerySpotMarketsResponseAmino): QuerySpotMarketsResponse {
    const message = createBaseQuerySpotMarketsResponse();
    message.markets = object.markets?.map(e => SpotMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? SpotMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketsResponseAminoMsg): QuerySpotMarketsResponse {
    return QuerySpotMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketsResponseProtoMsg): QuerySpotMarketsResponse {
    return QuerySpotMarketsResponse.decode(message.value);
  },
  toProto(message: QuerySpotMarketsResponse): Uint8Array {
    return QuerySpotMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
      value: QuerySpotMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketRequest(): QuerySpotMarketRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
  encode(message: QuerySpotMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QuerySpotMarketRequest): JsonSafe<QuerySpotMarketRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketRequest>): QuerySpotMarketRequest {
    const message = createBaseQuerySpotMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QuerySpotMarketRequestSDKType): QuerySpotMarketRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QuerySpotMarketRequest): QuerySpotMarketRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QuerySpotMarketRequestAmino): QuerySpotMarketRequest {
    const message = createBaseQuerySpotMarketRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySpotMarketRequest): QuerySpotMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketRequestAminoMsg): QuerySpotMarketRequest {
    return QuerySpotMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketRequestProtoMsg): QuerySpotMarketRequest {
    return QuerySpotMarketRequest.decode(message.value);
  },
  toProto(message: QuerySpotMarketRequest): Uint8Array {
    return QuerySpotMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketRequest): QuerySpotMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
      value: QuerySpotMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketResponse(): QuerySpotMarketResponse {
  return {
    market: undefined
  };
}
export const QuerySpotMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
  encode(message: QuerySpotMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = SpotMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotMarketResponse {
    return {
      market: isSet(object.market) ? SpotMarket.fromJSON(object.market) : undefined
    };
  },
  toJSON(message: QuerySpotMarketResponse): JsonSafe<QuerySpotMarketResponse> {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? SpotMarket.toJSON(message.market) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketResponse>): QuerySpotMarketResponse {
    const message = createBaseQuerySpotMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromSDK(object: QuerySpotMarketResponseSDKType): QuerySpotMarketResponse {
    return {
      market: object.market ? SpotMarket.fromSDK(object.market) : undefined
    };
  },
  toSDK(message: QuerySpotMarketResponse): QuerySpotMarketResponseSDKType {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? SpotMarket.toSDK(message.market) : undefined);
    return obj;
  },
  fromAmino(object: QuerySpotMarketResponseAmino): QuerySpotMarketResponse {
    const message = createBaseQuerySpotMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = SpotMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QuerySpotMarketResponse): QuerySpotMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketResponseAminoMsg): QuerySpotMarketResponse {
    return QuerySpotMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketResponseProtoMsg): QuerySpotMarketResponse {
    return QuerySpotMarketResponse.decode(message.value);
  },
  toProto(message: QuerySpotMarketResponse): Uint8Array {
    return QuerySpotMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketResponse): QuerySpotMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
      value: QuerySpotMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrderbookRequest(): QuerySpotOrderbookRequest {
  return {
    marketId: "",
    limit: BigInt(0)
  };
}
export const QuerySpotOrderbookRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
  encode(message: QuerySpotOrderbookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrderbookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrderbookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotOrderbookRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySpotOrderbookRequest): JsonSafe<QuerySpotOrderbookRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QuerySpotOrderbookRequestSDKType): QuerySpotOrderbookRequest {
    return {
      marketId: object?.market_id,
      limit: object?.limit
    };
  },
  toSDK(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.limit = message.limit;
    return obj;
  },
  fromAmino(object: QuerySpotOrderbookRequestAmino): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    return message;
  },
  toAmino(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.limit = message.limit !== BigInt(0) ? message.limit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrderbookRequestAminoMsg): QuerySpotOrderbookRequest {
    return QuerySpotOrderbookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrderbookRequestProtoMsg): QuerySpotOrderbookRequest {
    return QuerySpotOrderbookRequest.decode(message.value);
  },
  toProto(message: QuerySpotOrderbookRequest): Uint8Array {
    return QuerySpotOrderbookRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
      value: QuerySpotOrderbookRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrderbookResponse(): QuerySpotOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QuerySpotOrderbookResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
  encode(message: QuerySpotOrderbookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buysPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellsPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrderbookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrderbookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buysPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sellsPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buysPriceLevel) ? object.buysPriceLevel.map((e: any) => PriceLevel.fromJSON(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sellsPriceLevel) ? object.sellsPriceLevel.map((e: any) => PriceLevel.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySpotOrderbookResponse): JsonSafe<QuerySpotOrderbookResponse> {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buysPriceLevel = message.buysPriceLevel.map(e => e ? PriceLevel.toJSON(e) : undefined);
    } else {
      obj.buysPriceLevel = [];
    }
    if (message.sellsPriceLevel) {
      obj.sellsPriceLevel = message.sellsPriceLevel.map(e => e ? PriceLevel.toJSON(e) : undefined);
    } else {
      obj.sellsPriceLevel = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse {
    const message = createBaseQuerySpotOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySpotOrderbookResponseSDKType): QuerySpotOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buys_price_level) ? object.buys_price_level.map((e: any) => PriceLevel.fromSDK(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sells_price_level) ? object.sells_price_level.map((e: any) => PriceLevel.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseSDKType {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? PriceLevel.toSDK(e) : undefined);
    } else {
      obj.buys_price_level = [];
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? PriceLevel.toSDK(e) : undefined);
    } else {
      obj.sells_price_level = [];
    }
    return obj;
  },
  fromAmino(object: QuerySpotOrderbookResponseAmino): QuerySpotOrderbookResponse {
    const message = createBaseQuerySpotOrderbookResponse();
    message.buysPriceLevel = object.buys_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
    message.sellsPriceLevel = object.sells_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseAmino {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
    } else {
      obj.buys_price_level = message.buysPriceLevel;
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
    } else {
      obj.sells_price_level = message.sellsPriceLevel;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrderbookResponseAminoMsg): QuerySpotOrderbookResponse {
    return QuerySpotOrderbookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrderbookResponseProtoMsg): QuerySpotOrderbookResponse {
    return QuerySpotOrderbookResponse.decode(message.value);
  },
  toProto(message: QuerySpotOrderbookResponse): Uint8Array {
    return QuerySpotOrderbookResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
      value: QuerySpotOrderbookResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrdersByHashesRequest(): QuerySpotOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}
export const QuerySpotOrdersByHashesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
  encode(message: QuerySpotOrdersByHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrdersByHashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrdersByHashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.orderHashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotOrdersByHashesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHashes: Array.isArray(object?.orderHashes) ? object.orderHashes.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QuerySpotOrdersByHashesRequest): JsonSafe<QuerySpotOrdersByHashesRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    if (message.orderHashes) {
      obj.orderHashes = message.orderHashes.map(e => e);
    } else {
      obj.orderHashes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest {
    const message = createBaseQuerySpotOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QuerySpotOrdersByHashesRequestSDKType): QuerySpotOrdersByHashesRequest {
    return {
      marketId: object?.market_id,
      subaccountId: object?.subaccount_id,
      orderHashes: Array.isArray(object?.order_hashes) ? object.order_hashes.map((e: any) => e) : []
    };
  },
  toSDK(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = [];
    }
    return obj;
  },
  fromAmino(object: QuerySpotOrdersByHashesRequestAmino): QuerySpotOrdersByHashesRequest {
    const message = createBaseQuerySpotOrdersByHashesRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.orderHashes = object.order_hashes?.map(e => e) || [];
    return message;
  },
  toAmino(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = message.orderHashes;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrdersByHashesRequestAminoMsg): QuerySpotOrdersByHashesRequest {
    return QuerySpotOrdersByHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrdersByHashesRequestProtoMsg): QuerySpotOrdersByHashesRequest {
    return QuerySpotOrdersByHashesRequest.decode(message.value);
  },
  toProto(message: QuerySpotOrdersByHashesRequest): Uint8Array {
    return QuerySpotOrdersByHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
      value: QuerySpotOrdersByHashesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrdersByHashesResponse(): QuerySpotOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QuerySpotOrdersByHashesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
  encode(message: QuerySpotOrdersByHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrdersByHashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrdersByHashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySpotOrdersByHashesResponse): JsonSafe<QuerySpotOrdersByHashesResponse> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse {
    const message = createBaseQuerySpotOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySpotOrdersByHashesResponseSDKType): QuerySpotOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAmino(object: QuerySpotOrdersByHashesResponseAmino): QuerySpotOrdersByHashesResponse {
    const message = createBaseQuerySpotOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrdersByHashesResponseAminoMsg): QuerySpotOrdersByHashesResponse {
    return QuerySpotOrdersByHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrdersByHashesResponseProtoMsg): QuerySpotOrdersByHashesResponse {
    return QuerySpotOrdersByHashesResponse.decode(message.value);
  },
  toProto(message: QuerySpotOrdersByHashesResponse): Uint8Array {
    return QuerySpotOrdersByHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
      value: QuerySpotOrdersByHashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraderSpotOrdersRequest(): QueryTraderSpotOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderSpotOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
  encode(message: QueryTraderSpotOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderSpotOrdersRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  toJSON(message: QueryTraderSpotOrdersRequest): JsonSafe<QueryTraderSpotOrdersRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest {
    const message = createBaseQueryTraderSpotOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromSDK(object: QueryTraderSpotOrdersRequestSDKType): QueryTraderSpotOrdersRequest {
    return {
      marketId: object?.market_id,
      subaccountId: object?.subaccount_id
    };
  },
  toSDK(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAmino(object: QueryTraderSpotOrdersRequestAmino): QueryTraderSpotOrdersRequest {
    const message = createBaseQueryTraderSpotOrdersRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersRequestAminoMsg): QueryTraderSpotOrdersRequest {
    return QueryTraderSpotOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersRequestProtoMsg): QueryTraderSpotOrdersRequest {
    return QueryTraderSpotOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersRequest): Uint8Array {
    return QueryTraderSpotOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
      value: QueryTraderSpotOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseTrimmedSpotLimitOrder(): TrimmedSpotLimitOrder {
  return {
    price: "",
    quantity: "",
    fillable: "",
    isBuy: false,
    orderHash: ""
  };
}
export const TrimmedSpotLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
  encode(message: TrimmedSpotLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fillable, 18).atomics);
    }
    if (message.isBuy === true) {
      writer.uint32(32).bool(message.isBuy);
    }
    if (message.orderHash !== "") {
      writer.uint32(42).string(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrimmedSpotLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedSpotLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.isBuy = reader.bool();
          break;
        case 5:
          message.orderHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrimmedSpotLimitOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      fillable: isSet(object.fillable) ? String(object.fillable) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  toJSON(message: TrimmedSpotLimitOrder): JsonSafe<TrimmedSpotLimitOrder> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.fillable !== undefined && (obj.fillable = message.fillable);
    message.isBuy !== undefined && (obj.isBuy = message.isBuy);
    message.orderHash !== undefined && (obj.orderHash = message.orderHash);
    return obj;
  },
  fromPartial(object: DeepPartial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder {
    const message = createBaseTrimmedSpotLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  },
  fromSDK(object: TrimmedSpotLimitOrderSDKType): TrimmedSpotLimitOrder {
    return {
      price: object?.price,
      quantity: object?.quantity,
      fillable: object?.fillable,
      isBuy: object?.isBuy,
      orderHash: object?.order_hash
    };
  },
  toSDK(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderSDKType {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.fillable = message.fillable;
    obj.isBuy = message.isBuy;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAmino(object: TrimmedSpotLimitOrderAmino): TrimmedSpotLimitOrder {
    const message = createBaseTrimmedSpotLimitOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.fillable !== undefined && object.fillable !== null) {
      message.fillable = object.fillable;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    return message;
  },
  toAmino(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.fillable = message.fillable === "" ? undefined : message.fillable;
    obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    return obj;
  },
  fromAminoMsg(object: TrimmedSpotLimitOrderAminoMsg): TrimmedSpotLimitOrder {
    return TrimmedSpotLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedSpotLimitOrderProtoMsg): TrimmedSpotLimitOrder {
    return TrimmedSpotLimitOrder.decode(message.value);
  },
  toProto(message: TrimmedSpotLimitOrder): Uint8Array {
    return TrimmedSpotLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
      value: TrimmedSpotLimitOrder.encode(message).finish()
    };
  }
};
function createBaseQueryTraderSpotOrdersResponse(): QueryTraderSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderSpotOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
  encode(message: QueryTraderSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderSpotOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTraderSpotOrdersResponse): JsonSafe<QueryTraderSpotOrdersResponse> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse {
    const message = createBaseQueryTraderSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTraderSpotOrdersResponseSDKType): QueryTraderSpotOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAmino(object: QueryTraderSpotOrdersResponseAmino): QueryTraderSpotOrdersResponse {
    const message = createBaseQueryTraderSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersResponseAminoMsg): QueryTraderSpotOrdersResponse {
    return QueryTraderSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersResponseProtoMsg): QueryTraderSpotOrdersResponse {
    return QueryTraderSpotOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersResponse): Uint8Array {
    return QueryTraderSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
      value: QueryTraderSpotOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMidPriceAndTOBRequest(): QuerySpotMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMidPriceAndTOBRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
  encode(message: QuerySpotMidPriceAndTOBRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotMidPriceAndTOBRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QuerySpotMidPriceAndTOBRequest): JsonSafe<QuerySpotMidPriceAndTOBRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest {
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QuerySpotMidPriceAndTOBRequestSDKType): QuerySpotMidPriceAndTOBRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QuerySpotMidPriceAndTOBRequestAmino): QuerySpotMidPriceAndTOBRequest {
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMidPriceAndTOBRequestAminoMsg): QuerySpotMidPriceAndTOBRequest {
    return QuerySpotMidPriceAndTOBRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMidPriceAndTOBRequestProtoMsg): QuerySpotMidPriceAndTOBRequest {
    return QuerySpotMidPriceAndTOBRequest.decode(message.value);
  },
  toProto(message: QuerySpotMidPriceAndTOBRequest): Uint8Array {
    return QuerySpotMidPriceAndTOBRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
      value: QuerySpotMidPriceAndTOBRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMidPriceAndTOBResponse(): QuerySpotMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const QuerySpotMidPriceAndTOBResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
  encode(message: QuerySpotMidPriceAndTOBResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.midPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.bestBuyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bestSellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotMidPriceAndTOBResponse {
    return {
      midPrice: isSet(object.midPrice) ? String(object.midPrice) : undefined,
      bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : undefined,
      bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : undefined
    };
  },
  toJSON(message: QuerySpotMidPriceAndTOBResponse): JsonSafe<QuerySpotMidPriceAndTOBResponse> {
    const obj: any = {};
    message.midPrice !== undefined && (obj.midPrice = message.midPrice);
    message.bestBuyPrice !== undefined && (obj.bestBuyPrice = message.bestBuyPrice);
    message.bestSellPrice !== undefined && (obj.bestSellPrice = message.bestSellPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse {
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  },
  fromSDK(object: QuerySpotMidPriceAndTOBResponseSDKType): QuerySpotMidPriceAndTOBResponse {
    return {
      midPrice: object?.mid_price,
      bestBuyPrice: object?.best_buy_price,
      bestSellPrice: object?.best_sell_price
    };
  },
  toSDK(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseSDKType {
    const obj: any = {};
    obj.mid_price = message.midPrice;
    obj.best_buy_price = message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice;
    return obj;
  },
  fromAmino(object: QuerySpotMidPriceAndTOBResponseAmino): QuerySpotMidPriceAndTOBResponse {
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    if (object.mid_price !== undefined && object.mid_price !== null) {
      message.midPrice = object.mid_price;
    }
    if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
      message.bestBuyPrice = object.best_buy_price;
    }
    if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
      message.bestSellPrice = object.best_sell_price;
    }
    return message;
  },
  toAmino(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice === null ? undefined : message.midPrice;
    obj.best_buy_price = message.bestBuyPrice === null ? undefined : message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice === null ? undefined : message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMidPriceAndTOBResponseAminoMsg): QuerySpotMidPriceAndTOBResponse {
    return QuerySpotMidPriceAndTOBResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMidPriceAndTOBResponseProtoMsg): QuerySpotMidPriceAndTOBResponse {
    return QuerySpotMidPriceAndTOBResponse.decode(message.value);
  },
  toProto(message: QuerySpotMidPriceAndTOBResponse): Uint8Array {
    return QuerySpotMidPriceAndTOBResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
      value: QuerySpotMidPriceAndTOBResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMidPriceAndTOBRequest(): QueryDerivativeMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMidPriceAndTOBRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
  encode(message: QueryDerivativeMidPriceAndTOBRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMidPriceAndTOBRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryDerivativeMidPriceAndTOBRequest): JsonSafe<QueryDerivativeMidPriceAndTOBRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest {
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryDerivativeMidPriceAndTOBRequestSDKType): QueryDerivativeMidPriceAndTOBRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryDerivativeMidPriceAndTOBRequestAmino): QueryDerivativeMidPriceAndTOBRequest {
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMidPriceAndTOBRequestAminoMsg): QueryDerivativeMidPriceAndTOBRequest {
    return QueryDerivativeMidPriceAndTOBRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMidPriceAndTOBRequestProtoMsg): QueryDerivativeMidPriceAndTOBRequest {
    return QueryDerivativeMidPriceAndTOBRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMidPriceAndTOBRequest): Uint8Array {
    return QueryDerivativeMidPriceAndTOBRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
      value: QueryDerivativeMidPriceAndTOBRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMidPriceAndTOBResponse(): QueryDerivativeMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const QueryDerivativeMidPriceAndTOBResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
  encode(message: QueryDerivativeMidPriceAndTOBResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.midPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.bestBuyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bestSellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMidPriceAndTOBResponse {
    return {
      midPrice: isSet(object.midPrice) ? String(object.midPrice) : undefined,
      bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : undefined,
      bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : undefined
    };
  },
  toJSON(message: QueryDerivativeMidPriceAndTOBResponse): JsonSafe<QueryDerivativeMidPriceAndTOBResponse> {
    const obj: any = {};
    message.midPrice !== undefined && (obj.midPrice = message.midPrice);
    message.bestBuyPrice !== undefined && (obj.bestBuyPrice = message.bestBuyPrice);
    message.bestSellPrice !== undefined && (obj.bestSellPrice = message.bestSellPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse {
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  },
  fromSDK(object: QueryDerivativeMidPriceAndTOBResponseSDKType): QueryDerivativeMidPriceAndTOBResponse {
    return {
      midPrice: object?.mid_price,
      bestBuyPrice: object?.best_buy_price,
      bestSellPrice: object?.best_sell_price
    };
  },
  toSDK(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseSDKType {
    const obj: any = {};
    obj.mid_price = message.midPrice;
    obj.best_buy_price = message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice;
    return obj;
  },
  fromAmino(object: QueryDerivativeMidPriceAndTOBResponseAmino): QueryDerivativeMidPriceAndTOBResponse {
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    if (object.mid_price !== undefined && object.mid_price !== null) {
      message.midPrice = object.mid_price;
    }
    if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
      message.bestBuyPrice = object.best_buy_price;
    }
    if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
      message.bestSellPrice = object.best_sell_price;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice === null ? undefined : message.midPrice;
    obj.best_buy_price = message.bestBuyPrice === null ? undefined : message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice === null ? undefined : message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMidPriceAndTOBResponseAminoMsg): QueryDerivativeMidPriceAndTOBResponse {
    return QueryDerivativeMidPriceAndTOBResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMidPriceAndTOBResponseProtoMsg): QueryDerivativeMidPriceAndTOBResponse {
    return QueryDerivativeMidPriceAndTOBResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMidPriceAndTOBResponse): Uint8Array {
    return QueryDerivativeMidPriceAndTOBResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
      value: QueryDerivativeMidPriceAndTOBResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrderbookRequest(): QueryDerivativeOrderbookRequest {
  return {
    marketId: "",
    limit: BigInt(0)
  };
}
export const QueryDerivativeOrderbookRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
  encode(message: QueryDerivativeOrderbookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrderbookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrderbookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeOrderbookRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryDerivativeOrderbookRequest): JsonSafe<QueryDerivativeOrderbookRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryDerivativeOrderbookRequestSDKType): QueryDerivativeOrderbookRequest {
    return {
      marketId: object?.market_id,
      limit: object?.limit
    };
  },
  toSDK(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.limit = message.limit;
    return obj;
  },
  fromAmino(object: QueryDerivativeOrderbookRequestAmino): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    return message;
  },
  toAmino(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.limit = message.limit !== BigInt(0) ? message.limit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrderbookRequestAminoMsg): QueryDerivativeOrderbookRequest {
    return QueryDerivativeOrderbookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrderbookRequestProtoMsg): QueryDerivativeOrderbookRequest {
    return QueryDerivativeOrderbookRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeOrderbookRequest): Uint8Array {
    return QueryDerivativeOrderbookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
      value: QueryDerivativeOrderbookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrderbookResponse(): QueryDerivativeOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QueryDerivativeOrderbookResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
  encode(message: QueryDerivativeOrderbookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buysPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellsPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrderbookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrderbookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buysPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sellsPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buysPriceLevel) ? object.buysPriceLevel.map((e: any) => PriceLevel.fromJSON(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sellsPriceLevel) ? object.sellsPriceLevel.map((e: any) => PriceLevel.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDerivativeOrderbookResponse): JsonSafe<QueryDerivativeOrderbookResponse> {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buysPriceLevel = message.buysPriceLevel.map(e => e ? PriceLevel.toJSON(e) : undefined);
    } else {
      obj.buysPriceLevel = [];
    }
    if (message.sellsPriceLevel) {
      obj.sellsPriceLevel = message.sellsPriceLevel.map(e => e ? PriceLevel.toJSON(e) : undefined);
    } else {
      obj.sellsPriceLevel = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse {
    const message = createBaseQueryDerivativeOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryDerivativeOrderbookResponseSDKType): QueryDerivativeOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buys_price_level) ? object.buys_price_level.map((e: any) => PriceLevel.fromSDK(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sells_price_level) ? object.sells_price_level.map((e: any) => PriceLevel.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseSDKType {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? PriceLevel.toSDK(e) : undefined);
    } else {
      obj.buys_price_level = [];
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? PriceLevel.toSDK(e) : undefined);
    } else {
      obj.sells_price_level = [];
    }
    return obj;
  },
  fromAmino(object: QueryDerivativeOrderbookResponseAmino): QueryDerivativeOrderbookResponse {
    const message = createBaseQueryDerivativeOrderbookResponse();
    message.buysPriceLevel = object.buys_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
    message.sellsPriceLevel = object.sells_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseAmino {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
    } else {
      obj.buys_price_level = message.buysPriceLevel;
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
    } else {
      obj.sells_price_level = message.sellsPriceLevel;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrderbookResponseAminoMsg): QueryDerivativeOrderbookResponse {
    return QueryDerivativeOrderbookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrderbookResponseProtoMsg): QueryDerivativeOrderbookResponse {
    return QueryDerivativeOrderbookResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeOrderbookResponse): Uint8Array {
    return QueryDerivativeOrderbookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
      value: QueryDerivativeOrderbookResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest(): QueryTraderSpotOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    baseAmount: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}
export const QueryTraderSpotOrdersToCancelUpToAmountRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
  encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.baseAmount, 18).atomics);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quoteAmount, 18).atomics);
    }
    if (message.strategy !== 0) {
      writer.uint32(40).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.baseAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.quoteAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.strategy = (reader.int32() as any);
          break;
        case 6:
          message.referencePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
      referencePrice: isSet(object.referencePrice) ? String(object.referencePrice) : undefined
    };
  },
  toJSON(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): JsonSafe<QueryTraderSpotOrdersToCancelUpToAmountRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    message.strategy !== undefined && (obj.strategy = cancellationStrategyToJSON(message.strategy));
    message.referencePrice !== undefined && (obj.referencePrice = message.referencePrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  },
  fromSDK(object: QueryTraderSpotOrdersToCancelUpToAmountRequestSDKType): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return {
      marketId: object?.market_id,
      subaccountId: object?.subaccount_id,
      baseAmount: object?.base_amount,
      quoteAmount: object?.quote_amount,
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
      referencePrice: object?.reference_price
    };
  },
  toSDK(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.base_amount = message.baseAmount;
    obj.quote_amount = message.quoteAmount;
    message.strategy !== undefined && (obj.strategy = cancellationStrategyToJSON(message.strategy));
    obj.reference_price = message.referencePrice;
    return obj;
  },
  fromAmino(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.base_amount !== undefined && object.base_amount !== null) {
      message.baseAmount = object.base_amount;
    }
    if (object.quote_amount !== undefined && object.quote_amount !== null) {
      message.quoteAmount = object.quote_amount;
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    }
    if (object.reference_price !== undefined && object.reference_price !== null) {
      message.referencePrice = object.reference_price;
    }
    return message;
  },
  toAmino(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.base_amount = message.baseAmount === "" ? undefined : message.baseAmount;
    obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.strategy = message.strategy === 0 ? undefined : message.strategy;
    obj.reference_price = message.referencePrice === null ? undefined : message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
      value: QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest(): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}
export const QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
  encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.quoteAmount, 18).atomics);
    }
    if (message.strategy !== 0) {
      writer.uint32(32).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.quoteAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.strategy = (reader.int32() as any);
          break;
        case 5:
          message.referencePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
      referencePrice: isSet(object.referencePrice) ? String(object.referencePrice) : undefined
    };
  },
  toJSON(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): JsonSafe<QueryTraderDerivativeOrdersToCancelUpToAmountRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    message.strategy !== undefined && (obj.strategy = cancellationStrategyToJSON(message.strategy));
    message.referencePrice !== undefined && (obj.referencePrice = message.referencePrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  },
  fromSDK(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestSDKType): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return {
      marketId: object?.market_id,
      subaccountId: object?.subaccount_id,
      quoteAmount: object?.quote_amount,
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
      referencePrice: object?.reference_price
    };
  },
  toSDK(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.quote_amount = message.quoteAmount;
    message.strategy !== undefined && (obj.strategy = cancellationStrategyToJSON(message.strategy));
    obj.reference_price = message.referencePrice;
    return obj;
  },
  fromAmino(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.quote_amount !== undefined && object.quote_amount !== null) {
      message.quoteAmount = object.quote_amount;
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    }
    if (object.reference_price !== undefined && object.reference_price !== null) {
      message.referencePrice = object.reference_price;
    }
    return message;
  },
  toAmino(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.strategy = message.strategy === 0 ? undefined : message.strategy;
    obj.reference_price = message.referencePrice === null ? undefined : message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
      value: QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeOrdersRequest(): QueryTraderDerivativeOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderDerivativeOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
  encode(message: QueryTraderDerivativeOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  toJSON(message: QueryTraderDerivativeOrdersRequest): JsonSafe<QueryTraderDerivativeOrdersRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest {
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromSDK(object: QueryTraderDerivativeOrdersRequestSDKType): QueryTraderDerivativeOrdersRequest {
    return {
      marketId: object?.market_id,
      subaccountId: object?.subaccount_id
    };
  },
  toSDK(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAmino(object: QueryTraderDerivativeOrdersRequestAmino): QueryTraderDerivativeOrdersRequest {
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersRequestAminoMsg): QueryTraderDerivativeOrdersRequest {
    return QueryTraderDerivativeOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersRequestProtoMsg): QueryTraderDerivativeOrdersRequest {
    return QueryTraderDerivativeOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersRequest): Uint8Array {
    return QueryTraderDerivativeOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
      value: QueryTraderDerivativeOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseTrimmedDerivativeLimitOrder(): TrimmedDerivativeLimitOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    fillable: "",
    isBuy: false,
    orderHash: ""
  };
}
export const TrimmedDerivativeLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
  encode(message: TrimmedDerivativeLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fillable, 18).atomics);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.orderHash !== "") {
      writer.uint32(50).string(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrimmedDerivativeLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedDerivativeLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.isBuy = reader.bool();
          break;
        case 6:
          message.orderHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrimmedDerivativeLimitOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      fillable: isSet(object.fillable) ? String(object.fillable) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  toJSON(message: TrimmedDerivativeLimitOrder): JsonSafe<TrimmedDerivativeLimitOrder> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.margin !== undefined && (obj.margin = message.margin);
    message.fillable !== undefined && (obj.fillable = message.fillable);
    message.isBuy !== undefined && (obj.isBuy = message.isBuy);
    message.orderHash !== undefined && (obj.orderHash = message.orderHash);
    return obj;
  },
  fromPartial(object: DeepPartial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder {
    const message = createBaseTrimmedDerivativeLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  },
  fromSDK(object: TrimmedDerivativeLimitOrderSDKType): TrimmedDerivativeLimitOrder {
    return {
      price: object?.price,
      quantity: object?.quantity,
      margin: object?.margin,
      fillable: object?.fillable,
      isBuy: object?.isBuy,
      orderHash: object?.order_hash
    };
  },
  toSDK(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderSDKType {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.margin = message.margin;
    obj.fillable = message.fillable;
    obj.isBuy = message.isBuy;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAmino(object: TrimmedDerivativeLimitOrderAmino): TrimmedDerivativeLimitOrder {
    const message = createBaseTrimmedDerivativeLimitOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.fillable !== undefined && object.fillable !== null) {
      message.fillable = object.fillable;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    return message;
  },
  toAmino(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.margin = message.margin === "" ? undefined : message.margin;
    obj.fillable = message.fillable === "" ? undefined : message.fillable;
    obj.isBuy = message.isBuy ?? false;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    return obj;
  },
  fromAminoMsg(object: TrimmedDerivativeLimitOrderAminoMsg): TrimmedDerivativeLimitOrder {
    return TrimmedDerivativeLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedDerivativeLimitOrderProtoMsg): TrimmedDerivativeLimitOrder {
    return TrimmedDerivativeLimitOrder.decode(message.value);
  },
  toProto(message: TrimmedDerivativeLimitOrder): Uint8Array {
    return TrimmedDerivativeLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
      value: TrimmedDerivativeLimitOrder.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeOrdersResponse(): QueryTraderDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
  encode(message: QueryTraderDerivativeOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTraderDerivativeOrdersResponse): JsonSafe<QueryTraderDerivativeOrdersResponse> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse {
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTraderDerivativeOrdersResponseSDKType): QueryTraderDerivativeOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAmino(object: QueryTraderDerivativeOrdersResponseAmino): QueryTraderDerivativeOrdersResponse {
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersResponseAminoMsg): QueryTraderDerivativeOrdersResponse {
    return QueryTraderDerivativeOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersResponseProtoMsg): QueryTraderDerivativeOrdersResponse {
    return QueryTraderDerivativeOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersResponse): Uint8Array {
    return QueryTraderDerivativeOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
      value: QueryTraderDerivativeOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrdersByHashesRequest(): QueryDerivativeOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}
export const QueryDerivativeOrdersByHashesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
  encode(message: QueryDerivativeOrdersByHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.orderHashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeOrdersByHashesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHashes: Array.isArray(object?.orderHashes) ? object.orderHashes.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryDerivativeOrdersByHashesRequest): JsonSafe<QueryDerivativeOrdersByHashesRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    if (message.orderHashes) {
      obj.orderHashes = message.orderHashes.map(e => e);
    } else {
      obj.orderHashes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest {
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryDerivativeOrdersByHashesRequestSDKType): QueryDerivativeOrdersByHashesRequest {
    return {
      marketId: object?.market_id,
      subaccountId: object?.subaccount_id,
      orderHashes: Array.isArray(object?.order_hashes) ? object.order_hashes.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = [];
    }
    return obj;
  },
  fromAmino(object: QueryDerivativeOrdersByHashesRequestAmino): QueryDerivativeOrdersByHashesRequest {
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.orderHashes = object.order_hashes?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = message.orderHashes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrdersByHashesRequestAminoMsg): QueryDerivativeOrdersByHashesRequest {
    return QueryDerivativeOrdersByHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrdersByHashesRequestProtoMsg): QueryDerivativeOrdersByHashesRequest {
    return QueryDerivativeOrdersByHashesRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeOrdersByHashesRequest): Uint8Array {
    return QueryDerivativeOrdersByHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
      value: QueryDerivativeOrdersByHashesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrdersByHashesResponse(): QueryDerivativeOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QueryDerivativeOrdersByHashesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
  encode(message: QueryDerivativeOrdersByHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDerivativeOrdersByHashesResponse): JsonSafe<QueryDerivativeOrdersByHashesResponse> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse {
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryDerivativeOrdersByHashesResponseSDKType): QueryDerivativeOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAmino(object: QueryDerivativeOrdersByHashesResponseAmino): QueryDerivativeOrdersByHashesResponse {
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrdersByHashesResponseAminoMsg): QueryDerivativeOrdersByHashesResponse {
    return QueryDerivativeOrdersByHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrdersByHashesResponseProtoMsg): QueryDerivativeOrdersByHashesResponse {
    return QueryDerivativeOrdersByHashesResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeOrdersByHashesResponse): Uint8Array {
    return QueryDerivativeOrdersByHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
      value: QueryDerivativeOrdersByHashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketsRequest(): QueryDerivativeMarketsRequest {
  return {
    status: ""
  };
}
export const QueryDerivativeMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
  encode(message: QueryDerivativeMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  toJSON(message: QueryDerivativeMarketsRequest): JsonSafe<QueryDerivativeMarketsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest {
    const message = createBaseQueryDerivativeMarketsRequest();
    message.status = object.status ?? "";
    return message;
  },
  fromSDK(object: QueryDerivativeMarketsRequestSDKType): QueryDerivativeMarketsRequest {
    return {
      status: object?.status
    };
  },
  toSDK(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestSDKType {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAmino(object: QueryDerivativeMarketsRequestAmino): QueryDerivativeMarketsRequest {
    const message = createBaseQueryDerivativeMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketsRequestAminoMsg): QueryDerivativeMarketsRequest {
    return QueryDerivativeMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketsRequestProtoMsg): QueryDerivativeMarketsRequest {
    return QueryDerivativeMarketsRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketsRequest): Uint8Array {
    return QueryDerivativeMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
      value: QueryDerivativeMarketsRequest.encode(message).finish()
    };
  }
};
function createBasePriceLevel(): PriceLevel {
  return {
    price: "",
    quantity: ""
  };
}
export const PriceLevel = {
  typeUrl: "/injective.exchange.v1beta1.PriceLevel",
  encode(message: PriceLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PriceLevel {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : ""
    };
  },
  toJSON(message: PriceLevel): JsonSafe<PriceLevel> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },
  fromPartial(object: DeepPartial<PriceLevel>): PriceLevel {
    const message = createBasePriceLevel();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  },
  fromSDK(object: PriceLevelSDKType): PriceLevel {
    return {
      price: object?.price,
      quantity: object?.quantity
    };
  },
  toSDK(message: PriceLevel): PriceLevelSDKType {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    return obj;
  },
  fromAmino(object: PriceLevelAmino): PriceLevel {
    const message = createBasePriceLevel();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    return message;
  },
  toAmino(message: PriceLevel): PriceLevelAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    return obj;
  },
  fromAminoMsg(object: PriceLevelAminoMsg): PriceLevel {
    return PriceLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceLevelProtoMsg): PriceLevel {
    return PriceLevel.decode(message.value);
  },
  toProto(message: PriceLevel): Uint8Array {
    return PriceLevel.encode(message).finish();
  },
  toProtoMsg(message: PriceLevel): PriceLevelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PriceLevel",
      value: PriceLevel.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketState(): PerpetualMarketState {
  return {
    marketInfo: undefined,
    fundingInfo: undefined
  };
}
export const PerpetualMarketState = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
  encode(message: PerpetualMarketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.fundingInfo !== undefined) {
      PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.fundingInfo = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PerpetualMarketState {
    return {
      marketInfo: isSet(object.marketInfo) ? PerpetualMarketInfo.fromJSON(object.marketInfo) : undefined,
      fundingInfo: isSet(object.fundingInfo) ? PerpetualMarketFunding.fromJSON(object.fundingInfo) : undefined
    };
  },
  toJSON(message: PerpetualMarketState): JsonSafe<PerpetualMarketState> {
    const obj: any = {};
    message.marketInfo !== undefined && (obj.marketInfo = message.marketInfo ? PerpetualMarketInfo.toJSON(message.marketInfo) : undefined);
    message.fundingInfo !== undefined && (obj.fundingInfo = message.fundingInfo ? PerpetualMarketFunding.toJSON(message.fundingInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PerpetualMarketState>): PerpetualMarketState {
    const message = createBasePerpetualMarketState();
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? PerpetualMarketInfo.fromPartial(object.marketInfo) : undefined;
    message.fundingInfo = object.fundingInfo !== undefined && object.fundingInfo !== null ? PerpetualMarketFunding.fromPartial(object.fundingInfo) : undefined;
    return message;
  },
  fromSDK(object: PerpetualMarketStateSDKType): PerpetualMarketState {
    return {
      marketInfo: object.market_info ? PerpetualMarketInfo.fromSDK(object.market_info) : undefined,
      fundingInfo: object.funding_info ? PerpetualMarketFunding.fromSDK(object.funding_info) : undefined
    };
  },
  toSDK(message: PerpetualMarketState): PerpetualMarketStateSDKType {
    const obj: any = {};
    message.marketInfo !== undefined && (obj.market_info = message.marketInfo ? PerpetualMarketInfo.toSDK(message.marketInfo) : undefined);
    message.fundingInfo !== undefined && (obj.funding_info = message.fundingInfo ? PerpetualMarketFunding.toSDK(message.fundingInfo) : undefined);
    return obj;
  },
  fromAmino(object: PerpetualMarketStateAmino): PerpetualMarketState {
    const message = createBasePerpetualMarketState();
    if (object.market_info !== undefined && object.market_info !== null) {
      message.marketInfo = PerpetualMarketInfo.fromAmino(object.market_info);
    }
    if (object.funding_info !== undefined && object.funding_info !== null) {
      message.fundingInfo = PerpetualMarketFunding.fromAmino(object.funding_info);
    }
    return message;
  },
  toAmino(message: PerpetualMarketState): PerpetualMarketStateAmino {
    const obj: any = {};
    obj.market_info = message.marketInfo ? PerpetualMarketInfo.toAmino(message.marketInfo) : undefined;
    obj.funding_info = message.fundingInfo ? PerpetualMarketFunding.toAmino(message.fundingInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketStateAminoMsg): PerpetualMarketState {
    return PerpetualMarketState.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketStateProtoMsg): PerpetualMarketState {
    return PerpetualMarketState.decode(message.value);
  },
  toProto(message: PerpetualMarketState): Uint8Array {
    return PerpetualMarketState.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketState): PerpetualMarketStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
      value: PerpetualMarketState.encode(message).finish()
    };
  }
};
function createBaseFullDerivativeMarket(): FullDerivativeMarket {
  return {
    market: undefined,
    perpetualInfo: undefined,
    futuresInfo: undefined,
    markPrice: ""
  };
}
export const FullDerivativeMarket = {
  typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
  encode(message: FullDerivativeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualInfo !== undefined) {
      PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.futuresInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.markPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.markPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullDerivativeMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullDerivativeMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;
        case 2:
          message.perpetualInfo = PerpetualMarketState.decode(reader, reader.uint32());
          break;
        case 3:
          message.futuresInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.markPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FullDerivativeMarket {
    return {
      market: isSet(object.market) ? DerivativeMarket.fromJSON(object.market) : undefined,
      perpetualInfo: isSet(object.perpetualInfo) ? PerpetualMarketState.fromJSON(object.perpetualInfo) : undefined,
      futuresInfo: isSet(object.futuresInfo) ? ExpiryFuturesMarketInfo.fromJSON(object.futuresInfo) : undefined,
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : ""
    };
  },
  toJSON(message: FullDerivativeMarket): JsonSafe<FullDerivativeMarket> {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? DerivativeMarket.toJSON(message.market) : undefined);
    message.perpetualInfo !== undefined && (obj.perpetualInfo = message.perpetualInfo ? PerpetualMarketState.toJSON(message.perpetualInfo) : undefined);
    message.futuresInfo !== undefined && (obj.futuresInfo = message.futuresInfo ? ExpiryFuturesMarketInfo.toJSON(message.futuresInfo) : undefined);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<FullDerivativeMarket>): FullDerivativeMarket {
    const message = createBaseFullDerivativeMarket();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualInfo = object.perpetualInfo !== undefined && object.perpetualInfo !== null ? PerpetualMarketState.fromPartial(object.perpetualInfo) : undefined;
    message.futuresInfo = object.futuresInfo !== undefined && object.futuresInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo) : undefined;
    message.markPrice = object.markPrice ?? "";
    return message;
  },
  fromSDK(object: FullDerivativeMarketSDKType): FullDerivativeMarket {
    return {
      market: object.market ? DerivativeMarket.fromSDK(object.market) : undefined,
      perpetualInfo: object.perpetual_info ? PerpetualMarketState.fromSDK(object.perpetual_info) : undefined,
      futuresInfo: object.futures_info ? ExpiryFuturesMarketInfo.fromSDK(object.futures_info) : undefined,
      markPrice: object?.mark_price
    };
  },
  toSDK(message: FullDerivativeMarket): FullDerivativeMarketSDKType {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? DerivativeMarket.toSDK(message.market) : undefined);
    message.perpetualInfo !== undefined && (obj.perpetual_info = message.perpetualInfo ? PerpetualMarketState.toSDK(message.perpetualInfo) : undefined);
    message.futuresInfo !== undefined && (obj.futures_info = message.futuresInfo ? ExpiryFuturesMarketInfo.toSDK(message.futuresInfo) : undefined);
    obj.mark_price = message.markPrice;
    return obj;
  },
  fromAmino(object: FullDerivativeMarketAmino): FullDerivativeMarket {
    const message = createBaseFullDerivativeMarket();
    if (object.market !== undefined && object.market !== null) {
      message.market = DerivativeMarket.fromAmino(object.market);
    }
    if (object.perpetual_info !== undefined && object.perpetual_info !== null) {
      message.perpetualInfo = PerpetualMarketState.fromAmino(object.perpetual_info);
    }
    if (object.futures_info !== undefined && object.futures_info !== null) {
      message.futuresInfo = ExpiryFuturesMarketInfo.fromAmino(object.futures_info);
    }
    if (object.mark_price !== undefined && object.mark_price !== null) {
      message.markPrice = object.mark_price;
    }
    return message;
  },
  toAmino(message: FullDerivativeMarket): FullDerivativeMarketAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.perpetual_info = message.perpetualInfo ? PerpetualMarketState.toAmino(message.perpetualInfo) : undefined;
    obj.futures_info = message.futuresInfo ? ExpiryFuturesMarketInfo.toAmino(message.futuresInfo) : undefined;
    obj.mark_price = message.markPrice === "" ? undefined : message.markPrice;
    return obj;
  },
  fromAminoMsg(object: FullDerivativeMarketAminoMsg): FullDerivativeMarket {
    return FullDerivativeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: FullDerivativeMarketProtoMsg): FullDerivativeMarket {
    return FullDerivativeMarket.decode(message.value);
  },
  toProto(message: FullDerivativeMarket): Uint8Array {
    return FullDerivativeMarket.encode(message).finish();
  },
  toProtoMsg(message: FullDerivativeMarket): FullDerivativeMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
      value: FullDerivativeMarket.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketsResponse(): QueryDerivativeMarketsResponse {
  return {
    markets: []
  };
}
export const QueryDerivativeMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
  encode(message: QueryDerivativeMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      FullDerivativeMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(FullDerivativeMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => FullDerivativeMarket.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDerivativeMarketsResponse): JsonSafe<QueryDerivativeMarketsResponse> {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullDerivativeMarket.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse {
    const message = createBaseQueryDerivativeMarketsResponse();
    message.markets = object.markets?.map(e => FullDerivativeMarket.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryDerivativeMarketsResponseSDKType): QueryDerivativeMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => FullDerivativeMarket.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseSDKType {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullDerivativeMarket.toSDK(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAmino(object: QueryDerivativeMarketsResponseAmino): QueryDerivativeMarketsResponse {
    const message = createBaseQueryDerivativeMarketsResponse();
    message.markets = object.markets?.map(e => FullDerivativeMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullDerivativeMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketsResponseAminoMsg): QueryDerivativeMarketsResponse {
    return QueryDerivativeMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketsResponseProtoMsg): QueryDerivativeMarketsResponse {
    return QueryDerivativeMarketsResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketsResponse): Uint8Array {
    return QueryDerivativeMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
      value: QueryDerivativeMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketRequest(): QueryDerivativeMarketRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
  encode(message: QueryDerivativeMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryDerivativeMarketRequest): JsonSafe<QueryDerivativeMarketRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest {
    const message = createBaseQueryDerivativeMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryDerivativeMarketRequestSDKType): QueryDerivativeMarketRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryDerivativeMarketRequestAmino): QueryDerivativeMarketRequest {
    const message = createBaseQueryDerivativeMarketRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketRequestAminoMsg): QueryDerivativeMarketRequest {
    return QueryDerivativeMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketRequestProtoMsg): QueryDerivativeMarketRequest {
    return QueryDerivativeMarketRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketRequest): Uint8Array {
    return QueryDerivativeMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
      value: QueryDerivativeMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketResponse(): QueryDerivativeMarketResponse {
  return {
    market: undefined
  };
}
export const QueryDerivativeMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
  encode(message: QueryDerivativeMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = FullDerivativeMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMarketResponse {
    return {
      market: isSet(object.market) ? FullDerivativeMarket.fromJSON(object.market) : undefined
    };
  },
  toJSON(message: QueryDerivativeMarketResponse): JsonSafe<QueryDerivativeMarketResponse> {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? FullDerivativeMarket.toJSON(message.market) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse {
    const message = createBaseQueryDerivativeMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? FullDerivativeMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromSDK(object: QueryDerivativeMarketResponseSDKType): QueryDerivativeMarketResponse {
    return {
      market: object.market ? FullDerivativeMarket.fromSDK(object.market) : undefined
    };
  },
  toSDK(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseSDKType {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? FullDerivativeMarket.toSDK(message.market) : undefined);
    return obj;
  },
  fromAmino(object: QueryDerivativeMarketResponseAmino): QueryDerivativeMarketResponse {
    const message = createBaseQueryDerivativeMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = FullDerivativeMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? FullDerivativeMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketResponseAminoMsg): QueryDerivativeMarketResponse {
    return QueryDerivativeMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketResponseProtoMsg): QueryDerivativeMarketResponse {
    return QueryDerivativeMarketResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketResponse): Uint8Array {
    return QueryDerivativeMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
      value: QueryDerivativeMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketAddressRequest(): QueryDerivativeMarketAddressRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketAddressRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
  encode(message: QueryDerivativeMarketAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMarketAddressRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryDerivativeMarketAddressRequest): JsonSafe<QueryDerivativeMarketAddressRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest {
    const message = createBaseQueryDerivativeMarketAddressRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryDerivativeMarketAddressRequestSDKType): QueryDerivativeMarketAddressRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryDerivativeMarketAddressRequestAmino): QueryDerivativeMarketAddressRequest {
    const message = createBaseQueryDerivativeMarketAddressRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketAddressRequestAminoMsg): QueryDerivativeMarketAddressRequest {
    return QueryDerivativeMarketAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketAddressRequestProtoMsg): QueryDerivativeMarketAddressRequest {
    return QueryDerivativeMarketAddressRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketAddressRequest): Uint8Array {
    return QueryDerivativeMarketAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
      value: QueryDerivativeMarketAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketAddressResponse(): QueryDerivativeMarketAddressResponse {
  return {
    address: "",
    subaccountId: ""
  };
}
export const QueryDerivativeMarketAddressResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
  encode(message: QueryDerivativeMarketAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDerivativeMarketAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  toJSON(message: QueryDerivativeMarketAddressResponse): JsonSafe<QueryDerivativeMarketAddressResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse {
    const message = createBaseQueryDerivativeMarketAddressResponse();
    message.address = object.address ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromSDK(object: QueryDerivativeMarketAddressResponseSDKType): QueryDerivativeMarketAddressResponse {
    return {
      address: object?.address,
      subaccountId: object?.subaccount_id
    };
  },
  toSDK(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAmino(object: QueryDerivativeMarketAddressResponseAmino): QueryDerivativeMarketAddressResponse {
    const message = createBaseQueryDerivativeMarketAddressResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketAddressResponseAminoMsg): QueryDerivativeMarketAddressResponse {
    return QueryDerivativeMarketAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketAddressResponseProtoMsg): QueryDerivativeMarketAddressResponse {
    return QueryDerivativeMarketAddressResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketAddressResponse): Uint8Array {
    return QueryDerivativeMarketAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
      value: QueryDerivativeMarketAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountTradeNonceRequest(): QuerySubaccountTradeNonceRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountTradeNonceRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
  encode(message: QuerySubaccountTradeNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountTradeNonceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountTradeNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountTradeNonceRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  toJSON(message: QuerySubaccountTradeNonceRequest): JsonSafe<QuerySubaccountTradeNonceRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest {
    const message = createBaseQuerySubaccountTradeNonceRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountTradeNonceRequestSDKType): QuerySubaccountTradeNonceRequest {
    return {
      subaccountId: object?.subaccount_id
    };
  },
  toSDK(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAmino(object: QuerySubaccountTradeNonceRequestAmino): QuerySubaccountTradeNonceRequest {
    const message = createBaseQuerySubaccountTradeNonceRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountTradeNonceRequestAminoMsg): QuerySubaccountTradeNonceRequest {
    return QuerySubaccountTradeNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountTradeNonceRequestProtoMsg): QuerySubaccountTradeNonceRequest {
    return QuerySubaccountTradeNonceRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountTradeNonceRequest): Uint8Array {
    return QuerySubaccountTradeNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
      value: QuerySubaccountTradeNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionsRequest(): QuerySubaccountPositionsRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountPositionsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
  encode(message: QuerySubaccountPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountPositionsRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  toJSON(message: QuerySubaccountPositionsRequest): JsonSafe<QuerySubaccountPositionsRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest {
    const message = createBaseQuerySubaccountPositionsRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountPositionsRequestSDKType): QuerySubaccountPositionsRequest {
    return {
      subaccountId: object?.subaccount_id
    };
  },
  toSDK(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAmino(object: QuerySubaccountPositionsRequestAmino): QuerySubaccountPositionsRequest {
    const message = createBaseQuerySubaccountPositionsRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionsRequestAminoMsg): QuerySubaccountPositionsRequest {
    return QuerySubaccountPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionsRequestProtoMsg): QuerySubaccountPositionsRequest {
    return QuerySubaccountPositionsRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionsRequest): Uint8Array {
    return QuerySubaccountPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
      value: QuerySubaccountPositionsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionInMarketRequest(): QuerySubaccountPositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountPositionInMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
  encode(message: QuerySubaccountPositionInMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionInMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountPositionInMarketRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QuerySubaccountPositionInMarketRequest): JsonSafe<QuerySubaccountPositionInMarketRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest {
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountPositionInMarketRequestSDKType): QuerySubaccountPositionInMarketRequest {
    return {
      subaccountId: object?.subaccount_id,
      marketId: object?.market_id
    };
  },
  toSDK(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QuerySubaccountPositionInMarketRequestAmino): QuerySubaccountPositionInMarketRequest {
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionInMarketRequestAminoMsg): QuerySubaccountPositionInMarketRequest {
    return QuerySubaccountPositionInMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionInMarketRequestProtoMsg): QuerySubaccountPositionInMarketRequest {
    return QuerySubaccountPositionInMarketRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionInMarketRequest): Uint8Array {
    return QuerySubaccountPositionInMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
      value: QuerySubaccountPositionInMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest(): QuerySubaccountEffectivePositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountEffectivePositionInMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
  encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountEffectivePositionInMarketRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QuerySubaccountEffectivePositionInMarketRequest): JsonSafe<QuerySubaccountEffectivePositionInMarketRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest {
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountEffectivePositionInMarketRequestSDKType): QuerySubaccountEffectivePositionInMarketRequest {
    return {
      subaccountId: object?.subaccount_id,
      marketId: object?.market_id
    };
  },
  toSDK(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QuerySubaccountEffectivePositionInMarketRequestAmino): QuerySubaccountEffectivePositionInMarketRequest {
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketRequestAminoMsg): QuerySubaccountEffectivePositionInMarketRequest {
    return QuerySubaccountEffectivePositionInMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequestProtoMsg): QuerySubaccountEffectivePositionInMarketRequest {
    return QuerySubaccountEffectivePositionInMarketRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountEffectivePositionInMarketRequest): Uint8Array {
    return QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
      value: QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrderMetadataRequest(): QuerySubaccountOrderMetadataRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountOrderMetadataRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
  encode(message: QuerySubaccountOrderMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrderMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountOrderMetadataRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  toJSON(message: QuerySubaccountOrderMetadataRequest): JsonSafe<QuerySubaccountOrderMetadataRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest {
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromSDK(object: QuerySubaccountOrderMetadataRequestSDKType): QuerySubaccountOrderMetadataRequest {
    return {
      subaccountId: object?.subaccount_id
    };
  },
  toSDK(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAmino(object: QuerySubaccountOrderMetadataRequestAmino): QuerySubaccountOrderMetadataRequest {
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrderMetadataRequestAminoMsg): QuerySubaccountOrderMetadataRequest {
    return QuerySubaccountOrderMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrderMetadataRequestProtoMsg): QuerySubaccountOrderMetadataRequest {
    return QuerySubaccountOrderMetadataRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountOrderMetadataRequest): Uint8Array {
    return QuerySubaccountOrderMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
      value: QuerySubaccountOrderMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionsResponse(): QuerySubaccountPositionsResponse {
  return {
    state: []
  };
}
export const QuerySubaccountPositionsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
  encode(message: QuerySubaccountPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state.push(DerivativePosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySubaccountPositionsResponse): JsonSafe<QuerySubaccountPositionsResponse> {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toJSON(e) : undefined);
    } else {
      obj.state = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse {
    const message = createBaseQuerySubaccountPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySubaccountPositionsResponseSDKType): QuerySubaccountPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseSDKType {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toSDK(e) : undefined);
    } else {
      obj.state = [];
    }
    return obj;
  },
  fromAmino(object: QuerySubaccountPositionsResponseAmino): QuerySubaccountPositionsResponse {
    const message = createBaseQuerySubaccountPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseAmino {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.state = message.state;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionsResponseAminoMsg): QuerySubaccountPositionsResponse {
    return QuerySubaccountPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionsResponseProtoMsg): QuerySubaccountPositionsResponse {
    return QuerySubaccountPositionsResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionsResponse): Uint8Array {
    return QuerySubaccountPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
      value: QuerySubaccountPositionsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionInMarketResponse(): QuerySubaccountPositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountPositionInMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
  encode(message: QuerySubaccountPositionInMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      Position.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionInMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountPositionInMarketResponse {
    return {
      state: isSet(object.state) ? Position.fromJSON(object.state) : undefined
    };
  },
  toJSON(message: QuerySubaccountPositionInMarketResponse): JsonSafe<QuerySubaccountPositionInMarketResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? Position.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse {
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? Position.fromPartial(object.state) : undefined;
    return message;
  },
  fromSDK(object: QuerySubaccountPositionInMarketResponseSDKType): QuerySubaccountPositionInMarketResponse {
    return {
      state: object.state ? Position.fromSDK(object.state) : undefined
    };
  },
  toSDK(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseSDKType {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? Position.toSDK(message.state) : undefined);
    return obj;
  },
  fromAmino(object: QuerySubaccountPositionInMarketResponseAmino): QuerySubaccountPositionInMarketResponse {
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = Position.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseAmino {
    const obj: any = {};
    obj.state = message.state ? Position.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionInMarketResponseAminoMsg): QuerySubaccountPositionInMarketResponse {
    return QuerySubaccountPositionInMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionInMarketResponseProtoMsg): QuerySubaccountPositionInMarketResponse {
    return QuerySubaccountPositionInMarketResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionInMarketResponse): Uint8Array {
    return QuerySubaccountPositionInMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
      value: QuerySubaccountPositionInMarketResponse.encode(message).finish()
    };
  }
};
function createBaseEffectivePosition(): EffectivePosition {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    effectiveMargin: ""
  };
}
export const EffectivePosition = {
  typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
  encode(message: EffectivePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.entryPrice, 18).atomics);
    }
    if (message.effectiveMargin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.effectiveMargin, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EffectivePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffectivePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isLong = reader.bool();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.entryPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.effectiveMargin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EffectivePosition {
    return {
      isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
      effectiveMargin: isSet(object.effectiveMargin) ? String(object.effectiveMargin) : ""
    };
  },
  toJSON(message: EffectivePosition): JsonSafe<EffectivePosition> {
    const obj: any = {};
    message.isLong !== undefined && (obj.isLong = message.isLong);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
    message.effectiveMargin !== undefined && (obj.effectiveMargin = message.effectiveMargin);
    return obj;
  },
  fromPartial(object: DeepPartial<EffectivePosition>): EffectivePosition {
    const message = createBaseEffectivePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.effectiveMargin = object.effectiveMargin ?? "";
    return message;
  },
  fromSDK(object: EffectivePositionSDKType): EffectivePosition {
    return {
      isLong: object?.is_long,
      quantity: object?.quantity,
      entryPrice: object?.entry_price,
      effectiveMargin: object?.effective_margin
    };
  },
  toSDK(message: EffectivePosition): EffectivePositionSDKType {
    const obj: any = {};
    obj.is_long = message.isLong;
    obj.quantity = message.quantity;
    obj.entry_price = message.entryPrice;
    obj.effective_margin = message.effectiveMargin;
    return obj;
  },
  fromAmino(object: EffectivePositionAmino): EffectivePosition {
    const message = createBaseEffectivePosition();
    if (object.is_long !== undefined && object.is_long !== null) {
      message.isLong = object.is_long;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.entry_price !== undefined && object.entry_price !== null) {
      message.entryPrice = object.entry_price;
    }
    if (object.effective_margin !== undefined && object.effective_margin !== null) {
      message.effectiveMargin = object.effective_margin;
    }
    return message;
  },
  toAmino(message: EffectivePosition): EffectivePositionAmino {
    const obj: any = {};
    obj.is_long = message.isLong === false ? undefined : message.isLong;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.entry_price = message.entryPrice === "" ? undefined : message.entryPrice;
    obj.effective_margin = message.effectiveMargin === "" ? undefined : message.effectiveMargin;
    return obj;
  },
  fromAminoMsg(object: EffectivePositionAminoMsg): EffectivePosition {
    return EffectivePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: EffectivePositionProtoMsg): EffectivePosition {
    return EffectivePosition.decode(message.value);
  },
  toProto(message: EffectivePosition): Uint8Array {
    return EffectivePosition.encode(message).finish();
  },
  toProtoMsg(message: EffectivePosition): EffectivePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
      value: EffectivePosition.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse(): QuerySubaccountEffectivePositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountEffectivePositionInMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
  encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = EffectivePosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountEffectivePositionInMarketResponse {
    return {
      state: isSet(object.state) ? EffectivePosition.fromJSON(object.state) : undefined
    };
  },
  toJSON(message: QuerySubaccountEffectivePositionInMarketResponse): JsonSafe<QuerySubaccountEffectivePositionInMarketResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? EffectivePosition.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse {
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? EffectivePosition.fromPartial(object.state) : undefined;
    return message;
  },
  fromSDK(object: QuerySubaccountEffectivePositionInMarketResponseSDKType): QuerySubaccountEffectivePositionInMarketResponse {
    return {
      state: object.state ? EffectivePosition.fromSDK(object.state) : undefined
    };
  },
  toSDK(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseSDKType {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? EffectivePosition.toSDK(message.state) : undefined);
    return obj;
  },
  fromAmino(object: QuerySubaccountEffectivePositionInMarketResponseAmino): QuerySubaccountEffectivePositionInMarketResponse {
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = EffectivePosition.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseAmino {
    const obj: any = {};
    obj.state = message.state ? EffectivePosition.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketResponseAminoMsg): QuerySubaccountEffectivePositionInMarketResponse {
    return QuerySubaccountEffectivePositionInMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponseProtoMsg): QuerySubaccountEffectivePositionInMarketResponse {
    return QuerySubaccountEffectivePositionInMarketResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountEffectivePositionInMarketResponse): Uint8Array {
    return QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
      value: QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketInfoRequest(): QueryPerpetualMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
  encode(message: QueryPerpetualMarketInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPerpetualMarketInfoRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryPerpetualMarketInfoRequest): JsonSafe<QueryPerpetualMarketInfoRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest {
    const message = createBaseQueryPerpetualMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryPerpetualMarketInfoRequestSDKType): QueryPerpetualMarketInfoRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryPerpetualMarketInfoRequestAmino): QueryPerpetualMarketInfoRequest {
    const message = createBaseQueryPerpetualMarketInfoRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketInfoRequestAminoMsg): QueryPerpetualMarketInfoRequest {
    return QueryPerpetualMarketInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketInfoRequestProtoMsg): QueryPerpetualMarketInfoRequest {
    return QueryPerpetualMarketInfoRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketInfoRequest): Uint8Array {
    return QueryPerpetualMarketInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
      value: QueryPerpetualMarketInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketInfoResponse(): QueryPerpetualMarketInfoResponse {
  return {
    info: PerpetualMarketInfo.fromPartial({})
  };
}
export const QueryPerpetualMarketInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
  encode(message: QueryPerpetualMarketInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPerpetualMarketInfoResponse {
    return {
      info: isSet(object.info) ? PerpetualMarketInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryPerpetualMarketInfoResponse): JsonSafe<QueryPerpetualMarketInfoResponse> {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? PerpetualMarketInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse {
    const message = createBaseQueryPerpetualMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? PerpetualMarketInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: QueryPerpetualMarketInfoResponseSDKType): QueryPerpetualMarketInfoResponse {
    return {
      info: object.info ? PerpetualMarketInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseSDKType {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? PerpetualMarketInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: QueryPerpetualMarketInfoResponseAmino): QueryPerpetualMarketInfoResponse {
    const message = createBaseQueryPerpetualMarketInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = PerpetualMarketInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? PerpetualMarketInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketInfoResponseAminoMsg): QueryPerpetualMarketInfoResponse {
    return QueryPerpetualMarketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketInfoResponseProtoMsg): QueryPerpetualMarketInfoResponse {
    return QueryPerpetualMarketInfoResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketInfoResponse): Uint8Array {
    return QueryPerpetualMarketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
      value: QueryPerpetualMarketInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExpiryFuturesMarketInfoRequest(): QueryExpiryFuturesMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryExpiryFuturesMarketInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
  encode(message: QueryExpiryFuturesMarketInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExpiryFuturesMarketInfoRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryExpiryFuturesMarketInfoRequest): JsonSafe<QueryExpiryFuturesMarketInfoRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest {
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryExpiryFuturesMarketInfoRequestSDKType): QueryExpiryFuturesMarketInfoRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryExpiryFuturesMarketInfoRequestAmino): QueryExpiryFuturesMarketInfoRequest {
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryExpiryFuturesMarketInfoRequestAminoMsg): QueryExpiryFuturesMarketInfoRequest {
    return QueryExpiryFuturesMarketInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExpiryFuturesMarketInfoRequestProtoMsg): QueryExpiryFuturesMarketInfoRequest {
    return QueryExpiryFuturesMarketInfoRequest.decode(message.value);
  },
  toProto(message: QueryExpiryFuturesMarketInfoRequest): Uint8Array {
    return QueryExpiryFuturesMarketInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
      value: QueryExpiryFuturesMarketInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExpiryFuturesMarketInfoResponse(): QueryExpiryFuturesMarketInfoResponse {
  return {
    info: ExpiryFuturesMarketInfo.fromPartial({})
  };
}
export const QueryExpiryFuturesMarketInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
  encode(message: QueryExpiryFuturesMarketInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExpiryFuturesMarketInfoResponse {
    return {
      info: isSet(object.info) ? ExpiryFuturesMarketInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryExpiryFuturesMarketInfoResponse): JsonSafe<QueryExpiryFuturesMarketInfoResponse> {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? ExpiryFuturesMarketInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse {
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? ExpiryFuturesMarketInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: QueryExpiryFuturesMarketInfoResponseSDKType): QueryExpiryFuturesMarketInfoResponse {
    return {
      info: object.info ? ExpiryFuturesMarketInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseSDKType {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? ExpiryFuturesMarketInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: QueryExpiryFuturesMarketInfoResponseAmino): QueryExpiryFuturesMarketInfoResponse {
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = ExpiryFuturesMarketInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? ExpiryFuturesMarketInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExpiryFuturesMarketInfoResponseAminoMsg): QueryExpiryFuturesMarketInfoResponse {
    return QueryExpiryFuturesMarketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExpiryFuturesMarketInfoResponseProtoMsg): QueryExpiryFuturesMarketInfoResponse {
    return QueryExpiryFuturesMarketInfoResponse.decode(message.value);
  },
  toProto(message: QueryExpiryFuturesMarketInfoResponse): Uint8Array {
    return QueryExpiryFuturesMarketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
      value: QueryExpiryFuturesMarketInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketFundingRequest(): QueryPerpetualMarketFundingRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketFundingRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
  encode(message: QueryPerpetualMarketFundingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketFundingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketFundingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPerpetualMarketFundingRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryPerpetualMarketFundingRequest): JsonSafe<QueryPerpetualMarketFundingRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest {
    const message = createBaseQueryPerpetualMarketFundingRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryPerpetualMarketFundingRequestSDKType): QueryPerpetualMarketFundingRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryPerpetualMarketFundingRequestAmino): QueryPerpetualMarketFundingRequest {
    const message = createBaseQueryPerpetualMarketFundingRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketFundingRequestAminoMsg): QueryPerpetualMarketFundingRequest {
    return QueryPerpetualMarketFundingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketFundingRequestProtoMsg): QueryPerpetualMarketFundingRequest {
    return QueryPerpetualMarketFundingRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketFundingRequest): Uint8Array {
    return QueryPerpetualMarketFundingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
      value: QueryPerpetualMarketFundingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketFundingResponse(): QueryPerpetualMarketFundingResponse {
  return {
    state: PerpetualMarketFunding.fromPartial({})
  };
}
export const QueryPerpetualMarketFundingResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
  encode(message: QueryPerpetualMarketFundingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketFundingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketFundingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPerpetualMarketFundingResponse {
    return {
      state: isSet(object.state) ? PerpetualMarketFunding.fromJSON(object.state) : undefined
    };
  },
  toJSON(message: QueryPerpetualMarketFundingResponse): JsonSafe<QueryPerpetualMarketFundingResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? PerpetualMarketFunding.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse {
    const message = createBaseQueryPerpetualMarketFundingResponse();
    message.state = object.state !== undefined && object.state !== null ? PerpetualMarketFunding.fromPartial(object.state) : undefined;
    return message;
  },
  fromSDK(object: QueryPerpetualMarketFundingResponseSDKType): QueryPerpetualMarketFundingResponse {
    return {
      state: object.state ? PerpetualMarketFunding.fromSDK(object.state) : undefined
    };
  },
  toSDK(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseSDKType {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? PerpetualMarketFunding.toSDK(message.state) : undefined);
    return obj;
  },
  fromAmino(object: QueryPerpetualMarketFundingResponseAmino): QueryPerpetualMarketFundingResponse {
    const message = createBaseQueryPerpetualMarketFundingResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = PerpetualMarketFunding.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseAmino {
    const obj: any = {};
    obj.state = message.state ? PerpetualMarketFunding.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketFundingResponseAminoMsg): QueryPerpetualMarketFundingResponse {
    return QueryPerpetualMarketFundingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketFundingResponseProtoMsg): QueryPerpetualMarketFundingResponse {
    return QueryPerpetualMarketFundingResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketFundingResponse): Uint8Array {
    return QueryPerpetualMarketFundingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
      value: QueryPerpetualMarketFundingResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrderMetadataResponse(): QuerySubaccountOrderMetadataResponse {
  return {
    metadata: []
  };
}
export const QuerySubaccountOrderMetadataResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
  encode(message: QuerySubaccountOrderMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metadata) {
      SubaccountOrderbookMetadataWithMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrderMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata.push(SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountOrderMetadataResponse {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => SubaccountOrderbookMetadataWithMarket.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySubaccountOrderMetadataResponse): JsonSafe<QuerySubaccountOrderMetadataResponse> {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? SubaccountOrderbookMetadataWithMarket.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse {
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySubaccountOrderMetadataResponseSDKType): QuerySubaccountOrderMetadataResponse {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => SubaccountOrderbookMetadataWithMarket.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseSDKType {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? SubaccountOrderbookMetadataWithMarket.toSDK(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAmino(object: QuerySubaccountOrderMetadataResponseAmino): QuerySubaccountOrderMetadataResponse {
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseAmino {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? SubaccountOrderbookMetadataWithMarket.toAmino(e) : undefined);
    } else {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrderMetadataResponseAminoMsg): QuerySubaccountOrderMetadataResponse {
    return QuerySubaccountOrderMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrderMetadataResponseProtoMsg): QuerySubaccountOrderMetadataResponse {
    return QuerySubaccountOrderMetadataResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountOrderMetadataResponse): Uint8Array {
    return QuerySubaccountOrderMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
      value: QuerySubaccountOrderMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountTradeNonceResponse(): QuerySubaccountTradeNonceResponse {
  return {
    nonce: 0
  };
}
export const QuerySubaccountTradeNonceResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
  encode(message: QuerySubaccountTradeNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountTradeNonceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountTradeNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubaccountTradeNonceResponse {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0
    };
  },
  toJSON(message: QuerySubaccountTradeNonceResponse): JsonSafe<QuerySubaccountTradeNonceResponse> {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse {
    const message = createBaseQuerySubaccountTradeNonceResponse();
    message.nonce = object.nonce ?? 0;
    return message;
  },
  fromSDK(object: QuerySubaccountTradeNonceResponseSDKType): QuerySubaccountTradeNonceResponse {
    return {
      nonce: object?.nonce
    };
  },
  toSDK(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseSDKType {
    const obj: any = {};
    obj.nonce = message.nonce;
    return obj;
  },
  fromAmino(object: QuerySubaccountTradeNonceResponseAmino): QuerySubaccountTradeNonceResponse {
    const message = createBaseQuerySubaccountTradeNonceResponse();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
  toAmino(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce === 0 ? undefined : message.nonce;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountTradeNonceResponseAminoMsg): QuerySubaccountTradeNonceResponse {
    return QuerySubaccountTradeNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountTradeNonceResponseProtoMsg): QuerySubaccountTradeNonceResponse {
    return QuerySubaccountTradeNonceResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountTradeNonceResponse): Uint8Array {
    return QuerySubaccountTradeNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
      value: QuerySubaccountTradeNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
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
      typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
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
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
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
      typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return {};
}
export const QueryPositionsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
  encode(_: QueryPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsRequest();
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
  fromJSON(_: any): QueryPositionsRequest {
    return {};
  },
  toJSON(_: QueryPositionsRequest): JsonSafe<QueryPositionsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryPositionsRequest>): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  },
  fromSDK(_: QueryPositionsRequestSDKType): QueryPositionsRequest {
    return {};
  },
  toSDK(_: QueryPositionsRequest): QueryPositionsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryPositionsRequestAmino): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  },
  toAmino(_: QueryPositionsRequest): QueryPositionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPositionsRequestAminoMsg): QueryPositionsRequest {
    return QueryPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionsRequestProtoMsg): QueryPositionsRequest {
    return QueryPositionsRequest.decode(message.value);
  },
  toProto(message: QueryPositionsRequest): Uint8Array {
    return QueryPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPositionsRequest): QueryPositionsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
      value: QueryPositionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return {
    state: []
  };
}
export const QueryPositionsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
  encode(message: QueryPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state.push(DerivativePosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPositionsResponse): JsonSafe<QueryPositionsResponse> {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toJSON(e) : undefined);
    } else {
      obj.state = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPositionsResponse>): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryPositionsResponseSDKType): QueryPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryPositionsResponse): QueryPositionsResponseSDKType {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toSDK(e) : undefined);
    } else {
      obj.state = [];
    }
    return obj;
  },
  fromAmino(object: QueryPositionsResponseAmino): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPositionsResponse): QueryPositionsResponseAmino {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.state = message.state;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPositionsResponseAminoMsg): QueryPositionsResponse {
    return QueryPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionsResponseProtoMsg): QueryPositionsResponse {
    return QueryPositionsResponse.decode(message.value);
  },
  toProto(message: QueryPositionsResponse): Uint8Array {
    return QueryPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPositionsResponse): QueryPositionsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
      value: QueryPositionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardPointsRequest(): QueryTradeRewardPointsRequest {
  return {
    accounts: [],
    pendingPoolTimestamp: BigInt(0)
  };
}
export const QueryTradeRewardPointsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
  encode(message: QueryTradeRewardPointsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.pendingPoolTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.pendingPoolTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardPointsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardPointsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        case 2:
          message.pendingPoolTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTradeRewardPointsRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => String(e)) : [],
      pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTradeRewardPointsRequest): JsonSafe<QueryTradeRewardPointsRequest> {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    message.pendingPoolTimestamp !== undefined && (obj.pendingPoolTimestamp = (message.pendingPoolTimestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryTradeRewardPointsRequestSDKType): QueryTradeRewardPointsRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => e) : [],
      pendingPoolTimestamp: object?.pending_pool_timestamp
    };
  },
  toSDK(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestSDKType {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    obj.pending_pool_timestamp = message.pendingPoolTimestamp;
    return obj;
  },
  fromAmino(object: QueryTradeRewardPointsRequestAmino): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    if (object.pending_pool_timestamp !== undefined && object.pending_pool_timestamp !== null) {
      message.pendingPoolTimestamp = BigInt(object.pending_pool_timestamp);
    }
    return message;
  },
  toAmino(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pending_pool_timestamp = message.pendingPoolTimestamp !== BigInt(0) ? message.pendingPoolTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardPointsRequestAminoMsg): QueryTradeRewardPointsRequest {
    return QueryTradeRewardPointsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardPointsRequestProtoMsg): QueryTradeRewardPointsRequest {
    return QueryTradeRewardPointsRequest.decode(message.value);
  },
  toProto(message: QueryTradeRewardPointsRequest): Uint8Array {
    return QueryTradeRewardPointsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
      value: QueryTradeRewardPointsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardPointsResponse(): QueryTradeRewardPointsResponse {
  return {
    accountTradeRewardPoints: []
  };
}
export const QueryTradeRewardPointsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
  encode(message: QueryTradeRewardPointsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountTradeRewardPoints) {
      writer.uint32(10).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardPointsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardPointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountTradeRewardPoints.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTradeRewardPointsResponse {
    return {
      accountTradeRewardPoints: Array.isArray(object?.accountTradeRewardPoints) ? object.accountTradeRewardPoints.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryTradeRewardPointsResponse): JsonSafe<QueryTradeRewardPointsResponse> {
    const obj: any = {};
    if (message.accountTradeRewardPoints) {
      obj.accountTradeRewardPoints = message.accountTradeRewardPoints.map(e => e);
    } else {
      obj.accountTradeRewardPoints = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse {
    const message = createBaseQueryTradeRewardPointsResponse();
    message.accountTradeRewardPoints = object.accountTradeRewardPoints?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryTradeRewardPointsResponseSDKType): QueryTradeRewardPointsResponse {
    return {
      accountTradeRewardPoints: Array.isArray(object?.account_trade_reward_points) ? object.account_trade_reward_points.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseSDKType {
    const obj: any = {};
    if (message.accountTradeRewardPoints) {
      obj.account_trade_reward_points = message.accountTradeRewardPoints.map(e => e);
    } else {
      obj.account_trade_reward_points = [];
    }
    return obj;
  },
  fromAmino(object: QueryTradeRewardPointsResponseAmino): QueryTradeRewardPointsResponse {
    const message = createBaseQueryTradeRewardPointsResponse();
    message.accountTradeRewardPoints = object.account_trade_reward_points?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseAmino {
    const obj: any = {};
    if (message.accountTradeRewardPoints) {
      obj.account_trade_reward_points = message.accountTradeRewardPoints.map(e => e);
    } else {
      obj.account_trade_reward_points = message.accountTradeRewardPoints;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardPointsResponseAminoMsg): QueryTradeRewardPointsResponse {
    return QueryTradeRewardPointsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardPointsResponseProtoMsg): QueryTradeRewardPointsResponse {
    return QueryTradeRewardPointsResponse.decode(message.value);
  },
  toProto(message: QueryTradeRewardPointsResponse): Uint8Array {
    return QueryTradeRewardPointsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
      value: QueryTradeRewardPointsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardCampaignRequest(): QueryTradeRewardCampaignRequest {
  return {};
}
export const QueryTradeRewardCampaignRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
  encode(_: QueryTradeRewardCampaignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardCampaignRequest();
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
  fromJSON(_: any): QueryTradeRewardCampaignRequest {
    return {};
  },
  toJSON(_: QueryTradeRewardCampaignRequest): JsonSafe<QueryTradeRewardCampaignRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  },
  fromSDK(_: QueryTradeRewardCampaignRequestSDKType): QueryTradeRewardCampaignRequest {
    return {};
  },
  toSDK(_: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTradeRewardCampaignRequestAmino): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  },
  toAmino(_: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardCampaignRequestAminoMsg): QueryTradeRewardCampaignRequest {
    return QueryTradeRewardCampaignRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardCampaignRequestProtoMsg): QueryTradeRewardCampaignRequest {
    return QueryTradeRewardCampaignRequest.decode(message.value);
  },
  toProto(message: QueryTradeRewardCampaignRequest): Uint8Array {
    return QueryTradeRewardCampaignRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
      value: QueryTradeRewardCampaignRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardCampaignResponse(): QueryTradeRewardCampaignResponse {
  return {
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    totalTradeRewardPoints: "",
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTotalTradeRewardPoints: []
  };
}
export const QueryTradeRewardCampaignResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
  encode(message: QueryTradeRewardCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalTradeRewardPoints !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalTradeRewardPoints, 18).atomics);
    }
    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pendingTotalTradeRewardPoints) {
      writer.uint32(42).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalTradeRewardPoints = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pendingTotalTradeRewardPoints.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTradeRewardCampaignResponse {
    return {
      tradingRewardCampaignInfo: isSet(object.tradingRewardCampaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.tradingRewardCampaignInfo) : undefined,
      tradingRewardPoolCampaignSchedule: Array.isArray(object?.tradingRewardPoolCampaignSchedule) ? object.tradingRewardPoolCampaignSchedule.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      totalTradeRewardPoints: isSet(object.totalTradeRewardPoints) ? String(object.totalTradeRewardPoints) : "",
      pendingTradingRewardPoolCampaignSchedule: Array.isArray(object?.pendingTradingRewardPoolCampaignSchedule) ? object.pendingTradingRewardPoolCampaignSchedule.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      pendingTotalTradeRewardPoints: Array.isArray(object?.pendingTotalTradeRewardPoints) ? object.pendingTotalTradeRewardPoints.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryTradeRewardCampaignResponse): JsonSafe<QueryTradeRewardCampaignResponse> {
    const obj: any = {};
    message.tradingRewardCampaignInfo !== undefined && (obj.tradingRewardCampaignInfo = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toJSON(message.tradingRewardCampaignInfo) : undefined);
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.tradingRewardPoolCampaignSchedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toJSON(e) : undefined);
    } else {
      obj.tradingRewardPoolCampaignSchedule = [];
    }
    message.totalTradeRewardPoints !== undefined && (obj.totalTradeRewardPoints = message.totalTradeRewardPoints);
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pendingTradingRewardPoolCampaignSchedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toJSON(e) : undefined);
    } else {
      obj.pendingTradingRewardPoolCampaignSchedule = [];
    }
    if (message.pendingTotalTradeRewardPoints) {
      obj.pendingTotalTradeRewardPoints = message.pendingTotalTradeRewardPoints.map(e => e);
    } else {
      obj.pendingTotalTradeRewardPoints = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse {
    const message = createBaseQueryTradeRewardCampaignResponse();
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.totalTradeRewardPoints = object.totalTradeRewardPoints ?? "";
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTotalTradeRewardPoints = object.pendingTotalTradeRewardPoints?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryTradeRewardCampaignResponseSDKType): QueryTradeRewardCampaignResponse {
    return {
      tradingRewardCampaignInfo: object.trading_reward_campaign_info ? TradingRewardCampaignInfo.fromSDK(object.trading_reward_campaign_info) : undefined,
      tradingRewardPoolCampaignSchedule: Array.isArray(object?.trading_reward_pool_campaign_schedule) ? object.trading_reward_pool_campaign_schedule.map((e: any) => CampaignRewardPool.fromSDK(e)) : [],
      totalTradeRewardPoints: object?.total_trade_reward_points,
      pendingTradingRewardPoolCampaignSchedule: Array.isArray(object?.pending_trading_reward_pool_campaign_schedule) ? object.pending_trading_reward_pool_campaign_schedule.map((e: any) => CampaignRewardPool.fromSDK(e)) : [],
      pendingTotalTradeRewardPoints: Array.isArray(object?.pending_total_trade_reward_points) ? object.pending_total_trade_reward_points.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseSDKType {
    const obj: any = {};
    message.tradingRewardCampaignInfo !== undefined && (obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toSDK(message.tradingRewardCampaignInfo) : undefined);
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toSDK(e) : undefined);
    } else {
      obj.trading_reward_pool_campaign_schedule = [];
    }
    obj.total_trade_reward_points = message.totalTradeRewardPoints;
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toSDK(e) : undefined);
    } else {
      obj.pending_trading_reward_pool_campaign_schedule = [];
    }
    if (message.pendingTotalTradeRewardPoints) {
      obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints.map(e => e);
    } else {
      obj.pending_total_trade_reward_points = [];
    }
    return obj;
  },
  fromAmino(object: QueryTradeRewardCampaignResponseAmino): QueryTradeRewardCampaignResponse {
    const message = createBaseQueryTradeRewardCampaignResponse();
    if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
      message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
    }
    message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    if (object.total_trade_reward_points !== undefined && object.total_trade_reward_points !== null) {
      message.totalTradeRewardPoints = object.total_trade_reward_points;
    }
    message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    message.pendingTotalTradeRewardPoints = object.pending_total_trade_reward_points?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseAmino {
    const obj: any = {};
    obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
    }
    obj.total_trade_reward_points = message.totalTradeRewardPoints === "" ? undefined : message.totalTradeRewardPoints;
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule;
    }
    if (message.pendingTotalTradeRewardPoints) {
      obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints.map(e => e);
    } else {
      obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardCampaignResponseAminoMsg): QueryTradeRewardCampaignResponse {
    return QueryTradeRewardCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardCampaignResponseProtoMsg): QueryTradeRewardCampaignResponse {
    return QueryTradeRewardCampaignResponse.decode(message.value);
  },
  toProto(message: QueryTradeRewardCampaignResponse): Uint8Array {
    return QueryTradeRewardCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
      value: QueryTradeRewardCampaignResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsOptedOutOfRewardsRequest(): QueryIsOptedOutOfRewardsRequest {
  return {
    account: ""
  };
}
export const QueryIsOptedOutOfRewardsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
  encode(message: QueryIsOptedOutOfRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsOptedOutOfRewardsRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  toJSON(message: QueryIsOptedOutOfRewardsRequest): JsonSafe<QueryIsOptedOutOfRewardsRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest {
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromSDK(object: QueryIsOptedOutOfRewardsRequestSDKType): QueryIsOptedOutOfRewardsRequest {
    return {
      account: object?.account
    };
  },
  toSDK(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAmino(object: QueryIsOptedOutOfRewardsRequestAmino): QueryIsOptedOutOfRewardsRequest {
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: QueryIsOptedOutOfRewardsRequestAminoMsg): QueryIsOptedOutOfRewardsRequest {
    return QueryIsOptedOutOfRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOptedOutOfRewardsRequestProtoMsg): QueryIsOptedOutOfRewardsRequest {
    return QueryIsOptedOutOfRewardsRequest.decode(message.value);
  },
  toProto(message: QueryIsOptedOutOfRewardsRequest): Uint8Array {
    return QueryIsOptedOutOfRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
      value: QueryIsOptedOutOfRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsOptedOutOfRewardsResponse(): QueryIsOptedOutOfRewardsResponse {
  return {
    isOptedOut: false
  };
}
export const QueryIsOptedOutOfRewardsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
  encode(message: QueryIsOptedOutOfRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isOptedOut === true) {
      writer.uint32(8).bool(message.isOptedOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isOptedOut = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsOptedOutOfRewardsResponse {
    return {
      isOptedOut: isSet(object.isOptedOut) ? Boolean(object.isOptedOut) : false
    };
  },
  toJSON(message: QueryIsOptedOutOfRewardsResponse): JsonSafe<QueryIsOptedOutOfRewardsResponse> {
    const obj: any = {};
    message.isOptedOut !== undefined && (obj.isOptedOut = message.isOptedOut);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse {
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    message.isOptedOut = object.isOptedOut ?? false;
    return message;
  },
  fromSDK(object: QueryIsOptedOutOfRewardsResponseSDKType): QueryIsOptedOutOfRewardsResponse {
    return {
      isOptedOut: object?.is_opted_out
    };
  },
  toSDK(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseSDKType {
    const obj: any = {};
    obj.is_opted_out = message.isOptedOut;
    return obj;
  },
  fromAmino(object: QueryIsOptedOutOfRewardsResponseAmino): QueryIsOptedOutOfRewardsResponse {
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    if (object.is_opted_out !== undefined && object.is_opted_out !== null) {
      message.isOptedOut = object.is_opted_out;
    }
    return message;
  },
  toAmino(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseAmino {
    const obj: any = {};
    obj.is_opted_out = message.isOptedOut === false ? undefined : message.isOptedOut;
    return obj;
  },
  fromAminoMsg(object: QueryIsOptedOutOfRewardsResponseAminoMsg): QueryIsOptedOutOfRewardsResponse {
    return QueryIsOptedOutOfRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOptedOutOfRewardsResponseProtoMsg): QueryIsOptedOutOfRewardsResponse {
    return QueryIsOptedOutOfRewardsResponse.decode(message.value);
  },
  toProto(message: QueryIsOptedOutOfRewardsResponse): Uint8Array {
    return QueryIsOptedOutOfRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
      value: QueryIsOptedOutOfRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOptedOutOfRewardsAccountsRequest(): QueryOptedOutOfRewardsAccountsRequest {
  return {};
}
export const QueryOptedOutOfRewardsAccountsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
  encode(_: QueryOptedOutOfRewardsAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
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
  fromJSON(_: any): QueryOptedOutOfRewardsAccountsRequest {
    return {};
  },
  toJSON(_: QueryOptedOutOfRewardsAccountsRequest): JsonSafe<QueryOptedOutOfRewardsAccountsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  },
  fromSDK(_: QueryOptedOutOfRewardsAccountsRequestSDKType): QueryOptedOutOfRewardsAccountsRequest {
    return {};
  },
  toSDK(_: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryOptedOutOfRewardsAccountsRequestAmino): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  },
  toAmino(_: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOptedOutOfRewardsAccountsRequestAminoMsg): QueryOptedOutOfRewardsAccountsRequest {
    return QueryOptedOutOfRewardsAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOptedOutOfRewardsAccountsRequestProtoMsg): QueryOptedOutOfRewardsAccountsRequest {
    return QueryOptedOutOfRewardsAccountsRequest.decode(message.value);
  },
  toProto(message: QueryOptedOutOfRewardsAccountsRequest): Uint8Array {
    return QueryOptedOutOfRewardsAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
      value: QueryOptedOutOfRewardsAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOptedOutOfRewardsAccountsResponse(): QueryOptedOutOfRewardsAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryOptedOutOfRewardsAccountsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
  encode(message: QueryOptedOutOfRewardsAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOptedOutOfRewardsAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryOptedOutOfRewardsAccountsResponse): JsonSafe<QueryOptedOutOfRewardsAccountsResponse> {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse {
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryOptedOutOfRewardsAccountsResponseSDKType): QueryOptedOutOfRewardsAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseSDKType {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAmino(object: QueryOptedOutOfRewardsAccountsResponseAmino): QueryOptedOutOfRewardsAccountsResponse {
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOptedOutOfRewardsAccountsResponseAminoMsg): QueryOptedOutOfRewardsAccountsResponse {
    return QueryOptedOutOfRewardsAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOptedOutOfRewardsAccountsResponseProtoMsg): QueryOptedOutOfRewardsAccountsResponse {
    return QueryOptedOutOfRewardsAccountsResponse.decode(message.value);
  },
  toProto(message: QueryOptedOutOfRewardsAccountsResponse): Uint8Array {
    return QueryOptedOutOfRewardsAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
      value: QueryOptedOutOfRewardsAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountAccountInfoRequest(): QueryFeeDiscountAccountInfoRequest {
  return {
    account: ""
  };
}
export const QueryFeeDiscountAccountInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
  encode(message: QueryFeeDiscountAccountInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeDiscountAccountInfoRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  toJSON(message: QueryFeeDiscountAccountInfoRequest): JsonSafe<QueryFeeDiscountAccountInfoRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest {
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromSDK(object: QueryFeeDiscountAccountInfoRequestSDKType): QueryFeeDiscountAccountInfoRequest {
    return {
      account: object?.account
    };
  },
  toSDK(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAmino(object: QueryFeeDiscountAccountInfoRequestAmino): QueryFeeDiscountAccountInfoRequest {
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountAccountInfoRequestAminoMsg): QueryFeeDiscountAccountInfoRequest {
    return QueryFeeDiscountAccountInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountAccountInfoRequestProtoMsg): QueryFeeDiscountAccountInfoRequest {
    return QueryFeeDiscountAccountInfoRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountAccountInfoRequest): Uint8Array {
    return QueryFeeDiscountAccountInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
      value: QueryFeeDiscountAccountInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountAccountInfoResponse(): QueryFeeDiscountAccountInfoResponse {
  return {
    tierLevel: BigInt(0),
    accountInfo: undefined,
    accountTtl: undefined
  };
}
export const QueryFeeDiscountAccountInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
  encode(message: QueryFeeDiscountAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tierLevel !== BigInt(0)) {
      writer.uint32(8).uint64(message.tierLevel);
    }
    if (message.accountInfo !== undefined) {
      FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tierLevel = reader.uint64();
          break;
        case 2:
          message.accountInfo = FeeDiscountTierInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeDiscountAccountInfoResponse {
    return {
      tierLevel: isSet(object.tierLevel) ? BigInt(object.tierLevel.toString()) : BigInt(0),
      accountInfo: isSet(object.accountInfo) ? FeeDiscountTierInfo.fromJSON(object.accountInfo) : undefined,
      accountTtl: isSet(object.accountTtl) ? FeeDiscountTierTTL.fromJSON(object.accountTtl) : undefined
    };
  },
  toJSON(message: QueryFeeDiscountAccountInfoResponse): JsonSafe<QueryFeeDiscountAccountInfoResponse> {
    const obj: any = {};
    message.tierLevel !== undefined && (obj.tierLevel = (message.tierLevel || BigInt(0)).toString());
    message.accountInfo !== undefined && (obj.accountInfo = message.accountInfo ? FeeDiscountTierInfo.toJSON(message.accountInfo) : undefined);
    message.accountTtl !== undefined && (obj.accountTtl = message.accountTtl ? FeeDiscountTierTTL.toJSON(message.accountTtl) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    message.tierLevel = object.tierLevel !== undefined && object.tierLevel !== null ? BigInt(object.tierLevel.toString()) : BigInt(0);
    message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
    message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
    return message;
  },
  fromSDK(object: QueryFeeDiscountAccountInfoResponseSDKType): QueryFeeDiscountAccountInfoResponse {
    return {
      tierLevel: object?.tier_level,
      accountInfo: object.account_info ? FeeDiscountTierInfo.fromSDK(object.account_info) : undefined,
      accountTtl: object.account_ttl ? FeeDiscountTierTTL.fromSDK(object.account_ttl) : undefined
    };
  },
  toSDK(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseSDKType {
    const obj: any = {};
    obj.tier_level = message.tierLevel;
    message.accountInfo !== undefined && (obj.account_info = message.accountInfo ? FeeDiscountTierInfo.toSDK(message.accountInfo) : undefined);
    message.accountTtl !== undefined && (obj.account_ttl = message.accountTtl ? FeeDiscountTierTTL.toSDK(message.accountTtl) : undefined);
    return obj;
  },
  fromAmino(object: QueryFeeDiscountAccountInfoResponseAmino): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    if (object.tier_level !== undefined && object.tier_level !== null) {
      message.tierLevel = BigInt(object.tier_level);
    }
    if (object.account_info !== undefined && object.account_info !== null) {
      message.accountInfo = FeeDiscountTierInfo.fromAmino(object.account_info);
    }
    if (object.account_ttl !== undefined && object.account_ttl !== null) {
      message.accountTtl = FeeDiscountTierTTL.fromAmino(object.account_ttl);
    }
    return message;
  },
  toAmino(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseAmino {
    const obj: any = {};
    obj.tier_level = message.tierLevel !== BigInt(0) ? message.tierLevel.toString() : undefined;
    obj.account_info = message.accountInfo ? FeeDiscountTierInfo.toAmino(message.accountInfo) : undefined;
    obj.account_ttl = message.accountTtl ? FeeDiscountTierTTL.toAmino(message.accountTtl) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountAccountInfoResponseAminoMsg): QueryFeeDiscountAccountInfoResponse {
    return QueryFeeDiscountAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountAccountInfoResponseProtoMsg): QueryFeeDiscountAccountInfoResponse {
    return QueryFeeDiscountAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountAccountInfoResponse): Uint8Array {
    return QueryFeeDiscountAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
      value: QueryFeeDiscountAccountInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountScheduleRequest(): QueryFeeDiscountScheduleRequest {
  return {};
}
export const QueryFeeDiscountScheduleRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
  encode(_: QueryFeeDiscountScheduleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountScheduleRequest();
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
  fromJSON(_: any): QueryFeeDiscountScheduleRequest {
    return {};
  },
  toJSON(_: QueryFeeDiscountScheduleRequest): JsonSafe<QueryFeeDiscountScheduleRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  },
  fromSDK(_: QueryFeeDiscountScheduleRequestSDKType): QueryFeeDiscountScheduleRequest {
    return {};
  },
  toSDK(_: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryFeeDiscountScheduleRequestAmino): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  },
  toAmino(_: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountScheduleRequestAminoMsg): QueryFeeDiscountScheduleRequest {
    return QueryFeeDiscountScheduleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountScheduleRequestProtoMsg): QueryFeeDiscountScheduleRequest {
    return QueryFeeDiscountScheduleRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountScheduleRequest): Uint8Array {
    return QueryFeeDiscountScheduleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
      value: QueryFeeDiscountScheduleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountScheduleResponse(): QueryFeeDiscountScheduleResponse {
  return {
    feeDiscountSchedule: undefined
  };
}
export const QueryFeeDiscountScheduleResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
  encode(message: QueryFeeDiscountScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeDiscountScheduleResponse {
    return {
      feeDiscountSchedule: isSet(object.feeDiscountSchedule) ? FeeDiscountSchedule.fromJSON(object.feeDiscountSchedule) : undefined
    };
  },
  toJSON(message: QueryFeeDiscountScheduleResponse): JsonSafe<QueryFeeDiscountScheduleResponse> {
    const obj: any = {};
    message.feeDiscountSchedule !== undefined && (obj.feeDiscountSchedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toJSON(message.feeDiscountSchedule) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse {
    const message = createBaseQueryFeeDiscountScheduleResponse();
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    return message;
  },
  fromSDK(object: QueryFeeDiscountScheduleResponseSDKType): QueryFeeDiscountScheduleResponse {
    return {
      feeDiscountSchedule: object.fee_discount_schedule ? FeeDiscountSchedule.fromSDK(object.fee_discount_schedule) : undefined
    };
  },
  toSDK(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseSDKType {
    const obj: any = {};
    message.feeDiscountSchedule !== undefined && (obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toSDK(message.feeDiscountSchedule) : undefined);
    return obj;
  },
  fromAmino(object: QueryFeeDiscountScheduleResponseAmino): QueryFeeDiscountScheduleResponse {
    const message = createBaseQueryFeeDiscountScheduleResponse();
    if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
      message.feeDiscountSchedule = FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
    }
    return message;
  },
  toAmino(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseAmino {
    const obj: any = {};
    obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountScheduleResponseAminoMsg): QueryFeeDiscountScheduleResponse {
    return QueryFeeDiscountScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountScheduleResponseProtoMsg): QueryFeeDiscountScheduleResponse {
    return QueryFeeDiscountScheduleResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountScheduleResponse): Uint8Array {
    return QueryFeeDiscountScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
      value: QueryFeeDiscountScheduleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceMismatchesRequest(): QueryBalanceMismatchesRequest {
  return {
    dustFactor: BigInt(0)
  };
}
export const QueryBalanceMismatchesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
  encode(message: QueryBalanceMismatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dustFactor !== BigInt(0)) {
      writer.uint32(8).int64(message.dustFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceMismatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceMismatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dustFactor = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceMismatchesRequest {
    return {
      dustFactor: isSet(object.dustFactor) ? BigInt(object.dustFactor.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryBalanceMismatchesRequest): JsonSafe<QueryBalanceMismatchesRequest> {
    const obj: any = {};
    message.dustFactor !== undefined && (obj.dustFactor = (message.dustFactor || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    message.dustFactor = object.dustFactor !== undefined && object.dustFactor !== null ? BigInt(object.dustFactor.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryBalanceMismatchesRequestSDKType): QueryBalanceMismatchesRequest {
    return {
      dustFactor: object?.dust_factor
    };
  },
  toSDK(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestSDKType {
    const obj: any = {};
    obj.dust_factor = message.dustFactor;
    return obj;
  },
  fromAmino(object: QueryBalanceMismatchesRequestAmino): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    if (object.dust_factor !== undefined && object.dust_factor !== null) {
      message.dustFactor = BigInt(object.dust_factor);
    }
    return message;
  },
  toAmino(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestAmino {
    const obj: any = {};
    obj.dust_factor = message.dustFactor !== BigInt(0) ? message.dustFactor.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceMismatchesRequestAminoMsg): QueryBalanceMismatchesRequest {
    return QueryBalanceMismatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceMismatchesRequestProtoMsg): QueryBalanceMismatchesRequest {
    return QueryBalanceMismatchesRequest.decode(message.value);
  },
  toProto(message: QueryBalanceMismatchesRequest): Uint8Array {
    return QueryBalanceMismatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
      value: QueryBalanceMismatchesRequest.encode(message).finish()
    };
  }
};
function createBaseBalanceMismatch(): BalanceMismatch {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: "",
    expectedTotal: "",
    difference: ""
  };
}
export const BalanceMismatch = {
  typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
  encode(message: BalanceMismatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.available, 18).atomics);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
    }
    if (message.expectedTotal !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.expectedTotal, 18).atomics);
    }
    if (message.difference !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.difference, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceMismatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceMismatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.available = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.balanceHold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.expectedTotal = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.difference = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BalanceMismatch {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      available: isSet(object.available) ? String(object.available) : "",
      total: isSet(object.total) ? String(object.total) : "",
      balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
      expectedTotal: isSet(object.expectedTotal) ? String(object.expectedTotal) : "",
      difference: isSet(object.difference) ? String(object.difference) : ""
    };
  },
  toJSON(message: BalanceMismatch): JsonSafe<BalanceMismatch> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.available !== undefined && (obj.available = message.available);
    message.total !== undefined && (obj.total = message.total);
    message.balanceHold !== undefined && (obj.balanceHold = message.balanceHold);
    message.expectedTotal !== undefined && (obj.expectedTotal = message.expectedTotal);
    message.difference !== undefined && (obj.difference = message.difference);
    return obj;
  },
  fromPartial(object: DeepPartial<BalanceMismatch>): BalanceMismatch {
    const message = createBaseBalanceMismatch();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    message.expectedTotal = object.expectedTotal ?? "";
    message.difference = object.difference ?? "";
    return message;
  },
  fromSDK(object: BalanceMismatchSDKType): BalanceMismatch {
    return {
      subaccountId: object?.subaccountId,
      denom: object?.denom,
      available: object?.available,
      total: object?.total,
      balanceHold: object?.balance_hold,
      expectedTotal: object?.expected_total,
      difference: object?.difference
    };
  },
  toSDK(message: BalanceMismatch): BalanceMismatchSDKType {
    const obj: any = {};
    obj.subaccountId = message.subaccountId;
    obj.denom = message.denom;
    obj.available = message.available;
    obj.total = message.total;
    obj.balance_hold = message.balanceHold;
    obj.expected_total = message.expectedTotal;
    obj.difference = message.difference;
    return obj;
  },
  fromAmino(object: BalanceMismatchAmino): BalanceMismatch {
    const message = createBaseBalanceMismatch();
    if (object.subaccountId !== undefined && object.subaccountId !== null) {
      message.subaccountId = object.subaccountId;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.balance_hold !== undefined && object.balance_hold !== null) {
      message.balanceHold = object.balance_hold;
    }
    if (object.expected_total !== undefined && object.expected_total !== null) {
      message.expectedTotal = object.expected_total;
    }
    if (object.difference !== undefined && object.difference !== null) {
      message.difference = object.difference;
    }
    return message;
  },
  toAmino(message: BalanceMismatch): BalanceMismatchAmino {
    const obj: any = {};
    obj.subaccountId = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.available = message.available === "" ? undefined : message.available;
    obj.total = message.total === "" ? undefined : message.total;
    obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
    obj.expected_total = message.expectedTotal === "" ? undefined : message.expectedTotal;
    obj.difference = message.difference === "" ? undefined : message.difference;
    return obj;
  },
  fromAminoMsg(object: BalanceMismatchAminoMsg): BalanceMismatch {
    return BalanceMismatch.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceMismatchProtoMsg): BalanceMismatch {
    return BalanceMismatch.decode(message.value);
  },
  toProto(message: BalanceMismatch): Uint8Array {
    return BalanceMismatch.encode(message).finish();
  },
  toProtoMsg(message: BalanceMismatch): BalanceMismatchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
      value: BalanceMismatch.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceMismatchesResponse(): QueryBalanceMismatchesResponse {
  return {
    balanceMismatches: []
  };
}
export const QueryBalanceMismatchesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
  encode(message: QueryBalanceMismatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balanceMismatches) {
      BalanceMismatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceMismatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceMismatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balanceMismatches.push(BalanceMismatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceMismatchesResponse {
    return {
      balanceMismatches: Array.isArray(object?.balanceMismatches) ? object.balanceMismatches.map((e: any) => BalanceMismatch.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBalanceMismatchesResponse): JsonSafe<QueryBalanceMismatchesResponse> {
    const obj: any = {};
    if (message.balanceMismatches) {
      obj.balanceMismatches = message.balanceMismatches.map(e => e ? BalanceMismatch.toJSON(e) : undefined);
    } else {
      obj.balanceMismatches = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse {
    const message = createBaseQueryBalanceMismatchesResponse();
    message.balanceMismatches = object.balanceMismatches?.map(e => BalanceMismatch.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryBalanceMismatchesResponseSDKType): QueryBalanceMismatchesResponse {
    return {
      balanceMismatches: Array.isArray(object?.balance_mismatches) ? object.balance_mismatches.map((e: any) => BalanceMismatch.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseSDKType {
    const obj: any = {};
    if (message.balanceMismatches) {
      obj.balance_mismatches = message.balanceMismatches.map(e => e ? BalanceMismatch.toSDK(e) : undefined);
    } else {
      obj.balance_mismatches = [];
    }
    return obj;
  },
  fromAmino(object: QueryBalanceMismatchesResponseAmino): QueryBalanceMismatchesResponse {
    const message = createBaseQueryBalanceMismatchesResponse();
    message.balanceMismatches = object.balance_mismatches?.map(e => BalanceMismatch.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseAmino {
    const obj: any = {};
    if (message.balanceMismatches) {
      obj.balance_mismatches = message.balanceMismatches.map(e => e ? BalanceMismatch.toAmino(e) : undefined);
    } else {
      obj.balance_mismatches = message.balanceMismatches;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceMismatchesResponseAminoMsg): QueryBalanceMismatchesResponse {
    return QueryBalanceMismatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceMismatchesResponseProtoMsg): QueryBalanceMismatchesResponse {
    return QueryBalanceMismatchesResponse.decode(message.value);
  },
  toProto(message: QueryBalanceMismatchesResponse): Uint8Array {
    return QueryBalanceMismatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
      value: QueryBalanceMismatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceWithBalanceHoldsRequest(): QueryBalanceWithBalanceHoldsRequest {
  return {};
}
export const QueryBalanceWithBalanceHoldsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
  encode(_: QueryBalanceWithBalanceHoldsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
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
  fromJSON(_: any): QueryBalanceWithBalanceHoldsRequest {
    return {};
  },
  toJSON(_: QueryBalanceWithBalanceHoldsRequest): JsonSafe<QueryBalanceWithBalanceHoldsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  },
  fromSDK(_: QueryBalanceWithBalanceHoldsRequestSDKType): QueryBalanceWithBalanceHoldsRequest {
    return {};
  },
  toSDK(_: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryBalanceWithBalanceHoldsRequestAmino): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  },
  toAmino(_: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBalanceWithBalanceHoldsRequestAminoMsg): QueryBalanceWithBalanceHoldsRequest {
    return QueryBalanceWithBalanceHoldsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceWithBalanceHoldsRequestProtoMsg): QueryBalanceWithBalanceHoldsRequest {
    return QueryBalanceWithBalanceHoldsRequest.decode(message.value);
  },
  toProto(message: QueryBalanceWithBalanceHoldsRequest): Uint8Array {
    return QueryBalanceWithBalanceHoldsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
      value: QueryBalanceWithBalanceHoldsRequest.encode(message).finish()
    };
  }
};
function createBaseBalanceWithMarginHold(): BalanceWithMarginHold {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: ""
  };
}
export const BalanceWithMarginHold = {
  typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
  encode(message: BalanceWithMarginHold, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.available, 18).atomics);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceWithMarginHold {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceWithMarginHold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.available = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.balanceHold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BalanceWithMarginHold {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      available: isSet(object.available) ? String(object.available) : "",
      total: isSet(object.total) ? String(object.total) : "",
      balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : ""
    };
  },
  toJSON(message: BalanceWithMarginHold): JsonSafe<BalanceWithMarginHold> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.available !== undefined && (obj.available = message.available);
    message.total !== undefined && (obj.total = message.total);
    message.balanceHold !== undefined && (obj.balanceHold = message.balanceHold);
    return obj;
  },
  fromPartial(object: DeepPartial<BalanceWithMarginHold>): BalanceWithMarginHold {
    const message = createBaseBalanceWithMarginHold();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    return message;
  },
  fromSDK(object: BalanceWithMarginHoldSDKType): BalanceWithMarginHold {
    return {
      subaccountId: object?.subaccountId,
      denom: object?.denom,
      available: object?.available,
      total: object?.total,
      balanceHold: object?.balance_hold
    };
  },
  toSDK(message: BalanceWithMarginHold): BalanceWithMarginHoldSDKType {
    const obj: any = {};
    obj.subaccountId = message.subaccountId;
    obj.denom = message.denom;
    obj.available = message.available;
    obj.total = message.total;
    obj.balance_hold = message.balanceHold;
    return obj;
  },
  fromAmino(object: BalanceWithMarginHoldAmino): BalanceWithMarginHold {
    const message = createBaseBalanceWithMarginHold();
    if (object.subaccountId !== undefined && object.subaccountId !== null) {
      message.subaccountId = object.subaccountId;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.balance_hold !== undefined && object.balance_hold !== null) {
      message.balanceHold = object.balance_hold;
    }
    return message;
  },
  toAmino(message: BalanceWithMarginHold): BalanceWithMarginHoldAmino {
    const obj: any = {};
    obj.subaccountId = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.available = message.available === "" ? undefined : message.available;
    obj.total = message.total === "" ? undefined : message.total;
    obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
    return obj;
  },
  fromAminoMsg(object: BalanceWithMarginHoldAminoMsg): BalanceWithMarginHold {
    return BalanceWithMarginHold.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceWithMarginHoldProtoMsg): BalanceWithMarginHold {
    return BalanceWithMarginHold.decode(message.value);
  },
  toProto(message: BalanceWithMarginHold): Uint8Array {
    return BalanceWithMarginHold.encode(message).finish();
  },
  toProtoMsg(message: BalanceWithMarginHold): BalanceWithMarginHoldProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
      value: BalanceWithMarginHold.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceWithBalanceHoldsResponse(): QueryBalanceWithBalanceHoldsResponse {
  return {
    balanceWithBalanceHolds: []
  };
}
export const QueryBalanceWithBalanceHoldsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
  encode(message: QueryBalanceWithBalanceHoldsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balanceWithBalanceHolds) {
      BalanceWithMarginHold.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balanceWithBalanceHolds.push(BalanceWithMarginHold.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceWithBalanceHoldsResponse {
    return {
      balanceWithBalanceHolds: Array.isArray(object?.balanceWithBalanceHolds) ? object.balanceWithBalanceHolds.map((e: any) => BalanceWithMarginHold.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBalanceWithBalanceHoldsResponse): JsonSafe<QueryBalanceWithBalanceHoldsResponse> {
    const obj: any = {};
    if (message.balanceWithBalanceHolds) {
      obj.balanceWithBalanceHolds = message.balanceWithBalanceHolds.map(e => e ? BalanceWithMarginHold.toJSON(e) : undefined);
    } else {
      obj.balanceWithBalanceHolds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse {
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    message.balanceWithBalanceHolds = object.balanceWithBalanceHolds?.map(e => BalanceWithMarginHold.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryBalanceWithBalanceHoldsResponseSDKType): QueryBalanceWithBalanceHoldsResponse {
    return {
      balanceWithBalanceHolds: Array.isArray(object?.balance_with_balance_holds) ? object.balance_with_balance_holds.map((e: any) => BalanceWithMarginHold.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseSDKType {
    const obj: any = {};
    if (message.balanceWithBalanceHolds) {
      obj.balance_with_balance_holds = message.balanceWithBalanceHolds.map(e => e ? BalanceWithMarginHold.toSDK(e) : undefined);
    } else {
      obj.balance_with_balance_holds = [];
    }
    return obj;
  },
  fromAmino(object: QueryBalanceWithBalanceHoldsResponseAmino): QueryBalanceWithBalanceHoldsResponse {
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    message.balanceWithBalanceHolds = object.balance_with_balance_holds?.map(e => BalanceWithMarginHold.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseAmino {
    const obj: any = {};
    if (message.balanceWithBalanceHolds) {
      obj.balance_with_balance_holds = message.balanceWithBalanceHolds.map(e => e ? BalanceWithMarginHold.toAmino(e) : undefined);
    } else {
      obj.balance_with_balance_holds = message.balanceWithBalanceHolds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceWithBalanceHoldsResponseAminoMsg): QueryBalanceWithBalanceHoldsResponse {
    return QueryBalanceWithBalanceHoldsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceWithBalanceHoldsResponseProtoMsg): QueryBalanceWithBalanceHoldsResponse {
    return QueryBalanceWithBalanceHoldsResponse.decode(message.value);
  },
  toProto(message: QueryBalanceWithBalanceHoldsResponse): Uint8Array {
    return QueryBalanceWithBalanceHoldsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
      value: QueryBalanceWithBalanceHoldsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountTierStatisticsRequest(): QueryFeeDiscountTierStatisticsRequest {
  return {};
}
export const QueryFeeDiscountTierStatisticsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
  encode(_: QueryFeeDiscountTierStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
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
  fromJSON(_: any): QueryFeeDiscountTierStatisticsRequest {
    return {};
  },
  toJSON(_: QueryFeeDiscountTierStatisticsRequest): JsonSafe<QueryFeeDiscountTierStatisticsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  },
  fromSDK(_: QueryFeeDiscountTierStatisticsRequestSDKType): QueryFeeDiscountTierStatisticsRequest {
    return {};
  },
  toSDK(_: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryFeeDiscountTierStatisticsRequestAmino): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  },
  toAmino(_: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountTierStatisticsRequestAminoMsg): QueryFeeDiscountTierStatisticsRequest {
    return QueryFeeDiscountTierStatisticsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountTierStatisticsRequestProtoMsg): QueryFeeDiscountTierStatisticsRequest {
    return QueryFeeDiscountTierStatisticsRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountTierStatisticsRequest): Uint8Array {
    return QueryFeeDiscountTierStatisticsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
      value: QueryFeeDiscountTierStatisticsRequest.encode(message).finish()
    };
  }
};
function createBaseTierStatistic(): TierStatistic {
  return {
    tier: BigInt(0),
    count: BigInt(0)
  };
}
export const TierStatistic = {
  typeUrl: "/injective.exchange.v1beta1.TierStatistic",
  encode(message: TierStatistic, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tier !== BigInt(0)) {
      writer.uint32(8).uint64(message.tier);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TierStatistic {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTierStatistic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tier = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TierStatistic {
    return {
      tier: isSet(object.tier) ? BigInt(object.tier.toString()) : BigInt(0),
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0)
    };
  },
  toJSON(message: TierStatistic): JsonSafe<TierStatistic> {
    const obj: any = {};
    message.tier !== undefined && (obj.tier = (message.tier || BigInt(0)).toString());
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<TierStatistic>): TierStatistic {
    const message = createBaseTierStatistic();
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: TierStatisticSDKType): TierStatistic {
    return {
      tier: object?.tier,
      count: object?.count
    };
  },
  toSDK(message: TierStatistic): TierStatisticSDKType {
    const obj: any = {};
    obj.tier = message.tier;
    obj.count = message.count;
    return obj;
  },
  fromAmino(object: TierStatisticAmino): TierStatistic {
    const message = createBaseTierStatistic();
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = BigInt(object.tier);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: TierStatistic): TierStatisticAmino {
    const obj: any = {};
    obj.tier = message.tier !== BigInt(0) ? message.tier.toString() : undefined;
    obj.count = message.count !== BigInt(0) ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TierStatisticAminoMsg): TierStatistic {
    return TierStatistic.fromAmino(object.value);
  },
  fromProtoMsg(message: TierStatisticProtoMsg): TierStatistic {
    return TierStatistic.decode(message.value);
  },
  toProto(message: TierStatistic): Uint8Array {
    return TierStatistic.encode(message).finish();
  },
  toProtoMsg(message: TierStatistic): TierStatisticProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TierStatistic",
      value: TierStatistic.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountTierStatisticsResponse(): QueryFeeDiscountTierStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryFeeDiscountTierStatisticsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
  encode(message: QueryFeeDiscountTierStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.statistics) {
      TierStatistic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(TierStatistic.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeDiscountTierStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => TierStatistic.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryFeeDiscountTierStatisticsResponse): JsonSafe<QueryFeeDiscountTierStatisticsResponse> {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? TierStatistic.toJSON(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse {
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    message.statistics = object.statistics?.map(e => TierStatistic.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryFeeDiscountTierStatisticsResponseSDKType): QueryFeeDiscountTierStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => TierStatistic.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseSDKType {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? TierStatistic.toSDK(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromAmino(object: QueryFeeDiscountTierStatisticsResponseAmino): QueryFeeDiscountTierStatisticsResponse {
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    message.statistics = object.statistics?.map(e => TierStatistic.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseAmino {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? TierStatistic.toAmino(e) : undefined);
    } else {
      obj.statistics = message.statistics;
    }
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountTierStatisticsResponseAminoMsg): QueryFeeDiscountTierStatisticsResponse {
    return QueryFeeDiscountTierStatisticsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountTierStatisticsResponseProtoMsg): QueryFeeDiscountTierStatisticsResponse {
    return QueryFeeDiscountTierStatisticsResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountTierStatisticsResponse): Uint8Array {
    return QueryFeeDiscountTierStatisticsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
      value: QueryFeeDiscountTierStatisticsResponse.encode(message).finish()
    };
  }
};
function createBaseNinjaVaultInfosRequest(): NinjaVaultInfosRequest {
  return {};
}
export const NinjaVaultInfosRequest = {
  typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest",
  encode(_: NinjaVaultInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NinjaVaultInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNinjaVaultInfosRequest();
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
  fromJSON(_: any): NinjaVaultInfosRequest {
    return {};
  },
  toJSON(_: NinjaVaultInfosRequest): JsonSafe<NinjaVaultInfosRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<NinjaVaultInfosRequest>): NinjaVaultInfosRequest {
    const message = createBaseNinjaVaultInfosRequest();
    return message;
  },
  fromSDK(_: NinjaVaultInfosRequestSDKType): NinjaVaultInfosRequest {
    return {};
  },
  toSDK(_: NinjaVaultInfosRequest): NinjaVaultInfosRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: NinjaVaultInfosRequestAmino): NinjaVaultInfosRequest {
    const message = createBaseNinjaVaultInfosRequest();
    return message;
  },
  toAmino(_: NinjaVaultInfosRequest): NinjaVaultInfosRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NinjaVaultInfosRequestAminoMsg): NinjaVaultInfosRequest {
    return NinjaVaultInfosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: NinjaVaultInfosRequestProtoMsg): NinjaVaultInfosRequest {
    return NinjaVaultInfosRequest.decode(message.value);
  },
  toProto(message: NinjaVaultInfosRequest): Uint8Array {
    return NinjaVaultInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: NinjaVaultInfosRequest): NinjaVaultInfosRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest",
      value: NinjaVaultInfosRequest.encode(message).finish()
    };
  }
};
function createBaseNinjaVaultInfosResponse(): NinjaVaultInfosResponse {
  return {
    masterAddresses: [],
    derivativeAddresses: [],
    spotAddresses: [],
    cw20Addresses: []
  };
}
export const NinjaVaultInfosResponse = {
  typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse",
  encode(message: NinjaVaultInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.masterAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.derivativeAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.spotAddresses) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.cw20Addresses) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NinjaVaultInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNinjaVaultInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddresses.push(reader.string());
          break;
        case 2:
          message.derivativeAddresses.push(reader.string());
          break;
        case 3:
          message.spotAddresses.push(reader.string());
          break;
        case 4:
          message.cw20Addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NinjaVaultInfosResponse {
    return {
      masterAddresses: Array.isArray(object?.masterAddresses) ? object.masterAddresses.map((e: any) => String(e)) : [],
      derivativeAddresses: Array.isArray(object?.derivativeAddresses) ? object.derivativeAddresses.map((e: any) => String(e)) : [],
      spotAddresses: Array.isArray(object?.spotAddresses) ? object.spotAddresses.map((e: any) => String(e)) : [],
      cw20Addresses: Array.isArray(object?.cw20Addresses) ? object.cw20Addresses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: NinjaVaultInfosResponse): JsonSafe<NinjaVaultInfosResponse> {
    const obj: any = {};
    if (message.masterAddresses) {
      obj.masterAddresses = message.masterAddresses.map(e => e);
    } else {
      obj.masterAddresses = [];
    }
    if (message.derivativeAddresses) {
      obj.derivativeAddresses = message.derivativeAddresses.map(e => e);
    } else {
      obj.derivativeAddresses = [];
    }
    if (message.spotAddresses) {
      obj.spotAddresses = message.spotAddresses.map(e => e);
    } else {
      obj.spotAddresses = [];
    }
    if (message.cw20Addresses) {
      obj.cw20Addresses = message.cw20Addresses.map(e => e);
    } else {
      obj.cw20Addresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<NinjaVaultInfosResponse>): NinjaVaultInfosResponse {
    const message = createBaseNinjaVaultInfosResponse();
    message.masterAddresses = object.masterAddresses?.map(e => e) || [];
    message.derivativeAddresses = object.derivativeAddresses?.map(e => e) || [];
    message.spotAddresses = object.spotAddresses?.map(e => e) || [];
    message.cw20Addresses = object.cw20Addresses?.map(e => e) || [];
    return message;
  },
  fromSDK(object: NinjaVaultInfosResponseSDKType): NinjaVaultInfosResponse {
    return {
      masterAddresses: Array.isArray(object?.master_addresses) ? object.master_addresses.map((e: any) => e) : [],
      derivativeAddresses: Array.isArray(object?.derivative_addresses) ? object.derivative_addresses.map((e: any) => e) : [],
      spotAddresses: Array.isArray(object?.spot_addresses) ? object.spot_addresses.map((e: any) => e) : [],
      cw20Addresses: Array.isArray(object?.cw20_addresses) ? object.cw20_addresses.map((e: any) => e) : []
    };
  },
  toSDK(message: NinjaVaultInfosResponse): NinjaVaultInfosResponseSDKType {
    const obj: any = {};
    if (message.masterAddresses) {
      obj.master_addresses = message.masterAddresses.map(e => e);
    } else {
      obj.master_addresses = [];
    }
    if (message.derivativeAddresses) {
      obj.derivative_addresses = message.derivativeAddresses.map(e => e);
    } else {
      obj.derivative_addresses = [];
    }
    if (message.spotAddresses) {
      obj.spot_addresses = message.spotAddresses.map(e => e);
    } else {
      obj.spot_addresses = [];
    }
    if (message.cw20Addresses) {
      obj.cw20_addresses = message.cw20Addresses.map(e => e);
    } else {
      obj.cw20_addresses = [];
    }
    return obj;
  },
  fromAmino(object: NinjaVaultInfosResponseAmino): NinjaVaultInfosResponse {
    const message = createBaseNinjaVaultInfosResponse();
    message.masterAddresses = object.master_addresses?.map(e => e) || [];
    message.derivativeAddresses = object.derivative_addresses?.map(e => e) || [];
    message.spotAddresses = object.spot_addresses?.map(e => e) || [];
    message.cw20Addresses = object.cw20_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: NinjaVaultInfosResponse): NinjaVaultInfosResponseAmino {
    const obj: any = {};
    if (message.masterAddresses) {
      obj.master_addresses = message.masterAddresses.map(e => e);
    } else {
      obj.master_addresses = message.masterAddresses;
    }
    if (message.derivativeAddresses) {
      obj.derivative_addresses = message.derivativeAddresses.map(e => e);
    } else {
      obj.derivative_addresses = message.derivativeAddresses;
    }
    if (message.spotAddresses) {
      obj.spot_addresses = message.spotAddresses.map(e => e);
    } else {
      obj.spot_addresses = message.spotAddresses;
    }
    if (message.cw20Addresses) {
      obj.cw20_addresses = message.cw20Addresses.map(e => e);
    } else {
      obj.cw20_addresses = message.cw20Addresses;
    }
    return obj;
  },
  fromAminoMsg(object: NinjaVaultInfosResponseAminoMsg): NinjaVaultInfosResponse {
    return NinjaVaultInfosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: NinjaVaultInfosResponseProtoMsg): NinjaVaultInfosResponse {
    return NinjaVaultInfosResponse.decode(message.value);
  },
  toProto(message: NinjaVaultInfosResponse): Uint8Array {
    return NinjaVaultInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: NinjaVaultInfosResponse): NinjaVaultInfosResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse",
      value: NinjaVaultInfosResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketIDFromVaultRequest(): QueryMarketIDFromVaultRequest {
  return {
    vaultSubaccountId: ""
  };
}
export const QueryMarketIDFromVaultRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
  encode(message: QueryMarketIDFromVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultSubaccountId !== "") {
      writer.uint32(10).string(message.vaultSubaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketIDFromVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketIDFromVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultSubaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketIDFromVaultRequest {
    return {
      vaultSubaccountId: isSet(object.vaultSubaccountId) ? String(object.vaultSubaccountId) : ""
    };
  },
  toJSON(message: QueryMarketIDFromVaultRequest): JsonSafe<QueryMarketIDFromVaultRequest> {
    const obj: any = {};
    message.vaultSubaccountId !== undefined && (obj.vaultSubaccountId = message.vaultSubaccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest {
    const message = createBaseQueryMarketIDFromVaultRequest();
    message.vaultSubaccountId = object.vaultSubaccountId ?? "";
    return message;
  },
  fromSDK(object: QueryMarketIDFromVaultRequestSDKType): QueryMarketIDFromVaultRequest {
    return {
      vaultSubaccountId: object?.vault_subaccount_id
    };
  },
  toSDK(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestSDKType {
    const obj: any = {};
    obj.vault_subaccount_id = message.vaultSubaccountId;
    return obj;
  },
  fromAmino(object: QueryMarketIDFromVaultRequestAmino): QueryMarketIDFromVaultRequest {
    const message = createBaseQueryMarketIDFromVaultRequest();
    if (object.vault_subaccount_id !== undefined && object.vault_subaccount_id !== null) {
      message.vaultSubaccountId = object.vault_subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestAmino {
    const obj: any = {};
    obj.vault_subaccount_id = message.vaultSubaccountId === "" ? undefined : message.vaultSubaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketIDFromVaultRequestAminoMsg): QueryMarketIDFromVaultRequest {
    return QueryMarketIDFromVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketIDFromVaultRequestProtoMsg): QueryMarketIDFromVaultRequest {
    return QueryMarketIDFromVaultRequest.decode(message.value);
  },
  toProto(message: QueryMarketIDFromVaultRequest): Uint8Array {
    return QueryMarketIDFromVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
      value: QueryMarketIDFromVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketIDFromVaultResponse(): QueryMarketIDFromVaultResponse {
  return {
    marketId: ""
  };
}
export const QueryMarketIDFromVaultResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
  encode(message: QueryMarketIDFromVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketIDFromVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketIDFromVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketIDFromVaultResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryMarketIDFromVaultResponse): JsonSafe<QueryMarketIDFromVaultResponse> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse {
    const message = createBaseQueryMarketIDFromVaultResponse();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryMarketIDFromVaultResponseSDKType): QueryMarketIDFromVaultResponse {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryMarketIDFromVaultResponseAmino): QueryMarketIDFromVaultResponse {
    const message = createBaseQueryMarketIDFromVaultResponse();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketIDFromVaultResponseAminoMsg): QueryMarketIDFromVaultResponse {
    return QueryMarketIDFromVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketIDFromVaultResponseProtoMsg): QueryMarketIDFromVaultResponse {
    return QueryMarketIDFromVaultResponse.decode(message.value);
  },
  toProto(message: QueryMarketIDFromVaultResponse): Uint8Array {
    return QueryMarketIDFromVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
      value: QueryMarketIDFromVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalTradeRecordsRequest(): QueryHistoricalTradeRecordsRequest {
  return {
    marketId: ""
  };
}
export const QueryHistoricalTradeRecordsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
  encode(message: QueryHistoricalTradeRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTradeRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalTradeRecordsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryHistoricalTradeRecordsRequest): JsonSafe<QueryHistoricalTradeRecordsRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest {
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryHistoricalTradeRecordsRequestSDKType): QueryHistoricalTradeRecordsRequest {
    return {
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryHistoricalTradeRecordsRequestAmino): QueryHistoricalTradeRecordsRequest {
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTradeRecordsRequestAminoMsg): QueryHistoricalTradeRecordsRequest {
    return QueryHistoricalTradeRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTradeRecordsRequestProtoMsg): QueryHistoricalTradeRecordsRequest {
    return QueryHistoricalTradeRecordsRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalTradeRecordsRequest): Uint8Array {
    return QueryHistoricalTradeRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
      value: QueryHistoricalTradeRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalTradeRecordsResponse(): QueryHistoricalTradeRecordsResponse {
  return {
    tradeRecords: []
  };
}
export const QueryHistoricalTradeRecordsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
  encode(message: QueryHistoricalTradeRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tradeRecords) {
      TradeRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTradeRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalTradeRecordsResponse {
    return {
      tradeRecords: Array.isArray(object?.tradeRecords) ? object.tradeRecords.map((e: any) => TradeRecords.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalTradeRecordsResponse): JsonSafe<QueryHistoricalTradeRecordsResponse> {
    const obj: any = {};
    if (message.tradeRecords) {
      obj.tradeRecords = message.tradeRecords.map(e => e ? TradeRecords.toJSON(e) : undefined);
    } else {
      obj.tradeRecords = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse {
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    message.tradeRecords = object.tradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryHistoricalTradeRecordsResponseSDKType): QueryHistoricalTradeRecordsResponse {
    return {
      tradeRecords: Array.isArray(object?.trade_records) ? object.trade_records.map((e: any) => TradeRecords.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseSDKType {
    const obj: any = {};
    if (message.tradeRecords) {
      obj.trade_records = message.tradeRecords.map(e => e ? TradeRecords.toSDK(e) : undefined);
    } else {
      obj.trade_records = [];
    }
    return obj;
  },
  fromAmino(object: QueryHistoricalTradeRecordsResponseAmino): QueryHistoricalTradeRecordsResponse {
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    message.tradeRecords = object.trade_records?.map(e => TradeRecords.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseAmino {
    const obj: any = {};
    if (message.tradeRecords) {
      obj.trade_records = message.tradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
    } else {
      obj.trade_records = message.tradeRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTradeRecordsResponseAminoMsg): QueryHistoricalTradeRecordsResponse {
    return QueryHistoricalTradeRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTradeRecordsResponseProtoMsg): QueryHistoricalTradeRecordsResponse {
    return QueryHistoricalTradeRecordsResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalTradeRecordsResponse): Uint8Array {
    return QueryHistoricalTradeRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
      value: QueryHistoricalTradeRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseTradeHistoryOptions(): TradeHistoryOptions {
  return {
    tradeGroupingSec: BigInt(0),
    maxAge: BigInt(0),
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const TradeHistoryOptions = {
  typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
  encode(message: TradeHistoryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeGroupingSec !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeGroupingSec);
    }
    if (message.maxAge !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxAge);
    }
    if (message.includeRawHistory === true) {
      writer.uint32(32).bool(message.includeRawHistory);
    }
    if (message.includeMetadata === true) {
      writer.uint32(40).bool(message.includeMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradeHistoryOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeHistoryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeGroupingSec = reader.uint64();
          break;
        case 2:
          message.maxAge = reader.uint64();
          break;
        case 4:
          message.includeRawHistory = reader.bool();
          break;
        case 5:
          message.includeMetadata = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TradeHistoryOptions {
    return {
      tradeGroupingSec: isSet(object.tradeGroupingSec) ? BigInt(object.tradeGroupingSec.toString()) : BigInt(0),
      maxAge: isSet(object.maxAge) ? BigInt(object.maxAge.toString()) : BigInt(0),
      includeRawHistory: isSet(object.includeRawHistory) ? Boolean(object.includeRawHistory) : false,
      includeMetadata: isSet(object.includeMetadata) ? Boolean(object.includeMetadata) : false
    };
  },
  toJSON(message: TradeHistoryOptions): JsonSafe<TradeHistoryOptions> {
    const obj: any = {};
    message.tradeGroupingSec !== undefined && (obj.tradeGroupingSec = (message.tradeGroupingSec || BigInt(0)).toString());
    message.maxAge !== undefined && (obj.maxAge = (message.maxAge || BigInt(0)).toString());
    message.includeRawHistory !== undefined && (obj.includeRawHistory = message.includeRawHistory);
    message.includeMetadata !== undefined && (obj.includeMetadata = message.includeMetadata);
    return obj;
  },
  fromPartial(object: DeepPartial<TradeHistoryOptions>): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    message.tradeGroupingSec = object.tradeGroupingSec !== undefined && object.tradeGroupingSec !== null ? BigInt(object.tradeGroupingSec.toString()) : BigInt(0);
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  },
  fromSDK(object: TradeHistoryOptionsSDKType): TradeHistoryOptions {
    return {
      tradeGroupingSec: object?.trade_grouping_sec,
      maxAge: object?.max_age,
      includeRawHistory: object?.include_raw_history,
      includeMetadata: object?.include_metadata
    };
  },
  toSDK(message: TradeHistoryOptions): TradeHistoryOptionsSDKType {
    const obj: any = {};
    obj.trade_grouping_sec = message.tradeGroupingSec;
    obj.max_age = message.maxAge;
    obj.include_raw_history = message.includeRawHistory;
    obj.include_metadata = message.includeMetadata;
    return obj;
  },
  fromAmino(object: TradeHistoryOptionsAmino): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    if (object.trade_grouping_sec !== undefined && object.trade_grouping_sec !== null) {
      message.tradeGroupingSec = BigInt(object.trade_grouping_sec);
    }
    if (object.max_age !== undefined && object.max_age !== null) {
      message.maxAge = BigInt(object.max_age);
    }
    if (object.include_raw_history !== undefined && object.include_raw_history !== null) {
      message.includeRawHistory = object.include_raw_history;
    }
    if (object.include_metadata !== undefined && object.include_metadata !== null) {
      message.includeMetadata = object.include_metadata;
    }
    return message;
  },
  toAmino(message: TradeHistoryOptions): TradeHistoryOptionsAmino {
    const obj: any = {};
    obj.trade_grouping_sec = message.tradeGroupingSec !== BigInt(0) ? message.tradeGroupingSec.toString() : undefined;
    obj.max_age = message.maxAge !== BigInt(0) ? message.maxAge.toString() : undefined;
    obj.include_raw_history = message.includeRawHistory === false ? undefined : message.includeRawHistory;
    obj.include_metadata = message.includeMetadata === false ? undefined : message.includeMetadata;
    return obj;
  },
  fromAminoMsg(object: TradeHistoryOptionsAminoMsg): TradeHistoryOptions {
    return TradeHistoryOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeHistoryOptionsProtoMsg): TradeHistoryOptions {
    return TradeHistoryOptions.decode(message.value);
  },
  toProto(message: TradeHistoryOptions): Uint8Array {
    return TradeHistoryOptions.encode(message).finish();
  },
  toProtoMsg(message: TradeHistoryOptions): TradeHistoryOptionsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
      value: TradeHistoryOptions.encode(message).finish()
    };
  }
};
function createBaseQueryMarketVolatilityRequest(): QueryMarketVolatilityRequest {
  return {
    marketId: "",
    tradeHistoryOptions: undefined
  };
}
export const QueryMarketVolatilityRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
  encode(message: QueryMarketVolatilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.tradeHistoryOptions !== undefined) {
      TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketVolatilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketVolatilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.tradeHistoryOptions = TradeHistoryOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketVolatilityRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      tradeHistoryOptions: isSet(object.tradeHistoryOptions) ? TradeHistoryOptions.fromJSON(object.tradeHistoryOptions) : undefined
    };
  },
  toJSON(message: QueryMarketVolatilityRequest): JsonSafe<QueryMarketVolatilityRequest> {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.tradeHistoryOptions !== undefined && (obj.tradeHistoryOptions = message.tradeHistoryOptions ? TradeHistoryOptions.toJSON(message.tradeHistoryOptions) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest {
    const message = createBaseQueryMarketVolatilityRequest();
    message.marketId = object.marketId ?? "";
    message.tradeHistoryOptions = object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null ? TradeHistoryOptions.fromPartial(object.tradeHistoryOptions) : undefined;
    return message;
  },
  fromSDK(object: QueryMarketVolatilityRequestSDKType): QueryMarketVolatilityRequest {
    return {
      marketId: object?.market_id,
      tradeHistoryOptions: object.trade_history_options ? TradeHistoryOptions.fromSDK(object.trade_history_options) : undefined
    };
  },
  toSDK(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestSDKType {
    const obj: any = {};
    obj.market_id = message.marketId;
    message.tradeHistoryOptions !== undefined && (obj.trade_history_options = message.tradeHistoryOptions ? TradeHistoryOptions.toSDK(message.tradeHistoryOptions) : undefined);
    return obj;
  },
  fromAmino(object: QueryMarketVolatilityRequestAmino): QueryMarketVolatilityRequest {
    const message = createBaseQueryMarketVolatilityRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.trade_history_options !== undefined && object.trade_history_options !== null) {
      message.tradeHistoryOptions = TradeHistoryOptions.fromAmino(object.trade_history_options);
    }
    return message;
  },
  toAmino(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.trade_history_options = message.tradeHistoryOptions ? TradeHistoryOptions.toAmino(message.tradeHistoryOptions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketVolatilityRequestAminoMsg): QueryMarketVolatilityRequest {
    return QueryMarketVolatilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketVolatilityRequestProtoMsg): QueryMarketVolatilityRequest {
    return QueryMarketVolatilityRequest.decode(message.value);
  },
  toProto(message: QueryMarketVolatilityRequest): Uint8Array {
    return QueryMarketVolatilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
      value: QueryMarketVolatilityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketVolatilityResponse(): QueryMarketVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}
export const QueryMarketVolatilityResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
  encode(message: QueryMarketVolatilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volatility !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.volatility, 18).atomics);
    }
    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rawHistory) {
      TradeRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketVolatilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketVolatilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volatility = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
          break;
        case 3:
          message.rawHistory.push(TradeRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketVolatilityResponse {
    return {
      volatility: isSet(object.volatility) ? String(object.volatility) : "",
      historyMetadata: isSet(object.historyMetadata) ? MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
      rawHistory: Array.isArray(object?.rawHistory) ? object.rawHistory.map((e: any) => TradeRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryMarketVolatilityResponse): JsonSafe<QueryMarketVolatilityResponse> {
    const obj: any = {};
    message.volatility !== undefined && (obj.volatility = message.volatility);
    message.historyMetadata !== undefined && (obj.historyMetadata = message.historyMetadata ? MetadataStatistics.toJSON(message.historyMetadata) : undefined);
    if (message.rawHistory) {
      obj.rawHistory = message.rawHistory.map(e => e ? TradeRecord.toJSON(e) : undefined);
    } else {
      obj.rawHistory = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse {
    const message = createBaseQueryMarketVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryMarketVolatilityResponseSDKType): QueryMarketVolatilityResponse {
    return {
      volatility: object?.volatility,
      historyMetadata: object.history_metadata ? MetadataStatistics.fromSDK(object.history_metadata) : undefined,
      rawHistory: Array.isArray(object?.raw_history) ? object.raw_history.map((e: any) => TradeRecord.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseSDKType {
    const obj: any = {};
    obj.volatility = message.volatility;
    message.historyMetadata !== undefined && (obj.history_metadata = message.historyMetadata ? MetadataStatistics.toSDK(message.historyMetadata) : undefined);
    if (message.rawHistory) {
      obj.raw_history = message.rawHistory.map(e => e ? TradeRecord.toSDK(e) : undefined);
    } else {
      obj.raw_history = [];
    }
    return obj;
  },
  fromAmino(object: QueryMarketVolatilityResponseAmino): QueryMarketVolatilityResponse {
    const message = createBaseQueryMarketVolatilityResponse();
    if (object.volatility !== undefined && object.volatility !== null) {
      message.volatility = object.volatility;
    }
    if (object.history_metadata !== undefined && object.history_metadata !== null) {
      message.historyMetadata = MetadataStatistics.fromAmino(object.history_metadata);
    }
    message.rawHistory = object.raw_history?.map(e => TradeRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseAmino {
    const obj: any = {};
    obj.volatility = message.volatility === "" ? undefined : message.volatility;
    obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
    if (message.rawHistory) {
      obj.raw_history = message.rawHistory.map(e => e ? TradeRecord.toAmino(e) : undefined);
    } else {
      obj.raw_history = message.rawHistory;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMarketVolatilityResponseAminoMsg): QueryMarketVolatilityResponse {
    return QueryMarketVolatilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketVolatilityResponseProtoMsg): QueryMarketVolatilityResponse {
    return QueryMarketVolatilityResponse.decode(message.value);
  },
  toProto(message: QueryMarketVolatilityResponse): Uint8Array {
    return QueryMarketVolatilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
      value: QueryMarketVolatilityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBinaryMarketsRequest(): QueryBinaryMarketsRequest {
  return {
    status: ""
  };
}
export const QueryBinaryMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
  encode(message: QueryBinaryMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBinaryMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBinaryMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBinaryMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  toJSON(message: QueryBinaryMarketsRequest): JsonSafe<QueryBinaryMarketsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest {
    const message = createBaseQueryBinaryMarketsRequest();
    message.status = object.status ?? "";
    return message;
  },
  fromSDK(object: QueryBinaryMarketsRequestSDKType): QueryBinaryMarketsRequest {
    return {
      status: object?.status
    };
  },
  toSDK(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestSDKType {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAmino(object: QueryBinaryMarketsRequestAmino): QueryBinaryMarketsRequest {
    const message = createBaseQueryBinaryMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryBinaryMarketsRequestAminoMsg): QueryBinaryMarketsRequest {
    return QueryBinaryMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBinaryMarketsRequestProtoMsg): QueryBinaryMarketsRequest {
    return QueryBinaryMarketsRequest.decode(message.value);
  },
  toProto(message: QueryBinaryMarketsRequest): Uint8Array {
    return QueryBinaryMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
      value: QueryBinaryMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBinaryMarketsResponse(): QueryBinaryMarketsResponse {
  return {
    markets: []
  };
}
export const QueryBinaryMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
  encode(message: QueryBinaryMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBinaryMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBinaryMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBinaryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => BinaryOptionsMarket.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBinaryMarketsResponse): JsonSafe<QueryBinaryMarketsResponse> {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? BinaryOptionsMarket.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse {
    const message = createBaseQueryBinaryMarketsResponse();
    message.markets = object.markets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryBinaryMarketsResponseSDKType): QueryBinaryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => BinaryOptionsMarket.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseSDKType {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? BinaryOptionsMarket.toSDK(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAmino(object: QueryBinaryMarketsResponseAmino): QueryBinaryMarketsResponse {
    const message = createBaseQueryBinaryMarketsResponse();
    message.markets = object.markets?.map(e => BinaryOptionsMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBinaryMarketsResponseAminoMsg): QueryBinaryMarketsResponse {
    return QueryBinaryMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBinaryMarketsResponseProtoMsg): QueryBinaryMarketsResponse {
    return QueryBinaryMarketsResponse.decode(message.value);
  },
  toProto(message: QueryBinaryMarketsResponse): Uint8Array {
    return QueryBinaryMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
      value: QueryBinaryMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest(): QueryTraderDerivativeConditionalOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QueryTraderDerivativeConditionalOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
  encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderDerivativeConditionalOrdersRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  toJSON(message: QueryTraderDerivativeConditionalOrdersRequest): JsonSafe<QueryTraderDerivativeConditionalOrdersRequest> {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest {
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromSDK(object: QueryTraderDerivativeConditionalOrdersRequestSDKType): QueryTraderDerivativeConditionalOrdersRequest {
    return {
      subaccountId: object?.subaccount_id,
      marketId: object?.market_id
    };
  },
  toSDK(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestSDKType {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAmino(object: QueryTraderDerivativeConditionalOrdersRequestAmino): QueryTraderDerivativeConditionalOrdersRequest {
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersRequestAminoMsg): QueryTraderDerivativeConditionalOrdersRequest {
    return QueryTraderDerivativeConditionalOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequestProtoMsg): QueryTraderDerivativeConditionalOrdersRequest {
    return QueryTraderDerivativeConditionalOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeConditionalOrdersRequest): Uint8Array {
    return QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
      value: QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseTrimmedDerivativeConditionalOrder(): TrimmedDerivativeConditionalOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    triggerPrice: "",
    isBuy: false,
    isLimit: false,
    orderHash: ""
  };
}
export const TrimmedDerivativeConditionalOrder = {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
  encode(message: TrimmedDerivativeConditionalOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.triggerPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.isLimit === true) {
      writer.uint32(48).bool(message.isLimit);
    }
    if (message.orderHash !== "") {
      writer.uint32(58).string(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrimmedDerivativeConditionalOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedDerivativeConditionalOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.isBuy = reader.bool();
          break;
        case 6:
          message.isLimit = reader.bool();
          break;
        case 7:
          message.orderHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrimmedDerivativeConditionalOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      isLimit: isSet(object.isLimit) ? Boolean(object.isLimit) : false,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  toJSON(message: TrimmedDerivativeConditionalOrder): JsonSafe<TrimmedDerivativeConditionalOrder> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.margin !== undefined && (obj.margin = message.margin);
    message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
    message.isBuy !== undefined && (obj.isBuy = message.isBuy);
    message.isLimit !== undefined && (obj.isLimit = message.isLimit);
    message.orderHash !== undefined && (obj.orderHash = message.orderHash);
    return obj;
  },
  fromPartial(object: DeepPartial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder {
    const message = createBaseTrimmedDerivativeConditionalOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLimit = object.isLimit ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  },
  fromSDK(object: TrimmedDerivativeConditionalOrderSDKType): TrimmedDerivativeConditionalOrder {
    return {
      price: object?.price,
      quantity: object?.quantity,
      margin: object?.margin,
      triggerPrice: object?.triggerPrice,
      isBuy: object?.isBuy,
      isLimit: object?.isLimit,
      orderHash: object?.order_hash
    };
  },
  toSDK(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderSDKType {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.margin = message.margin;
    obj.triggerPrice = message.triggerPrice;
    obj.isBuy = message.isBuy;
    obj.isLimit = message.isLimit;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAmino(object: TrimmedDerivativeConditionalOrderAmino): TrimmedDerivativeConditionalOrder {
    const message = createBaseTrimmedDerivativeConditionalOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.triggerPrice !== undefined && object.triggerPrice !== null) {
      message.triggerPrice = object.triggerPrice;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    if (object.isLimit !== undefined && object.isLimit !== null) {
      message.isLimit = object.isLimit;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    return message;
  },
  toAmino(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.margin = message.margin === "" ? undefined : message.margin;
    obj.triggerPrice = message.triggerPrice === "" ? undefined : message.triggerPrice;
    obj.isBuy = message.isBuy ?? false;
    obj.isLimit = message.isLimit ?? false;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    return obj;
  },
  fromAminoMsg(object: TrimmedDerivativeConditionalOrderAminoMsg): TrimmedDerivativeConditionalOrder {
    return TrimmedDerivativeConditionalOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedDerivativeConditionalOrderProtoMsg): TrimmedDerivativeConditionalOrder {
    return TrimmedDerivativeConditionalOrder.decode(message.value);
  },
  toProto(message: TrimmedDerivativeConditionalOrder): Uint8Array {
    return TrimmedDerivativeConditionalOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
      value: TrimmedDerivativeConditionalOrder.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse(): QueryTraderDerivativeConditionalOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeConditionalOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
  encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeConditionalOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTraderDerivativeConditionalOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeConditionalOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTraderDerivativeConditionalOrdersResponse): JsonSafe<QueryTraderDerivativeConditionalOrdersResponse> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeConditionalOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse {
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTraderDerivativeConditionalOrdersResponseSDKType): QueryTraderDerivativeConditionalOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeConditionalOrder.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeConditionalOrder.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAmino(object: QueryTraderDerivativeConditionalOrdersResponseAmino): QueryTraderDerivativeConditionalOrdersResponse {
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeConditionalOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersResponseAminoMsg): QueryTraderDerivativeConditionalOrdersResponse {
    return QueryTraderDerivativeConditionalOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponseProtoMsg): QueryTraderDerivativeConditionalOrdersResponse {
    return QueryTraderDerivativeConditionalOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeConditionalOrdersResponse): Uint8Array {
    return QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
      value: QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish()
    };
  }
};