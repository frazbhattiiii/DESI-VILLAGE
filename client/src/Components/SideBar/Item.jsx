import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import IncrementButton from "./IncrementButton";

const CartItem = ({ id, title, price, quantity, removeItemFromCart }) => {
    const imgPath = `/assets/img/${id}.jpg`;
    const handleRemoveItem = () => removeItemFromCart(id);

    return (
        <>
            <Grid container gap>
                <Grid
                    item

                    xs={14}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <img src='../images/pizza.jpg' alt={id} height='90' width='130' style={{
                        marginLeft:'1.5rem'
                    }}/>

                    <Typography variant='h7'  fontWeight='500' sx={{marginLeft:'1.5rem'}}>Home Made Pizza</Typography>
                    <Typography variant='description' fontSize='.55rem' sx={{marginLeft:'1.5rem'}}>A Pizza which is cooked by the best one in the town</Typography>
                </Grid>

                <Grid
                    item
                    xs={14}
                    sm={3}
                    md={4}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <Box>
                        <FormHelperText sx={{
                            fontSize:'.65rem',
                            ml:2,
                        }}>Item Price</FormHelperText>
                        <Typography variant='inherit'>{'$0.0'}</Typography>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
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
                    <IncrementButton />
                    <Typography variant='inherit'>{quantity}</Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <FormHelperText>Subtotal </FormHelperText>
                    <Typography variant='inherit'>
                        {'$0.0'}
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={2}
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
            </Grid>
        </>
    );
};

export default CartItem;