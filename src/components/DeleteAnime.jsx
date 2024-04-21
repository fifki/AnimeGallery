import React from 'react'

function DeleteAnime({setOpen, animeId,deleteAnime}) {

    function cancelDel(){
        setOpen(false);
    }

  return (
    <div className='modal'>
        <div className='modal_container'>
            <p> Do you really want to delete this anime </p>
            <div>
                <button className='btn btn-danger' onClick={()=>deleteAnime(animeId) } > Delete </button>
                <button className='btn btn-primary' onClick={cancelDel }> Cancel </button>
            </div>

        </div>
    </div>
  )
}

export default DeleteAnime