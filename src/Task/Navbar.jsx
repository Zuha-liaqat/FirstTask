import React from 'react'
import Box from '@mui/material/Box'
import {Button,Typography, IconButton,Divider} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import logo from '../asset/bird.png'; 
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
        <Box sx={{display:"flex",alignContent:"center",alignItems:"center",fontWeight:"bold"}}>
        <Typography sx={{fontSize:"25px",color:"#2F75E6",fontWeight:600}}>Neerob</Typography>
        <IconButton>
        <img src={logo} alt="logo" width={30} height={30} className='image2'/> 
        </IconButton>
        </Box>
       

       
        <Box>
          <Button  sx={{color:"black",textTransform: "capitalize",':hover':{color:"#2F75E6",textDecorationColor:"blue",textDecoration:"underline",textUnderlineOffset:'20px',}}}>Home</Button>
          <Button  id="btn">Menu</Button>
          <Button sx={{color:"black",textTransform: "capitalize",':hover':{textDecoration:"underline",textUnderlineOffset:'20px',color:"#2F75E6",textDecorationColor:"blue"}}}>Schedule</Button>
          <Button sx={{color:"black",textTransform: "capitalize",':hover':{textDecoration:"underline",textUnderlineOffset:'20px',color:"#2F75E6",textDecorationColor:"blue"}}}>Packages</Button>
          <Button sx={{color:"black",textTransform: "capitalize",':hover':{textDecoration:"underline",textUnderlineOffset:'20px',color:"#2F75E6",textDecorationColor:"blue"}}}>Catering</Button>
          <Button sx={{color:"black",textTransform: "capitalize",':hover':{textDecoration:"underline",textUnderlineOffset:'20px',color:"#2F75E6",textDecorationColor:"blue"}}}>About</Button>
        </Box>

        <Box sx={{marginRight:"6px"}}>
        <Button variant="outlined" sx={{color:"#2F75E6",textTransform: "capitalize",':hover':{backgroundColor:"lightblue" ,color:"white"}}}>Reservation</Button>
        <Button variant="outlined" sx={{marginLeft:"5px",textTransform: "capitalize",color:"white",backgroundColor:"#2F75E6",':hover':{color:"black"}}}>
          Order Now <ArrowDropDownRoundedIcon/></Button>
        </Box>
       
      </Box>
      <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "100%" ,marginTop:"5px"}} />
    </Box>
   
    </>
  )
}

export default Navbar