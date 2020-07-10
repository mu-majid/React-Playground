import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2';

const Convert = ({ selectedLanguage, term }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {

    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }
  }, [term]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(GOOGLE_TRANSLATE_URL, {}, {
        params: {
          q: term,
          target: selectedLanguage.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });

      setTranslatedText(data.data.translations[0].translatedText)
    }

    doTranslation();

  }, [debouncedTerm, selectedLanguage]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
}

export default Convert;