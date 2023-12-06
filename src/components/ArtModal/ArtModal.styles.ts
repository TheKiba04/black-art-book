import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	artModalContainer: {
		'& .MuiDialog-paper': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '600px',
		},
	},
	artModalUploadContainer: {
		margin: '0 20px 20px 0',
		width: '300px',
		maxWidth: '300px',
		maxHeight: '300px',
		padding: 0,
		'& img': {
			maxWidth: '300px',
			maxHeight: '300px',
		},
	},
	artModalTitle: {
		width: '100%',
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
