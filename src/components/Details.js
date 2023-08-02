import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useNavigate } from 'react-router-dom'


const Details = () => {
  const { details }=useContext(GlobalContext);
  const navigate=useNavigate();
  const handleClick=()=>{
    localStorage.clear();
    navigate("/")
    window.location.reload();    }
  return (
    
    <div className='details'>
      
      {details.map((movie)=>
      (
      
        <div className='poster-wrapper'>
        <img src={`http://images.tmdb.org./t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`}/>
        <h1>{movie.title}</h1>
        <h4 className='release-date'>{movie.release_date ? movie.release_date.substring(0,4): "-"}</h4>
          <h4 className='imdb'>
            IMDB: <b>{movie.vote_average?movie.vote_average:"-"}</b>
          </h4>
          <button onClick={handleClick}>Log out</button>
        </div>

        
        
      )) }</div>
  )
}

export default Details