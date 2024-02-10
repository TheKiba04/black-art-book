import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { signup } from '@/helpers/auth'

import LockIcon from '@mui/icons-material/Lock'

const Copyright = () => (
	<Typography variant='body1' color='text.secondary' align='center' sx={{ mt: 5 }}>
		{'Copyright © '}
		<Link color='inherit' href='/'>
			Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
)

export const SignUp = () => {
	const navigate = useNavigate()
	const navigateToSignIn = () => navigate('/signin')

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		const registeredUser = await signup({
			email: data.get('email') as string,
			password: data.get('password') as string,
			firstName: data.get('firstName') as string,
			lastName: data.get('lastName') as string,
		})

		registeredUser && navigateToSignIn()
	}

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<Box component='form' noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='given-name'
								name='firstName'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='family-name'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='new-password'
							/>
						</Grid>
					</Grid>
					<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Link href='/signin' variant='body1'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright />
		</Container>
	)
}
