import React from 'react';
import Accordion from './components/Accordion';


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

function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
