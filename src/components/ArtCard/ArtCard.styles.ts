import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
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
		cursor: 'pointer',
		// '&:hover': {
		// 	transform: 'scale(1.05)',
		// 	transition: 'transform .3s ease',

		// 	boxShadow: '1px 3px 40px 30px rgba(255,255,255,0.5)',
		// },
	},
	recentArtsCardContent: {
		paddingBottom: '0 !important',
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
