import React from 'react';
import MenuCard from "./MenuCard";
import {Grid,Box} from '@mui/material';
import foodItem from '../../Data/item';
function MenuCardList ( props ) {

    return (
        <>
            <Box sx={{
                margin:'2rem 0 2rem 8rem',

            }}>
            <Grid container spacing={4} >
                {foodItem.map((item,index)=>{
                    return (
                        <Grid item key={index}>
                            <MenuCard item={item}/>
                        </Grid>
                    )
                }
                )}


            </Grid>
            </Box>

        </>
    );
}

export default MenuCardList;