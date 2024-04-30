import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  const red ='#FF2625'
  return (
    <Box sx={{
      mt:{lg:'212px', sx:'70px'},
      ml:{ sm:'50px' }
    }} position="relative" p="20px">
      <Typography color={red} fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
       <Typography 
        fontWeight="700" 
        sx={{
          fontSize:{lg:'44px', xs: '40px'}
        }}
        mb="23px"
        mt="30px"
       >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography variant="contained" color="error" fontsize="22px" lineHeight='35px' mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Button 
        variant="contained" 
        color="error" 
        href="#exercises"
        xs={{
          backgroundColor:{red},
          padding:'10px'
        }}
        >
        Explore exercises
      </Button>
      <Typography 
        fontWeight="600" 
        color={red}
        sx={{
          opacity: 0.1,
          display:{lg:'block', xs:'none'}
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-image'/>
    </Box>
  )
}

export default HeroBanner
