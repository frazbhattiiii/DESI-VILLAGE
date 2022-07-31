import React, { Fragment, useState } from "react";
import { UploadButton } from "../../abstracts/buttons";
import { SecondaryHeading } from "../../abstracts/headings";
import { Conatiner } from "./image-upload.styles";
import { Button } from "@mui/material";

const ImageUpload = ({ handleFormFiedlds, setFlags }) => {
  const hiddenFileInput = React.useRef(null);
  const [imgs, setImgs] = useState({});

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    const images = [];
    for (let i = 0; i < fileUploaded.length && i < 4; i++) {
      const formData = new FormData();
      formData.append(`image_${i}`, fileUploaded[i]);
      images.push(formData);
    }
    setImgs({ files: images });
  };
  const handleSubmit = () => {
    handleFormFiedlds(imgs);
    setFlags({
      image: false,
      name: true,
      categories: false,
      finish: false,
    });
  };
  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        rowGap: ".62rem",
      }}
    >
      <Conatiner>
        <SecondaryHeading>Select Images to Upload</SecondaryHeading>
        <UploadButton onClick={handleClick}>Upload Image</UploadButton>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* {imgs.file &&
            imgs.file.map((img, id) => (
              <img
                key={id}
                alt="img"
                style={{ width: "20%" }}
                src={`${URL.createObjectURL(img)}`}
              />
            ))} */}
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </Conatiner>
      <Button
        variant="outlined"
        style={{
          width: "fit-content",
          padding: ".3rem .62rem",
          fontSize: ".75rem",
          alignSelf: "flex-end",
        }}
        type="submit"
        onClick={handleSubmit}
      >
        Next
      </Button>
    </div>
  );
};
export default ImageUpload;
