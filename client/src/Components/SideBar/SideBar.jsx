import * as React from 'react';
import {useState}from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useContext , Fragment } from 'react';
import { ClickAwayListener } from '@mui/base';
import { Link } from 'react-router-dom';

import CartItem from './Item';
import EmptyCart from '../Cart/EmptyCart';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GoBackBtn from '../Buttons/GoBackBtn';
import { useDispatch , useSelector } from "react-redux";
import { closeCart } from "../../features/cartSlice/cart";

export default function SideBar (props) {
    const [ state , setState ] = React.useState ( {
                                                      right : true ,
                                                  } );
    const dispatch = useDispatch();
    const {open} = useSelector(state=>state.cart);
    const toggleDrawer = ( anchor ,open ) => ( event ) => {
        dispatch(closeCart())
        if (
            event &&
            event.type === 'keydown' &&
            (
                event.key === 'Tab' || event.key === 'Shift'
            )

        ) {
            console.log("some state"+ open)
            return;
        }

        setState ( { ... state , [ anchor ] : open } );
    };
    const list = ( anchor ) => (
        <Box
            sx={ { width : anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 } }
            role="presentation"
            // onClick={ toggleDrawer ( anchor , false ) }
            // onKeyDown={ toggleDrawer ( anchor , false ) }
        >

            <h1 style={ {
                marginLeft : '2rem' ,
                color : "#1ac073" ,
            } }>Your Items</h1>
            <hr style={ {
                marginLeft : '2rem'
            } }/>

            <br/>
            <>
                <Container className='animate__animated animate__fadeIn'>
                    <Fragment key=''>
                        <CartItem/>
                        <Divider variant='middle' sx={ { my : 3 } }/>
                    </Fragment>
                    {/*))}*/ }
                </Container>

                <Typography
                    variant='h5'
                    align='right'
                    sx={ {
                        fontWeight : 'bold' ,
                        mx : 7 ,
                    } }
                    className='animate__animated animate__fadeInUp'
                >
                    Total: $0.00
                    {/*Total: {'$' + totalCartPrice().toFixed(2)}*/ }
                </Typography>

                <Box display='flex' gap justifyContent={ 'center' } my>
                    <Button
                        variant='contained'
                        color='error'
                        component={ Link }
                        to='/cart'
                        sx={ {
                            backgroundColor : "#1ac073" ,
                        } }

                        startIcon={ <ShoppingCartCheckoutIcon/> }
                        onClick={()=>dispatch(closeCart())}
                    >
                        Proceed to checkout
                    </Button>
                </Box>

                <GoBackBtn/>
            </>

            <Divider/>
        </Box>
    );

    return (
        <div>
            {open?
            <>
                {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/

                <SwipeableDrawer
                    anchor='right'
                    open={ props.open }
                    onClose={ toggleDrawer ( 'right' , false ) }
                    onOpen={ toggleDrawer ( 'right' , true ) }
                >
                    { list ( 'right' ) }
                </SwipeableDrawer>}

            </>:null}

        </div>
    );
}
