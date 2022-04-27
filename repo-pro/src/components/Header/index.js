import React from 'react'
import './style.css'

function Header() {
  return (
    <div>
        <header>
            <h1 id='Title'>Repo Tracker</h1>
            <button id='dark'>Dark Mode</button>
            <button id='light'>Light Mode</button>
        </header>
    </div>
  )
}

export default Header
