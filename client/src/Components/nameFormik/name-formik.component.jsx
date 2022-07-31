import * as yup from "yup";
import { SecondaryHeading } from "../../abstracts/headings";
import { NameFormikContainer } from "./name-formik.styles";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

export const NameFormikComponent = ({
  defaultFields,
  handleFormFiedlds,
  setFlags,
}) => {
  const validationSchema = yup.object({
    name: yup.string("Enter your Name").required("Name is Required"),
    price: yup.string("Enter Price").required("Price is Required"),
    info: yup.string("Enter Info").required("Info is Required"),
    description: yup
      .string("Enter Description")
      .required("Description is Required"),
    speciality: yup
      .string("Enter Speciality")
      .required("Speciality is Required"),
  });
  const formik = useFormik({
    initialValues: defaultFields,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.timeForDelivery !== "") {
        handleFormFiedlds({
          name: values.name,
          price: values.price,
          info: values.info,
          description: values.description,
          speciality: values.speciality,
          timeForDelivery: parseInt(values.timeForDelivery),
          delivery: true,
        });
      } else {
        handleFormFiedlds({
          name: values.name,
          price: values.price,
          info: values.info,
          description: values.description,
          timeForDelivery: values.timeForDelivery,
          speciality: values.speciality,
        });
      }
      setFlags({
        image: false,
        name: false,
        categories: true,
        finish: false,
      });
    },
  });

  return (
    <NameFormikContainer onSubmit={formik.handleSubmit}>
      <SecondaryHeading>Name</SecondaryHeading>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <SecondaryHeading>Info</SecondaryHeading>
      <TextField
        fullWidth
        id="info"
        name="info"
        label="Info"
        variant="outlined"
        value={formik.values.info}
        onChange={formik.handleChange}
        error={formik.touched.info && Boolean(formik.errors.info)}
        helperText={formik.touched.info && formik.errors.info}
      />
      <SecondaryHeading>Description</SecondaryHeading>
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        variant="outlined"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <SecondaryHeading>Speciality</SecondaryHeading>
      <TextField
        fullWidth
        id="speciality"
        name="speciality"
        label="Speciality"
        variant="outlined"
        value={formik.values.speciality}
        onChange={formik.handleChange}
        error={formik.touched.speciality && Boolean(formik.errors.speciality)}
        helperText={formik.touched.speciality && formik.errors.speciality}
      />
      <SecondaryHeading>Time of Delivery</SecondaryHeading>
      <TextField
        fullWidth
        id="delivery"
        name="timeForDelivery"
        label="Delivery Time"
        variant="outlined"
        type={`number`}
        value={formik.values.timeForDelivery}
        onChange={formik.handleChange}
        error={
          formik.touched.timeForDelivery &&
          Boolean(formik.errors.timeForDelivery)
        }
        helperText={
          formik.touched.timeForDelivery && formik.errors.timeForDelivery
        }
      />
      <SecondaryHeading>Price</SecondaryHeading>
      <TextField
        fullWidth
        id="price"
        name="price"
        label="Price"
        variant="outlined"
        type={`number`}
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <Button
        variant="outlined"
        type="submit"
        style={{
          width: "fit-content",
          padding: ".3rem .62rem",
          fontSize: ".75rem",
          alignSelf: "flex-end",
        }}
      >
        Next
      </Button>
    </NameFormikContainer>
  );
};
