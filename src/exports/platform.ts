import { NativeOpenSafari } from "../utils/platform/NativeOpenSafari";
import { CloseWebview } from "../utils/platform/closeWebview";
import { OpenNewWebview } from "../utils/platform/newWebview";
import { isAndroid, isApp, isIos, isMobile, sendToNative } from "../utils/platform/platform";
import { NativeToast } from "../utils/platform/toast";
import { verCompatible } from "../utils/platform/verCompatible";

export default {
  NativeOpenSafari,
  OpenNewWebview,
  NativeToast,
  verCompatible,
  sendToNative,
  CloseWebview,
  isApp,
  isIos,
  isAndroid,
  isMobile
}