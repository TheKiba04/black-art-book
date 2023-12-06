import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { User } from '@/types/User'

const Passport = ({ user }: { user: User }) => (
	<Grid container spacing={4} pt={3}>
		<Grid item xs={4} textAlign='left'>
			<CardMedia
				sx={{ height: 200, backgroundSize: 'contain', backgroundPosition: 'center' }}
				image={user.avatarURL}
			/>
		</Grid>
		<Grid item xs={7} textAlign='left'>
			<Typography variant='h5' fontStyle='italic' color='secondary.main'>
				{user.fullname}
			</Typography>
		</Grid>
		<Grid item xs={1} textAlign='left'>
			<Button variant='contained' color='secondary' onClick={() => {}}>
				Edit
			</Button>
		</Grid>
	</Grid>
)

export default Passport
