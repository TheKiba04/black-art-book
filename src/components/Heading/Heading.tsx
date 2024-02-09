import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

import { useAuth } from '@/hooks/useAuth'

import { useStyles } from './Heading.styles'

const Heading = () => {
	const { user } = useAuth()
	const styles = useStyles()
	const navigate = useNavigate()
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const open = Boolean(anchorEl)
	const popoverId = open ? 'redirect-popover' : undefined

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	const navigateToLogin = () => {
		handleClose()
		navigate('/signin')
	}
	const navigateToCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
		user ? navigate('/create') : handleClick(event)
	}

	return (
		<Grid
			className={styles.headingContainer}
			container
			spacing={2}
			justifyContent='space-between'
			alignItems='center'
		>
			<Grid item>
				<Typography className={styles.slideInTl} variant='h1'>
					Black
				</Typography>
				<Typography className={styles.slideInLeft} variant='h1' color='secondary.dark'>
					Black
				</Typography>
				<Typography className={styles.slideInBl} variant='h1'>
					Black
				</Typography>
			</Grid>
			<Grid item>
				<Typography className={styles.slideInTop} variant='h1'>
					ART
				</Typography>
				<Typography className='' variant='h1' color='secondary.dark'>
					ART
				</Typography>
				<Typography className={styles.slideInBottom} variant='h1'>
					ART
				</Typography>
			</Grid>
			<Grid item>
				<Typography className={styles.slideInTr} variant='h1'>
					Book
				</Typography>
				<Typography className={styles.slideInRight} variant='h1' color='secondary.dark'>
					Book
				</Typography>
				<Typography className={styles.slideInBr} variant='h1'>
					Book
				</Typography>
			</Grid>
			<Grid item xs={12} className={styles.headingSubtitle}>
				<Typography variant='h6'>
					- Unleash the power of simplicity in black and white creativity.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Button
					className={styles.headingButton}
					onClick={navigateToCreate}
					aria-describedby={popoverId}
				>
					<Typography variant='h6'>Get Started</Typography>
				</Button>
				<Popover
					id={popoverId}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<Grid container spacing={2} maxWidth={500} p={2}>
						<Grid item xs={12}>
							<Typography variant='body2' sx={{ p: 2 }}>
								To continue please login.
							</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography sx={{ px: 2 }}>
								`Its hard to create something that matter without being known to your loyal Followers!`
							</Typography>
						</Grid>
						<Grid item xs={3} textAlign='center'>
							<Button variant='contained' color='primary' onClick={navigateToLogin}>
								Login
							</Button>
						</Grid>
					</Grid>
				</Popover>
			</Grid>
		</Grid>
	)
}

export default Heading
