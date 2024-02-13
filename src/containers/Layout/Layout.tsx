import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const Layout = () => (
	<Box
		sx={{
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'space-between',
		}}
	>
		<Container maxWidth='xl'>
			<Header />
			<Outlet />
		</Container>
		<Footer />
	</Box>
)

export default Layout
