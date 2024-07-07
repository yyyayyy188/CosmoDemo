//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreate, MsgPut, MsgTake } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/regen.ecocredit.basket.v1.MsgCreate", MsgCreate], ["/regen.ecocredit.basket.v1.MsgPut", MsgPut], ["/regen.ecocredit.basket.v1.MsgTake", MsgTake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.encode(value).finish()
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.encode(value).finish()
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value
      };
    }
  },
  toJSON: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.toJSON(value)
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.toJSON(value)
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.toJSON(value)
      };
    }
  },
  fromJSON: {
    create(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.fromJSON(value)
      };
    },
    put(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.fromJSON(value)
      };
    },
    take(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.fromJSON(value)
      };
    }
  },
  fromPartial: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.fromPartial(value)
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.fromPartial(value)
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.fromPartial(value)
      };
    }
  }
};