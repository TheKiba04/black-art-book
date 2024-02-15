/* eslint-disable no-magic-numbers */
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	likeButton: {
		color: theme.palette.secondary.main,
	},
	badge: {
		'& .MuiBadge-badge': {
			right: -3,
			top: 1,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: theme.spacing(0, 0.25),
			fontSize: '0.6rem',
			color: theme.palette.secondary.contrastText,
		},
	},
})