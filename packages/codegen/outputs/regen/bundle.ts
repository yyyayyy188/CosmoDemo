import * as _333 from "./data/v1/events";
import * as _334 from "./data/v1/query";
import * as _335 from "./data/v1/state";
import * as _336 from "./data/v1/tx";
import * as _337 from "./data/v1/types";
import * as _338 from "./data/v1alpha2/events";
import * as _339 from "./data/v1alpha2/genesis";
import * as _340 from "./data/v1alpha2/query";
import * as _341 from "./data/v1alpha2/tx";
import * as _342 from "./data/v1alpha2/types";
import * as _343 from "./ecocredit/basket/v1/events";
import * as _344 from "./ecocredit/basket/v1/query";
import * as _345 from "./ecocredit/basket/v1/state";
import * as _346 from "./ecocredit/basket/v1/tx";
import * as _347 from "./ecocredit/basket/v1/types";
import * as _348 from "./ecocredit/marketplace/v1/events";
import * as _349 from "./ecocredit/marketplace/v1/query";
import * as _350 from "./ecocredit/marketplace/v1/state";
import * as _351 from "./ecocredit/marketplace/v1/tx";
import * as _352 from "./ecocredit/marketplace/v1/types";
import * as _353 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _354 from "./ecocredit/v1/events";
import * as _355 from "./ecocredit/v1/query";
import * as _356 from "./ecocredit/v1/state";
import * as _357 from "./ecocredit/v1/tx";
import * as _358 from "./ecocredit/v1/types";
import * as _359 from "./ecocredit/v1alpha1/events";
import * as _360 from "./ecocredit/v1alpha1/genesis";
import * as _361 from "./ecocredit/v1alpha1/query";
import * as _362 from "./ecocredit/v1alpha1/tx";
import * as _363 from "./ecocredit/v1alpha1/types";
import * as _364 from "./group/v1alpha1/events";
import * as _365 from "./group/v1alpha1/genesis";
import * as _366 from "./group/v1alpha1/query";
import * as _367 from "./group/v1alpha1/tx";
import * as _368 from "./group/v1alpha1/types";
import * as _598 from "./data/v1/tx.amino";
import * as _599 from "./data/v1alpha2/tx.amino";
import * as _600 from "./ecocredit/basket/v1/tx.amino";
import * as _601 from "./ecocredit/marketplace/v1/tx.amino";
import * as _602 from "./ecocredit/v1/tx.amino";
import * as _603 from "./ecocredit/v1alpha1/tx.amino";
import * as _604 from "./group/v1alpha1/tx.amino";
import * as _605 from "./data/v1/tx.registry";
import * as _606 from "./data/v1alpha2/tx.registry";
import * as _607 from "./ecocredit/basket/v1/tx.registry";
import * as _608 from "./ecocredit/marketplace/v1/tx.registry";
import * as _609 from "./ecocredit/v1/tx.registry";
import * as _610 from "./ecocredit/v1alpha1/tx.registry";
import * as _611 from "./group/v1alpha1/tx.registry";
import * as _612 from "./data/v1/query.rpc.Query";
import * as _613 from "./data/v1alpha2/query.rpc.Query";
import * as _614 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _615 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _616 from "./ecocredit/v1/query.rpc.Query";
import * as _617 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _618 from "./group/v1alpha1/query.rpc.Query";
import * as _619 from "./data/v1/tx.rpc.msg";
import * as _620 from "./data/v1alpha2/tx.rpc.msg";
import * as _621 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _622 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _623 from "./ecocredit/v1/tx.rpc.msg";
import * as _624 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _625 from "./group/v1alpha1/tx.rpc.msg";
import * as _663 from "./rpc.query";
import * as _664 from "./rpc.tx";
export namespace regen {
  export namespace data {
    export const v1 = {
      ..._333,
      ..._334,
      ..._335,
      ..._336,
      ..._337,
      ..._598,
      ..._605,
      ..._612,
      ..._619
    };
    export const v1alpha2 = {
      ..._338,
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._599,
      ..._606,
      ..._613,
      ..._620
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._343,
        ..._344,
        ..._345,
        ..._346,
        ..._347,
        ..._600,
        ..._607,
        ..._614,
        ..._621
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._348,
        ..._349,
        ..._350,
        ..._351,
        ..._352,
        ..._601,
        ..._608,
        ..._615,
        ..._622
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._353
      };
    }
    export const v1 = {
      ..._354,
      ..._355,
      ..._356,
      ..._357,
      ..._358,
      ..._602,
      ..._609,
      ..._616,
      ..._623
    };
    export const v1alpha1 = {
      ..._359,
      ..._360,
      ..._361,
      ..._362,
      ..._363,
      ..._603,
      ..._610,
      ..._617,
      ..._624
    };
  }
  export namespace group {
    export const v1alpha1 = {
      ..._364,
      ..._365,
      ..._366,
      ..._367,
      ..._368,
      ..._604,
      ..._611,
      ..._618,
      ..._625
    };
  }
  export const ClientFactory = {
    ..._663,
    ..._664
  };
}