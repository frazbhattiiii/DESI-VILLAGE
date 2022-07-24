import React from 'react';
import orderConfirmation from './orderConfirmed.png';
function SuccessPayment ( props ) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="text-center">Thank you for your order!</h3>
                                        <img src={orderConfirmation} alt="orderConfirmation" className="img-fluid" width='350'/>
                                        <p className="text-center">You will receive shortly an email for confirmation</p>
                                        <p className="text-center">You can also check your order status on the <a href="/orders">Orders</a> page.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SuccessPayment;