
import { Link } from "react-router-dom";
import movieData from "../Data/movieData";
import SearchBar from "../components/SearchBar";

// TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (prop) => {


  //construct rows
   const rows = prop.data.map((row, index) => {
     return (
       <>
         <tr key={index}>
           <td> {row.year} </td>
           <td>
             <Link to={`/movies/${index}`}>{row.title} </Link>
           </td>
         </tr>
       </>
     );
   });
//   //return rows wrapped in tbody
   return <tbody>{rows}</tbody>;
};

// TABLE is our main Component
const MovieListPage = () => {
  //Import movie data and assign to movieList

  return (
    <div>
      <SearchBar />
      <p className="instructions">
        Click on the title to see the movie's details.
      </p>
      <table>
        <TableHeader />
        <TableBody data={movieData} />
      </table>
    </div>
  );
};
// }

export default MovieListPage;