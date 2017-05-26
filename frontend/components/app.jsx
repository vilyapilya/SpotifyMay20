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
import PlayerContainer from './player_container';
import FriendsContainer from './friends_components/friends_container';


const App = () => (
  <div className="outer">

    <PlayerContainer></PlayerContainer>
    <Switch>
      <ProtectedRoute exact path={"/audiobooks/:userId/friends"} component={FriendsContainer}/>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <ProtectedRoute exact path="/audiobooks/:userId" component={BooksIndexContainer} />
      <ProtectedRoute exact path="/audiobooks/:userId/:bookId" component={BookShowContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={FrontDoorContainer} />
      <Route exact path="/create" component={ BookCreateContainer }/>
      <Route exact path="/audiobooks/:userId/:bookId/edit" component={BookEditContainer}/>
    </Switch>
 </div>
);

export default App;
