import React from 'react';
import './Firstsectionstyle.scss';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';

function Firstsection() {
  return (
    <>
      
        <Box className="text">
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize:"50px", fontWeight: '600',color:"purple",textAlign:"center"}}>
                Our Menu
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={8}>
              <Typography sx={{ fontSize:"18px", textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                consequat netus tristique at sem ipsum fames. Sed a molestie
                enim ac sed.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      
    </>
  );
}

export default Firstsection;
