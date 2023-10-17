import { MovieAPI } from "APIs/MovieAPI";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";

const movieAPI = new MovieAPI();

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
    
    async function fetchData () {
            try {
                const resp = await movieAPI.getTrending()
                setMovies(resp.results)
            } catch (err) {
                setErr(err)
            }
        
    }
        fetchData()
    }, [])
    
    return <>
        {movies.length > 0 && <>
            <h1 className="section-title">Trending today</h1>
            <MoviesList data={ movies} />
        </>}
        {err && <h1>Oooops... Please reload page</h1>}
    </>
}