import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	recentArtsContainer: {},
	recentArtsImage: {
		filter: 'grayscale(1)',
	},
	recentArtsButton: {
		color: theme.palette.secondary.main,
	},
	recentArtsCard: {
		width: 345,
		maxWidth: 345,
		height: 460,
		maxHeight: 460,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		boxShadow: '1px 3px 19px 4px rgba(0,0,0,0.63)',
		'&:hover': {
			transform: 'scale(1.05)',
			transition: 'transform .3s ease',
			cursor: 'pointer',
			boxShadow: '1px 3px 40px 30px rgba(255,255,255,0.5)',
		},
	},
	recentArtsCardContent: {
		paddingBottom: '0 !important',
	},
	recentArtsCardActions: {
		padding: '0 16px 0',
		paddingTop: '0 !important',
		paddingBottom: '8px !important',
	},
})
