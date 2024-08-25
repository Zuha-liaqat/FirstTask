import React from 'react'
import Box from '@mui/material/Box'
import {Button,Typography, IconButton,Divider} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../asset/logo2.png'; 
import  './Navbarstyle.scss'


function Navbar() {
  
  return (
    <>
    
      <Box className="contact">
        <Box className="contact-info">
        <IconButton>
          <PhoneIphoneIcon className="icon"/>
        </IconButton>
        <Typography className="contact-text"> 
        (316) 555-0116
        </Typography>
        </Box>
        <Box className="contact-info"> 
        <IconButton>
          <EmailIcon className="icon"/>
        </IconButton>
        <Typography className="contact-text">
            order@example.com
        </Typography>
        </Box>
     </Box>
   
    <Box >
   
      <Box className="navbar">
        
        <IconButton>
        <img src={logo} alt="logo" width={100} height={50} /> 
        </IconButton>

       
        <Box>
          <Button id="btn">Home</Button>
          <Button sx={{color:"purple",':hover':{textDecoration:"underline",textUnderlineOffset:'28px'}}}>Menu</Button>
          <Button sx={{color:"purple",':hover':{textDecoration:"underline",textUnderlineOffset:'28px'}}}>Schedule</Button>
          <Button sx={{color:"purple",':hover':{textDecoration:"underline",textUnderlineOffset:'28px'}}}>Packages</Button>
          <Button sx={{color:"purple",':hover':{textDecoration:"underline",textUnderlineOffset:'28px'}}}>Catering</Button>
          <Button sx={{color:"purple",':hover':{textDecoration:"underline",textUnderlineOffset:'28px'}}}>About</Button>
        </Box>

        <Box sx={{marginRight:"6px"}}>
        <Button sx={{color:"white",backgroundColor:"purple",':hover':{backgroundColor:"grey"}}}>Login</Button>
        <Button sx={{border:"1px solid purple",marginLeft:"5px",color:"purple"}}>Signup</Button>
        </Box>
       
      </Box>
      <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "100%" ,marginTop:"0.5px"}} />
    </Box>
   
    </>
  )
}

export default Navbar