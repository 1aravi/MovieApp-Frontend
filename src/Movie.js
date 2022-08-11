import React, { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';




export function Movie({ movie, id, deleteButton, editButton }) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>

      <CardContent>
             <div className="movie-specs">
        <h2 className="movie-name">{movie.name}

          <IconButton onClick={() => navigate(`/movies/${id}`)} color="primary" aria-label="Movie details">
            <InfoIcon />
          </IconButton>

          <IconButton onClick={() => setShow(!show)} color="primary" aria-label="Toggle summary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      

      {/* /movies/0 or /movies/1 */}


      {/* <p style={paraStyles} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      </CardContent>

      <CardActions>
      <Counter /> {deleteButton} {editButton}
      </CardActions>

    </Card>
  );

}
