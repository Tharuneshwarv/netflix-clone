import axiosInstance from "./axios"
import {API_KEY} from "./axios"
import axios from "axios";

export const requests = {
    TopRated: `/movie/top_rated`,
    TrendingNow: `/trending/all/day`,
    MovieGenre: `genre/movie/list`,
    ActionMovie: `discover/movie?with_genres=28&sort_by=popularity.desc`,
    WarMovie: `discover/movie?with_genres=10752&sort_by=popularity.desc`,
    CrimeMovie: `discover/movie?with_genres=80&sort_by=popularity.desc`,
    HorrorMovie: `discover/movie?with_genres=27&sort_by=popularity.desc`,
    AdventureMovie: `discover/movie?with_genres=12&sort_by=popularity.desc`,
    AnimationMovie: `discover/movie?with_genres=16&sort_by=popularity.desc`,
    ScienceFictionMovie: `discover/movie?with_genres=878&sort_by=popularity.desc`
}

export const getMovie = async (url) => {

    const res = await axiosInstance({
      url: url,
      params: {language: 'en-US', page: '1', api_key: API_KEY},
      headers: {
        accept: 'application/json'
      }
    });
  
    if(res.status === 200)
      return res.data.results;
    else
      return [];
        
}