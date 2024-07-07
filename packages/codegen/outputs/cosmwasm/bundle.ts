import * as _173 from "./wasm/v1/authz";
import * as _174 from "./wasm/v1/genesis";
import * as _175 from "./wasm/v1/ibc";
import * as _176 from "./wasm/v1/proposal";
import * as _177 from "./wasm/v1/query";
import * as _178 from "./wasm/v1/tx";
import * as _179 from "./wasm/v1/types";
import * as _499 from "./wasm/v1/tx.amino";
import * as _500 from "./wasm/v1/tx.registry";
import * as _501 from "./wasm/v1/query.rpc.Query";
import * as _502 from "./wasm/v1/tx.rpc.msg";
import * as _649 from "./rpc.query";
import * as _650 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._499,
      ..._500,
      ..._501,
      ..._502
    };
  }
  export const ClientFactory = {
    ..._649,
    ..._650
  };
}