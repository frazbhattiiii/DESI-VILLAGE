import { Box } from '@mui/material'
import Category from './Category'
import Prices from './Prices'

const Filters = () => {
  return (
    <Box>
        <Category/>
        <Prices />
        <Category />
    </Box>
  )
}

export default Filters