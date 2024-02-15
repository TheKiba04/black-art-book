import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'

import { useStyles } from './Layout.styles'

const Layout = () => {
	const styles = useStyles()

	return (
		<Box
			className={styles.layoutContainer}
		>
			<Container maxWidth='xl'>
				<Header />
				<Outlet />
			</Container>
			<Footer />
		</Box>
	)
}

export default Layout
