interface IParams {
	opts: any
}

/**
 * @param {any} service 服务方法
 * @param {*} opts 服务方法参数
 * @return {*}
 */
export function GetService<T>(service: any, opts = {}): () => Promise<T> {
	return () => {
		return new Promise((resolve, reject) => {
			service({ ...opts })
				.then((result: any) => {
					if (result.code == '00') {
						resolve(result.data)
					} else {
						reject(result)
					}
				})
				.catch((err: Error) => {
					reject(err)
				})
		})
	}
}
