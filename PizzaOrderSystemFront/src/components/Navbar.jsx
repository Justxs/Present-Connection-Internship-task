import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <Box>
      <AppBar position="relative" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pizza order system
            <IconButton component={Link} to="/"><LocalPizzaIcon sx={{color: 'white'}}/></IconButton>
          </Typography>
          <Button sx={{mx:3}} color="inherit" component={Link} to="/Order">Order pizza</Button>
          <Button color="inherit" component={Link} to="/OrdersList">Saved orders</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}