import { ChangeEvent, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useStyles } from './CommentInput.styles'
interface CommentInputProps {
	onAddComment: (comment: string) => void
}

const CommentInput = ({ onAddComment }: CommentInputProps) => {
	const styles = useStyles()

	const [comment, setComment] = useState<string>('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setComment(event.target.value)
	}

	const handleSend = () => {
		if (comment) {
			onAddComment(comment)
			setComment('')
		}
	}

	return (
		<Box className={styles.commentInputContainer}>
			<Box className={styles.commentInnerInputContainer}>
				<TextField
					className={styles.commentInput}
					label='Share your thoughts'
					value={comment}
					onChange={handleChange}
					variant='standard'
					fullWidth
					multiline
				/>
				<Button onClick={handleSend}>Comment</Button>
			</Box>
		</Box>
	)
}

export default CommentInput
