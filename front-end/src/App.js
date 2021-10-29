import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react'
import NavBar from './components/NavBar/Index.js';
import Login from './components/Login';
import Discover from './components/Discover'; // This is Recipe Container
import RecipeDetails from './components/RecipeDetails'; // Recipe#Show
import MyRecipes from './components/MyRecipes'; // Favorite Recipes (front or back end?)
import Home from "./components/Home"; // Top5 Recipes

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div>
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home /></Route>
        <Route exact path="/discover">
          <Discover /></Route>
        <Route exact path="/discover/:id">
        <RecipeDetails /></Route>
        <Route exact path="/my-recipes">
          <MyRecipes user={currentUser}/></Route>
        <Route exact path="/login">
         <Login setCurrentUser={setCurrentUser} /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
