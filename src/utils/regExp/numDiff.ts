import BigNumber from "bignumber.js"

export type NumType = number | string

/**
 * @description Compare two numbers
 * @param {number | string} num1
 * @param {number | string} num2
 * @return {*} 1, -1, 0
 * @description 1 num1 > num2
 * @description -1 num1 < num2
 * @description 0 num1 = num2
 */
export const NumDiff = (num1: NumType, num2: NumType): number => {
  const val = new BigNumber(num1).comparedTo(new BigNumber(num2))
  if (val === null) {
    throw new Error('NumDiff: num1 or num2 is not a number')
  }
  return val
}