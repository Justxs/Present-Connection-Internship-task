import axios from 'axios';

export default axios.create({
  //For local host
  baseURL: `https://localhost:7007/`
  //For azure deployment
  //baseURL: `https://pizza-order-sistem.azurewebsites.net/`
});