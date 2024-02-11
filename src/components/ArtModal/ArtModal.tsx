import { useState } from 'react'

import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { trimString } from '@/helpers/common'
import { removeLike, setLike } from '@/helpers/database'
import { Art } from '@/types/Art'
import { User } from '@/types/User'

import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import Comments from '../Comments/Comments'
import { useStyles } from './ArtModal.styles'
interface ArtModalProps {
	onClose: () => void
	art: Art
	user: User | null
}
const ArtModal = ({ user, onClose, art }: ArtModalProps) => {
	const styles = useStyles()
	const allowedSymbols = 70
	const [likes, setLikes] = useState<string[]>(art.likes)

	const handleClose = () => {
		onClose()
	}
	const BADGE_INVISIBILITY_LIMIT = 0

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
		<Dialog className={styles.artModalContainer} open onClose={handleClose}>
			<DialogTitle className={styles.artModalTitle} id='art-modal-title'>
				<Box>
					{trimString(art.name, allowedSymbols)}
					<IconButton
						id={art.uid}
						className={styles.artModalButton}
						size='small'
						onClick={handleClickLike(art.likes)}
					>
						<Badge
							className={styles.badge}
							badgeContent={art.likes.length}
							color='secondary'
							invisible={art.likes.length <= BADGE_INVISIBILITY_LIMIT}
						>
							{renderLikeIcon(likes)}
						</Badge>
					</IconButton>
				</Box>
				<IconButton aria-label='close' className={styles.artModalCloseButton} onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent className={styles.artModalContent}>
				<Grid container spacing={3} pt={1} justifyContent='center'>
					<Grid
						item
						xs={12}
						textAlign='center'
						sx={{
							filter: `brightness(${art.customized.brightness}%) contrast(${art.customized.contrast}%)`,
						}}
					>
						<img src={art.artURL} className={styles.artModalImage} alt={art.name} />
					</Grid>
					<Grid item xs={10}>
						<Typography
							variant='caption'
							fontStyle='italic'
							color='secondary.main'
							whiteSpace='pre-line'
						>
							{art.description}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Comments currentArt={art} />
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default ArtModal
