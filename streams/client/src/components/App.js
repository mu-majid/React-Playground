import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams//StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// <a> causes full page(App) reload and all redux data are wiped out.
// Note there are other router like HashRouter, MemoryRouter, and browserRouter (depend on server the app is deployed on).
// (most servers=> check resources, then check public dir, if no route return 404, but react dev server return index.html)



const App = (props) => {
  return (
    <div className="ui container">
      {/* BrowserRouter uses History object inernally to know what path we are viweing now */}
      <Router history={history}>
        <div>
          <Header />

          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
          <Route path="/streams/show" exact component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  )
}

export default App;