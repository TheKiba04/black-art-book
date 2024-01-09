import { updateProfile } from 'firebase/auth'
import {
	addDoc,
	arrayRemove,
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

import { auth, database } from '@/config/firebase'
import { Art } from '@/types/Art'
import { Comment } from '@/types/Comment'
import { User } from '@/types/User'

import { loggerErr } from './logger'
import { uploadImage } from './storage'

// POST REQUESTS
// User
export const createUser = async (userId: string, data: object) => {

	await setDoc(doc(database, 'users', userId), data)
}
// Art
export const createArt = async (userId: string, data: object, file: File) => {
	try {
		const artURL = await uploadImage(userId, file)

		const artRef = await addDoc(collection(database, 'arts'), {
			...data,
			artURL: artURL,
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

// Comment
export const createComment = async (data: Comment) => {
	try {
		const commentsRef = await addDoc(collection(database, 'comments'), data).then(
			async (docRef) => {
				await updateDoc(docRef, { uid: docRef.id })

				return docRef
			}
		)

		await updateDoc(doc(database, 'arts', data.artId), {
			comments: arrayUnion(commentsRef.id),
		})

		const newCommentRef = doc(database, 'comments', commentsRef.id)
		const commentSnapshot = await getDoc(newCommentRef)
		const commentData = commentSnapshot?.data() ?? null

		return commentData as Comment
	} catch (error) {
		loggerErr(error)

		return null
	}
}

// GET REQUESTS
// User
export const getUser = async (userId: string) => {
	try {
		const docRef = doc(database, 'users', userId)
		const docSnapshot = await getDoc(docRef)

		return (docSnapshot?.data() as User) ?? null
	} catch (error) {
		loggerErr(error)

		return null
	}
}

// Art
export const getAllArts = async () => {
	try {
		const itemsLimit = 9
		const q = query(collection(database, 'arts'), limit(itemsLimit))
		const querySnapshot = await getDocs(q)
		const allArts = querySnapshot.docs.map((doc) => doc.data()) as Art[]

		return allArts
	} catch (error) {
		loggerErr(error)

		return []
	}
}

// eslint-disable-next-line complexity
export const getUserArts = async (userId: string) => {
	try {
		const docRef = doc(database, 'users', userId)
		const docSnapshot = await getDoc(docRef)
		const artList = docSnapshot?.data()?.artList ?? []

		if (!isEmpty(artList)) {
			const userArts: Art[] = await Promise.all(
				artList.map(async (ref: string) => {
					const artRef = doc(database, 'arts', ref)
					const artSnapshot = await getDoc(artRef)
					const artData = (artSnapshot?.data() as Art) ?? null

					return artData
				})
			)

			return userArts
		}

		return []
	} catch (error) {
		loggerErr(error)

		return []
	}
}

// Comment

export const getComments = async (commentsId: string[]) => {
	try {
		if (!isEmpty(commentsId)) {
			const comments: Comment[] = await Promise.all(
				commentsId.map(async (ref: string) => {
					const commentRef = doc(database, 'comments', ref)
					const commentSnapshot = await getDoc(commentRef)
					const commentData = commentSnapshot?.data() ?? null

					return commentData as Comment
				})
			)

			return comments
		} else {
			return []
		}
	} catch (error) {
		loggerErr(error)

		return []
	}
}

// PUT REQUESTS
// User
export const updateUser = async (userId: string, data: Record<string, string>) => {
	const userRef = doc(database, 'users', userId)

	auth.currentUser &&
		(await updateProfile(auth.currentUser, {
			displayName: data.fullname as string,
		}))
	await updateDoc(userRef, { ...data })
}

export const updateUserWithAvatar = async (
	userId: string,
	data: Record<string, string | File | null>
) => {
	try {
		const updatedAvatarURL = await uploadImage(userId, data.avatarFile as File)

		auth.currentUser &&
			(await updateProfile(auth.currentUser, {
				displayName: data.fullname as string,
				photoURL: updatedAvatarURL,
			}))
		const userRef = doc(database, 'users', userId)

		await updateDoc(userRef, {
			fullname: data.fullname,
			avatarURL: updatedAvatarURL,
			description: data.description,
		})
	} catch (err) {
		loggerErr(err)
	}
}
// Art
export const updateArt = async (artId: string, data: object) => {
	const artRef = doc(database, 'arts', artId)

	await updateDoc(artRef, { ...data })
}

// Comment

export const updateComment = async (commentId: string, data: object) => {
	const commentsRef = doc(database, 'comments', commentId)

	await updateDoc(commentsRef, { ...data })
}

// export const updateCommentLike = async (commentId: string, data: Comment) => {
// 	const commentsRef = doc(database, 'comments', commentId)

// 	await updateDoc(commentsRef, {
// 		list: arrayUnion(data),
// 	})
// }
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

export const setLike = async (artId: string, userId: string) =>
	await updateArt(artId, {
		likes: arrayUnion(userId),
	})

export const removeLike = async (artId: string, userId: string) =>
	await updateArt(artId, {
		likes: arrayRemove(userId),
	})

export const setCommentLike = async (commentId: string, userId: string) =>
	await updateComment(commentId, {
		likes: arrayUnion(userId),
	})

export const removeCommentLike = async (commentId: string, userId: string) =>
	await updateComment(commentId, {
		likes: arrayRemove(userId),
	})
