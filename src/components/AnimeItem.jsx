import React from 'react'
import './Anime.css'


function AnimeItem({data}) {
  return (
    <div>
    <div className="card">
      <div className="card__header">
        <img src={data.image} alt={data.name} />
      </div>
      <a href="#" className="card__body">
        <div className="card__description">
          <h4>{data.name}</h4>
          <p className="text-secondary">{data.description}</p>
          <p className="text-secondary">  {data.rating}</p>
        </div>

      </a>
      <div className="card__action">
        <button className='btn btn-danger'>
         delete 
        </button>
    <button className='btn btn-primary'>
        edit 
    </button>

      </div>
    </div>
  </div>
  )
}

export default AnimeItem