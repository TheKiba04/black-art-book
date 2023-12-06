import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { useStyles } from './Footer.styles'

const Footer = () => {
	const styles = useStyles()

	return (
		<Grid
			container
			className={styles.footerContainer}
			component='footer'
			justifyContent='center'
			alignItems='center'
			p={2}
		>
			<Typography variant='body2' align='center'>
				© 2023 Art Gallery
			</Typography>
		</Grid>
	)
}

export default Footer
