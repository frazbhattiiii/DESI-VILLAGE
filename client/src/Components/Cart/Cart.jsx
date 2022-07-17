import { useState, Fragment } from 'react';
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
import Payment from "../Payment/Payment";
import { Stack , TextField } from "@mui/material";
import GreenButton from "../Buttons/GreenButton";
import { styled } from "@mui/system";

const StyledButton = styled(Button)`
  background-color: #1AC073;
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color: #1AC078;
  }
  &:focus {
    background-color: green;
  }
`;

const Cart = () => {
    const [showPayment, setShowPayment] = useState (false );
    console.log(showPayment)
    const redirectToPayment = () => {
        setShowPayment(true);
    }
    return (
        <>
            {!showPayment?
             <>
            <h1 style={{
             marginLeft:'2rem',
                color:"#1ac073",
            }}>Your Items</h1>
            <hr  style={{
                marginLeft:'2rem'
            }}/>

            <br />

                    <Container className='animate__animated animate__fadeIn'>
                        {/*{cart.map((item) => (*/}
                            <Fragment key=''>
                                <CartItem  />
                                <Divider variant='middle' sx={{ my: 3 }} />
                            </Fragment>
                        {/*))}*/}
                    </Container>
                <Box
                    className='animate__animated animate__fadeInUp'
                    align='right'>
                    <Typography
                        variant='h6'
                        align='right'
                        sx={{
                            fontWeight: 'bold',
                            mx:7
                        }}>
                        SubTotal: $0.00

                    </Typography>
                 <Typography align='right' sx={{
                     mx:7,
                 }} >
                     Shipping Fee: $0.00
                 </Typography>
                    <Typography align='right' sx={{
                        mx:7,
                        fontWeight:600,
                        fontSize:'1rem'
                    }} >
                        Total: $0.00
                    </Typography>
                </Box>
                    <Box display='flex' gap justifyContent={'center'} my>
                        <Button
                            variant='contained'
                            color='error'
                            // component={Link}
                            onClick={redirectToPayment}
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                            startIcon={<PointOfSaleIcon />}
                        >
                            Proceed to Payment
                        </Button>
                    </Box>
                    <Stack direction="row" sx={{
                        mx:3,
                    }}>
                        <TextField label="Code" sx={{
                            width:'20%'
                        }}/>
                        <Button
                            variant='contained'
                            color='error'
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                        >
                            Get Discount
                        </Button>
                    </Stack>
                    <GoBackBtn />
                </>:<Payment />}
        </>
    );
};

export default Cart;