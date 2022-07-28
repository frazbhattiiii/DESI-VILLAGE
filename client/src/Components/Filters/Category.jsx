import React from 'react'
import { Paper, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Category = () => {
    const FilterTitle = styled(Typography)({
        fontWeight: "bold",
        fontSize: '15px'
    })
    const FilterContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px'
    })

  return (
    <Paper sx={{ padding: '20px', backgroundColor: '#F6F7F8' }} >
        <Box>
            <FilterTitle sx={{
                marginBottom: '20px'
            }}>Filters</FilterTitle>
            <FilterContainer>
                <FilterTitle>Name</FilterTitle>
                <Typography>0</Typography>
            </FilterContainer>
            <FilterContainer>
                <FilterTitle>Name</FilterTitle>
                <Typography>0</Typography>
            </FilterContainer>
            <FilterContainer>
                <FilterTitle>Name</FilterTitle>
                <Typography>0</Typography>
            </FilterContainer>
            <FilterContainer>
                <FilterTitle>Name</FilterTitle>
                <Typography>0</Typography>
            </FilterContainer>
        </Box>
    </Paper>
  )
}

export default Category