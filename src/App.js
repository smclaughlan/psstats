import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import CharacterPage from './components/CharacterPage';
import OutfitPage from './components/OutfitPage';
import LeaderboardPage from './components/LeaderboardPage';
import VehiclePage from './components/VehiclePage';
import ClassPage from './components/ClassPage';
import FactionPage from './components/FactionPage';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/factions" component={FactionPage} />
        <Route path="/classes" component={ClassPage} />
        <Route path="/vehicles" component={VehiclePage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/outfit/:id" component={OutfitPage} />
        <Route path="/char/:id" component={CharacterPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
