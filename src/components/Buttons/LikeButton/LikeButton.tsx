
import { useState } from 'react'

import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'

import { BADGE_INVISIBILITY_LIMIT } from '@/constants/common'
import { removeLike, setLike } from '@/helpers/database'
import User from '@/types/User'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import { useStyles } from './LikeButton.styles'

interface LikeButtonProps {
    currentUser: User | null
    artLikes: string[]
}

const LikeButton = ({currentUser,artLikes}:LikeButtonProps) => {
	const styles = useStyles()

	const [likes, setLikes] = useState<string[]>(artLikes)

	const renderLikeIcon = (likes: string[]) =>
		currentUser && likes.includes(currentUser.uid) ? <FavoriteIcon /> : <FavoriteBorderIcon />

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

    	if (currentUser) {
    		const isLikedBefore = likes.includes(currentUser.uid)

    		return isLikedBefore ? handleRemoveLike(id, currentUser.uid) : handleSetLike(id, currentUser.uid)
    	}
    }

	return (
		<IconButton
			className={styles.likeButton}
			size='small'
			onClick={handleClickLike(likes)}
		>
			<Badge
				className={styles.badge}
				badgeContent={likes.length}
				invisible={likes.length <= BADGE_INVISIBILITY_LIMIT}
			>
				{renderLikeIcon(likes)}
			</Badge>
		</IconButton>
	)
}

export default LikeButton