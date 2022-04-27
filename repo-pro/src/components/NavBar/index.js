import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useNavigate } from "react-router-dom";


let navigate = useNavigate(); 
  

const NavBar = () => {
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/about">About</NavLink>
            <NavLink activeclassname="active" to="/search">Search</NavLink>
            <button onClick={() => navigate(-1)}>Back</button> 
        </nav>
    );
}

export default NavBar;
