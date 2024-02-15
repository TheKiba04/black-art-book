import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/config/firebase'
import { getUser } from '@/helpers/database'
import User from '@/types/User'

import MainLoader from '@components/MainLoader/MainLoader'


export const UserContext = createContext(
	null as unknown as { user: User | null; setUser: (user: User) => void }
)

const UserProvider = ({ children }: { children: ReactNode }) => {

	const [currentUser, setCurrentUser] = useState<User>(null as unknown as User)

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				await getUser(user.uid).then((dbUser) => setCurrentUser(dbUser as unknown as User))
				setLoading(false)
			} else {
				setCurrentUser(null as unknown as User)
				setLoading(false)
			}
		})
	}, [])

	const value = useMemo(
		() => ({
			user: currentUser,
			setUser: setCurrentUser,
		}),
		[currentUser]
	)

	return (
		<UserContext.Provider value={value}>
			{loading ? (
				<MainLoader />
			) : (
				children
			)}
		</UserContext.Provider>
	)
}

export default UserProvider
