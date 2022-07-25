import React from 'react';
import { InputAdornment , TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddToCart from "./AddToCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredItems } from '../../features/cartSlice/cart'

function SearchBar ( props ) {
    const dispatch = useDispatch()
    const [search, setSearch] = React.useState('')
    const { filter } = useSelector(state => state.cart)  
    React.useEffect(() => {
        dispatch(setFilteredItems({ search, filter }))
    }, [search])
    return (
        <>
            <TextField value={search} onChange={(e) => setSearch(e.target.value)} id="outlined-basic"  variant="filled" fullWidth  size = 'medium' InputProps={{
                style: {fontSize: 18,
                fontFamily: 'Poppins',
                    fontStyle:'italic',
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <Button
                            variant='contained'
                            color='error'
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </InputAdornment>
                ),
            }} autoFocus={false}
            sx={{
                backgroundColor:"white",
                borderRadius: ".75rem",
                width: {
                    xs: '18rem',
                    sm: '22rem'
                },
                border: "1px solid #e0e0e0",

            }}/>

        </>
    );
}

export default SearchBar;