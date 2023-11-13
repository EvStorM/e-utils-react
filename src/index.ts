import format from "./exports/format"
import hooks from "./exports/hooks"
import platform from "./exports/platform"
import regExp from "./exports/regExp"

import * as storage from "./utils/storage/cusBuffer";


export default {
  ...format,
  ...hooks,
  ...platform,
  ...regExp,
  ...storage
}