import { useState } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

import { useLocalNavigate } from '@/hooks/useLocalNavigate'
import useUser from '@/hooks/useUser'

import { useStyles } from './MainButton.styles'

const MainButton = () => {
	const styles = useStyles()

	const { user } = useUser()

	const { navigateSignIn, navigateCreate } = useLocalNavigate()

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
		navigateSignIn()
	}

	const navigateToCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
		user ? navigateCreate : handleClick(event)
	}

	return (
		<>
			<Button className={styles.mainButton} onClick={navigateToCreate} aria-describedby={popoverId}>
				<Typography variant='h6'>Create</Typography>
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
				<Grid container spacing={2} className={styles.popover}>
					<Grid item xs={12}>
						<Typography variant='body2' className={styles.popoverTitle}>
							To continue please login.
						</Typography>
					</Grid>
					<Grid item xs={9}>
						<Typography className={styles.popoverSubtitle}>
							`Its hard to create something that matter without being known to your loyal
							Followers!`
						</Typography>
					</Grid>
					<Grid item xs={3} className={styles.popoverButtonContainer}>
						<Button variant='contained' color='primary' onClick={navigateToLogin}>
							Login
						</Button>
					</Grid>
				</Grid>
			</Popover>
		</>
	)
}

export default MainButton
