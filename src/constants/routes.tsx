import Layout from '@/containers/Layout/Layout'
import { ProtectedRoute } from '@/containers/ProtectedRoute/ProtectedRoute'
import Auth from '@/pages/Auth/Auth'
import CreateArt from '@/pages/CreateArt/CreateArt'
import Home from '@/pages/Home/Home'
import Profile from '@/pages/Profile/Profile'

import SignIn from '@components/SignIn/SignIn'
import SignUp from '@components/SignUp/SignUp'

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
			{
				path: 'create',
				element: (
					<ProtectedRoute>
						<CreateArt />
					</ProtectedRoute>
				),
			},
		],
	},
	{
		path: 'auth',
		element: <Auth />,
		children: [
			{
				path: 'signin',
				element: <SignIn />,
			},
			{
				path: 'signup',
				element: <SignUp />,
			},
		],
	},
]
