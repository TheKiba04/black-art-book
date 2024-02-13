import moment from 'moment'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { RESOURCE_NAME } from '@/constants/common'

const Copyright = () => (
	<Typography variant='body1' color='text.secondary' align='center'>
		{'Copyright © '}
		<Link color='inherit' href='/'>
			{RESOURCE_NAME}
		</Link>{' '}
		{moment().format('YYYY')}
		{'.'}
	</Typography>
)

export default Copyright
