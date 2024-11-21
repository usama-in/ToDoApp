import React from 'react'
import './items.css'

const DeleteButton = ({deleted, item}) => {

    const deleteItem=()=>{
        console.log(item);
        deleted(item);
        
    }
  return (
    <div className='deletebutton'>
        <button
    onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default DeleteButton