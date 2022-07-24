import React from 'react';
import PaymentDialogue from "./PaymentDialogue";
import { useSelector } from "react-redux";

function Payment ( props ) {
    const {change} = useSelector(state => state.cart);
    console.log("From Payment")
    return (
        <>
        <PaymentDialogue />
        </>
    );
}

export default Payment;