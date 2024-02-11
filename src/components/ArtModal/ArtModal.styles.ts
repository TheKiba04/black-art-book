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
		maxWidth: '80%',
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
	artModalButton: {
		color: theme.palette.secondary.main,
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
