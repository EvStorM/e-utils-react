import { isAndroid, isIos } from "./platform";

/**
 * 版本兼容性判断,默认为false
 * @param {*} boolean
 * @return {*}
 */
export const verCompatible = (buildVersion: number, arr = [900, 16]): boolean => {
  const [ios, android] = arr;
  if (isAndroid()) {
    if (buildVersion >= android) {
      return true;
    } else {
      return false;
    }
  } else if (isIos()) {
    if (buildVersion >= ios) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
