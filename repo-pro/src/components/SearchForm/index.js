import React, { useState } from 'react';
/* this getResult not linked to actions as it is a prop? */
import Result from '../Result';

function SearchForm() {
    const [ user, setUser ] = useState("")
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.user.value;
        setUser(input);
    }

    return (
        <>
        <form onSubmit={handleSubmit} aria-label="form">
            <input id='searchEntry' type='text' name="user" placeholder='search user here' aria-label="user"/>
            <input id='formSubmitButton' type='submit' value="Search"/> 
        </form>

        <Result username={user}/>
        </>
    )
};

export default SearchForm;

