import { createSlice } from '@reduxjs/toolkit'
// import { cartAction } from './cartActions';

const initialState = {
    open:false,
}

const cartSlice = createSlice ( {
                                    name : 'cartOpen' ,
                                    initialState ,
                                    reducers : {
                                        openCart : ( state , action ) => {
                                            state.open = true
                                        } ,
                                        closeCart : ( state , action ) => {
                                            state.open = false
                                        } ,
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { openCart,closeCart } = cartSlice.actions;
export default cartSlice.reducer;