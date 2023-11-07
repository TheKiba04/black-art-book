import { RouterProvider } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import './App.css'

import router from './routes'
import theme from './styles/theme'

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<RouterProvider router={router} />
	</ThemeProvider>
)

export default App
