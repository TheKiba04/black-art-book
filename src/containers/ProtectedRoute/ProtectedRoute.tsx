import { ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import useUser  from '@/hooks/useUser'

interface ProtectedRouteProps {
	children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { user } = useUser()

	if (!user) {
		return <Navigate to='/' />
	}

	return children
}
