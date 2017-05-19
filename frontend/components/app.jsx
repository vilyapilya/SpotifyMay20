import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting_components/greeting_container';
import SessionFormContainer from './session_components/SessionFormContainer.js';
import FrontDoorContainer from './front_door_container'
import BooksIndexContainer from './audiobooks_components/books_index_container';
import BookShowContainer from './audiobooks_components/book_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="outer">
    <div className="top">
      <GreetingContainer />
      <Link to="/frontdoor" className="header-link">
           <h1>Home</h1>
      </Link>
    </div>
    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <ProtectedRoute exact path="/audiobooks" component={BooksIndexContainer} />
      <Route exact path="/audiobooks/:bookId" component={BookShowContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <Route exact path="/frontdoor" component={FrontDoorContainer} />
    </Switch>
 </div>
);

export default App;
