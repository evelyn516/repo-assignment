import React, { useState } from 'react';
/* this getResult not linked to actions as it is a prop? */

function SearchForm({ getResult }) {
    const [ user, setUser ] = useState("")
   
    const handleSubmit = (e) => {
        e.preventDefault();
        getResult(user);
    }

    const updateInput = (e) => {
        const input = e.target.value 
        setUser(input);
    }

    return (
        <>
        <form onSubmit={handleSubmit} aria-label="form">
            <input id='searchEntry' onChange={updateInput} type='text' placeholder='search user here' aria-label="user"/>
            <input id='formSubmitButton' type='submit' value="Search"/>          
            
        </form>
        </>
    )
};

export default SearchForm;

