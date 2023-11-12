import { Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'

// import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const Layout = () => (
	<Container maxWidth='xl'>
		<Header />
		<Outlet />
		{/* <Footer /> */}
	</Container>
)

export default Layout
