import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Show from './components/pages/Show';
import Starred from './components/pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        <div>Page Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
