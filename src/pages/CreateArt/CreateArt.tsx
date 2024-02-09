import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import { useFormik } from 'formik'

import Checklist from '@/components/Checklist/Checklist'
import CreateArtForm from '@/components/CreateArtForm/CreateArtForm'
import { merger } from '@/helpers/common'
import { createArt } from '@/helpers/database'
import { useAuth } from '@/hooks/useAuth'
import { Option } from '@/types/Common'

import checklist from '../../../checklist.json'

export interface CustomFormikValues {
	artName: string
	category: Option | null
	artDescription: string
	file: File | undefined
	cropped: boolean
	customized: { contrast: number; brightness: number }
	hashtags: Option[] | []
}

const CreateArt = () => {
	const { user } = useAuth()
	const navigate = useNavigate()

	const initialCustomizedValue = 100
	const initialFormValues = {
		artName: '',
		category: null,
		artDescription: '',
		file: undefined,
		cropped: false,
		customized: {
			contrast: initialCustomizedValue,
			brightness: initialCustomizedValue,
		},
		hashtags: [],
	}

	const handleSubmit = async (data: CustomFormikValues) => {
		if (user) {
			const newArt = await createArt(user.uid, data)

			newArt && navigate('/profile')
		}
	}

	const formik = useFormik<CustomFormikValues>({
		initialValues: initialFormValues,
		onSubmit: handleSubmit,
	})

	const ZERO = 0
	const initialStep = 0
	const [step, setStep] = useState<number>(initialStep)
	const someItemIsDirty = (items: number[]) => items.some((item) => item !== initialCustomizedValue)

	const valuesArray = [
		[
			formik.values.artName,
			formik.values.category,
			formik.values.artDescription,
			formik.values.hashtags.length > ZERO,
		],
		[
			formik.values.file,
			formik.values.cropped,
			someItemIsDirty([formik.values.customized.contrast, formik.values.customized.brightness]),
		],
	]
	const mergedChecklist = merger(checklist, valuesArray)

	return (
		<Grid container spacing={2} padding={2}>
			<Grid item xs={6}>
				<Checklist checklist={mergedChecklist[step]} activeStep={step} />
			</Grid>
			<Grid item xs={6} marginTop={4}>
				<CreateArtForm formHandler={formik} activeStep={step} onChangeStep={setStep} />
			</Grid>
		</Grid>
	)
}

export default CreateArt
