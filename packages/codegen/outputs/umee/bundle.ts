import * as _392 from "./leverage/v1/events";
import * as _393 from "./leverage/v1/genesis";
import * as _394 from "./leverage/v1/gov";
import * as _395 from "./leverage/v1/leverage";
import * as _396 from "./leverage/v1/query";
import * as _397 from "./leverage/v1/tx";
import * as _398 from "./oracle/v1/events";
import * as _399 from "./oracle/v1/genesis";
import * as _400 from "./oracle/v1/oracle";
import * as _401 from "./oracle/v1/query";
import * as _402 from "./oracle/v1/tx";
import * as _635 from "./leverage/v1/tx.amino";
import * as _636 from "./oracle/v1/tx.amino";
import * as _637 from "./leverage/v1/tx.registry";
import * as _638 from "./oracle/v1/tx.registry";
import * as _639 from "./leverage/v1/query.rpc.Query";
import * as _640 from "./oracle/v1/query.rpc.Query";
import * as _641 from "./leverage/v1/tx.rpc.msg";
import * as _642 from "./oracle/v1/tx.rpc.msg";
import * as _668 from "./rpc.query";
import * as _669 from "./rpc.tx";
export namespace umee {
  export namespace leverage {
    export const v1 = {
      ..._392,
      ..._393,
      ..._394,
      ..._395,
      ..._396,
      ..._397,
      ..._635,
      ..._637,
      ..._639,
      ..._641
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._398,
      ..._399,
      ..._400,
      ..._401,
      ..._402,
      ..._636,
      ..._638,
      ..._640,
      ..._642
    };
  }
  export const ClientFactory = {
    ..._668,
    ..._669
  };
}