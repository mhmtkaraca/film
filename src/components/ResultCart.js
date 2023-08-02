import React, { useContext } from 'react'

import {Link} from 'react-router-dom'


import { GlobalContext } from '../context/GlobalState';






const ResultCart = ({movie}) => {
  const { detailsOn } = useContext(GlobalContext);

  return (
    <div className='result-card'>
      
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
        </div>
        <div className='controls'>
        <Link to="/details">
          <button className='btn' onClick={
            
              ()=>detailsOn(movie)
              
          }>Details
         
          </button></Link>
        </div>
      </div>

    </div>
  )
}

export default ResultCart