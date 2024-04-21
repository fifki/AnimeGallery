import React, { useState } from 'react'
import './Modal.css'
import DefaultImage from '../assets/anonym.png'

const AddAnime = ({setOpen,addAnime}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [baseImage, setBaseImage] = useState();

    function addNewAnime(){   
        const newAnime = {
            id:Date.now(),
            name,
            rating,
            image:baseImage ? baseImage[0] :  DefaultImage,
            description,
            type:['action']
        }
        if(newAnime.name){
          addAnime(newAnime);
        }
      
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                if (fileReader.result) {
                    resolve(fileReader.result.toString());
                }
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onFileUpload = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const name = e.target.files[0].name;
            const base64 = await convertBase64(e.target.files[0]);
            setBaseImage([base64, name]);
        }
    };

  return (
    <div className='modal'>
      <div className='modal_container'>
          <div className='form'>
            <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="number" name="rating" placeholder='Rating' value={rating} onChange={(e)=>setRating(e.target.value)} max={5} />
            <input
                            id="file-input"
                            type="file"
                            name="courseImages"
                            onChange={onFileUpload}
                            accept="image/png, image/gif,image/jpg, image/jpeg"
                        />
            <div>
                    {baseImage && (
                        <img
                            src={baseImage[0]}
                            alt={baseImage[1]}
                            style={{
                                maxWidth: "200px",
                                maxHeight: "200px",
                            }}
                        />
                    )}
                </div>
            <textarea  name="description" placeholder='description...' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div className='modal_action'>
            <button className='btn btn-danger' onClick={()=>setOpen(false)}>Cancel</button>
            <button className='btn btn-primary' onClick={addNewAnime}>Add Anime</button>
            </div>
          </div>
      </div>
    </div>

  )
}

export default AddAnime