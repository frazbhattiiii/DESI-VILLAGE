import React from 'react';
import { Typography,Box } from "@mui/material";

function FurtherDetails ( props ) {
    console.log(props.right)
    return (
        <>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                gap:'4rem',
                mt:'.5rem',
            }} >

                <Typography variant='body2' color='yellowgreen' fontFamily='poppins'>
                    {props.left}
                </Typography>
                <Typography variant='body2' color='mediumvioletred' fontFamily='poppins'>
                    {props.right===false?'No':props.right}
                    {props.right===true?'Yes':''}
                </Typography>
            </Box>
        </>
    );
}

export default FurtherDetails;