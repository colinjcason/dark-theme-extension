import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com/?apikey=c1763c'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    getMovies('batman')
  }, [])

  return (
    <div className='app'>
      <h1>FilmStar</h1>

      <div className='search'>
        <input 
          placeholder='Search for Movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => getMovies(search)}
        />
      </div>

      {movies?.length > 0
          ? (
            <div className='container'>
              {movies.map(movie => (
                <MovieCard movie={movie} />
              ))}
            </div>            
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}

    </div>
  )
}

export default App