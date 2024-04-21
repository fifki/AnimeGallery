import React, { useState } from 'react'
import './Anime.css'
import DeleteAnime from './DeleteAnime';
import EditAnime from './EditAnime';


function AnimeItem({data,deleteAnime,editAnime}) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
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
        <button className='btn btn-danger' onClick={()=>setOpenModalDelete(true)}>
         delete 
        </button>
    <button className='btn btn-primary' onClick={()=>setOpenModalEdit(true)}>
        edit 
    </button>

      </div>
    </div>
    {openModalDelete ? <DeleteAnime setOpen={setOpenModalDelete} animeId={data.id} deleteAnime={deleteAnime}/>: <></>}
    {openModalEdit ? <EditAnime setOpen={setOpenModalEdit} anime={data} editAnime={editAnime}/>: <></>}
  </div>
  )
}

export default AnimeItem