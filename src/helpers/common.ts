export const getInitials = (name: string | undefined | null) => {
	if (!name) return 'U'
	const [firstName, lastName] = name.split(' ')

	if (!lastName) return firstName[0]

	return firstName[0] + lastName[0]
}

export const trimString = (str: string, length: number) => {
	const startTrimming = 0

	if (str.length <= length) return str

	return str.slice(startTrimming, length) + '...'
}

export const merger = (
	array1: string[][],
	array2: (string | null | undefined | boolean | object)[][]
) =>
	array1.map((itemArray: string[], arrayIndex: number) =>
		itemArray.map((item: string, index: number) => ({
			label: item,
			checked: !!array2[arrayIndex][index],
		}))
	)

export const optionsDecorator = (options: string[]) => {
	const ZERO = 0

	if (options.length === ZERO) return []

	return options.map((option) => ({
		label: option,
		value: option,
	}))
}

export const dataURItoBlob = (dataURI: string, filetype: string) => {
	const byteString = atob(dataURI.split(',')[1])

	const ab = new ArrayBuffer(byteString.length)
	const ia = new Uint8Array(ab)

	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i)
	}

	return new Blob([ab], { type: filetype }) // Adjust the type accordingly
}