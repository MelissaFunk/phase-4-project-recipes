import './App.css';
import { useEffect, useState } from 'react'
import React, { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Discover from './components/Discover' // This is Recipe Container
import RecipeDetails from './components/RecipeDetails' // Recipe#Show
import MyRecipes from './components/MyRecipes' // Favorite Recipes (front or back end?)
import Home from "./components/Home" // Top5 Recipes

function App() {
  const [recipes, setRecipes] = useState([])
  const [currentRecipe, setCurrentRecipe] = useState([])

  useEffect(() => {
    fetch("/recipes")
    .then(res => res.json())
    .then(setRecipes)
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home recipes={recipes} setRecipes={setRecipes}/></Route>
        <Route exact path="/discover">
          <Discover setCurrentRecipe={setCurrentRecipe} recipes={recipes}/></Route>
        <Route exact path="/discover/details">
          <RecipeDetails recipe={currentRecipe}/></Route>
        <Route exact path="/my-recipes">
          <MyRecipes /></Route>
        <Route exact path="/login">
          <Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
