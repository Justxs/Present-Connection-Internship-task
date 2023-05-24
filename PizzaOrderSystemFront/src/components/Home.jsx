import React from 'react';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ m: 2}} maxWidth="sm">
      <Typography align="center" variant="h4" gutterBottom>
        Welcome to pizza order system
      </Typography>
      <Stack>
      <Button sx={{my:2}} variant="contained" color="primary" component={Link} to="/Order">
        Order pizza now!
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/OrdersList">
        View saved orders
      </Button>
      </Stack>
    </Box>

  )
}