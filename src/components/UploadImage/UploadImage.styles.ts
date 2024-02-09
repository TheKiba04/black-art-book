import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	passportUploadAvatarContainer: {
		position: 'relative',
		width: '300px',
		height: '300px',
		maxWidth: '300px',
		maxHeight: '300px',
		padding: 0,
		'& img': {
			maxWidth: '300px',
			maxHeight: '300px',
		},
		'& svg': {
			color: theme.palette.primary.light,
		},
		'&:hover svg': {
			color: theme.palette.primary.dark,
		},
	},
	addIcon: {
		width: '40px',
		height: '40px',
	},
	cropIcon: {
		position: 'absolute',
		top: '10px',
		right: '10px',
		backgroundColor: theme.palette.secondary.light,
		width: '40px',
		height: '40px',
		'& svg': {
			color: theme.palette.primary.light,
			width: '24px',
			height: '24px',
		},
	},
})
