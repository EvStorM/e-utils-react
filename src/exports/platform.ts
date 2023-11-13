import { NativeOpenSafari } from "../utils/platform/NativeOpenSafari";
import { CloseWebview } from "../utils/platform/closeWebview";
import { createCallback } from "../utils/platform/createCallback";
import { hideLoading } from "../utils/platform/hideLoading";
import { OpenNewWebview } from "../utils/platform/newWebview";
import { isAndroid, isApp, isIos, isMobile, sendToNative } from "../utils/platform/platform";
import { NativeToast } from "../utils/platform/toast";
import { verCompatible } from "../utils/platform/verCompatible";

export default {
  NativeOpenSafari,
  OpenNewWebview,
  NativeToast,
  hideLoading,
  verCompatible,
  sendToNative,
  CloseWebview,
  createCallback,
  isApp,
  isIos,
  isAndroid,
  isMobile
}