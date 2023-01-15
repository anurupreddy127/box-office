import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Show from './components/pages/Show';
import Starred from './components/pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route exact path="/show/:showId">
          <Show />
        </Route>
        <Route>
          <div>Page Not Found</div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
