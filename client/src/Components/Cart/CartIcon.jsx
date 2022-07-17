import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import { openCart } from "../../features/cartSlice/cart";
import Loader from "../Toast/loader";
import Tooltip from "@mui/material/Tooltip";
import SideBar from "../SideBar/SideBar";
import { useDispatch , useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function CartIcon() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const {open} = useSelector(state => state.cart);
    const redirectToCart = (page) => {
    dispatch(openCart())
    }


    return (
        <>
        <Tooltip title='Cart'>
        <IconButton aria-label="cart" sx={{
            marginRight:'1rem',
            color:'white'
        }}
        size='large'
        onClick={()=>redirectToCart('sidebar')}
        >
            <StyledBadge badgeContent={4} color="error">
                <ShoppingCartIcon sx={{fontSize:'30'}}/>
            </StyledBadge>
        </IconButton>
        </Tooltip>
            {open && <SideBar open={true} achor={'right'}/>}
            </>
    );
}