/* eslint-disable no-magic-numbers */
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	listContainer: {
		paddingTop: theme.spacing(3),
	},
	listTitleContainer: {
		textAlign: 'right',
		display: 'flex',
		justifyContent: 'flex-end',
		gap: theme.spacing(3),
	},
	listTitle: {
		fontStyle: 'italic',
		color: theme.palette.secondary.main,
	},
	emptyListContainer: {
		textAlign: 'center',
		paddingTop: theme.spacing(2),
	},
	emptyListTitle: {
		fontStyle: 'italic',
		color: theme.palette.secondary.main,
	},
})
