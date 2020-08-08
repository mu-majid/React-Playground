import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// <a> causes full page(App) reload and all redux data are wiped out.
const pageOne = () => {
  return  (
    <div>
      Page pageOne
      BAD NAVIGATION
      <a href="/pagetwo" >Navigate to page two</a>
    </div>
  );
}

const pageTwo = () => {
  return  (
    <div>
      Page pageTwo
      BAD NAVIGATION

      <a href="/" >Navigate to page one</a>
    </div>
  );
}

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne}></Route>
          <Route path="/pageTwo" exact component={pageTwo}></Route>
          
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;