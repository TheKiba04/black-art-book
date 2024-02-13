/* eslint-disable no-magic-numbers */
import { makeStyles } from '@mui/styles'

import theme from '@/styles/theme'

export const useStyles = makeStyles({
	signInContainer: {
		height: '100vh',
	},
	signInSideBackground: {
		backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	signInWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		gap: theme.spacing(3),
	},
	signInFormWrapper: {
		// margin:theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	signInWrapperIcon: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.dark,
	},
	form: {
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	linkContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
})
