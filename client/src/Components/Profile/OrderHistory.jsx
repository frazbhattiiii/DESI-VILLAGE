import React from "react";
import { Typography , Grid } from "@mui/material";
import Card from "@mui/joy/Card";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";
import EmptyCart from "../SideBar/emptyCart"

function OrderHistory () {
    const { totalItems } = useSelector ( ( state ) => state.order );
    if(totalItems.length !== 0) { 
    return (
        <>
            { totalItems.length > 0 ? (
                <>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={ {
                            fontWeight : "bold" ,
                            mx : 5 ,
                            fontFamily : "Arial" ,
                            color : "#1ac073" ,
                        } }
                    >
                        Order History
                    </Typography>
                    { totalItems.map ( ( item , index ) => (
                        <Card
                            variant="outlined"
                            sx={ {
                                maxWidth : {
                                    xs : "53rem" ,
                                    sm : "54rem" ,
                                    md : "55rem" ,
                                    lg : "56rem" ,
                                    xl : "57rem" ,
                                } ,
                                borderColor : "#ccf0d5" ,
                                cursor : "pointer" ,
                                marginBottom : "1rem" ,
                            } }
                        >
                            <Grid
                                sx={ {
                                    display : "flex" ,
                                    justifyContent : "center" ,
                                    gap : 5.0 ,
                                    flexWrap : "wrap" ,
                                } }
                            >
                                <OrderCard cartItems={ item.cartItems }/>
                            </Grid>
                            <Grid
                                sx={ {
                                    display : "flex" ,
                                    marginTop : "0.5rem" ,
                                    justifyContent : "right" ,
                                } }
                            >

                                <Typography
                                    variant="h7"
                                    align="center"
                                    sx={ {
                                        fontWeight : "bold" ,
                                        mx : 5 ,
                                        fontFamily : "Arial" ,
                                        color : "black" ,
                                        float : "right" ,
                                    } }
                                >
                                    ${ item.cartTotal }
                                </Typography>
                                <Typography
                                    variant="h7"
                                    align="center"
                                    sx={ {
                                        fontWeight : "bold" ,
                                        mx : 5 ,
                                        fontFamily : "Arial" ,
                                        color : "#1ac073" ,
                                        float : "right" ,
                                    } }
                                >
                                    { item.orderDelivered ? "Delivered" : "Pending" }
                                </Typography>
                            </Grid>
                        </Card>
                    ) ) }
                </> ): null } 
        </>
    );

}
else{
    return <><EmptyCart text='Place an order now and your orders will show here! Happy Eating 🍔'/></>
}
}

export default OrderHistory;
