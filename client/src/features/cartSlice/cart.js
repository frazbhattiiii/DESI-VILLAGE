import { createSlice } from '@reduxjs/toolkit'
// import { cartAction } from './cartActions';

const initialState = {
    open:false,
    cartItems: [],
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
                                        },
                                        addToCart : ( state , action ) => {
                                            //To check if the item already exists in the cart
                                            const itemExists = state.cartItems.find( item => item.id === action.payload.id && item.sizeId === action.payload.sizeId )
                                            if ( itemExists ) {
                                                itemExists.quantity = action.payload.quantity
                                            } else {
                                                state.cartItems.push( action.payload )
                                            }
                                        } ,
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { openCart,closeCart,addToCart } = cartSlice.actions;
export default cartSlice.reducer;