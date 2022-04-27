import useFetch from "../useFetch";
import "./style.css";

import React from 'react';

const Result = ({ username }) => {
 
  const { data: repos, isLoading } = useFetch(`https://api.github.com/users/${username}/repos`);
  return (
        <div className="repo-data">
            { isLoading && <div>Loading...</div>}
            { repos && <h1 id="username">User: {username}</h1>}
            { repos && <h2 id="click">Click to view a repo</h2>}
            { repos && repos.map((result) => (
              
                <div className="repo-show" key={result.id}>
                <a href={`https://github.com/${username}/${result.name}`} target="_blank" rel="noreferrer">
                <h3>{result.name}</h3>
                <p>Description: {result.description}</p>
                <p>Forks: {result.forks_count}</p>
                <p>Watchers: {result.watchers_count}</p>
                <p>Created: {result.created_at.slice(0, 10)}</p>
                <p>Last updated: {result.updated_at.slice(0,10)}</p>
                </a>
            </div>
            
            ))}
        </div>
      
  )
}

export default Result;
