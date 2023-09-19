import React, { useEffect, useState } from 'react'
import { getMovie } from '../../service/requests';
import './Row.css'

function Row({title, url }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovie(url).then(res => {
            setMovies(res);
        })
    }, [url])
    return ( movies?.length > 0 &&
        <div className='row'>
            <h2 className='row__title'>{title} 123</h2>
            <div className='row__posters'>
                    {movies.map(movie => (movie?.backdrop_path && 
                        <img id={`${movie.id}`} className='row__poster' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title || movie.original_name}/>
                    ))}
            </div>
        </div>  
    )
}

export default Row