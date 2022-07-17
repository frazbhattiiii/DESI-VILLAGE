import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice/user'
import cartReducer from '../features/cartSlice/cart'
const store = configureStore({
    reducer: {
        user: userReducer,
        cart:cartReducer
    }
})
export default store