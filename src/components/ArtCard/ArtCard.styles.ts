/* eslint-disable no-magic-numbers */
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	recentArtsImage: {
		height: 320,
	},
	recentArtsCard: {
		width: 345,
		maxWidth: 345,
		height: 500,
		maxHeight: 500,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		boxShadow: '1px 3px 19px 4px rgba(0,0,0,0.63)',
		cursor: 'pointer',
	},
	recentArtsCardContent: {
		paddingTop: '0 !important',
		paddingBottom: '0 !important',
	},
	recentArtsCardName: {
		fontWeight: 'bold',
	},
	recentArtsDescription: {
		overflow: 'hidden',
		display: '-webkit-box',
		'webkit-line-clamp': 4,
		lineClamp: 4,
		'-webkit-box-orient': 'vertical',
		color:theme.palette.text.secondary
	},
	recentArtsCardActions: {
		padding: theme.spacing(0, 2),
		paddingTop: '0 !important',
		paddingBottom: '8px !important',
	},
})
