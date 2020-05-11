import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import CharacterPage from './components/CharacterPage';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/char/:id" component={CharacterPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
