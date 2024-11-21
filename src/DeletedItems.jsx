import React from 'react'

const DeletedItems = ({deletedValues}) => {
  return (
    <div>
        <h1>Tasks you have done</h1>
        <ul>
           
                {deletedValues.map(item=> <li>{item}</li>)}
            
        </ul>
    </div>
  )
}

export default DeletedItems