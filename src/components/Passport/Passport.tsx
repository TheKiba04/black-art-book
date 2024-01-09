import { useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { getUser } from '@/helpers/database'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@/types/User'

import EditPassword from './EditPassword/EditPassword'

const Passport = () => {
	const { user } = useAuth()
	const [editMode, setEditMode] = useState<boolean>(false)
	const [currentUser, setCurrentUser] = useState(null as unknown as User)
	const handleStartEditMode = () => {
		setEditMode(true)
	}
	const handleEndEditMode = async () => {
		setEditMode(false)
		if (user) {
			await getUser(user.uid).then((updatedUser) => setCurrentUser(updatedUser as unknown as User))
		}
	}

	const renderAvatar = (avatarURL: string | undefined) =>
		avatarURL && (
			<Grid item xs={4} textAlign='left'>
				<CardMedia
					sx={{ height: 300, backgroundSize: 'contain', backgroundPosition: 'center' }}
					image={avatarURL}
				/>
			</Grid>
		)

	useEffect(() => {
		if (user) {
			getUser(user.uid).then((updatedUser) => setCurrentUser(updatedUser as unknown as User))
		}
	}, [user])

	if (!currentUser) return null

	return !editMode ? (
		<Grid container spacing={4} pt={3}>
			{renderAvatar(currentUser.avatarURL)}
			<Grid container item xs={7} textAlign='left'>
				<Grid item>
					<Typography variant='h5' fontStyle='italic' color='secondary.main'>
						{currentUser.fullname}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5' fontStyle='italic' color='secondary.main'>
						{currentUser.description}
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={1} textAlign='left'>
				<Button variant='contained' color='secondary' onClick={handleStartEditMode}>
					Edit
				</Button>
			</Grid>
		</Grid>
	) : (
		<EditPassword user={currentUser} onEdit={handleEndEditMode} />
	)
}

export default Passport
