 
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	commentInputContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.primary.main,
		padding: '5px 10px',
	},
	commentInnerInputContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		width: '100%',
		backgroundColor: theme.palette.primary.contrastText,
		padding: '2px 20px 5px',
		borderRadius: '5px',
	},
	commentInput: {
		// width: '100%',
	},
})
