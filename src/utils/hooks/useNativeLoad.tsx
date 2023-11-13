import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast/headless";
import { isApp, judgePlat, sendToNative } from "../platform/platform";

const useNativeLoad = (Loading: boolean, setLoading: (loading: boolean) => void, timeout?: number) => {
  const TIMEOUT = 20000;
  const _timeout = useRef<any>(null);
  useEffect(() => {
    if (isApp()) {
      if (Loading) {
        NativeWebViewLoading("showLoading");
        _timeout.current = setTimeout(() => {
          setLoading(false);
          NativeWebViewLoading("hideLoading");
          toast.remove();
        }, timeout ?? TIMEOUT);
      } else {
        clearTimeout(_timeout.current);
        NativeWebViewLoading("hideLoading");
        toast.remove();
      }
    } else {
      if (Loading) {
        toast.loading("", {
          id: "loading",
        });
        _timeout.current = setTimeout(() => {
          setLoading(false);
          NativeWebViewLoading("hideLoading");
          toast.remove();
        }, timeout ?? TIMEOUT);
      } else {
        clearTimeout(_timeout.current);
        toast.remove();
      }
    }
  }, [Loading]);
  return setLoading;
};
const NativeWebViewLoading = (method: "showLoading" | "hideLoading") => {
  const plat = judgePlat();
  if (plat === "IOS") {
    sendToNative({
      method: method,
      data: {
        data: method,
      },
    });
  } else if (plat === "Android") {
    sendToNative({
      method: method,
      data: {},
    });
  }
};

export default useNativeLoad;
