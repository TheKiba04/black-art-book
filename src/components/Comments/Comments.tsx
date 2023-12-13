import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isEmpty } from 'lodash'
import moment from 'moment'

import CommentItem from '@/components/CommentItem/CommentItem'
import { getComments, updateComments } from '@/helpers/database'
import { useAuth } from '@/hooks/useAuth'
import { Art } from '@/types/Art'
import { Comment } from '@/types/Comment'

import CommentInput from '../CommentInput/CommentInput'

interface CommentsProps {
	currentArt: Art
}

const Comments = ({ currentArt }: CommentsProps) => {
	const user = useAuth()
	const [comments, setComments] = useState<Comment[]>([])
	const handleComment = async (comment: string) => {
		if (user) {
			const newComment = {
				artId: currentArt.uid,
				userId: user.uid,
				comment: comment,
				likes: [],
				createdAt: moment().format(),
				updatedAt: moment().format(),
			}

			await updateComments(currentArt.comments, newComment)
			setComments((prev) => [...prev, newComment])
		}
	}

	useEffect(() => {
		getComments(currentArt.comments).then((comments) => setComments(comments as Comment[]))
	}, [currentArt.comments])

	return (
		<Grid container spacing={1}>
			{user && (
				<Grid item xs={12}>
					<CommentInput onAddComment={handleComment} />
				</Grid>
			)}
			<Grid item xs={12}>
				{isEmpty(comments) ? (
					<Typography
						variant='h5'
						fontStyle='italic'
						color='secondary.main'
						pt={2}
						width='100%'
						textAlign='center'
					>
						There are no comments yet
					</Typography>
				) : (
					<Grid container justifyContent='center'>
						{comments
							.map((comment) => <CommentItem key={comment.createdAt} comment={comment} />)
							.reverse()}
					</Grid>
				)}
			</Grid>
		</Grid>
	)
}

export default Comments
