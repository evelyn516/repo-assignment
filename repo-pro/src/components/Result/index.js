import FetchData from "../FetchData";

import React, { useState } from 'react'

const Result = () => {

  const [username, setUsername] = useState('evelyn516');  
  const { data: repos, isLoading, error } = FetchData(`https://api.github.com/users/${username}/repos`);
  return (
        <div className="repo-data">
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { repos && repos.map((result) => (
                <div id={result.id}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <p>forks = {result.forks_count}</p>
                <p>watchers = {result.watchers_count}</p>
                <p>created at {result.created_at}</p>
                <p>updated_at {result.updated_at}</p>
                <p>clone here: {result.clone_url}</p>
            </div>
            ))}
        </div>
      
  )
}

export default Result;
