import useFetch from "../useFetch";

import React from 'react';

const Result = ({ username }) => {
 
  const { data: repos, isLoading } = useFetch(`https://api.github.com/users/${username}/repos`);
  return (
        <div className="repo-data">
            { isLoading && <div>Loading...</div>}
            { repos && repos.map((result) => (
                <div key={result.id}>
                <h3>{result.name}</h3>
                <p>Description: {result.description}</p>
                <p>Forks = {result.forks_count}</p>
                <p>Watchers = {result.watchers_count}</p>
                <p>Created at {result.created_at.slice(0, 10)}</p>
                <p>Last updated_at {result.updated_at.slice(0,10)}</p>
                <p>Clone here: <a href={result.clone_url}>{result.clone_url}</a></p>
            </div>
            ))}
        </div>
      
  )
}

export default Result;
