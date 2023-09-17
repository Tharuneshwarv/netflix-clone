import React, { useEffect, useState } from 'react'
import { getMovie, requests } from '../../service/requests'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getMovie(requests.TopRated).then(res =>
      setMovie(res[Math.floor(Math.random() * res.length -1)])
    );
  }, []);
 
  const truncateDesc = (string) => {
    return string?.length > 200 ? string.substring(0, 199) + '...' : string;
  }

  return (
    <header className='banner' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
    }}>
      <div className='banner__content'>
        <h1 className='banner__title'>{movie?.title || movie?.original_name || movie?.name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>Watch Later</button>
        </div>
        <p className='banner__description'>{truncateDesc(movie.overview)}</p>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  )
}

export default Banner