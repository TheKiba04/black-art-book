import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	artModalContainer: {
		'& .MuiDialog-paper': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			maxWidth: '1000px',
		},
	},
	artModalCloseButton: {
		width: '40px',
		height: '40px',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.dark,
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
		},
	},
	artModalImage: {
		maxHeight: '800px',
		maxWidth: 'inherit',

		width: '100%',
	},
	artModalTitle: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		fontWeight: 'bold',
		fontStyle: 'normal',
		color: theme.palette.primary.dark,
		fontSize: '2rem',
		lineHeight: '2.5rem',
	},
	artModalContent: {
		width: '100%',
	},
	artModalActions: {
		width: '100%',
	},
	artModalPopover: {
		pointerEvents: 'none',
		'& .MuiPopover-paper': {
			border: `2px solid ${theme.palette.primary.dark}`,
		},
	},
})
