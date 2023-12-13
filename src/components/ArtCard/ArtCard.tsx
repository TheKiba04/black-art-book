import React, { useState } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { removeLike, setLike, trimString } from '@/helpers/common'
import { Art } from '@/types/Art'
import { User } from '@/types/User'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import { useStyles } from './ArtCard.styles'

interface ArtCardProps {
	art: Art
	user: User | null
	isPersonal?: boolean
	onClick: (art: Art) => void
}

const ArtCard = ({ art, user, isPersonal, onClick }: ArtCardProps) => {
	const [likes, setLikes] = useState<string[]>(art.likes)
	const styles = useStyles()
	const allowedSymbols = 80

	const handleClick = () => {
		onClick(art)
	}
	const renderLikeIcon = (likes: string[]) =>
		user && likes.includes(user.uid) ? <FavoriteIcon /> : <FavoriteBorderIcon />

	const handleRemoveLike = (id: string, uid: string) => {
		removeLike(id, uid)
		setLikes((prev) => prev.filter((like) => like !== uid))
	}

	const handleSetLike = (id: string, uid: string) => {
		setLike(id, uid)
		setLikes((prev) => [...prev, uid])
	}

	const handleClickLike =
		(likes: string[]) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.stopPropagation()
			const id = event.currentTarget.id

			if (user) {
				const l = likes.includes(user.uid)

				return l ? handleRemoveLike(id, user.uid) : handleSetLike(id, user.uid)
			}
		}

	return (
		<Grid item>
			<Card className={styles.recentArtsCard} onClick={handleClick}>
				<div>
					<CardMedia className={styles.recentArtsImage} sx={{ height: 320 }} image={art.artURL} />
					<CardContent className={styles.recentArtsCardContent}>
						<Typography gutterBottom variant='h5' component='div'>
							{art.name}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{trimString(art.description, allowedSymbols)}
						</Typography>
					</CardContent>
				</div>
				<CardActions
					className={styles.recentArtsCardActions}
					sx={{
						justifyContent: !isPersonal ? 'space-between' : 'flex-end',
					}}
				>
					{!isPersonal && (
						<Typography variant='caption' color='text.secondary'>
							Author: {art.createdBy.name}
						</Typography>
					)}
					<div>
						<Typography variant='caption' color='text.secondary'>
							{likes.length}
						</Typography>
						<IconButton
							id={art.uid}
							className={styles.recentArtsButton}
							size='small'
							onClick={handleClickLike(likes)}
						>
							{renderLikeIcon(likes)}
						</IconButton>
					</div>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ArtCard
