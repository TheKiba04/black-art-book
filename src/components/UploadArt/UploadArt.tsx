import { useState } from 'react'

import Button from '@mui/material/Button'

import { loggerWarn } from '@/helpers/logger'

import UploadArtModal from '../UploadArtModal/UploadArtModal'

const UploadArt = () =>
{
	const [open, setOpen] = useState(false)

	const handleUploadArt = async (file: File, name: string, description: string) => {
		loggerWarn({ file, name, description })
		// if (user) {
		// 	const art = await createArt(
		// 		user.uid,
		// 		{
		// 			name,
		// 			description,
		// 			createdBy: { uid: user.uid, name: user.fullname },
		// 			likes: [],
		// 		},
		// 	)

		// 	art && onAddArts(art as Art)
		// }
	}

	const handleOpenModal = () => {
		setOpen(true)
	}
	const handleCloseModal = () => {
		setOpen(false)
	}

	return (
		<>
			<Button variant='contained' color='secondary' onClick={handleOpenModal}>
					Upload image
			</Button>
			<UploadArtModal
				open={open}
				onClose={handleCloseModal}
				onSubmit={handleUploadArt}
				title='Upload Art'
				contentText='Upload your art'
			/>
		</>
	)
}

export default UploadArt
