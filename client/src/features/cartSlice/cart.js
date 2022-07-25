import { createSlice } from '@reduxjs/toolkit'
import { addToCart , getAllItems , getCart ,addOrder} from "../cartSlice/cartActions";
// import { cartAction } from './cartActions';

const initialState = {
    open:false,
    added:false,
    error:false,
    change:false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    menuItems:[],
    orderStatus:false,
    cartLength:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')).length:0,
    cartTotal: 0,
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
                                        handleIncrement : ( state , action ) => {

                                            state.cartItems.map( item => {
                                                if ( item.itemId === action.payload.itemId && item.itemSize === action.payload.itemSize ) {
                                                    item.itemQuantity += 1
                                                    localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                                }

                                            } )

                                        } ,
                                        handleDecrement : ( state , action ) => {
                                            state.cartItems.map( item => {
                                                if ( item.itemId === action.payload.itemId && item.itemSize === action.payload.itemSize ) {
                                                    if(item.itemQuantity<=1){
                                                        item.itemQuantity = 1
                                                        localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                                    }
                                                    else{
                                                        item.itemQuantity -= 1
                                                        localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                                    }

                                                }
                                            } )
                                        },
                                        calculateTotal : ( state , action ) => {
                                            state.cartTotal=0
                                            const cartItems= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
                                            cartItems.forEach( item => {
                                                state.cartTotal += item.itemPrice*item.itemQuantity
                                            } )
                                            if(cartItems.length===0){
                                                state.cartTotal=0
                                                state.cartLength=0
                                            }
                                        } ,
                                        setCartItems: ( state , action ) => {
                                            state.cartItems = action.payload
                                            state.cartLength = state.cartLength-1
                                        console.log(state.cartLength)
                                            if(state.cartLength===0){
                                                state.cartLength=0
                                                state.cartTotal=0
                                            }
                                            localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                        } ,
                                    } ,
                                    extraReducers : {
                                        [ getAllItems.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null

                                        } ,
                                        [ getAllItems.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.change = true
                                            state.menuItems = payload


                                        } ,
                                        [ getAllItems.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload

                                        } ,
                                        [ getCart.pending ] : ( state ) => {
                                            state.loadinng = true
                                        } ,
                                        [ getCart.fulfilled ] : ( state , { payload } ) => {

                                            state.cartItems = payload
                                            state.loading = false

                                        } ,
                                        [ getCart.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                        } ,
                                        [ addToCart.pending ] : ( state ) => {
                                            state.loading = true
                                            state.added=false
                                            state.change = false
                                            state.error = null
                                        } ,
                                        [ addToCart.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.added=true
                                            state.change=true
                                            state.cartLength=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')).length:0
                                            state.active = true
                                        } ,
                                        [ addToCart.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.added=false
                                            state.error = payload
                                            state.change=false
                                        } ,

                                        [ addOrder.fulfilled ] : ( state , { payload } ) => {
                                            state.orderStatus = true
                                            state.error = false
                                        } ,
                                        [addOrder.pending] : ( state ) => {
                                           state.orderStatus = false
                                            state.error = false
                                        } ,
                                        [addOrder.rejected] : ( state , { payload } ) => {
                                            state.error = true
                                        } ,

                                    } ,
                                } )
export const { openCart,closeCart,calculateTotal,handleIncrement,handleDecrement,setCartItems } = cartSlice.actions;
export default cartSlice.reducer;