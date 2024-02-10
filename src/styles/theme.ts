import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#e6e6e6',
			dark: '#262626',
			contrastText: '#ffffff',
			light: '#ffffff',
		},
		secondary: {
			main: '#737373',
			dark: '#404040',
			light: '#bfbfbf',
		},
		background: {
			default: '#E8EAEB',
			paper: '#ffffff',
		},
		text: {
			primary: '#262626',
			secondary: '#000000',
		},
		action: {
			disabledBackground: '#404040',
			disabled: '#ffffff',
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
		body1: {
			fontSize: '.9rem',
		},
		body2: {
			fontFamily: 'Rubik Mono One',
			fontWeight: 400,
			fontSize: '1.3rem',
		},
		subtitle2: {
			fontFamily: 'Rubik Mono One',
			fontWeight: 200,
			fontSize: '.8rem',
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
					'&:disabled': {
						backgroundColor: '#737373',
						color: '#ffffff',
						border: '1px solid #737373',
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
