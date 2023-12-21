import { arrayRemove, arrayUnion } from 'firebase/firestore'

import {
	updateArt,
	updateComment,
	// , updateComment
} from './database'

export const getInitials = (name: string | undefined | null) => {
	if (!name) return 'U'
	const [firstName, lastName] = name.split(' ')

	return firstName[0] + lastName[0]
}

export const trimString = (str: string, length: number) => {
	const startTrimming = 0

	if (str.length <= length) return str

	return str.slice(startTrimming, length) + '...'
}

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
