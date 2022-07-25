import { useDispatch , useSelector } from "react-redux";
import { isAuth } from "./auth";
import { orderPlaced } from "../features/paymentSlice/Payment";


export const lengthOfCart = async()=>{
    if(localStorage.getItem('cart')){
        return JSON.parse(localStorage.getItem('cart')).length;
    }
    return 0;
}
export const PlaceOrder = async () => {

}