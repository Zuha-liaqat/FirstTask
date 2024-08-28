import React from 'react';
import './Firstsectionstyle.scss';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import picc from '../../asset/Group.png';

function Firstsection() {
  return (
    <>
      
        <Box className="text">
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} >
              <Typography sx={{ fontSize:"50px", fontWeight: '600',color:"#2F75E6",textAlign:"center"}}>
                Our menu
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ fontSize:"14px", textAlign: 'center' ,color:"#2F75E6",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                consequat netus tristique at sem ipsum fames. Sed a molestie
                enim ac sed.
              </Typography>
            </Grid>
            
            <img className="image4" src={picc}></img>
            
           
            

          </Grid>
        </Box>
      
    </>
  );
}

export default Firstsection;
