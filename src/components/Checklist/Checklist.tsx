import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

const Checklist = ({
	checklist,
	activeStep,
}: {
	checklist: { label: string; checked: boolean }[]
	activeStep: number
}) => {
	const increasedIndex = 1

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant='body2'>Checklist step {activeStep + increasedIndex}</Typography>
			</Grid>
			<Grid item xs={12}>
				<List dense>
					{checklist.map((item) => (
						<ListItem
							key={item.label}
							disablePadding
						>
							<ListItemText id={item.label}>
								<Typography
									variant='subtitle2'
									sx={{ textDecoration: item.checked ? 'line-through 2px red' : 'none' }}
								>
									{item.label}
								</Typography>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	)
}

export default Checklist