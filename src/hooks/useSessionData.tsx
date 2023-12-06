export const useSessionData = () => {
	const getSessionData = (key: string) => JSON.parse(sessionStorage.getItem(key) || 'null')

	const setSessionData = (key: string, data: object) => {
		sessionStorage.setItem(key, JSON.stringify(data))
	}

	const removeSessionData = (key: string) => {
		sessionStorage.removeItem(key)
	}

	return { getSessionData, setSessionData, removeSessionData }
}
