import React ,{ useState } from 'react'
import Form from './features/form/Form'
import Header from './features/list/Header'


import './App.css'
import ListItem from './features/list/ListItem'
import DeletedItems from './DeletedItems'


function App() {
  const [receivedData , setReceivedData]=useState([])
 const [doneTask, setDoneTask] = useState([])

  const data=(data)=>{
    setReceivedData( (prev)=>[data,...prev])
  }
  const newData=(data)=>{
    setReceivedData((prev)=>prev.filter(value=>value!==data))
    setDoneTask((prev)=> [data ,...prev])
  }
 
  
 
  
  
  

  return (
    <div className='alpha'> 
    <Header />
      <Form receiveData={data}/>
      <ListItem data={receivedData} deleted={newData}  />
     <DeletedItems deletedValues={doneTask} />
    </div>
  )
}

export default App
