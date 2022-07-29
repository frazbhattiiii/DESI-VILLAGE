import React, { Fragment, useState } from 'react';
import { UploadButton } from '../../abstracts/buttons';
import { SecondaryHeading } from '../../abstracts/headings';
import { Conatiner } from './image-upload.styles';
import {
    Button
} from "@mui/material";


const ImageUpload = ({ handleFormFiedlds }) => {
    const hiddenFileInput = React.useRef(null);
    const [imgs, setImgs] = useState({})

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files;
        const images = []
        for (let i = 0; i < fileUploaded.length && i < 4; i++) {
            images.push(fileUploaded[i])
        }
        setImgs({ imageURL: images })
    };
    return (
        <Fragment>

            <Conatiner>
                <SecondaryHeading>Select Images to Upload</SecondaryHeading>
                <UploadButton onClick={handleClick}>Upload Image</UploadButton>
                <div>
                    {imgs.imageURL && imgs.imageURL.map((img,id) => <img key ={id}src={`${URL.createObjectURL(img)}`} />)}
                </div>

            </Conatiner>
            <Button variant="outlined" type='submit' onClick={() => { handleFormFiedlds(imgs) }}>Next</Button>
            <input type="file"
                accept="image/*"
                multiple
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </Fragment>
    );
};
export default ImageUpload;