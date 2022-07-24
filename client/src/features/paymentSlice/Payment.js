import { createSlice } from '@reduxjs/toolkit'
// import { cartAction } from './cartActions';

const initialState = {
    step:0,
    userDetails: {},
    paymentStatus: false,
}

const paymentSlice = createSlice ( {
                                    name : 'payment' ,
                                    initialState ,
                                    reducers : {
                                        changeStep : ( state , action ) => {
                                            state.step = action.payload
                                        },
                                        addUserDetails: ( state , action ) => {
                                            state.userDetails = action.payload
                                        },
                                        changePaymentStatus: ( state , action ) => {
                                            state.paymentStatus = action.payload
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { changeStep,addUserDetails,changePaymentStatus} = paymentSlice.actions;
export default paymentSlice.reducer;