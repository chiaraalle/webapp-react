import MovieCard from '../components/MovieCard';
// import ReviewCard from "../components/ReviewCard";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react'; 
import GlobalContext from '../context/globalContext';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const { setIsLoading } = useContext(GlobalContext)

  const fetchMovies = () => {
    console.log('Fetching movies...');

    setIsLoading(true) 

     axios 
      .get('http://localhost:3000/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then( () => setIsLoading(false) ); 
  };

  const renderMovies= () => {
    return movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h1 className="text-primary">Bool Movies</h1>
      <div className="row row-cols-3">
        {/* <MovieCard/> */}
        {renderMovies()}

        {/* {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })} */}
      </div>
    </>
  );
}
