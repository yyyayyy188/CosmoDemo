import * as _261 from "./downtime-detector/v1beta1/downtime_duration";
import * as _262 from "./downtime-detector/v1beta1/genesis";
import * as _263 from "./downtime-detector/v1beta1/query";
import * as _264 from "./epochs/genesis";
import * as _265 from "./epochs/query";
import * as _266 from "./gamm/pool-models/balancer/balancerPool";
import * as _267 from "./gamm/v1beta1/genesis";
import * as _268 from "./gamm/v1beta1/query";
import * as _269 from "./gamm/v1beta1/tx";
import * as _270 from "./gamm/pool-models/balancer/tx/tx";
import * as _271 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _272 from "./gamm/pool-models/stableswap/tx";
import * as _273 from "./gamm/v2/query";
import * as _274 from "./ibc-rate-limit/v1beta1/params";
import * as _275 from "./ibc-rate-limit/v1beta1/query";
import * as _276 from "./incentives/gauge";
import * as _277 from "./incentives/genesis";
import * as _278 from "./incentives/params";
import * as _279 from "./incentives/query";
import * as _280 from "./incentives/tx";
import * as _281 from "./lockup/genesis";
import * as _282 from "./lockup/lock";
import * as _283 from "./lockup/params";
import * as _284 from "./lockup/query";
import * as _285 from "./lockup/tx";
import * as _286 from "./mint/v1beta1/genesis";
import * as _287 from "./mint/v1beta1/mint";
import * as _288 from "./mint/v1beta1/query";
import * as _289 from "./pool-incentives/v1beta1/genesis";
import * as _290 from "./pool-incentives/v1beta1/gov";
import * as _291 from "./pool-incentives/v1beta1/incentives";
import * as _292 from "./pool-incentives/v1beta1/query";
import * as _293 from "./protorev/v1beta1/genesis";
import * as _294 from "./protorev/v1beta1/gov";
import * as _295 from "./protorev/v1beta1/params";
import * as _296 from "./protorev/v1beta1/protorev";
import * as _297 from "./protorev/v1beta1/query";
import * as _298 from "./protorev/v1beta1/tx";
import * as _299 from "./sumtree/v1beta1/tree";
import * as _300 from "./superfluid/genesis";
import * as _301 from "./superfluid/params";
import * as _302 from "./superfluid/query";
import * as _303 from "./superfluid/superfluid";
import * as _304 from "./superfluid/tx";
import * as _305 from "./swaprouter/v1beta1/genesis";
import * as _306 from "./swaprouter/v1beta1/module_route";
import * as _307 from "./swaprouter/v1beta1/query";
import * as _308 from "./swaprouter/v1beta1/swap_route";
import * as _309 from "./swaprouter/v1beta1/tx";
import * as _310 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _311 from "./tokenfactory/v1beta1/genesis";
import * as _312 from "./tokenfactory/v1beta1/params";
import * as _313 from "./tokenfactory/v1beta1/query";
import * as _314 from "./tokenfactory/v1beta1/tx";
import * as _315 from "./twap/v1beta1/genesis";
import * as _316 from "./twap/v1beta1/query";
import * as _317 from "./twap/v1beta1/twap_record";
import * as _318 from "./txfees/v1beta1/feetoken";
import * as _319 from "./txfees/v1beta1/genesis";
import * as _320 from "./txfees/v1beta1/gov";
import * as _321 from "./txfees/v1beta1/query";
import * as _322 from "./valset-pref/v1beta1/query";
import * as _323 from "./valset-pref/v1beta1/state";
import * as _324 from "./valset-pref/v1beta1/tx";
import * as _547 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _548 from "./gamm/pool-models/stableswap/tx.amino";
import * as _549 from "./gamm/v1beta1/tx.amino";
import * as _550 from "./incentives/tx.amino";
import * as _551 from "./lockup/tx.amino";
import * as _552 from "./protorev/v1beta1/tx.amino";
import * as _553 from "./superfluid/tx.amino";
import * as _554 from "./swaprouter/v1beta1/tx.amino";
import * as _555 from "./tokenfactory/v1beta1/tx.amino";
import * as _556 from "./valset-pref/v1beta1/tx.amino";
import * as _557 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _558 from "./gamm/pool-models/stableswap/tx.registry";
import * as _559 from "./gamm/v1beta1/tx.registry";
import * as _560 from "./incentives/tx.registry";
import * as _561 from "./lockup/tx.registry";
import * as _562 from "./protorev/v1beta1/tx.registry";
import * as _563 from "./superfluid/tx.registry";
import * as _564 from "./swaprouter/v1beta1/tx.registry";
import * as _565 from "./tokenfactory/v1beta1/tx.registry";
import * as _566 from "./valset-pref/v1beta1/tx.registry";
import * as _567 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _568 from "./epochs/query.rpc.Query";
import * as _569 from "./gamm/v1beta1/query.rpc.Query";
import * as _570 from "./gamm/v2/query.rpc.Query";
import * as _571 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _572 from "./incentives/query.rpc.Query";
import * as _573 from "./lockup/query.rpc.Query";
import * as _574 from "./mint/v1beta1/query.rpc.Query";
import * as _575 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _576 from "./protorev/v1beta1/query.rpc.Query";
import * as _577 from "./superfluid/query.rpc.Query";
import * as _578 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _579 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _580 from "./twap/v1beta1/query.rpc.Query";
import * as _581 from "./txfees/v1beta1/query.rpc.Query";
import * as _582 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _583 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _584 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _585 from "./gamm/v1beta1/tx.rpc.msg";
import * as _586 from "./incentives/tx.rpc.msg";
import * as _587 from "./lockup/tx.rpc.msg";
import * as _588 from "./protorev/v1beta1/tx.rpc.msg";
import * as _589 from "./superfluid/tx.rpc.msg";
import * as _590 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _591 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _592 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _658 from "./rpc.query";
import * as _659 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._261,
      ..._262,
      ..._263,
      ..._567
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._264,
      ..._265,
      ..._568
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._549,
      ..._559,
      ..._569,
      ..._585
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._270,
          ..._547,
          ..._557,
          ..._583
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._271,
          ..._272,
          ..._548,
          ..._558,
          ..._584
        };
      }
    }
    export const v2 = {
      ..._273,
      ..._570
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._274,
      ..._275,
      ..._571
    };
  }
  export const incentives = {
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._280,
    ..._550,
    ..._560,
    ..._572,
    ..._586
  };
  export const lockup = {
    ..._281,
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._551,
    ..._561,
    ..._573,
    ..._587
  };
  export namespace mint {
    export const v1beta1 = {
      ..._286,
      ..._287,
      ..._288,
      ..._574
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._575
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._552,
      ..._562,
      ..._576,
      ..._588
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._299
    };
  }
  export const superfluid = {
    ..._300,
    ..._301,
    ..._302,
    ..._303,
    ..._304,
    ..._553,
    ..._563,
    ..._577,
    ..._589
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._309,
      ..._554,
      ..._564,
      ..._578,
      ..._590
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._314,
      ..._555,
      ..._565,
      ..._579,
      ..._591
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._315,
      ..._316,
      ..._317,
      ..._580
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._318,
      ..._319,
      ..._320,
      ..._321,
      ..._581
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._322,
      ..._323,
      ..._324,
      ..._556,
      ..._566,
      ..._582,
      ..._592
    };
  }
  export const ClientFactory = {
    ..._658,
    ..._659
  };
}