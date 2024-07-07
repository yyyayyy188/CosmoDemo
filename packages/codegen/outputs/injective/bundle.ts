import * as _212 from "./auction/v1beta1/auction";
import * as _213 from "./auction/v1beta1/genesis";
import * as _214 from "./auction/v1beta1/query";
import * as _215 from "./auction/v1beta1/tx";
import * as _216 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _217 from "./exchange/v1beta1/authz";
import * as _218 from "./exchange/v1beta1/events";
import * as _219 from "./exchange/v1beta1/exchange";
import * as _220 from "./exchange/v1beta1/genesis";
import * as _221 from "./exchange/v1beta1/query";
import * as _222 from "./exchange/v1beta1/tx";
import * as _223 from "./insurance/v1beta1/genesis";
import * as _224 from "./insurance/v1beta1/insurance";
import * as _225 from "./insurance/v1beta1/query";
import * as _226 from "./insurance/v1beta1/tx";
import * as _227 from "./ocr/v1beta1/genesis";
import * as _228 from "./ocr/v1beta1/ocr";
import * as _229 from "./ocr/v1beta1/query";
import * as _230 from "./ocr/v1beta1/tx";
import * as _231 from "./oracle/v1beta1/events";
import * as _232 from "./oracle/v1beta1/genesis";
import * as _233 from "./oracle/v1beta1/oracle";
import * as _234 from "./oracle/v1beta1/proposal";
import * as _235 from "./oracle/v1beta1/query";
import * as _236 from "./oracle/v1beta1/tx";
import * as _237 from "./peggy/v1/attestation";
import * as _238 from "./peggy/v1/batch";
import * as _239 from "./peggy/v1/ethereum_signer";
import * as _240 from "./peggy/v1/events";
import * as _241 from "./peggy/v1/genesis";
import * as _242 from "./peggy/v1/msgs";
import * as _243 from "./peggy/v1/pool";
import * as _244 from "./peggy/v1/proposal";
import * as _245 from "./peggy/v1/query";
import * as _246 from "./peggy/v1/types";
import * as _247 from "./types/v1beta1/account";
import * as _248 from "./types/v1beta1/tx_ext";
import * as _249 from "./types/v1beta1/tx_response";
import * as _250 from "./wasmx/v1/genesis";
import * as _251 from "./wasmx/v1/query";
import * as _252 from "./wasmx/v1/tx";
import * as _253 from "./wasmx/v1/wasmx";
import * as _520 from "./auction/v1beta1/tx.amino";
import * as _521 from "./exchange/v1beta1/tx.amino";
import * as _522 from "./insurance/v1beta1/tx.amino";
import * as _523 from "./ocr/v1beta1/tx.amino";
import * as _524 from "./oracle/v1beta1/tx.amino";
import * as _525 from "./peggy/v1/msgs.amino";
import * as _526 from "./auction/v1beta1/tx.registry";
import * as _527 from "./exchange/v1beta1/tx.registry";
import * as _528 from "./insurance/v1beta1/tx.registry";
import * as _529 from "./ocr/v1beta1/tx.registry";
import * as _530 from "./oracle/v1beta1/tx.registry";
import * as _531 from "./peggy/v1/msgs.registry";
import * as _532 from "./auction/v1beta1/query.rpc.Query";
import * as _533 from "./exchange/v1beta1/query.rpc.Query";
import * as _534 from "./insurance/v1beta1/query.rpc.Query";
import * as _535 from "./ocr/v1beta1/query.rpc.Query";
import * as _536 from "./oracle/v1beta1/query.rpc.Query";
import * as _537 from "./peggy/v1/query.rpc.Query";
import * as _538 from "./wasmx/v1/query.rpc.Query";
import * as _539 from "./auction/v1beta1/tx.rpc.msg";
import * as _540 from "./exchange/v1beta1/tx.rpc.msg";
import * as _541 from "./insurance/v1beta1/tx.rpc.msg";
import * as _542 from "./ocr/v1beta1/tx.rpc.msg";
import * as _543 from "./oracle/v1beta1/tx.rpc.msg";
import * as _544 from "./peggy/v1/msgs.rpc.msg";
import * as _653 from "./rpc.query";
import * as _654 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._520,
      ..._526,
      ..._532,
      ..._539
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._216
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._521,
      ..._527,
      ..._533,
      ..._540
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._522,
      ..._528,
      ..._534,
      ..._541
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._523,
      ..._529,
      ..._535,
      ..._542
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._524,
      ..._530,
      ..._536,
      ..._543
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._525,
      ..._531,
      ..._537,
      ..._544
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._247,
      ..._248,
      ..._249
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._538
    };
  }
  export const ClientFactory = {
    ..._653,
    ..._654
  };
}