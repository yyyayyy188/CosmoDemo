//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", MsgCreateBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", MsgUpdateBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", MsgDeleteBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", MsgCreateSupplychain], ["/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", MsgUpdateSupplychain], ["/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", MsgDeleteSupplychain]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        value: MsgCreateBitcannaid.encode(value).finish()
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        value: MsgUpdateBitcannaid.encode(value).finish()
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        value: MsgDeleteBitcannaid.encode(value).finish()
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        value: MsgCreateSupplychain.encode(value).finish()
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        value: MsgUpdateSupplychain.encode(value).finish()
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        value: MsgDeleteSupplychain.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        value
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        value
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        value
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        value
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        value
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        value
      };
    }
  },
  toJSON: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        value: MsgCreateBitcannaid.toJSON(value)
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        value: MsgUpdateBitcannaid.toJSON(value)
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        value: MsgDeleteBitcannaid.toJSON(value)
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        value: MsgCreateSupplychain.toJSON(value)
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        value: MsgUpdateSupplychain.toJSON(value)
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        value: MsgDeleteSupplychain.toJSON(value)
      };
    }
  },
  fromJSON: {
    createBitcannaid(value: any) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        value: MsgCreateBitcannaid.fromJSON(value)
      };
    },
    updateBitcannaid(value: any) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        value: MsgUpdateBitcannaid.fromJSON(value)
      };
    },
    deleteBitcannaid(value: any) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        value: MsgDeleteBitcannaid.fromJSON(value)
      };
    },
    createSupplychain(value: any) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        value: MsgCreateSupplychain.fromJSON(value)
      };
    },
    updateSupplychain(value: any) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        value: MsgUpdateSupplychain.fromJSON(value)
      };
    },
    deleteSupplychain(value: any) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        value: MsgDeleteSupplychain.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        value: MsgCreateBitcannaid.fromPartial(value)
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        value: MsgUpdateBitcannaid.fromPartial(value)
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        value: MsgDeleteBitcannaid.fromPartial(value)
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        value: MsgCreateSupplychain.fromPartial(value)
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        value: MsgUpdateSupplychain.fromPartial(value)
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        value: MsgDeleteSupplychain.fromPartial(value)
      };
    }
  }
};