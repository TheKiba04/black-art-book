import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	artModalContainer: {
		'& .MuiDialog-paper': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			// width: '100%',
			maxWidth: '1400px',
			// maxHeight: '900px!important',
			// minWidth: '900px',
		},
	},
	// artModalUploadContainer: {
	// 	margin: '0 20px 20px 0',
	// 	width: '300px',
	// 	maxWidth: '300px',
	// 	maxHeight: '300px',
	// 	padding: 0,
	// 	'& img': {
	// 		maxWidth: '300px',
	// 		maxHeight: '300px',
	// 	},
	// },
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

		// width: '100%',
		// height: '100%',

		// [theme.breakpoints.up('xl')]: {
		// 	maxWidth: '1300px',
		// 	// maxHeight: '800px',
		// },
		// [theme.breakpoints.down('xl')]: {
		// 	maxWidth: '1100px',
		// 	// maxHeight: '500px',
		// },
		// [theme.breakpoints.down('lg')]: {
		// 	maxWidth: '800px',
		// },
		// [theme.breakpoints.down('md')]: {
		// 	maxWidth: '500px',
		// },
		// [theme.breakpoints.down('sm')]: {
		// 	maxWidth: '300px',
		// },
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
