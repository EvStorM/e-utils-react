import { useMount } from 'ahooks'
import { useRef } from 'react'

const usePageReady = () => {
	const pageReady = useRef(false)

	useMount(() => {
		pageReady.current = true
	})

	return pageReady.current
}
export default usePageReady
