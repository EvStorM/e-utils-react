import { toast } from "react-hot-toast/headless";
import { isApp, sendToNative } from "./platform";

const Eum = {
  success: 1,
  error: 2,
  loading: 5,
};
type msgType = "success" | "error" | "loading";

/**
 * 兼容原生Toast
 */
export const NativeToast = (msg: string, type: msgType) => {
  try {
    if (isApp()) {
      if (type === "loading") {
        toast.loading("", {
          id: "loading",
        });
      } else {
        sendToNative({
          method: "showToast",
          data: {
            content: msg,
            type: Eum[type],
          },
        });
      }
    } else {
      toast?.[type](msg, {
        id: type,
      });
    }
  } catch (error) {}
};
