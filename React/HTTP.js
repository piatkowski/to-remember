/**
* Example of GET request width Fetch API
*/

import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovie] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films').then(response => {
            return response.json();
        }).then(data => {
            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                }
            });
            setMovie(transformedMovies);
        });
    }
    
    
    /**
    * async/await alternative
    */
    
        async function fetchMoviesHandler() {
            const response = await fetch('https://swapi.dev/api/films');
            const data = await response.json();
            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                }
            });
            setMovies(transformedMovies);
        }

    /**
    * return component's JSX code
    */
    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies}/>
            </section>
        </React.Fragment>
    );
}

export default App;
