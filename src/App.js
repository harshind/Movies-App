import React,{useEffect,useState} from 'react';

import Movie from "./components/Movie";

const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df2a18503eedd23f8004851927fc2b65&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=df2a18503eedd23f8004851927fc2b65&query="
function App() {
  const [movies, setMovies]= useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const getMovies =(API)=>{
    fetch(API)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        setMovies(data.results);
      });
  }

  useEffect(()=>{
    getMovies(FEATURED_API);
  },[])
  const handleOnSubmit =(e)=>{
    e.preventDefault();
    if(searchTerm){
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("")
    }
  }

  const handleOnChange =(e)=>{
    setSearchTerm(e.target.value)
  }

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input 
          type="search" 
          placeholder="Search..." 
          className="search"
          value ={searchTerm}
          onChange ={handleOnChange}
        />
      </form> 
    </header>
    <div className="movie-container">
     {movies.length >0 && movies.map(movie=>{
       return <Movie key={movie.id} {...movie}/>
     })}
    </div>
    </>
  );
}

export default App;
