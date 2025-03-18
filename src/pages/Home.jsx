import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard.jsx';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
      axios.get('http://localhost:3000/movies')
      .then(res => setMovies(res.data))
      .catch(error => console.log(error));
    }, []);
  
    return (
      <div className="row row-cols-3">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
