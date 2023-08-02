import React, { useState } from 'react'
import ResultCart from './ResultCart';



const Add = () => {
    const [query,setQuery]=  useState("");
    const [results,setResults]= useState([]);
    
    function onChange(e){
        setQuery(e.target.value);

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:`${process.env.REACT_APP_TMDB_KEY}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}`, options)
            .then(response => response.json())
            .then(response => {
                if(!response.errors){
                    setResults(response.results)}
                else{
                    setResults([]);
                } 
            })
            
            
    }
  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <img src='https://media.istockphoto.com/id/689889676/tr/foto%C4%9Fraf/lens-flare-siyah-arka-plan.jpg?s=1024x1024&w=is&k=20&c=p_IHHiPymsngRF-U2Du_xkJ-EDPdv12HOSPikSzVzcI=' height={350} />
                <div className='titles'>
                    <h1>Hoş Geldiniz</h1>
                    <h2>-</h2>
                    
                </div>
                
                <div className='input-wrapper'>
                    <input type='text' value={query} onChange={onChange} placeholder='Film,dizi,kişi'  autoFocus="true"/>
                    
                    <button color='blue' >ara</button>
                    
                    
                </div>
                
                
               {results.length > 0 &&(
                <ul className='results'>
                    {results.map((movie)=> (
                    <li key={movie.id}>
                        <ResultCart movie={movie} />
                    </li>
                    ))}
                </ul>
               )}
                
                
            </div>
        </div>
    </div>
  )
}

export default Add