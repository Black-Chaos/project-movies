import { MovieAPI } from "APIs/MovieAPI";
import { Button } from "components/Button/Button";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const movieAPI = new MovieAPI();

export default function Movies() {
    const [sp, setSp] = useSearchParams();
    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const search = sp.get('search')

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.movie.value;
        if(name)setSp({search: name})
    }


    useEffect(() => {
        if (!search) return
        setInputValue(search)
        async function fetchData() {
            try {
                movieAPI.setSearchQuestion(search)
                const resp = await movieAPI.searchMovies()
                setMovies(resp.results)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [search])

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" name="movie" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          <Button text={'Search'} />
            </form>
            {movies.length > 0 && <MoviesList data={movies}/>}
        {error && <h1>Oooops... Please reload page</h1>}
      </>
    );
}

// https://api.themoviedb.org/3/search/movie?q=batman&page=1
// https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&page=1