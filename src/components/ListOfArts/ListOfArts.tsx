import { Heart, MessageSquare } from 'react-feather'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { map } from 'lodash'

import { trimString } from '@/helpers/common'
import { Art } from '@/types/Art'

import UploadArt from '../UploadArt/UploadArt'
import { useStyles } from './ListOfArts.styles'

interface ListOfArtsProps {
	title: string
	list: Art[] | []
	personal?: boolean
	onAddArts: (art: Art) => void
}
const ListOfArts = ({ title, list, personal, onAddArts }: ListOfArtsProps) => {
	const styles = useStyles()
	const allowedSymbols = 80

	return (
		<Grid container spacing={4} pt={3}>
			<Grid item xs={12} textAlign='right' display='flex' gap={3} justifyContent='flex-end'>
				{personal && <UploadArt onAddArts={onAddArts} />}
				<Typography variant='h5' fontStyle='italic' color='secondary.main'>
					{title}
				</Typography>
			</Grid>
			{!list.length && (
				<Grid item xs={12} textAlign='center'>
					<Typography variant='h5' fontStyle='italic' color='secondary.main'>
						There are no arts yet
					</Typography>
				</Grid>
			)}
			{map(list, (art, index) => (
				<Grid item key={index}>
					<Card className={styles.recentArtsCard}>
						<div>
							<CardMedia
								className={styles.recentArtsImage}
								sx={{ height: 320 }}
								image={art.artURL}
							/>
							<CardContent className={styles.recentArtsCardContent}>
								<Typography gutterBottom variant='h5' component='div'>
									{art.name}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{trimString(art.description, allowedSymbols)}
								</Typography>
							</CardContent>
						</div>
						<CardActions
							className={styles.recentArtsCardActions}
							sx={{
								justifyContent: !personal ? 'space-between' : 'flex-end',
							}}
						>
							{!personal && (
								<Typography variant='caption' color='text.secondary'>
									Author: {art.createdBy.name}
								</Typography>
							)}
							<div>
								<IconButton className={styles.recentArtsButton} size='small'>
									<Heart />
								</IconButton>
								<IconButton className={styles.recentArtsButton} size='small'>
									<MessageSquare />
								</IconButton>
							</div>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

export default ListOfArts
