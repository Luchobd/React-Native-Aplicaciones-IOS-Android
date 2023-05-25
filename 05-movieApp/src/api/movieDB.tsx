import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '717dfaa3628c649f69d833b3091c759b',
    language: 'es-Es',
  },
});

export default movieDB;
