import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

export default function MoviePage() {
  const params = useParams();
  console.log("Params ricevuti:", params); 
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  console.log("ID ricevuto:", id); 
  
  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(error => console.log(error));
  }, [id]);
  
  return (
    <>
      <h1>{movie?.title}</h1>
      <img src={movie?.image} alt={movie?.title} />
      <section>
        <h4>Our community reviews</h4>
        {movie.reviews?.map(review => <ReviewCard key={review.id} review={review} />)}
      </section>
    </>
  );
}