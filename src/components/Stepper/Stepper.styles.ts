import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	stepperContainer: {
		'& .MuiStepLabel-iconContainer': {
			// color: theme.palette.primary.dark,
			backgroundColor: theme.palette.primary.dark,
			width: '26px',
			height: '26px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: '50%',
		},
		'& .MuiStepLabel-iconContainer.Mui-active .MuiStepIcon-text': {
			fill: theme.palette.primary.dark,
		},
		'& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
			color: theme.palette.primary.dark,
		},
	},
})
