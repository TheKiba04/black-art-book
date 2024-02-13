import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import moment from 'moment'

const Copyright = () => (
	<Typography variant='body1' color='text.secondary' align='center'>
		{'Copyright © '}
		<Link color='inherit' href='/'>
			Your Website
		</Link>{' '}
		{moment().format('YYYY')}
		{'.'}
	</Typography>
)

export default Copyright
