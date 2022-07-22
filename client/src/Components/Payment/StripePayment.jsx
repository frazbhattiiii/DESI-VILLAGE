import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const handleToken =(token)=>{
    alert("Payment Successful");
}

function StripePayment ( props ) {
    return (
        <StripeCheckout token={handleToken} stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
        label='Pay Now'
        Name='Pay with Credit Card'
        billingAddress
        shippingAddress
                        amount={props.amount}
                        description={`Your total price is ${props.amount}`}

        />
    );
}

export default StripePayment;