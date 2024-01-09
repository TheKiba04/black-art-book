import React, { useEffect, useState } from 'react'

import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { trimString } from '@/helpers/common'
import { getComments, removeLike, setLike } from '@/helpers/database'
import { Art } from '@/types/Art'
import { User } from '@/types/User'

import CommentIcon from '@mui/icons-material/Comment'
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
	const BADGE_INVISIBILITY_LIMIT = 1
	const BADGE_BASIC_COUNT = 0
	const [likes, setLikes] = useState<string[]>(art.likes)
	const [commentsCount, setCommentsCount] = useState<number>(BADGE_BASIC_COUNT)
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

	useEffect(() => {
		getComments(art.comments).then((comments) => setCommentsCount(comments.length))
	}, [art])

	return (
		<Grid item>
			<Card className={styles.recentArtsCard} onClick={handleClick}>
				<div>
					<CardMedia className={styles.recentArtsImage} sx={{ height: 320 }} image={art.artURL} />
					<CardContent className={styles.recentArtsCardContent}>
						<Typography gutterBottom variant='h6' fontWeight='bold' component='div'>
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
					<Box>
						<IconButton
							id={art.uid}
							className={styles.recentArtsButton}
							size='small'
							onClick={handleClickLike(likes)}
						>
							<Badge
								className={styles.badge}
								badgeContent={likes.length}
								color='secondary'
								invisible={likes.length <= BADGE_INVISIBILITY_LIMIT}
							>
								{renderLikeIcon(likes)}
							</Badge>
						</IconButton>
						<IconButton className={styles.recentArtsButton} size='small'>
							<Badge
								className={styles.badge}
								badgeContent={commentsCount}
								color='secondary'
								invisible={commentsCount <= BADGE_INVISIBILITY_LIMIT}
							>
								<CommentIcon />
							</Badge>
						</IconButton>
					</Box>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ArtCard
