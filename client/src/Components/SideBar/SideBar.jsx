import * as React from 'react';
import {useState}from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Cart from "../Cart/Cart";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useContext , Fragment } from 'react';
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
    console.log(open)
    const toggleDrawer = ( anchor ,open ) => ( event ) => {
        dispatch(closeCart());
        console.log("some state"+ open)
        if (
            event &&
            event.type === 'keydown' &&
            (
                event.key === 'Tab' || event.key === 'Shift'
            )
        ) {
            return;
        }

        setState ( { ... state , [ anchor ] : open } );
    };
    const list = ( anchor ) => (
        <Box
            sx={ { width : anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 } }
            role="presentation"
            onClick={ toggleDrawer ( anchor , false ) }
            onKeyDown={ toggleDrawer ( anchor , false ) }
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
            <React.Fragment>
                {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/ }
                <SwipeableDrawer
                    anchor='right'
                    open={ props.open }
                    onClose={ toggleDrawer ( 'right' , false ) }
                    onOpen={ toggleDrawer ( 'right' , true ) }
                >
                    { list ( 'right' ) }
                </SwipeableDrawer>
            </React.Fragment>:null}

        </div>
    );
}
