import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	recentArtsImage: {},
	recentArtsButton: {
		color: theme.palette.secondary.main,
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
	recentArtsDescription: {
		overflow: 'hidden',
   		display: '-webkit-box',
  		'webkit-line-clamp': 4, 
    	lineClamp: 4, 
   		'-webkit-box-orient': 'vertical',
	},
	recentArtsCardActions: {
		padding: '0 16px 0',
		paddingTop: '0 !important',
		paddingBottom: '8px !important',
	},
	badge: {
		'& .MuiBadge-badge': {
			right: -3,
			top: 1,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: '0 2px',
			fontSize: '0.6rem',
		},
	},
})
