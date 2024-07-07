import * as _330 from "./halving/v1beta1/genesis";
import * as _331 from "./halving/v1beta1/halving";
import * as _332 from "./halving/v1beta1/query";
import * as _597 from "./halving/v1beta1/query.rpc.Query";
import * as _662 from "./rpc.query";
export namespace persistence {
  export namespace halving {
    export const v1beta1 = {
      ..._330,
      ..._331,
      ..._332,
      ..._597
    };
  }
  export const ClientFactory = {
    ..._662
  };
}