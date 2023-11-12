import Layout from '@/components/Layout/Layout'
import Home from '@/pages/Home/Home'
import Profile from '@/pages/Profile/Profile'

export const routes = [
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
				element: <Profile />,
			},
		],
	},
]
