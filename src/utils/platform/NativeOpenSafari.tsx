import { isApp, isIos, sendToNative } from "./platform";

// 打开safari浏览器
export function NativeOpenSafari(url: string) {
  if (isApp()) {
    sendToNative({
      method: "openSafari",
      data: {
        data: url,
      },
    });
  } else {
    (window as any).location = url;
  }
}
