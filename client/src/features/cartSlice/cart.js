import { createSlice } from '@reduxjs/toolkit'
import { getAllItems } from "../cartSlice/cartActions";
// import { cartAction } from './cartActions';

const initialState = {
    open:false,
    cartItems: [],
    menuItems:[],
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
                                        [ getAllItems.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null
                                        } ,
                                        [ getAllItems.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.menuItems = payload
                                            state.active = true

                                        } ,
                                        [ getAllItems.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload
                                        } ,


                                    } ,
                                } )
export const { openCart,closeCart,addToCart } = cartSlice.actions;
export default cartSlice.reducer;