import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Logo from '@/components/Logo/Logo'

import { useStyles } from './Header.styles'

const Header = () => {
	const styles = useStyles()

	return (
		<Grid container spacing={2} justifyContent='space-between' alignItems='center' pt={2}>
			<Grid item>
				<Logo />
			</Grid>
			<Grid item>
				<Button className={styles.headerButton} variant='contained'>
					<Typography variant='body2'>Sign In</Typography>
				</Button>
			</Grid>
		</Grid>
	)
}

export default Header
