import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movie);

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-detailS-container">
      <iframe
        width="100%"
        height="700"
        src={movie.trailer}
        title="Youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-info">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
        <button starIcon={<ArrowBackIosNewIcon />} onClick={() => navigate(-1)} variant="contained">Back</button>

      </div>
    </div>
  );
}
;
