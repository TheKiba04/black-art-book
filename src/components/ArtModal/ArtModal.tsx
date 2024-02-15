import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { ALLOWED_MODAL_TITLE_LENGTH } from '@/constants/common'
import { trimString } from '@/helpers/common'
import useUser from '@/hooks/useUser'
import Art from '@/types/Art'

import Comments from '@components/Comments/Comments'
import LikeButton from '@components/LikeButton/LikeButton'

import CloseIcon from '@mui/icons-material/Close'

import { useStyles } from './ArtModal.styles'
interface ArtModalProps {
	onClose: () => void
	art: Art
}

const ArtModal = ({ onClose, art }: ArtModalProps) => {
	const styles = useStyles()

	const { user } = useUser()


	const handleClose = () => {
		onClose()
	}

	return (
		<Dialog className={styles.artModalContainer} open onClose={handleClose}>
			<DialogTitle className={styles.artModalTitle} id='art-modal-title'>
				<Box>
					{trimString(art.name, ALLOWED_MODAL_TITLE_LENGTH)}
					<LikeButton currentUser={user} artLikes={art.likes} />
				</Box>
				<IconButton aria-label='close' className={styles.artModalCloseButton} onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent className={styles.artModalContent}>
				<Grid container spacing={3} className={styles.artModalContentWrapper}>
					<Grid
						item
						xs={12}
						className={styles.artModalImageContainer}
						sx={{
							filter: `brightness(${art.customized.brightness}%) contrast(${art.customized.contrast}%)`,
						}}
					>
						<img src={art.artURL} className={styles.artModalImage} alt={art.name} />
					</Grid>
					<Grid item xs={10}>
						<Typography
							variant='caption'
							className={styles.artModalDescription}
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
