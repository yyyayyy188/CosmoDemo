import * as _381 from "./abci/types";
import * as _382 from "./crypto/keys";
import * as _383 from "./crypto/proof";
import * as _384 from "./libs/bits/types";
import * as _385 from "./p2p/types";
import * as _386 from "./types/block";
import * as _387 from "./types/evidence";
import * as _388 from "./types/params";
import * as _389 from "./types/types";
import * as _390 from "./types/validator";
import * as _391 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._381
  };
  export const crypto = {
    ..._382,
    ..._383
  };
  export namespace libs {
    export const bits = {
      ..._384
    };
  }
  export const p2p = {
    ..._385
  };
  export const types = {
    ..._386,
    ..._387,
    ..._388,
    ..._389,
    ..._390
  };
  export const version = {
    ..._391
  };
}