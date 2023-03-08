import React from "react";

/*
create two simple function components to make
our table code more readable
*/

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
    return (
        <thead>
              <tr>
                <th>title</th>
                <th>actors</th>
                <th>plot</th>
                <th>genre</th>
                <th>imdbRating</th>
                <th>director</th>
                <th>year</th>
                <th>dateAdded</th>
              </tr>
            </thead>
    );
}

//TABLE BODY SIMPLE COMPONENT 
const TableBody = (props) => {
    const rows = props.data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.actors}</td>
          <td>{row.plot}</td>
          <td>{row.imdbRating}</td>
          <td>{row.director}</td>
          <td>{row.year}</td>
          <td>{row.dateAdded}</td>
          <td><button onClick={() => props.removeMovie(index)}> Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
  }
// TABLE is our main Component
const Table =(props)=>{
  const { 
    movies,
    removeMovie
  } = props

        return (
          <table>
            <TableHeader/>
            <TableBody 
              data={movies} 
              removeMovie={removeMovie}
             />
          </table>
        )

}

export default Table
