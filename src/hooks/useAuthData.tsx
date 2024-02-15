import { useFormik } from 'formik'

import { signin, signup } from '@/helpers/auth'
import { useLocalNavigate } from '@/hooks/useLocalNavigate'
import AuthFormikValues  from '@/types/Auth'

const useAuthData = (mode:string) => {
    
	const { navigateHome, navigateSignIn } = useLocalNavigate()

	const initialAuthFormValues = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	}

	const handleSignInSubmit = async (data: AuthFormikValues) => {
		const loggedUser = await signin(data)

		loggedUser && navigateHome()
	}
    
	const handleSignUpSubmit = async (data: AuthFormikValues) => {
		const registeredUser = await signup(data)

		registeredUser && navigateSignIn()
	}
    
	const authFormHandler = useFormik<AuthFormikValues>({
		initialValues: initialAuthFormValues,
		onSubmit: mode==='signin'
			? handleSignInSubmit
			: handleSignUpSubmit,
	})

	return { authFormHandler }
}

export default useAuthData