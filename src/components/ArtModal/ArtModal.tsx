import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { trimString } from '@/helpers/common'
import { Art } from '@/types/Art'

import CloseIcon from '@mui/icons-material/Close'

import Comments from '../Comments/Comments'
import { useStyles } from './ArtModal.styles'
interface ArtModalProps {
	onClose: () => void
	art: Art
}
const ArtModal = ({ onClose, art }: ArtModalProps) => {
	const styles = useStyles()
	const allowedSymbols = 70
	const handleClose = () => {
		onClose()
	}

	return (
		<Dialog className={styles.artModalContainer} open onClose={handleClose}>
			<DialogTitle className={styles.artModalTitle} id='art-modal-title'>
				{trimString(art.name, allowedSymbols)}
				<IconButton aria-label='close' className={styles.artModalCloseButton} onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent className={styles.artModalContent}>
				<Grid container spacing={3} pt={1} justifyContent='center'>
					<Grid item textAlign='center'>
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
