import React from 'react'
import AnimeItem from './AnimeItem'
import './Anime.css'

function AnimeList({data, deleteAnime,editAnime}) {

  return ( 
   <div  className="animes-gallery">
    {data.map(anime=><AnimeItem key={anime.id} data={anime} deleteAnime={deleteAnime} editAnime={editAnime}/>)}
   </div>
  )
}

export default AnimeList