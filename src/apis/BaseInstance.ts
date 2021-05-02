import axios from 'axios';

const requester = axios.create({
  baseURL: 'http://api.gatgu.site/admin/',
});

export default requester;
