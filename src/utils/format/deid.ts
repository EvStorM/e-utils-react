// Format Deid to 6-6-4
const FormatDeid = (deid: string, long = [6, 6]) => {
	if (!deid) return ''
	return deid?.substring(0, long[0]) + '....' + deid?.substr(deid.length - long[1])
}

export default FormatDeid
