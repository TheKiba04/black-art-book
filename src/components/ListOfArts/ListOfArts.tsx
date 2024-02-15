import { useState } from 'react'

import { isEmpty, map } from 'lodash'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Art from '@/types/Art'

import ArtCard from '@components/ArtCard/ArtCard'
import ArtModal from '@components/ArtModal/ArtModal'

import { useStyles } from './ListOfArts.styles'

interface ListOfArtsProps {
	title: string
	list: Art[] | []
	isPrivate?: boolean
}

const ListOfArts = ({ title, list, isPrivate }: ListOfArtsProps) => {
	const styles = useStyles()

	const [selectedArt, setSelectedArt] = useState<Art | null>(null)

	const handleSelectArt = (art: Art) => {
		setSelectedArt(art)
	}

	const handleClose = () => {
		setSelectedArt(null)
	}

	return (
		<>
			<Grid container spacing={4} className={styles.listContainer}>
				<Grid item xs={12} className={styles.listTitleContainer}>
					<Typography variant='h5' className={styles.listTitle}>
						{title}
					</Typography>
				</Grid>
				{isEmpty(list) && (
					<Grid item xs={12} className={styles.emptyListContainer}>
						<Typography variant='h5' className={styles.emptyListTitle}>
							There are no arts yet
						</Typography>
					</Grid>
				)}
				{map(list, (art) => (
					<ArtCard key={art.uid} art={art} isPrivate={isPrivate} onClick={handleSelectArt} />
				))}
			</Grid>
			{selectedArt && <ArtModal art={selectedArt} onClose={handleClose} />}
		</>
	)
}

export default ListOfArts
