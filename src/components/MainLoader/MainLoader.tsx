import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

import { useStyles } from './MainLoader.styles'

const MainLoader = () => {
	const styles = useStyles()

	return (
		<Box className={styles.mainLoaderContainer}>
			<Typography variant='inherit'>Loading...</Typography>
			<CircularProgress size={20} />
		</Box>
	)
}

export default MainLoader