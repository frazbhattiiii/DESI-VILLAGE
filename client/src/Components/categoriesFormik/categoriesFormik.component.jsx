import { SecondaryHeading, TertiaryHeading } from "../../abstracts/headings";
import { TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container } from "./categoriesFormik.styles";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
export const CategoriesFormikComponent = ({
  defaultFields,
  handleFormFiedlds,
  setFlags,
}) => {
  const [formValues, setFormValues] = useState([
    { size: "", price: "", units: "" },
  ]);
  const [tags, setTags] = useState([]);
  const objectArray = [
    { key: "Option 1" },
    { key: "Option 2" },
    { key: "Option 3" },
    { key: "Option 4" },
    { key: "Option 5" },
    { key: "Option 6" },
    { key: "Option 7" },
  ];
  const addTag = (selectedItem) => {
    setTags([...tags, selectedItem.key]);
  };
  const removeTag = (selectedItem) => {
    setTags(tags.filter((tag) => tag !== selectedItem.key));
  };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { size: "", price: "", units: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    setFlags({
      image: false,
      name: false,
      categories: false,
      finish: true,
    });
    if (tags.length > 0) {
      handleFormFiedlds({ sizes: formValues, tags: tags, category: tags[0] });
    } else {
      handleFormFiedlds({ sizes: formValues, tags: tags });
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SecondaryHeading>Tags</SecondaryHeading>
      <Multiselect
        placeholder="Select from dropdown"
        onSelect={(selectedList, selectedItem) => {
          addTag(selectedItem);
        }}
        onRemove={(selectedList, selectedItem) => {
          removeTag(selectedItem);
        }}
        style={{
          multiselectContainer: {
            width: "100%",
          },
          chips: {
            backgroundColor: "#1AC073",
            color: "#000000",
          },

          option: {
            color: "#000000",
            fontSize: ".87rem",
            fontWeight: "500",
          },
          searchBox: {
            color: "#000000",
            fontSize: ".87rem",
            fontWeight: "500",
            border: "2px solid rgba(#000000,1)",
            borderRadius: ".25rem",
            padding: "0.4rem .72rem",
          },
          inputField: {
            fontSize: ".87rem",
            fontWeight: "500",
            color: "#000000",
          },
        }}
        options={objectArray}
        selectionLimit="4"
        displayValue="key"
      />
      <SecondaryHeading>Categories</SecondaryHeading>
      {formValues.map((element, index) => (
        <div className="form-inline" key={index}>
          <TextField
            id="size"
            name="size"
            label="Name"
            variant="outlined"
            value={element.size || ""}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <TextField
            id="price"
            name="price"
            label="Price"
            type={`number`}
            variant="outlined"
            value={element.price || ""}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <TextField
            id="units"
            name="units"
            label="Units"
            variant="outlined"
            value={element.units || ""}
            onChange={(e) => handleChange(index, e)}
            required
          />
          {index ? (
            <Button
              type="button"
              className="button remove"
              onClick={() => removeFormFields(index)}
            >
              Remove
            </Button>
          ) : null}
        </div>
      ))}
      <TertiaryHeading>Add Category</TertiaryHeading>
      <AddCircleIcon
        sx={{ fontSize: 35, marginLeft: 1, marginBottom: -1 }}
        onClick={() => addFormFields()}
      />
      <br />
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
    </Container>
  );
};
