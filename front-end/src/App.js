import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/Index.js';
import Login from './components/Login';
import Discover from './components/Discover'; // This is Recipe Container
import RecipeDetails from './components/RecipeDetails'; // Recipe#Show
import MyRecipes from './components/MyRecipes'; // Favorite Recipes (front or back end?)
import Home from "./components/Home"; // Top5 Recipes


function App() {
  const [currentRecipe, setCurrentRecipe] = useState([])
  
  return (
    <div>
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home setCurrentRecipe={setCurrentRecipe} /></Route>
        <Route exact path="/discover">
          <Discover setCurrentRecipe={setCurrentRecipe}/></Route>
        <Route exact path="/discover/details">
          <RecipeDetails recipe={currentRecipe} /></Route>
        <Route exact path="/my-recipes">
          <MyRecipes /></Route>
        <Route exact path="/login">
          <Login /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
