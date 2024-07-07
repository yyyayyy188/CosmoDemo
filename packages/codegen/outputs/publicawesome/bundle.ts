import * as _369 from "../stargaze/alloc/v1beta1/genesis";
import * as _370 from "../stargaze/alloc/v1beta1/params";
import * as _371 from "../stargaze/alloc/v1beta1/query";
import * as _372 from "../stargaze/alloc/v1beta1/tx";
import * as _373 from "../stargaze/claim/v1beta1/claim_record";
import * as _374 from "../stargaze/claim/v1beta1/genesis";
import * as _375 from "../stargaze/claim/v1beta1/params";
import * as _376 from "../stargaze/claim/v1beta1/query";
import * as _377 from "../stargaze/claim/v1beta1/tx";
import * as _626 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _627 from "../stargaze/claim/v1beta1/tx.amino";
import * as _628 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _629 from "../stargaze/claim/v1beta1/tx.registry";
import * as _630 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _631 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _632 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _633 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _665 from "./rpc.query";
import * as _666 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._369,
        ..._370,
        ..._371,
        ..._372,
        ..._626,
        ..._628,
        ..._630,
        ..._632
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._373,
        ..._374,
        ..._375,
        ..._376,
        ..._377,
        ..._627,
        ..._629,
        ..._631,
        ..._633
      };
    }
  }
  export const ClientFactory = {
    ..._665,
    ..._666
  };
}