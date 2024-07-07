//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/regen.ecocredit.marketplace.v1.MsgSell", MsgSell], ["/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders", MsgUpdateSellOrders], ["/regen.ecocredit.marketplace.v1.MsgCancelSellOrder", MsgCancelSellOrder], ["/regen.ecocredit.marketplace.v1.MsgBuyDirect", MsgBuyDirect]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value: MsgSell.encode(value).finish()
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value: MsgUpdateSellOrders.encode(value).finish()
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value: MsgCancelSellOrder.encode(value).finish()
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value: MsgBuyDirect.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value
      };
    }
  },
  toJSON: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value: MsgSell.toJSON(value)
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value: MsgUpdateSellOrders.toJSON(value)
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value: MsgCancelSellOrder.toJSON(value)
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value: MsgBuyDirect.toJSON(value)
      };
    }
  },
  fromJSON: {
    sell(value: any) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value: MsgSell.fromJSON(value)
      };
    },
    updateSellOrders(value: any) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value: MsgUpdateSellOrders.fromJSON(value)
      };
    },
    cancelSellOrder(value: any) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value: MsgCancelSellOrder.fromJSON(value)
      };
    },
    buyDirect(value: any) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value: MsgBuyDirect.fromJSON(value)
      };
    }
  },
  fromPartial: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value: MsgSell.fromPartial(value)
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value: MsgUpdateSellOrders.fromPartial(value)
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value: MsgCancelSellOrder.fromPartial(value)
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value: MsgBuyDirect.fromPartial(value)
      };
    }
  }
};