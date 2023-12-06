import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { AuthContext } from '@/components/AuthProvider/AuthProvider'
import Logo from '@/components/Logo/Logo'
import ProfileMenu from '@/components/ProfileMenu/ProfileMenu'
import { signout } from '@/helpers/auth'

const Header = () => {
	const user = useContext(AuthContext)
	const navigate = useNavigate()

	const navigateToSignIn = () => navigate('/signin')
	const navigateHome = () => navigate('/')
	const logout = () => {
		signout()
		navigateHome()
	}

	return (
		<Grid container spacing={2} justifyContent='space-between' alignItems='center' pt={2}>
			<Grid item>
				<Link href='/' underline='none'>
					<Logo />
				</Link>
			</Grid>
			{user ? (
				<Grid item>
					<ProfileMenu user={user} signout={logout} />
				</Grid>
			) : (
				<Grid item>
					<Button variant='contained' onClick={navigateToSignIn}>
						<Typography variant='body2'>Sign In</Typography>
					</Button>
				</Grid>
			)}
		</Grid>
	)
}

export default Header
