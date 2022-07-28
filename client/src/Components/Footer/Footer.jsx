import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/system'

const Footer = () => {
  const FooterButton = styled(Button)({
    backgroundColor: '#1AC073',
    '&:hover': {
      backgroundColor: '#1ACC00'
    }
  })
  return (
    <Box sx={{
      padding: '40px 0',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            xs: 'column',
            md: 'row'
          }
        }}>
          <Box>
              <Typography sx={{
                fontSize: '30px',
                fontStyle: 'italic',
                fontWeight: 'bolds'
              }}>Do you want to become a seller?</Typography>
              <Typography sx={{
                fontStyle: 'italic',
                margin: '20px 0'
              }}>Click this button to become a seller
                  <br/>
                  and start your career right away.
              </Typography>
              <FooterButton variant='contained'>Become a Seller</FooterButton>
          </Box>
          <Box sx={{
            marginTop: {
              xs: '20px',
              md: '0'
            }
          }}>
              <img src="/images/footer.png" alt="" />
          </Box>
      </Box>
    </Box>
  )
}

export default Footer