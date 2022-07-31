import { PrimaryHeading, SecondaryHeading } from "../../../abstracts/headings";
import { CreateMealContainer } from "./create-meal.style";
import { NameFormikComponent } from "../../../Components/nameFormik/name-formik.component";
import axios from "axios";
import { isAuth } from "../../../utils/auth";
import { useEffect, useState } from "react";
import ImageUpload from "../../../Components/image-upload/image-upload.component";
import { CategoriesFormikComponent } from "../../../Components/categoriesFormik/categoriesFormik.component";
import { Button } from "@mui/material";
export const CreatMeal = () => {
  let user = null;
  isAuth() ? (user = JSON.parse(localStorage.getItem("user"))) : (user = null);
  const defaultFields = {
    name: "",
    price: "",
    info: "",
    vendor_id: `${user["_id"]}`,
    discount: 0,
    availability: true,
    freeDelivery: false,
    description: "",
    delivery: false,
    rating: 0,
    file: [],
    sizes: [],
    timeForDelivery: "",
    speciality: "",
    tags: [],
    reviews: [],
    category: "",
  };
  const [formFields, setFormFields] = useState(defaultFields);
  const [flags, setFlags] = useState({
    image: true,
    name: false,
    categories: false,
    finish: false,
  });
  useEffect(() => {
    console.log(formFields);
  }, [formFields]);
  const handleFormFiedlds = (values) => {
    setFormFields({ ...formFields, ...values });
  };
  const finishForm = async () => {
    const upload = await axios.post(
      "http://localhost:4020/food/add-item",
      formFields
    );
    console.log(upload);
  };
  return (
    <CreateMealContainer>
      <PrimaryHeading>Main Title</PrimaryHeading>
      {flags.image && (
        <ImageUpload
          handleFormFiedlds={handleFormFiedlds}
          setFlags={setFlags}
        />
      )}
      {flags.name && (
        <NameFormikComponent
          handleFormFiedlds={handleFormFiedlds}
          defaultFields={defaultFields}
          setFlags={setFlags}
        />
      )}
      {flags.categories && (
        <CategoriesFormikComponent
          handleFormFiedlds={handleFormFiedlds}
          defaultFields={defaultFields}
          setFlags={setFlags}
        />
      )}
      {flags.finish && (
        <>
          <SecondaryHeading style={{ alignSelf: "center" }}>
            Form Completed
          </SecondaryHeading>
          <Button
            variant="outlined"
            onClick={finishForm}
            style={{
              width: "60%",
              padding: ".5rem 1rem",
              fontSize: "1.2rem",
              alignSelf: "center",
            }}
          >
            Finish
          </Button>
        </>
      )}
    </CreateMealContainer>
  );
};
