import Cookies from 'js-cookie'

const TokenKey = 'cookie-TokenKey'
export const getToken = () => {
	return localStorage.getItem(TokenKey) || Cookies.get(TokenKey)
}
export const setToken = (token: any) => {
	Cookies.set(TokenKey, token)
	localStorage.setItem(TokenKey, token)
}
export const removeToken = () => {
	Cookies.remove(TokenKey)
	localStorage.removeItem(TokenKey)
}

const UserInfo = 'UserInfo'
export const getUserInfo = () => {
	return Cookies.get(UserInfo) || localStorage.getItem(UserInfo)
}
export const setUserInfo = (data: any) => {
	Cookies.set(UserInfo, data, { expires: 1 })
	localStorage.setItem(UserInfo, data)
}
export const removeUserInfo = () => {
	Cookies.remove(UserInfo)
	localStorage.removeItem(UserInfo)
}
