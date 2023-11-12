import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import Router from '@/components/Router/Router'
import theme from '@/styles/theme'

import './App.css'

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Router />
	</ThemeProvider>
)

export default App
