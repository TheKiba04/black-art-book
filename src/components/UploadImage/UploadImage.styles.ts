import { makeStyles } from '@mui/styles'

// import theme from '@/styles/theme'

export const useStyles = makeStyles({
	passportUploadAvatarContainer: {
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
			width: '40px',
			height: '40px',
		},
	},
})
