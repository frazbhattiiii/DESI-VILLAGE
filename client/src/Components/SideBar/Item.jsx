import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
// import IncrementButton from "./IncrementButton";
import {useSelector} from "react-redux";

const CartItem = ({ id, title, removeItemFromCart }) => {

    const { cartItems } = useSelector(state => state.cart);
    if(!cartItems[0]) return null;
    const {name,price,size,quantity,image,miniDescription} = cartItems[0];
    const imgPath = `/assets/img/${id}.jpg`;
    const handleRemoveItem = () => removeItemFromCart(id);

    return (
        <>
            {quantity>0?
            <Grid container gap>
                <Grid
                    item
                    xs={11}
                    sm={2}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <Box  alt={id}
                         component="img"
                         sx={{
                             height: 90,
                             width: 130,
                             marginLeft:{md: '4rem', xs: '4rem'},
                         }}
                          src={`${process.env.REACT_APP_URL}/image/${image}`}/>
                    <Typography variant='h7'  fontWeight='500' sx={{marginLeft:{md:'3.5rem',xl:'3rem',sm:"2rem",xs:"2.5rem"}}}>{name}</Typography>
                    <Typography variant='subtitle2' fontSize='.55rem' sx={{
                        marginLeft: { md:'3rem',xl:'3rem',sm:"2rem",xs:"2rem" }
                    }}>{size}</Typography>
                </Grid>

                <Grid
                    item
                    xs={11}
                    sm={4.5}
                    md={4}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <Box>
                        <FormHelperText sx={{
                            fontSize:'.65rem',
                            ml:{md:8,xs:4}
                        }}>Item Price</FormHelperText>
                        <Typography variant='inherit' sx={{
                            ml:{md:8,xs:4},
                        }}>{`$${price}`}</Typography>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={16}
                    sm={1}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <FormHelperText sx={{
                        mx:2,
                        fontSize:'.65rem',
                    }}>Quantity </FormHelperText>

                    <Typography variant='inherit'>{quantity}</Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={2}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <FormHelperText>Subtotal </FormHelperText>
                    <Typography variant='inherit'>
                        ${(price) * (quantity)}
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={1}
                    md={1}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <Tooltip title='Remove Item' placement='top'>
                        <IconButton onClick={handleRemoveItem}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>:null}
        </>
    );
};

export default CartItem;