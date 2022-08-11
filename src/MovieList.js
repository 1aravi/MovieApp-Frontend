import React, { useEffect, useState } from "react";
import { Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Movie } from "./Movie";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function MovieList() {

  const [movieList, setMovieList] = useState([]);
    const getMovies = () =>{
    fetch(`${API}/movies`,{
      method: "GET",
    })
.then((data) => data.json())
.then((mvs) => setMovieList(mvs));
  };
  useEffect(() => getMovies(), []);

//   //get movies

  const deleteMovie = (id) =>{
    fetch(`${API}/movies/${id}`,{
      method: "DELETE",
    }).then(()=> getMovies());
  };
  const navigate= useNavigate();

  return (

    <div>
      <div className="movie-list-container">
        {movieList.map((mv) => (
          <Movie key = {mv.id} movie={mv} id={mv.id}
          deleteButton={
              <IconButton
              style={{marginLeft: "auto"}}
              color="error"
              onClick={() => deleteMovie(mv.id)}
              aria-label="Movie details"
            >
            <DeleteIcon/>
            
            </IconButton>

            }
            editButton={
                <IconButton
                color="secondary"
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                aria-label="Movie details"
              >
              <EditIcon/>
              </IconButton>
              }

          
          />
        ))}
      </div>
      </div>
   

  );
}



  // const [movieList, setMovieList] = useState([]);
//   const getMovies = () =>{
//     fetch(`${API}/movies`,{
//       method: "GET",
//     })
// .then((data) => data.json())
// .then((mvs) => setMovieList(mvs))
//   };
// //   useEffect(() => getMovies(), []);

// //   //get movies

//   const deleteMovie = (id) =>{
//     fetch(`${API}/movies/${id}`,{
//       method: "DELETE",
//     }).then(()=> getMovies());
//   };
//   // const navigate= useNavigate();

// deleteButton={
//   <Button
//   // style={{marginLeft: "auto"}}
//   // color="error"
//   onClick={() => deleteMovie(mv.id)}
//   // aria-label="Movie details"
// >
// {/* <DeleteIcon/> */}
// delete media

// </Button>
// }
// // editButton={
// //   <IconButton
// //   color="secondary"
// //   onClick={() => navigate(`/movies/edit/$(mv,id)`)}
// //   aria-label="Movie details"
// // >
// // <EditIcon/>
// // </IconButton>
// // }