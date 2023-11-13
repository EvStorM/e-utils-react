import { useEffect } from 'react'

const useDisableZoom = () => {
	useEffect(() => {
		document.head.insertAdjacentHTML(
			'beforeend',
			'<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">',
		)
		window.addEventListener('gesturestart', function (event) {
			event.preventDefault()
		})
		document.addEventListener('gesturestart', function (event) {
			event.preventDefault()
		})
		window.addEventListener(
			'resize',
			() => {
				window.resizeTo(375, 667)
			},
			false,
		)
		document.addEventListener(
			'resize',
			() => {
				window.resizeTo(375, 667)
			},
			false,
		)
		return () => {
			window.removeEventListener('gesturestart', function (event) {
				event.preventDefault()
			})
			window.removeEventListener(
				'resize',
				() => {
					window.resizeTo(375, 667)
				},
				false,
			)
			document.addEventListener('gesturestart', function (event) {
				event.preventDefault()
			})
			document.removeEventListener(
				'resize',
				() => {
					window.resizeTo(375, 667)
				},
				false,
			)
		}
	}, [])
}

export default useDisableZoom
