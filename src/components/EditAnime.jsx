import React, { useState } from 'react'
import './Modal.css'
const EditAnime = ({anime,setOpen,editAnime}) => {
    const [name, setName] = useState(anime.name);
    const [rating, setRating] = useState(anime.rating);
    const [image] = useState(anime.image);
    const [description, setDescription] = useState(anime.description);

    const [baseImage, setBaseImage] = useState();

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

    function handleEditAnime(anime){
      const editedAnime = {
        id:anime.id,
        name,
        rating,
        image : baseImage ? baseImage[0]: image,
        description,
        type:['action']
    }
      editAnime(editedAnime);
      setOpen(false);
    }

  return (
    <div className='modal'>
      <div className='modal_container'>
          <div className='form'>
            <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="number" name="rating" placeholder='Rating' value={rating} onChange={(e)=>setRating(e.target.value)}/>
            <input
                            id="file-input"
                            type="file"
                            name="courseImages"
                            onChange={onFileUpload}
                            accept="image/png, image/gif,image/jpg, image/jpeg"
                        />
            <div>
                    {baseImage ? (
                        <img
                            src={baseImage[0]}
                            alt={name}
                            style={{
                                maxWidth: "200px",
                                maxHeight: "200px",
                            }}
                        />
                    ):( <img
                    src={image}
                    alt={name}
                    style={{
                        maxWidth: "200px",
                        maxHeight: "200px",
                    }}
                />)}
                </div>
            <textarea  name="description" placeholder='description...' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div className='modal_action'>
            <button className='btn btn-danger' onClick={()=>setOpen(false)}>Cancel</button>
            <button className='btn btn-primary' onClick={()=>handleEditAnime(anime)}>Edit Anime</button>
            </div>
          </div>
      </div>
    </div>

  )
}

export default EditAnime