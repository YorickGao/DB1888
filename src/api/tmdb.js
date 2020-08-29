import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    // api_key: process.env.REACT_APP_API,
    api_key: 'c1d30454d64c64a2482d721386f14844'
  },
});
