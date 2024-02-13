import { useEffect, useState } from 'react'

import Stepper from '../Stepper/Stepper'
import UploadImage from '../UploadImage/UploadImage'
import { FormikProps } from 'formik'
import { MultiValue } from 'react-select'
import AsyncCreatableSelect from 'react-select/async-creatable'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { dataURItoBlob } from '@/helpers/common'
import { createCategory, createHashTag, getCategories, getHashTags } from '@/helpers/database'
import { CustomFormikValues } from '@/pages/CreateArt/CreateArt'
import { Option } from '@/types/Common'

import { useStyles } from './CreateArtForm.styles'

const CreateArtForm = ({
	activeStep,
	formHandler,
	onChangeStep,
}: {
	activeStep: number
	formHandler: FormikProps<CustomFormikValues>
	onChangeStep: (step: number) => void
}) => {
	const styles = useStyles()

	const steps = ['Describe art', 'Upload art']

	const increasedIndex = 1

	const initialStep = 0

	const lastStep = 1

	const isFirstStep = activeStep === initialStep

	const isLastStep = activeStep === lastStep

	const initialSliderValue = 100

	const [file, setFile] = useState<File | null>(null)

	const [fileSrc, setFileSrc] = useState<string | null>(null)

	const displayLabelConditionally = (condition: number) =>
		condition !== initialSliderValue ? 'on' : 'off'

	const handleCategoryCreate = async (inputValue: string) => {
		const newCategory = await createCategory(inputValue)

		newCategory && handleCategoryChange(newCategory)
	}

	const handleCategoryChange = (values: { label: string; value: string } | null) => {
		values
			? formHandler.setFieldValue('category', { label: values.label, value: values.value })
			: formHandler.setFieldValue('category', null)
	}

	const handleHashtagCreate = async (inputValue: string) => {
		const newHashtag = await createHashTag(inputValue)

		newHashtag && handleHashtagsChange([...formHandler.values.hashtags, newHashtag])
	}

	const handleHashtagsChange = (values: MultiValue<Option>) => {
		formHandler.setFieldValue('hashtags', values)
	}

	const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement

		if (!inputElement.files) return

		setFile(inputElement.files[0])
		formHandler.setFieldValue('file', inputElement.files[0])
		formHandler.setFieldValue('cropped', false)
	}

	const handleCropImage = async (src: string, filename: string, filetype: string) => {
		const croppedBlob = dataURItoBlob(src, filetype)

		const file = new File([croppedBlob], filename, { type: filetype }) // Specify the desired file name and type

		setFile(file)
		formHandler.setFieldValue('file', file)
		formHandler.setFieldValue('cropped', true)
	}

	const handleCustomizedChange = (event: Event, value: number | number[]) => {
		const inputElement = event.target as HTMLInputElement

		if (!inputElement) return

		formHandler.setFieldValue('customized', {
			...formHandler.values.customized,
			[inputElement.name]: value as number,
		})
	}

	useEffect(() => {
		file && setFileSrc(URL.createObjectURL(file))
	}, [file])

	const handleNext = () => {
		onChangeStep(activeStep + increasedIndex)
	}

	const handleBack = () => {
		onChangeStep(activeStep - increasedIndex)
	}

	const renderStep = (activeStep: number) => {
		if (activeStep === initialStep) {
			return (
				<>
					<Grid item xs={8}>
						<TextField
							size='small'
							required
							fullWidth
							id='artName'
							label='Art name'
							name='artName'
							value={formHandler.values.artName}
							onChange={formHandler.handleChange}
						/>
					</Grid>
					<Grid item xs={4} sx={{ position: 'relative', zIndex: 100 }}>
						<AsyncCreatableSelect
							name='category'
							id='category'
							cacheOptions
							defaultOptions
							placeholder='Category'
							isClearable
							onCreateOption={handleCategoryCreate}
							loadOptions={getCategories}
							value={formHandler.values.category}
							onChange={handleCategoryChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ position: 'relative', zIndex: 50 }}>
						<AsyncCreatableSelect
							name='hashtags'
							id='hashtags'
							cacheOptions
							defaultOptions
							placeholder='Hashtags'
							isClearable
							loadOptions={getHashTags}
							value={formHandler.values.hashtags}
							onCreateOption={handleHashtagCreate}
							onChange={handleHashtagsChange}
							isMulti
						/>
					</Grid>
					<Grid item xs={12} sx={{ position: 'relative', zIndex: 1 }}>
						<TextField
							size='small'
							fullWidth
							id='artDescription'
							label='Desciption'
							name='artDescription'
							multiline
							rows={6}
							value={formHandler.values.artDescription}
							onChange={formHandler.handleChange}
						/>
					</Grid>
				</>
			)
		} else {
			return (
				<>
					<Grid item xs={12}>
						<UploadImage
							fileSrc={fileSrc}
							onUpload={handleUploadImage}
							onCrop={handleCropImage}
							className={styles.uploadImageContainer}
							style={{
								padding: '2px',
								filter: `brightness(${formHandler.values.customized.brightness}%) contrast(${formHandler.values.customized.contrast}%)`,
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography id='contrast-slider' gutterBottom>
							Contrast
						</Typography>
						<Slider
							size='small'
							color='secondary'
							min={0}
							max={200}
							valueLabelDisplay={displayLabelConditionally(formHandler.values.customized.contrast)}
							name='contrast'
							id='contrast'
							value={formHandler.values.customized.contrast}
							onChange={handleCustomizedChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography id='brightness-slider' gutterBottom>
							Brightness
						</Typography>
						<Slider
							size='small'
							color='secondary'
							min={0}
							max={200}
							valueLabelDisplay={displayLabelConditionally(
								formHandler.values.customized.brightness
							)}
							name='brightness'
							id='brightness'
							value={formHandler.values.customized.brightness}
							onChange={handleCustomizedChange}
						/>
					</Grid>
				</>
			)
		}
	}

	return (
		<Grid
			container
			spacing={2}
			className={styles.createArtFormContainer}
			component='form'
			onSubmit={formHandler.handleSubmit}
		>
			<Grid item xs={12}>
				<Stepper steps={steps} activeStep={activeStep} />
			</Grid>
			<Grid container spacing={2} item>
				{renderStep(activeStep)}
			</Grid>
			<Grid container item sx={{ position: 'relative', zIndex: 1 }}>
				<Grid item xs={4}>
					{!isFirstStep && (
						<Button color='inherit' onClick={handleBack} sx={{ mr: 1 }}>
							Back
						</Button>
					)}
				</Grid>
				<Grid item xs={4} textAlign='center'>
					{!isLastStep && (
						<Button onClick={handleNext} sx={{ mr: 1 }}>
							Next
						</Button>
					)}
				</Grid>
				<Grid item xs={4} textAlign='right'>
					<Button type='submit' color='secondary' disabled={!isLastStep} sx={{ mr: 1 }}>
						Complete
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default CreateArtForm
