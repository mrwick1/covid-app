import axios from 'axios';

const covidFetch = axios.create({
  baseURL: 'https://cdn-api.co-vin.in/api/v2/',
});

export default covidFetch;
