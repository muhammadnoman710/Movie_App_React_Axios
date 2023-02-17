import React, { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'


const API_URL = "http://www.omdbapi.com?apikey=3002e903";



const App = () => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')



  //Learn the following code and practice it perfectly

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `)
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Batman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='Search'>
        <input
          type='/text'
          placeholder="Search for Movies"
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
        < img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)} />

        {
          movies?.length > 0 ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }

      </div>
    </div >
  )
}

export default App