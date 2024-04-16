import React, { useState } from 'react'
import './Modal.css'
const AddAnime = ({animes,setAnimes,setOpen}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');


    function newAnime(){
        const toAdd = {
            id:Date.now(),
            name,
            rating,
            image,
            description,
            type:['action']
        }
        if(toAdd.name){

          setAnimes([...animes,toAdd])
          setOpen(false)
        }
      
    }

  return (
    <div className='modal'>
      <div className='modal_container'>
          <div className='form'>
            <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="number" name="rating" placeholder='Rating' value={rating} onChange={(e)=>setRating(e.target.value)}/>
            <input type="text" name="image" placeholder='image' value={image} onChange={(e)=>setImage(e.target.value)}/>
            <input type="file" />
            <textarea  name="description" placeholder='description...' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div className='modal_action'>
            <button className='btn btn-danger' onClick={()=>setOpen(false)}>Cancel</button>
            <button className='btn btn-primary' onClick={newAnime}>Add Anime</button>
            </div>
          </div>
      </div>
    </div>

  )
}

export default AddAnime