import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	dividerContainer: {
		marginTop: '3rem',
		borderWidth: '2px',
		height: '4px',
		borderRadius: '20px',
		borderColor: theme.palette.secondary.main,
	},
})
