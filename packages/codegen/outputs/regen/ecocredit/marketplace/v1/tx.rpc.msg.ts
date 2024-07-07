import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { MsgSell, MsgSellResponse, MsgUpdateSellOrders, MsgUpdateSellOrdersResponse, MsgCancelSellOrder, MsgCancelSellOrderResponse, MsgBuyDirect, MsgBuyDirectResponse } from "./tx";
/** Msg is the regen.ecocredit.marketplace.v1 Msg service. */
export interface Msg {
  /** Sell creates new sell orders. */
  sell(request: MsgSell): Promise<MsgSellResponse>;
  /** UpdateSellOrders updates existing sell orders. */
  updateSellOrders(request: MsgUpdateSellOrders): Promise<MsgUpdateSellOrdersResponse>;
  /** CancelSellOrder cancels a sell order and returns the funds from escrow. */
  cancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
  /** BuyDirect purchases credits directly from the specified sell order. */
  buyDirect(request: MsgBuyDirect): Promise<MsgBuyDirectResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sell = this.sell.bind(this);
    this.updateSellOrders = this.updateSellOrders.bind(this);
    this.cancelSellOrder = this.cancelSellOrder.bind(this);
    this.buyDirect = this.buyDirect.bind(this);
  }
  sell(request: MsgSell): Promise<MsgSellResponse> {
    const data = MsgSell.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "Sell", data);
    return promise.then(data => MsgSellResponse.decode(new BinaryReader(data)));
  }
  updateSellOrders(request: MsgUpdateSellOrders): Promise<MsgUpdateSellOrdersResponse> {
    const data = MsgUpdateSellOrders.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "UpdateSellOrders", data);
    return promise.then(data => MsgUpdateSellOrdersResponse.decode(new BinaryReader(data)));
  }
  cancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse> {
    const data = MsgCancelSellOrder.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "CancelSellOrder", data);
    return promise.then(data => MsgCancelSellOrderResponse.decode(new BinaryReader(data)));
  }
  buyDirect(request: MsgBuyDirect): Promise<MsgBuyDirectResponse> {
    const data = MsgBuyDirect.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "BuyDirect", data);
    return promise.then(data => MsgBuyDirectResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};