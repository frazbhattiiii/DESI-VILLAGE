import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Fragment } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import CartItem from './Item';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch , useSelector } from "react-redux";
import { calculateTotal , closeCart } from "../../features/cartSlice/cart";
import { lengthOfCart } from "../../utils";
import { getCart } from "../../features/cartSlice/cartActions";

export default function SideBar (props) {
    const [ state , setState ] = React.useState ( {
                                                      right : true ,
                                                  } );
    const dispatch = useDispatch();
    const {open,cartTotal} = useSelector(state => state.cart);
    const {quantity,itemPrice} = useSelector(state=>state.cartItem);
    const navigate = useNavigate();
    const cartLength = lengthOfCart();
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
        >

            <Typography
                variant='h4'
                sx={ {
                marginTop:'1rem',
                marginLeft : {md:'6rem',xs:'8rem' },
                    fontWeight:'600',
                color : "#1ac073" ,

            } }>Your Items</Typography>
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
                    Total: ${cartTotal.toFixed(2)}
                    {/*Total: {'$' + totalCartPrice().toFixed(2)}*/ }
                </Typography>

                <Box display='flex' gap justifyContent={ 'center' } my>
                    <Button
                        variant='contained'
                        color='error'
                        component={ Link }
                        to={cartLength > 0 ? '/cart' : '/'}
                        sx={ {
                            backgroundColor : "#1ac073" ,
                        } }

                        startIcon={ <ShoppingCartCheckoutIcon/> }
                        onClick={()=>{
                            dispatch(closeCart())
                            dispatch(getCart())
                        }}
                    >
                        {cartLength>0?'Checkout':'Empty Cart'}
                    </Button>
                </Box>
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
