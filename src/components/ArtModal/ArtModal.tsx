import { useEffect, useRef, useState } from 'react'
import { PlusCircle } from 'react-feather'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Popover from '@mui/material/Popover'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { useStyles } from './ArtModal.styles'

interface ArtModalProps {
	open: boolean
	onClose: () => void
	onSubmit: (file: File, name: string, description: string) => Promise<void>
	title: string
	contentText: string
}

// eslint-disable-next-line complexity
const ArtModal = ({ open, onClose, onSubmit, title, contentText }: ArtModalProps) => {
	const styles = useStyles()

	const uploadRef = useRef(null)
	const [file, setFile] = useState<File | null>(null)
	const [fileSrc, setFileSrc] = useState<string | null>(null)
	const [artName, setArtName] = useState<string>('')
	const [artDescr, setArtDescr] = useState<string>('')

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
		onClose()
		handlePopoverClose()
	}
	// eslint-disable-next-line complexity
	const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement

		inputElement && inputElement.files && inputElement.files[0] && setFile(inputElement.files[0])
		handlePopoverClose()
	}

	const handleConfirm = async() => {
		if (file) {
			await onSubmit(file, artName, artDescr)
			handleClose()
		} else {
			handlePopoverOpen()
		}
	}

	useEffect(() => {
		file && setFileSrc(URL.createObjectURL(file))
	}, [file])

	return (
		<>
			<Dialog className={styles.artModalContainer} open={open} onClose={handleClose}>
				<DialogTitle className={styles.artModalTitle}>{title}</DialogTitle>
				<DialogContent className={styles.artModalContent}>
					<DialogContentText>{contentText}</DialogContentText>
					<Button component='label' className={styles.artModalUploadContainer} ref={uploadRef}>
						<input type='file' hidden onChange={handleUploadImage} />
						{fileSrc ? <img src={fileSrc} /> : <PlusCircle width='50px' height='50px' />}
					</Button>
					<TextField
						autoFocus
						id='name'
						label='Art Name'
						variant='standard'
						value={artName}
						onChange={handleChangeName}
					/>
					<TextField
						fullWidth
						id='descr'
						label='Description'
						variant='standard'
						multiline
						value={artDescr}
						onChange={handleChangeDescr}
					/>
				</DialogContent>
				<DialogActions className={styles.artModalActions}>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleConfirm}>Confirm</Button>
				</DialogActions>
			</Dialog>
			<Popover
				className={styles.artModalPopover}
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

export default ArtModal
