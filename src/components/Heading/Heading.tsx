import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import MainButton from '@/components/Buttons/MainButton/MainButton'

import { useStyles } from './Heading.styles'

const Heading = () => {
	const styles = useStyles()
	
	return (
		<Grid className={styles.headingContainer} container spacing={2}>
			<Grid item>
				<Typography className={styles.slideInTl} variant='h1'>
					Black
				</Typography>
				<Typography className={styles.slideInLeft} variant='h1'>
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
				<Typography className={styles.center} variant='h1'>
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
				<Typography className={styles.slideInRight} variant='h1'>
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
				<MainButton />
			</Grid>
		</Grid>
	)
}

export default Heading
