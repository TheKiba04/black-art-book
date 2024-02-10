import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/config/firebase'
import { getUser } from '@/helpers/database'
import { User } from '@/types/User'

export const AuthContext = createContext(
	null as unknown as { user: User | null; setUser: (user: User) => void }
)

const AuthProvider = ({ children }: { children: ReactNode }) => {
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
		<AuthContext.Provider value={value}>
			{loading ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100%',
					}}
				>
					<Typography variant='inherit'>Loading...</Typography>
					<CircularProgress size={20} />
				</Box>
			) : (
				children
			)}
		</AuthContext.Provider>
	)
}

export default AuthProvider
