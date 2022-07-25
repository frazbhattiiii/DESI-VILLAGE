import React from 'react';
import PaymentDialogue from "./PaymentDialogue";
import { useDispatch , useSelector } from "react-redux";
import { isAuth } from "../../utils/auth";
import { addOrder } from "../../features/cartSlice/cartActions";
import { changeStep } from "../../features/paymentSlice/Payment";

function Payment ( props ) {
    return (
        <>
        <PaymentDialogue />
        </>
    );
}

export default Payment;