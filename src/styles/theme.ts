import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#e6e6e6',
			dark: '#262626',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#737373',
			dark: '#404040',
		},
		background: {
			// default: '#d9d9d9',
			default: '#E8EAEB',
		},
		text: {
			primary: '#262626',
			secondary: '#000000',
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
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& label.Mui-focused ': {
						color: '#262626',
					},
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				root: {
					color: '#e6e6e6',
					backgroundColor: '#262626',
					border: '1px solid #262626',
					outline: 'none',
					borderRadius: '2px',
					padding: '0.4em 1em 0.3em',
					'&:hover': {
						backgroundColor: '#e6e6e6',
						color: '#262626',
						border: '1px solid #262626',
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					color: '#262626',
					'&.Mui-checked': {
						color: '#262626',
					},
				},
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					color: '#262626',
					'&.Mui-checked': {
						color: '#262626',
					},
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: '#262626',
				},
			},
		},
		MuiCircularProgress: {
			styleOverrides: {
				root: {
					color: '#262626',
				},
			},
		},
	},
}

export default responsiveFontSizes(createTheme(themeOptions))
