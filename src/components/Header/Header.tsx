import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import './Header.scss'

const Header = () => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<Typography variant='h1'>Header</Typography>
		</Grid>
	</Grid>
)

export default Header
