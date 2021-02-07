import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const WIKIPEDIA_BASE_URL = 'https://en.wikipedia.org/w/api.php';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // we did not search in the onChange handler, to decouple the search API call trigger from that specifc event
  // Maybe we select a category after writing term or whatever. 

  // watch term, and update debouncedTerm after a DEBOUNCE 500ms.
  useEffect(() => {

    // throttling update, so we delay debouncedTerm update, hence delaying the request when user stop typing for some time
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    // cancel previous timed update for `debounedTerm`
    return () => {
      clearTimeout(timerId);
    }
  }, [term]);

  useEffect(() => {

    const search = async () => {
      const { data } = await Axios.get(WIKIPEDIA_BASE_URL, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(data.query.search);
    }
    search();

  }, [debouncedTerm]);

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
  );
}

export default Search;