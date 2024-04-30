import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
const Navbar = () => {
  return (
    <Stack direct="row" justifyContent="spaceAround" sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none' }} px='0 20px' >
      <Link src={logo} alt="logo" style={{ width:'48px',height:'48px', margin:'0 20'}} to ="/">
      </Link>
      <Stack>
        <Link to='/' style={{textDecoration:'none', color:'#3A1212', border:'3px solid #FF2625'}}>
          Home
        </Link>
          <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
        <Link >
        </Link>
      </Stack>
      NavBar
    </Stack>
  )
}

export default Navbar
