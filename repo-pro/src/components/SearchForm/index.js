import React, { useState } from 'react';
/* this getResult not linked to actions as it is a prop? */
import Result from '../Result';
import './style.css';

function SearchForm() {
    const [ user, setUser ] = useState("")
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.user.value;
        setUser(input);
        e.target.user.value = ""
    }

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit} aria-label="form">
                    <input id='searchEntry' type='text' name="user" placeholder='search user here' aria-label="user"/>
                    <input id='formSubmitButton' type='submit' value="submit"></input>
                </form>
            </div>

            <Result username={user}/>
        </>
    )
};

export default SearchForm;

