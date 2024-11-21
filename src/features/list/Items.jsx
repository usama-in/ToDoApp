import React ,{useState} from 'react'
import CheckBox from './CheckBox'
import './items.css'
import DeleteButton from './DeleteButton'
import Edit from './Edit'

const Items = ({items ,deleted}) => {
    const [done , setDone]=useState(false)
    
   

    

  return (

    <div className={done ? 'items check' : 'items' }>  

        <li>{items}</li> 
        <div className='delete'>
        <CheckBox  check={setDone}/>
        
        {done && <DeleteButton deleted={deleted} item={items} />}
        </div>
      

        </div>
  )
}

export default Items