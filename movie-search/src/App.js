import { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg'
import Movie from './Movie';

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const getMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    setMovies(data.Search)
    console.log(data.Search)
  }

  useEffect(() => {
    getMovies('alien')
  }, [])

  return (
    <div className="App">
      <h1>Movie Search</h1>

      <div>
        <input 
          placeholder='Search for movies'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt='search'
          onClick={() => getMovies(searchValue)}
        />
      </div>

      <div>
        {movies?.map(movie => (
          <Movie movie={movie}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
