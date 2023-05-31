import React, {useState, useEffect} from 'react'
import { FormControl, RadioGroup, FormControlLabel, Checkbox, Button, Typography, Stack, Box, Radio, Container, Modal } from '@mui/material';
import API from '../Api/Api.js';
import { Link } from 'react-router-dom';

export default function OrderPizza() {
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState({});
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    API.get(`/PizzaOrders/GetToppings`)
      .then(res => {
        const initialToppings = res.data.reduce((acc, topping) => {
          acc[topping.name] = false;
          return acc;
        }, {});
        setToppings(initialToppings);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    setToppings({ ...toppings, [event.target.name]: event.target.checked });
  };
  const calculatePrice = () =>{
    if(size == ""){
      setError('Please choose pizza size!');
      return;
    }
    if(!Object.values(toppings).includes(true)){
      setError('Please choose pizza toppings!');
      return;
    }
    setError();

    const payload = {
      size: parseInt(size),
      toppings: Object.entries(toppings)
        .filter(([name, value]) => value === true)
        .map(([name]) => ({ name }))
    };

    API.post(`/PizzaOrders/CalculatePrice`, payload)
    .then(res=>{
      setPrice(res.data)
    }).catch(err=>{
      console.error(err);
    });
  }

  const saveOrder = () => {
    if(size == ""){
      setError('Please choose pizza size!');
      return;
    }
    if(!Object.values(toppings).includes(true)){
      setError('Please choose pizza toppings!');
      return;
    }
    setError();

    const payload = {
      size: parseInt(size),
      toppings: Object.entries(toppings)
        .filter(([name, value]) => value === true)
        .map(([name]) => ({ name }))
    };
    
    API.post(`/PizzaOrders/SaveOrder`, payload)
    .then(
      setIsModalOpen(true)
    ).catch(err=>{
      setError(err);
    });
  };

  const handleCloseModal = () => {
    setError("");
    setPrice(0);
    setSize("");
    setToppings((prevToppings) => {
      const updatedToppings = {};
      Object.keys(prevToppings).forEach((topping) => {
        updatedToppings[topping] = false;
      });
      return updatedToppings;
    });
    setIsModalOpen(false); 
  };
  return (
    <>
      <Typography variant="h4" sx={{mb:2}}>Order pizza</Typography>

      <Stack>
        <FormControl>
          <Typography variant="h6">Pizza size</Typography>
          
          <RadioGroup
            aria-label="pizza-size"
            name="size"
            value={size}
            onChange={handleSizeChange}>
            <Box>
              <FormControlLabel value="1" control={<Radio />} label="Small" />
              <FormControlLabel value="2" control={<Radio />} label="Medium" />
              <FormControlLabel value="3" control={<Radio />} label="Large" />
            </Box>
            </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <Typography variant="h6">Toppings</Typography>
          <Box>
            {Object.entries(toppings).map(([topping, checked]) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleToppingChange}
                  name={topping}
                />
              }
              label={topping}
              key={topping}
            />
          ))}
          </Box>
        </FormControl>
        <Container sx={{ my: 2}}>
          {price !==0 && (
            <>
              <Button onClick={() => {
                saveOrder()
                }}  
                variant="contained" 
                color="secondary">
                  Save order
              </Button>

              <Button onClick={() => {
                calculatePrice()
              }} 
              variant="contained" 
              color="primary" sx={{m:1}}>
                Calculate price
              </Button>
            </>
          )}
          {price === 0 && (
            <Button onClick={() => {
              calculatePrice()
            }} 
            variant="contained" 
            color="primary">
              Calculate price
            </Button>
          )}
        </Container>
        <Typography sx={{color:'red'}}>{error}</Typography>
        <Typography>Current order price: €{price}</Typography>
      </Stack>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}>
          <Container align="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order saved successfully 
          </Typography>
          <Typography id="modal-modal-description">
            Check saved orders to see your all saved orders.
          </Typography>
            <Button sx={{m:2}} variant="contained"  color="primary" component={Link} to="/OrdersList">Saved orders</Button>
            <Button variant="contained"  color="secondary" onClick={handleCloseModal}>close</Button>
          </Container>
        </Box>
      </Modal>
    </>
  )
}
