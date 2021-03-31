import axios from 'axios';

const requester = axios.create({
  baseURL: 'api.gatgu.site',
});

export default requester;
