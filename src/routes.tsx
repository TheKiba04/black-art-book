import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'

const router = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'profile',
				element: <div>Profile</div>,
			},
		],
	},
]

export default createBrowserRouter(router)
