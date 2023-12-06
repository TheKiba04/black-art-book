export interface Art {
	uid: string
	name: string
	description: string
	artURL: string
	createdBy: {
		userId: string
		name: string
	}
}
