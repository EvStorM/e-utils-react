// 金额格式化千分位分割,小数点后保留6位
export function amountFormat(data: number | string | undefined, dotNum: number = 3) {
	if (data) {
		const str = data + '' //把数字变成string类型
		if (str.indexOf('.') !== -1) {
			//判断是否附带小数
			const intSum = str.substring(0, str.indexOf('.')).replace(/\B(?=(?:\d{3})+$)/g, ',') //取到整数部分
			const dot = str.substring(str.length, str.indexOf('.')) //取到小数部分搜索
			let intercept = dot
			if (dot.length > dotNum) {
				intercept = dot.substring(0, dotNum)
			}
			const ret = intSum + intercept
			return ret
		} else {
			const ret = str.replace(/\B(?=(?:\d{3})+$)/g, ',')
			return ret
		}
	} else {
		return '0'
	}
}

//  能量保留小数
export function energyFormat(number: number) {
	return String(number).replace(/^(.*\..{4}).*$/, '$1')
}
