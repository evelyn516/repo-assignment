import React from 'react'

function Home() {
  return (
    <div>
        <header>
            <h1 id='Title'>Repo Tracker</h1>
            <button id='dark'>Dark Mode</button>
            <button id='light'>Light Mode</button>
        </header>
        <form id='searchRepo'>
            <imput type='text' placeholder='search repo' id='formEntry'></imput>
            <imput type='submit' id='s/button'>search</imput>
        </form>
    </div>
  )
}

export default Home
