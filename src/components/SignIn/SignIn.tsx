import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// import Checkbox from '@mui/material/Checkbox'
// import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { signin } from '@/helpers/auth'

import LockIcon from '@mui/icons-material/Lock'

const Copyright = () => (
	<Typography variant='body1' color='text.secondary' align='center'>
		{'Copyright © '}
		<Link color='inherit' href='/'>
			Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
)

// TODO remove, this demo shouldn't need to reset the theme.

export const SignIn = () => {
	const navigate = useNavigate()
	const navigateToHome = () => navigate('/')

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		const signedUser = await signin({
			email: data.get('email') as string,
			password: data.get('password') as string,
		})

		signedUser && navigateToHome()
	}

	return (
		<Grid container component='main' sx={{ height: '100vh' }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
					backgroundRepeat: 'no-repeat',
					backgroundColor: (t) =>
						t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
						<LockIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						{/* <FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/> */}
						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
						<Grid container sx={{ mb: 5 }}>
							<Grid item xs>
								{/* <Link href='#' variant='body1'>
									Forgot password?
								</Link> */}
							</Grid>
							<Grid item>
								<Link href='/signup' variant='body1'>
									{'Don`t have an account? Sign Up'}
								</Link>
							</Grid>
						</Grid>
						<Copyright />
					</Box>
				</Box>
			</Grid>
		</Grid>
	)
}
