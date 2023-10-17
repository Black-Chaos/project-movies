import { MovieAPI } from 'APIs/MovieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';

const movieAPI = new MovieAPI();

export default function Reviews() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await movieAPI.getMovieReviews(movieId);
        setData(resp.results);
        console.log('resp:', resp);
      } catch (error) {
        setErr(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {data.length > 0 && 
        <ReviewsList>
          {data.map(({ id, author, content }) => (
            <li key={id}>
                  <h4>{ author}</h4>
                  <p>{ content}</p>
            </li>
          ))}
        </ReviewsList>
      }
      {err && <h1>Oooops... Please reload page</h1>}
    </>
  );
}
