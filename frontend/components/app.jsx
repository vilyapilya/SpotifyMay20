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
import BookCreateContainer from './audiobooks_components/book_create_container';
import BookEditContainer from './audiobooks_components/book_edit_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Player from './player';



const App = () => (
  <div className="outer">
    <Player></Player>
    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <ProtectedRoute exact path="/audiobooks" component={BooksIndexContainer} />
      <ProtectedRoute exact path="/audiobooks/:bookId" component={BookShowContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={FrontDoorContainer} />
      <Route exact path="/create" component={ BookCreateContainer }/>
      <Route path="/audiobooks/:bookId/edit" component={BookEditContainer}/>
    </Switch>
 </div>
);

export default App;
