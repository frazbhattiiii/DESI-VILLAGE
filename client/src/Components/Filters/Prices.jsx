import { Paper, Typography, Box, Slider } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const Prices = () => {
    const [range, setRange] = React.useState(0)
    const FilterTitle = styled(Typography)({
        fontWeight: "s",
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
    <Paper sx={{ 
        padding: '20px', 
        backgroundColor: '#F6F7F8',
        margin: '15px 0' 
        }}>
        <Box>
            <FilterTitle sx={{
                    marginBottom: '20px'
                }}>Prices</FilterTitle>
            <FilterContainer>
                <FilterTitle>Range</FilterTitle>
                <Typography sx={{fontSize:'15px'}}>{ `${range}$ - ${range + 10}$` }</Typography>
            </FilterContainer>
            <Slider
                sx={{
                    color: "#1AC073"
                }}
                defaultValue={0}
                min={0}
                max={90}
                step={10} 
                size="small"
                onChange={(e, value) => setRange(value)}
            />
        </Box>
    </Paper>
  )
}

export default Prices