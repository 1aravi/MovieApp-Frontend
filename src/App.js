import React, { useState } from "react";
import "./App.css";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { MovieList } from "./MovieList";
import { UserList } from "./UserList";
import { MovieDetails } from "./MovieDetails";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { API } from "./global";




const INITIAL_MOVIE_LIST= [
  {
  id:"100",
  name: "RRR",
  poster:
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  rating: 8.8,
  summary:
  "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  trailer: "https://www.youtube.com/embed/BN1MwXUR3PM",
  },
  {
    id:"101",
  name: "Iron man 2",
  poster:
  "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  rating: 7,
  summary:
  "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
  id:"102",
  name: "No Country for Old Men",
  poster:
  "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  rating: 8.1,
  summary:
  "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
  id:"103",
  name: "Jai Bhim",
  poster:
  "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  summary:
  "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  rating: 8.8,
  trailer: "https://www.youtube.com/embed/Gc6dEDnL8JA",
  },
  {
  id:"104",
  name: "The Avengers",
  rating: 8,
  summary:
  "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  poster:
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
  },
  {
  id:"105",
  name: "Interstellar",
  poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating: 8.6,
  summary:
  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  trailer: "https://www.youtube.com/embed/Lm8p5rlrSkY",
  },
  {
  id:"106",
  name: "Baahubali",
  poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  rating: 8,
  summary:
  "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
  id:"107",
  name: "Ratatouille",
  poster:
  "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  rating: 8,
  summary:
  "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  }
  ];
export default function App() {
  // Lifting the state up
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST)

  const navigate = useNavigate();
  const [mode, setMode] = useState("light");


  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
// const names= ["Aravind", "Abhishek","Mohan"]
// const users=[
//   {name:"Aravind", pic:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
//   {name:"Abhishek", pic:"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
// {name:"Mohan", pic:"https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg"}
// ];

// fetch("https://62420226b6734894c14c7e0e.mockapi.io/Aravind/movies")
// .then((data) => data.json())
// .then((mvs) => console.log("movies", mvs))


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={4} style={{minHeight: "100vh", borderRadius: "0px"}}>


    <div className="App">
      
      {/* <Msg name="Aravind" pic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Msg name ="Abhishek" pic="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
      <Msg name ="Mohan" pic="https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg"/> */}
      
        {/* {names.map(nm => <Msg name={nm}/>)}  */}
      {/* {users.map(us => <Msg name={us.name} pic={us.pic}/>)}  */}
      {/* <AddColor /> */}
      

      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" onClick={()=> navigate ("/")}>Home</Button>
          <Button color="inherit" onClick={()=> navigate ("/movies")}>Movies</Button>
          <Button color="inherit" onClick={()=> navigate ("/color-game")}>Color Game</Button>
          <Button color="inherit" onClick={()=> navigate ("/movies/add")}>Add Movie</Button>
          <Button style={{marginLeft: "auto"}} startIcon = {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} color="inherit" onClick={()=> setMode (mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "dark" : "light"} Mode
            
            </Button>

        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/color-game" element={<AddColor />} />
       <Route path="/users" element={<UserList />} />
       <Route path="/movies/:id" element={<MovieDetails movieList={movieList}/>} />
       <Route path="/404" element={<NotFound />} />
       <Route path="*" element={<Navigate replace to = "/404" />} />
       <Route path="/films" element={<Navigate replace to = "/movies" />} />
       <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}  />

      </Routes>
    </div>
    </ Paper>

    </ThemeProvider>
    
  );
}
function Home(){
  return <h1>Welcome to the Movie App😊🎬📽️</h1>
}
function NotFound(){
return(
  <div>
    <h1>404 Not Found</h1>
  </div>
);
}

function AddMovie ({movieList, setMovieList}){

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();
  const addMovie = () => {
    const newMovie = {
      name,
      rating,
      summary,
      poster,
      trailer,
    };
    fetch(`${API}/movies`, {
method: "POST",
body: JSON.stringify(addMovie),
headers:{
  "content-Type": "application/json",
},
    }).then(() => navigate("/movies"))

    console.log(newMovie);
    setMovieList([...movieList, newMovie]);
  };

  return (
    <div className="add-movie-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="filled" />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="filled" />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="filled" />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="filled" />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          variant="filled" />
        
        <Button onClick={addMovie} variant="contained">Add Movie</Button>
  </div>
  )
}