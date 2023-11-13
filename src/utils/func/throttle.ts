/**
 * 节流
 * @param callback 运行函数
 * @param delay    延迟时间（ms）
 */
export const throttle = function (callback: Function, delay: number = 100): Function {
	let allow: boolean = true
	return function () {
		if (!allow) return
		callback()
		setTimeout(() => (allow = true), delay)
	}
}

/**
 * 防抖动
 * @param callback  运行函数
 * @param delay     延迟时间（ms）
 */
export const debounce = function (callback: TimerHandler, delay: number = 100): Function {
	let timer: any = null
	return function () {
		clearTimeout(timer)
		timer = setTimeout(callback, delay)
	}
}

/**
 * 节流加防抖
 * @param callback  运行函数
 * @param delayThr  节流延迟时间（ms）
 * @param delayDeb  防抖延迟时间（ms），不设置 = delayThr + 10;
 */
export const throttleAndDebounce = function (callback: TimerHandler, delayThr: number = 100, delayDeb: number) {
	delayDeb = delayDeb || delayThr + 10
	const t = throttle(callback, delayThr)
	const d = debounce(callback, delayDeb)
	return function () {
		t()
		d()
	}
}

const throttleKeys = new Set()
const debounceKeys = new Map()

/**
 * 节流直接运行
 * @param key       唯一标识
 * @param callback  运行函数
 * @param delay     延迟时间（ms）
 */
export const throttleRun = function (key: any, callback: Function, delay = 100) {
	if (throttleKeys.has(key)) {
		return
	}
	throttleKeys.add(key)
	callback()
	setTimeout(throttleKeys.delete.bind(throttleKeys, key), delay)
}

/**
 * 防抖动直接运行
 * @param key       唯一标识
 * @param callback  运行函数
 * @param delay     延迟时间（ms）
 */
export const debounceRun = function (key: any, callback: TimerHandler, delay = 100) {
	let timer = setTimeout(callback, delay)
	clearTimeout(debounceKeys.get(key))
	debounceKeys.set(key, timer)
}

/**
 * 节流 + 防抖 直接运行
 * @param key       唯一标识
 * @param callback  运行函数
 * @param delayThr  节流延迟时间（ms）
 * @param delayDeb  防抖延迟时间（ms），不设置 = delayThr + 10 ;
 */
export const throttleAndDebounceRun = function (key: any, callback: TimerHandler, delayThr = 100, delayDeb: number) {
	delayDeb = delayDeb || delayThr + 10
	throttleRun(key, callback, delayThr)
	debounceRun(key, callback, delayDeb)
}
