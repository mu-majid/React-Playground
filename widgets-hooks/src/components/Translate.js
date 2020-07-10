import React, { useState } from 'react';
import DropDown from './Dropdown';
import Convert from './Convert';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const languages = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
  {
    label: 'Arabic',
    value: 'ar'
  }
]

const Translate = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [term, setTerm] = useState('Hello');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Text To Translate: </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <DropDown options={languages} selected={selectedLanguage} onSelectChange={setSelectedLanguage} label={'Select A Language'} />
      <hr></hr>
      <h3 className="ui  header">Output: </h3>
      <Convert selectedLanguage={selectedLanguage} term={term} />
    </div>
  );
}

export default Translate;