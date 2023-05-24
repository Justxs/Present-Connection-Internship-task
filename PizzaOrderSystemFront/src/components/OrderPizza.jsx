// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { FormControl, RadioGroup, FormControlLabel, Checkbox, Button, Typography, Stack, Box, Radio, Container } from '@mui/material';

export default function OrderPizza() {
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState({
    Pepperoni: false,
    Mushrooms: false,
    Onions: false,
    Sausage: false,
  });

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    setToppings({ ...toppings, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here
    console.log(`Pizza size: ${size}`);
    console.log('Selected toppings:', toppings);
  };
  return (
    <Container>
      <Typography variant="h4" sx={{mb:2}}>Order pizza</Typography>

      <form onSubmit={handleSubmit}>
        <Stack>
          
          <FormControl>
            <Typography variant="h6">Pizza size</Typography>
            
            <RadioGroup
              aria-label="pizza-size"
              name="size"
              value={size}
              onChange={handleSizeChange}>
              <Box>
                <FormControlLabel value="small" control={<Radio />} label="Small" />
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="large" control={<Radio />} label="Large" />
              </Box>
              </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <Typography variant="h6">Toppings</Typography>
            <Box>
              {Object.keys(toppings).map((topping) => (
                <FormControlLabel
                control={
                  <Checkbox
                  checked={toppings[topping]}
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
          <Container>
            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2}}>Submit</Button>
          </Container>
        </Stack>
      </form>
    </Container>
  )
}
