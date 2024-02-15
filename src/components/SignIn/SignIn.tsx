import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import useAuthData from '@/hooks/useAuthData'

import Copyright from '@components/Copyright/Copyright'

import LockIcon from '@mui/icons-material/Lock'

import { useStyles } from './SignIn.styles'

const SignIn = () => {
	const styles = useStyles()

	const {authFormHandler} = useAuthData('signin')


	return (
		<Grid container component='main' className={styles.signInContainer}>
			<Grid item xs={false} sm={4} md={7} className={styles.signInSideBackground} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Grid container className={styles.signInWrapper} gap={3}>
					<Box className={styles.signInFormWrapper}>
						<Avatar className={styles.signInWrapperIcon}>
							<LockIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<Box component='form' noValidate onSubmit={authFormHandler.handleSubmit} className={styles.form}>
							<TextField
								value={authFormHandler.values.email}
								onChange={authFormHandler.handleChange}
								size='small'
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoFocus
								autoComplete='email'
							/>
							<TextField
								value={authFormHandler.values.password}
								onChange={authFormHandler.handleChange}
								size='small'
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
							<Button type='submit' fullWidth variant='contained' className={styles.submit}>
								Sign In
							</Button>
							<Grid container className={styles.linkContainer}>
								<Grid item xs>
									<Link href='/auth/forgot-password' variant='body1'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href='/auth/signup' variant='body1'>
										Don`t have an account? Sign Up
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
					<Copyright />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default SignIn