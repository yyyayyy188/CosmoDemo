import * as _188 from "./applications/transfer/v1/genesis";
import * as _189 from "./applications/transfer/v1/query";
import * as _190 from "./applications/transfer/v1/transfer";
import * as _191 from "./applications/transfer/v1/tx";
import * as _192 from "./applications/transfer/v2/packet";
import * as _193 from "./core/channel/v1/channel";
import * as _194 from "./core/channel/v1/genesis";
import * as _195 from "./core/channel/v1/query";
import * as _196 from "./core/channel/v1/tx";
import * as _197 from "./core/client/v1/client";
import * as _198 from "./core/client/v1/genesis";
import * as _199 from "./core/client/v1/query";
import * as _200 from "./core/client/v1/tx";
import * as _201 from "./core/commitment/v1/commitment";
import * as _202 from "./core/connection/v1/connection";
import * as _203 from "./core/connection/v1/genesis";
import * as _204 from "./core/connection/v1/query";
import * as _205 from "./core/connection/v1/tx";
import * as _206 from "./core/port/v1/query";
import * as _207 from "./core/types/v1/genesis";
import * as _208 from "./lightclients/localhost/v1/localhost";
import * as _209 from "./lightclients/solomachine/v1/solomachine";
import * as _210 from "./lightclients/solomachine/v2/solomachine";
import * as _211 from "./lightclients/tendermint/v1/tendermint";
import * as _503 from "./applications/transfer/v1/tx.amino";
import * as _504 from "./core/channel/v1/tx.amino";
import * as _505 from "./core/client/v1/tx.amino";
import * as _506 from "./core/connection/v1/tx.amino";
import * as _507 from "./applications/transfer/v1/tx.registry";
import * as _508 from "./core/channel/v1/tx.registry";
import * as _509 from "./core/client/v1/tx.registry";
import * as _510 from "./core/connection/v1/tx.registry";
import * as _511 from "./applications/transfer/v1/query.rpc.Query";
import * as _512 from "./core/channel/v1/query.rpc.Query";
import * as _513 from "./core/client/v1/query.rpc.Query";
import * as _514 from "./core/connection/v1/query.rpc.Query";
import * as _515 from "./core/port/v1/query.rpc.Query";
import * as _516 from "./applications/transfer/v1/tx.rpc.msg";
import * as _517 from "./core/channel/v1/tx.rpc.msg";
import * as _518 from "./core/client/v1/tx.rpc.msg";
import * as _519 from "./core/connection/v1/tx.rpc.msg";
import * as _651 from "./rpc.query";
import * as _652 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._188,
        ..._189,
        ..._190,
        ..._191,
        ..._503,
        ..._507,
        ..._511,
        ..._516
      };
      export const v2 = {
        ..._192
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._193,
        ..._194,
        ..._195,
        ..._196,
        ..._504,
        ..._508,
        ..._512,
        ..._517
      };
    }
    export namespace client {
      export const v1 = {
        ..._197,
        ..._198,
        ..._199,
        ..._200,
        ..._505,
        ..._509,
        ..._513,
        ..._518
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._201
      };
    }
    export namespace connection {
      export const v1 = {
        ..._202,
        ..._203,
        ..._204,
        ..._205,
        ..._506,
        ..._510,
        ..._514,
        ..._519
      };
    }
    export namespace port {
      export const v1 = {
        ..._206,
        ..._515
      };
    }
    export namespace types {
      export const v1 = {
        ..._207
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._208
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._209
      };
      export const v2 = {
        ..._210
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._211
      };
    }
  }
  export const ClientFactory = {
    ..._651,
    ..._652
  };
}