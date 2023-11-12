import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import { useStyles } from './Logo.styles'

const Logo = () => {
	const styles = useStyles()

	return (
		<Box className={styles.logoContainer} gap={3}>
			<Typography variant='h5' fontFamily='Rubik Mono One' color='primary'>
				B
			</Typography>
			<Divider className={styles.logoDivider} orientation='vertical' flexItem />
			<Typography
				variant='caption'
				fontFamily='Rubik Mono One'
				color='primary'
				pt={0.5}
			>
				Black Art Book
			</Typography>
		</Box>
	)
}

export default Logo
