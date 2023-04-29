import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Import Route info
import MovieLayout from "./Layouts/MovieLayout";
import NavLayout from "./Layouts/NavLayout";
import MovieFormPage from "./Pages/MovieFormPage";
import MovieListPage from "./Pages/MovieListPage";
import MoviePage from "./Pages/MoviePage";
import HomePage from "./Pages/HomePage";

import movieData from "./Data/movieData";


const App = () => {
  //Set state of data set
  const [movies, setMovies] = useState(movieData);

  const addMovie = (movie) =>{
     setMovies([...movies, movie])
    }
  
  const filterMovies = (input, field) => {
          
      const moviesFiltered = movies.filter((movie) => {
            return movie[field].toLowerCase().includes(input.toLowerCase())
      })
  
    setMovies(moviesFiltered)
   }
   const removeMovie = (index) =>{
    const filterMovies = movies.filter((_, i) => {
            return i !== index
        })
        setMovies(filterMovies);
  }
  //Stucture Router to define pages and children
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: "/movies",
          element: <MovieLayout movieData={movies} />,
          children: [
            {
              element: <MovieListPage movieData={movies} />,
              index: true,
            },
            {
              element: <MovieFormPage addMovie={addMovie} />,
              path: "/movies/movieform",
            },
            {
              element: <MoviePage movieData={movies} />,
              path: ":index",
            },
          ],
        },
      ],
    },
  ]);

  //Return the page routing
  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
