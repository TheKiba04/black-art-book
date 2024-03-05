import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { BADGE_BASIC_COUNT } from '@/constants/common'
import { getComments, getUser } from '@/helpers/database'
import useUser from '@/hooks/useUser'
import Art from '@/types/Art'

import CommentButton from '@/components/Buttons/CommentButton/CommentButton'
import LikeButton from '@/components/Buttons/LikeButton/LikeButton'

import { useStyles } from './ArtCard.styles'

interface ArtCardProps {
	art: Art
	isPrivate?: boolean
	onClick: (art: Art) => void
}

const ArtCard = ({ art, isPrivate, onClick }: ArtCardProps) => {
	const { user } = useUser()

	const [userName, setUserName] = useState<string>('')

	const [commentsCount, setCommentsCount] = useState<number>(BADGE_BASIC_COUNT)

	const styles = useStyles()

	const handleClick = () => {
		onClick(art)
	}

	useEffect(() => {
		getComments(art.comments).then((comments) => setCommentsCount(comments.length))
		getUser(art.createdBy).then((user) => setUserName(user?.fullname || ''))
	}, [art])

	return (
		<Grid item>
			<Card className={styles.recentArtsCard} onClick={handleClick}>
				<CardMedia
					className={styles.recentArtsImage}
					sx={{
						filter: `brightness(${art.customized.brightness}%) contrast(${art.customized.contrast}%)`,
					}}
					image={art.artURL}
				/>
				<CardContent className={styles.recentArtsCardContent}>
					<Typography
						gutterBottom
						variant='h6'
						component='div'
						className={styles.recentArtsCardName}
					>
						{art.name}
					</Typography>
					<Typography className={styles.recentArtsDescription} variant='body1'>
						{art.description}
					</Typography>
				</CardContent>

				<CardActions
					className={styles.recentArtsCardActions}
					sx={{
						justifyContent: !isPrivate ? 'space-between' : 'flex-end',
					}}
				>
					{!isPrivate && (
						<Typography variant='caption' color='text.secondary'>
							Author: {userName}
						</Typography>
					)}
					<Box>
						<LikeButton currentUser={user} artLikes={art.likes} />
						<CommentButton commentsCount={commentsCount} />
					</Box>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ArtCard
