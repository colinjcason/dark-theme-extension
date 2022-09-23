import React from 'react'

const Movie = ({ movie: { Title, Year, Type, Poster } }) => {
  return (
    <div>
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster} alt='poster' />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default Movie