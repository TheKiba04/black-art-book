import { useFormik } from 'formik'
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
import { AuthSignUpFormikValues } from '@/types/Auth'

import Copyright from '@components/Copyright/Copyright'

import LockIcon from '@mui/icons-material/Lock'

import { useStyles } from './SignUp.styles'

const SignUp = () => {
	const styles = useStyles()

	const navigate = useNavigate()

	const navigateSignIn = () => navigate('/auth/signin')

	const initialSignUpFormValues = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	}

	const handleSubmit = async (data: AuthSignUpFormikValues) => {
		const registeredUser = await signup(data)

		registeredUser && navigateSignIn()
	}

	const formik = useFormik<AuthSignUpFormikValues>({
		initialValues: initialSignUpFormValues,
		onSubmit: handleSubmit,
	})

	return (
		<Container component='main' maxWidth='xs' className={styles.signUpContainer}>
			<Box className={styles.signUpWrapper}>
				<Avatar className={styles.signUpWrapperIcon}>
					<LockIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<Box
					component='form'
					noValidate={false}
					onSubmit={formik.handleSubmit}
					className={styles.form}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								value={formik.values.firstName}
								onChange={formik.handleChange}
								size='small'
								name='firstName'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								autoComplete='given-name'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								value={formik.values.lastName}
								onChange={formik.handleChange}
								size='small'
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
								value={formik.values.email}
								onChange={formik.handleChange}
								size='small'
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
								value={formik.values.password}
								onChange={formik.handleChange}
								size='small'
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
					<Button type='submit' fullWidth variant='contained' className={styles.submit}>
						Sign Up
					</Button>
					<Grid container className={styles.linkContainer}>
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

export default SignUp
