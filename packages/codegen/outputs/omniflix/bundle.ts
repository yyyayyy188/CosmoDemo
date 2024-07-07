import * as _257 from "./alloc/v1beta1/genesis";
import * as _258 from "./alloc/v1beta1/params";
import * as _259 from "./alloc/v1beta1/query";
import * as _260 from "./alloc/v1beta1/tx";
import * as _546 from "./alloc/v1beta1/query.rpc.Query";
import * as _656 from "./rpc.query";
import * as _657 from "./rpc.tx";
export namespace omniflix {
  export namespace alloc {
    export const v1beta1 = {
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._546
    };
  }
  export const ClientFactory = {
    ..._656,
    ..._657
  };
}