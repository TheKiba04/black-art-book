import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	createArtFormContainer: {
		backgroundColor: theme.palette.background.paper,
		padding: '2rem 1rem',
		position: 'relative',
		zIndex: 1,
	},
	uploadImageContainer: {
		width: '100%',
		height: '300px',
		maxWidth: '100%',
		maxHeight: '300px',
		padding: 0,
		'& img': {
			maxWidth: '100%',
			maxHeight: '300px',
		},
	},
})
