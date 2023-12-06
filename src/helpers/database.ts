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

import { loggerErr } from './logger'
import { getDefaultUserImage, uploadImage } from './storage'

export const createUser = async (userId: string, data: object) => {
	const avatarURL = await getDefaultUserImage()

	await setDoc(doc(database, 'users', userId), { ...data, avatarURL })
}

export const createArt = async (userId: string, data: object, file: File) => {
	try {
		const artURL = await uploadImage(userId, file)
		const artRef = await addDoc(collection(database, 'arts'), { ...data, artURL })

		await updateDoc(doc(database, 'users', userId), {
			artList: arrayUnion(artRef.id),
		})
		const art = await getDoc(doc(database, 'arts', artRef.id))

		return art?.data()
	} catch (error) {
		loggerErr(error)
	}
}

export const getUser = async (userId: string) => {
	const docRef = doc(database, 'users', userId)
	const docSnapshot = await getDoc(docRef)

	return docSnapshot?.data()
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

export const getAllArts = async () => {
	const itemsLimit = 9
	const q = query(collection(database, 'arts'), limit(itemsLimit))
	const querySnapshot = await getDocs(q)

	return querySnapshot.docs.map((doc) => doc.data())
}

export const updateData = async (userId: string, docName: string, data: object) => {
	const userRef = doc(database, docName, userId)

	await updateDoc(userRef, data)
}

export const updateDataArray = async (
	userId: string,
	docName: string,
	arrayName: string,
	data: object
) => {
	const userRef = doc(database, docName, userId)

	await updateDoc(userRef, {
		[arrayName]: arrayUnion(data),
	})
}

export const removeDataArray = async (
	userId: string,
	docName: string,
	arrayName: string,
	data: object
) => {
	const userRef = doc(database, docName, userId)

	await updateDoc(userRef, {
		[arrayName]: arrayUnion(data),
	})
}
