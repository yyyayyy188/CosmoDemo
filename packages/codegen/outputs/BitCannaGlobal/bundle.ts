import * as _54 from "../bcna/bitcannaid";
import * as _55 from "../bcna/genesis";
import * as _56 from "../bcna/params";
import * as _57 from "../bcna/query";
import * as _58 from "../bcna/supplychain";
import * as _59 from "../bcna/tx";
import * as _435 from "../bcna/tx.amino";
import * as _436 from "../bcna/tx.registry";
import * as _437 from "../bcna/query.rpc.Query";
import * as _438 from "../bcna/tx.rpc.msg";
import * as _645 from "./rpc.query";
import * as _646 from "./rpc.tx";
export namespace BitCannaGlobal {
  export namespace bcna {
    export const bcna = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._435,
      ..._436,
      ..._437,
      ..._438
    };
  }
  export const ClientFactory = {
    ..._645,
    ..._646
  };
}