import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

import { useStyles } from './BlockDivider.styles'

const BlockDivider = () => {
	const theme = useTheme
	const styles = useStyles(theme)

	return (
		<Grid container>
			<Grid item xs={12}>
				<Divider className={styles.dividerContainer} />
			</Grid>
		</Grid>
	)
}

export default BlockDivider
