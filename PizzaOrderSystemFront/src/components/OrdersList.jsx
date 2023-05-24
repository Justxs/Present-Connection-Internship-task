// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography} from '@mui/material';

export default function OrdersList() {
  function createData(name, top, cost, date, size) {
    return { name, top, cost, date, size };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Iceam sandwich', 237, 9.0, 37, 4.3),
    createData('Ecair', 262, 16.0, 24, 6.0),
    createData('Fro', 159, 6.0, 24, 4.0),
    createData('Ice cream sh', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData(' yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice crendwich', 237, 9.0, 37, 4.3),
    createData('Eir', 262, 16.0, 24, 6.0),
    createData('Frozen ', 159, 6.0, 24, 4.0),
    createData('Ice  sandwich', 237, 9.0, 37, 4.3),
    createData('Eclir', 262, 16.0, 24, 6.0),
  ];
  return (
    <>
      <Typography variant="h4" sx={{my:2}}>Saved orders</Typography>
      <TableContainer sx={{ maxWidth: 500, my:2 }} component={Paper}>
      <Table size="small" >
        <TableHead sx={{bgcolor:'#2196f3'}}>
          <TableRow hover>
            <TableCell sx={{color:'#fff'}}>Order No.</TableCell>
            <TableCell sx={{color:'#fff'}}>Date</TableCell>
            <TableCell sx={{color:'#fff'}}>Size</TableCell>
            <TableCell sx={{color:'#fff'}}>Topings</TableCell>
            <TableCell sx={{color:'#fff'}} align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.top}</TableCell>
              <TableCell align="right">{row.cost}€</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
