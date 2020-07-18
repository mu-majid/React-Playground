import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
const KEY = 'AIzaSyAWZgrYucQxjZDaZpbkug3Wx5JQazMWH6I';


const useVideos = (defaultTerm) => {
  const [vids, setVids] = useState([]);

  // run only one time when the component first renders
  useEffect(() => {
    searchFor(defaultTerm);
  }, [defaultTerm]);

  const searchFor = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    });

    setVids(data.items);
  }

  return [vids, searchFor];
}

export default useVideos;
