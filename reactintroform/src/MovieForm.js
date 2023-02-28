import React, { useState } from 'react';

const MovieForm =() =>{
    
    const [title, setTitle] = useState ("");
    const [actors, setActors] = useState ("");
    const [plot, setPlot] = useState ("");
    const [genre, setGenre] = useState ("");
    const [imdbRating, setIMDBRating] = useState ("");
    const [director, setDirector] = useState ("");
    const [year, setYear] = useState ("");
    const [dateAdded, setDateAdded] = useState (new Date());
    const [newEntry, setEntry]= useState([]);


    const onFormSubmit =(e)=>{
        e.preventDefault();
        const newData ={
            title,
            actors,
            plot,
            genre,
            imdbRating,
            director,
            year,
            dateAdded: setDateAdded
        }
        setEntry([...newEntry, newData]);
        setTitle("");
        setActors("");
        setPlot("");
        setGenre("");
        setIMDBRating("");
        setDateAdded("");
        setDirector("");
        setYear("");
    }
    newEntry.map((row) => {
        return (
            <tr >
            <td>{row.title}</td>
            <td>{row.actors}</td>
            <td>{row.plot}</td>
            <td>{row.imdbRating}</td>
            <td>{row.director}</td>
            <td>{row.year}</td>
            <td>{row.dateAdded}</td>
          </tr>
        )
      })
    

    return(     
        <form onSubmit={onFormSubmit}>
                <label htmlFor="title">Title :</label>
                <input
                    type="text" 
                    id="title" 
                    name="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    /><br/>
                <label htmlFor="actors">Actors:</label>
                <input 
                    type="text" 
                    id="actors" 
                    name="actors"
                    value={actors} 
                    onChange={(e)=>setActors(e.target.value)}
                    /><br/>
                <label htmlFor="plot">Plot:</label>
                    <input 
                    type="text" 
                    id="plot" 
                    name ="plot"
                    value={plot} 
                    onChange={(e)=>setPlot(e.target.value)}
                    /><br/>
            <label htmlFor="genre">Genre:</label>
                    <input 
                    type="genre" 
                    id="genre" 
                    name ="genre"
                    value={genre} 
                    onChange={(e)=>setGenre(e.target.value)}
                    /><br/>
              <label htmlFor="imdbRating">imdbRating:</label>
                    <input 
                    type="imdbRating" 
                    id="imdbRating" 
                    name ="imdbRating"
                    value={imdbRating} 
                    onChange={(e)=>setIMDBRating(e.target.value)}
                    /><br/>
              <label htmlFor="director">Director:</label>
                    <input 
                    type="director" 
                    id="director" 
                    name ="director"
                    value={director} 
                    onChange={(e)=>setDirector(e.target.value)}
                    /><br/>
              <label htmlFor="year">Year:</label>
                    <input 
                    type="year" 
                    id="year" 
                    name ="year"
                    value={year} 
                    onChange={(e)=>setYear(e.target.value)}
                    /><br/>
                <button type="submit">Submit</button>
            </form>

    )
}

export default MovieForm
