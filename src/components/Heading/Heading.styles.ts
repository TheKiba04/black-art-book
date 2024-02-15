 
import { makeStyles } from '@mui/styles'

import { animations } from '@/styles/animations'
import theme from '@/styles/theme'

export const useStyles = makeStyles({
	headingContainer: {
		padding: '3rem 0 0',
		overflow: 'hidden',	
		justifyContent:'space-between',
		alignItems:'center'
	},
	headingSubtitle: {
		paddingTop: '2rem!important',
		paddingBottom: '.5rem!important',
	},
	center: {
		color: theme.palette.secondary.dark,
	},
	slideInLeft: {
		'-webkit-animation': 'slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		color: theme.palette.secondary.dark,
	},
	slideInRight: {
		'-webkit-animation': 'slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both',
		animation: 'slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both ',
		color: theme.palette.secondary.dark,
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
