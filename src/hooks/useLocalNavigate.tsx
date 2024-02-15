import { useNavigate } from 'react-router-dom'

export const useLocalNavigate = () => {
	const navigate = useNavigate()

	const navigateHome = () => navigate('/')

	const navigateSignIn = () => navigate('/auth/signin')

	const navigateSignUp = () => navigate('/auth/signup')

	const navigateCreate = () => navigate('/create')

	return { navigateHome, navigateSignIn, navigateSignUp, navigateCreate }
}
