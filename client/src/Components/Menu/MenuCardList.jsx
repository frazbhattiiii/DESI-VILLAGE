import React , { useEffect , useState } from 'react';
import MenuCard from "./MenuCard";
import { Grid , Box , Pagination } from '@mui/material';
import { getAllItems } from "../../features/cartSlice/cartActions";
import { setCurrentPagination } from '../../features/cartSlice/cart'
import { useDispatch , useSelector } from "react-redux";
 function MenuCardList ( props ) {
    const { 
        menuItems, 
        filteredItems,
        filter, 
        search,
        totalItems, 
        currentPagination
    } = useSelector ( state => state.cart );
    const dispatch = useDispatch ();
    let foodItems = menuItems.items;
     useEffect ( () => {
         dispatch(getAllItems());
     } , [  ] );

     return (
        <>{
            foodItems && filter == '' && search == '' && filteredItems.length == 0?
            <Box sx={ {
                margin : '2rem 0 2rem 8rem' ,

            } }>
                <Grid container spacing={ 4 }>
                    {foodItems.slice((currentPagination - 1) * 6, currentPagination * 6).map((item,index)=>{
                        return (
                            <Grid item key={index}>

                         <MenuCard item={item}/>
                      </Grid>)}
                    )}
                </Grid>
            </Box>:
            <Box sx={ {
                margin : '2rem 0 2rem 8rem',

            } }>
                <Grid container spacing={ 4 } sx={{ minHeight: '80vh' }}>
                    {filteredItems.slice((currentPagination - 1) * 6, currentPagination * 6).map((item,index)=>{
                        return (
                            <Grid item key={index}>

                         <MenuCard item={item}/>
                      </Grid>)}
                    )}


                </Grid>
            </Box>}
            <Box sx={{
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
            }}>
                <Pagination onChange={(e, pagination) => dispatch(setCurrentPagination({ pagination }))} count={Math.ceil(totalItems / 6.0)} color='secondary'/>
            </Box>

        </>
    );
}

export default MenuCardList;

    