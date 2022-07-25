import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { openCart } from "../../features/cartSlice/cart";
import { isAuth } from "../../utils/auth";
import { addOrder } from "../../features/cartSlice/cartActions";
import { changeStep } from "../../features/paymentSlice/Payment";

function Loader ( props ) {
    const dispatch = useDispatch();
    const { cartItems , cartTotal } = useSelector ( state => state.cart );
    const { userDetails } = useSelector ( state => state.payment );
        dispatch(openCart());
    // dispatch(openCart());
    setTimeout(() => {

    }, 3000);
    return (
        <>
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>

        </>
    );
}

export default Loader;