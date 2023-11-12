import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#e6e6e6',
			dark: '#262626',
		},
		secondary: {
			main: '#737373',
			dark: '#404040',
		},
		background: {
			default: '#d9d9d9',
		},
		text: {
			primary: '#262626',
			secondary: '#000',
		},
	},
	typography: {
		fontFamily: ['Rubik', 'Rubik Mono One'].join(','),
		h1: {
			fontFamily: 'Rubik Mono One',
		},
		h6: {
			fontStyle: 'italic',
		},
	},
})

export default theme
