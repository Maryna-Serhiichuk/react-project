import React from 'react'
import {Formik, Field} from 'formik'

const AddPostsForm = (props) =>{
	return (
		<Formik
			initialValues={{
				title: '',
				text: '',
			}}
			onSubmit={ (value, onSubmitProps) => {
				if(value.title && value.text){
					props.addPost(value.title, value.text)
				}
				onSubmitProps.setSubmitting(false)
				onSubmitProps.resetForm()
			}}
			validate={(value) => {
				// console.log(value)
			}}

		>
			{({values, handleSubmit, handleChange, resetForm})=> (

				<form onSubmit={handleSubmit}>
					<Field 
						name='title' 
						values={values.title}
						onChange={handleChange}
						placeholder='title'
					/>
					<Field 
						name='text' 
						values={values.text}
						onChange={handleChange}
						placeholder='text'
						as='textarea'
					/>

					<button type='submit'>Submit</button>

				</form>

			)}
		</Formik>
	)
}

export default AddPostsForm