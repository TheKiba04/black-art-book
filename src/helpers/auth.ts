import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	User,
} from 'firebase/auth'

import { auth } from '@/config/firebase'
import { useSessionData } from '@/hooks/useSessionData'

import { createUser } from './database'

interface IUser extends Partial<User> {
	email: string
	password: string
	firstName?: string
	lastName?: string
}

const { removeSessionData } = useSessionData()

export const signup = async ({ email, password, firstName, lastName }: IUser) =>
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			updateProfile(userCredential.user, {
				displayName: `${firstName} ${lastName}`,
			})
			createUser(userCredential.user.uid, {
				uid: userCredential.user.uid,
				fullname: `${firstName} ${lastName}`,
				email,
			})

			return userCredential.user
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message

			console.error(errorCode, errorMessage)
		})

export const signin = async ({ email, password }: IUser) =>
	await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => userCredential.user)
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message

			console.error(errorCode, errorMessage)
		})

export const signout = async () => {
	await signOut(auth)
	removeSessionData('user')
}
