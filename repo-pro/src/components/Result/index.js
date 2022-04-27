import useFetch from "../useFetch";
import "./style.css"

import React from 'react';

const Result = ({ username }) => {
 
  const { data: repos, isLoading } = useFetch(`https://api.github.com/users/${username}/repos`);
  return (
        <div className="repo-data">
            { isLoading && <div>Loading...</div>}
            { repos && repos.map((result) => (
                <div id={result.id}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <p>forks = {result.forks_count}</p>
                <p>watchers = {result.watchers_count}</p>
                <p>created at {result.created_at.slice(0, 10)}</p>
                <p>updated_at {result.updated_at.slice(0,10)}</p>
                <p>clone here: <a href={result.clone_url}>{result.clone_url}</a></p>
            </div>
            ))}
        </div>
      
  )
}

export default Result;
