/* eslint-disable no-magic-numbers */
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	mainButton: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.main,
		border: `2px solid ${theme.palette.primary.main}`,
		outline: `2px solid ${theme.palette.primary.dark}`,
		borderRadius: '2px',
		padding: '0.3em 1em',
		marginBottom: '.1rem',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.dark,
			border: `2px solid ${theme.palette.primary.dark}`,
		},
	},
	popover: {
		maxWidth: 500,
		padding: theme.spacing(2),
	},
	popoverTitle: {
		padding: theme.spacing(2),
	},
	popoverSubtitle: {
		padding: theme.spacing(0, 2),
	},
	popoverButtonContainer: {
		textAlign: 'center',
	}
})
