import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: theme.palette.primary.dark,
		padding: '0 1rem',
		borderRadius: '2px',
		outline: `2px solid ${theme.palette.primary.dark}`,
		border: `2px solid ${theme.palette.primary.main}`,
	},
	logoDivider: {
		backgroundColor: theme.palette.primary.main,
	},
})
