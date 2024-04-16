import React, { useState } from 'react'
import AnimeList from '../components/AnimeList'
import AddAnime from '../components/AddAnime'
import naruto from '../assets/naruto.webp';
import hunter from '../assets/hunter.webp';
import cyberpunk from '../assets/cyberpunk.webp';

const Main = () => {
    const [openModal, setOpenModal] = useState(false);
    const [animes,setAnimes] = useState([
        {
            id:1,
            name:'Naruto',
            image: naruto,
            description:'Ninja',
            rating:5,
            type:['action','drama']
        },
        {
            id:2,
            name:'cyberpunk',
            image:cyberpunk,
            description:'gangstar',
            rating:4,
            type:['fiction','action']
        },
        {
            id:3,
            name:'Hunter ',
            image:hunter,
            description:'compitetion',
            rating:4,
            type:['drama','action']
        },

    ])
    function addAnime (){
        setOpenModal(true)
    }
  return (

  <div>
        <button className='btn btn-primary' onClick={addAnime}>Add Anime</button>
        <AnimeList data={animes} />
       { openModal ? <AddAnime animes={animes} setAnimes={setAnimes} setOpen={setOpenModal}/>:<></>}
    </div>
  )
}

export default Main