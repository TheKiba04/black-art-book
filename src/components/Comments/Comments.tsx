import { useEffect, useState } from 'react'

import { isEmpty } from 'lodash'
import moment from 'moment'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CommentInput from '@/components/Comments/CommentInput/CommentInput'
import CommentItem from '@/components/Comments/CommentItem/CommentItem'
import { createComment, getComments } from '@/helpers/database'
import useUser from '@/hooks/useUser'
import Art from '@/types/Art'
import Comment from '@/types/Comment'

interface CommentsProps {
	currentArt: Art
}

const Comments = ({ currentArt }: CommentsProps) => {
	const { user } = useUser()

	const [comments, setComments] = useState<Comment[]>([])

	const handleCreateComment = async (comment: string) => {
		if (user) {
			const newComment: Comment = {
				artId: currentArt.uid,
				userId: user.uid,
				comment: comment,
				likes: [],
				createdAt: moment().format(),
				updatedAt: moment().format(),
			}

			const createdComment = await createComment(newComment)

			createdComment && setComments((prev) => [...prev, createdComment])
		}
	}

	useEffect(() => {
		getComments(currentArt.comments).then((comments) => setComments(comments as Comment[]))
	}, [currentArt.comments])

	return (
		<Grid container spacing={1}>
			{user && (
				<Grid item xs={12}>
					<CommentInput onAddComment={handleCreateComment} />
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
							.map((comment) => <CommentItem key={comment.uid} comment={comment} />)
							.reverse()}
					</Grid>
				)}
			</Grid>
		</Grid>
	)
}

export default Comments
