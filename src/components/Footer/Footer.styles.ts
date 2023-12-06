import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	footerContainer: {
		width: '110%',
		marginLeft: '-5%',
		marginTop: '50px',
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.main,
		boxShadow: '1px 22px 10px 32px #262626',
	},
})
