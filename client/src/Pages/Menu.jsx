import React from 'react'
import { Grid, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Filters from '../Components/Filters/Filters'
import MenuCardList from '../Components/Menu/MenuCardList'
import Slider from '../Components/Filters/Slider'

const Menu = () => {
    const filterRef = React.useRef()
    React.useLayoutEffect(() => {
        const filterResizeToggler = () => {
            if (window.innerWidth > 600)
                filterRef.current.style.display = 'unset'

        }
        window.addEventListener('resize', filterResizeToggler)
        return () => { 
            window.removeEventListener('resize', filterResizeToggler)
        }
    }, [])
    const toggleMenuHandler = () => {
        if (filterRef.current.style.display == 'none')
            filterRef.current.style.display = 'unset'
        else
            filterRef.current.style.display = 'none'

    }
  return (
    <>
        <Grid container spacing={2} sx={{
            padding: '10px 10px'
        }}>
            <Grid item xs={12} sm={3} lg={2}>
                <Box sx={{
                    display: {
                        xs: 'unset',
                        sm: 'none'
                    }
                }}>
                    <MenuIcon onClick={toggleMenuHandler} sx={{
                        color: 'gray',
                        fontSize: '30px'
                    }}/>
                </Box>
                <Box ref={filterRef} sx={{
                    display: {
                        xs: 'none',
                        sm: 'unset'
                    }
                }}>
                    <Filters />
                </Box>
            </Grid>
            <Grid item xs={12} sm={9} lg={10} >
                <Box sx={{
                    width: '80%',
                    margin: '10px auto',
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}>
                    <Slider />
                </Box>
                <MenuCardList />
            </Grid>
        </Grid>
    </>
  )
}

export default Menu