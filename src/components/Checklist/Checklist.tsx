import React from 'react'

// import Checkbox from '@mui/material/Checkbox'
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
	// const restructedList = checklist.map((item) => ({
	// 	label: item,
	// 	checked: false,
	// }))

	// const [checked, setChecked] = React.useState([1])

	// const handleToggle = (value: number) => () => {
	// 	const currentIndex = checked.indexOf(value)
	// 	const newChecked = [...checked]

	// 	if (currentIndex === -1) {
	// 		newChecked.push(value)
	// 	} else {
	// 		newChecked.splice(currentIndex, 1)
	// 	}

	// 	setChecked(newChecked)
	// }

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
							// secondaryAction={
							// 	<Checkbox
							// 		edge='end'
							// 		onChange={handleToggle(value)}
							// 		checked={checked.indexOf(value) !== -1}
							// 		inputProps={{ 'aria-labelledby': labelId }}
							// 	/>
							// }
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

{
	/* <ol>
				<li style={{ padding: '10px' }}>
					<ul>
						<li>
							<del>How do you name your art?</del>
						</li>
						<li style={{ textDecoration: yes ? 'line-through black 2px' : 'none' }}>
							How do you describe your art?
						</li>
						<li>How do you categorize your art?</li>
						<li>How do you share your art?</li>
					</ul>
				</li>
				<li style={{ padding: '10px' }}>
					<ul>
						<li>Upload your art</li>
						<li>Crop your art</li>
						<li>Edit your art(add constrast or bright)</li>
						<li>Preview your art</li>
					</ul>
				</li>
				<li style={{ padding: '10px' }}>
					<ul>
						<li>Do you want to add metadata?</li>
						<li>Do you want to add hashtags?</li>
						<li>Do you want to add location?</li>
						<li>Do you want to add date?</li>
					</ul>
				</li>
			</ol> */
}
