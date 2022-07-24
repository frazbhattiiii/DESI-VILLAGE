import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { openCart } from "../../features/cartSlice/cart";

function Loader ( props ) {
    const dispatch = useDispatch();
    console.log("loader")
        dispatch(openCart());
    // dispatch(openCart());
    return (
        <>
        Loading...
        </>
    );
}

export default Loader;