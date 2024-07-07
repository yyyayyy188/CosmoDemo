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
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      audit: {
        v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc)
      },
      cert: {
        v1beta2: _AkashCertV1beta2Queryrpc.createRpcQueryHooks(rpc)
      },
      deployment: {
        v1beta1: _AkashDeploymentV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v1beta2: _AkashDeploymentV1beta2Queryrpc.createRpcQueryHooks(rpc)
      },
      escrow: {
        v1beta1: _AkashEscrowV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v1beta2: _AkashEscrowV1beta2Queryrpc.createRpcQueryHooks(rpc)
      },
      market: {
        v1beta2: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc)
      },
      provider: {
        v1beta2: _AkashProviderV1beta2Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    BitCannaGlobal: {
      bcna: {
        bcna: _BcnaQueryrpc.createRpcQueryHooks(rpc)
      }
    },
    cosmos: {
      app: {
        v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      base: {
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc)
        },
        port: {
          v1: _IbcCorePortV1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    injective: {
      auction: {
        v1beta1: _InjectiveAuctionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      exchange: {
        v1beta1: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      insurance: {
        v1beta1: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      ocr: {
        v1beta1: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      oracle: {
        v1beta1: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      peggy: {
        v1: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc)
      },
      wasmx: {
        v1: _InjectiveWasmxV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    juno: {
      mint: _JunoMintQueryrpc.createRpcQueryHooks(rpc)
    },
    omniflix: {
      alloc: {
        v1beta1: _OmniflixAllocV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    osmosis: {
      downtimedetector: {
        v1beta1: _OsmosisDowntimedetectorV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      epochs: {
        v1beta1: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc)
      },
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc)
      },
      ibcratelimit: {
        v1beta1: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      incentives: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc),
      lockup: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc),
      mint: {
        v1beta1: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      poolincentives: {
        v1beta1: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      protorev: {
        v1beta1: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      superfluid: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc),
      swaprouter: {
        v1beta1: _OsmosisSwaprouterV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tokenfactory: {
        v1beta1: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      twap: {
        v1beta1: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      txfees: {
        v1beta1: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      valsetpref: {
        v1beta1: _OsmosisValsetprefV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    passage3d: {
      claim: {
        v1beta1: _Passage3dClaimV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    persistence: {
      halving: {
        v1beta1: _PersistenceHalvingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    regen: {
      data: {
        v1: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc),
        v1alpha2: _RegenDataV1alpha2Queryrpc.createRpcQueryHooks(rpc)
      },
      ecocredit: {
        basket: {
          v1: _RegenEcocreditBasketV1Queryrpc.createRpcQueryHooks(rpc)
        },
        marketplace: {
          v1: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryHooks(rpc)
        },
        v1: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc),
        v1alpha1: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc)
      },
      group: {
        v1alpha1: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    publicawesome: {
      stargaze: {
        alloc: {
          v1beta1: _StargazeAllocV1beta1Queryrpc.createRpcQueryHooks(rpc)
        },
        claim: {
          v1beta1: _StargazeClaimV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    stargaze: {
      mint: {
        v1beta1: _StargazeMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    umee: {
      leverage: {
        v1: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc)
      },
      oracle: {
        v1: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    /**
     * akash.audit.v1beta2.useAllProvidersAttributes
     * AllProvidersAttributes queries all providers
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useAllProvidersAttributes: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc).useAllProvidersAttributes,
    /**
     * akash.audit.v1beta2.useProviderAttributes
     * ProviderAttributes queries all provider signed attributes
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useProviderAttributes: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc).useProviderAttributes,
    /**
     * akash.audit.v1beta2.useProviderAuditorAttributes
     * ProviderAuditorAttributes queries provider signed attributes by specific auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useProviderAuditorAttributes: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc).useProviderAuditorAttributes,
    /**
     * akash.audit.v1beta2.useAuditorAttributes
     * AuditorAttributes queries all providers signed by this auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useAuditorAttributes: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc).useAuditorAttributes,
    /**
     * akash.cert.v1beta2.useCertificates
     * Certificates queries certificates
     */
    useCertificates: _AkashCertV1beta2Queryrpc.createRpcQueryHooks(rpc).useCertificates,
    /**
     * akash.deployment.v1beta1.useDeployments
     * Deployments queries deployments
     */
    useDeployments: _AkashDeploymentV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeployments,
    /**
     * akash.deployment.v1beta1.useDeployment
     * Deployment queries deployment details
     */
    useDeployment: _AkashDeploymentV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeployment,
    /**
     * akash.deployment.v1beta1.useGroup
     * Group queries group details
     */
    useGroup: _AkashDeploymentV1beta1Queryrpc.createRpcQueryHooks(rpc).useGroup,
    /**
     * akash.deployment.v1beta2.useDeployments
     * Deployments queries deployments
     */
    useAkashDeploymentV1beta2Deployments: _AkashDeploymentV1beta2Queryrpc.createRpcQueryHooks(rpc).useDeployments,
    /**
     * akash.deployment.v1beta2.useDeployment
     * Deployment queries deployment details
     */
    useAkashDeploymentV1beta2Deployment: _AkashDeploymentV1beta2Queryrpc.createRpcQueryHooks(rpc).useDeployment,
    /**
     * akash.deployment.v1beta2.useGroup
     * Group queries group details
     */
    useAkashDeploymentV1beta2Group: _AkashDeploymentV1beta2Queryrpc.createRpcQueryHooks(rpc).useGroup,
    /**
     * akash.escrow.v1beta1.useAccounts
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    useAccounts: _AkashEscrowV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * akash.escrow.v1beta1.usePayments
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    usePayments: _AkashEscrowV1beta1Queryrpc.createRpcQueryHooks(rpc).usePayments,
    /**
     * akash.escrow.v1beta2.useAccounts
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    useAkashEscrowV1beta2Accounts: _AkashEscrowV1beta2Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * akash.escrow.v1beta2.usePayments
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    useAkashEscrowV1beta2Payments: _AkashEscrowV1beta2Queryrpc.createRpcQueryHooks(rpc).usePayments,
    /**
     * akash.market.v1beta2.useOrders
     * Orders queries orders with filters
     */
    useOrders: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc).useOrders,
    /**
     * akash.market.v1beta2.useOrder
     * Order queries order details
     */
    useOrder: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc).useOrder,
    /**
     * akash.market.v1beta2.useBids
     * Bids queries bids with filters
     */
    useBids: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc).useBids,
    /**
     * akash.market.v1beta2.useBid
     * Bid queries bid details
     */
    useBid: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc).useBid,
    /**
     * akash.market.v1beta2.useLeases
     * Leases queries leases with filters
     */
    useLeases: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc).useLeases,
    /**
     * akash.market.v1beta2.useLease
     * Lease queries lease details
     */
    useLease: _AkashMarketV1beta2Queryrpc.createRpcQueryHooks(rpc).useLease,
    /**
     * akash.provider.v1beta2.useProviders
     * Providers queries providers
     */
    useProviders: _AkashProviderV1beta2Queryrpc.createRpcQueryHooks(rpc).useProviders,
    /**
     * akash.provider.v1beta2.useProvider
     * Provider queries provider details
     */
    useProvider: _AkashProviderV1beta2Queryrpc.createRpcQueryHooks(rpc).useProvider,
    /**
     * BitCannaGlobal.bcna.bcna.useParams
     * Parameters queries the parameters of the module.
     */
    useParams: _BcnaQueryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * BitCannaGlobal.bcna.bcna.useBitcannaid
     * Queries a Bitcannaid by id.
     */
    useBitcannaid: _BcnaQueryrpc.createRpcQueryHooks(rpc).useBitcannaid,
    /**
     * BitCannaGlobal.bcna.bcna.useBitcannaidAll
     * Queries a list of Bitcannaid items.
     */
    useBitcannaidAll: _BcnaQueryrpc.createRpcQueryHooks(rpc).useBitcannaidAll,
    /**
     * BitCannaGlobal.bcna.bcna.useSupplychain
     * Queries a Supplychain by id.
     */
    useSupplychain: _BcnaQueryrpc.createRpcQueryHooks(rpc).useSupplychain,
    /**
     * BitCannaGlobal.bcna.bcna.useSupplychainAll
     * Queries a list of Supplychain items.
     */
    useSupplychainAll: _BcnaQueryrpc.createRpcQueryHooks(rpc).useSupplychainAll,
    /**
     * cosmos.app.v1alpha1.useConfig
     * Config returns the current app config.
     */
    useConfig: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc).useConfig,
    /**
     * cosmos.auth.v1beta1.useAccounts
     * Accounts returns all the existing accounts
     * 
     * Since: cosmos-sdk 0.43
     */
    useCosmosAuthV1beta1Accounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * cosmos.auth.v1beta1.useAccount
     * Account returns account details based on address.
     */
    useAccount: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccount,
    /**
     * cosmos.auth.v1beta1.useParams
     * Params queries all parameters.
     */
    useCosmosAuthV1beta1Params: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.auth.v1beta1.useModuleAccounts
     * ModuleAccounts returns all the existing module accounts.
     */
    useModuleAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccounts,
    /**
     * cosmos.auth.v1beta1.useBech32Prefix
     * Bech32 queries bech32Prefix
     */
    useBech32Prefix: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useBech32Prefix,
    /**
     * cosmos.auth.v1beta1.useAddressBytesToString
     * AddressBytesToString converts Account Address bytes to string
     */
    useAddressBytesToString: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressBytesToString,
    /**
     * cosmos.auth.v1beta1.useAddressStringToBytes
     * AddressStringToBytes converts Address string to bytes
     */
    useAddressStringToBytes: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressStringToBytes,
    /**
     * cosmos.authz.v1beta1.useGrants
     * Returns list of `Authorization`, granted to the grantee by the granter.
     */
    useGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGrants,
    /**
     * cosmos.authz.v1beta1.useGranterGrants
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGranterGrants,
    /**
     * cosmos.authz.v1beta1.useGranteeGrants
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGranteeGrants,
    /**
     * cosmos.bank.v1beta1.useBalance
     * Balance queries the balance of a single coin for a single account.
     */
    useBalance: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.bank.v1beta1.useAllBalances
     * AllBalances queries the balance of all coins for a single account.
     */
    useAllBalances: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllBalances,
    /**
     * cosmos.bank.v1beta1.useSpendableBalances
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    useSpendableBalances: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpendableBalances,
    /**
     * cosmos.bank.v1beta1.useTotalSupply
     * TotalSupply queries the total supply of all coins.
     */
    useTotalSupply: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalSupply,
    /**
     * cosmos.bank.v1beta1.useSupplyOf
     * SupplyOf queries the supply of a single coin.
     */
    useSupplyOf: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSupplyOf,
    /**
     * cosmos.bank.v1beta1.useParams
     * Params queries the parameters of x/bank module.
     */
    useCosmosBankV1beta1Params: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.bank.v1beta1.useDenomMetadata
     * DenomsMetadata queries the client metadata of a given coin denomination.
     */
    useDenomMetadata: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomMetadata,
    /**
     * cosmos.bank.v1beta1.useDenomsMetadata
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomsMetadata,
    /**
     * cosmos.bank.v1beta1.useDenomOwners
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    useDenomOwners: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomOwners,
    /**
     * cosmos.base.tendermint.v1beta1.useGetNodeInfo
     * GetNodeInfo queries the current node info.
     */
    useGetNodeInfo: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetNodeInfo,
    /**
     * cosmos.base.tendermint.v1beta1.useGetSyncing
     * GetSyncing queries node syncing.
     */
    useGetSyncing: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetSyncing,
    /**
     * cosmos.base.tendermint.v1beta1.useGetLatestBlock
     * GetLatestBlock returns the latest block.
     */
    useGetLatestBlock: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetLatestBlock,
    /**
     * cosmos.base.tendermint.v1beta1.useGetBlockByHeight
     * GetBlockByHeight queries block for given height.
     */
    useGetBlockByHeight: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetBlockByHeight,
    /**
     * cosmos.base.tendermint.v1beta1.useGetLatestValidatorSet
     * GetLatestValidatorSet queries latest validator-set.
     */
    useGetLatestValidatorSet: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetLatestValidatorSet,
    /**
     * cosmos.base.tendermint.v1beta1.useGetValidatorSetByHeight
     * GetValidatorSetByHeight queries validator-set at a given height.
     */
    useGetValidatorSetByHeight: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetValidatorSetByHeight,
    /**
     * cosmos.distribution.v1beta1.useParams
     * Params queries params of the distribution module.
     */
    useCosmosDistributionV1beta1Params: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.distribution.v1beta1.useValidatorOutstandingRewards
     * ValidatorOutstandingRewards queries rewards of a validator address.
     */
    useValidatorOutstandingRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorOutstandingRewards,
    /**
     * cosmos.distribution.v1beta1.useValidatorCommission
     * ValidatorCommission queries accumulated commission for a validator.
     */
    useValidatorCommission: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorCommission,
    /**
     * cosmos.distribution.v1beta1.useValidatorSlashes
     * ValidatorSlashes queries slash events of a validator.
     */
    useValidatorSlashes: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorSlashes,
    /**
     * cosmos.distribution.v1beta1.useDelegationRewards
     * DelegationRewards queries the total rewards accrued by a delegation.
     */
    useDelegationRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegationRewards,
    /**
     * cosmos.distribution.v1beta1.useDelegationTotalRewards
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegationTotalRewards,
    /**
     * cosmos.distribution.v1beta1.useDelegatorValidators
     * DelegatorValidators queries the validators of a delegator.
     */
    useDelegatorValidators: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidators,
    /**
     * cosmos.distribution.v1beta1.useDelegatorWithdrawAddress
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     */
    useDelegatorWithdrawAddress: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorWithdrawAddress,
    /**
     * cosmos.distribution.v1beta1.useCommunityPool
     * CommunityPool queries the community pool coins.
     */
    useCommunityPool: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useCommunityPool,
    /**
     * cosmos.evidence.v1beta1.useEvidence
     * Evidence queries evidence based on evidence hash.
     */
    useEvidence: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc).useEvidence,
    /**
     * cosmos.evidence.v1beta1.useAllEvidence
     * AllEvidence queries all evidence.
     */
    useAllEvidence: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllEvidence,
    /**
     * cosmos.feegrant.v1beta1.useAllowance
     * Allowance returns fee granted to the grantee by the granter.
     */
    useAllowance: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowance,
    /**
     * cosmos.feegrant.v1beta1.useAllowances
     * Allowances returns all the grants for address.
     */
    useAllowances: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowances,
    /**
     * cosmos.feegrant.v1beta1.useAllowancesByGranter
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    useAllowancesByGranter: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowancesByGranter,
    /**
     * cosmos.gov.v1.useProposal
     * Proposal queries proposal details based on ProposalID.
     */
    useProposal: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.gov.v1.useProposals
     * Proposals queries all proposals based on given status.
     */
    useProposals: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useProposals,
    /**
     * cosmos.gov.v1.useVote
     * Vote queries voted information based on proposalID, voterAddr.
     */
    useVote: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useVote,
    /**
     * cosmos.gov.v1.useVotes
     * Votes queries votes of a given proposal.
     */
    useVotes: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useVotes,
    /**
     * cosmos.gov.v1.useParams
     * Params queries all parameters of the gov module.
     */
    useCosmosGovV1Params: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.gov.v1.useDeposit
     * Deposit queries single deposit information based proposalID, depositAddr.
     */
    useDeposit: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useDeposit,
    /**
     * cosmos.gov.v1.useDeposits
     * Deposits queries all deposits of a single proposal.
     */
    useDeposits: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useDeposits,
    /**
     * cosmos.gov.v1.useTallyResult
     * TallyResult queries the tally of a proposal vote.
     */
    useTallyResult: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.gov.v1beta1.useProposal
     * Proposal queries proposal details based on ProposalID.
     */
    useCosmosGovV1beta1Proposal: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.gov.v1beta1.useProposals
     * Proposals queries all proposals based on given status.
     */
    useCosmosGovV1beta1Proposals: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useProposals,
    /**
     * cosmos.gov.v1beta1.useVote
     * Vote queries voted information based on proposalID, voterAddr.
     */
    useCosmosGovV1beta1Vote: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useVote,
    /**
     * cosmos.gov.v1beta1.useVotes
     * Votes queries votes of a given proposal.
     */
    useCosmosGovV1beta1Votes: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useVotes,
    /**
     * cosmos.gov.v1beta1.useParams
     * Params queries all parameters of the gov module.
     */
    useCosmosGovV1beta1Params: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.gov.v1beta1.useDeposit
     * Deposit queries single deposit information based proposalID, depositAddr.
     */
    useCosmosGovV1beta1Deposit: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeposit,
    /**
     * cosmos.gov.v1beta1.useDeposits
     * Deposits queries all deposits of a single proposal.
     */
    useCosmosGovV1beta1Deposits: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeposits,
    /**
     * cosmos.gov.v1beta1.useTallyResult
     * TallyResult queries the tally of a proposal vote.
     */
    useCosmosGovV1beta1TallyResult: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.group.v1.useGroupInfo
     * GroupInfo queries group info based on group id.
     */
    useGroupInfo: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupInfo,
    /**
     * cosmos.group.v1.useGroupPolicyInfo
     * GroupPolicyInfo queries group policy info based on account address of group policy.
     */
    useGroupPolicyInfo: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPolicyInfo,
    /**
     * cosmos.group.v1.useGroupMembers
     * GroupMembers queries members of a group
     */
    useGroupMembers: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupMembers,
    /**
     * cosmos.group.v1.useGroupsByAdmin
     * GroupsByAdmin queries groups by admin address.
     */
    useGroupsByAdmin: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupsByAdmin,
    /**
     * cosmos.group.v1.useGroupPoliciesByGroup
     * GroupPoliciesByGroup queries group policies by group id.
     */
    useGroupPoliciesByGroup: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPoliciesByGroup,
    /**
     * cosmos.group.v1.useGroupPoliciesByAdmin
     * GroupsByAdmin queries group policies by admin address.
     */
    useGroupPoliciesByAdmin: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPoliciesByAdmin,
    /**
     * cosmos.group.v1.useProposal
     * Proposal queries a proposal based on proposal id.
     */
    useCosmosGroupV1Proposal: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.group.v1.useProposalsByGroupPolicy
     * ProposalsByGroupPolicy queries proposals based on account address of group policy.
     */
    useProposalsByGroupPolicy: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useProposalsByGroupPolicy,
    /**
     * cosmos.group.v1.useVoteByProposalVoter
     * VoteByProposalVoter queries a vote by proposal id and voter.
     */
    useVoteByProposalVoter: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVoteByProposalVoter,
    /**
     * cosmos.group.v1.useVotesByProposal
     * VotesByProposal queries a vote by proposal.
     */
    useVotesByProposal: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVotesByProposal,
    /**
     * cosmos.group.v1.useVotesByVoter
     * VotesByVoter queries a vote by voter.
     */
    useVotesByVoter: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVotesByVoter,
    /**
     * cosmos.group.v1.useGroupsByMember
     * GroupsByMember queries groups by member address.
     */
    useGroupsByMember: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupsByMember,
    /**
     * cosmos.group.v1.useTallyResult
     * TallyResult queries the tally of a proposal votes.
     */
    useCosmosGroupV1TallyResult: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.mint.v1beta1.useParams
     * Params returns the total set of minting parameters.
     */
    useCosmosMintV1beta1Params: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.mint.v1beta1.useInflation
     * Inflation returns the current minting inflation value.
     */
    useInflation: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useInflation,
    /**
     * cosmos.mint.v1beta1.useAnnualProvisions
     * AnnualProvisions current minting annual provisions value.
     */
    useAnnualProvisions: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useAnnualProvisions,
    /**
     * cosmos.nft.v1beta1.useBalance
     * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
     */
    useCosmosNftV1beta1Balance: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.nft.v1beta1.useOwner
     * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
     */
    useOwner: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useOwner,
    /**
     * cosmos.nft.v1beta1.useSupply
     * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
     */
    useSupply: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useSupply,
    /**
     * cosmos.nft.v1beta1.useNFTs
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useNFTs,
    /**
     * cosmos.nft.v1beta1.useNFT
     * NFT queries an NFT based on its class and id.
     */
    useNFT: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useNFT,
    /**
     * cosmos.nft.v1beta1.useClass
     * Class queries an NFT class based on its id
     */
    useClass: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useClass,
    /**
     * cosmos.nft.v1beta1.useClasses
     * Classes queries all NFT classes
     */
    useClasses: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useClasses,
    /**
     * cosmos.params.v1beta1.useParams
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    useCosmosParamsV1beta1Params: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.params.v1beta1.useSubspaces
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     */
    useSubspaces: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubspaces,
    /**
     * cosmos.slashing.v1beta1.useParams
     * Params queries the parameters of slashing module
     */
    useCosmosSlashingV1beta1Params: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.slashing.v1beta1.useSigningInfo
     * SigningInfo queries the signing info of given cons address
     */
    useSigningInfo: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useSigningInfo,
    /**
     * cosmos.slashing.v1beta1.useSigningInfos
     * SigningInfos queries signing info of all validators
     */
    useSigningInfos: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useSigningInfos,
    /**
     * cosmos.staking.v1beta1.useValidators
     * Validators queries all validators that match the given status.
     */
    useValidators: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidators,
    /**
     * cosmos.staking.v1beta1.useValidator
     * Validator queries validator info for given validator address.
     */
    useValidator: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidator,
    /**
     * cosmos.staking.v1beta1.useValidatorDelegations
     * ValidatorDelegations queries delegate info for given validator.
     */
    useValidatorDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorDelegations,
    /**
     * cosmos.staking.v1beta1.useValidatorUnbondingDelegations
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     */
    useValidatorUnbondingDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorUnbondingDelegations,
    /**
     * cosmos.staking.v1beta1.useDelegation
     * Delegation queries delegate info for given validator delegator pair.
     */
    useDelegation: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegation,
    /**
     * cosmos.staking.v1beta1.useUnbondingDelegation
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useUnbondingDelegation,
    /**
     * cosmos.staking.v1beta1.useDelegatorDelegations
     * DelegatorDelegations queries all delegations of a given delegator address.
     */
    useDelegatorDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorDelegations,
    /**
     * cosmos.staking.v1beta1.useDelegatorUnbondingDelegations
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    useDelegatorUnbondingDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorUnbondingDelegations,
    /**
     * cosmos.staking.v1beta1.useRedelegations
     * Redelegations queries redelegations of given address.
     */
    useRedelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useRedelegations,
    /**
     * cosmos.staking.v1beta1.useDelegatorValidators
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    useCosmosStakingV1beta1DelegatorValidators: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidators,
    /**
     * cosmos.staking.v1beta1.useDelegatorValidator
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidator,
    /**
     * cosmos.staking.v1beta1.useHistoricalInfo
     * HistoricalInfo queries the historical info for given height.
     */
    useHistoricalInfo: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useHistoricalInfo,
    /**
     * cosmos.staking.v1beta1.usePool
     * Pool queries the pool info.
     */
    usePool: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    /**
     * cosmos.staking.v1beta1.useParams
     * Parameters queries the staking parameters.
     */
    useCosmosStakingV1beta1Params: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.tx.v1beta1.useSimulate
     * Simulate simulates executing a transaction for estimating gas usage.
     */
    useSimulate: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useSimulate,
    /**
     * cosmos.tx.v1beta1.useGetTx
     * GetTx fetches a tx by hash.
     */
    useGetTx: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetTx,
    /**
     * cosmos.tx.v1beta1.useBroadcastTx
     * BroadcastTx broadcast transaction.
     */
    useBroadcastTx: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useBroadcastTx,
    /**
     * cosmos.tx.v1beta1.useGetTxsEvent
     * GetTxsEvent fetches txs by event.
     */
    useGetTxsEvent: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetTxsEvent,
    /**
     * cosmos.tx.v1beta1.useGetBlockWithTxs
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetBlockWithTxs,
    /**
     * cosmos.upgrade.v1beta1.useCurrentPlan
     * CurrentPlan queries the current upgrade plan.
     */
    useCurrentPlan: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useCurrentPlan,
    /**
     * cosmos.upgrade.v1beta1.useAppliedPlan
     * AppliedPlan queries a previously applied upgrade plan by its name.
     */
    useAppliedPlan: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useAppliedPlan,
    /**
     * cosmos.upgrade.v1beta1.useUpgradedConsensusState
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    useUpgradedConsensusState: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useUpgradedConsensusState,
    /**
     * cosmos.upgrade.v1beta1.useModuleVersions
     * ModuleVersions queries the list of module versions from state.
     * 
     * Since: cosmos-sdk 0.43
     */
    useModuleVersions: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleVersions,
    /**
     * cosmos.upgrade.v1beta1.useAuthority
     * Returns the account with authority to conduct upgrades
     */
    useAuthority: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useAuthority,
    /**
     * cosmwasm.wasm.v1.useContractInfo
     * ContractInfo gets the contract meta data
     */
    useContractInfo: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractInfo,
    /**
     * cosmwasm.wasm.v1.useContractHistory
     * ContractHistory gets the contract code history
     */
    useContractHistory: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractHistory,
    /**
     * cosmwasm.wasm.v1.useContractsByCode
     * ContractsByCode lists all smart contracts for a code id
     */
    useContractsByCode: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractsByCode,
    /**
     * cosmwasm.wasm.v1.useAllContractState
     * AllContractState gets all raw store data for a single contract
     */
    useAllContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useAllContractState,
    /**
     * cosmwasm.wasm.v1.useRawContractState
     * RawContractState gets single key from the raw store data of a contract
     */
    useRawContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useRawContractState,
    /**
     * cosmwasm.wasm.v1.useSmartContractState
     * SmartContractState get smart query result from the contract
     */
    useSmartContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useSmartContractState,
    /**
     * cosmwasm.wasm.v1.useCode
     * Code gets the binary code and metadata for a singe wasm code
     */
    useCode: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useCode,
    /**
     * cosmwasm.wasm.v1.useCodes
     * Codes gets the metadata for all stored wasm codes
     */
    useCodes: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useCodes,
    /**
     * cosmwasm.wasm.v1.usePinnedCodes
     * PinnedCodes gets the pinned code ids
     */
    usePinnedCodes: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).usePinnedCodes,
    /**
     * cosmwasm.wasm.v1.useParams
     * Params gets the module params
     */
    useCosmwasmWasmV1Params: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmwasm.wasm.v1.useContractsByCreator
     * ContractsByCreator gets the contracts by creator
     */
    useContractsByCreator: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractsByCreator,
    /**
     * ibc.applications.transfer.v1.useDenomTrace
     * DenomTrace queries a denomination trace information.
     */
    useDenomTrace: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomTrace,
    /**
     * ibc.applications.transfer.v1.useDenomTraces
     * DenomTraces queries all denomination traces.
     */
    useDenomTraces: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomTraces,
    /**
     * ibc.applications.transfer.v1.useParams
     * Params queries all parameters of the ibc-transfer module.
     */
    useIbcApplicationsTransferV1Params: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * ibc.core.channel.v1.useChannel
     * Channel queries an IBC Channel.
     */
    useChannel: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannel,
    /**
     * ibc.core.channel.v1.useChannels
     * Channels queries all the IBC channels of a chain.
     */
    useChannels: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannels,
    /**
     * ibc.core.channel.v1.useConnectionChannels
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useConnectionChannels,
    /**
     * ibc.core.channel.v1.useChannelClientState
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannelClientState,
    /**
     * ibc.core.channel.v1.useChannelConsensusState
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannelConsensusState,
    /**
     * ibc.core.channel.v1.usePacketCommitment
     * PacketCommitment queries a stored packet commitment hash.
     */
    usePacketCommitment: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketCommitment,
    /**
     * ibc.core.channel.v1.usePacketCommitments
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketCommitments,
    /**
     * ibc.core.channel.v1.usePacketReceipt
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketReceipt,
    /**
     * ibc.core.channel.v1.usePacketAcknowledgement
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     */
    usePacketAcknowledgement: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketAcknowledgement,
    /**
     * ibc.core.channel.v1.usePacketAcknowledgements
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketAcknowledgements,
    /**
     * ibc.core.channel.v1.useUnreceivedPackets
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useUnreceivedPackets,
    /**
     * ibc.core.channel.v1.useUnreceivedAcks
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useUnreceivedAcks,
    /**
     * ibc.core.channel.v1.useNextSequenceReceive
     * NextSequenceReceive returns the next receive sequence for a given channel.
     */
    useNextSequenceReceive: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useNextSequenceReceive,
    /**
     * ibc.core.client.v1.useClientState
     * ClientState queries an IBC light client.
     */
    useClientState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientState,
    /**
     * ibc.core.client.v1.useClientStates
     * ClientStates queries all the IBC light clients of a chain.
     */
    useClientStates: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientStates,
    /**
     * ibc.core.client.v1.useConsensusState
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusState,
    /**
     * ibc.core.client.v1.useConsensusStates
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusStates,
    /**
     * ibc.core.client.v1.useClientStatus
     * Status queries the status of an IBC client.
     */
    useClientStatus: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientStatus,
    /**
     * ibc.core.client.v1.useClientParams
     * ClientParams queries all parameters of the ibc client.
     */
    useClientParams: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientParams,
    /**
     * ibc.core.client.v1.useUpgradedClientState
     * UpgradedClientState queries an Upgraded IBC light client.
     */
    useUpgradedClientState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useUpgradedClientState,
    /**
     * ibc.core.client.v1.useUpgradedConsensusState
     * UpgradedConsensusState queries an Upgraded IBC consensus state.
     */
    useIbcCoreClientV1UpgradedConsensusState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useUpgradedConsensusState,
    /**
     * ibc.core.connection.v1.useConnection
     * Connection queries an IBC connection end.
     */
    useConnection: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnection,
    /**
     * ibc.core.connection.v1.useConnections
     * Connections queries all the IBC connections of a chain.
     */
    useConnections: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnections,
    /**
     * ibc.core.connection.v1.useClientConnections
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useClientConnections,
    /**
     * ibc.core.connection.v1.useConnectionClientState
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionClientState,
    /**
     * ibc.core.connection.v1.useConnectionConsensusState
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionConsensusState,
    /**
     * ibc.core.port.v1.useAppVersion
     * AppVersion queries an IBC Port and determines the appropriate application version to be used
     */
    useAppVersion: _IbcCorePortV1Queryrpc.createRpcQueryHooks(rpc).useAppVersion,
    /**
     * injective.auction.v1beta1.useAuctionParams
     * Retrieves auction params
     */
    useAuctionParams: _InjectiveAuctionV1beta1Queryrpc.createRpcQueryHooks(rpc).useAuctionParams,
    /**
     * injective.auction.v1beta1.useCurrentAuctionBasket
     * Retrieves current auction basket with current highest bid and bidder
     */
    useCurrentAuctionBasket: _InjectiveAuctionV1beta1Queryrpc.createRpcQueryHooks(rpc).useCurrentAuctionBasket,
    /**
     * injective.auction.v1beta1.useAuctionModuleState
     * Retrieves the entire auction module's state
     */
    useAuctionModuleState: _InjectiveAuctionV1beta1Queryrpc.createRpcQueryHooks(rpc).useAuctionModuleState,
    /**
     * injective.exchange.v1beta1.useQueryExchangeParams
     * Retrieves exchange params
     */
    useQueryExchangeParams: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useQueryExchangeParams,
    /**
     * injective.exchange.v1beta1.useSubaccountDeposits
     * Retrieves a Subaccount's Deposits
     */
    useSubaccountDeposits: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountDeposits,
    /**
     * injective.exchange.v1beta1.useSubaccountDeposit
     * Retrieves a Subaccount's Deposits
     */
    useSubaccountDeposit: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountDeposit,
    /**
     * injective.exchange.v1beta1.useExchangeBalances
     * Retrieves all of the balances of all users on the exchange.
     */
    useExchangeBalances: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useExchangeBalances,
    /**
     * injective.exchange.v1beta1.useSpotMarkets
     * Retrieves a list of spot markets.
     */
    useSpotMarkets: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotMarkets,
    /**
     * injective.exchange.v1beta1.useSpotMarket
     * Retrieves a spot market by ticker
     */
    useSpotMarket: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotMarket,
    /**
     * injective.exchange.v1beta1.useSpotOrderbook
     * Retrieves a spot market's orderbook by marketID
     */
    useSpotOrderbook: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotOrderbook,
    /**
     * injective.exchange.v1beta1.useTraderSpotOrders
     * Retrieves a trader's spot orders
     */
    useTraderSpotOrders: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTraderSpotOrders,
    /**
     * injective.exchange.v1beta1.useSpotOrdersByHashes
     * Retrieves spot orders corresponding to specified order hashes for a given subaccountID and marketID
     */
    useSpotOrdersByHashes: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotOrdersByHashes,
    /**
     * injective.exchange.v1beta1.useSubaccountOrders
     * Retrieves subaccount's orders
     */
    useSubaccountOrders: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountOrders,
    /**
     * injective.exchange.v1beta1.useTraderSpotTransientOrders
     * Retrieves a trader's transient spot orders
     */
    useTraderSpotTransientOrders: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTraderSpotTransientOrders,
    /**
     * injective.exchange.v1beta1.useSpotMidPriceAndTOB
     * Retrieves a spot market's mid-price
     */
    useSpotMidPriceAndTOB: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotMidPriceAndTOB,
    /**
     * injective.exchange.v1beta1.useDerivativeMidPriceAndTOB
     * Retrieves a derivative market's mid-price
     */
    useDerivativeMidPriceAndTOB: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useDerivativeMidPriceAndTOB,
    /**
     * injective.exchange.v1beta1.useDerivativeOrderbook
     * Retrieves a derivative market's orderbook by marketID
     */
    useDerivativeOrderbook: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useDerivativeOrderbook,
    /**
     * injective.exchange.v1beta1.useTraderDerivativeOrders
     * Retrieves a trader's derivative orders
     */
    useTraderDerivativeOrders: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTraderDerivativeOrders,
    /**
     * injective.exchange.v1beta1.useDerivativeOrdersByHashes
     * Retrieves a trader's derivative orders
     */
    useDerivativeOrdersByHashes: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useDerivativeOrdersByHashes,
    /**
     * injective.exchange.v1beta1.useTraderDerivativeTransientOrders
     * Retrieves a trader's transient derivative orders
     */
    useTraderDerivativeTransientOrders: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTraderDerivativeTransientOrders,
    /**
     * injective.exchange.v1beta1.useDerivativeMarkets
     * Retrieves a list of derivative markets.
     */
    useDerivativeMarkets: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useDerivativeMarkets,
    /**
     * injective.exchange.v1beta1.useDerivativeMarket
     * Retrieves a derivative market by ticker
     */
    useDerivativeMarket: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useDerivativeMarket,
    /**
     * injective.exchange.v1beta1.useDerivativeMarketAddress
     * Retrieves a derivative market's corresponding address for fees that contribute to the market's insurance fund
     */
    useDerivativeMarketAddress: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useDerivativeMarketAddress,
    /**
     * injective.exchange.v1beta1.useSubaccountTradeNonce
     * Retrieves a subaccount's trade nonce
     */
    useSubaccountTradeNonce: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountTradeNonce,
    /**
     * injective.exchange.v1beta1.useExchangeModuleState
     * Retrieves the entire exchange module's state
     */
    useExchangeModuleState: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useExchangeModuleState,
    /**
     * injective.exchange.v1beta1.usePositions
     * Retrieves the entire exchange module's positions
     */
    usePositions: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).usePositions,
    /**
     * injective.exchange.v1beta1.useSubaccountPositions
     * Retrieves subaccount's positions
     */
    useSubaccountPositions: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountPositions,
    /**
     * injective.exchange.v1beta1.useSubaccountPositionInMarket
     * Retrieves subaccount's position in market
     */
    useSubaccountPositionInMarket: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountPositionInMarket,
    /**
     * injective.exchange.v1beta1.useSubaccountEffectivePositionInMarket
     * Retrieves subaccount's position in market
     */
    useSubaccountEffectivePositionInMarket: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountEffectivePositionInMarket,
    /**
     * injective.exchange.v1beta1.usePerpetualMarketInfo
     * Retrieves perpetual market info
     */
    usePerpetualMarketInfo: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).usePerpetualMarketInfo,
    /**
     * injective.exchange.v1beta1.useExpiryFuturesMarketInfo
     * Retrieves expiry market info
     */
    useExpiryFuturesMarketInfo: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useExpiryFuturesMarketInfo,
    /**
     * injective.exchange.v1beta1.usePerpetualMarketFunding
     * Retrieves perpetual market funding
     */
    usePerpetualMarketFunding: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).usePerpetualMarketFunding,
    /**
     * injective.exchange.v1beta1.useSubaccountOrderMetadata
     * Retrieves subaccount's order metadata
     */
    useSubaccountOrderMetadata: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubaccountOrderMetadata,
    /**
     * injective.exchange.v1beta1.useTradeRewardPoints
     * Retrieves the account and total trade rewards points
     */
    useTradeRewardPoints: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTradeRewardPoints,
    /**
     * injective.exchange.v1beta1.usePendingTradeRewardPoints
     * Retrieves the pending account and total trade rewards points
     */
    usePendingTradeRewardPoints: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).usePendingTradeRewardPoints,
    /**
     * injective.exchange.v1beta1.useTradeRewardCampaign
     * Retrieves the trade reward campaign
     */
    useTradeRewardCampaign: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTradeRewardCampaign,
    /**
     * injective.exchange.v1beta1.useFeeDiscountAccountInfo
     * Retrieves the account's fee discount info
     */
    useFeeDiscountAccountInfo: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeeDiscountAccountInfo,
    /**
     * injective.exchange.v1beta1.useFeeDiscountSchedule
     * Retrieves the fee discount schedule
     */
    useFeeDiscountSchedule: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeeDiscountSchedule,
    /**
     * injective.exchange.v1beta1.useBalanceMismatches
     * Retrieves mismatches between available vs. total balance
     */
    useBalanceMismatches: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalanceMismatches,
    /**
     * injective.exchange.v1beta1.useBalanceWithBalanceHolds
     * Retrieves available and total balances with balance holds
     */
    useBalanceWithBalanceHolds: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalanceWithBalanceHolds,
    /**
     * injective.exchange.v1beta1.useFeeDiscountTierStatistics
     * Retrieves fee discount tier stats
     */
    useFeeDiscountTierStatistics: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeeDiscountTierStatistics,
    /**
     * injective.exchange.v1beta1.useNinjaVaultInfos
     * Retrieves market making pool info
     */
    useNinjaVaultInfos: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useNinjaVaultInfos,
    /**
     * injective.exchange.v1beta1.useQueryMarketIDFromVault
     * QueryMarketIDFromVault returns the market ID for a given vault subaccount ID
     */
    useQueryMarketIDFromVault: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useQueryMarketIDFromVault,
    /**
     * injective.exchange.v1beta1.useHistoricalTradeRecords
     * Retrieves historical trade records for a given market ID
     */
    useHistoricalTradeRecords: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useHistoricalTradeRecords,
    /**
     * injective.exchange.v1beta1.useIsOptedOutOfRewards
     * Retrieves if the account is opted out of rewards
     */
    useIsOptedOutOfRewards: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useIsOptedOutOfRewards,
    /**
     * injective.exchange.v1beta1.useOptedOutOfRewardsAccounts
     * Retrieves all accounts opted out of rewards
     */
    useOptedOutOfRewardsAccounts: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useOptedOutOfRewardsAccounts,
    /**
     * injective.exchange.v1beta1.useMarketVolatility
     * MarketVolatility computes the volatility for spot and derivative markets trading history.
     */
    useMarketVolatility: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useMarketVolatility,
    /**
     * injective.exchange.v1beta1.useBinaryOptionsMarkets
     * Retrieves a spot market's orderbook by marketID
     */
    useBinaryOptionsMarkets: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useBinaryOptionsMarkets,
    /**
     * injective.exchange.v1beta1.useTraderDerivativeConditionalOrders
     * Retrieves a trader's derivative conditional orders
     */
    useTraderDerivativeConditionalOrders: _InjectiveExchangeV1beta1Queryrpc.createRpcQueryHooks(rpc).useTraderDerivativeConditionalOrders,
    /**
     * injective.insurance.v1beta1.useInsuranceParams
     * Retrieves insurance params
     */
    useInsuranceParams: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc).useInsuranceParams,
    /**
     * injective.insurance.v1beta1.useInsuranceFund
     * Retrieves individual insurance fund information from market id
     */
    useInsuranceFund: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc).useInsuranceFund,
    /**
     * injective.insurance.v1beta1.useInsuranceFunds
     * Retrieves all insurance funds
     */
    useInsuranceFunds: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc).useInsuranceFunds,
    /**
     * injective.insurance.v1beta1.useEstimatedRedemptions
     * Retrives the value of insurance fund share token at current price (not pending redemption)
     */
    useEstimatedRedemptions: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimatedRedemptions,
    /**
     * injective.insurance.v1beta1.usePendingRedemptions
     * Retrieves pending redemptions' share token at current price
     */
    usePendingRedemptions: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc).usePendingRedemptions,
    /**
     * injective.insurance.v1beta1.useInsuranceModuleState
     * Retrieves the entire insurance module's state
     */
    useInsuranceModuleState: _InjectiveInsuranceV1beta1Queryrpc.createRpcQueryHooks(rpc).useInsuranceModuleState,
    /**
     * injective.ocr.v1beta1.useParams
     * Params
     */
    useInjectiveOcrV1beta1Params: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * injective.ocr.v1beta1.useFeedConfig
     * Retrieves the OCR FeedConfig for a given FeedId
     */
    useFeedConfig: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeedConfig,
    /**
     * injective.ocr.v1beta1.useFeedConfigInfo
     * Retrieves the OCR FeedConfigInfo for a given FeedId
     */
    useFeedConfigInfo: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeedConfigInfo,
    /**
     * injective.ocr.v1beta1.useLatestRound
     * Retrieves latest round ID and data, including median answer for that round
     */
    useLatestRound: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useLatestRound,
    /**
     * injective.ocr.v1beta1.useLatestTransmissionDetails
     * LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID.
     */
    useLatestTransmissionDetails: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useLatestTransmissionDetails,
    /**
     * injective.ocr.v1beta1.useOwedAmount
     * Retrieves transmitter's owed amount
     */
    useOwedAmount: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useOwedAmount,
    /**
     * injective.ocr.v1beta1.useOcrModuleState
     * Retrieves the entire OCR module's state
     */
    useOcrModuleState: _InjectiveOcrV1beta1Queryrpc.createRpcQueryHooks(rpc).useOcrModuleState,
    /**
     * injective.oracle.v1beta1.useParams
     * Retrieves oracle params
     */
    useInjectiveOracleV1beta1Params: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * injective.oracle.v1beta1.useBandRelayers
     * Retrieves the band relayers
     */
    useBandRelayers: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useBandRelayers,
    /**
     * injective.oracle.v1beta1.useBandPriceStates
     * Retrieves the state for all band price feeds
     */
    useBandPriceStates: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useBandPriceStates,
    /**
     * injective.oracle.v1beta1.useBandIBCPriceStates
     * Retrieves the state for all band ibc price feeds
     */
    useBandIBCPriceStates: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useBandIBCPriceStates,
    /**
     * injective.oracle.v1beta1.usePriceFeedPriceStates
     * Retrieves the state for all price feeds
     */
    usePriceFeedPriceStates: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).usePriceFeedPriceStates,
    /**
     * injective.oracle.v1beta1.useCoinbasePriceStates
     * Retrieves the state for all coinbase price feeds
     */
    useCoinbasePriceStates: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useCoinbasePriceStates,
    /**
     * injective.oracle.v1beta1.useProviderPriceState
     * Retrieves the state for all provider price feeds
     */
    useProviderPriceState: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useProviderPriceState,
    /**
     * injective.oracle.v1beta1.useOracleModuleState
     * Retrieves the entire oracle module's state
     */
    useOracleModuleState: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useOracleModuleState,
    /**
     * injective.oracle.v1beta1.useHistoricalPriceRecords
     * Retrieves historical price records for a given OracleType and Symbol
     */
    useHistoricalPriceRecords: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useHistoricalPriceRecords,
    /**
     * injective.oracle.v1beta1.useOracleVolatility
     * Retrieves mixed volatility value for the specified pair of base/quote
     */
    useOracleVolatility: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useOracleVolatility,
    /**
     * injective.oracle.v1beta1.useOracleProvidersInfo
     * OracleProvidersInfo
     */
    useOracleProvidersInfo: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useOracleProvidersInfo,
    /**
     * injective.oracle.v1beta1.useOracleProviderPrices
     * OracleProviderPrices
     */
    useOracleProviderPrices: _InjectiveOracleV1beta1Queryrpc.createRpcQueryHooks(rpc).useOracleProviderPrices,
    /**
     * injective.peggy.v1.useParams
     * Deployments queries deployments
     */
    useInjectivePeggyV1Params: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * injective.peggy.v1.useCurrentValset
     * valset
     */
    useCurrentValset: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useCurrentValset,
    /**
     * injective.peggy.v1.useValsetRequest
     * ValsetRequest
     */
    useValsetRequest: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useValsetRequest,
    /**
     * injective.peggy.v1.useValsetConfirm
     * ValsetConfirm
     */
    useValsetConfirm: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useValsetConfirm,
    /**
     * injective.peggy.v1.useValsetConfirmsByNonce
     * ValsetConfirmsByNonce
     */
    useValsetConfirmsByNonce: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useValsetConfirmsByNonce,
    /**
     * injective.peggy.v1.useLastValsetRequests
     * LastValsetRequests
     */
    useLastValsetRequests: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useLastValsetRequests,
    /**
     * injective.peggy.v1.useLastPendingValsetRequestByAddr
     * LastPendingValsetRequestByAddr
     */
    useLastPendingValsetRequestByAddr: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useLastPendingValsetRequestByAddr,
    /**
     * injective.peggy.v1.useLastEventByAddr
     * claim
     */
    useLastEventByAddr: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useLastEventByAddr,
    /**
     * injective.peggy.v1.useGetPendingSendToEth
     * batch
     */
    useGetPendingSendToEth: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useGetPendingSendToEth,
    /**
     * injective.peggy.v1.useBatchFees
     * BatchFees
     */
    useBatchFees: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useBatchFees,
    /**
     * injective.peggy.v1.useOutgoingTxBatches
     * OutgoingTxBatches
     */
    useOutgoingTxBatches: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useOutgoingTxBatches,
    /**
     * injective.peggy.v1.useLastPendingBatchRequestByAddr
     * LastPendingBatchRequestByAddr
     */
    useLastPendingBatchRequestByAddr: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useLastPendingBatchRequestByAddr,
    /**
     * injective.peggy.v1.useBatchRequestByNonce
     * BatchRequestByNonce
     */
    useBatchRequestByNonce: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useBatchRequestByNonce,
    /**
     * injective.peggy.v1.useBatchConfirms
     * BatchConfirms
     */
    useBatchConfirms: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useBatchConfirms,
    /**
     * injective.peggy.v1.useERC20ToDenom
     * ERC20ToDenom
     */
    useERC20ToDenom: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useERC20ToDenom,
    /**
     * injective.peggy.v1.useDenomToERC20
     * DenomToERC20
     */
    useDenomToERC20: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useDenomToERC20,
    /**
     * injective.peggy.v1.useGetDelegateKeyByValidator
     * GetDelegateKeyByValidator
     */
    useGetDelegateKeyByValidator: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useGetDelegateKeyByValidator,
    /**
     * injective.peggy.v1.useGetDelegateKeyByEth
     * GetDelegateKeyByEth
     */
    useGetDelegateKeyByEth: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useGetDelegateKeyByEth,
    /**
     * injective.peggy.v1.useGetDelegateKeyByOrchestrator
     * GetDelegateKeyByOrchestrator
     */
    useGetDelegateKeyByOrchestrator: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).useGetDelegateKeyByOrchestrator,
    /**
     * injective.peggy.v1.usePeggyModuleState
     * Retrieves the entire peggy module's state
     */
    usePeggyModuleState: _InjectivePeggyV1Queryrpc.createRpcQueryHooks(rpc).usePeggyModuleState,
    /**
     * injective.wasmx.v1.useWasmxParams
     * Retrieves wasmx params
     */
    useWasmxParams: _InjectiveWasmxV1Queryrpc.createRpcQueryHooks(rpc).useWasmxParams,
    /**
     * injective.wasmx.v1.useWasmxModuleState
     * Retrieves the entire wasmx module's state
     */
    useWasmxModuleState: _InjectiveWasmxV1Queryrpc.createRpcQueryHooks(rpc).useWasmxModuleState,
    /**
     * juno.mint.useParams
     * Params returns the total set of minting parameters.
     */
    useJunoMintParams: _JunoMintQueryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * juno.mint.useInflation
     * Inflation returns the current minting inflation value.
     */
    useJunoMintInflation: _JunoMintQueryrpc.createRpcQueryHooks(rpc).useInflation,
    /**
     * juno.mint.useAnnualProvisions
     * AnnualProvisions current minting annual provisions value.
     */
    useJunoMintAnnualProvisions: _JunoMintQueryrpc.createRpcQueryHooks(rpc).useAnnualProvisions,
    /**
     * omniflix.alloc.v1beta1.useParams
     * this line is used by starport scaffolding # 2
     */
    useOmniflixAllocV1beta1Params: _OmniflixAllocV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.downtimedetector.v1beta1.useRecoveredSinceDowntimeOfLength
     * RecoveredSinceDowntimeOfLength
     */
    useRecoveredSinceDowntimeOfLength: _OsmosisDowntimedetectorV1beta1Queryrpc.createRpcQueryHooks(rpc).useRecoveredSinceDowntimeOfLength,
    /**
     * osmosis.epochs.v1beta1.useEpochInfos
     * EpochInfos provide running epochInfos
     */
    useEpochInfos: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc).useEpochInfos,
    /**
     * osmosis.epochs.v1beta1.useCurrentEpoch
     * CurrentEpoch provide current epoch of specified identifier
     */
    useCurrentEpoch: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc).useCurrentEpoch,
    /**
     * osmosis.gamm.v1beta1.usePools
     * Pools
     */
    usePools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePools,
    /**
     * osmosis.gamm.v1beta1.useNumPools
     * NumPools
     */
    useNumPools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useNumPools,
    /**
     * osmosis.gamm.v1beta1.useTotalLiquidity
     * TotalLiquidity
     */
    useTotalLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalLiquidity,
    /**
     * osmosis.gamm.v1beta1.usePoolsWithFilter
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    usePoolsWithFilter: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolsWithFilter,
    /**
     * osmosis.gamm.v1beta1.usePool
     * Per Pool gRPC Endpoints
     */
    useOsmosisGammV1beta1Pool: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    /**
     * osmosis.gamm.v1beta1.usePoolType
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    usePoolType: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolType,
    /**
     * osmosis.gamm.v1beta1.useCalcJoinPoolNoSwapShares
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    useCalcJoinPoolNoSwapShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolNoSwapShares,
    /**
     * osmosis.gamm.v1beta1.useCalcJoinPoolShares
     * CalcJoinPoolShares
     */
    useCalcJoinPoolShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolShares,
    /**
     * osmosis.gamm.v1beta1.useCalcExitPoolCoinsFromShares
     * CalcExitPoolCoinsFromShares
     */
    useCalcExitPoolCoinsFromShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcExitPoolCoinsFromShares,
    /**
     * osmosis.gamm.v1beta1.usePoolParams
     * PoolParams
     */
    usePoolParams: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolParams,
    /**
     * osmosis.gamm.v1beta1.useTotalPoolLiquidity
     * TotalPoolLiquidity
     */
    useTotalPoolLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalPoolLiquidity,
    /**
     * osmosis.gamm.v1beta1.useTotalShares
     * TotalShares
     */
    useTotalShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalShares,
    /**
     * osmosis.gamm.v1beta1.useSpotPrice
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotPrice,
    /**
     * osmosis.gamm.v1beta1.useEstimateSwapExactAmountIn
     * Estimate the swap.
     */
    useEstimateSwapExactAmountIn: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountIn,
    /**
     * osmosis.gamm.v1beta1.useEstimateSwapExactAmountOut
     * EstimateSwapExactAmountOut
     */
    useEstimateSwapExactAmountOut: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountOut,
    /**
     * osmosis.gamm.v2.useSpotPrice
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useOsmosisGammV2SpotPrice: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc).useSpotPrice,
    /**
     * osmosis.ibcratelimit.v1beta1.useParams
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    useOsmosisIbcratelimitV1beta1Params: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.incentives.useModuleToDistributeCoins
     * ModuleToDistributeCoins returns coins that are going to be distributed
     */
    useModuleToDistributeCoins: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useModuleToDistributeCoins,
    /**
     * osmosis.incentives.useGaugeByID
     * GaugeByID returns gauges by their respective ID
     */
    useGaugeByID: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useGaugeByID,
    /**
     * osmosis.incentives.useGauges
     * Gauges returns both upcoming and active gauges
     */
    useGauges: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useGauges,
    /**
     * osmosis.incentives.useActiveGauges
     * ActiveGauges returns active gauges
     */
    useActiveGauges: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useActiveGauges,
    /**
     * osmosis.incentives.useActiveGaugesPerDenom
     * ActiveGaugesPerDenom returns active gauges by denom
     */
    useActiveGaugesPerDenom: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useActiveGaugesPerDenom,
    /**
     * osmosis.incentives.useUpcomingGauges
     * Returns scheduled gauges that have not yet occured
     */
    useUpcomingGauges: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useUpcomingGauges,
    /**
     * osmosis.incentives.useUpcomingGaugesPerDenom
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    useUpcomingGaugesPerDenom: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useUpcomingGaugesPerDenom,
    /**
     * osmosis.incentives.useRewardsEst
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    useRewardsEst: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useRewardsEst,
    /**
     * osmosis.incentives.useLockableDurations
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    useLockableDurations: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useLockableDurations,
    /**
     * osmosis.lockup.useModuleBalance
     * Return full balance of the module
     */
    useModuleBalance: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useModuleBalance,
    /**
     * osmosis.lockup.useModuleLockedAmount
     * Return locked balance of the module
     */
    useModuleLockedAmount: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useModuleLockedAmount,
    /**
     * osmosis.lockup.useAccountUnlockableCoins
     * Returns unlockable coins which are not withdrawn yet
     */
    useAccountUnlockableCoins: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountUnlockableCoins,
    /**
     * osmosis.lockup.useAccountUnlockingCoins
     * Returns unlocking coins
     */
    useAccountUnlockingCoins: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountUnlockingCoins,
    /**
     * osmosis.lockup.useAccountLockedCoins
     * Return a locked coins that can't be withdrawn
     */
    useAccountLockedCoins: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedCoins,
    /**
     * osmosis.lockup.useAccountLockedPastTime
     * Returns locked records of an account with unlock time beyond timestamp
     */
    useAccountLockedPastTime: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedPastTime,
    /**
     * osmosis.lockup.useAccountLockedPastTimeNotUnlockingOnly
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    useAccountLockedPastTimeNotUnlockingOnly: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedPastTimeNotUnlockingOnly,
    /**
     * osmosis.lockup.useAccountUnlockedBeforeTime
     * Returns unlocked records with unlock time before timestamp
     */
    useAccountUnlockedBeforeTime: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountUnlockedBeforeTime,
    /**
     * osmosis.lockup.useAccountLockedPastTimeDenom
     * Returns lock records by address, timestamp, denom
     */
    useAccountLockedPastTimeDenom: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedPastTimeDenom,
    /**
     * osmosis.lockup.useLockedDenom
     * Returns total locked per denom with longer past given time
     */
    useLockedDenom: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useLockedDenom,
    /**
     * osmosis.lockup.useLockedByID
     * Returns lock record by id
     */
    useLockedByID: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useLockedByID,
    /**
     * osmosis.lockup.useSyntheticLockupsByLockupID
     * Returns synthetic lockups by native lockup id
     */
    useSyntheticLockupsByLockupID: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useSyntheticLockupsByLockupID,
    /**
     * osmosis.lockup.useAccountLockedLongerDuration
     * Returns account locked records with longer duration
     */
    useAccountLockedLongerDuration: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedLongerDuration,
    /**
     * osmosis.lockup.useAccountLockedDuration
     * Returns account locked records with a specific duration
     */
    useAccountLockedDuration: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedDuration,
    /**
     * osmosis.lockup.useAccountLockedLongerDurationNotUnlockingOnly
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    useAccountLockedLongerDurationNotUnlockingOnly: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedLongerDurationNotUnlockingOnly,
    /**
     * osmosis.lockup.useAccountLockedLongerDurationDenom
     * Returns account's locked records for a denom with longer duration
     */
    useAccountLockedLongerDurationDenom: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedLongerDurationDenom,
    /**
     * osmosis.lockup.useParams
     * Params returns lockup params.
     */
    useOsmosisLockupParams: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.mint.v1beta1.useParams
     * Params returns the total set of minting parameters.
     */
    useOsmosisMintV1beta1Params: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.mint.v1beta1.useEpochProvisions
     * EpochProvisions returns the current minting epoch provisions value.
     */
    useEpochProvisions: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useEpochProvisions,
    /**
     * osmosis.poolincentives.v1beta1.useGaugeIds
     * GaugeIds takes the pool id and returns the matching gauge ids and durations
     */
    useGaugeIds: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useGaugeIds,
    /**
     * osmosis.poolincentives.v1beta1.useDistrInfo
     * DistrInfo returns the pool's matching gauge ids and weights.
     */
    useDistrInfo: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useDistrInfo,
    /**
     * osmosis.poolincentives.v1beta1.useParams
     * Params returns pool incentives params.
     */
    useOsmosisPoolincentivesV1beta1Params: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.poolincentives.v1beta1.useLockableDurations
     * LockableDurations returns lock durations for pools.
     */
    useOsmosisPoolincentivesV1beta1LockableDurations: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useLockableDurations,
    /**
     * osmosis.poolincentives.v1beta1.useIncentivizedPools
     * IncentivizedPools returns currently incentivized pools
     */
    useIncentivizedPools: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useIncentivizedPools,
    /**
     * osmosis.poolincentives.v1beta1.useExternalIncentiveGauges
     * ExternalIncentiveGauges returns external incentive gauges.
     */
    useExternalIncentiveGauges: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useExternalIncentiveGauges,
    /**
     * osmosis.protorev.v1beta1.useParams
     * Params queries the parameters of the module.
     */
    useOsmosisProtorevV1beta1Params: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.protorev.v1beta1.useGetProtoRevNumberOfTrades
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    useGetProtoRevNumberOfTrades: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetProtoRevNumberOfTrades,
    /**
     * osmosis.protorev.v1beta1.useGetProtoRevProfitsByDenom
     * GetProtoRevProfitsByDenom queries the profits of the module by denom
     */
    useGetProtoRevProfitsByDenom: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetProtoRevProfitsByDenom,
    /**
     * osmosis.protorev.v1beta1.useGetProtoRevAllProfits
     * GetProtoRevAllProfits queries all of the profits from the module
     */
    useGetProtoRevAllProfits: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetProtoRevAllProfits,
    /**
     * osmosis.protorev.v1beta1.useGetProtoRevStatisticsByPool
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    useGetProtoRevStatisticsByPool: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetProtoRevStatisticsByPool,
    /**
     * osmosis.protorev.v1beta1.useGetProtoRevAllStatistics
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    useGetProtoRevAllStatistics: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetProtoRevAllStatistics,
    /**
     * osmosis.protorev.v1beta1.useGetProtoRevTokenPairArbRoutes
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    useGetProtoRevTokenPairArbRoutes: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetProtoRevTokenPairArbRoutes,
    /**
     * osmosis.superfluid.useParams
     * Params returns the total set of superfluid parameters.
     */
    useOsmosisSuperfluidParams: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.superfluid.useAssetType
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    useAssetType: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAssetType,
    /**
     * osmosis.superfluid.useAllAssets
     * Returns all registered superfluid assets.
     */
    useAllAssets: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAllAssets,
    /**
     * osmosis.superfluid.useAssetMultiplier
     * Returns the osmo equivalent multiplier used in the most recent epoch.
     */
    useAssetMultiplier: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAssetMultiplier,
    /**
     * osmosis.superfluid.useAllIntermediaryAccounts
     * Returns all superfluid intermediary accounts.
     */
    useAllIntermediaryAccounts: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAllIntermediaryAccounts,
    /**
     * osmosis.superfluid.useConnectedIntermediaryAccount
     * Returns intermediary account connected to a superfluid staked lock by id
     */
    useConnectedIntermediaryAccount: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useConnectedIntermediaryAccount,
    /**
     * osmosis.superfluid.useTotalDelegationByValidatorForDenom
     * Returns the amount of delegations of specific denom for all validators
     */
    useTotalDelegationByValidatorForDenom: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useTotalDelegationByValidatorForDenom,
    /**
     * osmosis.superfluid.useTotalSuperfluidDelegations
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    useTotalSuperfluidDelegations: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useTotalSuperfluidDelegations,
    /**
     * osmosis.superfluid.useSuperfluidDelegationAmount
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    useSuperfluidDelegationAmount: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidDelegationAmount,
    /**
     * osmosis.superfluid.useSuperfluidDelegationsByDelegator
     * Returns all the delegated superfluid poistions for a specific delegator.
     */
    useSuperfluidDelegationsByDelegator: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidDelegationsByDelegator,
    /**
     * osmosis.superfluid.useSuperfluidUndelegationsByDelegator
     * Returns all the undelegating superfluid poistions for a specific delegator.
     */
    useSuperfluidUndelegationsByDelegator: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidUndelegationsByDelegator,
    /**
     * osmosis.superfluid.useSuperfluidDelegationsByValidatorDenom
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    useSuperfluidDelegationsByValidatorDenom: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidDelegationsByValidatorDenom,
    /**
     * osmosis.superfluid.useEstimateSuperfluidDelegatedAmountByValidatorDenom
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    useEstimateSuperfluidDelegatedAmountByValidatorDenom: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useEstimateSuperfluidDelegatedAmountByValidatorDenom,
    /**
     * osmosis.superfluid.useTotalDelegationByDelegator
     * Returns the specified delegations for a specific delegator
     */
    useTotalDelegationByDelegator: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useTotalDelegationByDelegator,
    /**
     * osmosis.superfluid.useUnpoolWhitelist
     * Returns a list of whitelisted pool ids to unpool.
     */
    useUnpoolWhitelist: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useUnpoolWhitelist,
    /**
     * osmosis.swaprouter.v1beta1.useParams
     * Params
     */
    useOsmosisSwaprouterV1beta1Params: _OsmosisSwaprouterV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.swaprouter.v1beta1.useEstimateSwapExactAmountIn
     * Estimates swap amount out given in.
     */
    useOsmosisSwaprouterV1beta1EstimateSwapExactAmountIn: _OsmosisSwaprouterV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountIn,
    /**
     * osmosis.swaprouter.v1beta1.useEstimateSwapExactAmountOut
     * Estimates swap amount in given out.
     */
    useOsmosisSwaprouterV1beta1EstimateSwapExactAmountOut: _OsmosisSwaprouterV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountOut,
    /**
     * osmosis.swaprouter.v1beta1.useNumPools
     * NumPools
     */
    useOsmosisSwaprouterV1beta1NumPools: _OsmosisSwaprouterV1beta1Queryrpc.createRpcQueryHooks(rpc).useNumPools,
    /**
     * osmosis.tokenfactory.v1beta1.useParams
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    useOsmosisTokenfactoryV1beta1Params: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.tokenfactory.v1beta1.useDenomAuthorityMetadata
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    useDenomAuthorityMetadata: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomAuthorityMetadata,
    /**
     * osmosis.tokenfactory.v1beta1.useDenomsFromCreator
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    useDenomsFromCreator: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomsFromCreator,
    /**
     * osmosis.twap.v1beta1.useParams
     * Params
     */
    useOsmosisTwapV1beta1Params: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.twap.v1beta1.useArithmeticTwap
     * ArithmeticTwap
     */
    useArithmeticTwap: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc).useArithmeticTwap,
    /**
     * osmosis.twap.v1beta1.useArithmeticTwapToNow
     * ArithmeticTwapToNow
     */
    useArithmeticTwapToNow: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc).useArithmeticTwapToNow,
    /**
     * osmosis.txfees.v1beta1.useFeeTokens
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    useFeeTokens: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeeTokens,
    /**
     * osmosis.txfees.v1beta1.useDenomSpotPrice
     * DenomSpotPrice returns all spot prices by each registered token denom.
     */
    useDenomSpotPrice: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomSpotPrice,
    /**
     * osmosis.txfees.v1beta1.useDenomPoolId
     * Returns the poolID for a specified denom input.
     */
    useDenomPoolId: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomPoolId,
    /**
     * osmosis.txfees.v1beta1.useBaseDenom
     * Returns a list of all base denom tokens and their corresponding pools.
     */
    useBaseDenom: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useBaseDenom,
    /**
     * osmosis.valsetpref.v1beta1.useUserValidatorPreferences
     * Returns the list of ValidatorPreferences for the user.
     */
    useUserValidatorPreferences: _OsmosisValsetprefV1beta1Queryrpc.createRpcQueryHooks(rpc).useUserValidatorPreferences,
    /**
     * passage3d.claim.v1beta1.useModuleAccountBalance
     * ModuleAccountBalance RPC returns the claim module account balance
     */
    useModuleAccountBalance: _Passage3dClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccountBalance,
    /**
     * passage3d.claim.v1beta1.useParams
     * Params RPC returns claim module params
     */
    usePassage3dClaimV1beta1Params: _Passage3dClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * passage3d.claim.v1beta1.useClaimRecord
     * ClaimRecord RPC returns claim record for an address
     */
    useClaimRecord: _Passage3dClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useClaimRecord,
    /**
     * passage3d.claim.v1beta1.useClaimableForAction
     * ClaimableForAction RPC returns claimable amount for an action of an address
     */
    useClaimableForAction: _Passage3dClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useClaimableForAction,
    /**
     * passage3d.claim.v1beta1.useTotalClaimable
     * TotalClaimable RPC returns total claimable amount for address
     */
    useTotalClaimable: _Passage3dClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalClaimable,
    /**
     * persistence.halving.v1beta1.useParams
     * Params returns the total set of halving parameters.
     */
    usePersistenceHalvingV1beta1Params: _PersistenceHalvingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * regen.data.v1.useByIRI
     * ByIRI queries data based on IRI.
     */
    useByIRI: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useByIRI,
    /**
     * regen.data.v1.useByHash
     * ByHash queries data based on ContentHash.
     */
    useByHash: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useByHash,
    /**
     * regen.data.v1.useByAttestor
     * ByAttestor queries data based on attestor.
     */
    useByAttestor: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useByAttestor,
    /**
     * regen.data.v1.useIRIByHash
     * IRIByHash queries IRI based on ContentHash.
     */
    useIRIByHash: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useIRIByHash,
    /**
     * regen.data.v1.useIRIByRawHash
     * IRIByRawHash queries IRI based on ContentHash_Raw properties.
     */
    useIRIByRawHash: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useIRIByRawHash,
    /**
     * regen.data.v1.useIRIByGraphHash
     * IRIByGraphHash queries IRI based on ContentHash_Graph properties.
     */
    useIRIByGraphHash: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useIRIByGraphHash,
    /**
     * regen.data.v1.useHashByIRI
     * HashByIRI queries ContentHash based on IRI.
     */
    useHashByIRI: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useHashByIRI,
    /**
     * regen.data.v1.useAttestorsByIRI
     * AttestorsByIRI queries attestors based on IRI.
     */
    useAttestorsByIRI: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useAttestorsByIRI,
    /**
     * regen.data.v1.useAttestorsByHash
     * AttestorsByHash queries attestors based on ContentHash.
     */
    useAttestorsByHash: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useAttestorsByHash,
    /**
     * regen.data.v1.useResolversByIRI
     * ResolversByIRI queries resolvers based on IRI.
     */
    useResolversByIRI: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useResolversByIRI,
    /**
     * regen.data.v1.useResolversByHash
     * ResolversByHash queries resolvers based on ContentHash.
     */
    useResolversByHash: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useResolversByHash,
    /**
     * regen.data.v1.useResolverInfo
     * ResolverInfo queries information about a resolved based on URL.
     */
    useResolverInfo: _RegenDataV1Queryrpc.createRpcQueryHooks(rpc).useResolverInfo,
    /**
     * regen.data.v1alpha2.useByHash
     * ByHash queries data based on its ContentHash.
     */
    useRegenDataV1alpha2ByHash: _RegenDataV1alpha2Queryrpc.createRpcQueryHooks(rpc).useByHash,
    /**
     * regen.data.v1alpha2.useBySigner
     * BySigner queries data based on signers.
     */
    useBySigner: _RegenDataV1alpha2Queryrpc.createRpcQueryHooks(rpc).useBySigner,
    /**
     * regen.ecocredit.basket.v1.useBasket
     * Basket queries one basket by denom.
     */
    useBasket: _RegenEcocreditBasketV1Queryrpc.createRpcQueryHooks(rpc).useBasket,
    /**
     * regen.ecocredit.basket.v1.useBaskets
     * Baskets lists all baskets in the ecocredit module.
     */
    useBaskets: _RegenEcocreditBasketV1Queryrpc.createRpcQueryHooks(rpc).useBaskets,
    /**
     * regen.ecocredit.basket.v1.useBasketBalances
     * BasketBalances lists the balance of each credit batch in the basket.
     */
    useBasketBalances: _RegenEcocreditBasketV1Queryrpc.createRpcQueryHooks(rpc).useBasketBalances,
    /**
     * regen.ecocredit.basket.v1.useBasketBalance
     * BasketBalance queries the balance of a specific credit batch in the basket.
     */
    useBasketBalance: _RegenEcocreditBasketV1Queryrpc.createRpcQueryHooks(rpc).useBasketBalance,
    /**
     * regen.ecocredit.marketplace.v1.useSellOrder
     * SellOrder queries a sell order by its ID
     */
    useSellOrder: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryHooks(rpc).useSellOrder,
    /**
     * regen.ecocredit.marketplace.v1.useSellOrders
     * SellOrders queries a paginated list of all sell orders
     */
    useSellOrders: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryHooks(rpc).useSellOrders,
    /**
     * regen.ecocredit.marketplace.v1.useSellOrdersByBatchDenom
     * SellOrdersByDenom queries a paginated list of all sell orders of a specific
     * ecocredit denom
     */
    useSellOrdersByBatchDenom: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryHooks(rpc).useSellOrdersByBatchDenom,
    /**
     * regen.ecocredit.marketplace.v1.useSellOrdersByAddress
     * SellOrdersByAddress queries a paginated list of all sell orders from a
     * specific address
     */
    useSellOrdersByAddress: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryHooks(rpc).useSellOrdersByAddress,
    /**
     * regen.ecocredit.marketplace.v1.useAllowedDenoms
     * AllowedDenoms queries all denoms allowed to be set in the AskPrice of a
     * sell order
     */
    useAllowedDenoms: _RegenEcocreditMarketplaceV1Queryrpc.createRpcQueryHooks(rpc).useAllowedDenoms,
    /**
     * regen.ecocredit.v1.useClasses
     * Classes queries for all credit classes with pagination.
     */
    useRegenEcocreditV1Classes: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useClasses,
    /**
     * regen.ecocredit.v1.useClassesByAdmin
     * ClassesByAdmin queries for all credit classes with a specific admin
     * address.
     */
    useClassesByAdmin: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useClassesByAdmin,
    /**
     * regen.ecocredit.v1.useClass
     * Class queries for information on a credit class.
     */
    useRegenEcocreditV1Class: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useClass,
    /**
     * regen.ecocredit.v1.useClassIssuers
     * ClassIssuers queries for the addresses of the issuers for a credit class.
     */
    useClassIssuers: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useClassIssuers,
    /**
     * regen.ecocredit.v1.useProjects
     * Projects queries for all projects within a class with pagination.
     */
    useProjects: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useProjects,
    /**
     * regen.ecocredit.v1.useProjectsByReferenceId
     * ProjectsByReferenceId queries for all projects by reference-id with
     * pagination.
     */
    useProjectsByReferenceId: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useProjectsByReferenceId,
    /**
     * regen.ecocredit.v1.useProject
     * Project queries for information on a project.
     */
    useProject: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useProject,
    /**
     * regen.ecocredit.v1.useBatches
     * Batches queries for all batches in the given project with pagination.
     */
    useBatches: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useBatches,
    /**
     * regen.ecocredit.v1.useBatchesByIssuer
     * BatchesByIssuer queries all batches issued from a given issuer address.
     */
    useBatchesByIssuer: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useBatchesByIssuer,
    /**
     * regen.ecocredit.v1.useBatchesByClass
     * BatchesByClass queries all batches issued from a given class.
     */
    useBatchesByClass: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useBatchesByClass,
    /**
     * regen.ecocredit.v1.useBatch
     * Batch queries for information on a credit batch.
     */
    useBatch: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useBatch,
    /**
     * regen.ecocredit.v1.useBalance
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    useRegenEcocreditV1Balance: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * regen.ecocredit.v1.useBalances
     * Balances queries all credit balances the given account holds.
     */
    useBalances: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useBalances,
    /**
     * regen.ecocredit.v1.useSupply
     * Supply queries the tradable and retired supply of a credit batch.
     */
    useRegenEcocreditV1Supply: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useSupply,
    /**
     * regen.ecocredit.v1.useCreditTypes
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    useCreditTypes: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useCreditTypes,
    /**
     * regen.ecocredit.v1.useParams
     * Params queries the ecocredit module parameters.
     */
    useRegenEcocreditV1Params: _RegenEcocreditV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * regen.ecocredit.v1alpha1.useClasses
     * Classes queries for all credit classes with pagination.
     */
    useRegenEcocreditV1alpha1Classes: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useClasses,
    /**
     * regen.ecocredit.v1alpha1.useClassInfo
     * ClassInfo queries for information on a credit class.
     */
    useClassInfo: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useClassInfo,
    /**
     * regen.ecocredit.v1alpha1.useBatches
     * Batches queries for all batches in the given credit class with pagination.
     */
    useRegenEcocreditV1alpha1Batches: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useBatches,
    /**
     * regen.ecocredit.v1alpha1.useBatchInfo
     * BatchInfo queries for information on a credit batch.
     */
    useBatchInfo: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useBatchInfo,
    /**
     * regen.ecocredit.v1alpha1.useBalance
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    useRegenEcocreditV1alpha1Balance: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * regen.ecocredit.v1alpha1.useSupply
     * Supply queries the tradable and retired supply of a credit batch.
     */
    useRegenEcocreditV1alpha1Supply: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useSupply,
    /**
     * regen.ecocredit.v1alpha1.useCreditTypes
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    useRegenEcocreditV1alpha1CreditTypes: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useCreditTypes,
    /**
     * regen.ecocredit.v1alpha1.useParams
     * Params queries the ecocredit module parameters.
     */
    useRegenEcocreditV1alpha1Params: _RegenEcocreditV1alpha1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * regen.group.v1alpha1.useGroupInfo
     * GroupInfo queries group info based on group id.
     */
    useRegenGroupV1alpha1GroupInfo: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGroupInfo,
    /**
     * regen.group.v1alpha1.useGroupAccountInfo
     * GroupAccountInfo queries group account info based on group account address.
     */
    useGroupAccountInfo: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGroupAccountInfo,
    /**
     * regen.group.v1alpha1.useGroupMembers
     * GroupMembers queries members of a group
     */
    useRegenGroupV1alpha1GroupMembers: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGroupMembers,
    /**
     * regen.group.v1alpha1.useGroupsByAdmin
     * GroupsByAdmin queries groups by admin address.
     */
    useRegenGroupV1alpha1GroupsByAdmin: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGroupsByAdmin,
    /**
     * regen.group.v1alpha1.useGroupAccountsByGroup
     * GroupAccountsByGroup queries group accounts by group id.
     */
    useGroupAccountsByGroup: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGroupAccountsByGroup,
    /**
     * regen.group.v1alpha1.useGroupAccountsByAdmin
     * GroupsByAdmin queries group accounts by admin address.
     */
    useGroupAccountsByAdmin: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGroupAccountsByAdmin,
    /**
     * regen.group.v1alpha1.useProposal
     * Proposal queries a proposal based on proposal id.
     */
    useRegenGroupV1alpha1Proposal: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * regen.group.v1alpha1.useProposalsByGroupAccount
     * ProposalsByGroupAccount queries proposals based on group account address.
     */
    useProposalsByGroupAccount: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useProposalsByGroupAccount,
    /**
     * regen.group.v1alpha1.useVoteByProposalVoter
     * VoteByProposalVoter queries a vote by proposal id and voter.
     */
    useRegenGroupV1alpha1VoteByProposalVoter: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useVoteByProposalVoter,
    /**
     * regen.group.v1alpha1.useVotesByProposal
     * VotesByProposal queries a vote by proposal.
     */
    useRegenGroupV1alpha1VotesByProposal: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useVotesByProposal,
    /**
     * regen.group.v1alpha1.useVotesByVoter
     * VotesByVoter queries a vote by voter.
     */
    useRegenGroupV1alpha1VotesByVoter: _RegenGroupV1alpha1Queryrpc.createRpcQueryHooks(rpc).useVotesByVoter,
    /**
     * publicawesome.stargaze.alloc.v1beta1.useParams
     * this line is used by starport scaffolding # 2
     */
    usePublicawesomeStargazeAllocV1beta1Params: _StargazeAllocV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * publicawesome.stargaze.claim.v1beta1.useModuleAccountBalance
     * this line is used by starport scaffolding # 2
     */
    usePublicawesomeStargazeClaimV1beta1ModuleAccountBalance: _StargazeClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccountBalance,
    /**
     * publicawesome.stargaze.claim.v1beta1.useParams
     * Params
     */
    usePublicawesomeStargazeClaimV1beta1Params: _StargazeClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * publicawesome.stargaze.claim.v1beta1.useClaimRecord
     * ClaimRecord
     */
    usePublicawesomeStargazeClaimV1beta1ClaimRecord: _StargazeClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useClaimRecord,
    /**
     * publicawesome.stargaze.claim.v1beta1.useClaimableForAction
     * ClaimableForAction
     */
    usePublicawesomeStargazeClaimV1beta1ClaimableForAction: _StargazeClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useClaimableForAction,
    /**
     * publicawesome.stargaze.claim.v1beta1.useTotalClaimable
     * TotalClaimable
     */
    usePublicawesomeStargazeClaimV1beta1TotalClaimable: _StargazeClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalClaimable,
    /**
     * stargaze.mint.v1beta1.useParams
     * Params returns the total set of minting parameters.
     */
    useStargazeMintV1beta1Params: _StargazeMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * stargaze.mint.v1beta1.useAnnualProvisions
     * AnnualProvisions current minting annual provisions value.
     */
    useStargazeMintV1beta1AnnualProvisions: _StargazeMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useAnnualProvisions,
    /**
     * umee.leverage.v1.useParams
     * Params queries the parameters of the x/leverage module.
     */
    useUmeeLeverageV1Params: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * umee.leverage.v1.useRegisteredTokens
     * RegisteredTokens queries for all the registered tokens.
     */
    useRegisteredTokens: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useRegisteredTokens,
    /**
     * umee.leverage.v1.useMarketSummary
     * MarketSummary queries a base asset's current borrowing and supplying conditions.
     */
    useMarketSummary: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useMarketSummary,
    /**
     * umee.leverage.v1.useAccountBalances
     * AccountBalances queries an account's current supply, collateral, and borrow positions.
     */
    useAccountBalances: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useAccountBalances,
    /**
     * umee.leverage.v1.useAccountSummary
     * AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully.
     */
    useAccountSummary: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useAccountSummary,
    /**
     * umee.leverage.v1.useLiquidationTargets
     * LiquidationTargets queries a list of all borrower account addresses eligible for liquidation.
     */
    useLiquidationTargets: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useLiquidationTargets,
    /**
     * umee.leverage.v1.useBadDebts
     * BadDebts queries a list of borrow positions that have been marked for bad debt repayment.
     */
    useBadDebts: _UmeeLeverageV1Queryrpc.createRpcQueryHooks(rpc).useBadDebts,
    /**
     * umee.oracle.v1.useExchangeRates
     * ExchangeRates returns exchange rates of all denoms,
     * or, if specified, returns a single denom
     */
    useExchangeRates: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useExchangeRates,
    /**
     * umee.oracle.v1.useActiveExchangeRates
     * ActiveExchangeRates returns all active denoms
     */
    useActiveExchangeRates: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useActiveExchangeRates,
    /**
     * umee.oracle.v1.useFeederDelegation
     * FeederDelegation returns feeder delegation of a validator
     */
    useFeederDelegation: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useFeederDelegation,
    /**
     * umee.oracle.v1.useMissCounter
     * MissCounter returns oracle miss counter of a validator
     */
    useMissCounter: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useMissCounter,
    /**
     * umee.oracle.v1.useSlashWindow
     * SlashWindow returns slash window information
     */
    useSlashWindow: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useSlashWindow,
    /**
     * umee.oracle.v1.useAggregatePrevote
     * AggregatePrevote returns an aggregate prevote of a validator
     */
    useAggregatePrevote: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useAggregatePrevote,
    /**
     * umee.oracle.v1.useAggregatePrevotes
     * AggregatePrevotes returns aggregate prevotes of all validators
     */
    useAggregatePrevotes: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useAggregatePrevotes,
    /**
     * umee.oracle.v1.useAggregateVote
     * AggregateVote returns an aggregate vote of a validator
     */
    useAggregateVote: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useAggregateVote,
    /**
     * umee.oracle.v1.useAggregateVotes
     * AggregateVotes returns aggregate votes of all validators
     */
    useAggregateVotes: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useAggregateVotes,
    /**
     * umee.oracle.v1.useParams
     * Params queries all parameters.
     */
    useUmeeOracleV1Params: _UmeeOracleV1Queryrpc.createRpcQueryHooks(rpc).useParams
  };
};