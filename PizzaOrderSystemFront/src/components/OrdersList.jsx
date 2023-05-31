import React, {useEffect, useState} from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography} from '@mui/material';
import API from '../Api/Api.js'

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get(`/PizzaOrders/GetOrders`)
    .then(res => {
      const modifiedData = res.data.map(item => {
        if (item.size === 1) {
          return { ...item, size: 'Small' };
        }
        if (item.size === 2) {
          return { ...item, size: 'Medium' };
        }
        if (item.size === 3) {
          return { ...item, size: 'Large' };
        }
        return item;
      });
      setOrders(modifiedData);
    })
    .catch(err=>{
      console.error(err)
    })
  }, []);
  
  const renderTableRows = () => {
    return orders.map((pizza) => (
      <TableRow key={pizza.id} hover>
        <TableCell>{pizza.id}</TableCell>
        <TableCell>{pizza.size}</TableCell>
        <TableCell>
          {pizza.toppings.map((topping) => (
            <span key={topping.name}>{topping.name}; </span>
          ))}
        </TableCell>
        <TableCell align="right">€{pizza.price}</TableCell>
      </TableRow>
    ));
  };
  return (
    <>
      <Typography variant="h4" sx={{my:2}}>Saved orders</Typography>
      <TableContainer sx={{my:2 }} component={Paper}>
      <Table size="small" >
        <TableHead sx={{bgcolor:'#2196f3'}}>
          <TableRow hover>
            <TableCell sx={{color:'#fff'}}>Order ID</TableCell>
            <TableCell sx={{color:'#fff'}}>Size</TableCell>
            <TableCell sx={{color:'#fff'}}>Toppings</TableCell>
            <TableCell sx={{color:'#fff'}} align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders == "" &&(
            <TableRow >
              <TableCell>There are no saved orders yet</TableCell>
            </TableRow>
          )}
          {renderTableRows()}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
