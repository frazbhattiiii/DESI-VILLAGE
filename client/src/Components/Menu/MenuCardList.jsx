import React , { useEffect , useState } from 'react';
import MenuCard from "./MenuCard";
import {Grid,Box} from '@mui/material';
import { getAllItems } from "../../features/cartSlice/cartActions";
import { useDispatch , useSelector } from "react-redux";
 function MenuCardList ( props ) {
    const {menuItems} = useSelector ( state => state.cart );
    const dispatch = useDispatch ();
let foodItems = menuItems.items;
     useEffect ( () => {
         dispatch(getAllItems());
     } , [  ] );

    return (
        <>{foodItems?
            <Box sx={ {
                margin : '2rem 0 2rem 8rem' ,

            } }>
                <Grid container spacing={ 4 }>
                    {foodItems.map((item,index)=>{
                        return (
                            <Grid item key={index}>

                         <MenuCard item={item}/>
                      </Grid>)}
                    )}


                </Grid>
            </Box>:null}

        </>
    );
}

export default MenuCardList;