import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'

import { BADGE_INVISIBILITY_LIMIT } from '@/constants/common'

import CommentIcon from '@mui/icons-material/Comment'

import { useStyles } from './CommentButton.styles'

interface CommentButtonProps {
    commentsCount: number
    }
    
const CommentButton = ({commentsCount}:CommentButtonProps) => {
	const styles = useStyles()

	return (
		<IconButton className={styles.commentButton} size='small'>
			<Badge
				className={styles.badge}
				badgeContent={commentsCount}
				invisible={commentsCount <= BADGE_INVISIBILITY_LIMIT}
			>
				<CommentIcon />
			</Badge>
		</IconButton>
	)
}

export default CommentButton