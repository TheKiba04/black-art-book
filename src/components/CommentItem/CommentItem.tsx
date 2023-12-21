import { useEffect, useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import moment from 'moment'

import { getInitials, removeCommentLike, setCommentLike } from '@/helpers/common'
import { getUser } from '@/helpers/database'
import { useAuth } from '@/hooks/useAuth'
import { Comment } from '@/types/Comment'
import { User } from '@/types/User'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import { useStyles } from './CommentItem.styles'
interface CommentItemProps {
	comment: Comment
}
const CommentItem = ({ comment }: CommentItemProps) => {
	const styles = useStyles()
	const BADGE_INVISIBILITY_LIMIT = 1
	const [likes, setLikes] = useState<string[]>(comment.likes)
	const [commentator, setCommentator] = useState<User | null>(null)
	const user = useAuth()

	const renderLikeIcon = (likes: string[]) =>
		user && likes.includes(user.uid) ? <FavoriteIcon /> : <FavoriteBorderIcon />

	const handleRemoveLike = (id: string, uid: string) => {
		removeCommentLike(id, uid)
		setLikes((prev) => prev.filter((like) => like !== uid))
	}

	const handleSetLike = (id: string, uid: string) => {
		setCommentLike(id, uid)
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
		getUser(comment.userId).then((user) => setCommentator(user))
	}, [comment.userId])

	return (
		commentator && (
			<Grid container item xs={12} md={6} className={styles.commentItemWrapper}>
				<Grid item xs={1}>
					<Avatar>
						<Typography variant='body1' color='secondary.dark'>
							{getInitials(commentator.fullname)}
						</Typography>
					</Avatar>
				</Grid>
				<Grid item xs={11}>
					<Grid container className={styles.commentItemContainer}>
						<Grid item xs={12}>
							<Typography color='secondary.main'>{commentator.fullname}</Typography>
						</Grid>

						<Grid item container className={styles.commentItemBody}>
							<Grid item xs={12}>
								<Typography variant='body2' color='secondary.main' whiteSpace='pre-line'>
									{comment.comment}
								</Typography>
							</Grid>
							<Grid
								container
								item
								xs={12}
								textAlign='end'
								display='flex'
								justifyContent='flex-end'
								alignItems='center'
							>
								<Grid item>
									<IconButton
										id={comment.uid}
										className={styles.commentItemButton}
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
								</Grid>
								<Grid item>
									<Typography variant='caption' fontStyle='italic' color='secondary.main'>
										{moment(comment.updatedAt).fromNow()}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	)
}

export default CommentItem
