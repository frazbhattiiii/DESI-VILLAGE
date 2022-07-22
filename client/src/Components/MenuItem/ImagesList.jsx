import React from 'react';
import { Grid , ImageListItem,ImageList } from "@mui/material";


function ImagesList ( props ) {
    const image = props.images;
    return (
        <Grid sx={{
            mt:{
                xs:'2rem',
                sm:'2rem',
                md:'-3rem',
                lg:'-3rem',
                xl:'-3rem',
            },
            ml:'1.5rem',
        }}>
            <ImageList sx={{ width: 450, height: 230 ,borderRadius:'2rem'}} cols={3} rowHeight={164}>
                <ImageListItem>
                    <img src={image} alt='pizza image'  />
                </ImageListItem>
                <ImageListItem>
                    <img src={image} alt='pizza image'  />
                </ImageListItem>
                <ImageListItem>
                    <img src={image} alt='pizza image'  />
                </ImageListItem>
            </ImageList>

        </Grid>
    );
}

export default ImagesList;