import React from 'react';
import {useState,useEffect} from 'react';
import SearchIcon from './search.svg';
import './App.css'
import MovieCard from './MovieCard';


//e5c72a8//

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e5c72a8'; //apikey
const movie1 = {
    "Title": "Leo the Lion: King of the Jungle",
    "Year": "1994",
    "imdbID": "tt0234092",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOThjNzQ4MjktODE0Mi00NzM2LTljN2QtYjE5YWQ4NGQyOTNkXkEyXkFqcGdeQXVyODIxNjk4NzQ@._V1_SX300.jpg"
}
const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
     
     const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

};

useEffect(() => {
    searchMovies('lion king'); 
}, []);


  return (
    <div className='app'>
        <h1>MovieSearch</h1>
        <div className='search'>
            <input
            placeholder='Type in the title of the movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />  
            <img
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm)}
            /> 
        </div>
        {
            movies?.length > 0
            ? (
                <div className='container'> 
                {movies.map((movie) => (
                <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className='empty'> 
                    <h2>No movies found</h2>
                </div>
            )
        }
        </div>
  );
}

export default App