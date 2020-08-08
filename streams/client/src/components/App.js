import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


// <a> causes full page(App) reload and all redux data are wiped out.
const pageOne = () => {
  return  (
    <div>
      Page pageOne
      BAD NAVIGATION
      <Link to="/pagetwo" >Navigate to page two</Link>
    </div>
  );
}

const pageTwo = () => {
  return  (
    <div>
      Page pageTwo
      BAD NAVIGATION

      <Link to="/" >Navigate to page one</Link>
    </div>
  );
}

// Note there are other router like HashRouter, MemoryRouter, and browserRouter

const App = (props) => {
  return (
    <div>
      {/* BrowserRouter uses History object inernally to know what path we are viweing now */}
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