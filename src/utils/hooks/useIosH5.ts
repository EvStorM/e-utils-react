/**
 * ios H5 的页面适配方法
 * @return {*}
 */

import { MutableRefObject, useEffect } from 'react'

export const useIosH5PageHeight = (pageRef: MutableRefObject<any>) => {
	const resize = () => {
		if (pageRef.current) {
			pageRef.current.style.height = `${window.innerHeight}px`
			pageRef.current.style.minHeight = `${window.innerHeight}px`
		}
	}
	useEffect(() => {
		resize()
		window.addEventListener('resize', resize)
		document.addEventListener('gesturestart', function (event) {
			event.preventDefault()
		})
		return () => {
			window.removeEventListener('resize', resize)
			document.removeEventListener('gesturestart', function (event) {
				event.preventDefault()
			})
		}
	}, [])
}
