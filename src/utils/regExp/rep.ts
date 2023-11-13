/**
 * 验证电子邮箱格式
 */
export const isEmail = (value: string) => {
	return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value)
}

/**
 * 验证手机格式
 */
export const isMobile = (value: string) => {
	if (value) {
		let newvalue = value.replace(/\s+/g, '')
		return /^1[3-9]\d{9}$/.test(newvalue)
	} else {
		return false
	}
}
/**
 * 验证其他国家手机格式
 */
export const isInMobile = (value: string) => {
	if (value) {
		let newvalue = value.replace(/\s+/g, '')
		return /^[0-9]*$/.test(newvalue)
	} else {
		return false
	}
}

/**
 * 验证URL格式
 */
export const isUrl = (value: string) => {
	return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value)
}

/**
 * 验证日期格式
 */
export const isDate = (value: string) => {
	return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
export const isDateISO = (value: string) => {
	return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
export const isNumber = (value: string) => {
	return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

/**
 * 验证整数
 */
export const isDigits = (value: string) => {
	return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
export const isIdCard = (value: string) => {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

/**
 * 是否车牌号
 */
export const isCarNo = (value: string) => {
	// 新能源车牌
	const xreg =
		/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
	// 旧车牌
	const creg =
		/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
	if (value.length === 7) {
		return creg.test(value)
	} else if (value.length === 8) {
		return xreg.test(value)
	} else {
		return false
	}
}

/**
 * 金额,只允许2位小数
 */
export const isaAmount = (value: string) => {
	//金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

/**
 * 中文
 */
export const isChinese = (value: string) => {
	let reg = /^[\u4e00-\u9fa5]+$/gi
	return reg.test(value)
}

/**
 * 只能输入字母
 */
export const isLetter = (value: string) => {
	return /^[a-zA-Z]*$/.test(value)
}

/**
 * 只能是字母或者数字
 */
export const isEnOrNum = (value: string) => {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g
	return reg.test(value)
}

/**
 * 验证是否包含某个值
 */
export const isContains = (value: string, param: string) => {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
export const isRange = (value: number, param: number[]) => {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
export const isRangeLength = (value: string, param: number[]) => {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
export const isLandline = (value: string) => {
	let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
	return reg.test(value)
}



/**
 * 是否json字符串
 */
export const isJsonString = (value: string) => {
	if (typeof value == 'string') {
		try {
			var obj = JSON.parse(value)
			if (typeof obj == 'object' && obj) {
				return true
			} else {
				return false
			}
		} catch (e) {
			return false
		}
	}
	return false
}

/**
 * 是否数组
 */
export const isArray = (value: any) => {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(value)
	} else {
		return Object.prototype.toString.call(value) === '[object Array]'
	}
}

/**
 * 是否对象
 */
export const isObject = (value: any) => {
	return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 是否短信验证码
 */
export const isCode = (value: string, len = 6) => {
	return new RegExp(`^\\d{${len}}$`).test(value)
}
