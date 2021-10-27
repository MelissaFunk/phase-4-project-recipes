import './App.css';
import { useState } from 'react'
import React, { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import Discover from './components/Discover' 
import RecipeDetails from './components/RecipeDetails' 
import MyRecipes from './components/MyRecipes' // Favorite Recipes (front or back end?) 
import Login from './components/Login'

function App() {
  const [currentRecipe, setCurrentRecipe] = useState([])

  return (
    <div>
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
    </div>
  );
}

export default App;
