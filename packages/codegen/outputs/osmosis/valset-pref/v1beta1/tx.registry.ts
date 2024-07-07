//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference", MsgSetValidatorSetPreference], ["/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet", MsgDelegateToValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet", MsgUndelegateFromValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet", MsgRedelegateValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards", MsgWithdrawDelegationRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: MsgSetValidatorSetPreference.encode(value).finish()
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: MsgDelegateToValidatorSet.encode(value).finish()
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: MsgUndelegateFromValidatorSet.encode(value).finish()
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: MsgRedelegateValidatorSet.encode(value).finish()
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: MsgWithdrawDelegationRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value
      };
    }
  },
  toJSON: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: MsgSetValidatorSetPreference.toJSON(value)
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: MsgDelegateToValidatorSet.toJSON(value)
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: MsgUndelegateFromValidatorSet.toJSON(value)
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: MsgRedelegateValidatorSet.toJSON(value)
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: MsgWithdrawDelegationRewards.toJSON(value)
      };
    }
  },
  fromJSON: {
    setValidatorSetPreference(value: any) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: MsgSetValidatorSetPreference.fromJSON(value)
      };
    },
    delegateToValidatorSet(value: any) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: MsgDelegateToValidatorSet.fromJSON(value)
      };
    },
    undelegateFromValidatorSet(value: any) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: MsgUndelegateFromValidatorSet.fromJSON(value)
      };
    },
    redelegateValidatorSet(value: any) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: MsgRedelegateValidatorSet.fromJSON(value)
      };
    },
    withdrawDelegationRewards(value: any) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: MsgWithdrawDelegationRewards.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: MsgSetValidatorSetPreference.fromPartial(value)
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: MsgDelegateToValidatorSet.fromPartial(value)
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: MsgUndelegateFromValidatorSet.fromPartial(value)
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: MsgRedelegateValidatorSet.fromPartial(value)
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: MsgWithdrawDelegationRewards.fromPartial(value)
      };
    }
  }
};