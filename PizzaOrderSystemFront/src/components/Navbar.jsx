// eslint-disable-next-line no-unused-vars
import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{position: 'aboslute', top: 0, left:0, right:0}}>
      <AppBar >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pizza order system
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button sx={{mx:3}} color="inherit" component={Link} to="/Order">Order pizza</Button>
        <Button color="inherit" component={Link} to="/OrdersList">Saved orders</Button>
      </Toolbar>
      </AppBar>
    </Box>
  );
}