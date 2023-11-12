import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	headerButton: {
		color: `${theme.palette.primary.main}!important`,
		backgroundColor: `${theme.palette.primary.dark}!important`,
		border: `1px solid ${theme.palette.primary.dark}!important`,
		outline: 'none',
		borderRadius: '2px',
		padding: '0.4em 1em 0.3em',
		'&:hover': {
			backgroundColor: `${theme.palette.primary.main}!important`,
			color: `${theme.palette.primary.dark}!important`,
			border: `1px solid ${theme.palette.primary.dark}!important`,
		},
	},
})
