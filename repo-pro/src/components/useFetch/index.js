import React, { useEffect, useState } from 'react'

const FetchData = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {

      const abortContent = new AbortController();  
      fetch(url, { signal: abortContent.signal })
      .then(resp => {
          if (!resp.ok) {
              throw Error(`Could not fetch data`)
          }
          return resp.json()
      })
      .then(data => {
          setData(data);
          setIsLoading(false);
          setError(null);
      })
      .catch(error => {
          if (error.name === 'AbortError') {
              console.log('fetch aborted')
          } else {
              setIsLoading(false);
              setError(error.message)
          };
      });

      return () => abortContent.abort();

      
  }, [url])

  return { data, isLoading, error };
};

export default FetchData;
