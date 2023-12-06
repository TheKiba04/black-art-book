import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'

import { storage } from '@/config/firebase'

export const getImage = async (userId: string, fileName: string) => {
	const imagesRef = ref(storage, `${userId}/${fileName}`)

	return await getDownloadURL(imagesRef)
}
export const uploadImage = async (userId: string, file: File) => {
	const imagesRef = ref(storage, `${userId}/${file.name}`)

	await uploadBytes(imagesRef, file)

	return await getDownloadURL(imagesRef)
}

export const deleteImage = async (userId: string, fileName: string) => {
	const imagesRef = ref(storage, `${userId}/${fileName}`)

	await deleteObject(imagesRef)
}

export const getImages = async (userId: string) => {
	const imagesRef = ref(storage, userId)

	return await listAll(imagesRef)
		.then((res) => res.items.map((item) => item.name))
		.then(async (res) => await Promise.all(res.map((item) => getImage(userId, item))))
}

export const getDefaultUserImage = async () => {
	const imagesRef = ref(storage, 'defaultUser.png')

	return await getDownloadURL(imagesRef)
}
