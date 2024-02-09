import { GroupBase } from 'react-select'

import { getHashTags } from './database'

export const getHashTagsDecorated = async () => {
	const decoratedHashTags = await getHashTags()
	const group: GroupBase<string> = {
		options: decoratedHashTags.map((option) => option.toString()) as string[],
	}

	return group
}
