import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const { id, title, director, abstract, image, genre } = movie;

  return (
    <div className="card mb-4">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span>Diretto da: {director}</span>
        <p>Genere: {genre}</p>
        <p>{abstract}</p>
        <Link to={`/movies/${movie.id}`}>Read More</Link>
      </div>
    </div>
  );
}
