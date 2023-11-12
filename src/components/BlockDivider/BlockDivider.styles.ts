import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'
export const useStyles = makeStyles({
	dividerContainer: {
		marginTop: '5rem !important',
		borderWidth: '2px !important',
		height: '4px !important',
		borderRadius: '20px !important',
		borderColor: `${theme.palette.secondary.main} !important`,
	},
})
