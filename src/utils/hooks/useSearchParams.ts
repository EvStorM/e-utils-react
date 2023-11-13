import { useEffect, useMemo, useState } from 'react'

const useSearchParams = () => {
	const [values, setValues] = useState<any>({})

	useEffect(() => {
		handleSearchData()
	}, [])

	const handleSearchData = () => {
		try {
			const queryString = window.location.search
			const params = parseUrlParams(queryString)
			setValues(params)
		} catch (error) {}
	}

	return { searchParams: values }
}

const parseUrlParams = (url: string) => {
	const queryString = url.split('?')[1]
	if (!queryString) {
		return {}
	}

	const paramsArray = queryString.split('&')

	let paramsObj: any = {}

	paramsArray.forEach(param => {
		const [key, value] = param.split('=')

		paramsObj[key] = value
	})

	return paramsObj
}

export default useSearchParams
