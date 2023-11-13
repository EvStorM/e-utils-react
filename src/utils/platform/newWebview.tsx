import { isApp, sendToNative } from "./platform";

// 打开一个新的webview
export const OpenNewWebview = (url: string) => {
  if (isApp()) {
    sendToNative({
      method: "openNewFullscreenWebView",
      data: {
        data: url,
      },
    });
  } else {
    window.open(url);
  }
};
