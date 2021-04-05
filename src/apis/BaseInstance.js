import axios from 'axios';

const requester = axios.create({
  baseURL: 'https://api.gatgu.site/admin/',
});

export default requester;
