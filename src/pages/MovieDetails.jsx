import { MovieAPI } from 'APIs/MovieAPI';
import { Button } from 'components/Button/Button';
import {
  AdditionalInfo,
  Description,
  MovieWrapp,
  Thumb,
} from 'components/PageStyled/MovieDetails.styled';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

const movieAPI = new MovieAPI();

const BASE_URL = 'https://image.tmdb.org/t/p/w400';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());
  const backLink = location.current.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await movieAPI.getMovieDetails(movieId);
        setMovie(resp);
      } catch (err) {
        setErr(err);
      }
    }
    fetchData();
  }, [movieId]);

  const { title, poster_path, overview, vote_average, genres } = movie || {};

  return (
    <>
      <Button text={'<- Go back'} handleClick={() => navigate(backLink)} />
      {movie && (
        <>
          <MovieWrapp>
            <Thumb>
              <img src={BASE_URL + poster_path} alt="poster" />
            </Thumb>
            <Description>
              <h1>{title}</h1>
              <p>User score: {(vote_average * 10).toFixed()}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres.map(i => i.name)}</p>
            </Description>
          </MovieWrapp>
          <AdditionalInfo>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link className="info-link" to={'cast'}>
                  Cast
                </Link>
              </li>
              <li>
                <Link className="info-link" to={'reviews'}>
                  Reviews
                </Link>
              </li>
            </ul>
          </AdditionalInfo>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {err && <h1>Oooops... Please reload page</h1>}
    </>
  );
}
