import { PrimaryHeading } from "../../../abstracts/headings"
import { CreateMealContainer, FormikContainer } from "./create-meal.style"
import { NameFormikComponent } from "../../../Components/nameFormik/name-formik.component";

import { useEffect, useState } from "react";
import ImageUpload from "../../../Components/image-upload/image-upload.component";
import { CategoriesFormikComponent } from "../../../Components/categoriesFormik/categoriesFormik.component";
import { Button } from "@mui/material";
export const CreatMeal = () => {
    const defaultFields = {
        name: "",
        price: '',
        info: "",
        description: "",
        delivery: false,
        imageURL: [],
        sizes: [],
        timeForDelivery: "",
        speciality: "",
        tags: []
    }
    const [formFields, setFormFields] = useState(defaultFields)
    useEffect(()=>{
        console.log(formFields)
    },[formFields])
    const handleFormFiedlds = (values)=>{
        setFormFields({...formFields,...values})
    }
    const finishForm = ()=>{
        if(formFields.timeForDelivery!==""){
            setFormFields({...formFields,timeForDelivery:parseInt(formFields.timeForDelivery),delivery:true})    
        }else{
            setFormFields({...formFields,delivery:false})
        }
        
    }
    return (
        <CreateMealContainer>
            <PrimaryHeading>Main Title</PrimaryHeading>
                <ImageUpload handleFormFiedlds={handleFormFiedlds}/>
                <NameFormikComponent handleFormFiedlds={handleFormFiedlds} defaultFields={defaultFields}/>
                <CategoriesFormikComponent handleFormFiedlds={handleFormFiedlds} defaultFields={defaultFields}/>
                <Button variant="outlined" onClick={finishForm}>Finish</Button>
        </CreateMealContainer>
    )
}