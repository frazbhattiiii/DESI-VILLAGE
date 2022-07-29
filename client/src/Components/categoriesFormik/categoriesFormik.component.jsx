import { SecondaryHeading, TertiaryHeading } from "../../abstracts/headings"
import {
    TextField,
    Button
} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Container } from './categoriesFormik.styles';
import { useState } from "react";

export const CategoriesFormikComponent = ({ defaultFields, handleFormFiedlds }) => {
    const [formValues, setFormValues] = useState([{ size: "", price: "", units: "" }])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { size: "", price: "", units: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
        handleFormFiedlds({ sizes: formValues })
    }

    return (
        <Container onSubmit={handleSubmit}>
            <SecondaryHeading>Categories</SecondaryHeading>
            {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                    <TextField id="size"
                        name="size"
                        label="Name"
                        variant="outlined"
                        value={element.size || ""}
                        onChange={e => handleChange(index, e)}
                        required
                    />
                    <TextField
                        id="price"
                        name="price"
                        label="Price"
                        type={`number`}
                        variant="outlined"
                        value={element.price || ""}
                        onChange={e => handleChange(index, e)}
                        required
                    />
                    <TextField
                        id="units"
                        name="units"
                        label="Units"
                        variant="outlined"
                        value={element.units || ""}
                        onChange={e => handleChange(index, e)}
                        required
                    />
                    {
                        index ?
                            <Button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</Button>
                            : null
                    }
                </div>
            ))}
            <TertiaryHeading>Add Category</TertiaryHeading>
            <AddCircleIcon
                sx={{ fontSize: 35, marginLeft: 1, marginBottom: -1 }}
                onClick={() => addFormFields()}
            />
            <br />
            <Button variant="outlined" type='submit'>Next</Button>
        </Container>
    );
}