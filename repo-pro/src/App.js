import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, About, Search } from './pages';


function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/search" element={<Search /> }/>
                </Routes>
            </main>
        </div>
    )
}


export default App;



