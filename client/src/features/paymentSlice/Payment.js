import { createSlice } from '@reduxjs/toolkit'
// import { cartAction } from './cartActions';

const initialState = {
    step:0,
}

const paymentSlice = createSlice ( {
                                    name : 'payment' ,
                                    initialState ,
                                    reducers : {
                                        changeStep : ( state , action ) => {
                                            state.step = action.payload
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { changeStep } = paymentSlice.actions;
export default paymentSlice.reducer;