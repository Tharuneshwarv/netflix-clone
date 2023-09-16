import React, { useEffect } from 'react'
import { getTopRatedMovie } from '../../service/requests'
import './Banner.css'

function Banner() {

  useEffect(() => {
    getTopRatedMovie();
  }, []);

  const truncateDesc = (string) => {
    return string?.length > 200 ? string.substring(0, 199) + '...' : string;
  }

  return (
    <header className='banner'>
      <div className='banner__content'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>Watch Later</button>
        </div>
        <p className='banner__description'>{truncateDesc('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')}</p>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  )
}

export default Banner