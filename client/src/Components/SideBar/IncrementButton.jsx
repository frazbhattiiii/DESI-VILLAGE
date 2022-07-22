import React,{useState} from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';

import { useDispatch , useSelector } from "react-redux";
import { handleQuantity , openCart } from "../../features/cartSlice/cartItem";

const IncrementButton = ({ stock = 0, initial = 1, onAdd }) => {
    // const { counter, increment, decrement } = useCounter(initial);
    const {quantity,size} = useSelector(state => state.cartItem);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState (quantity);
        dispatch(handleQuantity(counter));
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        counter<1?setCounter(0):setCounter(counter - 1);
        // dispatch(openCart());
    }
    const handleAddBtnClick = () => onAdd(counter);

    return (
        <Box>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems='center'
            >
                <FormControl
                    sx={{
                        m: 1,
                        width: '5ch',
                    }}
                    variant='outlined'
                >
                    <OutlinedInput
                        id='outlined-adornment-weight'
                        // endAdornment={<InputAdornment position='end'>Qty</InputAdornment>}
                        aria-describedby='outlined-weight-helper-text'
                        type='number'
                        inputProps={{
                            'aria-label': 'weight',
                            type: 'number',
                            value: quantity,
                            max: 10,
                            min: 1,
                            disabled: true,
                        }}
                        sx={{
                            width: '3.5rem',
                        }}
                    />
                    <FormHelperText id='outlined-weight-helper-text' sx={{
                        marginLeft:'.55rem'
                    }}>
                        Size:  {size}
                    </FormHelperText>
                </FormControl>
                <Stack direction={{ xs: 'row-reverse', sm: 'column' }}>
                    <IconButton
                        aria-label='addButton'
                        // disabled={stock < 1 || (counter === stock && true)}
                        onClick={increment}
                    >
                        <AddIcon />
                    </IconButton>
                    <IconButton
                        aria-label='removeButton'
                        // disabled={counter < 1 || (stock < 1 && true)}
                        onClick={decrement}
                    >
                        <RemoveIcon />
                    </IconButton>
                </Stack>
            </Box>

        </Box>
    );
};

export default IncrementButton;