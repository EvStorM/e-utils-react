import { toast } from "react-hot-toast/headless";
import { isApp, isIos, sendToNative, isAndroid } from "./platform";

// 隐藏loading
export const hideLoading = () => {
  if (isApp()) {
    if (isIos()) {
      sendToNative({
        data: {
          data: "hideLoading",
        },
        method: "hideLoading",
      });
    } else if (isAndroid()) {
      sendToNative({ data: {}, method: "hideLoading" });
    }
  } else {
    toast.remove();
    // window.close()
  }
};
