import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupply {
  /** Supplier is the account address supplying assets and the signer of the message. */
  supplier: string;
  asset: Coin | undefined;
}
export interface MsgSupplyProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgSupply";
  value: Uint8Array;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplyAmino {
  /** Supplier is the account address supplying assets and the signer of the message. */
  supplier?: string;
  asset?: CoinAmino | undefined;
}
export interface MsgSupplyAminoMsg {
  type: "/umee.leverage.v1.MsgSupply";
  value: MsgSupplyAmino;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplySDKType {
  supplier: string;
  asset: CoinSDKType | undefined;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdraw {
  /** Supplier is the account address withdrawing assets and the signer of the message. */
  supplier: string;
  asset: Coin | undefined;
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgWithdraw";
  value: Uint8Array;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawAmino {
  /** Supplier is the account address withdrawing assets and the signer of the message. */
  supplier?: string;
  asset?: CoinAmino | undefined;
}
export interface MsgWithdrawAminoMsg {
  type: "/umee.leverage.v1.MsgWithdraw";
  value: MsgWithdrawAmino;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawSDKType {
  supplier: string;
  asset: CoinSDKType | undefined;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralize {
  /** Borrower is the account address adding collateral and the signer of the message. */
  borrower: string;
  asset: Coin | undefined;
}
export interface MsgCollateralizeProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgCollateralize";
  value: Uint8Array;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeAmino {
  /** Borrower is the account address adding collateral and the signer of the message. */
  borrower?: string;
  asset?: CoinAmino | undefined;
}
export interface MsgCollateralizeAminoMsg {
  type: "/umee.leverage.v1.MsgCollateralize";
  value: MsgCollateralizeAmino;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeSDKType {
  borrower: string;
  asset: CoinSDKType | undefined;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralize {
  /** Borrower is the account address removing collateral and the signer of the message. */
  borrower: string;
  asset: Coin | undefined;
}
export interface MsgDecollateralizeProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgDecollateralize";
  value: Uint8Array;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeAmino {
  /** Borrower is the account address removing collateral and the signer of the message. */
  borrower?: string;
  asset?: CoinAmino | undefined;
}
export interface MsgDecollateralizeAminoMsg {
  type: "/umee.leverage.v1.MsgDecollateralize";
  value: MsgDecollateralizeAmino;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeSDKType {
  borrower: string;
  asset: CoinSDKType | undefined;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrow {
  /**
   * Borrower is the account address taking a loan and the signer
   * of the message.
   */
  borrower: string;
  asset: Coin | undefined;
}
export interface MsgBorrowProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgBorrow";
  value: Uint8Array;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowAmino {
  /**
   * Borrower is the account address taking a loan and the signer
   * of the message.
   */
  borrower?: string;
  asset?: CoinAmino | undefined;
}
export interface MsgBorrowAminoMsg {
  type: "/umee.leverage.v1.MsgBorrow";
  value: MsgBorrowAmino;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowSDKType {
  borrower: string;
  asset: CoinSDKType | undefined;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepay {
  /**
   * Borrower is the account address repaying a loan and the signer
   * of the message.
   */
  borrower: string;
  asset: Coin | undefined;
}
export interface MsgRepayProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgRepay";
  value: Uint8Array;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepayAmino {
  /**
   * Borrower is the account address repaying a loan and the signer
   * of the message.
   */
  borrower?: string;
  asset?: CoinAmino | undefined;
}
export interface MsgRepayAminoMsg {
  type: "/umee.leverage.v1.MsgRepay";
  value: MsgRepayAmino;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepaySDKType {
  borrower: string;
  asset: CoinSDKType | undefined;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidate {
  /**
   * Liquidator is the account address performing a liquidation and the signer
   * of the message.
   */
  liquidator: string;
  /**
   * Borrower is the account whose borrow is being repaid, and collateral consumed,
   * by the liquidation. It does not sign the message.
   */
  borrower: string;
  /**
   * Repayment is the maximum amount of base tokens that the liquidator is willing
   * to repay.
   */
  repayment: Coin | undefined;
  /**
   * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
   * If it is a uToken, the liquidator will receive uTokens from the borrower's
   * collateral. If it is a base token, the uTokens will be redeemed directly at
   * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
   */
  rewardDenom: string;
}
export interface MsgLiquidateProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgLiquidate";
  value: Uint8Array;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateAmino {
  /**
   * Liquidator is the account address performing a liquidation and the signer
   * of the message.
   */
  liquidator?: string;
  /**
   * Borrower is the account whose borrow is being repaid, and collateral consumed,
   * by the liquidation. It does not sign the message.
   */
  borrower?: string;
  /**
   * Repayment is the maximum amount of base tokens that the liquidator is willing
   * to repay.
   */
  repayment?: CoinAmino | undefined;
  /**
   * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
   * If it is a uToken, the liquidator will receive uTokens from the borrower's
   * collateral. If it is a base token, the uTokens will be redeemed directly at
   * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
   */
  reward_denom?: string;
}
export interface MsgLiquidateAminoMsg {
  type: "/umee.leverage.v1.MsgLiquidate";
  value: MsgLiquidateAmino;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateSDKType {
  liquidator: string;
  borrower: string;
  repayment: CoinSDKType | undefined;
  reward_denom: string;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponse {
  /** Received is the amount of uTokens received. */
  received: Coin | undefined;
}
export interface MsgSupplyResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgSupplyResponse";
  value: Uint8Array;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseAmino {
  /** Received is the amount of uTokens received. */
  received?: CoinAmino | undefined;
}
export interface MsgSupplyResponseAminoMsg {
  type: "/umee.leverage.v1.MsgSupplyResponse";
  value: MsgSupplyResponseAmino;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseSDKType {
  received: CoinSDKType | undefined;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
  /** Received is the amount of base tokens received. */
  received: Coin | undefined;
}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgWithdrawResponse";
  value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
  /** Received is the amount of base tokens received. */
  received?: CoinAmino | undefined;
}
export interface MsgWithdrawResponseAminoMsg {
  type: "/umee.leverage.v1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
  received: CoinSDKType | undefined;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponse {}
export interface MsgCollateralizeResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse";
  value: Uint8Array;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseAmino {}
export interface MsgCollateralizeResponseAminoMsg {
  type: "/umee.leverage.v1.MsgCollateralizeResponse";
  value: MsgCollateralizeResponseAmino;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseSDKType {}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponse {}
export interface MsgDecollateralizeResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse";
  value: Uint8Array;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseAmino {}
export interface MsgDecollateralizeResponseAminoMsg {
  type: "/umee.leverage.v1.MsgDecollateralizeResponse";
  value: MsgDecollateralizeResponseAmino;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseSDKType {}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {}
export interface MsgBorrowResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgBorrowResponse";
  value: Uint8Array;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseAmino {}
export interface MsgBorrowResponseAminoMsg {
  type: "/umee.leverage.v1.MsgBorrowResponse";
  value: MsgBorrowResponseAmino;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
  /** Repaid is the amount of base tokens repaid to the module. */
  repaid: Coin | undefined;
}
export interface MsgRepayResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgRepayResponse";
  value: Uint8Array;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseAmino {
  /** Repaid is the amount of base tokens repaid to the module. */
  repaid?: CoinAmino | undefined;
}
export interface MsgRepayResponseAminoMsg {
  type: "/umee.leverage.v1.MsgRepayResponse";
  value: MsgRepayResponseAmino;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
  repaid: CoinSDKType | undefined;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
  /**
   * Repaid is the amount of borrowed base tokens that the liquidator repaid
   * to the module on behalf of the borrower.
   */
  repaid: Coin | undefined;
  /**
   * Collateral is the amount of the borrower's uToken collateral that
   * was liquidated.
   */
  collateral: Coin | undefined;
  /**
   * Reward is the amount of base tokens that the liquidator received from
   * the module as reward for the liquidation.
   */
  reward: Coin | undefined;
}
export interface MsgLiquidateResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.MsgLiquidateResponse";
  value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {
  /**
   * Repaid is the amount of borrowed base tokens that the liquidator repaid
   * to the module on behalf of the borrower.
   */
  repaid?: CoinAmino | undefined;
  /**
   * Collateral is the amount of the borrower's uToken collateral that
   * was liquidated.
   */
  collateral?: CoinAmino | undefined;
  /**
   * Reward is the amount of base tokens that the liquidator received from
   * the module as reward for the liquidation.
   */
  reward?: CoinAmino | undefined;
}
export interface MsgLiquidateResponseAminoMsg {
  type: "/umee.leverage.v1.MsgLiquidateResponse";
  value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
  repaid: CoinSDKType | undefined;
  collateral: CoinSDKType | undefined;
  reward: CoinSDKType | undefined;
}
function createBaseMsgSupply(): MsgSupply {
  return {
    supplier: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgSupply = {
  typeUrl: "/umee.leverage.v1.MsgSupply",
  encode(message: MsgSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = reader.string();
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSupply {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgSupply): JsonSafe<MsgSupply> {
    const obj: any = {};
    message.supplier !== undefined && (obj.supplier = message.supplier);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSupply>): MsgSupply {
    const message = createBaseMsgSupply();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: MsgSupplySDKType): MsgSupply {
    return {
      supplier: object?.supplier,
      asset: object.asset ? Coin.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: MsgSupply): MsgSupplySDKType {
    const obj: any = {};
    obj.supplier = message.supplier;
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: MsgSupplyAmino): MsgSupply {
    const message = createBaseMsgSupply();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = object.supplier;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgSupply): MsgSupplyAmino {
    const obj: any = {};
    obj.supplier = message.supplier === "" ? undefined : message.supplier;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSupplyAminoMsg): MsgSupply {
    return MsgSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSupplyProtoMsg): MsgSupply {
    return MsgSupply.decode(message.value);
  },
  toProto(message: MsgSupply): Uint8Array {
    return MsgSupply.encode(message).finish();
  },
  toProtoMsg(message: MsgSupply): MsgSupplyProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgSupply",
      value: MsgSupply.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    supplier: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgWithdraw = {
  typeUrl: "/umee.leverage.v1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = reader.string();
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgWithdraw): JsonSafe<MsgWithdraw> {
    const obj: any = {};
    message.supplier !== undefined && (obj.supplier = message.supplier);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: MsgWithdrawSDKType): MsgWithdraw {
    return {
      supplier: object?.supplier,
      asset: object.asset ? Coin.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: MsgWithdraw): MsgWithdrawSDKType {
    const obj: any = {};
    obj.supplier = message.supplier;
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = object.supplier;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.supplier = message.supplier === "" ? undefined : message.supplier;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgCollateralize(): MsgCollateralize {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgCollateralize = {
  typeUrl: "/umee.leverage.v1.MsgCollateralize",
  encode(message: MsgCollateralize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollateralize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollateralize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollateralize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgCollateralize): JsonSafe<MsgCollateralize> {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCollateralize>): MsgCollateralize {
    const message = createBaseMsgCollateralize();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: MsgCollateralizeSDKType): MsgCollateralize {
    return {
      borrower: object?.borrower,
      asset: object.asset ? Coin.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: MsgCollateralize): MsgCollateralizeSDKType {
    const obj: any = {};
    obj.borrower = message.borrower;
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: MsgCollateralizeAmino): MsgCollateralize {
    const message = createBaseMsgCollateralize();
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = object.borrower;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgCollateralize): MsgCollateralizeAmino {
    const obj: any = {};
    obj.borrower = message.borrower === "" ? undefined : message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCollateralizeAminoMsg): MsgCollateralize {
    return MsgCollateralize.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCollateralizeProtoMsg): MsgCollateralize {
    return MsgCollateralize.decode(message.value);
  },
  toProto(message: MsgCollateralize): Uint8Array {
    return MsgCollateralize.encode(message).finish();
  },
  toProtoMsg(message: MsgCollateralize): MsgCollateralizeProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgCollateralize",
      value: MsgCollateralize.encode(message).finish()
    };
  }
};
function createBaseMsgDecollateralize(): MsgDecollateralize {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgDecollateralize = {
  typeUrl: "/umee.leverage.v1.MsgDecollateralize",
  encode(message: MsgDecollateralize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDecollateralize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDecollateralize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDecollateralize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgDecollateralize): JsonSafe<MsgDecollateralize> {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDecollateralize>): MsgDecollateralize {
    const message = createBaseMsgDecollateralize();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: MsgDecollateralizeSDKType): MsgDecollateralize {
    return {
      borrower: object?.borrower,
      asset: object.asset ? Coin.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: MsgDecollateralize): MsgDecollateralizeSDKType {
    const obj: any = {};
    obj.borrower = message.borrower;
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: MsgDecollateralizeAmino): MsgDecollateralize {
    const message = createBaseMsgDecollateralize();
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = object.borrower;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgDecollateralize): MsgDecollateralizeAmino {
    const obj: any = {};
    obj.borrower = message.borrower === "" ? undefined : message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDecollateralizeAminoMsg): MsgDecollateralize {
    return MsgDecollateralize.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecollateralizeProtoMsg): MsgDecollateralize {
    return MsgDecollateralize.decode(message.value);
  },
  toProto(message: MsgDecollateralize): Uint8Array {
    return MsgDecollateralize.encode(message).finish();
  },
  toProtoMsg(message: MsgDecollateralize): MsgDecollateralizeProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgDecollateralize",
      value: MsgDecollateralize.encode(message).finish()
    };
  }
};
function createBaseMsgBorrow(): MsgBorrow {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgBorrow = {
  typeUrl: "/umee.leverage.v1.MsgBorrow",
  encode(message: MsgBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgBorrow): JsonSafe<MsgBorrow> {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBorrow>): MsgBorrow {
    const message = createBaseMsgBorrow();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: MsgBorrowSDKType): MsgBorrow {
    return {
      borrower: object?.borrower,
      asset: object.asset ? Coin.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: MsgBorrow): MsgBorrowSDKType {
    const obj: any = {};
    obj.borrower = message.borrower;
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: MsgBorrowAmino): MsgBorrow {
    const message = createBaseMsgBorrow();
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = object.borrower;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgBorrow): MsgBorrowAmino {
    const obj: any = {};
    obj.borrower = message.borrower === "" ? undefined : message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBorrowAminoMsg): MsgBorrow {
    return MsgBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowProtoMsg): MsgBorrow {
    return MsgBorrow.decode(message.value);
  },
  toProto(message: MsgBorrow): Uint8Array {
    return MsgBorrow.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrow): MsgBorrowProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgBorrow",
      value: MsgBorrow.encode(message).finish()
    };
  }
};
function createBaseMsgRepay(): MsgRepay {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const MsgRepay = {
  typeUrl: "/umee.leverage.v1.MsgRepay",
  encode(message: MsgRepay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRepay {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRepay {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgRepay): JsonSafe<MsgRepay> {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRepay>): MsgRepay {
    const message = createBaseMsgRepay();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromSDK(object: MsgRepaySDKType): MsgRepay {
    return {
      borrower: object?.borrower,
      asset: object.asset ? Coin.fromSDK(object.asset) : undefined
    };
  },
  toSDK(message: MsgRepay): MsgRepaySDKType {
    const obj: any = {};
    obj.borrower = message.borrower;
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toSDK(message.asset) : undefined);
    return obj;
  },
  fromAmino(object: MsgRepayAmino): MsgRepay {
    const message = createBaseMsgRepay();
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = object.borrower;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgRepay): MsgRepayAmino {
    const obj: any = {};
    obj.borrower = message.borrower === "" ? undefined : message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRepayAminoMsg): MsgRepay {
    return MsgRepay.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayProtoMsg): MsgRepay {
    return MsgRepay.decode(message.value);
  },
  toProto(message: MsgRepay): Uint8Array {
    return MsgRepay.encode(message).finish();
  },
  toProtoMsg(message: MsgRepay): MsgRepayProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgRepay",
      value: MsgRepay.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    liquidator: "",
    borrower: "",
    repayment: Coin.fromPartial({}),
    rewardDenom: ""
  };
}
export const MsgLiquidate = {
  typeUrl: "/umee.leverage.v1.MsgLiquidate",
  encode(message: MsgLiquidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.repayment !== undefined) {
      Coin.encode(message.repayment, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardDenom !== "") {
      writer.uint32(34).string(message.rewardDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidator = reader.string();
          break;
        case 2:
          message.borrower = reader.string();
          break;
        case 3:
          message.repayment = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.rewardDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidate {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      repayment: isSet(object.repayment) ? Coin.fromJSON(object.repayment) : undefined,
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : ""
    };
  },
  toJSON(message: MsgLiquidate): JsonSafe<MsgLiquidate> {
    const obj: any = {};
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.repayment !== undefined && (obj.repayment = message.repayment ? Coin.toJSON(message.repayment) : undefined);
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.repayment = object.repayment !== undefined && object.repayment !== null ? Coin.fromPartial(object.repayment) : undefined;
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  },
  fromSDK(object: MsgLiquidateSDKType): MsgLiquidate {
    return {
      liquidator: object?.liquidator,
      borrower: object?.borrower,
      repayment: object.repayment ? Coin.fromSDK(object.repayment) : undefined,
      rewardDenom: object?.reward_denom
    };
  },
  toSDK(message: MsgLiquidate): MsgLiquidateSDKType {
    const obj: any = {};
    obj.liquidator = message.liquidator;
    obj.borrower = message.borrower;
    message.repayment !== undefined && (obj.repayment = message.repayment ? Coin.toSDK(message.repayment) : undefined);
    obj.reward_denom = message.rewardDenom;
    return obj;
  },
  fromAmino(object: MsgLiquidateAmino): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    if (object.liquidator !== undefined && object.liquidator !== null) {
      message.liquidator = object.liquidator;
    }
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = object.borrower;
    }
    if (object.repayment !== undefined && object.repayment !== null) {
      message.repayment = Coin.fromAmino(object.repayment);
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    return message;
  },
  toAmino(message: MsgLiquidate): MsgLiquidateAmino {
    const obj: any = {};
    obj.liquidator = message.liquidator === "" ? undefined : message.liquidator;
    obj.borrower = message.borrower === "" ? undefined : message.borrower;
    obj.repayment = message.repayment ? Coin.toAmino(message.repayment) : undefined;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidateAminoMsg): MsgLiquidate {
    return MsgLiquidate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidateProtoMsg): MsgLiquidate {
    return MsgLiquidate.decode(message.value);
  },
  toProto(message: MsgLiquidate): Uint8Array {
    return MsgLiquidate.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidate): MsgLiquidateProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgLiquidate",
      value: MsgLiquidate.encode(message).finish()
    };
  }
};
function createBaseMsgSupplyResponse(): MsgSupplyResponse {
  return {
    received: Coin.fromPartial({})
  };
}
export const MsgSupplyResponse = {
  typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
  encode(message: MsgSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.received = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSupplyResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  toJSON(message: MsgSupplyResponse): JsonSafe<MsgSupplyResponse> {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received ? Coin.toJSON(message.received) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSupplyResponse>): MsgSupplyResponse {
    const message = createBaseMsgSupplyResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  },
  fromSDK(object: MsgSupplyResponseSDKType): MsgSupplyResponse {
    return {
      received: object.received ? Coin.fromSDK(object.received) : undefined
    };
  },
  toSDK(message: MsgSupplyResponse): MsgSupplyResponseSDKType {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received ? Coin.toSDK(message.received) : undefined);
    return obj;
  },
  fromAmino(object: MsgSupplyResponseAmino): MsgSupplyResponse {
    const message = createBaseMsgSupplyResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = Coin.fromAmino(object.received);
    }
    return message;
  },
  toAmino(message: MsgSupplyResponse): MsgSupplyResponseAmino {
    const obj: any = {};
    obj.received = message.received ? Coin.toAmino(message.received) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSupplyResponseAminoMsg): MsgSupplyResponse {
    return MsgSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSupplyResponseProtoMsg): MsgSupplyResponse {
    return MsgSupplyResponse.decode(message.value);
  },
  toProto(message: MsgSupplyResponse): Uint8Array {
    return MsgSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSupplyResponse): MsgSupplyResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
      value: MsgSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    received: Coin.fromPartial({})
  };
}
export const MsgWithdrawResponse = {
  typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
  encode(message: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.received = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  toJSON(message: MsgWithdrawResponse): JsonSafe<MsgWithdrawResponse> {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received ? Coin.toJSON(message.received) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  },
  fromSDK(object: MsgWithdrawResponseSDKType): MsgWithdrawResponse {
    return {
      received: object.received ? Coin.fromSDK(object.received) : undefined
    };
  },
  toSDK(message: MsgWithdrawResponse): MsgWithdrawResponseSDKType {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received ? Coin.toSDK(message.received) : undefined);
    return obj;
  },
  fromAmino(object: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = Coin.fromAmino(object.received);
    }
    return message;
  },
  toAmino(message: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    obj.received = message.received ? Coin.toAmino(message.received) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCollateralizeResponse(): MsgCollateralizeResponse {
  return {};
}
export const MsgCollateralizeResponse = {
  typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
  encode(_: MsgCollateralizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollateralizeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollateralizeResponse();
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
  fromJSON(_: any): MsgCollateralizeResponse {
    return {};
  },
  toJSON(_: MsgCollateralizeResponse): JsonSafe<MsgCollateralizeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCollateralizeResponse>): MsgCollateralizeResponse {
    const message = createBaseMsgCollateralizeResponse();
    return message;
  },
  fromSDK(_: MsgCollateralizeResponseSDKType): MsgCollateralizeResponse {
    return {};
  },
  toSDK(_: MsgCollateralizeResponse): MsgCollateralizeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCollateralizeResponseAmino): MsgCollateralizeResponse {
    const message = createBaseMsgCollateralizeResponse();
    return message;
  },
  toAmino(_: MsgCollateralizeResponse): MsgCollateralizeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCollateralizeResponseAminoMsg): MsgCollateralizeResponse {
    return MsgCollateralizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCollateralizeResponseProtoMsg): MsgCollateralizeResponse {
    return MsgCollateralizeResponse.decode(message.value);
  },
  toProto(message: MsgCollateralizeResponse): Uint8Array {
    return MsgCollateralizeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCollateralizeResponse): MsgCollateralizeResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
      value: MsgCollateralizeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDecollateralizeResponse(): MsgDecollateralizeResponse {
  return {};
}
export const MsgDecollateralizeResponse = {
  typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
  encode(_: MsgDecollateralizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDecollateralizeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDecollateralizeResponse();
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
  fromJSON(_: any): MsgDecollateralizeResponse {
    return {};
  },
  toJSON(_: MsgDecollateralizeResponse): JsonSafe<MsgDecollateralizeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDecollateralizeResponse>): MsgDecollateralizeResponse {
    const message = createBaseMsgDecollateralizeResponse();
    return message;
  },
  fromSDK(_: MsgDecollateralizeResponseSDKType): MsgDecollateralizeResponse {
    return {};
  },
  toSDK(_: MsgDecollateralizeResponse): MsgDecollateralizeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDecollateralizeResponseAmino): MsgDecollateralizeResponse {
    const message = createBaseMsgDecollateralizeResponse();
    return message;
  },
  toAmino(_: MsgDecollateralizeResponse): MsgDecollateralizeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDecollateralizeResponseAminoMsg): MsgDecollateralizeResponse {
    return MsgDecollateralizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecollateralizeResponseProtoMsg): MsgDecollateralizeResponse {
    return MsgDecollateralizeResponse.decode(message.value);
  },
  toProto(message: MsgDecollateralizeResponse): Uint8Array {
    return MsgDecollateralizeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDecollateralizeResponse): MsgDecollateralizeResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
      value: MsgDecollateralizeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBorrowResponse(): MsgBorrowResponse {
  return {};
}
export const MsgBorrowResponse = {
  typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
  encode(_: MsgBorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowResponse();
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
  fromJSON(_: any): MsgBorrowResponse {
    return {};
  },
  toJSON(_: MsgBorrowResponse): JsonSafe<MsgBorrowResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgBorrowResponse>): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  },
  fromSDK(_: MsgBorrowResponseSDKType): MsgBorrowResponse {
    return {};
  },
  toSDK(_: MsgBorrowResponse): MsgBorrowResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgBorrowResponseAmino): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  },
  toAmino(_: MsgBorrowResponse): MsgBorrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBorrowResponseAminoMsg): MsgBorrowResponse {
    return MsgBorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowResponseProtoMsg): MsgBorrowResponse {
    return MsgBorrowResponse.decode(message.value);
  },
  toProto(message: MsgBorrowResponse): Uint8Array {
    return MsgBorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrowResponse): MsgBorrowResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
      value: MsgBorrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {
    repaid: Coin.fromPartial({})
  };
}
export const MsgRepayResponse = {
  typeUrl: "/umee.leverage.v1.MsgRepayResponse",
  encode(message: MsgRepayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRepayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repaid = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRepayResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined
    };
  },
  toJSON(message: MsgRepayResponse): JsonSafe<MsgRepayResponse> {
    const obj: any = {};
    message.repaid !== undefined && (obj.repaid = message.repaid ? Coin.toJSON(message.repaid) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    return message;
  },
  fromSDK(object: MsgRepayResponseSDKType): MsgRepayResponse {
    return {
      repaid: object.repaid ? Coin.fromSDK(object.repaid) : undefined
    };
  },
  toSDK(message: MsgRepayResponse): MsgRepayResponseSDKType {
    const obj: any = {};
    message.repaid !== undefined && (obj.repaid = message.repaid ? Coin.toSDK(message.repaid) : undefined);
    return obj;
  },
  fromAmino(object: MsgRepayResponseAmino): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    if (object.repaid !== undefined && object.repaid !== null) {
      message.repaid = Coin.fromAmino(object.repaid);
    }
    return message;
  },
  toAmino(message: MsgRepayResponse): MsgRepayResponseAmino {
    const obj: any = {};
    obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse {
    return MsgRepayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse {
    return MsgRepayResponse.decode(message.value);
  },
  toProto(message: MsgRepayResponse): Uint8Array {
    return MsgRepayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgRepayResponse",
      value: MsgRepayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {
    repaid: Coin.fromPartial({}),
    collateral: Coin.fromPartial({}),
    reward: Coin.fromPartial({})
  };
}
export const MsgLiquidateResponse = {
  typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
  encode(message: MsgLiquidateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repaid = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidateResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined,
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },
  toJSON(message: MsgLiquidateResponse): JsonSafe<MsgLiquidateResponse> {
    const obj: any = {};
    message.repaid !== undefined && (obj.repaid = message.repaid ? Coin.toJSON(message.repaid) : undefined);
    message.collateral !== undefined && (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  },
  fromSDK(object: MsgLiquidateResponseSDKType): MsgLiquidateResponse {
    return {
      repaid: object.repaid ? Coin.fromSDK(object.repaid) : undefined,
      collateral: object.collateral ? Coin.fromSDK(object.collateral) : undefined,
      reward: object.reward ? Coin.fromSDK(object.reward) : undefined
    };
  },
  toSDK(message: MsgLiquidateResponse): MsgLiquidateResponseSDKType {
    const obj: any = {};
    message.repaid !== undefined && (obj.repaid = message.repaid ? Coin.toSDK(message.repaid) : undefined);
    message.collateral !== undefined && (obj.collateral = message.collateral ? Coin.toSDK(message.collateral) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toSDK(message.reward) : undefined);
    return obj;
  },
  fromAmino(object: MsgLiquidateResponseAmino): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    if (object.repaid !== undefined && object.repaid !== null) {
      message.repaid = Coin.fromAmino(object.repaid);
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = Coin.fromAmino(object.reward);
    }
    return message;
  },
  toAmino(message: MsgLiquidateResponse): MsgLiquidateResponseAmino {
    const obj: any = {};
    obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.reward = message.reward ? Coin.toAmino(message.reward) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidateResponseAminoMsg): MsgLiquidateResponse {
    return MsgLiquidateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidateResponseProtoMsg): MsgLiquidateResponse {
    return MsgLiquidateResponse.decode(message.value);
  },
  toProto(message: MsgLiquidateResponse): Uint8Array {
    return MsgLiquidateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidateResponse): MsgLiquidateResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
      value: MsgLiquidateResponse.encode(message).finish()
    };
  }
};