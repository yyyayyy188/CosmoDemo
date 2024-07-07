import * as _325 from "./claim/v1beta1/claim_record";
import * as _326 from "./claim/v1beta1/genesis";
import * as _327 from "./claim/v1beta1/params";
import * as _328 from "./claim/v1beta1/query";
import * as _329 from "./claim/v1beta1/tx";
import * as _593 from "./claim/v1beta1/tx.amino";
import * as _594 from "./claim/v1beta1/tx.registry";
import * as _595 from "./claim/v1beta1/query.rpc.Query";
import * as _596 from "./claim/v1beta1/tx.rpc.msg";
import * as _660 from "./rpc.query";
import * as _661 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._329,
      ..._593,
      ..._594,
      ..._595,
      ..._596
    };
  }
  export const ClientFactory = {
    ..._660,
    ..._661
  };
}