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

    function addAnime (newAnime){
        setAnimes([...animes,newAnime])
        setOpenModal(false)
    }
    function deleteAnime(id){
        setAnimes(animes.filter(anime=>anime.id !== id));
    }
    function editAnime(editedAnime){
        console.log(editedAnime);
        setAnimes(animes.map(anime=> {
            if(anime.id === editedAnime.id){
                return editedAnime
            }
            return anime;
        }))
        
    }
  return (

  <div>
        <button className='btn btn-primary' onClick={()=> setOpenModal(true)}>Add Anime</button>
        <AnimeList data={animes} deleteAnime={deleteAnime} editAnime={editAnime}/>
       { openModal ? <AddAnime addAnime={addAnime} setOpen={setOpenModal}/>:<></>}
    </div>
  )
}

export default Main