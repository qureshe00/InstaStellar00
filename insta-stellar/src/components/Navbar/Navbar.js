import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}} >
        <Toolbar style={{background:"transparent", boxShadow: 'none'}} >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left' style={{color:"white"}} >
          <RocketLaunchIcon/> InstaStellar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}