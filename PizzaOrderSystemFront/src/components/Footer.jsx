import {Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#f7f7f7', p: 2, position: 'absolute', bottom: 0, left:0, right:0}}>
        <Typography color="text.secondary" align='center'>
            2023 Present Connection. Technical assignment for a candidate for an internship developer position.
        </Typography>
    </Box>
  );
}

export default Footer;