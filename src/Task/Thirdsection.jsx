import React from 'react';
import './Thirdsectionstyle.scss';
import Box from '@mui/material/Box';
import { Typography, Grid, Divider } from '@mui/material';

function Thirdsection() {
  return (
    <Box className="mainbox2">
      <Grid container spacing={1}>
        <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "83%" ,marginLeft:"87px",align:'center'}} />

        <Grid item xs={12} md={6} sx={{justifyContent:"center"}}>
          <Box className="textbox2" sx={{marginLeft:'100px'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography  color={'#2F75E6'} variant="h6">Jack Fruit Tacos</Typography>
                <Typography  color={'#2F75E6'} variant="body2">40z&nbsp; 80z</Typography>
                <Typography  color={'#2F75E6'} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography  color={'#2F75E6'} variant="h6" align="left">$15.00</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "80%" }} />
          </Box>
        
          <Box className="textbox2" sx={{marginLeft:'100px'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography  color={'#2F75E6'} variant="h6">Baja Cali Tacos</Typography>
                <Typography  color={'#2F75E6'} variant="body2">40z&nbsp; 80z</Typography>
                <Typography  color={'#2F75E6'} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography  color={'#2F75E6'} variant="h6" align="left">$25.00</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "80%" }} />
          </Box>

          <Box className="textbox2" sx={{marginLeft:'100px'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography  color={'#2F75E6'} variant="h6">Impossible Tacos</Typography>
                <Typography  color={'#2F75E6'} variant="body2">40z&nbsp; 80z</Typography>
                <Typography  color={'#2F75E6'} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography  color={'#2F75E6'} variant="h6" align="left">$35.00</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          
          <Box className="textbox2" sx={{marginLeft:"40px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography  color={'#2F75E6'} variant="h6">Jack Fruit Tacos</Typography>
                <Typography  color={'#2F75E6'} variant="body2">40z&nbsp; 80z</Typography>
                <Typography  color={'#2F75E6'} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography  color={'#2F75E6'} variant="h6" align="left">$15.00</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "80%" }} />
          </Box>

          <Box className="textbox2" sx={{marginLeft:"40px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography  color={'#2F75E6'} variant="h6">Baja Cali Tacos</Typography>
                <Typography  color={'#2F75E6'} variant="body2">40z&nbsp; 80z</Typography>
                <Typography  color={'#2F75E6'} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography  color={'#2F75E6'} variant="h6" align="left">$25.00</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "80%" }} />
          </Box>

          <Box className="textbox2" sx={{marginLeft:"40px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography  color={'#2F75E6'} variant="h6">Impossible Tacos</Typography>
                <Typography  color={'#2F75E6'} variant="body2">40z&nbsp; 80z</Typography>
                <Typography  color={'#2F75E6'} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography  color={'#2F75E6'} variant="h6" align="left">$35.00</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Thirdsection;
