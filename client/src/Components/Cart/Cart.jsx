import { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GoBackBtn from '../Buttons/GoBackBtn';

const Cart = () => {

    return (
        <>
            <h1 style={{
             marginLeft:'2rem',
                color:"#1ac073",
            }}>Your Items</h1>
            <hr  style={{
                marginLeft:'2rem'
            }}/>

            <br />
            {/*{cart.length > 0 ? (*/}
                <>
                    <Container className='animate__animated animate__fadeIn'>
                        {/*{cart.map((item) => (*/}
                            <Fragment key=''>
                                <CartItem  />
                                <Divider variant='middle' sx={{ my: 3 }} />
                            </Fragment>
                        {/*))}*/}
                    </Container>

                    <Typography
                        variant='h5'
                        align='right'
                        sx={{
                            fontWeight: 'bold',
                            mx: 7,
                        }}
                        className='animate__animated animate__fadeInUp'
                    >
                        Total: $0.00
                        {/*Total: {'$' + totalCartPrice().toFixed(2)}*/}
                    </Typography>

                    <Box display='flex' gap justifyContent={'center'} my>
                        <Button
                            variant='contained'
                            color='error'
                            component={Link}
                            to='/checkout'
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                            startIcon={<PointOfSaleIcon />}
                        >
                            Proceed to Payment
                        </Button>
                    </Box>

                    <GoBackBtn />
                </>

            {/*: (*/}
            {/*    <EmptyCart />*/}
            {/*)}*/}
        </>
    );
};

export default Cart;