import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

import { auth } from '@/config/firebase'
import { getUser } from '@/helpers/database'
import { useSessionData } from '@/hooks/useSessionData'
import { User } from '@/types/User'

export const AuthContext = createContext<User>(null as unknown as User)

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const { getSessionData, setSessionData } = useSessionData()
	const [userFromDB, setUserFromDB] = useState<User>()
	const [currentUser, setCurrentUser] = useState<User>(getSessionData('user') as unknown as User)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				getUser(user.uid).then((user) => setUserFromDB(user as unknown as User))
			} else {
				setUserFromDB(null as unknown as User)
			}
		})

		return unsubscribe
	}, [])

	useEffect(() => {
		if (userFromDB) {
			setCurrentUser(userFromDB)
			setSessionData('user', userFromDB)
		} else {
			setCurrentUser(null as unknown as User)
			setSessionData('user', null as unknown as User)
		}
	}, [userFromDB])

	const value = useMemo(() => currentUser, [currentUser])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
