import React, { createRef, useEffect, useState } from 'react'

import 'cropperjs/dist/cropper.css'
import classNames from 'classnames'
import Cropper, { ReactCropperElement } from 'react-cropper'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

import ControlPointIcon from '@mui/icons-material/ControlPoint'
import CropIcon from '@mui/icons-material/Crop'

import { useStyles } from './/UploadImage.styles'
interface UploadImageProps {
	fileSrc: string | null
	onUpload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>
	onCrop: (src: string, filename: string, filetype: string) => void
	style?: React.CSSProperties
	className?: string
}

const UploadImage = ({ fileSrc, onUpload, onCrop, style, className }: UploadImageProps) => {
	const styles = useStyles()

	const [startCrop, setStartCrop] = useState(false)

	const [image, setImage] = useState<string | undefined>(undefined)

	const [localFile, setLocalFile] = useState<File | undefined>(undefined)

	const cropperRef = createRef<ReactCropperElement>()


	const handleStartCrop = () => {
		setStartCrop(true)
	}

	const handleFinishCrop = () => {
		setStartCrop(false)
	}

	const getCropData = () => {

		if (typeof cropperRef.current?.cropper !== 'undefined') {

			const croppedImageURL = cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
				
			setImage(croppedImageURL)
			localFile && onCrop(croppedImageURL, localFile.name, localFile.type)
			handleFinishCrop()
		}
	}
	

	const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement

		if (!inputElement.files) return
		setLocalFile(inputElement.files[0])
		onUpload(event)
	}

	useEffect(() => {
		if (fileSrc) {
			setImage(fileSrc)
		}
	}, [fileSrc])

	return (
		<Grid container spacing={2}>
			{!startCrop ? (
				<Grid item xs={12}>
					<Button
						component='label'
						className={classNames(styles.passportUploadAvatarContainer, className)}
					>
						<input type='file' hidden onChange={handleUploadImage} />
						{fileSrc ? (
							<>
								<img id='uploadedImage' style={style} src={image} />
								<IconButton className={styles.cropIcon} onClick={handleStartCrop}>
									<CropIcon />
								</IconButton>
							</>
						) : (
							<ControlPointIcon className={styles.addIcon} />
						)}
					</Button>
				</Grid>
			) : (
				<>
					<Grid item xs={12}>
						<Cropper
							ref={cropperRef}
							style={{ height: 300, width: '100%' }}
							zoomTo={0}
							initialAspectRatio={1}
							preview='.img-preview'
							src={image}
							viewMode={1}
							minCropBoxHeight={10}
							minCropBoxWidth={10}
							background={false}
							responsive={true}
							autoCropArea={0.5}
							checkOrientation={false}
							guides={true}
						/>
					</Grid>
					<Grid container item xs={12} spacing={2} justifyContent='flex-end'>
						<Grid item>
							<Button onClick={getCropData}>Crop Image</Button>
						</Grid>
						<Grid item>
							<Button onClick={handleFinishCrop}>Cancel</Button>
						</Grid>
					</Grid>
				</>
			)}
		</Grid>
	)
}

export default UploadImage
