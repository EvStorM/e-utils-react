interface NativeCall {
  method: string;
  data?: any;
  callback?: Function;
}
// 创建全局回调方法
export function createCallback({ data, method, callback }: NativeCall) {
  var callbackId = "callback_" + method;
  (window as any)[callbackId] = callback;
  // excuteCallbackIos(callback, method, {})
}
