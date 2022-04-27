import React from 'react'
import './style.css';

function Header() {
  return (
    <div>
        <header>
          <div className='flexbox-container'>
            <h1 className='title'>Repo Tracker</h1>
            <button className='light push'>Light Mode</button>
            <button className='dark '>Dark Mode</button>
          </div>  
        </header>
    </div>
  )
}

export default Header
