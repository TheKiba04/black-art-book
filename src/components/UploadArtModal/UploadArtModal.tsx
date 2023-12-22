/* eslint-disable complexity */
import { useEffect, useRef, useState } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Popover from '@mui/material/Popover'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import ControlPointIcon from '@mui/icons-material/ControlPoint'

import { useStyles } from './UploadArtModal.styles'

interface UploadArtModalProps {
	open: boolean
	onClose: () => void
	onSubmit: (file: File, name: string, description: string) => Promise<void>
	title: string
	contentText: string
}

const UploadArtModal = ({ open, onClose, onSubmit, title, contentText }: UploadArtModalProps) => {
	const styles = useStyles()

	const uploadRef = useRef(null)
	const [file, setFile] = useState<File | null>(null)
	const [fileSrc, setFileSrc] = useState<string | null>(null)
	const [artName, setArtName] = useState<string>('')
	const [artDescr, setArtDescr] = useState<string>('')
	const [formError, setFormError] = useState<boolean>(false)

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

	const handlePopoverOpen = () => {
		setAnchorEl(uploadRef.current)
	}

	const handlePopoverClose = () => {
		setAnchorEl(null)
	}

	const openPopover = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setArtName(event.target.value)
	}

	const handleChangeDescr = (event: React.ChangeEvent<HTMLInputElement>) => {
		setArtDescr(event.target.value)
	}

	const handleClose = () => {
		setFile(null)
		setFileSrc(null)
		setFormError(false)
		onClose()
		handlePopoverClose()
	}
	const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement

		inputElement && inputElement.files && inputElement.files[0] && setFile(inputElement.files[0])

		handlePopoverClose()
	}

	const handleConfirm = async () => {
		if (!file) {
			handlePopoverOpen()
		} else {
			if (!artName || !artDescr) {
				setFormError(true)

				return
			}
			await onSubmit(file, artName, artDescr)
			handleClose()
		}
	}

	useEffect(() => {
		file && setFileSrc(URL.createObjectURL(file))
	}, [file])

	return (
		<>
			<Dialog className={styles.uploadArtModalContainer} open={open} onClose={handleClose}>
				<DialogTitle className={styles.uploadArtModalTitle}>{title}</DialogTitle>
				<DialogContent className={styles.uploadArtModalContent}>
					<DialogContentText>{contentText}</DialogContentText>
					<Button component='label' className={styles.uploadArtModalUploadContainer}>
						<input type='file' hidden onChange={handleUploadImage} />
						{fileSrc ? (
							<img id='uploadedImage' src={fileSrc} />
						) : (
							<ControlPointIcon width='50px' height='50px' ref={uploadRef} />
						)}
					</Button>
					<TextField
						autoFocus
						id='name'
						label='Art Name'
						variant='standard'
						value={artName}
						onChange={handleChangeName}
						error={formError && artName === ''}
						helperText={formError && artName === '' ? 'Please enter art name' : ''}
					/>
					<TextField
						fullWidth
						id='descr'
						label='Description'
						variant='standard'
						multiline
						value={artDescr}
						onChange={handleChangeDescr}
						error={formError && artDescr === ''}
						helperText={formError && artDescr === '' ? 'Please enter description' : ''}
					/>
				</DialogContent>
				<DialogActions className={styles.uploadArtModalActions}>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleConfirm}>Confirm</Button>
				</DialogActions>
			</Dialog>
			<Popover
				className={styles.uploadArtModalPopover}
				id={id}
				open={openPopover}
				anchorEl={anchorEl}
				onClose={handlePopoverClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Typography sx={{ p: '12px' }}>Please add art</Typography>
			</Popover>
		</>
	)
}

export default UploadArtModal
