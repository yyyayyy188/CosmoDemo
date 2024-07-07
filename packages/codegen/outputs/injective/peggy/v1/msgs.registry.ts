import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.peggy.v1.MsgValsetConfirm", MsgValsetConfirm], ["/injective.peggy.v1.MsgSendToEth", MsgSendToEth], ["/injective.peggy.v1.MsgRequestBatch", MsgRequestBatch], ["/injective.peggy.v1.MsgConfirmBatch", MsgConfirmBatch], ["/injective.peggy.v1.MsgDepositClaim", MsgDepositClaim], ["/injective.peggy.v1.MsgWithdrawClaim", MsgWithdrawClaim], ["/injective.peggy.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim], ["/injective.peggy.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim], ["/injective.peggy.v1.MsgSetOrchestratorAddresses", MsgSetOrchestratorAddresses], ["/injective.peggy.v1.MsgCancelSendToEth", MsgCancelSendToEth], ["/injective.peggy.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value: MsgValsetConfirm.encode(value).finish()
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value: MsgSendToEth.encode(value).finish()
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value: MsgRequestBatch.encode(value).finish()
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value: MsgConfirmBatch.encode(value).finish()
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value: MsgDepositClaim.encode(value).finish()
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value: MsgWithdrawClaim.encode(value).finish()
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value: MsgValsetUpdatedClaim.encode(value).finish()
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value: MsgERC20DeployedClaim.encode(value).finish()
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value: MsgSetOrchestratorAddresses.encode(value).finish()
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value: MsgCancelSendToEth.encode(value).finish()
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value: MsgSubmitBadSignatureEvidence.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value
      };
    }
  },
  toJSON: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value: MsgValsetConfirm.toJSON(value)
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value: MsgSendToEth.toJSON(value)
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value: MsgRequestBatch.toJSON(value)
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value: MsgConfirmBatch.toJSON(value)
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value: MsgDepositClaim.toJSON(value)
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value: MsgWithdrawClaim.toJSON(value)
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value: MsgValsetUpdatedClaim.toJSON(value)
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value: MsgERC20DeployedClaim.toJSON(value)
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value: MsgSetOrchestratorAddresses.toJSON(value)
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value: MsgCancelSendToEth.toJSON(value)
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value: MsgSubmitBadSignatureEvidence.toJSON(value)
      };
    }
  },
  fromJSON: {
    valsetConfirm(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value: MsgValsetConfirm.fromJSON(value)
      };
    },
    sendToEth(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value: MsgSendToEth.fromJSON(value)
      };
    },
    requestBatch(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value: MsgRequestBatch.fromJSON(value)
      };
    },
    confirmBatch(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value: MsgConfirmBatch.fromJSON(value)
      };
    },
    depositClaim(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value: MsgDepositClaim.fromJSON(value)
      };
    },
    withdrawClaim(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value: MsgWithdrawClaim.fromJSON(value)
      };
    },
    valsetUpdateClaim(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value: MsgValsetUpdatedClaim.fromJSON(value)
      };
    },
    eRC20DeployedClaim(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value: MsgERC20DeployedClaim.fromJSON(value)
      };
    },
    setOrchestratorAddresses(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value: MsgSetOrchestratorAddresses.fromJSON(value)
      };
    },
    cancelSendToEth(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value: MsgCancelSendToEth.fromJSON(value)
      };
    },
    submitBadSignatureEvidence(value: any) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value: MsgSubmitBadSignatureEvidence.fromJSON(value)
      };
    }
  },
  fromPartial: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value: MsgValsetConfirm.fromPartial(value)
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value: MsgSendToEth.fromPartial(value)
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value: MsgRequestBatch.fromPartial(value)
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value: MsgConfirmBatch.fromPartial(value)
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value: MsgDepositClaim.fromPartial(value)
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value: MsgWithdrawClaim.fromPartial(value)
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value: MsgValsetUpdatedClaim.fromPartial(value)
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value: MsgERC20DeployedClaim.fromPartial(value)
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value: MsgSetOrchestratorAddresses.fromPartial(value)
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value: MsgCancelSendToEth.fromPartial(value)
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value: MsgSubmitBadSignatureEvidence.fromPartial(value)
      };
    }
  }
};