/**
 * 异步方法超时处理
 * @param {Promise} promise
 * @param {number} ms
 * @return {*}
 */
export const TimeoutHander = (promiseFunc: () => Promise<any>, ms: number) => {
	return new Promise((resolve, reject) => {
		const _func = new Promise(function (resolve, reject) {
			promiseFunc()
				.then(result => {
					resolve(result)
				})
				.catch(err => {
					reject(err)
				})
		})
		const _timeout = new Promise(function (resolve, reject) {
			setTimeout(() => {
				reject(new Error('timeout'))
			}, ms)
		})
		Promise.race([_func, _timeout])
			.then(result => {
				resolve(result)
			})
			.catch(err => {
				reject(err)
			})
	})
}
