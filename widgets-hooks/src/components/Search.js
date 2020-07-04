import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const WIKIPEDIA_BASE_URL = 'https://en.wikipedia.org/w/api.php';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {

    const search = async () => {
      const { data } = await Axios.get(WIKIPEDIA_BASE_URL, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResults(data.query.search);
    }
    
    // throttle, when we do search
    const timeOutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 750);

    // cleanup function
    return () => {
      clearTimeout(timeOutId);
    }

  }, [term]);

  const redneredResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
            className="ui button"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          >
          Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Your Search Term: </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{redneredResults}</div>
    </div>
  )
}

export default Search;