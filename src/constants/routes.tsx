import Layout from '@/components/Layout/Layout'
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute'
import { SignIn } from '@/components/SignIn/SignIn'
import { SignUp } from '@/components/SignUp/SignUp'
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
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				),
			},
		],
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
]
