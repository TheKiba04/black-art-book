interface Art {
	uid: string
	name: string
	description: string
	artURL: string
	createdBy: string
	likes: string[]
	comments: string[]
	category: string
	hashtags: string[]
	cropped: boolean
	customized: { contrast: number; brightness: number }
	createdAt: string
	updatedAt: string
}

export default Art