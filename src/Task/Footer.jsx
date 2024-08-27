import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography, Grid, Divider, IconButton,TextField } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footerstyle.scss';

function Footer() {
  return (
    <Box className="footerbox">
      <Grid container spacing={2} direction="column" alignItems="center">
        
        <Grid item xs={12} className='firstrow'>
          <Box className="firstbox">
            <Typography sx={{ color: "white", fontSize: "20px" }}>
              Come say <i>hello</i>
            </Typography>
            <Button sx={{ backgroundColor: "white",textTransform: "capitalize", color:" #2F75E6", fontSize: "10px",borderRadius:"2px"}}>
              View weekly schedule
            </Button>
          </Box>
        </Grid>
        
        
          <Divider sx={{ my: 2, borderColor: '#F9EFE633', borderWidth: 0.5, width: "85%" }} />
       
        
        
        <Grid container item xs={12} spacing={2} justifyContent="left">
          <Grid item xs={12} sm={6} md={4}>
            <Box className="rectangle">
              <Typography sx={{ color: "white",marginLeft:"70px" }}>Logo</Typography>
              <IconButton sx={{marginRight:"165px" }}>
                <FacebookRoundedIcon  className='iconcolor'/>
                <InstagramIcon  className='iconcolor'/>
                <TwitterIcon className='iconcolor'/>
              </IconButton>
              <Typography sx={{marginTop:"10px",marginBottom:"10px",marginLeft:"70px",color:"white",fontSize:"12px"}}>Sign up for our newsletter</Typography>
              <Box>
              <TextField sx={{width:"50%",height: 36, '& .MuiInputBase-root': { height: 36 },marginLeft:"70px" ,border:"1px solid white"}}></TextField>
              <Button sx={{backgroundColor: "white", width:"20%", color:" #2F75E6", fontSize: "10px", fontWeight: "600" ,borderRadius:"1px",height:38}}>Sign up</Button>
              </Box>
              
              
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Box className="rectangle">
              <Typography className='rectangletext'>Menu</Typography>
              <Typography className='rectangletext'>Schedule</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Box className="rectangle">
              <Typography className='rectangletext'>Contact</Typography>
              <Typography className='rectangletext'>Privacy policy</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Box className="rectangle">
              <Typography className='rectangletext'>About</Typography>
              <Typography className='rectangletext'>Catering</Typography>
            </Box>
          </Grid>
        </Grid>

        
        <Grid item xs={12} className="Thirdbox">
          <Box>
            <Typography sx={{ color: "white", fontSize: "12px", align:"left"}}>
            © Example 2023. All Rights Reserved
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
