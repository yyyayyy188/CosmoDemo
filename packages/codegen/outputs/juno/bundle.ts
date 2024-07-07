import * as _254 from "./mint/genesis";
import * as _255 from "./mint/mint";
import * as _256 from "./mint/query";
import * as _545 from "./mint/query.rpc.Query";
import * as _655 from "./rpc.query";
export namespace juno {
  export const mint = {
    ..._254,
    ..._255,
    ..._256,
    ..._545
  };
  export const ClientFactory = {
    ..._655
  };
}