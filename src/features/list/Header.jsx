import React from 'react'
import './header.css'

const Header = () => {
    let date = new Date();
    let today = date.getFullYear() + '-' +( date.getMonth()+1)  + '-' + date.getDate();
    console.log(today)
  return (
    <div className='header'>
        <h1>Welcome to TODO App</h1>
        <p>Today Date is <span style={{color:'yellow'}}>{today}</span></p>
        <p>What will you do today!</p>
    </div>
  )
}

export default Header