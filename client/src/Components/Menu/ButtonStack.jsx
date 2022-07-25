import React from 'react';
import { Box ,Grid, Button , ButtonGroup , Stack } from '@mui/material';
import { styled } from "@mui/system";
import FilterDropDown from "./FilterDropDown";
import { useDispatch } from 'react-redux';
import { setTags } from '../../features/cartSlice/cart'

const StyledButton = styled(Button)`
  background-color: darkgreen;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  //padding: 6px 12px;
  &:hover {
    background-color: darkgreen;
    color:whitesmoke;
  }
  &:focus {
    background-color: darkgreen;
    color:whitesmoke;
  }
  &:active {
    background-color: darkgreen;
  }
`;
function ButtonStack ( props ) {
    const dispatch = useDispatch()
    const [offers, setOffers] = React.useState('')
    React.useEffect(() => {
      dispatch(setTags({ offers }))
    }, [offers])
    return (
        <>
            {/*<Grid>*/}
            <Box sx={{
                marginRight:{
                  xs:'2rem',
                }
            }}>
            <ButtonGroup variant="contained" aria-label="outlined"  sx={{
                marginTop:'2rem',
                marginLeft:{
                    xs:'2rem',
                    sm:'8rem',
                    md:'8rem',
                    lg:'8rem',
                    xl:'8rem'
                },
                marginRight:{
                    xs:'3rem',
                }
            }}>
                <StyledButton onClick={() => setOffers('all')}>All</StyledButton>
                <Button onClick={() => setOffers('discount')} variant='outlined'>Offers</Button>
                <Button onClick={() => setOffers('delivery')} variant='outlined'>Free Delivery</Button>
                <Button onClick={() => setOffers('popular')} variant='outlined'>Popular</Button>
            </ButtonGroup>
            </Box>
            <Grid sx={{
                marginLeft:'8rem',
                marginTop:'2rem'
            }}>
            <FilterDropDown/>
            </Grid>
        </>
    );
}

export default ButtonStack;