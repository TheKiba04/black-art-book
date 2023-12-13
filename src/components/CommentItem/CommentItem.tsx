import { useEffect, useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import moment from 'moment'

import { getInitials } from '@/helpers/common'
import { getUser } from '@/helpers/database'
import { Comment } from '@/types/Comment'
import { User } from '@/types/User'

import { useStyles } from './CommentItem.styles'
interface CommentItemProps {
	comment: Comment
}
const CommentItem = ({ comment }: CommentItemProps) => {
	const styles = useStyles()
	const [commentator, setCommentator] = useState<User | null>(null)

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
							<Grid item xs={12} textAlign='end'>
								<Typography variant='caption' fontStyle='italic' color='secondary.main'>
									{moment(comment.updatedAt).fromNow()}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	)
}

export default CommentItem
