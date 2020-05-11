import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <h1>Hello world!</h1>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
