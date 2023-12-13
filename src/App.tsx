import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

import Router from '@/components/Router/Router'
import theme from '@/styles/theme'

import './App.css'

import AuthProvider from './components/AuthProvider/AuthProvider'

const App = () => {
	const allowedWidth = 800

	if (window.innerWidth < allowedWidth) {
		return (
			<div className='App_notAllowed'>
				<span>
					<h1>Sorry, but for now this website is not available on mobile devices</h1>
				</span>
			</div>
		)
	}

	return (
		<AuthProvider>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router />
				</ThemeProvider>
			</StyledEngineProvider>
		</AuthProvider>
	)
}

export default App
