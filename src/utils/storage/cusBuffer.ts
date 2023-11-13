import Cookies from 'js-cookie'
const TokenKey = 'cookie-TokenKey'
export const getToken = () => {
	return localStorage.getItem(TokenKey)
}
export const setToken = (token: any) => {
	Cookies.set(TokenKey, token)
}
export const removeToken = () => {
	Cookies.remove(TokenKey)
}

const UserInfo = 'UserInfo'
export const getUserInfo = () => {
	return Cookies.get(UserInfo)
}
export const setUserInfo = (data: any) => {
	Cookies.set(UserInfo, data, { expires: 1 })
}
export const removeUserInfo = () => {
	Cookies.remove(UserInfo)
}
