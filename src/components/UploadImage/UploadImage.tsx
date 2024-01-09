import React from 'react'

import Button from '@mui/material/Button'

import ControlPointIcon from '@mui/icons-material/ControlPoint'

import { useStyles } from './/UploadImage.styles'
interface UploadImageProps {
	fileSrc: string | null
	onUpload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>
}

const UploadImage = ({ fileSrc, onUpload }: UploadImageProps) => {
	const styles = useStyles()

	return (
		<Button component='label' className={styles.passportUploadAvatarContainer}>
			<input type='file' hidden onChange={onUpload} />
			{fileSrc ? (
				<img id='uploadedImage' src={fileSrc} />
			) : (
				<ControlPointIcon width='50px' height='50px' />
			)}
		</Button>
	)
}

export default UploadImage
