import axios from 'axios';

export const API_KEY = process.env.TMDB_API_KEY;

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default axiosInstance;