import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import MUIStepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

import { useStyles } from './Stepper.styles'

const Stepper = ({ steps, activeStep }: { steps: string[]; activeStep: number }) => {
	const styles = useStyles()

	return (
		<Box sx={{ width: '100%' }}>
			<MUIStepper activeStep={activeStep} alternativeLabel className={styles.stepperContainer}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>
							<Typography variant='subtitle2'>{label}</Typography>
						</StepLabel>
					</Step>
				))}
			</MUIStepper>
		</Box>
	)
}

export default Stepper
