import React from 'react';
import './Secondsectionstyle.scss';
import Box from '@mui/material/Box';
import { Typography, Grid ,Divider} from '@mui/material';
import pic from '../asset/image.png';

function Secondsection() {
  return (
    <Box className="mainbox">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src={pic} className="image" alt="Jack Fruit Tacos" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="textbox">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6">Jack Fruit Tacos</Typography>
                <Typography variant="body2">40z</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" align="left">
                  $15.00
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "90%" }}/>
          </Box>
          
          <Box className="textbox">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6">Baja Cali Tacos</Typography>
                <Typography variant="body2">40z</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" align="left">
                  $25.00
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'grey', borderWidth: 0.5, width: "90%" }}/>
          </Box>

          <Box className="textbox">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6">Impossible Tacos</Typography>
                <Typography variant="body2">40z</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" align="left">
                  $35.00
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Secondsection;
