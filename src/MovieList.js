import React, { useState } from "react";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
 
  return (

    
      <div className="movie-list-container">
        {movieList.map((mv, index) => (
          <Movie key = {index} movie={mv} id={index} />
        )
        )}
      </div>
   

  );
}
