import { BrowserRouter, useRoutes } from 'react-router-dom'

import { routes } from '@/constants/routes'

const Routes = () => useRoutes(routes)

const Router = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
)

export default Router
