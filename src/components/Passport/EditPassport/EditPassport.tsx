import { useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import UploadImage from '@/components/UploadImage/UploadImage'
import { dataURItoBlob } from '@/helpers/common'
import { updateUser, updateUserWithAvatar } from '@/helpers/database'
import { loggerErr } from '@/helpers/logger'
import { User } from '@/types/User'

const EditPassport = ({ user, onEdit }: { user: User; onEdit: () => void }) => {
	const [file, setFile] = useState<File | null>(null)
	const [fileSrc, setFileSrc] = useState<string | null>(user.avatarURL)

	const [userFullname, setUserFullname] = useState<string>(user.fullname)
	const [userDescription, setUserDescription] = useState<string | undefined>(user.description)
	const [formError, setFormError] = useState<boolean>(false)

	const isError = !userFullname || !userDescription

	const isValidField = (field: string | undefined) => formError && field === ''
	const isValidFieldWithMessage = (field: string | undefined, message: string) =>
		isValidField(field) ? message : ''

	const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement

		if (!inputElement.files) return

		setFile(inputElement.files[0])
	}

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserFullname(event.target.value)
	}

	const handleChangeDescr = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserDescription(event.target.value)
	}

	
	const handleCropImage = async (src: string, filename: string, filetype: string) => {
		const croppedBlob = dataURItoBlob(src, filetype)
		const file = new File([croppedBlob], filename, { type: filetype }) // Specify the desired file name and type

		setFile(file)
	}

	const onSubmit = async (userFullname: string, userDescription: string, file: File | null) => {
		const updatedProfileWithAvatar = {
			avatarFile: file,
			fullname: userFullname,
			description: userDescription,
		}
		const updatedProfile = { fullname: userFullname, description: userDescription }

		file
			? await updateUserWithAvatar(user.uid, updatedProfileWithAvatar)
			: await updateUser(user.uid, updatedProfile)
	}

	const handleClose = () => {
		setFile(null)
		setFileSrc(null)
		setFormError(false)
		setUserFullname('')
		setUserDescription('')
		onEdit()
	}
	const handleConfirm = async () => {
		if (isError) {
			setFormError(true)
			loggerErr(`error: ${isError}`)

			return
		}
		await onSubmit(userFullname, userDescription, file)
		handleClose()
	}

	useEffect(() => {
		file && setFileSrc(URL.createObjectURL(file))
	}, [file])

	return (
		<Grid container spacing={4} pt={3}>
			<Grid item xs={4} textAlign='center'>
				<UploadImage fileSrc={fileSrc} onUpload={handleUploadImage} onCrop={handleCropImage} />
			</Grid>
			<Grid container item xs={6}>
				<Grid item>
					<TextField
						id='name'
						fullWidth
						label='User Name'
						variant='standard'
						value={userFullname}
						onChange={handleChangeName}
						error={isValidField(userFullname)}
						helperText={isValidFieldWithMessage(userFullname, 'Please enter user fullname')}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						fullWidth
						id='descr'
						label='User description'
						variant='standard'
						value={userDescription}
						onChange={handleChangeDescr}
						error={isValidField(userDescription)}
						helperText={isValidFieldWithMessage(userDescription, 'Please enter user description')}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2} item xs={2} alignItems='flex-start'>
				<Grid item xs={6}>
					<Button variant='contained' color='primary' onClick={onEdit}>
						Cancel
					</Button>
				</Grid>
				<Grid item xs={6} textAlign='left'>
					<Button variant='contained' color='secondary' onClick={handleConfirm}>
						Save
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default EditPassport
