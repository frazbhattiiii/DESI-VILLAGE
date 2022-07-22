import React from 'react';
import { InputAdornment , TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddToCart from "./AddToCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

function SearchBar ( props ) {
    return (
        <>
            <TextField id="outlined-basic"  variant="filled" fullWidth  size = 'medium' InputProps={{
                style: {fontSize: 24,
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
                width:'22rem',
                border: "1px solid #e0e0e0",

            }}/>

        </>
    );
}

export default SearchBar;