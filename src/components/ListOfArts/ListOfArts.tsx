import { useState } from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { map } from 'lodash'

import ArtCard from '@/components/ArtCard/ArtCard'
import UploadArt from '@/components/UploadArt/UploadArt'
import { useAuth } from '@/hooks/useAuth'
import { Art } from '@/types/Art'

import ArtModal from '../ArtModal/ArtModal'

interface ListOfArtsProps {
	title: string
	list: Art[] | []
	personal?: boolean
	onAddArts: (art: Art) => void
}
const ListOfArts = ({ title, list, personal, onAddArts }: ListOfArtsProps) => {
	const { user } = useAuth()
	const [selectedArt, setSelectedArt] = useState<Art | null>(null)

	const handleSelectArt = (art: Art) => {
		setSelectedArt(art)
	}

	const handleClose = () => {
		setSelectedArt(null)
	}

	const renderArtModal = () => selectedArt && <ArtModal onClose={handleClose} art={selectedArt} />

	return (
		<>
			<Grid container spacing={4} pt={3}>
				<Grid item xs={12} textAlign='right' display='flex' gap={3} justifyContent='flex-end'>
					{personal && <UploadArt onAddArts={onAddArts} />}
					<Typography variant='h5' fontStyle='italic' color='secondary.main'>
						{title}
					</Typography>
				</Grid>
				{!list.length && (
					<Grid item xs={12} textAlign='center' pt={2}>
						<Typography variant='h5' fontStyle='italic' color='secondary.main'>
							There are no arts yet
						</Typography>
					</Grid>
				)}
				{map(list, (art) => (
					<ArtCard
						key={art.uid}
						art={art}
						user={user}
						isPersonal={personal}
						onClick={handleSelectArt}
					/>
				))}
			</Grid>
			{renderArtModal()}
		</>
	)
}

export default ListOfArts
