import { MovieAPI } from "APIs/MovieAPI";
import { CastItem, CastList } from "./Cast.styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const movieAPI = new MovieAPI();
const BASE_URL = 'https://image.tmdb.org/t/p/w400';


export default function Cast() {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await movieAPI.getMovieCredits(movieId);
                setCast(resp.cast)
            } catch (err) {
                setError(err)
            }
        }
        fetchData()

    }, [movieId])
    
    return (
      <>
        {cast.length > 0 ? (
          <CastList>
            {cast.map(({ id, character, original_name, profile_path }) => (
              <CastItem key={id}>
                <div className="thumb">
                  <img src={BASE_URL + profile_path} alt="Foto" />
                    </div>
                    <h4>{ character}</h4>
                    <p>{ original_name}</p>
              </CastItem>
            ))}
          </CastList>
        ) : 'N/A'}
        {error && <h1>Oooops... Please reload page</h1>}
      </>
    );
}