import format from "./exports/format"
import func from "./exports/func";
import hooks from "./exports/hooks"
import platform from "./exports/platform"
import regExp from "./exports/regExp"

import * as storage from "./utils/storage/cusBuffer";


export default {
  ...func,
  ...format,
  ...hooks,
  ...platform,
  ...regExp,
  ...storage
}