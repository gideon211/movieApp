import React from 'react'

const MovieCard = () => {
  return (
    <div className='movie-card'>
               <div className='movie-poster'>
                              <img src={MovieCard.url} alt={MovieCard.title} />

                              <div className='movie-overlay'></div>
               </div>

    </div>
  )
}

export default MovieCard