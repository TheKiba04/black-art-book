import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	setDoc,
	updateDoc,
} from 'firebase/firestore'
import { isEmpty } from 'lodash'

import { database } from '@/config/firebase'
import { Comment } from '@/types/Comment'
import { User } from '@/types/User'

import { loggerErr } from './logger'
import { getDefaultUserImage, uploadImage } from './storage'

// POST REQUESTS
// User
export const createUser = async (userId: string, data: object) => {
	const avatarURL = await getDefaultUserImage()

	await setDoc(doc(database, 'users', userId), { ...data, avatarURL })
}
// Art
export const createArt = async (userId: string, data: object, file: File) => {
	try {
		const artURL = await uploadImage(userId, file)
		const commentsRef = await addDoc(collection(database, 'comments'), { list: [] })

		const artRef = await addDoc(collection(database, 'arts'), {
			...data,
			...{ artURL: artURL, comments: commentsRef.id },
		}).then(async (docRef) => {
			await updateDoc(docRef, { uid: docRef.id })

			return docRef
		})

		await updateDoc(doc(database, 'users', userId), {
			artList: arrayUnion(artRef.id),
		})
		const art = await getDoc(doc(database, 'arts', artRef.id))

		return art?.data()
	} catch (error) {
		loggerErr(error)
	}
}

// GET REQUESTS
// User
export const getUser = async (userId: string) => {
	const docRef = doc(database, 'users', userId)
	const docSnapshot = await getDoc(docRef)

	return (docSnapshot?.data() as User) ?? null
}

export const getUserArts = async (userId: string) => {
	const docRef = doc(database, 'users', userId)
	const docSnapshot = await getDoc(docRef)
	const artList = docSnapshot?.data()?.artList ?? []

	if (!isEmpty(artList)) {
		return await Promise.all(
			artList.map(async (ref: string) => {
				const artRef = doc(database, 'arts', ref)
				const artSnapshot = await getDoc(artRef)
				const artData = artSnapshot?.data() ?? null

				return artData
			})
		)
	}

	return []
}

// Art
export const getAllArts = async () => {
	const itemsLimit = 9
	const q = query(collection(database, 'arts'), limit(itemsLimit))
	const querySnapshot = await getDocs(q)
	const allArts = querySnapshot.docs.map((doc) => doc.data())

	return allArts
}

// Comment

export const getComments = async (commentId: string) => {
	const docRef = doc(database, 'comments', commentId)
	const docSnapshot = await getDoc(docRef)

	return docSnapshot?.data()!.list || []
}

// export const getArt = async (artId: string) => {
// 	// eslint-disable-next-line no-console
// 	console.log('here')
// 	const docRef = doc(database, 'arts', artId)

// 	// eslint-disable-next-line no-console
// 	console.log(docRef)
// 	const docSnapshot = await getDoc(docRef)

// 	return docSnapshot?.data()
// }

// PUT REQUESTS
// User

// Art
export const updateArt = async (artId: string, data: object) => {
	const artRef = doc(database, 'arts', artId)

	await updateDoc(artRef, data)
}

// Comment

export const updateComments = async (commentId: string, data: Comment) => {
	const commentsRef = doc(database, 'comments', commentId)

	await updateDoc(commentsRef, {
		list: arrayUnion(data),
	})
}
// export const updateData = async (userId: string, docName: string, data: object) => {
// 	const userRef = doc(database, docName, userId)

// 	await updateDoc(userRef, data)
// }

// export const updateDataArray = async (
// 	userId: string,
// 	docName: string,
// 	arrayName: string,
// 	data: object
// ) => {
// 	const userRef = doc(database, docName, userId)

// 	await updateDoc(userRef, {
// 		[arrayName]: arrayUnion(data),
// 	})
// }

// export const removeDataArray = async (
// 	userId: string,
// 	docName: string,
// 	arrayName: string,
// 	data: object
// ) => {
// 	const userRef = doc(database, docName, userId)

// 	await updateDoc(userRef, {
// 		[arrayName]: arrayUnion(data),
// 	})
// }
