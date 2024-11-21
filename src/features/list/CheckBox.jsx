import React from 'react'
import './checkbox.css'
import DeleteButton from './DeleteButton'
const CheckBox = ({check}) => {

    const checkBox=(event)=>{
        check(event.target.checked)
    
      
    }
    
   
    
  return (
    <div className='check'><input type='checkbox'
    className='checkbox'
    onChange={checkBox} />
    </div>

  )
}

export default CheckBox