import React, { useState } from 'react';
/* this getResult not linked to actions as it is a prop? */

function SearchForm({ getResult }) {
   
    const handleSubmit = e => {
    }
    
    const input = e.target.value {

    }

    return (
        <>
        <form>
            <input id='searchEntry' type='text' placeholder='search user here' label="user"/>
            <input id='formSubmitButton' type='submit' value="Search"/>
        </form>
        </>
    )
};

export default SearchForm;

