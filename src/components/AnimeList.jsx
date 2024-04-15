import React from 'react'
import AnimeItem from './AnimeItem'
import './Anime.css'

function AnimeList({data}) {

  return ( 
   <div  className="books-gallery">
    {data.map(anime=><AnimeItem key={anime.id} data={anime} />)}
   </div>
  )
}

export default AnimeList