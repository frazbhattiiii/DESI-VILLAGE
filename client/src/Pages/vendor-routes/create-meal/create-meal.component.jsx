import { PrimaryHeading } from "../../../abstracts/headings"
import { CreateMealContainer, FormikContainer } from "./create-meal.style"
import { NameFormikComponent } from "../../../Components/nameFormik/name-formik.component";

import { useState } from "react";
export const CreatMeal = () => {
    const defaultFields = {
        name: "",
        price: '',
        info: "",
        description: "",
        delivery: true,
        imageURL: [],
        sizes: [],
        timeForDelivery: 0,
        reviews: [],
        speciality: "",
        tags: []
    }
    const [formFields, setFormFields] = useState(defaultFields)
    const handleFormFiedlds = (values)=>{
        setFormFields({...formFields,...values})
    }
    console.log(formFields)
    return (
        <CreateMealContainer>
            <PrimaryHeading>Main Title</PrimaryHeading>
                <NameFormikComponent handleFormFiedlds={handleFormFiedlds} defaultFields={defaultFields}/>
        </CreateMealContainer>
    )
}
{/* <Formik
                initialValues={defaultFields}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }if(!values.info){
                        errors.info = 'Required'
                    }if(!values.description){
                        errors.description = 'Required'
                    }if(!values.price){
                        errors.price='Required'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setFields({...fields,...values})
                        alert(JSON.stringify(fields, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <FormikContainer>
                        <SecondaryHeading>Name</SecondaryHeading>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </FormikContainer>
                )}
            </Formik> */}