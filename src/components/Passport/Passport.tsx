/* eslint-disable complexity */
import { useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { User } from '@/types/User'

import ControlPointIcon from '@mui/icons-material/ControlPoint'

import { useStyles } from './Passport.styles'

const Passport = ({ user }: { user: User }) => {
	const styles = useStyles()

	const [editMode, setEditMode] = useState<boolean>(false)
	const [file, setFile] = useState<File | null>(null)
	const [fileSrc, setFileSrc] = useState<string | null>(null)

	const [userFullname, setUserFullname] = useState<string>('')
	const [userDescription, setUserDescription] = useState<string>('')
	const [formError, setFormError] = useState<boolean>(false)
	const handleStartEditMode = () => {
		setEditMode(true)
	}
	const handleEndEditMode = () => {
		setEditMode(false)
	}
	const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement

		inputElement && inputElement.files && inputElement.files[0] && setFile(inputElement.files[0])
	}

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserFullname(event.target.value)
	}

	const handleChangeDescr = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserDescription(event.target.value)
	}

	const handleClose = () => {
		setFile(null)
		setFileSrc(null)
		setFormError(false)
		setUserFullname('')
		setUserDescription('')
		handleEndEditMode()
	}
	const handleConfirm = async () => {
		if (!file || !userFullname || !userDescription) {
			setFormError(true)

			return
		}
		// await onSubmit(file, userFullname, userDescription)
		handleClose()
	}

	useEffect(() => {
		file && setFileSrc(URL.createObjectURL(file))
	}, [file])

	return (
		<Grid container spacing={4} pt={3}>
			{!editMode ? (
				<>
					<Grid item xs={4} textAlign='left'>
						<CardMedia
							sx={{ height: 300, backgroundSize: 'contain', backgroundPosition: 'center' }}
							image={user.avatarURL}
						/>
					</Grid>
					<Grid item xs={7} textAlign='left'>
						<Typography variant='h5' fontStyle='italic' color='secondary.main'>
							{user.fullname}
						</Typography>
					</Grid>
					<Grid item xs={1} textAlign='left'>
						<Button variant='contained' color='secondary' onClick={handleStartEditMode}>
							Edit
						</Button>
					</Grid>
				</>
			) : (
				<>
					<Grid item xs={3} textAlign='left'>
						<Button component='label' className={styles.passportUploadAvatarContainer}>
							<input type='file' hidden onChange={handleUploadImage} />
							{fileSrc ? (
								<img id='uploadedImage' src={fileSrc} />
							) : (
								<ControlPointIcon width='50px' height='50px' />
							)}
						</Button>
						{/* <CardMedia
							sx={{ height: 200, backgroundSize: 'contain', backgroundPosition: 'center' }}
							image={user.avatarURL}
						/> */}
					</Grid>
					<Grid container item xs={7}>
						<Grid item>
							<TextField
								id='name'
								fullWidth
								label='User Name'
								variant='standard'
								value={userFullname}
								onChange={handleChangeName}
								error={formError && userFullname === ''}
								helperText={formError && userFullname === '' ? 'Please enter user fullname' : ''}
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
								error={formError && userDescription === ''}
								helperText={
									formError && userDescription === '' ? 'Please enter user description' : ''
								}
							/>
							{/* <Typography variant='h5' fontStyle='italic' color='secondary.main'>
							{user.fullname}
						</Typography> */}
						</Grid>
					</Grid>
					<Grid container spacing={2} item xs={2}  alignItems='flex-start'>
						<Grid item xs={6}>
							<Button variant='contained' color='primary' onClick={handleEndEditMode}>
								Cancel
							</Button>
						</Grid>
						<Grid item xs={6} textAlign='left'>
							<Button variant='contained' color='secondary' onClick={handleConfirm}>
								Save
							</Button>
						</Grid>
					</Grid>
				</>
			)}
		</Grid>
	)
}

export default Passport
