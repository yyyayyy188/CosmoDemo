import * as _378 from "./mint/v1beta1/genesis";
import * as _379 from "./mint/v1beta1/mint";
import * as _380 from "./mint/v1beta1/query";
import * as _634 from "./mint/v1beta1/query.rpc.Query";
import * as _667 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._378,
      ..._379,
      ..._380,
      ..._634
    };
  }
  export const ClientFactory = {
    ..._667
  };
}