import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { useStyles } from './Heading.styles'

const Heading = () => {
	const styles = useStyles()

	return (
		<Grid
			className={styles.headingContainer}
			container
			spacing={2}
			justifyContent='space-between'
			alignItems='center'
		>
			<Grid item>
				<Typography className={styles.slideInTl} variant='h1'>
					Black
				</Typography>
				<Typography className={styles.slideInLeft} variant='h1' color='secondary.dark'>
					Black
				</Typography>
				<Typography className={styles.slideInBl} variant='h1'>
					Black
				</Typography>
			</Grid>
			<Grid item>
				<Typography className={styles.slideInTop} variant='h1'>
					ART
				</Typography>
				<Typography className='' variant='h1' color='secondary.dark'>
					ART
				</Typography>
				<Typography className={styles.slideInBottom} variant='h1'>
					ART
				</Typography>
			</Grid>
			<Grid item>
				<Typography className={styles.slideInTr} variant='h1'>
					Book
				</Typography>
				<Typography className={styles.slideInRight} variant='h1' color='secondary.dark'>
					Book
				</Typography>
				<Typography className={styles.slideInBr} variant='h1'>
					Book
				</Typography>
			</Grid>
			<Grid item xs={12} className={styles.headingSubtitle}>
				<Typography variant='h6'>
					- Unleash the power of simplicity in black and white creativity.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Button className={styles.headingButton}>
					<Typography variant='h6'>Get Started</Typography>
				</Button>
			</Grid>
		</Grid>
	)
}

export default Heading
