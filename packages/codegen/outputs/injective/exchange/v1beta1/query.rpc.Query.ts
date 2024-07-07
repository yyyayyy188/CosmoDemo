import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, NinjaVaultInfosRequest, NinjaVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves exchange params */
  queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse>;
  /** Retrieves a Subaccount's Deposits */
  subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse>;
  /** Retrieves a Subaccount's Deposits */
  subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse>;
  /** Retrieves all of the balances of all users on the exchange. */
  exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse>;
  /** Retrieves a list of spot markets. */
  spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse>;
  /** Retrieves a spot market by ticker */
  spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse>;
  /** Retrieves a spot market's orderbook by marketID */
  spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse>;
  /** Retrieves a trader's spot orders */
  traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
  /** Retrieves spot orders corresponding to specified order hashes for a given subaccountID and marketID */
  spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse>;
  /** Retrieves subaccount's orders */
  subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse>;
  /** Retrieves a trader's transient spot orders */
  traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
  /** Retrieves a spot market's mid-price */
  spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse>;
  /** Retrieves a derivative market's mid-price */
  derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse>;
  /** Retrieves a derivative market's orderbook by marketID */
  derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse>;
  /** Retrieves a trader's derivative orders */
  traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
  /** Retrieves a trader's derivative orders */
  derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse>;
  /** Retrieves a trader's transient derivative orders */
  traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
  /** Retrieves a list of derivative markets. */
  derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse>;
  /** Retrieves a derivative market by ticker */
  derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse>;
  /** Retrieves a derivative market's corresponding address for fees that contribute to the market's insurance fund */
  derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse>;
  /** Retrieves a subaccount's trade nonce */
  subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse>;
  /** Retrieves the entire exchange module's state */
  exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /** Retrieves the entire exchange module's positions */
  positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse>;
  /** Retrieves subaccount's positions */
  subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse>;
  /** Retrieves subaccount's position in market */
  subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse>;
  /** Retrieves subaccount's position in market */
  subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
  /** Retrieves perpetual market info */
  perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse>;
  /** Retrieves expiry market info */
  expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse>;
  /** Retrieves perpetual market funding */
  perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse>;
  /** Retrieves subaccount's order metadata */
  subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse>;
  /** Retrieves the account and total trade rewards points */
  tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
  /** Retrieves the pending account and total trade rewards points */
  pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
  /** Retrieves the trade reward campaign */
  tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse>;
  /** Retrieves the account's fee discount info */
  feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse>;
  /** Retrieves the fee discount schedule */
  feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse>;
  /** Retrieves mismatches between available vs. total balance */
  balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse>;
  /** Retrieves available and total balances with balance holds */
  balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse>;
  /** Retrieves fee discount tier stats */
  feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse>;
  /** Retrieves market making pool info */
  ninjaVaultInfos(request?: NinjaVaultInfosRequest): Promise<NinjaVaultInfosResponse>;
  /** QueryMarketIDFromVault returns the market ID for a given vault subaccount ID */
  queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse>;
  /** Retrieves historical trade records for a given market ID */
  historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse>;
  /** Retrieves if the account is opted out of rewards */
  isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse>;
  /** Retrieves all accounts opted out of rewards */
  optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse>;
  /** MarketVolatility computes the volatility for spot and derivative markets trading history. */
  marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse>;
  /** Retrieves a spot market's orderbook by marketID */
  binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse>;
  /** Retrieves a trader's derivative conditional orders */
  traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryExchangeParams = this.queryExchangeParams.bind(this);
    this.subaccountDeposits = this.subaccountDeposits.bind(this);
    this.subaccountDeposit = this.subaccountDeposit.bind(this);
    this.exchangeBalances = this.exchangeBalances.bind(this);
    this.spotMarkets = this.spotMarkets.bind(this);
    this.spotMarket = this.spotMarket.bind(this);
    this.spotOrderbook = this.spotOrderbook.bind(this);
    this.traderSpotOrders = this.traderSpotOrders.bind(this);
    this.spotOrdersByHashes = this.spotOrdersByHashes.bind(this);
    this.subaccountOrders = this.subaccountOrders.bind(this);
    this.traderSpotTransientOrders = this.traderSpotTransientOrders.bind(this);
    this.spotMidPriceAndTOB = this.spotMidPriceAndTOB.bind(this);
    this.derivativeMidPriceAndTOB = this.derivativeMidPriceAndTOB.bind(this);
    this.derivativeOrderbook = this.derivativeOrderbook.bind(this);
    this.traderDerivativeOrders = this.traderDerivativeOrders.bind(this);
    this.derivativeOrdersByHashes = this.derivativeOrdersByHashes.bind(this);
    this.traderDerivativeTransientOrders = this.traderDerivativeTransientOrders.bind(this);
    this.derivativeMarkets = this.derivativeMarkets.bind(this);
    this.derivativeMarket = this.derivativeMarket.bind(this);
    this.derivativeMarketAddress = this.derivativeMarketAddress.bind(this);
    this.subaccountTradeNonce = this.subaccountTradeNonce.bind(this);
    this.exchangeModuleState = this.exchangeModuleState.bind(this);
    this.positions = this.positions.bind(this);
    this.subaccountPositions = this.subaccountPositions.bind(this);
    this.subaccountPositionInMarket = this.subaccountPositionInMarket.bind(this);
    this.subaccountEffectivePositionInMarket = this.subaccountEffectivePositionInMarket.bind(this);
    this.perpetualMarketInfo = this.perpetualMarketInfo.bind(this);
    this.expiryFuturesMarketInfo = this.expiryFuturesMarketInfo.bind(this);
    this.perpetualMarketFunding = this.perpetualMarketFunding.bind(this);
    this.subaccountOrderMetadata = this.subaccountOrderMetadata.bind(this);
    this.tradeRewardPoints = this.tradeRewardPoints.bind(this);
    this.pendingTradeRewardPoints = this.pendingTradeRewardPoints.bind(this);
    this.tradeRewardCampaign = this.tradeRewardCampaign.bind(this);
    this.feeDiscountAccountInfo = this.feeDiscountAccountInfo.bind(this);
    this.feeDiscountSchedule = this.feeDiscountSchedule.bind(this);
    this.balanceMismatches = this.balanceMismatches.bind(this);
    this.balanceWithBalanceHolds = this.balanceWithBalanceHolds.bind(this);
    this.feeDiscountTierStatistics = this.feeDiscountTierStatistics.bind(this);
    this.ninjaVaultInfos = this.ninjaVaultInfos.bind(this);
    this.queryMarketIDFromVault = this.queryMarketIDFromVault.bind(this);
    this.historicalTradeRecords = this.historicalTradeRecords.bind(this);
    this.isOptedOutOfRewards = this.isOptedOutOfRewards.bind(this);
    this.optedOutOfRewardsAccounts = this.optedOutOfRewardsAccounts.bind(this);
    this.marketVolatility = this.marketVolatility.bind(this);
    this.binaryOptionsMarkets = this.binaryOptionsMarkets.bind(this);
    this.traderDerivativeConditionalOrders = this.traderDerivativeConditionalOrders.bind(this);
  }
  queryExchangeParams(request: QueryExchangeParamsRequest = {}): Promise<QueryExchangeParamsResponse> {
    const data = QueryExchangeParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryExchangeParams", data);
    return promise.then(data => QueryExchangeParamsResponse.decode(new BinaryReader(data)));
  }
  subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse> {
    const data = QuerySubaccountDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposits", data);
    return promise.then(data => QuerySubaccountDepositsResponse.decode(new BinaryReader(data)));
  }
  subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse> {
    const data = QuerySubaccountDepositRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposit", data);
    return promise.then(data => QuerySubaccountDepositResponse.decode(new BinaryReader(data)));
  }
  exchangeBalances(request: QueryExchangeBalancesRequest = {}): Promise<QueryExchangeBalancesResponse> {
    const data = QueryExchangeBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeBalances", data);
    return promise.then(data => QueryExchangeBalancesResponse.decode(new BinaryReader(data)));
  }
  spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse> {
    const data = QuerySpotMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarkets", data);
    return promise.then(data => QuerySpotMarketsResponse.decode(new BinaryReader(data)));
  }
  spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse> {
    const data = QuerySpotMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarket", data);
    return promise.then(data => QuerySpotMarketResponse.decode(new BinaryReader(data)));
  }
  spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse> {
    const data = QuerySpotOrderbookRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrderbook", data);
    return promise.then(data => QuerySpotOrderbookResponse.decode(new BinaryReader(data)));
  }
  traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
    const data = QueryTraderSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotOrders", data);
    return promise.then(data => QueryTraderSpotOrdersResponse.decode(new BinaryReader(data)));
  }
  spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse> {
    const data = QuerySpotOrdersByHashesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrdersByHashes", data);
    return promise.then(data => QuerySpotOrdersByHashesResponse.decode(new BinaryReader(data)));
  }
  subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse> {
    const data = QuerySubaccountOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrders", data);
    return promise.then(data => QuerySubaccountOrdersResponse.decode(new BinaryReader(data)));
  }
  traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
    const data = QueryTraderSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotTransientOrders", data);
    return promise.then(data => QueryTraderSpotOrdersResponse.decode(new BinaryReader(data)));
  }
  spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse> {
    const data = QuerySpotMidPriceAndTOBRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMidPriceAndTOB", data);
    return promise.then(data => QuerySpotMidPriceAndTOBResponse.decode(new BinaryReader(data)));
  }
  derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse> {
    const data = QueryDerivativeMidPriceAndTOBRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMidPriceAndTOB", data);
    return promise.then(data => QueryDerivativeMidPriceAndTOBResponse.decode(new BinaryReader(data)));
  }
  derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse> {
    const data = QueryDerivativeOrderbookRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrderbook", data);
    return promise.then(data => QueryDerivativeOrderbookResponse.decode(new BinaryReader(data)));
  }
  traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
    const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeOrders", data);
    return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new BinaryReader(data)));
  }
  derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse> {
    const data = QueryDerivativeOrdersByHashesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrdersByHashes", data);
    return promise.then(data => QueryDerivativeOrdersByHashesResponse.decode(new BinaryReader(data)));
  }
  traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
    const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeTransientOrders", data);
    return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new BinaryReader(data)));
  }
  derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse> {
    const data = QueryDerivativeMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarkets", data);
    return promise.then(data => QueryDerivativeMarketsResponse.decode(new BinaryReader(data)));
  }
  derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse> {
    const data = QueryDerivativeMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarket", data);
    return promise.then(data => QueryDerivativeMarketResponse.decode(new BinaryReader(data)));
  }
  derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse> {
    const data = QueryDerivativeMarketAddressRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarketAddress", data);
    return promise.then(data => QueryDerivativeMarketAddressResponse.decode(new BinaryReader(data)));
  }
  subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse> {
    const data = QuerySubaccountTradeNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountTradeNonce", data);
    return promise.then(data => QuerySubaccountTradeNonceResponse.decode(new BinaryReader(data)));
  }
  exchangeModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
  positions(request: QueryPositionsRequest = {}): Promise<QueryPositionsResponse> {
    const data = QueryPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "Positions", data);
    return promise.then(data => QueryPositionsResponse.decode(new BinaryReader(data)));
  }
  subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse> {
    const data = QuerySubaccountPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositions", data);
    return promise.then(data => QuerySubaccountPositionsResponse.decode(new BinaryReader(data)));
  }
  subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse> {
    const data = QuerySubaccountPositionInMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositionInMarket", data);
    return promise.then(data => QuerySubaccountPositionInMarketResponse.decode(new BinaryReader(data)));
  }
  subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse> {
    const data = QuerySubaccountEffectivePositionInMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountEffectivePositionInMarket", data);
    return promise.then(data => QuerySubaccountEffectivePositionInMarketResponse.decode(new BinaryReader(data)));
  }
  perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse> {
    const data = QueryPerpetualMarketInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketInfo", data);
    return promise.then(data => QueryPerpetualMarketInfoResponse.decode(new BinaryReader(data)));
  }
  expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse> {
    const data = QueryExpiryFuturesMarketInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExpiryFuturesMarketInfo", data);
    return promise.then(data => QueryExpiryFuturesMarketInfoResponse.decode(new BinaryReader(data)));
  }
  perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse> {
    const data = QueryPerpetualMarketFundingRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketFunding", data);
    return promise.then(data => QueryPerpetualMarketFundingResponse.decode(new BinaryReader(data)));
  }
  subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse> {
    const data = QuerySubaccountOrderMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrderMetadata", data);
    return promise.then(data => QuerySubaccountOrderMetadataResponse.decode(new BinaryReader(data)));
  }
  tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
    const data = QueryTradeRewardPointsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardPoints", data);
    return promise.then(data => QueryTradeRewardPointsResponse.decode(new BinaryReader(data)));
  }
  pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
    const data = QueryTradeRewardPointsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PendingTradeRewardPoints", data);
    return promise.then(data => QueryTradeRewardPointsResponse.decode(new BinaryReader(data)));
  }
  tradeRewardCampaign(request: QueryTradeRewardCampaignRequest = {}): Promise<QueryTradeRewardCampaignResponse> {
    const data = QueryTradeRewardCampaignRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardCampaign", data);
    return promise.then(data => QueryTradeRewardCampaignResponse.decode(new BinaryReader(data)));
  }
  feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse> {
    const data = QueryFeeDiscountAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountAccountInfo", data);
    return promise.then(data => QueryFeeDiscountAccountInfoResponse.decode(new BinaryReader(data)));
  }
  feeDiscountSchedule(request: QueryFeeDiscountScheduleRequest = {}): Promise<QueryFeeDiscountScheduleResponse> {
    const data = QueryFeeDiscountScheduleRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountSchedule", data);
    return promise.then(data => QueryFeeDiscountScheduleResponse.decode(new BinaryReader(data)));
  }
  balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse> {
    const data = QueryBalanceMismatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceMismatches", data);
    return promise.then(data => QueryBalanceMismatchesResponse.decode(new BinaryReader(data)));
  }
  balanceWithBalanceHolds(request: QueryBalanceWithBalanceHoldsRequest = {}): Promise<QueryBalanceWithBalanceHoldsResponse> {
    const data = QueryBalanceWithBalanceHoldsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceWithBalanceHolds", data);
    return promise.then(data => QueryBalanceWithBalanceHoldsResponse.decode(new BinaryReader(data)));
  }
  feeDiscountTierStatistics(request: QueryFeeDiscountTierStatisticsRequest = {}): Promise<QueryFeeDiscountTierStatisticsResponse> {
    const data = QueryFeeDiscountTierStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountTierStatistics", data);
    return promise.then(data => QueryFeeDiscountTierStatisticsResponse.decode(new BinaryReader(data)));
  }
  ninjaVaultInfos(request: NinjaVaultInfosRequest = {}): Promise<NinjaVaultInfosResponse> {
    const data = NinjaVaultInfosRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "NinjaVaultInfos", data);
    return promise.then(data => NinjaVaultInfosResponse.decode(new BinaryReader(data)));
  }
  queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse> {
    const data = QueryMarketIDFromVaultRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryMarketIDFromVault", data);
    return promise.then(data => QueryMarketIDFromVaultResponse.decode(new BinaryReader(data)));
  }
  historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse> {
    const data = QueryHistoricalTradeRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "HistoricalTradeRecords", data);
    return promise.then(data => QueryHistoricalTradeRecordsResponse.decode(new BinaryReader(data)));
  }
  isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse> {
    const data = QueryIsOptedOutOfRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "IsOptedOutOfRewards", data);
    return promise.then(data => QueryIsOptedOutOfRewardsResponse.decode(new BinaryReader(data)));
  }
  optedOutOfRewardsAccounts(request: QueryOptedOutOfRewardsAccountsRequest = {}): Promise<QueryOptedOutOfRewardsAccountsResponse> {
    const data = QueryOptedOutOfRewardsAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "OptedOutOfRewardsAccounts", data);
    return promise.then(data => QueryOptedOutOfRewardsAccountsResponse.decode(new BinaryReader(data)));
  }
  marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse> {
    const data = QueryMarketVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MarketVolatility", data);
    return promise.then(data => QueryMarketVolatilityResponse.decode(new BinaryReader(data)));
  }
  binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse> {
    const data = QueryBinaryMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BinaryOptionsMarkets", data);
    return promise.then(data => QueryBinaryMarketsResponse.decode(new BinaryReader(data)));
  }
  traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse> {
    const data = QueryTraderDerivativeConditionalOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeConditionalOrders", data);
    return promise.then(data => QueryTraderDerivativeConditionalOrdersResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse> {
      return queryService.queryExchangeParams(request);
    },
    subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse> {
      return queryService.subaccountDeposits(request);
    },
    subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse> {
      return queryService.subaccountDeposit(request);
    },
    exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse> {
      return queryService.exchangeBalances(request);
    },
    spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse> {
      return queryService.spotMarkets(request);
    },
    spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse> {
      return queryService.spotMarket(request);
    },
    spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse> {
      return queryService.spotOrderbook(request);
    },
    traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
      return queryService.traderSpotOrders(request);
    },
    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse> {
      return queryService.spotOrdersByHashes(request);
    },
    subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse> {
      return queryService.subaccountOrders(request);
    },
    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
      return queryService.traderSpotTransientOrders(request);
    },
    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse> {
      return queryService.spotMidPriceAndTOB(request);
    },
    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse> {
      return queryService.derivativeMidPriceAndTOB(request);
    },
    derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse> {
      return queryService.derivativeOrderbook(request);
    },
    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
      return queryService.traderDerivativeOrders(request);
    },
    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse> {
      return queryService.derivativeOrdersByHashes(request);
    },
    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
      return queryService.traderDerivativeTransientOrders(request);
    },
    derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse> {
      return queryService.derivativeMarkets(request);
    },
    derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse> {
      return queryService.derivativeMarket(request);
    },
    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse> {
      return queryService.derivativeMarketAddress(request);
    },
    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse> {
      return queryService.subaccountTradeNonce(request);
    },
    exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.exchangeModuleState(request);
    },
    positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse> {
      return queryService.positions(request);
    },
    subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse> {
      return queryService.subaccountPositions(request);
    },
    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse> {
      return queryService.subaccountPositionInMarket(request);
    },
    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse> {
      return queryService.subaccountEffectivePositionInMarket(request);
    },
    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse> {
      return queryService.perpetualMarketInfo(request);
    },
    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse> {
      return queryService.expiryFuturesMarketInfo(request);
    },
    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse> {
      return queryService.perpetualMarketFunding(request);
    },
    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse> {
      return queryService.subaccountOrderMetadata(request);
    },
    tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
      return queryService.tradeRewardPoints(request);
    },
    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
      return queryService.pendingTradeRewardPoints(request);
    },
    tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse> {
      return queryService.tradeRewardCampaign(request);
    },
    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse> {
      return queryService.feeDiscountAccountInfo(request);
    },
    feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse> {
      return queryService.feeDiscountSchedule(request);
    },
    balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse> {
      return queryService.balanceMismatches(request);
    },
    balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse> {
      return queryService.balanceWithBalanceHolds(request);
    },
    feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse> {
      return queryService.feeDiscountTierStatistics(request);
    },
    ninjaVaultInfos(request?: NinjaVaultInfosRequest): Promise<NinjaVaultInfosResponse> {
      return queryService.ninjaVaultInfos(request);
    },
    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse> {
      return queryService.queryMarketIDFromVault(request);
    },
    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse> {
      return queryService.historicalTradeRecords(request);
    },
    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse> {
      return queryService.isOptedOutOfRewards(request);
    },
    optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse> {
      return queryService.optedOutOfRewardsAccounts(request);
    },
    marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse> {
      return queryService.marketVolatility(request);
    },
    binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse> {
      return queryService.binaryOptionsMarkets(request);
    },
    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse> {
      return queryService.traderDerivativeConditionalOrders(request);
    }
  };
};
export interface UseQueryExchangeParamsQuery<TData> extends ReactQueryParams<QueryExchangeParamsResponse, TData> {
  request?: QueryExchangeParamsRequest;
}
export interface UseSubaccountDepositsQuery<TData> extends ReactQueryParams<QuerySubaccountDepositsResponse, TData> {
  request: QuerySubaccountDepositsRequest;
}
export interface UseSubaccountDepositQuery<TData> extends ReactQueryParams<QuerySubaccountDepositResponse, TData> {
  request: QuerySubaccountDepositRequest;
}
export interface UseExchangeBalancesQuery<TData> extends ReactQueryParams<QueryExchangeBalancesResponse, TData> {
  request?: QueryExchangeBalancesRequest;
}
export interface UseSpotMarketsQuery<TData> extends ReactQueryParams<QuerySpotMarketsResponse, TData> {
  request: QuerySpotMarketsRequest;
}
export interface UseSpotMarketQuery<TData> extends ReactQueryParams<QuerySpotMarketResponse, TData> {
  request: QuerySpotMarketRequest;
}
export interface UseSpotOrderbookQuery<TData> extends ReactQueryParams<QuerySpotOrderbookResponse, TData> {
  request: QuerySpotOrderbookRequest;
}
export interface UseTraderSpotOrdersQuery<TData> extends ReactQueryParams<QueryTraderSpotOrdersResponse, TData> {
  request: QueryTraderSpotOrdersRequest;
}
export interface UseSpotOrdersByHashesQuery<TData> extends ReactQueryParams<QuerySpotOrdersByHashesResponse, TData> {
  request: QuerySpotOrdersByHashesRequest;
}
export interface UseSubaccountOrdersQuery<TData> extends ReactQueryParams<QuerySubaccountOrdersResponse, TData> {
  request: QuerySubaccountOrdersRequest;
}
export interface UseTraderSpotTransientOrdersQuery<TData> extends ReactQueryParams<QueryTraderSpotOrdersResponse, TData> {
  request: QueryTraderSpotOrdersRequest;
}
export interface UseSpotMidPriceAndTOBQuery<TData> extends ReactQueryParams<QuerySpotMidPriceAndTOBResponse, TData> {
  request: QuerySpotMidPriceAndTOBRequest;
}
export interface UseDerivativeMidPriceAndTOBQuery<TData> extends ReactQueryParams<QueryDerivativeMidPriceAndTOBResponse, TData> {
  request: QueryDerivativeMidPriceAndTOBRequest;
}
export interface UseDerivativeOrderbookQuery<TData> extends ReactQueryParams<QueryDerivativeOrderbookResponse, TData> {
  request: QueryDerivativeOrderbookRequest;
}
export interface UseTraderDerivativeOrdersQuery<TData> extends ReactQueryParams<QueryTraderDerivativeOrdersResponse, TData> {
  request: QueryTraderDerivativeOrdersRequest;
}
export interface UseDerivativeOrdersByHashesQuery<TData> extends ReactQueryParams<QueryDerivativeOrdersByHashesResponse, TData> {
  request: QueryDerivativeOrdersByHashesRequest;
}
export interface UseTraderDerivativeTransientOrdersQuery<TData> extends ReactQueryParams<QueryTraderDerivativeOrdersResponse, TData> {
  request: QueryTraderDerivativeOrdersRequest;
}
export interface UseDerivativeMarketsQuery<TData> extends ReactQueryParams<QueryDerivativeMarketsResponse, TData> {
  request: QueryDerivativeMarketsRequest;
}
export interface UseDerivativeMarketQuery<TData> extends ReactQueryParams<QueryDerivativeMarketResponse, TData> {
  request: QueryDerivativeMarketRequest;
}
export interface UseDerivativeMarketAddressQuery<TData> extends ReactQueryParams<QueryDerivativeMarketAddressResponse, TData> {
  request: QueryDerivativeMarketAddressRequest;
}
export interface UseSubaccountTradeNonceQuery<TData> extends ReactQueryParams<QuerySubaccountTradeNonceResponse, TData> {
  request: QuerySubaccountTradeNonceRequest;
}
export interface UseExchangeModuleStateQuery<TData> extends ReactQueryParams<QueryModuleStateResponse, TData> {
  request?: QueryModuleStateRequest;
}
export interface UsePositionsQuery<TData> extends ReactQueryParams<QueryPositionsResponse, TData> {
  request?: QueryPositionsRequest;
}
export interface UseSubaccountPositionsQuery<TData> extends ReactQueryParams<QuerySubaccountPositionsResponse, TData> {
  request: QuerySubaccountPositionsRequest;
}
export interface UseSubaccountPositionInMarketQuery<TData> extends ReactQueryParams<QuerySubaccountPositionInMarketResponse, TData> {
  request: QuerySubaccountPositionInMarketRequest;
}
export interface UseSubaccountEffectivePositionInMarketQuery<TData> extends ReactQueryParams<QuerySubaccountEffectivePositionInMarketResponse, TData> {
  request: QuerySubaccountEffectivePositionInMarketRequest;
}
export interface UsePerpetualMarketInfoQuery<TData> extends ReactQueryParams<QueryPerpetualMarketInfoResponse, TData> {
  request: QueryPerpetualMarketInfoRequest;
}
export interface UseExpiryFuturesMarketInfoQuery<TData> extends ReactQueryParams<QueryExpiryFuturesMarketInfoResponse, TData> {
  request: QueryExpiryFuturesMarketInfoRequest;
}
export interface UsePerpetualMarketFundingQuery<TData> extends ReactQueryParams<QueryPerpetualMarketFundingResponse, TData> {
  request: QueryPerpetualMarketFundingRequest;
}
export interface UseSubaccountOrderMetadataQuery<TData> extends ReactQueryParams<QuerySubaccountOrderMetadataResponse, TData> {
  request: QuerySubaccountOrderMetadataRequest;
}
export interface UseTradeRewardPointsQuery<TData> extends ReactQueryParams<QueryTradeRewardPointsResponse, TData> {
  request: QueryTradeRewardPointsRequest;
}
export interface UsePendingTradeRewardPointsQuery<TData> extends ReactQueryParams<QueryTradeRewardPointsResponse, TData> {
  request: QueryTradeRewardPointsRequest;
}
export interface UseTradeRewardCampaignQuery<TData> extends ReactQueryParams<QueryTradeRewardCampaignResponse, TData> {
  request?: QueryTradeRewardCampaignRequest;
}
export interface UseFeeDiscountAccountInfoQuery<TData> extends ReactQueryParams<QueryFeeDiscountAccountInfoResponse, TData> {
  request: QueryFeeDiscountAccountInfoRequest;
}
export interface UseFeeDiscountScheduleQuery<TData> extends ReactQueryParams<QueryFeeDiscountScheduleResponse, TData> {
  request?: QueryFeeDiscountScheduleRequest;
}
export interface UseBalanceMismatchesQuery<TData> extends ReactQueryParams<QueryBalanceMismatchesResponse, TData> {
  request: QueryBalanceMismatchesRequest;
}
export interface UseBalanceWithBalanceHoldsQuery<TData> extends ReactQueryParams<QueryBalanceWithBalanceHoldsResponse, TData> {
  request?: QueryBalanceWithBalanceHoldsRequest;
}
export interface UseFeeDiscountTierStatisticsQuery<TData> extends ReactQueryParams<QueryFeeDiscountTierStatisticsResponse, TData> {
  request?: QueryFeeDiscountTierStatisticsRequest;
}
export interface UseNinjaVaultInfosQuery<TData> extends ReactQueryParams<NinjaVaultInfosResponse, TData> {
  request?: NinjaVaultInfosRequest;
}
export interface UseQueryMarketIDFromVaultQuery<TData> extends ReactQueryParams<QueryMarketIDFromVaultResponse, TData> {
  request: QueryMarketIDFromVaultRequest;
}
export interface UseHistoricalTradeRecordsQuery<TData> extends ReactQueryParams<QueryHistoricalTradeRecordsResponse, TData> {
  request: QueryHistoricalTradeRecordsRequest;
}
export interface UseIsOptedOutOfRewardsQuery<TData> extends ReactQueryParams<QueryIsOptedOutOfRewardsResponse, TData> {
  request: QueryIsOptedOutOfRewardsRequest;
}
export interface UseOptedOutOfRewardsAccountsQuery<TData> extends ReactQueryParams<QueryOptedOutOfRewardsAccountsResponse, TData> {
  request?: QueryOptedOutOfRewardsAccountsRequest;
}
export interface UseMarketVolatilityQuery<TData> extends ReactQueryParams<QueryMarketVolatilityResponse, TData> {
  request: QueryMarketVolatilityRequest;
}
export interface UseBinaryOptionsMarketsQuery<TData> extends ReactQueryParams<QueryBinaryMarketsResponse, TData> {
  request: QueryBinaryMarketsRequest;
}
export interface UseTraderDerivativeConditionalOrdersQuery<TData> extends ReactQueryParams<QueryTraderDerivativeConditionalOrdersResponse, TData> {
  request: QueryTraderDerivativeConditionalOrdersRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useQueryExchangeParams = <TData = QueryExchangeParamsResponse,>({
    request,
    options
  }: UseQueryExchangeParamsQuery<TData>) => {
    return useQuery<QueryExchangeParamsResponse, Error, TData>(["queryExchangeParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.queryExchangeParams(request);
    }, options);
  };
  const useSubaccountDeposits = <TData = QuerySubaccountDepositsResponse,>({
    request,
    options
  }: UseSubaccountDepositsQuery<TData>) => {
    return useQuery<QuerySubaccountDepositsResponse, Error, TData>(["subaccountDepositsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountDeposits(request);
    }, options);
  };
  const useSubaccountDeposit = <TData = QuerySubaccountDepositResponse,>({
    request,
    options
  }: UseSubaccountDepositQuery<TData>) => {
    return useQuery<QuerySubaccountDepositResponse, Error, TData>(["subaccountDepositQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountDeposit(request);
    }, options);
  };
  const useExchangeBalances = <TData = QueryExchangeBalancesResponse,>({
    request,
    options
  }: UseExchangeBalancesQuery<TData>) => {
    return useQuery<QueryExchangeBalancesResponse, Error, TData>(["exchangeBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.exchangeBalances(request);
    }, options);
  };
  const useSpotMarkets = <TData = QuerySpotMarketsResponse,>({
    request,
    options
  }: UseSpotMarketsQuery<TData>) => {
    return useQuery<QuerySpotMarketsResponse, Error, TData>(["spotMarketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotMarkets(request);
    }, options);
  };
  const useSpotMarket = <TData = QuerySpotMarketResponse,>({
    request,
    options
  }: UseSpotMarketQuery<TData>) => {
    return useQuery<QuerySpotMarketResponse, Error, TData>(["spotMarketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotMarket(request);
    }, options);
  };
  const useSpotOrderbook = <TData = QuerySpotOrderbookResponse,>({
    request,
    options
  }: UseSpotOrderbookQuery<TData>) => {
    return useQuery<QuerySpotOrderbookResponse, Error, TData>(["spotOrderbookQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotOrderbook(request);
    }, options);
  };
  const useTraderSpotOrders = <TData = QueryTraderSpotOrdersResponse,>({
    request,
    options
  }: UseTraderSpotOrdersQuery<TData>) => {
    return useQuery<QueryTraderSpotOrdersResponse, Error, TData>(["traderSpotOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.traderSpotOrders(request);
    }, options);
  };
  const useSpotOrdersByHashes = <TData = QuerySpotOrdersByHashesResponse,>({
    request,
    options
  }: UseSpotOrdersByHashesQuery<TData>) => {
    return useQuery<QuerySpotOrdersByHashesResponse, Error, TData>(["spotOrdersByHashesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotOrdersByHashes(request);
    }, options);
  };
  const useSubaccountOrders = <TData = QuerySubaccountOrdersResponse,>({
    request,
    options
  }: UseSubaccountOrdersQuery<TData>) => {
    return useQuery<QuerySubaccountOrdersResponse, Error, TData>(["subaccountOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountOrders(request);
    }, options);
  };
  const useTraderSpotTransientOrders = <TData = QueryTraderSpotOrdersResponse,>({
    request,
    options
  }: UseTraderSpotTransientOrdersQuery<TData>) => {
    return useQuery<QueryTraderSpotOrdersResponse, Error, TData>(["traderSpotTransientOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.traderSpotTransientOrders(request);
    }, options);
  };
  const useSpotMidPriceAndTOB = <TData = QuerySpotMidPriceAndTOBResponse,>({
    request,
    options
  }: UseSpotMidPriceAndTOBQuery<TData>) => {
    return useQuery<QuerySpotMidPriceAndTOBResponse, Error, TData>(["spotMidPriceAndTOBQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotMidPriceAndTOB(request);
    }, options);
  };
  const useDerivativeMidPriceAndTOB = <TData = QueryDerivativeMidPriceAndTOBResponse,>({
    request,
    options
  }: UseDerivativeMidPriceAndTOBQuery<TData>) => {
    return useQuery<QueryDerivativeMidPriceAndTOBResponse, Error, TData>(["derivativeMidPriceAndTOBQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.derivativeMidPriceAndTOB(request);
    }, options);
  };
  const useDerivativeOrderbook = <TData = QueryDerivativeOrderbookResponse,>({
    request,
    options
  }: UseDerivativeOrderbookQuery<TData>) => {
    return useQuery<QueryDerivativeOrderbookResponse, Error, TData>(["derivativeOrderbookQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.derivativeOrderbook(request);
    }, options);
  };
  const useTraderDerivativeOrders = <TData = QueryTraderDerivativeOrdersResponse,>({
    request,
    options
  }: UseTraderDerivativeOrdersQuery<TData>) => {
    return useQuery<QueryTraderDerivativeOrdersResponse, Error, TData>(["traderDerivativeOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.traderDerivativeOrders(request);
    }, options);
  };
  const useDerivativeOrdersByHashes = <TData = QueryDerivativeOrdersByHashesResponse,>({
    request,
    options
  }: UseDerivativeOrdersByHashesQuery<TData>) => {
    return useQuery<QueryDerivativeOrdersByHashesResponse, Error, TData>(["derivativeOrdersByHashesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.derivativeOrdersByHashes(request);
    }, options);
  };
  const useTraderDerivativeTransientOrders = <TData = QueryTraderDerivativeOrdersResponse,>({
    request,
    options
  }: UseTraderDerivativeTransientOrdersQuery<TData>) => {
    return useQuery<QueryTraderDerivativeOrdersResponse, Error, TData>(["traderDerivativeTransientOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.traderDerivativeTransientOrders(request);
    }, options);
  };
  const useDerivativeMarkets = <TData = QueryDerivativeMarketsResponse,>({
    request,
    options
  }: UseDerivativeMarketsQuery<TData>) => {
    return useQuery<QueryDerivativeMarketsResponse, Error, TData>(["derivativeMarketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.derivativeMarkets(request);
    }, options);
  };
  const useDerivativeMarket = <TData = QueryDerivativeMarketResponse,>({
    request,
    options
  }: UseDerivativeMarketQuery<TData>) => {
    return useQuery<QueryDerivativeMarketResponse, Error, TData>(["derivativeMarketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.derivativeMarket(request);
    }, options);
  };
  const useDerivativeMarketAddress = <TData = QueryDerivativeMarketAddressResponse,>({
    request,
    options
  }: UseDerivativeMarketAddressQuery<TData>) => {
    return useQuery<QueryDerivativeMarketAddressResponse, Error, TData>(["derivativeMarketAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.derivativeMarketAddress(request);
    }, options);
  };
  const useSubaccountTradeNonce = <TData = QuerySubaccountTradeNonceResponse,>({
    request,
    options
  }: UseSubaccountTradeNonceQuery<TData>) => {
    return useQuery<QuerySubaccountTradeNonceResponse, Error, TData>(["subaccountTradeNonceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountTradeNonce(request);
    }, options);
  };
  const useExchangeModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseExchangeModuleStateQuery<TData>) => {
    return useQuery<QueryModuleStateResponse, Error, TData>(["exchangeModuleStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.exchangeModuleState(request);
    }, options);
  };
  const usePositions = <TData = QueryPositionsResponse,>({
    request,
    options
  }: UsePositionsQuery<TData>) => {
    return useQuery<QueryPositionsResponse, Error, TData>(["positionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.positions(request);
    }, options);
  };
  const useSubaccountPositions = <TData = QuerySubaccountPositionsResponse,>({
    request,
    options
  }: UseSubaccountPositionsQuery<TData>) => {
    return useQuery<QuerySubaccountPositionsResponse, Error, TData>(["subaccountPositionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountPositions(request);
    }, options);
  };
  const useSubaccountPositionInMarket = <TData = QuerySubaccountPositionInMarketResponse,>({
    request,
    options
  }: UseSubaccountPositionInMarketQuery<TData>) => {
    return useQuery<QuerySubaccountPositionInMarketResponse, Error, TData>(["subaccountPositionInMarketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountPositionInMarket(request);
    }, options);
  };
  const useSubaccountEffectivePositionInMarket = <TData = QuerySubaccountEffectivePositionInMarketResponse,>({
    request,
    options
  }: UseSubaccountEffectivePositionInMarketQuery<TData>) => {
    return useQuery<QuerySubaccountEffectivePositionInMarketResponse, Error, TData>(["subaccountEffectivePositionInMarketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountEffectivePositionInMarket(request);
    }, options);
  };
  const usePerpetualMarketInfo = <TData = QueryPerpetualMarketInfoResponse,>({
    request,
    options
  }: UsePerpetualMarketInfoQuery<TData>) => {
    return useQuery<QueryPerpetualMarketInfoResponse, Error, TData>(["perpetualMarketInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.perpetualMarketInfo(request);
    }, options);
  };
  const useExpiryFuturesMarketInfo = <TData = QueryExpiryFuturesMarketInfoResponse,>({
    request,
    options
  }: UseExpiryFuturesMarketInfoQuery<TData>) => {
    return useQuery<QueryExpiryFuturesMarketInfoResponse, Error, TData>(["expiryFuturesMarketInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.expiryFuturesMarketInfo(request);
    }, options);
  };
  const usePerpetualMarketFunding = <TData = QueryPerpetualMarketFundingResponse,>({
    request,
    options
  }: UsePerpetualMarketFundingQuery<TData>) => {
    return useQuery<QueryPerpetualMarketFundingResponse, Error, TData>(["perpetualMarketFundingQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.perpetualMarketFunding(request);
    }, options);
  };
  const useSubaccountOrderMetadata = <TData = QuerySubaccountOrderMetadataResponse,>({
    request,
    options
  }: UseSubaccountOrderMetadataQuery<TData>) => {
    return useQuery<QuerySubaccountOrderMetadataResponse, Error, TData>(["subaccountOrderMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subaccountOrderMetadata(request);
    }, options);
  };
  const useTradeRewardPoints = <TData = QueryTradeRewardPointsResponse,>({
    request,
    options
  }: UseTradeRewardPointsQuery<TData>) => {
    return useQuery<QueryTradeRewardPointsResponse, Error, TData>(["tradeRewardPointsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tradeRewardPoints(request);
    }, options);
  };
  const usePendingTradeRewardPoints = <TData = QueryTradeRewardPointsResponse,>({
    request,
    options
  }: UsePendingTradeRewardPointsQuery<TData>) => {
    return useQuery<QueryTradeRewardPointsResponse, Error, TData>(["pendingTradeRewardPointsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pendingTradeRewardPoints(request);
    }, options);
  };
  const useTradeRewardCampaign = <TData = QueryTradeRewardCampaignResponse,>({
    request,
    options
  }: UseTradeRewardCampaignQuery<TData>) => {
    return useQuery<QueryTradeRewardCampaignResponse, Error, TData>(["tradeRewardCampaignQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tradeRewardCampaign(request);
    }, options);
  };
  const useFeeDiscountAccountInfo = <TData = QueryFeeDiscountAccountInfoResponse,>({
    request,
    options
  }: UseFeeDiscountAccountInfoQuery<TData>) => {
    return useQuery<QueryFeeDiscountAccountInfoResponse, Error, TData>(["feeDiscountAccountInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feeDiscountAccountInfo(request);
    }, options);
  };
  const useFeeDiscountSchedule = <TData = QueryFeeDiscountScheduleResponse,>({
    request,
    options
  }: UseFeeDiscountScheduleQuery<TData>) => {
    return useQuery<QueryFeeDiscountScheduleResponse, Error, TData>(["feeDiscountScheduleQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feeDiscountSchedule(request);
    }, options);
  };
  const useBalanceMismatches = <TData = QueryBalanceMismatchesResponse,>({
    request,
    options
  }: UseBalanceMismatchesQuery<TData>) => {
    return useQuery<QueryBalanceMismatchesResponse, Error, TData>(["balanceMismatchesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balanceMismatches(request);
    }, options);
  };
  const useBalanceWithBalanceHolds = <TData = QueryBalanceWithBalanceHoldsResponse,>({
    request,
    options
  }: UseBalanceWithBalanceHoldsQuery<TData>) => {
    return useQuery<QueryBalanceWithBalanceHoldsResponse, Error, TData>(["balanceWithBalanceHoldsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balanceWithBalanceHolds(request);
    }, options);
  };
  const useFeeDiscountTierStatistics = <TData = QueryFeeDiscountTierStatisticsResponse,>({
    request,
    options
  }: UseFeeDiscountTierStatisticsQuery<TData>) => {
    return useQuery<QueryFeeDiscountTierStatisticsResponse, Error, TData>(["feeDiscountTierStatisticsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feeDiscountTierStatistics(request);
    }, options);
  };
  const useNinjaVaultInfos = <TData = NinjaVaultInfosResponse,>({
    request,
    options
  }: UseNinjaVaultInfosQuery<TData>) => {
    return useQuery<NinjaVaultInfosResponse, Error, TData>(["ninjaVaultInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.ninjaVaultInfos(request);
    }, options);
  };
  const useQueryMarketIDFromVault = <TData = QueryMarketIDFromVaultResponse,>({
    request,
    options
  }: UseQueryMarketIDFromVaultQuery<TData>) => {
    return useQuery<QueryMarketIDFromVaultResponse, Error, TData>(["queryMarketIDFromVaultQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.queryMarketIDFromVault(request);
    }, options);
  };
  const useHistoricalTradeRecords = <TData = QueryHistoricalTradeRecordsResponse,>({
    request,
    options
  }: UseHistoricalTradeRecordsQuery<TData>) => {
    return useQuery<QueryHistoricalTradeRecordsResponse, Error, TData>(["historicalTradeRecordsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.historicalTradeRecords(request);
    }, options);
  };
  const useIsOptedOutOfRewards = <TData = QueryIsOptedOutOfRewardsResponse,>({
    request,
    options
  }: UseIsOptedOutOfRewardsQuery<TData>) => {
    return useQuery<QueryIsOptedOutOfRewardsResponse, Error, TData>(["isOptedOutOfRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.isOptedOutOfRewards(request);
    }, options);
  };
  const useOptedOutOfRewardsAccounts = <TData = QueryOptedOutOfRewardsAccountsResponse,>({
    request,
    options
  }: UseOptedOutOfRewardsAccountsQuery<TData>) => {
    return useQuery<QueryOptedOutOfRewardsAccountsResponse, Error, TData>(["optedOutOfRewardsAccountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.optedOutOfRewardsAccounts(request);
    }, options);
  };
  const useMarketVolatility = <TData = QueryMarketVolatilityResponse,>({
    request,
    options
  }: UseMarketVolatilityQuery<TData>) => {
    return useQuery<QueryMarketVolatilityResponse, Error, TData>(["marketVolatilityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.marketVolatility(request);
    }, options);
  };
  const useBinaryOptionsMarkets = <TData = QueryBinaryMarketsResponse,>({
    request,
    options
  }: UseBinaryOptionsMarketsQuery<TData>) => {
    return useQuery<QueryBinaryMarketsResponse, Error, TData>(["binaryOptionsMarketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.binaryOptionsMarkets(request);
    }, options);
  };
  const useTraderDerivativeConditionalOrders = <TData = QueryTraderDerivativeConditionalOrdersResponse,>({
    request,
    options
  }: UseTraderDerivativeConditionalOrdersQuery<TData>) => {
    return useQuery<QueryTraderDerivativeConditionalOrdersResponse, Error, TData>(["traderDerivativeConditionalOrdersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.traderDerivativeConditionalOrders(request);
    }, options);
  };
  return {
    /** Retrieves exchange params */useQueryExchangeParams,
    /** Retrieves a Subaccount's Deposits */useSubaccountDeposits,
    /** Retrieves a Subaccount's Deposits */useSubaccountDeposit,
    /** Retrieves all of the balances of all users on the exchange. */useExchangeBalances,
    /** Retrieves a list of spot markets. */useSpotMarkets,
    /** Retrieves a spot market by ticker */useSpotMarket,
    /** Retrieves a spot market's orderbook by marketID */useSpotOrderbook,
    /** Retrieves a trader's spot orders */useTraderSpotOrders,
    /** Retrieves spot orders corresponding to specified order hashes for a given subaccountID and marketID */useSpotOrdersByHashes,
    /** Retrieves subaccount's orders */useSubaccountOrders,
    /** Retrieves a trader's transient spot orders */useTraderSpotTransientOrders,
    /** Retrieves a spot market's mid-price */useSpotMidPriceAndTOB,
    /** Retrieves a derivative market's mid-price */useDerivativeMidPriceAndTOB,
    /** Retrieves a derivative market's orderbook by marketID */useDerivativeOrderbook,
    /** Retrieves a trader's derivative orders */useTraderDerivativeOrders,
    /** Retrieves a trader's derivative orders */useDerivativeOrdersByHashes,
    /** Retrieves a trader's transient derivative orders */useTraderDerivativeTransientOrders,
    /** Retrieves a list of derivative markets. */useDerivativeMarkets,
    /** Retrieves a derivative market by ticker */useDerivativeMarket,
    /** Retrieves a derivative market's corresponding address for fees that contribute to the market's insurance fund */useDerivativeMarketAddress,
    /** Retrieves a subaccount's trade nonce */useSubaccountTradeNonce,
    /** Retrieves the entire exchange module's state */useExchangeModuleState,
    /** Retrieves the entire exchange module's positions */usePositions,
    /** Retrieves subaccount's positions */useSubaccountPositions,
    /** Retrieves subaccount's position in market */useSubaccountPositionInMarket,
    /** Retrieves subaccount's position in market */useSubaccountEffectivePositionInMarket,
    /** Retrieves perpetual market info */usePerpetualMarketInfo,
    /** Retrieves expiry market info */useExpiryFuturesMarketInfo,
    /** Retrieves perpetual market funding */usePerpetualMarketFunding,
    /** Retrieves subaccount's order metadata */useSubaccountOrderMetadata,
    /** Retrieves the account and total trade rewards points */useTradeRewardPoints,
    /** Retrieves the pending account and total trade rewards points */usePendingTradeRewardPoints,
    /** Retrieves the trade reward campaign */useTradeRewardCampaign,
    /** Retrieves the account's fee discount info */useFeeDiscountAccountInfo,
    /** Retrieves the fee discount schedule */useFeeDiscountSchedule,
    /** Retrieves mismatches between available vs. total balance */useBalanceMismatches,
    /** Retrieves available and total balances with balance holds */useBalanceWithBalanceHolds,
    /** Retrieves fee discount tier stats */useFeeDiscountTierStatistics,
    /** Retrieves market making pool info */useNinjaVaultInfos,
    /** QueryMarketIDFromVault returns the market ID for a given vault subaccount ID */useQueryMarketIDFromVault,
    /** Retrieves historical trade records for a given market ID */useHistoricalTradeRecords,
    /** Retrieves if the account is opted out of rewards */useIsOptedOutOfRewards,
    /** Retrieves all accounts opted out of rewards */useOptedOutOfRewardsAccounts,
    /** MarketVolatility computes the volatility for spot and derivative markets trading history. */useMarketVolatility,
    /** Retrieves a spot market's orderbook by marketID */useBinaryOptionsMarkets,
    /** Retrieves a trader's derivative conditional orders */useTraderDerivativeConditionalOrders
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryQueryExchangeParamsStore {
    store = new QueryStore<QueryExchangeParamsRequest, QueryExchangeParamsResponse>(queryService?.queryExchangeParams);
    queryExchangeParams(request: QueryExchangeParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountDepositsStore {
    store = new QueryStore<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>(queryService?.subaccountDeposits);
    subaccountDeposits(request: QuerySubaccountDepositsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountDepositStore {
    store = new QueryStore<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>(queryService?.subaccountDeposit);
    subaccountDeposit(request: QuerySubaccountDepositRequest) {
      return this.store.getData(request);
    }
  }
  class QueryExchangeBalancesStore {
    store = new QueryStore<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>(queryService?.exchangeBalances);
    exchangeBalances(request: QueryExchangeBalancesRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotMarketsStore {
    store = new QueryStore<QuerySpotMarketsRequest, QuerySpotMarketsResponse>(queryService?.spotMarkets);
    spotMarkets(request: QuerySpotMarketsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotMarketStore {
    store = new QueryStore<QuerySpotMarketRequest, QuerySpotMarketResponse>(queryService?.spotMarket);
    spotMarket(request: QuerySpotMarketRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotOrderbookStore {
    store = new QueryStore<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>(queryService?.spotOrderbook);
    spotOrderbook(request: QuerySpotOrderbookRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTraderSpotOrdersStore {
    store = new QueryStore<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>(queryService?.traderSpotOrders);
    traderSpotOrders(request: QueryTraderSpotOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotOrdersByHashesStore {
    store = new QueryStore<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>(queryService?.spotOrdersByHashes);
    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountOrdersStore {
    store = new QueryStore<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>(queryService?.subaccountOrders);
    subaccountOrders(request: QuerySubaccountOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTraderSpotTransientOrdersStore {
    store = new QueryStore<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>(queryService?.traderSpotTransientOrders);
    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotMidPriceAndTOBStore {
    store = new QueryStore<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>(queryService?.spotMidPriceAndTOB);
    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDerivativeMidPriceAndTOBStore {
    store = new QueryStore<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>(queryService?.derivativeMidPriceAndTOB);
    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDerivativeOrderbookStore {
    store = new QueryStore<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>(queryService?.derivativeOrderbook);
    derivativeOrderbook(request: QueryDerivativeOrderbookRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTraderDerivativeOrdersStore {
    store = new QueryStore<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>(queryService?.traderDerivativeOrders);
    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDerivativeOrdersByHashesStore {
    store = new QueryStore<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>(queryService?.derivativeOrdersByHashes);
    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTraderDerivativeTransientOrdersStore {
    store = new QueryStore<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>(queryService?.traderDerivativeTransientOrders);
    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDerivativeMarketsStore {
    store = new QueryStore<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>(queryService?.derivativeMarkets);
    derivativeMarkets(request: QueryDerivativeMarketsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDerivativeMarketStore {
    store = new QueryStore<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>(queryService?.derivativeMarket);
    derivativeMarket(request: QueryDerivativeMarketRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDerivativeMarketAddressStore {
    store = new QueryStore<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>(queryService?.derivativeMarketAddress);
    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountTradeNonceStore {
    store = new QueryStore<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>(queryService?.subaccountTradeNonce);
    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryExchangeModuleStateStore {
    store = new QueryStore<QueryModuleStateRequest, QueryModuleStateResponse>(queryService?.exchangeModuleState);
    exchangeModuleState(request: QueryModuleStateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPositionsStore {
    store = new QueryStore<QueryPositionsRequest, QueryPositionsResponse>(queryService?.positions);
    positions(request: QueryPositionsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountPositionsStore {
    store = new QueryStore<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>(queryService?.subaccountPositions);
    subaccountPositions(request: QuerySubaccountPositionsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountPositionInMarketStore {
    store = new QueryStore<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>(queryService?.subaccountPositionInMarket);
    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountEffectivePositionInMarketStore {
    store = new QueryStore<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>(queryService?.subaccountEffectivePositionInMarket);
    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPerpetualMarketInfoStore {
    store = new QueryStore<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>(queryService?.perpetualMarketInfo);
    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryExpiryFuturesMarketInfoStore {
    store = new QueryStore<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>(queryService?.expiryFuturesMarketInfo);
    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPerpetualMarketFundingStore {
    store = new QueryStore<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>(queryService?.perpetualMarketFunding);
    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubaccountOrderMetadataStore {
    store = new QueryStore<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>(queryService?.subaccountOrderMetadata);
    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTradeRewardPointsStore {
    store = new QueryStore<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>(queryService?.tradeRewardPoints);
    tradeRewardPoints(request: QueryTradeRewardPointsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPendingTradeRewardPointsStore {
    store = new QueryStore<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>(queryService?.pendingTradeRewardPoints);
    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTradeRewardCampaignStore {
    store = new QueryStore<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>(queryService?.tradeRewardCampaign);
    tradeRewardCampaign(request: QueryTradeRewardCampaignRequest) {
      return this.store.getData(request);
    }
  }
  class QueryFeeDiscountAccountInfoStore {
    store = new QueryStore<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>(queryService?.feeDiscountAccountInfo);
    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryFeeDiscountScheduleStore {
    store = new QueryStore<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>(queryService?.feeDiscountSchedule);
    feeDiscountSchedule(request: QueryFeeDiscountScheduleRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBalanceMismatchesStore {
    store = new QueryStore<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>(queryService?.balanceMismatches);
    balanceMismatches(request: QueryBalanceMismatchesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBalanceWithBalanceHoldsStore {
    store = new QueryStore<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>(queryService?.balanceWithBalanceHolds);
    balanceWithBalanceHolds(request: QueryBalanceWithBalanceHoldsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryFeeDiscountTierStatisticsStore {
    store = new QueryStore<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>(queryService?.feeDiscountTierStatistics);
    feeDiscountTierStatistics(request: QueryFeeDiscountTierStatisticsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryNinjaVaultInfosStore {
    store = new QueryStore<NinjaVaultInfosRequest, NinjaVaultInfosResponse>(queryService?.ninjaVaultInfos);
    ninjaVaultInfos(request: NinjaVaultInfosRequest) {
      return this.store.getData(request);
    }
  }
  class QueryQueryMarketIDFromVaultStore {
    store = new QueryStore<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>(queryService?.queryMarketIDFromVault);
    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest) {
      return this.store.getData(request);
    }
  }
  class QueryHistoricalTradeRecordsStore {
    store = new QueryStore<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>(queryService?.historicalTradeRecords);
    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryIsOptedOutOfRewardsStore {
    store = new QueryStore<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>(queryService?.isOptedOutOfRewards);
    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryOptedOutOfRewardsAccountsStore {
    store = new QueryStore<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>(queryService?.optedOutOfRewardsAccounts);
    optedOutOfRewardsAccounts(request: QueryOptedOutOfRewardsAccountsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryMarketVolatilityStore {
    store = new QueryStore<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>(queryService?.marketVolatility);
    marketVolatility(request: QueryMarketVolatilityRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBinaryOptionsMarketsStore {
    store = new QueryStore<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>(queryService?.binaryOptionsMarkets);
    binaryOptionsMarkets(request: QueryBinaryMarketsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTraderDerivativeConditionalOrdersStore {
    store = new QueryStore<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>(queryService?.traderDerivativeConditionalOrders);
    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Retrieves exchange params */QueryQueryExchangeParamsStore,
    /** Retrieves a Subaccount's Deposits */QuerySubaccountDepositsStore,
    /** Retrieves a Subaccount's Deposits */QuerySubaccountDepositStore,
    /** Retrieves all of the balances of all users on the exchange. */QueryExchangeBalancesStore,
    /** Retrieves a list of spot markets. */QuerySpotMarketsStore,
    /** Retrieves a spot market by ticker */QuerySpotMarketStore,
    /** Retrieves a spot market's orderbook by marketID */QuerySpotOrderbookStore,
    /** Retrieves a trader's spot orders */QueryTraderSpotOrdersStore,
    /** Retrieves spot orders corresponding to specified order hashes for a given subaccountID and marketID */QuerySpotOrdersByHashesStore,
    /** Retrieves subaccount's orders */QuerySubaccountOrdersStore,
    /** Retrieves a trader's transient spot orders */QueryTraderSpotTransientOrdersStore,
    /** Retrieves a spot market's mid-price */QuerySpotMidPriceAndTOBStore,
    /** Retrieves a derivative market's mid-price */QueryDerivativeMidPriceAndTOBStore,
    /** Retrieves a derivative market's orderbook by marketID */QueryDerivativeOrderbookStore,
    /** Retrieves a trader's derivative orders */QueryTraderDerivativeOrdersStore,
    /** Retrieves a trader's derivative orders */QueryDerivativeOrdersByHashesStore,
    /** Retrieves a trader's transient derivative orders */QueryTraderDerivativeTransientOrdersStore,
    /** Retrieves a list of derivative markets. */QueryDerivativeMarketsStore,
    /** Retrieves a derivative market by ticker */QueryDerivativeMarketStore,
    /** Retrieves a derivative market's corresponding address for fees that contribute to the market's insurance fund */QueryDerivativeMarketAddressStore,
    /** Retrieves a subaccount's trade nonce */QuerySubaccountTradeNonceStore,
    /** Retrieves the entire exchange module's state */QueryExchangeModuleStateStore,
    /** Retrieves the entire exchange module's positions */QueryPositionsStore,
    /** Retrieves subaccount's positions */QuerySubaccountPositionsStore,
    /** Retrieves subaccount's position in market */QuerySubaccountPositionInMarketStore,
    /** Retrieves subaccount's position in market */QuerySubaccountEffectivePositionInMarketStore,
    /** Retrieves perpetual market info */QueryPerpetualMarketInfoStore,
    /** Retrieves expiry market info */QueryExpiryFuturesMarketInfoStore,
    /** Retrieves perpetual market funding */QueryPerpetualMarketFundingStore,
    /** Retrieves subaccount's order metadata */QuerySubaccountOrderMetadataStore,
    /** Retrieves the account and total trade rewards points */QueryTradeRewardPointsStore,
    /** Retrieves the pending account and total trade rewards points */QueryPendingTradeRewardPointsStore,
    /** Retrieves the trade reward campaign */QueryTradeRewardCampaignStore,
    /** Retrieves the account's fee discount info */QueryFeeDiscountAccountInfoStore,
    /** Retrieves the fee discount schedule */QueryFeeDiscountScheduleStore,
    /** Retrieves mismatches between available vs. total balance */QueryBalanceMismatchesStore,
    /** Retrieves available and total balances with balance holds */QueryBalanceWithBalanceHoldsStore,
    /** Retrieves fee discount tier stats */QueryFeeDiscountTierStatisticsStore,
    /** Retrieves market making pool info */QueryNinjaVaultInfosStore,
    /** QueryMarketIDFromVault returns the market ID for a given vault subaccount ID */QueryQueryMarketIDFromVaultStore,
    /** Retrieves historical trade records for a given market ID */QueryHistoricalTradeRecordsStore,
    /** Retrieves if the account is opted out of rewards */QueryIsOptedOutOfRewardsStore,
    /** Retrieves all accounts opted out of rewards */QueryOptedOutOfRewardsAccountsStore,
    /** MarketVolatility computes the volatility for spot and derivative markets trading history. */QueryMarketVolatilityStore,
    /** Retrieves a spot market's orderbook by marketID */QueryBinaryOptionsMarketsStore,
    /** Retrieves a trader's derivative conditional orders */QueryTraderDerivativeConditionalOrdersStore
  };
};