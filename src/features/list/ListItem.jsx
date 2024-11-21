import React from 'react'
import './listitem.css'
import Items from './Items'


const ListItem = ({data , deleted}) => {
  
  return (
    <div className='listitem'>
        <ul> 
            {data.map((item)=><Items items={item} key={item} deleted={deleted}/>)} </ul>
       
        </div>
  )
}

export default ListItem