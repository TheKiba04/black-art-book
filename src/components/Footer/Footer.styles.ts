/* eslint-disable no-magic-numbers */
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	footerContainer: {
		marginTop: theme.spacing(6),
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.main,
		boxShadow: '1px 22px 10px 32px #262626',
		justifyContent:'center',
		alignItems:'center',
		padding: theme.spacing(2),
	},
})
