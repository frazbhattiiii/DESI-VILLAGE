import React from 'react';
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch} from "react-redux";
import { openCart,addToCart } from "../../features/cartSlice/cart";
import ToastContainer from "../Toast/ToastContainer";
import {toast}from 'react-toastify';
function AddToCart ( props ) {
    const dispatch = useDispatch();
    const { product } = props;

    return (
        <>
            <ToastContainer/>

        </>
    );
}

export default AddToCart;