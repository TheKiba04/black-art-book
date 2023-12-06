import { makeStyles } from '@mui/styles'

import { animations } from '@/styles/animations'
import theme from '@/styles/theme'

export const useStyles = makeStyles({
	headingContainer: {
		padding: '10rem 0 0',
		overflow: 'hidden',
	},
	headingSubtitle: {
		paddingTop: '5rem!important',
		paddingBottom: '2rem!important',
	},
	headingButton: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.main,
		border: `2px solid ${theme.palette.primary.main}`,
		outline: `2px solid ${theme.palette.primary.dark}`,
		borderRadius: '2px',
		padding: '0.3em 1em',
		marginBottom: '2rem',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.dark,
			border: `2px solid ${theme.palette.primary.dark}`,
		},
	},
	slideInLeft: {
		'-webkit-animation': 'slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
	},
	slideInRight: {
		'-webkit-animation': 'slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both ',
	},
	slideInTop: {
		'-webkit-animation': 'slideInTop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInTop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
	},
	slideInBottom: {
		'-webkit-animation': 'slideInBottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInBottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both ',
	},
	slideInTr: {
		'-webkit-animation': 'slideInTr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInTr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
	},
	slideInBr: {
		'-webkit-animation': 'slideInBr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInBr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
	},
	slideInBl: {
		'-webkit-animation': 'slideInBl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInBl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
	},
	slideInTl: {
		'-webkit-animation': 'slideInTl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInTl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
	},
	...animations,
})
