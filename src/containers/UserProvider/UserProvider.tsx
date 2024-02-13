import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

import { auth } from '@/config/firebase'
import { getUser } from '@/helpers/database'
import { User } from '@/types/User'

import { useStyles } from './UserProvider.styles'

export const UserContext = createContext(
	null as unknown as { user: User | null; setUser: (user: User) => void }
)

const UserProvider = ({ children }: { children: ReactNode }) => {
	const styles = useStyles()

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
				<Box className={styles.loadingContainer}>
					<Typography variant='inherit'>Loading...</Typography>
					<CircularProgress size={20} />
				</Box>
			) : (
				children
			)}
		</UserContext.Provider>
	)
}

export default UserProvider
