import * as _81 from "./app/v1alpha1/config";
import * as _82 from "./app/v1alpha1/module";
import * as _83 from "./app/v1alpha1/query";
import * as _84 from "./auth/v1beta1/auth";
import * as _85 from "./auth/v1beta1/genesis";
import * as _86 from "./auth/v1beta1/query";
import * as _87 from "./authz/v1beta1/authz";
import * as _88 from "./authz/v1beta1/event";
import * as _89 from "./authz/v1beta1/genesis";
import * as _90 from "./authz/v1beta1/query";
import * as _91 from "./authz/v1beta1/tx";
import * as _92 from "./bank/v1beta1/authz";
import * as _93 from "./bank/v1beta1/bank";
import * as _94 from "./bank/v1beta1/genesis";
import * as _95 from "./bank/v1beta1/query";
import * as _96 from "./bank/v1beta1/tx";
import * as _97 from "./base/abci/v1beta1/abci";
import * as _98 from "./base/kv/v1beta1/kv";
import * as _99 from "./base/query/v1beta1/pagination";
import * as _100 from "./base/reflection/v1beta1/reflection";
import * as _101 from "./base/reflection/v2alpha1/reflection";
import * as _102 from "./base/snapshots/v1beta1/snapshot";
import * as _103 from "./base/store/v1beta1/commit_info";
import * as _104 from "./base/store/v1beta1/listening";
import * as _105 from "./base/tendermint/v1beta1/query";
import * as _106 from "./base/v1beta1/coin";
import * as _107 from "./capability/v1beta1/capability";
import * as _108 from "./capability/v1beta1/genesis";
import * as _109 from "./crisis/v1beta1/genesis";
import * as _110 from "./crisis/v1beta1/tx";
import * as _111 from "./crypto/ed25519/keys";
import * as _112 from "./crypto/hd/v1/hd";
import * as _113 from "./crypto/keyring/v1/record";
import * as _114 from "./crypto/multisig/keys";
import * as _115 from "./crypto/secp256k1/keys";
import * as _116 from "./crypto/secp256r1/keys";
import * as _117 from "./distribution/v1beta1/distribution";
import * as _118 from "./distribution/v1beta1/genesis";
import * as _119 from "./distribution/v1beta1/query";
import * as _120 from "./distribution/v1beta1/tx";
import * as _121 from "./evidence/v1beta1/evidence";
import * as _122 from "./evidence/v1beta1/genesis";
import * as _123 from "./evidence/v1beta1/query";
import * as _124 from "./evidence/v1beta1/tx";
import * as _125 from "./feegrant/v1beta1/feegrant";
import * as _126 from "./feegrant/v1beta1/genesis";
import * as _127 from "./feegrant/v1beta1/query";
import * as _128 from "./feegrant/v1beta1/tx";
import * as _129 from "./genutil/v1beta1/genesis";
import * as _130 from "./gov/v1/genesis";
import * as _131 from "./gov/v1/gov";
import * as _132 from "./gov/v1/query";
import * as _133 from "./gov/v1/tx";
import * as _134 from "./gov/v1beta1/genesis";
import * as _135 from "./gov/v1beta1/gov";
import * as _136 from "./gov/v1beta1/query";
import * as _137 from "./gov/v1beta1/tx";
import * as _138 from "./group/v1/events";
import * as _139 from "./group/v1/genesis";
import * as _140 from "./group/v1/query";
import * as _141 from "./group/v1/tx";
import * as _142 from "./group/v1/types";
import * as _143 from "./mint/v1beta1/genesis";
import * as _144 from "./mint/v1beta1/mint";
import * as _145 from "./mint/v1beta1/query";
import * as _146 from "./msg/v1/msg";
import * as _147 from "./nft/v1beta1/event";
import * as _148 from "./nft/v1beta1/genesis";
import * as _149 from "./nft/v1beta1/nft";
import * as _150 from "./nft/v1beta1/query";
import * as _151 from "./nft/v1beta1/tx";
import * as _152 from "./orm/v1/orm";
import * as _153 from "./orm/v1alpha1/schema";
import * as _154 from "./params/v1beta1/params";
import * as _155 from "./params/v1beta1/query";
import * as _156 from "./slashing/v1beta1/genesis";
import * as _157 from "./slashing/v1beta1/query";
import * as _158 from "./slashing/v1beta1/slashing";
import * as _159 from "./slashing/v1beta1/tx";
import * as _160 from "./staking/v1beta1/authz";
import * as _161 from "./staking/v1beta1/genesis";
import * as _162 from "./staking/v1beta1/query";
import * as _163 from "./staking/v1beta1/staking";
import * as _164 from "./staking/v1beta1/tx";
import * as _165 from "./tx/signing/v1beta1/signing";
import * as _166 from "./tx/v1beta1/service";
import * as _167 from "./tx/v1beta1/tx";
import * as _168 from "./upgrade/v1beta1/query";
import * as _169 from "./upgrade/v1beta1/tx";
import * as _170 from "./upgrade/v1beta1/upgrade";
import * as _171 from "./vesting/v1beta1/tx";
import * as _172 from "./vesting/v1beta1/vesting";
import * as _439 from "./authz/v1beta1/tx.amino";
import * as _440 from "./bank/v1beta1/tx.amino";
import * as _441 from "./crisis/v1beta1/tx.amino";
import * as _442 from "./distribution/v1beta1/tx.amino";
import * as _443 from "./evidence/v1beta1/tx.amino";
import * as _444 from "./feegrant/v1beta1/tx.amino";
import * as _445 from "./gov/v1/tx.amino";
import * as _446 from "./gov/v1beta1/tx.amino";
import * as _447 from "./group/v1/tx.amino";
import * as _448 from "./nft/v1beta1/tx.amino";
import * as _449 from "./slashing/v1beta1/tx.amino";
import * as _450 from "./staking/v1beta1/tx.amino";
import * as _451 from "./upgrade/v1beta1/tx.amino";
import * as _452 from "./vesting/v1beta1/tx.amino";
import * as _453 from "./authz/v1beta1/tx.registry";
import * as _454 from "./bank/v1beta1/tx.registry";
import * as _455 from "./crisis/v1beta1/tx.registry";
import * as _456 from "./distribution/v1beta1/tx.registry";
import * as _457 from "./evidence/v1beta1/tx.registry";
import * as _458 from "./feegrant/v1beta1/tx.registry";
import * as _459 from "./gov/v1/tx.registry";
import * as _460 from "./gov/v1beta1/tx.registry";
import * as _461 from "./group/v1/tx.registry";
import * as _462 from "./nft/v1beta1/tx.registry";
import * as _463 from "./slashing/v1beta1/tx.registry";
import * as _464 from "./staking/v1beta1/tx.registry";
import * as _465 from "./upgrade/v1beta1/tx.registry";
import * as _466 from "./vesting/v1beta1/tx.registry";
import * as _467 from "./app/v1alpha1/query.rpc.Query";
import * as _468 from "./auth/v1beta1/query.rpc.Query";
import * as _469 from "./authz/v1beta1/query.rpc.Query";
import * as _470 from "./bank/v1beta1/query.rpc.Query";
import * as _471 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _472 from "./distribution/v1beta1/query.rpc.Query";
import * as _473 from "./evidence/v1beta1/query.rpc.Query";
import * as _474 from "./feegrant/v1beta1/query.rpc.Query";
import * as _475 from "./gov/v1/query.rpc.Query";
import * as _476 from "./gov/v1beta1/query.rpc.Query";
import * as _477 from "./group/v1/query.rpc.Query";
import * as _478 from "./mint/v1beta1/query.rpc.Query";
import * as _479 from "./nft/v1beta1/query.rpc.Query";
import * as _480 from "./params/v1beta1/query.rpc.Query";
import * as _481 from "./slashing/v1beta1/query.rpc.Query";
import * as _482 from "./staking/v1beta1/query.rpc.Query";
import * as _483 from "./tx/v1beta1/service.rpc.Service";
import * as _484 from "./upgrade/v1beta1/query.rpc.Query";
import * as _485 from "./authz/v1beta1/tx.rpc.msg";
import * as _486 from "./bank/v1beta1/tx.rpc.msg";
import * as _487 from "./crisis/v1beta1/tx.rpc.msg";
import * as _488 from "./distribution/v1beta1/tx.rpc.msg";
import * as _489 from "./evidence/v1beta1/tx.rpc.msg";
import * as _490 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _491 from "./gov/v1/tx.rpc.msg";
import * as _492 from "./gov/v1beta1/tx.rpc.msg";
import * as _493 from "./group/v1/tx.rpc.msg";
import * as _494 from "./nft/v1beta1/tx.rpc.msg";
import * as _495 from "./slashing/v1beta1/tx.rpc.msg";
import * as _496 from "./staking/v1beta1/tx.rpc.msg";
import * as _497 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _498 from "./vesting/v1beta1/tx.rpc.msg";
import * as _647 from "./rpc.query";
import * as _648 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._467
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._468
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._439,
      ..._453,
      ..._469,
      ..._485
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._440,
      ..._454,
      ..._470,
      ..._486
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._97
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._98
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._99
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._100
      };
      export const v2alpha1 = {
        ..._101
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._102
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._103,
        ..._104
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._105,
        ..._471
      };
    }
    export const v1beta1 = {
      ..._106
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._107,
      ..._108
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._441,
      ..._455,
      ..._487
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._111
    };
    export namespace hd {
      export const v1 = {
        ..._112
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._113
      };
    }
    export const multisig = {
      ..._114
    };
    export const secp256k1 = {
      ..._115
    };
    export const secp256r1 = {
      ..._116
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._442,
      ..._456,
      ..._472,
      ..._488
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._443,
      ..._457,
      ..._473,
      ..._489
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._444,
      ..._458,
      ..._474,
      ..._490
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._129
    };
  }
  export namespace gov {
    export const v1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._445,
      ..._459,
      ..._475,
      ..._491
    };
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._446,
      ..._460,
      ..._476,
      ..._492
    };
  }
  export namespace group {
    export const v1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._447,
      ..._461,
      ..._477,
      ..._493
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._478
    };
  }
  export namespace msg {
    export const v1 = {
      ..._146
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._448,
      ..._462,
      ..._479,
      ..._494
    };
  }
  export namespace orm {
    export const v1 = {
      ..._152
    };
    export const v1alpha1 = {
      ..._153
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._480
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._449,
      ..._463,
      ..._481,
      ..._495
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._450,
      ..._464,
      ..._482,
      ..._496
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._165
      };
    }
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._483
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._451,
      ..._465,
      ..._484,
      ..._497
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._452,
      ..._466,
      ..._498
    };
  }
  export const ClientFactory = {
    ..._647,
    ..._648
  };
}