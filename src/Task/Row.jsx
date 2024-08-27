import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import './Rowstyle.scss';

function Row() {
  return (
    <Box className="navbox">
      <Box className="content">
        <Button variant="contained" sx={{ color: "white", textTransform: "capitalize", ':hover': { color: "#2F75E6", textDecorationColor: "#2F75E6", textDecoration: "underline", textUnderlineOffset: '20px' } }}>Popular Items</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Vegetarian</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Non-Veg</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Seafood</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Biryani & Rice-based</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Curry</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Seasonal</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Plant based</Button>
        <Button sx={{ color: "#2F75E6", textTransform: "capitalize", ':hover': { textDecoration: "underline", textUnderlineOffset: '20px', color: "#2F75E6", textDecorationColor: "#2F75E6" } }}>Fusion</Button>
      </Box>
    </Box>
  );
}

export default Row;
