import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';


const items = [
  {
    title: ' What Is Angular ?',
    content: 'It is a Javascript front-end framework.'
  },
  {
    title: 'What is Nodejs',
    content: 'It is a Javascript Runtime Environment intended to run avascript on the server.'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  }, {
    label: 'The Color Blue',
    value: 'blue'
  }
]

function App() {
  const [selected, setSelection] = useState(options[0]);
  return (
    <div className="App">
      <Route path="/">
        <Accordion items={items} />
      </Route>
      
      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelection}
          label={'Select a Color'}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

    </div>
  );
}

export default App;
