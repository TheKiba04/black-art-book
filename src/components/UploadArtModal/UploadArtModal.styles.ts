import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	uploadArtModalContainer: {
		'& .MuiDialog-paper': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '600px',
		},
	},
	uploadArtModalUploadContainer: {
		margin: '6px 20px 20px 0',
		width: '300px',
		maxWidth: '300px',
		maxHeight: '300px',
		padding: 0,
		'& img': {
			maxWidth: '300px',
			maxHeight: '300px',
		},
		'& svg': {
			width: '40px',
			height: '40px',
		},
	},
	uploadArtModalTitle: {
		width: '100%',
	},
	uploadArtModalContent: {
		width: '100%',
	},
	uploadArtModalActions: {
		width: '100%',
	},
	uploadArtModalPopover: {
		pointerEvents: 'none',
		'& .MuiPopover-paper': {
			border: `2px solid ${theme.palette.primary.dark}`,
		},
	},
})
