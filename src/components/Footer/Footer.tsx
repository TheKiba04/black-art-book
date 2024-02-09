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
			<Typography variant='body1' align='center'>
				© 2023 Art Gallery
			</Typography>
		</Grid>
	)
}

export default Footer
