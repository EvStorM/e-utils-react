// 安全的将JSON字符串转换为对象
export function safeParseJSON(json: string | Object | null) {
	try {
		if (typeof json === 'object') {
			return json
		}
		return JSON.parse(json)
	} catch (e) {
		return json
	}
}
