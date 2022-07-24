import React from 'react';
import emptyCart from './emptyCart.png';
import { Typography } from "@mui/material";
function EmptyCart ( props ) {
    return (
        <>
        <img src={emptyCart} alt='EmptyCart.png' width='350'/>
        <Typography variant='h6' color='darkred' fontFamily='poppins' align='center'>
            Your Cart is currently empty.
        </Typography>
        </>
    );
}

export default EmptyCart;