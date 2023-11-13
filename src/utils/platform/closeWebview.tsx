import { isApp, sendToNative } from "./platform";

// 关闭webview
export const CloseWebview = () => {
  if (isApp()) {
    sendToNative({
      method: "closeWebView",
      data: {},
    });
  } else {
    window.close();
  }
};
