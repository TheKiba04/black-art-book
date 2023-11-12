import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'

import { useStyles } from './BlockDivider.styles'

const BlockDivider = () => {
	const styles = useStyles()

	return (
		<Grid container>
			<Grid item xs={12}>
				<Divider className={styles.dividerContainer} />
			</Grid>
		</Grid>
	)
}

export default BlockDivider
