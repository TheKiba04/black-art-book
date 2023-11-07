import { Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'

const Layout = () => (
	<Container maxWidth="xl">
		<Outlet />
	</Container>
)

export default Layout
