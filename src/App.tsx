import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

import Router from '@/components/Router/Router'
import theme from '@/styles/theme'

import './App.css'

import AuthProvider from './components/AuthProvider/AuthProvider'

const App = () => (
	<AuthProvider>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router />
			</ThemeProvider>
		</StyledEngineProvider>
	</AuthProvider>
)

export default App
