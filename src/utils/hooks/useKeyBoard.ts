import { MutableRefObject, Ref, useEffect, useRef } from 'react'
import { throttle } from '../func/throttle'

export interface UseKeyBoardProps {
	onShow?: () => void
	onHide?: () => void
}

export const useKeyBoard = (inputRef: MutableRefObject<any>, { onShow, onHide }: UseKeyBoardProps) => {
	const height = useRef(0)
	useEffect(() => {
		let originHeight = document.documentElement.clientHeight || document.body.clientHeight
		const handelAndroidResize = throttle(() => {
			const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
			if (originHeight < resizeHeight) {
				onHide?.()
			} else {
				onShow?.()
				document.activeElement?.scrollIntoView(true)
			}
			originHeight = resizeHeight
			height.current = resizeHeight
		}, 300)
		if (inputRef) {
			// IOS 键盘弹起：当输入框被聚焦时IOS键盘会被弹起
			inputRef?.current?.addEventListener(
				'focus',
				function () {
					onShow?.()
				},
				false,
			)
			// IOS 键盘收起：当点击输入框以外区域或点击收起按钮，IOS输入框都会失去焦点，键盘会收起，
			inputRef?.current?.addEventListener('blur', () => {
				document.activeElement?.scrollIntoView(true)
				onHide?.()
			})
		}

		return () => {
			if (inputRef) {
				// IOS 键盘弹起：当输入框被聚焦时IOS键盘会被弹起
				inputRef?.current?.removeEventListener('focus', function () { }, false)
				// IOS 键盘收起：当点击输入框以外区域或点击收起按钮，IOS输入框都会失去焦点，键盘会收起，
				inputRef?.current?.removeEventListener('blur', () => { }, false)
			}
		}
	}, [inputRef])
	return {
		height: height.current,
	}
}
