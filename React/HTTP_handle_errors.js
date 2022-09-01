    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMoviesHandler() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/filmss');
            if(!response.ok) {
                throw new Error(response.statusText);
            }
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
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }
