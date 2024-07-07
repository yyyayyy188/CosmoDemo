import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashAuditV1beta2Queryrpc from "./akash/audit/v1beta2/query.rpc.Query";
import * as _AkashCertV1beta2Queryrpc from "./akash/cert/v1beta2/query.rpc.Query";
import * as _AkashDeploymentV1beta1Queryrpc from "./akash/deployment/v1beta1/query.rpc.Query";
import * as _AkashDeploymentV1beta2Queryrpc from "./akash/deployment/v1beta2/query.rpc.Query";
import * as _AkashEscrowV1beta1Queryrpc from "./akash/escrow/v1beta1/query.rpc.Query";
import * as _AkashEscrowV1beta2Queryrpc from "./akash/escrow/v1beta2/query.rpc.Query";
import * as _AkashMarketV1beta2Queryrpc from "./akash/market/v1beta2/query.rpc.Query";
import * as _AkashProviderV1beta2Queryrpc from "./akash/provider/v1beta2/query.rpc.Query";
import * as _BcnaQueryrpc from "./bcna/query.rpc.Query";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _IbcCorePortV1Queryrpc from "./ibc/core/port/v1/query.rpc.Query";
import * as _InjectiveAuctionV1beta1Queryrpc from "./injective/auction/v1beta1/query.rpc.Query";
import * as _InjectiveExchangeV1beta1Queryrpc from "./injective/exchange/v1beta1/query.rpc.Query";
import * as _InjectiveInsuranceV1beta1Queryrpc from "./injective/insurance/v1beta1/query.rpc.Query";
import * as _InjectiveOcrV1beta1Queryrpc from "./injective/ocr/v1beta1/query.rpc.Query";
import * as _InjectiveOracleV1beta1Queryrpc from "./injective/oracle/v1beta1/query.rpc.Query";
import * as _InjectivePeggyV1Queryrpc from "./injective/peggy/v1/query.rpc.Query";
import * as _InjectiveWasmxV1Queryrpc from "./injective/wasmx/v1/query.rpc.Query";
import * as _JunoMintQueryrpc from "./juno/mint/query.rpc.Query";
import * as _OmniflixAllocV1beta1Queryrpc from "./omniflix/alloc/v1beta1/query.rpc.Query";
import * as _OsmosisDowntimedetectorV1beta1Queryrpc from "./osmosis/downtime-detector/v1beta1/query.rpc.Query";
import * as _OsmosisEpochsQueryrpc from "./osmosis/epochs/query.rpc.Query";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query";
import * as _OsmosisIbcratelimitV1beta1Queryrpc from "./osmosis/ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _OsmosisIncentivesQueryrpc from "./osmosis/incentives/query.rpc.Query";
import * as _OsmosisLockupQueryrpc from "./osmosis/lockup/query.rpc.Query";
import * as _OsmosisMintV1beta1Queryrpc from "./osmosis/mint/v1beta1/query.rpc.Query";
import * as _OsmosisPoolincentivesV1beta1Queryrpc from "./osmosis/pool-incentives/v1beta1/query.rpc.Query";
import * as _OsmosisProtorevV1beta1Queryrpc from "./osmosis/protorev/v1beta1/query.rpc.Query";
import * as _OsmosisSuperfluidQueryrpc from "./osmosis/superfluid/query.rpc.Query";
import * as _OsmosisSwaprouterV1beta1Queryrpc from "./osmosis/swaprouter/v1beta1/query.rpc.Query";
import * as _OsmosisTokenfactoryV1beta1Queryrpc from "./osmosis/tokenfactory/v1beta1/query.rpc.Query";
import * as _OsmosisTwapV1beta1Queryrpc from "./osmosis/twap/v1beta1/query.rpc.Query";
import * as _OsmosisTxfeesV1beta1Queryrpc from "./osmosis/txfees/v1beta1/query.rpc.Query";
import * as _OsmosisValsetprefV1beta1Queryrpc from "./osmosis/valset-pref/v1beta1/query.rpc.Query";
import * as _Passage3dClaimV1beta1Queryrpc from "./passage3d/claim/v1beta1/query.rpc.Query";
import * as _PersistenceHalvingV1beta1Queryrpc from "./persistence/halving/v1beta1/query.rpc.Query";
import * as _RegenDataV1Queryrpc from "./regen/data/v1/query.rpc.Query";
import * as _RegenDataV1alpha2Queryrpc from "./regen/data/v1alpha2/query.rpc.Query";
import * as _RegenEcocreditBasketV1Queryrpc from "./regen/ecocredit/basket/v1/query.rpc.Query";
import * as _RegenEcocreditMarketplaceV1Queryrpc from "./regen/ecocredit/marketplace/v1/query.rpc.Query";
import * as _RegenEcocreditV1Queryrpc from "./regen/ecocredit/v1/query.rpc.Query";
import * as _RegenEcocreditV1alpha1Queryrpc from "./regen/ecocredit/v1alpha1/query.rpc.Query";
import * as _RegenGroupV1alpha1Queryrpc from "./regen/group/v1alpha1/query.rpc.Query";
import * as _StargazeAllocV1beta1Queryrpc from "./stargaze/alloc/v1beta1/query.rpc.Query";
import * as _StargazeClaimV1beta1Queryrpc from "./stargaze/claim/v1beta1/query.rpc.Query";
import * as _StargazeMintV1beta1Queryrpc from "./stargaze/mint/v1beta1/query.rpc.Query";
import * as _UmeeLeverageV1Queryrpc from "./umee/leverage/v1/query.rpc.Query";
import * as _UmeeOracleV1Queryrpc from "./umee/oracle/v1/query.rpc.Query";
export const createRpcQueryMobxStores = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      audit: {
        v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      cert: {
        v1beta2: _AkashCertV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      deployment: {
        v1beta1: _AkashDeploymentV1beta1Queryrpc.createRpcQueryMobxStores(rpc),
        v1beta2: _AkashDeploymentV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      escrow: {
        v1beta1: _AkashEscrowV1beta1Queryrpc.createRpcQueryMobxStores(rpc),
        v1beta2: _AkashEscrowV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      market: {
        v1beta2: _AkashMarketV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      provider: {
        v1beta2: _AkashProviderV1beta2Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    BitCannaGlobal: {
      bcna: {
        bcna: _BcnaQueryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    cosmos: {
      app: {
        v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      base: {
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
        }
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryMobxStores(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryMobxStores(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryMobxStores(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryMobxStores(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryMobxStores(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryMobxStores(rpc)
        },
        port: {
          v1: _IbcCorePortV1Queryrpc.createRpcQueryMobxStores(rpc)
        }
      }
    },
    injective: {
      auction: {
        v1beta1: _InjectiveAuctionV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      exchange: {
        v1beta1: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      insurance: {
        v1beta1: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      ocr: {
        v1beta1: _InjectiveOcrV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      oracle: {
        v1beta1: _InjectiveOracleV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      peggy: {
        v1: _InjectivePeggyV1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      wasmx: {
        v1: _InjectiveWasmxV1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    juno: {
      mint: _JunoMintQueryrpc.createRpcQueryMobxStores(rpc)
    },
    omniflix: {
      alloc: {
        v1beta1: _OmniflixAllocV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    osmosis: {
      downtimedetector: {
        v1beta1: _OsmosisDowntimedetectorV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      epochs: {
        v1beta1: _OsmosisEpochsQueryrpc.createRpcQueryMobxStores(rpc)
      },
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryMobxStores(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      ibcratelimit: {
        v1beta1: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      incentives: _OsmosisIncentivesQueryrpc.createRpcQueryMobxStores(rpc),
      lockup: _OsmosisLockupQueryrpc.createRpcQueryMobxStores(rpc),
      mint: {
        v1beta1: _OsmosisMintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      poolincentives: {
        v1beta1: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      protorev: {
        v1beta1: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      superfluid: _OsmosisSuperfluidQueryrpc.createRpcQueryMobxStores(rpc),
      swaprouter: {
        v1beta1: _OsmosisSwaprouterV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      tokenfactory: {
        v1beta1: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      twap: {
        v1beta1: _OsmosisTwapV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      txfees: {
        v1beta1: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      valsetpref: {
        v1beta1: _OsmosisValsetprefV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    passage3d: {
      claim: {
        v1beta1: _Passage3dClaimV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    persistence: {
      halving: {
        v1beta1: _PersistenceHalvingV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    regen: {
      data: {
        v1: _RegenDataV1Queryrpc.createRpcQueryMobxStores(rpc),
        v1alpha2: _RegenDataV1alpha2Queryrpc.createRpcQueryMobxStores(rpc)
      },
      ecocredit: {
        basket: {
          v1: _RegenEcocreditBasketV1Queryrpc.createRpcQueryMobxStores(rpc)
        },
        marketplace: {
          v1: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryMobxStores(rpc)
        },
        v1: _RegenEcocreditV1Queryrpc.createRpcQueryMobxStores(rpc),
        v1alpha1: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      group: {
        v1alpha1: _RegenGroupV1alpha1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    publicawesome: {
      stargaze: {
        alloc: {
          v1beta1: _StargazeAllocV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
        },
        claim: {
          v1beta1: _StargazeClaimV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
        }
      }
    },
    stargaze: {
      mint: {
        v1beta1: _StargazeMintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    },
    umee: {
      leverage: {
        v1: _UmeeLeverageV1Queryrpc.createRpcQueryMobxStores(rpc)
      },
      oracle: {
        v1: _UmeeOracleV1Queryrpc.createRpcQueryMobxStores(rpc)
      }
    }
  };
};