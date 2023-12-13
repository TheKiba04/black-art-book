import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	commentItemWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.primary.contrastText,
		padding: '5px 10px',
		borderRadius: '5px',
		margin: '10px',
		boxShadow: '1px 3px 19px 4px rgba(0,0,0,0.63)',
	},
	commentItemContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '0',
	},
	commentItemBody: {
		display: 'flex',
		justifyContent: 'space-between',
		aignItems: 'flex-end',
		backgroundColor: theme.palette.primary.main,
		padding: '5px 10px',
	},
})
