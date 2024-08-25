import React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import './Rowstyle.scss';

function Row() {
  return (
    <Box className="navbox">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button sx={{color:"white",backgroundColor:"purple", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Popular Items</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Vegetarian</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Non-Veg</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Seafood</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button  sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Biryani & Rice-Based</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button  sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Curry</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button  sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Seasonal</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Plant-based</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Button  sx={{color:"black", ':hover':{textDecoration:'underline', color:'purple'}, width: '100%'}}>Fusion</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Row;
